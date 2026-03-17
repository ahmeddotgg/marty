"use client"

import { useForm } from "@tanstack/react-form"
import { Search, Shapes } from "lucide-react"
import * as z from "zod"
import { Button } from "../ui/button"
import { Field } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select"

const formSchema = z.object({
  query: z.string().min(3).max(100),
  type: z.string()
})
const items = [
  { label: "اختر النوع", value: "" },
  { label: "مطاعم", value: "restaurant" },
  { label: "مشروبات", value: "drinks" },
  { label: "سوبر ماركت", value: "supermarket" },
  { label: "صيدلية", value: "pharmacy" },
  { label: "مخبوزات", value: "bakery" },
  { label: "جزارة", value: "butcher" }
]

export default function SearchForm() {
  const form = useForm({
    defaultValues: {
      query: "",
      type: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: ({ value }) => {
      console.log(value)
    }
  })

  return (
    <div className="wrapper mb-8 sm:-translate-y-14">
      <div className="mx-auto max-w-2xl rounded-full bg-background p-2 shadow-2xl shadow-amber-500/30 dark:bg-slate-900 dark:shadow-amber-500/10">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="flex gap-2 sm:gap-4"
        >
          <form.Field
            name="query"
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <InputGroup className="rounded-full bg-accent px-2">
                    <InputGroupInput
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="ابحث عن منتج أو متجر"
                      className="text-sm"
                    />
                    <InputGroupAddon align="inline-start" className="p-0">
                      <Search className="size-4.5 text-primary" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              )
            }}
          />
          <form.Field
            name="type"
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field
                  data-invalid={isInvalid}
                  className="hidden max-w-32 min-[450px]:block"
                >
                  <Select
                    items={items}
                    name={field.name}
                    value={field.state.value}
                    onValueChange={(value) => field.handleChange(value ?? "")}
                  >
                    <SelectTrigger
                      className="rounded-full bg-accent"
                      aria-invalid={isInvalid}
                    >
                      <Shapes className="size-4.5 text-primary" />
                      <SelectValue placeholder="اختر النوع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {items.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              )
            }}
          />

          <Button type="submit" className="rounded-full" size="sm">
            ابحث
          </Button>
        </form>
      </div>
    </div>
  )
}
