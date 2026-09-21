import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Quote } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logoTransparent from "@/assets/logo-transparent.png";
import aboutImg from "@/assets/about-us.jpg.asset.json";
import galleryField from "@/assets/gallery-field.jpg.asset.json";
import galleryGrooming from "@/assets/gallery-grooming.jpg.asset.json";
import galleryWalk from "@/assets/gallery-walk.jpg.asset.json";
import galleryPony from "@/assets/gallery-pony.jpg.asset.json";
import gallerySnow from "@/assets/gallery-snow.jpg.asset.json";
import galleryLesson from "@/assets/gallery-lesson.jpg.asset.json";
import galleryAgata from "@/assets/gallery-agata.jpg.asset.json";
import galleryArena from "@/assets/gallery-arena.jpg.asset.json";
import galleryPortraitHorse from "@/assets/gallery-portrait-horse.jpg.asset.json";
import galleryHug from "@/assets/gallery-hug.jpg.asset.json";
import galleryExtraOne from "@/assets/gallery-extra-one.jpg.asset.json";
import galleryExtraTwo from "@/assets/gallery-extra-two.jpg.asset.json";
import galleryLiberty from "@/assets/gallery-liberty.jpg.asset.json";
import gallerySunset from "@/assets/gallery-sunset.jpg.asset.json";
import galleryWorkshop from "@/assets/gallery-workshop.jpg.asset.json";
import galleryPortraitSmile from "@/assets/gallery-portrait-smile.jpg.asset.json";
import videoAsset from "@/assets/konie-jedza.mp4.asset.json";
import videoPoster from "@/assets/video-poster.jpg.asset.json";
import video2Asset from "@/assets/film2.mp4.asset.json";
import video2Poster from "@/assets/film2-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galopem ku tęczy — jeździectwo pełne koloru" },
      {
        name: "description",
        content:
          "Zajęcia jeździeckie, warsztaty i spotkania z końmi w radosnej, inkluzywnej atmosferze. Zobacz naszą ofertę i galerię.",
      },
      { property: "og:title", content: "Galopem ku tęczy — jeździectwo pełne koloru" },
      {
        property: "og:description",
        content: "Odważna, empatyczna praca z końmi. Zajęcia, warsztaty i obozy dla każdego.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "O nas", href: "#o-nas" },
  { label: "Oferta", href: "#oferta" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574890477695", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/galopem_ku_teczy/", Icon: Instagram },
];

const offers = [
  {
    title: "Jazdy indywidualne",
    price: "od 200 zł / 90 min",
    color: "var(--rainbow-1)",
    desc: "Spokojna praca jeden na jeden — dopasowana do Twojego poziomu, tempa i odwagi.",
    items: ["Pierwszy kontakt z koniem", "Praca nad postawą", "Jazda w terenie"],
  },
  {
    title: "Zajęcia grupowe",
    price: "od 150 zł / os.",
    color: "var(--rainbow-2)",
    desc: "Małe grupy, dużo śmiechu i wspólnego kibicowania sobie w postępach.",
    items: ["Grupy 3–5 osób", "Zajęcia na ujeżdżalni", "Stałe terminy tygodniowe"],
  },
  {
    title: "Warsztaty z końmi",
    price: "od 250 zł",
    color: "var(--rainbow-4)",
    desc: "Bez siodła i bez presji — o zaufaniu, granicach i języku ciała konia.",
    items: ["Praca z ziemi", "Warsztaty relacyjne", "Grupy i zespoły"],
  },
  {
    title: "Szkolenie Koni",
    price: "od 1200 zł / tydzień",
    color: "var(--rainbow-5)",
    desc: "Pomagamy w pracy z końmi od najmłodszych lat zwierzaczka",
    items: ["", "Opieka nad koniem", "Zajęcia twórcze"],
  },
  {
    title: "Spotkania integracyjne",
    price: "wycena indywidualna",
    color: "var(--rainbow-6)",
    desc: "Wydarzenia dla firm, szkół i grup nieformalnych — w otwartej, bezpiecznej atmosferze.",
    items: ["Program na miarę", "Do 20 osób", "Ognisko i poczęstunek"],
  },
  {
    title: "Sesje zdjęciowe",
    price: "od 400 zł",
    color: "var(--rainbow-3)",
    desc: "Twoje portrety z końmi — tęczowo, artystycznie i bez sztucznych póz.",
    items: ["1,5 h z koniem", "Wybór lokalizacji", "Obróbka 15 zdjęć"],
  },
];

const values = [
  { title: "Zgoda konia przede wszystkim", desc: "Pracujemy bez przymusu. Koń mówi „nie” — my słuchamy." },
  { title: "Miejsce dla każdego", desc: "Niezależnie od wieku, ciała, tożsamości i doświadczenia." },
  { title: "Radość ponad rywalizację", desc: "Nie liczymy pucharów. Liczymy uśmiechy i małe zwycięstwa." },
  { title: "Uczymy uważności", desc: "Konie czytają emocje — dzięki nim uczysz się siebie." },
];

const reviews = [
  {
    author: "Gosia Moszyk",
    text: "To coś innego niż jazda konna. Dziękuję dziewczynom za to, że zaprosiły nas w świat uważności i obcowania z końmi inaczej. Miałam w sobie dużo lęku i obaw, jak to będzie, a pod koniec warsztatów miałam gotowość do jasnego, przytulania i bliskiego kontaktu…",
  },
  {
    author: "Ola Jastrząbek",
    text: "Byłam w piątek u Aleks i Ani i było genialnie — bez pośpiechu, bez presji, lekko, superciekawie, w wolności. W końcu ktoś dał mi poznać konie, opowiedział o nich i ich potrzebach w inny sposób. Czuję, że już się ich nie boję i lepiej umiem z nimi współdziałać. Wyszłam tak zrelaksowana i odprężona jak rzadko kiedy.",
  },
  {
    author: "Olga Bober",
    text: "Najlepsi trenerzy, jakich poznałam! Cierpliwi, wyrozumiali i bardzo otwarci. Słuchają, czego potrzebują jeźdźcy i konie. Niesamowicie profesjonalni, ale przy tym luźni i kochani.",
  },
];

const gallery = [
  { src: galleryField.url, alt: "Konie z siodłami na łące", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryGrooming.url, alt: "Czesanie konia pod wiatą", span: "", pos: "object-center" },
  { src: galleryWalk.url, alt: "Spacer z koniem leśną ścieżką", span: "", pos: "object-center" },
  { src: galleryPony.url, alt: "Dzieci głaszczą kucyka na zajęciach", span: "sm:col-span-2", pos: "object-[center_35%]" },
  { src: gallerySnow.url, alt: "Zimowy spacer z koniem", span: "", pos: "object-[center_25%]" },
  { src: galleryLesson.url, alt: "Lekcja jazdy na ujeżdżalni", span: "", pos: "object-center" },
  { src: galleryAgata.url, alt: "Prowadzenie konia na padoku o zachodzie", span: "", pos: "object-center" },
  { src: galleryArena.url, alt: "Trening na arenie pod chmurnym niebem", span: "", pos: "object-[center_60%]" },
  { src: galleryPortraitHorse.url, alt: "Opiekunka stojąca obok ciemnego konia", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryHug.url, alt: "Przytulenie konia pod błękitnym niebem", span: "sm:col-span-2 sm:row-span-2", pos: "object-[center_72%]" },
  { src: gallerySunset.url, alt: "Spokojne spotkanie z koniem o zachodzie słońca", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryLiberty.url, alt: "Koń pracujący swobodnie na piaszczystym placu", span: "sm:col-span-2", pos: "object-center" },
  { src: galleryWorkshop.url, alt: "Warsztaty przy okrągłym wybiegu", span: "sm:row-span-2", pos: "object-center" },
  { src: galleryExtraTwo.url, alt: "Chwila bliskości z koniem", span: "sm:row-span-2", pos: "object-center" },
  { src: galleryExtraOne.url, alt: "Relacyjna praca z koniem", span: "", pos: "object-center" },
  { src: galleryPortraitSmile.url, alt: "Uśmiechnięta opiekunka podczas dnia w stajni", span: "", pos: "object-center" },
];

function Index() {
  const [sending, setSending] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  useEffect(() => {
    if (reviewsPaused) return;
    const timer = setInterval(() => {
      setReviewIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviewsPaused]);

  const sendFn = useServerFn(sendContactMessage);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await sendFn({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          topic: String(fd.get("topic") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (res.ok) {
        toast.success("Dziękujemy! Wiadomość została wysłana — odpowiemy najszybciej, jak się da.");
        form.reset();
      } else {
        toast.error("Nie udało się wysłać wiadomości. Napisz bezpośrednio na galopemkuteczy@gmail.com.");
      }
    } catch {
      toast.error("Sprawdź poprawność pól formularza i spróbuj ponownie.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logoTransparent}
              alt="Logo Galopem ku tęczy"
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="whitespace-nowrap font-display text-lg sm:text-xl">Galopem ku tęczy</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#kontakt" className="shrink-0 md:hidden">
            <Button size="sm" className="rounded-full">Kontakt</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden px-5 pt-14 pb-20 sm:pt-20">
        <div className="pointer-events-none absolute -top-40 -left-32 -z-10 h-[36rem] w-[36rem] animate-drift rounded-full bg-rainbow opacity-25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -right-40 -z-10 h-[32rem] w-[32rem] animate-drift rounded-full bg-rainbow opacity-20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="whitespace-nowrap text-5xl leading-[0.95] sm:text-6xl">
              Galopem ku tęczy
            </h1>
            <p className="mt-4 font-display text-sm font-medium uppercase tracking-[0.35em] text-primary sm:text-base">
              Relacyjne Jeżdziectwo
            </p>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Jeździectwo bez presji i bez schematów. Uczymy się od koni uważności, odwagi
              i radości — w kolorach, które nikogo nie wykluczają.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#oferta">
                <Button size="lg" className="rounded-full px-7 text-base">Zobacz ofertę</Button>
              </a>
              <a href="#kontakt">
                <Button size="lg" variant="outline" className="rounded-full border-2 px-7 text-base">
                  Zapisz się na jazdę
                </Button>
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["2/2", "różowe koniary / cudowne konie"],
                ["12 lat", "doświadczenia"],
                ["100%", "budowania relacji"],
              ].map(([k, v]) => (
                <div key={v} className="rounded-2xl border border-border bg-card p-4">
                  <dt className="font-display text-2xl text-primary">{k}</dt>
                  <dd className="mt-1 text-xs font-medium text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 -z-10 animate-drift rounded-full bg-rainbow opacity-25 blur-3xl" />
            <img
              src={logoTransparent}
              alt="Logo Galopem ku tęczy — sylwetki dziewczyny i konia"
              className="relative mx-auto w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </section>


      {/* O NAS */}
      <section id="o-nas" className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <img
              src={aboutImg.url}
              alt="Dwie opiekunki z końmi na łące o zachodzie słońca"
              className="aspect-square w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-3xl border border-border bg-card p-5 shadow-xl sm:block">
              <p className="font-display text-2xl text-primary">Bez ostrogi.</p>
              <p className="text-sm text-muted-foreground">Za to z ogromną cierpliwością.</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">O nas</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Nasza filozofia pracy z końmi
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Wierzymy, że koń nie jest sprzętem sportowym. Jest partnerem, który ma swoje
              nastroje, granice i historię. Dlatego każde zajęcia zaczynamy od rozmowy —
              z człowiekiem i z koniem.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nie ma u nas krzyku, pośpiechu ani wstydu za to, że coś nie wyszło. Jest za to
              miejsce na łzy, śmiech i pierwszy w życiu kłus. Tęcza w naszej nazwie to
              obietnica: każdy jest tu na swoim miejscu.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="rounded-2xl border-l-4 bg-card p-5 shadow-sm"
                  style={{ borderLeftColor: `var(--rainbow-${i + 1})` }}
                >
                  <h3 className="text-base">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-secondary/50 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Oferta</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Znajdź swoją drogę do koni
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Od pierwszego dotknięcia grzywy po tygodniowy obóz — wszystkie
              drogi prowadzą w to samo miejsce: do zaufania.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <article
                key={o.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ backgroundColor: o.color }}
                />
                <span
                  className="grid h-11 w-11 place-items-center rounded-2xl font-display text-lg text-primary-foreground"
                  style={{ backgroundColor: o.color }}
                  aria-hidden
                >
                  ✦
                </span>
                <h3 className="mt-5 text-xl">{o.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{o.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {o.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: o.color }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-base" style={{ color: o.color }}>
                  {o.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Galeria</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Zdjęcia i filmy
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Kadry z zajęć, treningów i zwykłej stajennej sielanki
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4">
            {gallery.map((img) => (
              <figure
                key={img.alt}
                className={`group relative overflow-hidden rounded-3xl ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`h-full w-full object-cover ${img.pos} transition-transform duration-500 group-hover:scale-105`}
                />
              </figure>
            ))}
          </div>

          <div className="mx-auto mt-4 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            <figure>
              <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-foreground/5 shadow-xl">
                <video
                  src={videoAsset.url}
                  poster={videoPoster.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs font-semibold text-muted-foreground">
                 Poranne jedzonko Płotki i Badgera :)
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-foreground/5 shadow-xl">
                <video
                  src={video2Asset.url}
                  poster={video2Poster.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs font-semibold text-muted-foreground">
                warsztaty w stajni Żabinko
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section aria-labelledby="opinie-heading" className="bg-secondary/50 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Opinie</p>
            <h2 id="opinie-heading" className="mt-3 text-4xl sm:text-5xl">
              Co mówią o nas
            </h2>
          </div>

          <div
            className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
            onMouseEnter={() => setReviewsPaused(true)}
            onMouseLeave={() => setReviewsPaused(false)}
          >
            <div className="h-2 bg-rainbow" />
            <div className="grid min-h-[22rem] sm:min-h-[19rem]">
              {reviews.map((review, index) => (
                <figure
                  key={review.author}
                  aria-hidden={index !== reviewIndex}
                  className={`col-start-1 row-start-1 flex flex-col items-center justify-center px-6 py-9 text-center transition-all duration-500 sm:px-14 ${
                    index === reviewIndex
                      ? "translate-x-0 opacity-100"
                      : index < reviewIndex
                        ? "-translate-x-8 opacity-0 pointer-events-none"
                        : "translate-x-8 opacity-0 pointer-events-none"
                  }`}
                >
                  <Quote aria-hidden className="mb-6 h-10 w-10 text-primary" strokeWidth={1.5} />
                  <blockquote className="max-w-3xl font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                    „{review.text}”
                  </blockquote>
                  <figcaption className="mt-7">
                    <span className="block font-bold text-primary">{review.author}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">Opinia z Facebooka</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="flex items-center justify-center gap-5 border-t border-border px-5 py-5">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Poprzednia opinia"
                onClick={() => setReviewIndex((current) => (current - 1 + reviews.length) % reviews.length)}
              >
                <ChevronLeft />
              </Button>
              <div className="flex gap-2" aria-label={`Opinia ${reviewIndex + 1} z ${reviews.length}`}>
                {reviews.map((review, index) => (
                  <button
                    key={review.author}
                    type="button"
                    aria-label={`Pokaż opinię ${index + 1}`}
                    aria-current={index === reviewIndex ? "true" : undefined}
                    onClick={() => setReviewIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === reviewIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Następna opinia"
                onClick={() => setReviewIndex((current) => (current + 1) % reviews.length)}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="px-5 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl">
          <div className="h-2 bg-rainbow" />
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kontakt</p>
              <h2 className="mt-3 text-4xl">
                Napisz do nas
              </h2>
              <p className="mt-4 text-muted-foreground">
                Napisz kilka słów o sobie, a podpowiemy, od czego
                najlepiej zacząć.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  ["Telefon", "+48 792 693 822 / +48 507 155 401"],
                  ["E-mail", "galopemkuteczy@gmail.com"],
                  ["Stajnia", "Kawalkada, okolice Murowanej Gośliny pod Poznaniem"],
                ].map(([k, v], i) => (
                  <li key={k} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: `var(--rainbow-${i + 1})` }}
                    />
                    <span>
                      <span className="font-semibold">{k}:</span>{" "}
                      <span className="text-muted-foreground">{v}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-secondary hover:text-primary"
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={submit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Imię</Label>
                <Input id="name" name="name" required placeholder="Jak się do Ciebie zwracać?" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required placeholder="ty@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="topic">Co Cię interesuje?</Label>
                <select
                  id="topic"
                  name="topic"
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                >
                  {offers.map((o) => (
                    <option key={o.title}>{o.title}</option>
                  ))}
                  <option>Inne / nie wiem jeszcze</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Napisz kilka słów..." />
              </div>
              <Button type="submit" size="lg" className="rounded-full" disabled={sending}>
                {sending ? "Wysyłanie..." : "Wyślij wiadomość"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logoTransparent}
              alt="Logo Galopem ku tęczy"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="whitespace-nowrap font-display">Galopem ku tęczy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — jeździectwo pełne koloru i szacunku.
          </p>
        </div>
      </footer>
    </div>
  );
}
