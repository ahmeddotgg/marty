import { Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle
} from "@/components/ui/item"
import { payload } from "@/lib/payload"
import { Media } from "@/payload-types"

export default async function BestStores() {
  const stores = await payload.find({
    collection: "stores",
    limit: 16
  })

  return (
    <div className="bg-accent py-32 dark:bg-slate-950">
      <div className="wrapper space-y-12">
        <h2 className="flex items-center justify-center gap-3 text-3xl font-bold">
          <span>تصفح أفضل المتاجر</span>
          <Store className="size-8" />
        </h2>
        <ScrollArea className="flex w-full whitespace-nowrap" dir="rtl">
          <div className="mb-4 w-full space-x-4">
            <Button className="h-fit flex-col p-3 px-5" variant="outline">
              <Image src="/icons/meal.webp" alt="food 3d icon" width={80} height={80} />
              <p className="font-semibold">مطاعم</p>
            </Button>
            <Button className="h-fit flex-col p-3 px-5" variant="outline">
              <Image src="/icons/cups.webp" alt="food 3d icon" width={80} height={80} />
              <p className="font-semibold">مشروبات</p>
            </Button>
            <Button className="h-fit flex-col p-3 px-5" variant="outline">
              <Image src="/icons/bakery.webp" alt="food 3d icon" width={80} height={80} />
              <p className="font-semibold">مخبوزات</p>
            </Button>
            <Button className="h-fit flex-col p-3 px-5" variant="outline">
              <Image
                src="/icons/shopping.png"
                alt="grocery 3d icon"
                width={80}
                height={80}
              />
              <p className="font-semibold">ماركت</p>
            </Button>
            <Button className="h-fit flex-col p-3 px-5" variant="outline">
              <Image src="/icons/meat.png" alt="grocery 3d icon" width={80} height={80} />
              <p className="font-semibold">جزارة</p>
            </Button>
            <Button className="h-fit flex-col p-3 px-5" variant="outline">
              <Image
                src="/icons/medicine.png"
                alt="grocery 3d icon"
                width={80}
                height={80}
              />
              <p className="font-semibold">صيدليات</p>
            </Button>
          </div>
          <ScrollBar orientation="horizontal" className="" />
        </ScrollArea>

        <div className="grid grid-cols-1 gap-3 min-[567px]:grid-cols-2 lg:grid-cols-3">
          {stores.docs.map((store) => {
            const logo = store.logo as Media
            const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
            return (
              <ItemGroup
                key={store.name}
                className="transition-transform hover:-translate-y-1"
              >
                <Item
                  variant="outline"
                  className="border-2 border-primary/60 bg-background shadow-sm dark:bg-accent"
                  role="listitem"
                  render={
                    <Link href={`/stores/${store.slug}`} key={store.id}>
                      <ItemMedia variant="image" className="size-28">
                        {logo.url && (
                          <Image
                            src={`${baseUrl}${logo.url}`}
                            alt={store.name}
                            width={Number(logo.width)}
                            height={Number(logo.height)}
                            className="aspect-square w-full object-cover"
                          />
                        )}
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle className="line-clamp-1 text-lg font-semibold">
                          {store.name}
                        </ItemTitle>
                        <ItemDescription className="line-clamp-1">
                          {store.description}
                        </ItemDescription>
                      </ItemContent>
                    </Link>
                  }
                />
              </ItemGroup>
            )
          })}
        </div>
      </div>
    </div>
  )
}
