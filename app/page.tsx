'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Menu,
  MessageCircle,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react'
import { services } from '@/lib/services'
import { Noto_Sans_Arabic } from 'next/font/google'

const arabicFont = Noto_Sans_Arabic({ subsets: ['arabic'], display: 'swap' })

const arabicServiceCopy: Record<string, { title: string; description: string; types: string[] }> = {
  'electrical-works': { title: 'أعمال كهربائية متكاملة', description: 'تركيبات كهربائية آمنة وموثوقة بأعلى معايير الجودة والسلامة.', types: ['أعمال كهربائية سكنية', 'أعمال كهربائية تجارية', 'أعمال كهربائية صناعية'] },
  'smart-homes': { title: 'المنازل الذكية', description: 'أنظمة ذكية تجمع الراحة والأمان والتحكم في تجربة واحدة سهلة.', types: ['مشاهد الإضاءة', 'التحكم في المناخ والستائر', 'السينما المنزلية والصوت'] },
  'network-infrastructure': { title: 'البنية التحتية للشبكات', description: 'شبكات منظمة لاتصال سريع وآمن وموثوق في كل مساحة.', types: ['شبكات البيانات والإنترنت', 'أنظمة كاميرات المراقبة', 'التمديدات المنظمة'] },
  'ceiling-systems': { title: 'أنظمة الأسقف', description: 'إضاءة معمارية وحلول أسقف تمنح كل غرفة طابعًا متكاملًا.', types: ['أسقف الجبس بورد', 'الإضاءة المخفية', 'تصميم الإضاءة الزخرفية'] },
  'control-panels': { title: 'لوحات التحكم', description: 'لوحات أتمتة وتحكم احترافية للحماية والوضوح والأداء.', types: ['لوحات التحكم الآلي', 'لوحات تحكم المحركات', 'أنظمة الحماية'] },
  'smart-compounds': { title: 'المجمعات والمنشآت الذكية', description: 'بنية متصلة للمجمعات والجامعات والشركات التي تحتاج للعمل بذكاء.', types: ['المراقبة والإدارة المركزية', 'التحكم في البوابات', 'إدارة الطاقة'] },
}

const projects = [
  { title: 'Main distribution and control panels', type: 'Electrical works', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2011.17.56%20PM%20%281%29-LS69fq0rkQprhu0NmiYcVmA6XtrysO.jpeg' },
  { title: 'Fiber optic star ceiling installation', type: 'Smart lighting', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2011.17.59%20PM%20%281%29-zKPwQbTIoBg88sLzLyFrhvRS8SiKv0.jpeg' },
  { title: 'Electrical infrastructure in progress', type: 'Complete electrical works', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2011.18.00%20PM%20%283%29-krb3pguUKGz1EgjkPRAapK3aRs2nHd.jpeg' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const [isArabic, setIsArabic] = useState(() => searchParams.get('lang') === 'ar')

  function toggleLanguage() {
    const nextIsArabic = !isArabic
    setIsArabic(nextIsArabic)
    window.history.replaceState(null, '', nextIsArabic ? '/?lang=ar' : '/')
  }

  const text = isArabic ? {
    services: 'الخدمات', work: 'أعمال مختارة', approach: 'نهجنا', start: 'ابدأ مشروعًا',
    eyebrow: 'حلول كهربائية ذكية', heroTitle: 'تكنولوجيا،', heroAccent: 'بلمسة إنسانية.',
    heroBody: 'نصمم وننفذ أنظمة كهربائية ذكية للمنازل والمجمعات والجامعات والشركات في جميع أنحاء ليبيا.',
    tell: 'حدثنا عن مشروعك', explore: 'استكشف أعمالنا', scroll: 'مرر لاكتشاف المزيد',
    standard: 'المعيار الذي نعمل به', quiet: 'ذكاء هادئ.', precise: 'تنفيذ دقيق.',
    approachBody: 'أفضل تقنية هي التي لا تضطر للتفكير فيها. نجمع بين الهندسة الكهربائية الموثوقة والأتمتة المدروسة لنصنع مساحات تعمل ببساطة.', years: 'سنوات من الخبرة', care: 'عناية متكاملة بالمشروع',
    what: 'ماذا نقدم', vision: 'رؤية واحدة متصلة.', details: 'من أول محادثة وحتى التركيب النهائي، نهتم بكل تفصيلة ونعتني بها.', view: 'عرض الخدمة',
    selected: 'أعمال مختارة', real: 'مصممة للحياة اليومية.', discuss: 'ناقش مشروعك',
    conversation: 'لنبدأ محادثة', smarter: 'لنجعل مساحتك أذكى.', contactBody: 'أخبرنا بما تخطط لبنائه. اختر بعض التفاصيل وسنعود إليك بالخطوة التالية المناسبة.', whatsapp: 'واتساب أولًا، وبلمسة إنسانية دائمًا.',
    name: 'اسمك', phone: 'رقم واتساب', enquire: 'أرغب في الاستفسار عن', property: 'نوع العقار', location: 'موقع المشروع', send: 'إرسال عبر واتساب',
    namePlaceholder: 'محمد حسن', phonePlaceholder: '01X XXX XXXX', choose: 'اختر', smartHome: 'المنزل الذكي', compound: 'مجمع سكني ذكي', business: 'شركة أو جامعة', consultation: 'استشارة كهربائية', newBuild: 'مبنى جديد', existing: 'عقار قائم', development: 'تطوير / مجمع',
    footer: 'ذكي بتصميمه. صُمم ليدوم.'
  } : {
    services: 'Services', work: 'Selected work', approach: 'Our approach', start: 'Start a project', eyebrow: 'Intelligent electrical living', heroTitle: 'Technology,', heroAccent: 'made human.', heroBody: 'We design and deliver smart electrical systems for homes, compounds, universities and businesses across Libya.', tell: 'Tell us about your project', explore: 'Explore our work', scroll: 'Scroll to discover', standard: 'The standard we work by', quiet: 'Quietly intelligent.', precise: 'Precisely delivered.', approachBody: 'The best technology is the technology you do not have to think about. We combine reliable electrical engineering with thoughtful automation to create spaces that simply work.', years: 'years of experience', care: 'project care', what: 'What we do', vision: 'One connected vision.', details: 'From the first conversation to final installation, every detail is considered and cared for.', view: 'View service', selected: 'Selected work', real: 'Built for real life.', discuss: 'Discuss your project', conversation: 'Start a conversation', smarter: 'Let’s make your space smarter.', contactBody: 'Tell us what you are building. Select a few details below and we will get back to you with the right next step.', whatsapp: 'WhatsApp-first, always human.', name: 'Your name', phone: 'WhatsApp number', enquire: 'I’m enquiring about', property: 'Property type', location: 'Project location', send: 'Send via WhatsApp', namePlaceholder: 'Mohamed Hassan', phonePlaceholder: '01X XXX XXXX', choose: 'Select', smartHome: 'Smart home', compound: 'Smart compound', business: 'Business or university', consultation: 'Electrical consultation', newBuild: 'New build', existing: 'Existing property', development: 'Development / compound', footer: 'Smart by design. Built to last.'
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const selectedService = services.find((service) => service.slug === form.get('service'))
    const serviceName = isArabic ? arabicServiceCopy[selectedService?.slug ?? '']?.title ?? '' : selectedService?.title ?? ''
    const property = String(form.get('property') ?? '')
    const name = String(form.get('name') ?? '')
    const phone = String(form.get('phone') ?? '')
    const message = isArabic
      ? `مرحبًا أستاذ يوسف، أرغب في الاستفسار عن خدمة ${serviceName} لعقار من نوع ${property}. اسمي ${name} ويمكن التواصل معي على الرقم ${phone}.`
      : `Hello Mr. Youssef, I would like to enquire about ${serviceName} for a ${property}. My name is ${name} and you can reach me on ${phone}.`
    setSubmitted(true)
    window.open(`https://wa.me/218912071456?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className={`min-h-screen overflow-hidden bg-[#f4f1eb] text-[#112b35] ${isArabic ? arabicFont.className : ''}`}>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Youssef El Masry home">
<span className="flex size-[76px] items-center justify-center overflow-hidden rounded-full bg-[#f4f1eb] p-1 shadow-sm sm:size-[84px]"><Image src="/images/youssef-symbol-logo.png" alt="Youssef El Masry logo" width={76} height={76} className="size-full scale-[1.35] object-contain" priority /></span>
            <span className="font-serif text-xl font-semibold tracking-tight text-white">Youssef <span className="font-normal text-[#d7a65d]">El Masry</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-white/75 lg:flex" aria-label="Main navigation">
            <a href="#services" className="transition-colors hover:text-[#d7a65d]">{text.services}</a>
            <a href="#work" className="transition-colors hover:text-[#d7a65d]">{text.work}</a>
            <a href="#approach" className="transition-colors hover:text-[#d7a65d]">{text.approach}</a>
            <a href="#contact" className="rounded-full border border-white/30 px-5 py-2.5 text-white transition-colors hover:border-[#d7a65d] hover:text-[#d7a65d]">{text.start}</a>
          </nav>
          <div className="flex items-center gap-4"><button onClick={toggleLanguage} className="rounded-full border border-white/35 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#d7a65d] hover:text-[#d7a65d]" aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>{isArabic ? 'English' : 'العربية'}</button><button className="text-white lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          </div>
        </div>
        {menuOpen && <nav className="mx-4 flex flex-col gap-4 rounded-2xl bg-[#112b35] p-6 text-white lg:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>{text.services}</a><a href="#work" onClick={() => setMenuOpen(false)}>{text.work}</a><a href="#contact" onClick={() => setMenuOpen(false)}>{text.start}</a></nav>}
      </header>

      <section id="top" className="relative isolate min-h-[760px] overflow-hidden bg-[#112b35]">
        <Image src="/images/electrical-hero.png" alt="Modern villa with warm smart lighting at dusk" fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,43,53,.98)_0%,rgba(17,43,53,.76)_42%,rgba(17,43,53,.22)_100%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-10 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[.28em] text-[#d7a65d]"><span className="h-px w-10 bg-[#d7a65d]" /> {text.eyebrow}</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[.98] tracking-[-.04em] text-white sm:text-7xl lg:text-[88px]">{text.heroTitle}<br /><em className="font-normal text-[#d7a65d]">{text.heroAccent}</em></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">{text.heroBody}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-[#d7a65d] px-6 py-3.5 text-sm font-semibold text-[#112b35] transition-transform hover:-translate-y-0.5">{text.tell} <ArrowUpRight data-icon="inline-end" /></a><a href="#work" className="text-sm text-white/80 underline decoration-white/30 underline-offset-8 hover:text-white">{text.explore}</a></div>
          </div>
        </div>
        <div className="absolute bottom-8 right-10 hidden items-center gap-3 text-xs uppercase tracking-[.2em] text-white/60 lg:flex"><span className="h-8 w-px bg-white/40" /> {text.scroll}</div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:px-10 lg:py-32" id="approach">
        <div><p className="section-label">{text.standard}</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{text.quiet}<br /><span className="text-[#ad7e3c]">{text.precise}</span></h2></div>
        <div className="flex flex-col justify-end gap-7"><p className="text-lg leading-8 text-[#4f6061]">{text.approachBody}</p><div className="flex gap-8 border-t border-[#112b35]/15 pt-6 text-sm text-[#4f6061]"><span><strong className="block font-serif text-3xl text-[#112b35]">12+</strong> {text.years}</span><span><strong className="block font-serif text-3xl text-[#112b35]">360°</strong> {text.care}</span></div></div>
      </section>

      <section id="services" className="bg-[#e8e3da] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-label">{text.what}</p><h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{text.vision}</h2></div><p className="max-w-sm text-sm leading-6 text-[#4f6061]">{text.details}</p></div><div className="grid gap-px overflow-hidden rounded-2xl bg-[#112b35]/15 md:grid-cols-3">{services.map(({ slug, number, icon: Icon, title, description, types }) => { const localized = isArabic ? arabicServiceCopy[slug] : null; return <a href={`/services/${slug}${isArabic ? '?lang=ar' : ''}`} key={slug} className="group bg-[#f4f1eb] p-8 transition-colors hover:bg-[#112b35] hover:text-white sm:p-10"><div className="flex items-center justify-between"><Icon className="text-[#ad7e3c]" /><span className="font-mono text-xs text-[#4f6061]">{number}</span></div><h3 className="mt-14 font-serif text-3xl">{localized?.title ?? title}</h3><p className="mt-5 text-sm leading-6 text-[#4f6061] group-hover:text-white/65">{localized?.description ?? description}</p><ul className="mt-8 flex flex-col gap-3 border-t border-current/15 pt-6 text-xs text-[#4f6061] group-hover:text-white/65">{(localized?.types ?? types).slice(0, 3).map((type) => <li key={type} className="flex gap-2"><Check className="text-[#ad7e3c]" />{type}</li>)}</ul><span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-[#ad7e3c]">{text.view} <ArrowUpRight /></span></a>})}</div></div></section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-label">{text.selected}</p><h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{text.real}</h2></div><a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-[#ad7e3c]">{text.discuss} <ArrowUpRight data-icon="inline-end" /></a></div><div className="mt-12 grid gap-5 md:grid-cols-3">{projects.map((project, i) => <article key={project.title} className={`group ${i === 0 ? 'md:col-span-2' : ''}`}><div className={`relative overflow-hidden rounded-xl ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}><img src={project.image} alt={project.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#112b35]/80 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-xs uppercase tracking-[.2em] text-[#d7a65d]">{project.type}</p><h3 className="mt-2 font-serif text-2xl">{project.title}</h3></div></div></article>)}</div></section>

      <section id="contact" className="bg-[#112b35] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="section-label text-[#d7a65d]">{text.conversation}</p><h2 className="mt-5 font-serif text-5xl leading-tight tracking-tight sm:text-6xl">{text.smarter}</h2><p className="mt-7 max-w-md leading-7 text-white/65">{text.contactBody}</p><div className="mt-10 flex items-center gap-3 text-sm text-white/70"><MessageCircle className="text-[#d7a65d]" /> {text.whatsapp}</div></div><div className="rounded-2xl bg-[#f4f1eb] p-6 text-[#112b35] sm:p-10"><form onSubmit={handleSubmit} className="flex flex-col gap-6"><div className="grid gap-6 sm:grid-cols-2"><label className="field-label">{text.name}<input required name="name" placeholder={text.namePlaceholder} /></label><label className="field-label">{text.phone}<input required name="phone" type="tel" placeholder="01X XXX XXXX" /></label></div><div className="grid gap-6 sm:grid-cols-2"><label className="field-label">{text.enquire}<select required name="service" defaultValue=""><option value="" disabled>{text.choose} {text.services.toLowerCase()}</option>{services.map((service) => <option key={service.slug} value={service.slug}>{isArabic ? arabicServiceCopy[service.slug].title : service.title}</option>)}</select></label><label className="field-label">{text.property}<select required name="property" defaultValue=""><option value="" disabled>{text.choose} {text.property.toLowerCase()}</option><option>{text.newBuild}</option><option>{text.existing}</option><option>{text.development}</option></select></label></div><button type="submit" className="mt-2 flex items-center justify-center gap-3 rounded-full bg-[#d7a65d] px-6 py-4 text-sm font-semibold text-[#112b35] transition-transform hover:-translate-y-0.5">{submitted ? (isArabic ? 'جاري فتح واتساب…' : 'Opening WhatsApp…') : text.send} <ArrowUpRight data-icon="inline-end" /></button><p className="flex items-center justify-center gap-2 text-center text-xs text-[#4f6061]"><ShieldCheck /> Your details stay private and are only used to contact you.</p></form></div></div></section>

      <footer className="bg-[#0c2028] px-6 py-10 text-white/50 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 text-xs sm:flex-row sm:items-end"><div className="flex items-center gap-4"><span className="flex size-[72px] items-center justify-center overflow-hidden rounded-full bg-[#f4f1eb] p-1 shadow-sm"><Image src="/images/youssef-symbol-logo.png" alt="Youssef El Masry logo" width={64} height={64} className="size-full scale-[1.35] object-contain" /></span><p>© 2026 Youssef El Masry Electrical Systems</p></div><p>{text.footer}</p></div></footer>
      <a href="#contact" className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#d7a65d] text-[#112b35] shadow-xl transition-transform hover:scale-105" aria-label="Contact on WhatsApp"><MessageCircle /></a>
    </main>
  )
}

