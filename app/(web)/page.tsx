import BestStores from "@/components/shared/best-stores"
import CtaButtons from "@/components/shared/cta-buttons"
import Footer from "@/components/shared/footer"
import OfferSlider from "@/components/shared/offers-slider"
import Preview from "@/components/shared/preview"
import SearchForm from "@/components/shared/search-form"

export default function Home() {
  return (
    <div>
      <OfferSlider />
      <SearchForm />
      <BestStores />
      <div className="bg-accent dark:bg-slate-900">
        <Preview />
      </div>
      <div className="bg-background dark:bg-slate-950">
        <CtaButtons />
      </div>
      <div className="bg-accent dark:bg-slate-900">
        <Footer />
      </div>
    </div>
  )
}
