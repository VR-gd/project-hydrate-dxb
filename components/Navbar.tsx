import Link from "next/link";

const LINKS = [
  { href: "/#overview", label: "Overview" },
  { href: "/#impact", label: "Impact & Heat Risks" },
  { href: "/#community", label: "Community Hub" },
  { href: "/donate", label: "WIP Donation" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 rounded-none border-b-2 border-black bg-base">
      <div className="rounded-none border-b-2 border-black bg-safety px-4 py-2">
        <p className="mx-auto max-w-7xl rounded-none font-mono text-xs font-bold uppercase tracking-widest text-white">
          SUMMER MIDDAY WORK BAN: 15 JUN – 15 SEP // 12:30–15:00
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="rounded-none border-2 border-black bg-charcoal px-3 py-2 font-mono text-sm font-black tracking-widest text-white"
        >
          PROJECT HYDRATE // DXB
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-0">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="-ml-[2px] rounded-none border-2 border-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-thermal hover:text-white first:ml-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
