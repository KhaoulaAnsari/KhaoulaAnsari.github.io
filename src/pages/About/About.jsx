import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Software Engineer, ERP Specialist & PhD Candidate
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block"
                alt="Khaoula Ansari"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-white">
              Hello! I’m <span className="font-bold">Khaoula Ansari</span>, a
              Software Engineer specializing in ERP/CRM systems (Dolibarr),
              full-stack web development (Spring Boot, Angular, React), and
              Shopify integrations.
            </p>
            <p className="text-white">
              I design and customize ERP modules, sync Shopify storefronts, and
              build robust backends and microservices in Python and Node.js.
              Currently, I’m also a first-year PhD student in Deep Learning
              applied to mental health, exploring AI solutions to support
              well-being.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white">
                  I’m passionate about bridging business processes and cutting-edge
                  AI research—whether that’s streamlining supply chains in ERP
                  or developing deep learning models for mental health data.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium text-white">
                    Khaoula Ansari, PhD Candidate in Deep Learning & Software Engineer
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
