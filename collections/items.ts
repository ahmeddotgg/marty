import { CollectionConfig } from "payload"

export const Items: CollectionConfig = {
  slug: "items",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: "store",
      type: "relationship",
      relationTo: "stores",
      required: true
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "menu_categories",
      required: true,
      filterOptions: ({ data }) => {
        if (!data?.store) return false

        return {
          store: {
            equals: data.store
          },
          isAvailable: {
            equals: true
          }
        }
      },
      admin: {
        condition: (_, siblingData) => !!siblingData?.store,
        placeholder: "Select store first"
      }
    },
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Main image for the item"
      }
    },
    {
      name: "pricingType",
      type: "select",
      required: true,
      options: [
        { label: "Fixed Price", value: "fixed" },
        { label: "Sizes (S/M/L)", value: "sizes" },
        { label: "Weight Based", value: "weight" }
      ]
    },
    {
      name: "price",
      type: "number",
      admin: {
        condition: (_, siblingData) => siblingData?.pricingType === "fixed"
      }
    },
    {
      name: "sizes",
      type: "group",
      admin: {
        condition: (_, siblingData) => siblingData?.pricingType === "sizes"
      },
      fields: [
        { name: "S", type: "number", label: "Small (S) Price", required: true },
        { name: "M", type: "number", label: "Medium (M) Price", required: true },
        { name: "L", type: "number", label: "Large (L) Price", required: true }
      ]
    },

    // 🔹 Weight-Based Pricing
    {
      name: "weightUnit",
      type: "select",
      options: [
        { label: "Gram", value: "gram" },
        { label: "Kilogram", value: "kg" }
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.pricingType === "weight"
      }
    },
    {
      name: "pricePerUnit",
      type: "number",
      admin: {
        condition: (_, siblingData) => siblingData?.pricingType === "weight"
      }
    },

    // Optional type fields for restaurant / drinks
    {
      name: "foodType",
      type: "select",
      admin: {
        condition: (data) => data?.store?.storeType === "restaurant"
      },
      options: [
        { label: "Pizza", value: "pizza" },
        { label: "Burger", value: "burger" },
        { label: "Fried Chicken", value: "fried_chicken" },
        { label: "Grilled", value: "grilled" },
        { label: "Egyptian", value: "egyptian" },
        { label: "Pasta", value: "pasta" },
        { label: "Seafood", value: "seafood" },
        { label: "Sandwiches", value: "sandwiches" },
        { label: "Shawarma", value: "shawarma" },
        { label: "Asian", value: "asian" },
        { label: "Desserts", value: "desserts" },
        { label: "Other", value: "other" }
      ]
    },
    {
      name: "drinkType",
      type: "select",
      options: [
        { label: "Hot", value: "hot" },
        { label: "Cold", value: "cold" },
        { label: "Juice", value: "juice" },
        { label: "Soft Drink", value: "soft" }
      ],
      admin: {
        condition: (data) => data?.store?.storeType === "drinks"
      }
    },

    {
      name: "isAvailable",
      type: "checkbox",
      defaultValue: true
    }
  ],
  timestamps: true
}
