import Link from "next/link";

const METRICS = [
  { value: "51.8°C", label: "UAE High: Highest Air Temperature Recorded in Summer 2025 (Sweihan, Al Ain, 1 Aug 2025, NCM)" },
  { value: "~15 Min", label: "Suggested Interval for Small Sips of Water Before Thirst Sets In (OSHA / NOAA heat guidance)" },
  { value: "5,000", label: "Project Goal: Hydration & Electrolyte Kits We Aim to Distribute (our own target)" },
  { value: "12:30–15:00", label: "Daily Outdoor Work Ban Window, 15 June to 15 September (MoHRE)" },
];

const MATRIX = [
  {
    code: "01",
    title: "Symptoms of Dehydration & Heat Stress",
    tone: "bg-safety text-white",
    items: [
      "Cramps: painful muscle spasms in legs, arms or abdomen after sweating heavily.",
      "Dizziness: light-headedness, headache, blurred vision when standing or dismounting a bike.",
      "Exhaustion: heavy fatigue, nausea, pale clammy skin, fast weak pulse.",
      "Red flag: confusion, slurred speech, seizures or collapse may be heat stroke. Call 998 (ambulance) immediately and cool the person while waiting.",
    ],
  },
  {
    code: "02",
    title: "Essential Interventions",
    tone: "bg-charcoal text-white",
    items: [
      "Cold water: small, frequent sips (about every 15 minutes), before thirst sets in.",
      "Electrolyte-rich fluids: replace the salts lost through sweat, not just water.",
      "Shaded recovery zones: cool, ventilated rest points near sites and delivery hubs.",
      "Cooling wraps: wet cloths or cooling towels on neck, wrists and head.",
    ],
  },
  {
    code: "03",
    title: "Community Action",
    tone: "bg-amber-thermal text-white",
    items: [
      "Distributing cold bottles to riders waiting at building entrances (project plan).",
      "Our idea: community fridge pods outside homes, stocked with water, inspired by Dubai's Al Freej Fridge campaign (Ferjan Dubai), which distributes cold drinks to workers.",
      "Keeping water at the gate or reception for delivery riders and security staff.",
      "Telling riders about the 12,000+ air-conditioned rest stations MoHRE lists for delivery workers.",
    ],
  },
  {
    code: "04",
    title: "Know the Rules",
    tone: "bg-base text-charcoal",
    items: [
      "UAE rules ban outdoor work in direct sun from 12:30 to 15:00, 15 June to 15 September (MoHRE midday break).",
      "Companies must provide shaded rest areas; some emergency or technical work is exempt.",
      "Delivery riders cannot be forced to work during the midday break hours (Khaleej Times).",
      "Dubai RTA opened 23 temporary rest areas for riders in 2026. Check MoHRE and RTA for current details.",
    ],
  },
];

const SAA = [
  {
    step: "INVESTIGATION",
    text: "We research UAE summer heat guidance, the MoHRE midday break, wet-bulb temperature risks, and what riders and site workers say about water access during shifts.",
  },
  {
    step: "ACTION",
    text: "We plan to design hydration kits, map water refill points, and propose community water fridges outside homes in our neighbourhood.",
  },
  {
    step: "COMMUNITY IMPACT",
    text: "We plan to measure kits distributed and neighbours engaged, then reflect on what worked and what to improve.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="overview" className="rounded-none border-b-2 border-ink bg-charcoal text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:py-24 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-none">
            <p className="mb-4 inline-block rounded-none border-2 border-amber-thermal px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-amber-thermal">
              Dubai, UAE // Summer Heat Advocacy
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Surviving the extreme: hydration &amp; rights for Dubai&apos;s outdoor workforce.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300 md:text-lg">
              Delivery riders spend hours on hot roads, wearing helmets and carrying delivery boxes,
              while construction crews work under direct sun. When high
              humidity pushes the wet-bulb temperature up, sweat stops cooling the body and
              heat illness can arrive fast. Cold water, electrolytes and shade are not luxuries. They
              are safety equipment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/donate" className="btn bg-amber-thermal text-white hover:bg-sand hover:text-ink">
                Sponsor Water Stations
              </Link>
              <Link href="/#impact" className="btn border-stone-300 bg-transparent text-white hover:bg-sand hover:text-ink">
                Read Heat Safety Standards
              </Link>
            </div>
          </div>
          <aside className="rounded-none border-2 border-stone-400 p-6 font-mono text-sm">
            <p className="font-medium uppercase tracking-widest text-amber-thermal">Field Brief</p>
            <ul className="mt-4 space-y-3 leading-relaxed text-stone-300">
              <li>&gt; Riders: long shifts, little shade, few places to refill.</li>
              <li>&gt; Construction: heavy labour in direct sun, often far from cold water.</li>
              <li>&gt; Gap: access to cold water and electrolytes at the right moment.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* METRICS */}
      <section id="impact" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-6 font-mono text-sm font-medium tracking-widest text-safety">
          // Thermal Impact Dashboard
        </h2>
        <div className="grid rounded-none border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.value}
              className="rounded-none border-2 border-ink bg-white p-6 -m-[1px]"
            >
              <p className="text-3xl font-medium text-amber-thermal md:text-4xl">{m.value}</p>
              <p className="mt-3 font-mono text-xs font-medium uppercase leading-relaxed tracking-wide">
                {m.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-xs text-neutral-600">
          Sources: UAE National Center of Meteorology via Gulf News; UAE Ministry of Human Resources and Emiratisation (MoHRE); OSHA. The 5,000-kit figure is a student project goal, not a statistic.
        </p>
      </section>

      {/* MATRIX */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="mb-6 font-mono text-sm font-medium tracking-widest text-safety">
          // Heat Illness Risk &amp; Guidelines Matrix
        </h2>
        <div className="grid rounded-none border-2 border-ink md:grid-cols-2">
          {MATRIX.map((c) => (
            <article key={c.code} className="rounded-none border-2 border-ink bg-white -m-[1px]">
              <header className={`rounded-none border-b-2 border-ink px-6 py-4 ${c.tone}`}>
                <p className="font-mono text-xs font-medium tracking-widest">SECTOR {c.code}</p>
                <h3 className="text-xl font-semibold">{c.title}</h3>
              </header>
              <ul className="space-y-3 p-6 text-sm leading-relaxed">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-none bg-amber-thermal" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* COMMUNITY HUB / SERVICE AS ACTION */}
      <section id="community" className="rounded-none border-y-2 border-ink bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-2 font-mono text-sm font-medium tracking-widest text-safety">
            // Community Hub: Service as Action (IB MYP 4)
          </h2>
          <p className="mb-8 max-w-3xl leading-relaxed">
            Project Hydrate is a student-led service project. It follows the Service as Action cycle
            and explores community water fridge ideas, where neighbours could keep cold water
            available outside their homes for passing riders and workers.
          </p>
          <div className="grid rounded-none border-2 border-ink md:grid-cols-3">
            {SAA.map((s, i) => (
              <div key={s.step} className="rounded-none border-2 border-ink p-6 -m-[1px]">
                <p className="font-mono text-xs font-medium tracking-widest text-amber-thermal">
                  STAGE 0{i + 1}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{s.step}</h3>
                <p className="mt-3 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/donate" className="btn bg-charcoal text-white hover:bg-amber-thermal">
              Fund the next fridge pod
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
