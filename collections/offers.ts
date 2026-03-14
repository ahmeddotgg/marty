import { CollectionConfig } from "payload"

export const Offers: CollectionConfig = {
  slug: "offers",
  admin: {
    useAsTitle: "title"
  },
  fields: [
    {
      name: "title",
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
      relationTo: "media"
    },
    {
      name: "store",
      type: "relationship",
      relationTo: "stores",
      required: false,
      admin: {
        description: "Link offer to a store (optional)"
      }
    },
    {
      name: "branch",
      type: "relationship",
      relationTo: "branches",
      required: false,
      admin: {
        description: "Optional: link offer to a specific branch"
      }
    },
    {
      name: "item",
      type: "relationship",
      relationTo: "items",
      required: false,
      admin: {
        description: "Optional: link offer to a specific item"
      }
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true
    },
    {
      name: "startDate",
      type: "date"
    },
    {
      name: "endDate",
      type: "date"
    },
    {
      name: "displayOrder",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Use to sort offers in sliders"
      }
    }
  ],
  timestamps: true
}
