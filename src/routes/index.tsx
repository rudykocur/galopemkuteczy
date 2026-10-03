import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { submitContactMessage } from "@/lib/contactSubmit";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Menu, Quote, X } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logoTransparent from "@/assets/logo-transparent.png";
import aboutImg from "@/assets/about-us.jpg";
import galleryField from "@/assets/gallery-field.jpg";
import galleryGrooming from "@/assets/gallery-grooming.jpg";
import galleryWalk from "@/assets/gallery-walk.jpg";
import galleryPony from "@/assets/gallery-pony.jpg";
import gallerySnow from "@/assets/gallery-snow.jpg";
import galleryLesson from "@/assets/gallery-lesson.jpg";
import galleryAgata from "@/assets/gallery-agata.jpg";
import galleryArena from "@/assets/gallery-arena.jpg";
import galleryPortraitHorse from "@/assets/gallery-portrait-horse.jpg";
import galleryHug from "@/assets/gallery-hug.jpg";
import galleryExtraOne from "@/assets/gallery-extra-one.jpg";
import galleryExtraTwo from "@/assets/gallery-extra-two.jpg";
import galleryLiberty from "@/assets/gallery-liberty.jpg";
import gallerySunset from "@/assets/gallery-sunset-tight.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryPortraitSmile from "@/assets/gallery-portrait-smile.jpg";
import videoAsset from "@/assets/konie-jedza.mp4";
import videoPoster from "@/assets/video-poster.jpg";
import video2Asset from "@/assets/film2.mp4";
import video2Poster from "@/assets/film2-poster.jpg";

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
  { label: "Kim jesteśmy", href: "#kim-jestesmy", sub: true },
  { label: "O nas", href: "#filary" },
  { label: "Pierwsza wizyta", href: "#pierwsza-wizyta", sub: true },
  { label: "Oferta", href: "#oferta" },
  { label: "Opinie", href: "#opinie" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574890477695", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/galopem_ku_teczy/", Icon: Instagram },
];

const offers = [
  {
    title: "Treningi indywidualne",
    meta: "OD 150 ZŁ",
    color: "var(--rainbow-1)",
    metaColor: "var(--rainbow-2)",
    desc: "Czas z koniem tylko dla Ciebie w dostosowanej do Ciebie formie.",
    items: ["Nauka behawioru", "Praca z siodła i z ziemi", "Kontakt z koniem i pielęgnacja"],
  },
  {
    title: "Zajęcia rodzinne",
    meta: "OD 200 ZŁ",
    color: "var(--rainbow-2)",
    metaColor: "var(--rainbow-3)",
    desc: "Spotkania dla całej rodziny. Pracujemy nad relacją i komunikacją w towarzystwie koni i natury.",
    items: ["Pierwsze spotkania z końmi", "Rodzinny czas na łonie natury", "Ten sam program, co na treningach indywidualnych - tylko w większym gronie"],
  },
  {
    title: "Konsultacje behawioralne",
    meta: "OD 200 ZŁ + DOJAZD",
    color: "var(--rainbow-5)",
    metaColor: "var(--rainbow-5)",
    desc: "Gdy coś nie działa w Twojej współpracy z koniem, przyjedziemy i pomożemy, a po spotkaniu oferujemy wsparcie online.",
    items: ["Pary koń + jeździec", "Konie z problemami pracujące pod siodłem", "Konie młode i surowe, również źrebaki", "Dojeżdżamy w obrębie województwa wielkopolskiego"],
  },
  {
    title: "Spotkania dla osób po końskich traumach",
    meta: "CENA INDYWIDUALNA",
    color: "var(--rainbow-4)",
    metaColor: "var(--rainbow-4)",
    desc: "Jeśli masz złe doświadczenia, jesteś po upadku albo przytłaczają Cię tłumy i presja szkółek – razem zbudujemy bezpieczną przestrzeń, w Twoim tempie.",
    items: ["Zajęcia dostosowane indywidualnie do osoby", "Spokój, cierpliwość i poczucie bezpieczeństwa", "Wsparcie terapeutyczne w radzeniu sobie ze strachem"],
  },
  {
    title: "Warsztaty końsko-psychologiczne",
    meta: "CENA INDYWIDUALNA",
    color: "var(--rainbow-3)",
    metaColor: "var(--rainbow-3)",
    desc: "Spotkania, w których koń staje się lustrem — dla Ciebie i Twojego układu nerwowego.",
    items: ["„Moja granica, moja kontrola”", "„Przez konie do Twojego układu nerwowego”", "„Uważność w kontakcie z końmi”"],
  },
];

const pillars = [
  {
    title: "Komunikacja",
    desc: "Odpowiedzialność za funkcjonalne porozumienie ze zwierzęciem spoczywa na człowieku. Nauczymy Cię, jak rozumieć subtelny język konia.",
    color: "var(--rainbow-1)",
  },
  {
    title: "Wsparcie",
    desc: "Empatia do koni i ludzi towarzyszy nam we wszystkich interakcjach. Jesteśmy obok przy trudnych emocjach i pierwszych sukcesach, z uważnością na potrzeby i granice każdej istoty.",
    color: "var(--rainbow-2)",
  },
  {
    title: "Rozwój",
    desc: "Stawiamy na edukację poprzez zachwyt: ciekawość uczy lepiej niż presja. Każde spotkanie to mały krok naprzód, a każdy mały krok to sukces.",
    color: "var(--rainbow-3)",
  },
];

const inspirations = [
  {
    title: "LIMA",
    meta: "PODEJŚCIE",
    desc: "Najmniej inwazyjnie, najmniej awersyjnie, czyli zawsze zaczynamy od najłagodniejszej metody, jaka w danej chwili działa.",
    color: "var(--rainbow-1)",
  },
  {
    title: "ISES",
    meta: "NAUKA",
    desc: "International Society for Equitation Science - jeździectwo oparte na badaniach nad zachowaniem i dobrostanem koni.",
    color: "var(--rainbow-2)",
  },
  {
    title: "Teoria poliwagalna",
    meta: "UKŁAD NERWOWY",
    desc: "Poczucie bezpieczeństwa jest niezbędne do nauki u ludzi i u koni.",
    color: "var(--rainbow-4)",
  },
  {
    title: "Porozumienie bez przemocy",
    meta: "KOMUNIKACJA",
    desc: "Metoda Marshalla Rosenberga: rozmawiamy o potrzebach zamiast oceniać, także wtedy, gdy ktoś z nas ma cztery nogi.",
    color: "var(--rainbow-5)",
  },
  {
    title: "Jeździectwo oparte na dowodach",
    meta: "EVIDENCE-BASED",
    desc: "Decyzje oparte na badaniach, nie na tradycji „tak robimy od zawsze”.",
    color: "var(--rainbow-6)",
  },
];

const slogans = [
  {
    title: "Spokój i wyrozumiałość",
    meta: "ATMOSFERA",
    desc: "Bez oceny, bez presji, bez pośpiechu. W kontakcie ze sobą i naturą, dając sobie przestrzeń na niepowodzenia.",
    color: "var(--rainbow-1)",
  },
  {
    title: "Tęcza to obietnica",
    meta: "INKLUZYWNOŚĆ",
    desc: "Każdy jest tu na swoim miejscu, niezależnie od wieku, ciała, tożsamości i doświadczenia.",
    color: "var(--rainbow-4)",
  },
  {
    title: "Dobro konia przede wszystkim",
    meta: "DOBROSTAN",
    desc: "Liczy się kontakt ze zwierzęciem. Nie liczymy pucharów, liczymy uśmiechy i małe zwycięstwa.",
    color: "var(--rainbow-6)",
  },
];

const firstMeeting = [
  {
    title: "Najpierw rozmowa",
    desc: "Zapytamy o Twoje oczekiwania, obawy i doświadczenia.",
  },
  {
    title: "Spotkanie ze stadem",
    desc: "Poznajemy razem konie i wspólnie dbamy o ich pielęgnację",
  },
  {
    title: "Praca w Twoim tempie",
    desc: "Wspólnie poszerzamy okno tolerancji i strefę komfortu.",
  },
  {
    title: "Omówienie i dalsze kroki",
    desc: "Odpowiadamy na wszystkie pytania i wspólnie ustalamy plany na kolejne spotkania.",
  },
];

const team = [
  {
    name: "Alex",
    role: "Nauka jazdy konnej • Hipoterapia • Behawiorystyka zwierząt\u00a0• Trening koni\u00a0• Polski Język Migowy\u00a0",
    color: "var(--rainbow-1)",
    bio: "Konie interesowały mnie od dziecka, choć realizacja tej pasji zaczęła się w dorosłości. Dwunastoletnie doświadczenie w pracy z końmi i ludźmi pozwala mi podejść indywidualnie i kompleksowo do potrzeb człowieka i konia. Ostatnio uczę się Polskiego Języka Migowego, żeby nikt nie został na zewnątrz rozmowy.",
  },
  {
    name: "Ania",
    role: "Nauka jazdy konnej • Behawiorystyka zwierząt\u00a0• Trening koni\u00a0• Terapia Skoncentrowana na Rozwiązaniach\u00a0• Masaż metodą Mastersona",
    color: "var(--rainbow-3)",
    bio: "Kontakt z koniem był moim marzeniem od dziecka. Jeździectwo było jedyną znaną mi drogą do poznania tych zwierząt, a ja zawsze chciałam czegoś więcej. Dziś chcę dzielić się pasją i wiedzą oraz tym, jak dobroczynne skutki ma dla człowieka spędzanie czasu z końmi bez jazdy. Fascynuje mnie neurobiologia i podobieństwa naszych ssaczych układów nerwowych.",
  },
];

const horses = [
  {
    name: "Badger",
    meta: "13 LAT • NAJLEPSZY PARTNER",
    color: "var(--rainbow-4)",
    desc: "Koń profesor: odpowiedzialny, bardzo kontaktowy i wyjątkowo fotogeniczny. Świadomy swojego ciała, amator sztuczek. Najbardziej lubi jabłka Golden Delicious.",
  },
  {
    name: "Płotka",
    meta: "2 LATA • WYMAGAJĄCA NAUCZYCIELKA",
    color: "var(--rainbow-5)",
    desc: "Uwielbia czyszczenie, drapanie, trawę i spacery do lasu. Jest ciekawska, ma zacięcie hipoterapeutyczne i z sezonu na sezon przybiera inne barwy.",
  },
  {
    name: "Lilith",
    meta: "6 LAT • DŁUGOWŁOSA PIĘKNOŚĆ",
    color: "var(--rainbow-6)",
    desc: "Wielka fanka przytulasków. Ogromne końskie serducho w niewielkim ciele.",
  },
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
  { src: galleryField, alt: "Konie z siodłami na łące", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryGrooming, alt: "Czesanie konia pod wiatą", span: "", pos: "object-center" },
  { src: galleryWalk, alt: "Spacer z koniem leśną ścieżką", span: "", pos: "object-center" },
  { src: galleryPony, alt: "Dzieci głaszczą kucyka na zajęciach", span: "sm:col-span-2", pos: "object-[center_35%]" },
  { src: gallerySnow, alt: "Zimowy spacer z koniem", span: "", pos: "object-[center_25%]" },
  { src: galleryLesson, alt: "Lekcja jazdy na ujeżdżalni", span: "", pos: "object-center" },
  { src: galleryAgata, alt: "Prowadzenie konia na padoku o zachodzie", span: "", pos: "object-center" },
  { src: galleryArena, alt: "Trening na arenie pod chmurnym niebem", span: "", pos: "object-[center_60%]" },
  { src: galleryPortraitHorse, alt: "Opiekunka stojąca obok ciemnego konia", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryHug, alt: "Przytulenie konia pod błękitnym niebem", span: "sm:col-span-2 sm:row-span-2", pos: "object-[center_72%]" },
  { src: gallerySunset, alt: "Spokojne spotkanie z koniem o zachodzie słońca", span: "sm:col-span-2 sm:row-span-2", pos: "object-center" },
  { src: galleryLiberty, alt: "Koń pracujący swobodnie na piaszczystym placu", span: "sm:col-span-2", pos: "object-center" },
  { src: galleryWorkshop, alt: "Warsztaty przy okrągłym wybiegu", span: "sm:row-span-2", pos: "object-center" },
  { src: galleryExtraTwo, alt: "Chwila bliskości z koniem", span: "sm:row-span-2", pos: "object-center" },
  { src: galleryExtraOne, alt: "Relacyjna praca z koniem", span: "", pos: "object-center" },
  { src: galleryPortraitSmile, alt: "Uśmiechnięta opiekunka podczas dnia w stajni", span: "", pos: "object-center" },
];

function Index() {
  const [sending, setSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    if (reviewsPaused) return;
    const timer = setInterval(() => {
      setReviewIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviewsPaused]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await submitContactMessage({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        topic: String(fd.get("topic") ?? ""),
        message: String(fd.get("message") ?? ""),
      });
      if (res.ok) {
        toast.success("Dziękujemy! Wiadomość została wysłana — odpowiemy najszybciej, jak się da.");
        form.reset();
      } else {
        toast.error("Sprawdź poprawność pól formularza i spróbuj ponownie.");
      }
    } catch {
      toast.error("Nie udało się wysłać wiadomości. Napisz bezpośrednio na galopemkuteczy@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Toaster />

      {/* NAV */}
      <header
        className={
          "sticky z-50 transition-all duration-300 " +
          (scrolled ? "top-3 px-4 sm:px-5" : "top-0 px-0")
        }
      >
        <div
          className={
            "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full transition-all duration-300 " +
            (scrolled
              ? "border border-border/60 bg-background/80 py-2 pl-2 pr-2 shadow-lg shadow-primary/10 backdrop-blur-xl sm:py-2.5 sm:pl-3"
              : "border border-transparent bg-transparent px-5 py-3 sm:py-3.5")
          }
        >


          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Otwórz menu"
              aria-expanded={menuOpen}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="min-w-0 truncate whitespace-nowrap font-display text-lg sm:text-xl">Galopem ku tęczy</span>
          </div>
          <a href="#top" className="shrink-0" aria-label="Logo Galopem ku tęczy — do góry strony">
            <img
              src={logoTransparent}
              alt="Logo Galopem ku tęczy"
              className="h-11 w-11 object-contain"
            />
          </a>
        </div>
      </header>

      {/* SIDE MENU */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Zamknij menu"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-foreground/40 backdrop-blur-sm"
          tabIndex={-1}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-[17rem] max-w-[80vw] flex-col border-r border-border bg-card shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="font-display text-lg">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Zamknij menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {nav.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-display text-lg text-foreground transition-colors hover:bg-secondary"
              >
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: `var(--rainbow-${(i % 6) + 1})` }} />
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4 border-t border-border p-5">
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>


      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden px-5 pt-14 pb-20 sm:pt-20">
        <div className="pointer-events-none absolute -top-40 -left-32 -z-10 h-[36rem] w-[36rem] animate-drift rounded-full bg-rainbow opacity-25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -right-40 -z-10 h-[32rem] w-[32rem] animate-drift rounded-full bg-rainbow opacity-20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl leading-[0.95] sm:whitespace-nowrap sm:text-6xl">
              Galopem ku tęczy
            </h1>
            <p className="mt-4 font-display text-sm font-medium uppercase tracking-[0.35em] text-primary sm:text-base">
              JEŹDZIECTWO RELACYJNE
            </p>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Nauczymy Cię czytać język konia i budować z nim relację opartą na zaufaniu i poczuciu bezpieczeństwa bez wstydu, presji i pośpiechu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#oferta">
                <Button size="lg" className="rounded-full px-7 text-base">Zobacz ofertę</Button>
              </a>
              <a href="#kontakt">
                <Button size="lg" variant="outline" className="rounded-full border-2 px-7 text-base">
                  Umów się na spotkanie
                </Button>
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["10+", "kursów i szkoleń", ""],
                ["15+", "lat doświadczenia", ""],
                ["∞", "cierpliwości i ciekawości", "text-4xl"],
              ].map(([k, v, cls]) => (
                <div key={v} className="rounded-2xl border border-border bg-card p-4">
                  <dt className={`font-display text-2xl text-primary ${cls}`}>{k}</dt>
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
      <section id="o-nas" className="bg-secondary/50 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="relative lg:h-full">
              <img
                src={aboutImg}
                alt="Dwie opiekunki z końmi na łące o zachodzie słońca"
                className="aspect-square w-full rounded-[2rem] object-cover lg:aspect-auto lg:h-full"
              />
            </div>
            <div id="kim-jestesmy" className="scroll-mt-24">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kim jesteśmy</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Dwoje ludzi i trzy konie
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {"\n"}
              </p>
              <div className="mt-8 space-y-6">
                {team.map((m) => (
                  <article key={m.name} className="last:pb-0 [&+&]:border-t [&+&]:border-border [&+&]:pt-6">
                    <h3 className="font-display text-xl">
                      {m.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {horses.map((h) => (
              <article
                key={h.name}
                className="rounded-[1.25rem] border-l-4 bg-card p-6 shadow-sm"
                style={{ borderLeftColor: h.color }}
              >
                <h3 className="font-display text-xl">{h.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h.meta}</p>
                <p className="mt-3 text-sm text-muted-foreground">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDAMENTY + FILARY */}
      <section id="filary" className="scroll-mt-16 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          {/* FUNDAMENTY NASZEGO PODEJŚCIA */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">O nas</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Fundamenty naszego podejścia
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                W naszej filozofii pracy z końmi nie stosujemy konkretnej metody ani szkoły. Opieramy nasze działania o najnowszą wiedzę naukową dotyczącą dobrostanu koni oraz teorii uczenia się. Zależy nam przede wszystkim na tym, by nie wywoływać strachu ani nie zadawać bólu.
              </p>
              <ul className="mt-8 space-y-4">
                {inspirations.map((s) => (
                  <li key={s.title} className="flex items-start gap-4">
                    <span
                      className="mt-2.5 h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: s.color }}
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-display text-lg">
                        {s.title}{" "}
                        <span className="ml-1 align-middle text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                          {s.meta}
                        </span>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="pointer-events-none absolute -inset-3 -z-10 animate-drift rounded-full bg-rainbow opacity-20 blur-3xl" />
              <img
                src={gallerySnow}
                alt="Jazda z parasolem na śnieżnym polu"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_35%]"
              />
            </div>
          </div>

          {/* FILARY NASZEJ PRACY */}
          <div className="mt-16">
            <h2 className="text-4xl sm:text-5xl">
              Filary naszej pracy
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-[1.25rem] border-l-4 bg-card p-8 shadow-sm"
                  style={{ borderLeftColor: p.color }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm text-primary-foreground"
                      style={{ backgroundColor: p.color }}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <h3 className="font-display text-2xl">{p.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PIERWSZA WIZYTA */}
      <section id="pierwsza-wizyta" className="scroll-mt-16 bg-secondary/50 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          {/* PIERWSZE SPOTKANIE */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="pointer-events-none absolute -inset-3 -z-10 animate-drift rounded-full bg-rainbow opacity-20 blur-3xl" />
              <img
                src={galleryLesson}
                alt="Zajęcia jeździeckie — klientka na koniu, obok opiekunka prowadząca lekcję"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-center"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Pierwsza wizyta</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Jak wygląda pierwsze spotkanie z nami?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Niezależnie od Twoich wcześniejszych doświadczeń z końmi, z nami nauczysz się nowych rzeczy i spojrzysz na konie z innej strony.
              </p>
              <ol className="mt-8 space-y-5">
                {firstMeeting.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm text-primary-foreground"
                      style={{ backgroundColor: `var(--rainbow-${i + 1})` }}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {slogans.map((s) => (
              <div
                key={s.title}
                className="rounded-[1.25rem] border-l-4 bg-card p-8 shadow-sm"
                style={{ borderLeftColor: s.color }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.meta}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug">{s.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Oferta</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Znajdź swoją drogę do koni
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Z końmi liczy się droga, a nie cel. Poczuj zew Puszczy Zielonki i odezwij się do nas.
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
                <h3 className="text-xl">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
                <ul className="mt-5 space-y-2.5 text-base text-foreground/80">
                  {o.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-3">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 translate-y-[-0.15rem] rounded-full"
                        style={{ backgroundColor: o.color }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-xs font-bold uppercase tracking-widest" style={{ color: o.metaColor ?? o.color }}>
                  {o.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-secondary/50 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Galeria</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Zdjęcia i filmy
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kadry z zajęć, treningów i zwykłej stajennej sielanki
              </p>
            </div>
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
                  src={videoAsset}
                  poster={videoPoster}
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
                  src={video2Asset}
                  poster={video2Poster}
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
      <section id="opinie" className="scroll-mt-16 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Opinie</p>
            <h2 id="opinie-heading" className="mt-3 text-3xl sm:text-4xl">
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
                  <Quote aria-hidden className="mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
                  <blockquote className="max-w-2xl font-display text-lg leading-relaxed text-foreground sm:text-xl">
                    „{review.text}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block font-bold text-primary">{review.author}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">Opinia z Facebooka</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="flex items-center justify-center gap-5 border-t border-border px-5 py-4">
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
      <section id="kontakt" className="bg-secondary/50 px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
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
                ["Telefon Ania", "+48 792 693 822", "tel:+48792693822"],
                ["Telefon Alex", "+48 507 155 401", "tel:+48507155401"],
                ["E-mail", "galopemkuteczy@gmail.com", "mailto:galopemkuteczy@gmail.com"],
                ["Stajnia", "Kawalkada, okolice Murowanej Gośliny pod Poznaniem", null],
                ["Facebook", "Galopem ku tęczy", socials[0]!.href],
                ["Instagram", "@galopem_ku_teczy", socials[1]!.href],
              ].map(([k, v, href], i) => (
                <li key={k} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: `var(--rainbow-${i + 1})` }}
                  />
                  <span>
                    <span className="font-semibold">{k}:</span>{" "}
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {v}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{v}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-lg">
              <div className="h-2 bg-rainbow" />
              <form onSubmit={submit} className="grid gap-4 p-6 sm:p-8">
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
