import DonationForm from "@/components/DonationForm";

const TIERS = [
  {
    price: "AED 25",
    title: "10L Bottled Hydration & Electrolytes",
    featured: false,
    tag: "TIER 1",
    details: [
      "Bottled cold water for riders and site workers",
      "Electrolyte sachets to replace lost salts",
      "Planned: handed out at pick-up points and gates",
    ],
  },
  {
    price: "AED 100",
    title: "Full Cooling Kit & Insulated Flask for Delivery Rider",
    featured: true,
    tag: "TIER 2 // FEATURED",
    details: [
      "Insulated flask that keeps water cold for hours",
      "Cooling towel and neck wrap",
      "Electrolyte supply and heat safety card",
    ],
  },
  {
    price: "AED 500",
    title: "Sponsor a Mobile Water Refill Station Shift",
    featured: false,
    tag: "TIER 3 // COMMUNITY",
    details: [
      "Staffed refill point for one full shift",
      "Shaded seating and cold water supply",
      "Planned: suited to companies, schools and community groups",
    ],
  },
];

export default function DonatePage() {
  return (
    <>
      <div className="caution-stripe rounded-none border-b-2 border-ink p-1">
        <p className="rounded-none bg-charcoal px-4 py-3 text-center font-mono text-sm font-semibold uppercase tracking-widest text-amber-thermal">
          NOTICE: MOCK CHECKOUT // WORK IN PROGRESS TEMPLATE
        </p>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-semibold md:text-5xl">Sponsor Water Stations</h1>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Choose a sponsorship tier to help supply cold water, electrolytes and cooling gear to
          Dubai&apos;s delivery riders and construction crews this summer.
        </p>

        <div className="mt-10 grid rounded-none border-2 border-ink md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.tag}
              className={`rounded-none border-2 border-ink p-6 -m-[1px] ${
                t.featured ? "bg-charcoal text-white" : "bg-white"
              }`}
            >
              <p
                className={`font-mono text-xs font-medium tracking-widest ${
                  t.featured ? "text-amber-thermal" : "text-safety"
                }`}
              >
                {t.tag}
              </p>
              <p className="mt-3 text-4xl font-medium">{t.price}</p>
              <h2 className="mt-3 text-lg font-medium leading-snug">{t.title}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                {t.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-none bg-amber-thermal" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <DonationForm />
      </section>
    </>
  );
}
