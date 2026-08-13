const services = [
  {
    title: "Lawn Mowing",
    description:
      "Professional mowing, edging and lawn care to keep your property looking neat.",
    icon: "🌱",
  },
  {
    title: "Gardening",
    description:
      "Garden clean-ups, pruning, hedge trimming, weeding and ongoing maintenance.",
    icon: "🌿",
  },
  {
    title: "House Cleaning",
    description:
      "Reliable regular, deep and one-off cleaning for homes across Melbourne.",
    icon: "✨",
  },
  {
    title: "Pressure Washing",
    description:
      "Refresh driveways, paths, patios and outdoor areas with professional cleaning.",
    icon: "💦",
  },
  {
    title: "End of Lease Cleaning",
    description:
      "Detailed property cleaning designed to help prepare your home for handover.",
    icon: "🏠",
  },
  {
    title: "Property Maintenance",
    description:
      "Simple property upkeep and maintenance services for homes and businesses.",
    icon: "🛠️",
  },
];

const features = [
  {
    title: "Easy Online Quotes",
    description:
      "Tell us what you need, upload photos and receive an estimate without endless phone calls.",
  },
  {
    title: "Reliable Local Teams",
    description:
      "Jobs are matched with suitable property-care professionals in your area.",
  },
  {
    title: "Simple Booking",
    description:
      "Choose your service, preferred date and property details in just a few minutes.",
  },
  {
    title: "One Place for Everything",
    description:
      "Quotes, jobs, invoices, recurring services and communication can all be managed together.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose a service",
    description: "Select the property-care service you need.",
  },
  {
    number: "02",
    title: "Tell us about the job",
    description:
      "Answer a few simple questions and upload photos if needed.",
  },
  {
    number: "03",
    title: "Get your estimate",
    description:
      "See an estimated price range before confirming your booking.",
  },
  {
    number: "04",
    title: "We take care of it",
    description:
      "Your service is scheduled and completed by the right team.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl font-bold text-white">
              P
            </div>

            <div>
              <div className="text-xl font-bold tracking-tight">
                PropertyCareHub
              </div>
              <div className="text-xs text-slate-500">
                Property care made simple
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            <a href="#services" className="transition hover:text-emerald-600">
              Services
            </a>
            <a href="#how-it-works" className="transition hover:text-emerald-600">
              How It Works
            </a>
            <a href="#business" className="transition hover:text-emerald-600">
              Business
            </a>
            <a href="#why-us" className="transition hover:text-emerald-600">
              Why Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-50 sm:block"
            >
              Contact Us
            </a>

            <a
              href="#quote"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Get Estimate
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Melbourne Property Care
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Property care,
              <span className="block text-emerald-400">made simple.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Book reliable gardening, lawn care, cleaning and property
              maintenance services from one simple platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="rounded-xl bg-emerald-500 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Get an Instant Estimate →
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-700 px-7 py-4 text-center font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ Easy online booking</span>
              <span>✓ Local service</span>
              <span>✓ Residential & commercial</span>
            </div>
          </div>

          {/* SMART QUOTE PREVIEW */}
          <div
            id="quote"
            className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-7">
              <div className="text-sm font-semibold text-emerald-600">
                QUICK ESTIMATE
              </div>
              <h2 className="mt-2 text-2xl font-bold">
                What can we help you with?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start your quote in less than a minute.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["🌱", "Lawn Mowing"],
                ["🌿", "Gardening"],
                ["✨", "Cleaning"],
                ["💦", "Pressure Wash"],
              ].map(([icon, title]) => (
                <button
                  key={title}
                  className="rounded-2xl border border-slate-200 p-4 text-left transition hover:border-emerald-500 hover:bg-emerald-50"
                >
                  <div className="text-2xl">{icon}</div>
                  <div className="mt-3 text-sm font-semibold">{title}</div>
                </button>
              ))}
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Property postcode
              </label>
              <input
                type="text"
                placeholder="e.g. 3150"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-emerald-500"
              />
            </div>

            <button className="mt-5 w-full rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700">
              Start My Estimate →
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              No payment required to request an estimate.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Our Services
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything your property needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From regular lawn care to cleaning and property maintenance,
              PropertyCareHub makes finding and managing services easier.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#quote"
                  className="mt-6 inline-block text-sm font-bold text-emerald-600"
                >
                  Get an estimate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Simple from start to finish
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              How PropertyCareHub works
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="text-4xl font-bold text-emerald-200">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-emerald-600 p-8 text-white sm:p-12">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-100">
              Built for convenience
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Less time organising. More time enjoying your property.
            </h2>

            <p className="mt-6 leading-8 text-emerald-50">
              PropertyCareHub is being built to make property maintenance
              easier for customers, property managers and businesses.
            </p>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">
              <div className="text-sm text-emerald-100">
                Coming to PropertyCareHub
              </div>
              <div className="mt-2 text-xl font-bold">
                Recurring care plans, online payments, job tracking and more.
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                Property Managers & Businesses
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                One partner for ongoing property care.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Manage gardening, cleaning and maintenance across multiple
                properties without dealing with different providers for every
                job.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Discuss Business Services
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Real Estate Agencies",
                "Property Managers",
                "Offices & Shops",
                "Rental Properties",
                "Body Corporates",
                "Commercial Properties",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="mb-4 text-emerald-400">✓</div>
                  <div className="font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-emerald-50 px-7 py-14 text-center sm:px-12">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Your property. One simple solution.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us what you need and let PropertyCareHub help organise the
              rest.
            </p>

            <a
              href="#quote"
              className="mt-8 inline-block rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Get Your Estimate →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="text-xl font-bold">PropertyCareHub</div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Gardening, cleaning and property maintenance made easier across
                Melbourne.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
              <a href="#services" className="hover:text-emerald-600">
                Services
              </a>
              <a href="#how-it-works" className="hover:text-emerald-600">
                How It Works
              </a>
              <a href="#business" className="hover:text-emerald-600">
                Business
              </a>
              <a href="#contact" className="hover:text-emerald-600">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-400">
            © 2026 PropertyCareHub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}