import { TabletSmartphone } from "lucide-react"
import Image from "next/image"

export default function Preview() {
  return (
    <div className="wrapper space-y-18 py-32">
      <h2 className="flex items-center justify-center gap-3 text-3xl font-bold">
        <span>أستكشف التطبيق</span>
        <TabletSmartphone className="size-8" />
      </h2>
      <ul className="overflow-hidden rounded-lg bg-background shadow-2xl sm:flex sm:items-center dark:bg-slate-950">
        <li className="bg-primary sm:basis-1/2">
          <Image
            src="/app/screen_1.webp"
            alt="app preview 1"
            width={722}
            height={1440}
            className="mx-auto max-w-45 sm:max-w-62"
          />
        </li>
        <li className="p-4 sm:basis-1/2">
          <h2 className="mb-3 line-clamp-2 text-3xl leading-14 font-bold">
            🍔 كل اللي محتاجه... <br /> في مكان واحد
          </h2>
          <p>مطاعم، ماركت، وصيدليات - كله حواليك</p>
          <ul className="mt-8 list-disc space-y-3 ps-5 text-sm text-muted-foreground">
            <li>اكتشف أشهر الأماكن في مدينتك بسهولة</li>
            <li>تنوع كبير يناسب كل احتياجاتك اليومية</li>
            <li>تجربة تصفح سريعة وبسيطة</li>
          </ul>
        </li>
      </ul>

      <ul className="flex flex-col-reverse overflow-hidden rounded-lg bg-background shadow-2xl sm:flex-row sm:items-center dark:bg-slate-950">
        <li className="p-4 sm:basis-1/2">
          <h2 className="mb-3 line-clamp-2 text-3xl leading-14 font-bold">
            🚀 أسرع طريقة لطلباتك اليومية
          </h2>
          <p>مش أكل بس - كل خدماتك هنا</p>
          <ul className="mt-8 list-disc space-y-3 ps-5 text-sm text-muted-foreground">
            <li>اطلب من المطاعم، السوبر ماركت، والصيدليات</li>
            <li>خدمات إضافية زي طلب مندوب</li>
            <li>كل حاجة توصلك لحد باب البيت</li>
          </ul>
        </li>
        <li className="bg-primary sm:basis-1/2">
          <Image
            src="/app/screen_3.webp"
            alt="app preview 3"
            width={722}
            height={1440}
            className="ms-auto max-w-45 sm:max-w-62"
          />
        </li>
      </ul>

      <ul className="overflow-hidden rounded-lg bg-background shadow-2xl sm:flex sm:items-center dark:bg-slate-950">
        <li className="bg-primary sm:basis-1/2">
          <Image
            src="/app/screen_2.webp"
            alt="app preview 2"
            width={722}
            height={1440}
            className="me-auto max-w-45 sm:max-w-62"
          />
        </li>
        <li className="p-4 sm:basis-1/2">
          <h2 className="mb-3 line-clamp-2 text-3xl leading-14 font-bold">
            ✨ تجربة سهلة وسريعة
          </h2>
          <p>اطلب في ثواني من غير تعقيد</p>
          <ul className="mt-8 list-disc space-y-3 ps-5 text-sm text-muted-foreground">
            <li>تصميم بسيط وسهل الاستخدام</li>
            <li>وصول سريع لأي حاجة محتاجها</li>
            <li>تجربة مريحة من أول ضغطة</li>
          </ul>
        </li>
      </ul>

      <ul className="flex flex-col-reverse overflow-hidden rounded-lg bg-background shadow-2xl sm:flex-row sm:items-center dark:bg-slate-950">
        <li className="p-4 sm:basis-1/2">
          <h2 className="mb-3 line-clamp-2 text-3xl leading-14 font-bold">
            🎁 هدايا يومية ليك
          </h2>
          <p>كل يوم في حاجة جديدة مستنياك</p>
          <ul className="mt-8 list-disc space-y-3 ps-5 text-sm text-muted-foreground">
            <li>استمتع بهدايا وعروض مجانية بشكل مستمر</li>
            <li>مفاجآت يومية مع طلباتك</li>
            <li>فرص تكسب أكتر كل ما تستخدم الأبلكيشن</li>
          </ul>
        </li>
        <li className="bg-primary sm:basis-1/2">
          <Image
            src="/app/screen_4.webp"
            alt="app preview 4"
            width={722}
            height={1440}
            className="me-auto max-w-45 sm:max-w-62"
          />
        </li>
      </ul>
    </div>
  )
}
