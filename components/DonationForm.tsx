"use client";

import { useState } from "react";

export const TIERS = [
  { id: "t1", label: "Tier 1: AED 25", amount: 25 },
  { id: "t2", label: "Tier 2: AED 100", amount: 100 },
  { id: "t3", label: "Tier 3: AED 500", amount: 500 },
];

const METHODS = ["Credit Card", "Apple Pay", "Local Bank Transfer"];

export default function DonationForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <form
        className="rounded-none border-2 border-ink bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="rounded-none border-b-2 border-ink bg-charcoal px-6 py-4 font-mono text-sm font-medium uppercase tracking-widest text-white">
          Checkout Simulation
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-2">
          <label className="block font-mono text-xs font-medium uppercase">
            Full Name
            <input type="text" name="name" className="field mt-2" placeholder="Your name" />
          </label>
          <label className="block font-mono text-xs font-medium uppercase">
            Email Address
            <input type="email" name="email" className="field mt-2" placeholder="you@example.com" />
          </label>
          <label className="block font-mono text-xs font-medium uppercase">
            Sponsor Tier
            <select name="tier" className="field mt-2" defaultValue="t2">
              {TIERS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block font-mono text-xs font-medium uppercase">
            Custom AED Amount
            <input type="number" min={1} name="amount" className="field mt-2" placeholder="e.g. 150" />
          </label>
        </div>

        <fieldset className="mx-6 mb-6 rounded-none border-2 border-ink p-4">
          <legend className="px-2 font-mono text-xs font-medium uppercase">Payment Method</legend>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {METHODS.map((m, i) => (
              <label key={m} className="flex items-center gap-2 font-mono text-sm">
                <input type="radio" name="method" defaultChecked={i === 0} className="h-4 w-4 accent-amber-thermal" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="rounded-none border-t-2 border-ink p-6">
          <button type="submit" className="btn bg-amber-thermal text-white hover:bg-charcoal">
            Submit Donation (WIP Mode)
          </button>
        </div>
      </form>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mock-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
        >
          <div className="w-full max-w-md rounded-none border-2 border-ink bg-white">
            <div className="caution-stripe h-4 rounded-none border-b-2 border-ink" />
            <div className="p-6">
              <h2 id="mock-title" className="text-xl font-semibold uppercase">
                Simulation Only
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                This is a work-in-progress mock checkout. No payment was taken and no data was
                stored or sent. Thank you for testing the Project Hydrate prototype.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn mt-6 bg-charcoal text-white hover:bg-amber-thermal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
