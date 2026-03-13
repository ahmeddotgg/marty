import { CollectionConfig } from "payload"

export const MenuCategories: CollectionConfig = {
  slug: "menu_categories",
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
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "displayOrder",
      type: "number",
      defaultValue: 0
    },
    {
      name: "isAvailable",
      type: "checkbox",
      defaultValue: true
    }
  ],
  timestamps: true
}
