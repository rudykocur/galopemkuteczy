import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
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
import videoImg from "@/assets/video-2.jpg";

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

const offers = [
  {
    title: "Jazdy indywidualne",
    price: "od 120 zł / 45 min",
    color: "var(--rainbow-1)",
    desc: "Spokojna praca jeden na jeden — dopasowana do Twojego poziomu, tempa i odwagi.",
    items: ["Pierwszy kontakt z koniem", "Praca nad postawą", "Jazda w terenie"],
  },
  {
    title: "Zajęcia grupowe",
    price: "od 90 zł / os.",
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
    title: "Obozy i półkolonie",
    price: "od 1200 zł / tydzień",
    color: "var(--rainbow-5)",
    desc: "Tygodnie pełne koni, koloru i przyjaźni — dla dzieci i młodzieży.",
    items: ["Codzienne jazdy", "Opieka nad koniem", "Zajęcia twórcze"],
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

const gallery = [
  { src: galleryField.url, alt: "Konie z siodłami na łące", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryGrooming.url, alt: "Czesanie konia pod wiatą", span: "", pos: "object-center" },
  { src: galleryWalk.url, alt: "Spacer z koniem leśną ścieżką", span: "", pos: "object-center" },
  { src: galleryPony.url, alt: "Dzieci głaszczą kucyka na zajęciach", span: "sm:col-span-2", pos: "object-[center_35%]" },
];

function Index() {
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Dziękujemy! Odpowiemy w ciągu 24 godzin.");
      (e.target as HTMLFormElement).reset();
    }, 600);
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
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-rainbow" /> stajnia otwarta dla wszystkich
            </span>
            <h1 className="mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Galopem ku tęczy
            </h1>
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
                ["12", "koni w stajni"],
                ["9 lat", "z jeźdźcami"],
                ["100%", "bez przymusu"],
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
              Wybierz swój kolor
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sześć dróg do koni — od pierwszego dotknięcia grzywy po tygodniowy obóz.
              Wszystkie prowadzą w to samo miejsce: do zaufania.
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
              Kadry z zajęć, treningów i zwykłych stajennych poranków.
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

          <div className="relative mt-4 overflow-hidden rounded-3xl">
            <img
              src={videoImg}
              alt="Kadr z filmu z zajęć jeździeckich"
              className="h-64 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 grid place-items-center bg-foreground/25">
              <button
                type="button"
                onClick={() => toast("Film pojawi się tutaj — wyślij nam nagranie, a je wstawimy.")}
                className="grid h-20 w-20 place-items-center rounded-full bg-rainbow text-2xl text-primary-foreground shadow-2xl transition-transform hover:scale-110"
                aria-label="Odtwórz film"
              >
                ▶
              </button>
            </div>
            <figcaption className="absolute bottom-4 left-5 rounded-full bg-card/90 px-4 py-1.5 text-xs font-semibold">
              Dzień w stajni — 2:14
            </figcaption>
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
                  ["Telefon", "+48 792 693 822 / 507 155 401"],
                  ["E-mail", "galopemkuteczy@gmail.com"],
                  ["Stajnia", "Kawalkada, okolice Murowanej Gośliny"],
                  ["", ""],
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
              <p className="mt-6 text-xs text-muted-foreground">
                
              </p>
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
