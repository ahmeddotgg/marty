import { postgresAdapter } from "@payloadcms/db-postgres"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import path from "path"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"
import { Branches } from "./collections/branches"
import { Items } from "./collections/items"
import { Media } from "./collections/Media"
import { MenuCategories } from "./collections/menu_categories"
import { Offers } from "./collections/offers"
import { Stores } from "./collections/stores"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [Media, Stores, Branches, MenuCategories, Items, Offers],
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN
    })
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ""
    }
  }),
  sharp
})
