import { CollectionConfig } from "payload"

export const Stores: CollectionConfig = {
  slug: "stores",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true
    },
    {
      name: "storeType",
      type: "select",
      required: true,
      options: [
        { label: "Restaurant", value: "restaurant" },
        { label: "Drinks", value: "drinks" },
        { label: "Supermarket", value: "supermarket" },
        { label: "Pharmacy", value: "pharmacy" },
        { label: "Bakery", value: "bakery" },
        { label: "Butcher", value: "butcher" }
      ]
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media"
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media"
    },
    {
      name: "isAvailable",
      type: "checkbox",
      defaultValue: true
    },
    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false
    }
  ],
  timestamps: true
}
