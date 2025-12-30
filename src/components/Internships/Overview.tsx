import React from "react";

export default function Overview() {
  return (
    <section className="bg-neutral-950 py-16 border-b border-neutral-900 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* <h2 id="overview-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
             <span className="text-emerald-500">Overview</span>
          </h2> */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-emerald-500/50 transition-all duration-300">
            <div className="prose prose-lg prose-invert mx-auto text-neutral-400">
              <p className="mb-6 leading-relaxed">
                SkillVita gives students a simple and reliable way to learn the right skills and find internships while studying. It connects skilling and opportunity discovery, helping anyone move from zero experience to becoming internship-ready with clarity and confidence. Every internship on SkillVita is reviewed for company authenticity, role expectations, outcomes, and pay details making sure students apply only to credible opportunities that are worth their time.
              </p>
              <p className="leading-relaxed font-medium text-white">
                Starting from zero? SkillVita helps you learn the basics, build your profile, and show real work making your 0-to-1 journey feel simple, supported and real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
