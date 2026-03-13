import { CollectionConfig } from "payload"

export const Branches: CollectionConfig = {
  slug: "branches",
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
      name: "address",
      type: "text"
    },
    {
      name: "city",
      type: "text"
    },
    {
      name: "mapsUrl",
      type: "text"
    },

    {
      name: "phones",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          admin: {
            placeholder: "branch / cashier / delivery"
          }
        },
        {
          name: "number",
          type: "text"
        }
      ]
    },

    {
      name: "workingHours",
      type: "group",
      required: true,
      fields: [
        {
          name: "open",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "timeOnly",
              displayFormat: "h:mm:ss a"
            }
          }
        },
        {
          name: "close",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "timeOnly",
              displayFormat: "h:mm:ss a"
            }
          }
        }
      ]
    },

    {
      name: "isAvailable",
      type: "checkbox",
      defaultValue: true
    }
  ],
  timestamps: true
}
