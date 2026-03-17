import Image from "next/image"
import { payload } from "@/lib/payload"
import { Media } from "@/payload-types"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const store = await payload.find({
    collection: "stores",
    where: {
      slug: {
        equals: String(slug)
      }
    }
  })
  const logo = store.docs[0].logo as Media

  return (
    <div className="wrapper space-y-4 py-16">
      <p>{store.docs[0].name}</p>
      {logo.url && (
        <Image
          src={logo.url}
          alt={store.docs[0].name}
          width={Number(logo.width)}
          height={Number(logo.height)}
          className="block aspect-square w-full max-w-32 rounded-full border-4 border-foreground"
        />
      )}
    </div>
  )
}
