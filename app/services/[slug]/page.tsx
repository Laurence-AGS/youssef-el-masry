import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check, MessageCircle, Zap } from 'lucide-react'
import { getService, services, whatsappUrl } from '@/lib/services'
import { Noto_Sans_Arabic } from 'next/font/google'

const arabicFont = Noto_Sans_Arabic({ subsets: ['arabic'], display: 'swap' })

const arabicServiceCopy: Record<string, { title: string; description: string; intro: string; types: string[] }> = {
  'electrical-works': { title: 'أعمال كهربائية متكاملة', description: 'تركيبات كهربائية آمنة وموثوقة بأعلى معايير الجودة والسلامة.', intro: 'من التركيبات الجديدة إلى التحديثات والصيانة، نتولى كل تفصيلة كهربائية بالعناية التي يستحقها عقارك.', types: ['أعمال كهربائية سكنية', 'أعمال كهربائية تجارية', 'أعمال كهربائية صناعية', 'الصيانة والتحديثات الكهربائية'] },
  'smart-homes': { title: 'المنازل الذكية', description: 'أنظمة ذكية تجمع الراحة والأمان والتحكم في تجربة واحدة سهلة.', intro: 'نصمم أنظمة المنزل الذكي حول أسلوب حياتك، لتتحكم بسهولة في الإضاءة والمناخ والترفيه والأمان.', types: ['مشاهد الإضاءة والمزاج', 'التحكم في المناخ والستائر', 'السينما المنزلية والصوت', 'الأمان والدخول الذكي'] },
  'network-infrastructure': { title: 'البنية التحتية للشبكات', description: 'شبكات منظمة لاتصال سريع وآمن وموثوق في كل مساحة.', intro: 'الشبكة القوية هي أساس كل بيئة ذكية. نخطط وننفذ بنية منظمة تعمل اليوم وتتوسع غدًا.', types: ['شبكات البيانات والإنترنت', 'أنظمة كاميرات المراقبة', 'التمديدات المنظمة', 'الشبكات اللاسلكية الآمنة'] },
  'ceiling-systems': { title: 'أنظمة الأسقف', description: 'إضاءة معمارية وحلول أسقف تمنح كل غرفة طابعًا متكاملًا.', intro: 'من الإضاءة المخفية إلى تفاصيل الجبس بورد النظيفة، نجمع بين الدقة التقنية والتشطيب الراقي.', types: ['أسقف الجبس بورد', 'الإضاءة المخفية وإضاءة التجاويف', 'تصميم الإضاءة الزخرفية', 'التركيب والتشطيب الاحترافي'] },
  'control-panels': { title: 'لوحات التحكم', description: 'لوحات أتمتة وتحكم احترافية للحماية والوضوح والأداء.', intro: 'نبني ونركب لوحات تحكم تحافظ على تنظيم أنظمتك وحمايتها وسهولة تشغيلها.', types: ['لوحات التحكم الآلي', 'لوحات تحكم المحركات', 'أنظمة الحماية', 'لوحات التشغيل والمراقبة'] },
  'smart-compounds': { title: 'المجمعات والمنشآت الذكية', description: 'بنية متصلة للمجمعات والجامعات والشركات التي تحتاج للعمل بذكاء.', intro: 'نربط الأنظمة خلف العقارات الكبيرة لتصبح أكثر أمانًا وأسهل في الإدارة وأكثر كفاءة لكل مستخدميها.', types: ['المراقبة والإدارة المركزية', 'التحكم في البوابات والدخول', 'إدارة الطاقة', 'أتمتة الجامعات والمنشآت'] },
}

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  return { title: service ? `${service.title} | Youssef El Masry` : 'Service | Youssef El Masry', description: service?.description }
}

export default async function ServicePage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const { slug } = await params
  const { lang } = await searchParams
  const isArabic = lang === 'ar'
  const service = getService(slug)
  if (!service) return <main className="grid min-h-screen place-items-center bg-[#f4f1eb] text-[#112b35]"><p>Service not found.</p></main>
  const Icon = service.icon
  const localized = isArabic ? arabicServiceCopy[slug] : null
  const copy = localized ?? service

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} style={isArabic ? { fontFamily: arabicFont.style.fontFamily } : undefined} className="min-h-screen bg-[#f4f1eb] text-[#112b35]">
      <header className="absolute inset-x-0 top-0 z-20"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10"><Link href="/" className="flex items-center gap-3" aria-label="Youssef El Masry home"><span className="flex size-[76px] items-center justify-center rounded-full bg-[#f4f1eb] p-1 shadow-sm sm:size-[84px]"><Image src="/images/youssef-symbol-logo.png" alt="Youssef El Masry logo" width={76} height={76} className="size-full object-contain" priority /></span><span className="font-serif text-xl font-semibold tracking-tight text-white">Youssef <span className="font-normal text-[#d7a65d]">El Masry</span></span></Link><div className="flex items-center gap-4"><Link href={`/services/${slug}${isArabic ? '' : '?lang=ar'}`} className="rounded-full border border-white/35 px-4 py-2 text-xs font-semibold text-white" aria-label={isArabic ? 'التبديل إلى الإنجليزية' : 'Switch to Arabic'}>{isArabic ? 'English' : 'العربية'}</Link><Link href={`/?lang=${isArabic ? 'ar' : 'en'}#services`} className="flex items-center gap-2 text-sm text-white/80 hover:text-[#d7a65d]"><ArrowLeft /> {isArabic ? 'كل الخدمات' : 'All services'}</Link></div></div></header>
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#112b35]"><Image src={service.image} alt={`${service.title} installation`} fill priority className="object-cover opacity-55" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,43,53,.98),rgba(17,43,53,.55),rgba(17,43,53,.18))]" /><div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-10"><div className="max-w-3xl"><div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.28em] text-[#d7a65d]"><Icon /> {service.number} / {isArabic ? 'الخدمة' : 'Service'}</div><h1 className="font-serif text-5xl leading-[.98] tracking-[-.04em] text-white sm:text-7xl">{copy.title}</h1><p className="mt-8 max-w-xl text-lg leading-8 text-white/70">{copy.description}</p></div></div></section>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-32"><div><p className="section-label">{isArabic ? 'نهج مدروس' : 'A considered approach'}</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">{isArabic ? 'مصمم حول' : 'Designed around'}<br /><span className="text-[#ad7e3c]">{isArabic ? 'ما يهم.' : 'what matters.'}</span></h2><p className="mt-7 max-w-md text-lg leading-8 text-[#4f6061]">{copy.intro}</p></div><div className="rounded-2xl bg-[#e8e3da] p-8 sm:p-10"><p className="section-label">{isArabic ? 'الحلول المتاحة' : 'Available solutions'}</p><ul className="mt-8 flex flex-col gap-5">{copy.types.map((type) => <li key={type} className="flex items-start gap-4 border-b border-[#112b35]/10 pb-5 text-lg"><Check className="mt-1 shrink-0 text-[#ad7e3c]" />{type}</li>)}</ul></div></section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-label">{isArabic ? 'من موقع العمل' : 'From the field'}</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">{isArabic ? 'عمل يتحدث عن نف��ه.' : 'Work that speaks for itself.'}</h2></div><p className="max-w-sm text-sm leading-6 text-[#4f6061]">{isArabic ? 'لمحة عن الدقة والعناية والتشطيب وراء تركيباتنا.' : 'A glimpse at the detail, care and finish behind our installations.'}</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{service.gallery.map((image, index) => <figure key={image} className={`group relative overflow-hidden rounded-2xl bg-[#e8e3da] ${index === 0 ? 'sm:col-span-2 sm:aspect-[16/9] lg:col-span-2' : 'aspect-[4/3]'}`}><img src={image} alt={`${service.title} project detail ${index + 1}`} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /></figure>)}</div></section>
      <section className="bg-[#112b35] px-6 py-20 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><p className="section-label text-[#d7a65d]">{isArabic ? 'نحن جاهزون' : 'Ready when you are'}</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">{isArabic ? 'لنخطط له بشكل صحيح.' : 'Let&apos;s plan it properly.'}</h2></div><a href={whatsappUrl(`Hello Mr. Youssef, I would like to enquire about ${service.title}.`)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d7a65d] px-6 py-3.5 text-sm font-semibold text-[#112b35]">{isArabic ? 'ابدأ عبر واتساب' : 'Start on WhatsApp'} <MessageCircle /></a></div></section>
      <footer className="bg-[#0c2028] px-6 py-10 text-white/50 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 text-xs sm:flex-row sm:items-end"><div className="flex items-center gap-4"><span className="flex size-[72px] items-center justify-center rounded-full bg-[#f4f1eb] p-1 shadow-sm"><Image src="/images/youssef-symbol-logo.png" alt="Youssef El Masry logo" width={64} height={64} className="size-full object-contain" /></span><p>© 2026 Youssef El Masry Electrical Systems</p></div><Link href={`/?lang=${isArabic ? 'ar' : 'en'}`} className="flex items-center gap-2 hover:text-white">{isArabic ? 'العودة للرئيسية' : 'Back home'} <ArrowUpRight /></Link></div></footer>
    </main>
  )
}
