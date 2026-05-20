import { motion } from 'motion/react';
import { Target, Cpu, Activity, ShieldCheck, ArrowRight, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface WhyUsProps {
  onOpenBooking: () => void;
}

export default function WhyUs({ onOpenBooking }: WhyUsProps) {
  const customTechCards = [
    {
      icon: Cpu,
      title: 'NeuFit Electrical Diagnostics',
      desc: 'Isolates and reprogram neurological pathways to stimulate blood cells, relieve pain, and build custom movement ranges.'
    },
    {
      icon: Activity,
      title: 'ARX Smart Loading Technology',
      desc: 'Applies motor-controlled, computerized resistance that maps to your individual capability instantly. No weights required.'
    },
    {
      icon: Target,
      title: 'Predictable Asymmetry Detection',
      desc: 'Locates physiological inbalances and guides target movement selection to safely offset the natural asymmetry of humanity.'
    }
  ];

  return (
    <section className="relative bg-brand-charcoal py-24 lg:py-32 border-y border-brand-charcoal-light/40">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-dark to-transparent pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column Copy Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              {BUSINESS_INFO.whyUsTitle}
            </span>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white leading-tight sm:text-3.5xl">
              {BUSINESS_INFO.whyUsSubtitle}
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {BUSINESS_INFO.whyUsDescription}
            </p>

            <div className="pt-4 flex flex-col gap-3 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-accent shrink-0" />
                <span>Doctor Recommended Neurological Protocols</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="h-4.5 w-4.5 text-brand-accent shrink-0" />
                <span>100% Client Success & Pain Elimination Record</span>
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 rounded-lg bg-emerald-500 hover:bg-brand-accent text-neutral-950 px-6 py-3 text-xs font-extrabold uppercase tracking-widest transition duration-300 cursor-pointer font-display"
                id="why-us-cta-btn"
              >
                TRAIN WITH US
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column Custom Technology Presentation */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              
              {/* Main Full Span Card detailing Scientific Methodology */}
              <div className="rounded-2xl border border-brand-accent/10 bg-brand-dark/55 p-6 sm:col-span-2 border-glow">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                    <Activity className="h-5 w-5" strokeWidth="2.5" />
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    Clinical Personalization Engine
                  </h3>
                </div>
                <p className="mt-3 text-xs text-neutral-400 leading-relaxed font-light">
                  Standard fitness centers assume everyone has identical structural alignment. We analyze visual posture under computerized force metrics, identifying nerve-to-muscle firing inbalances.
                </p>
              </div>

              {/* Three detailed bullet cards */}
              {customTechCards.map((tech, idx) => {
                const IconComp = tech.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-brand-charcoal-light bg-brand-dark/25 p-5 transition duration-300 hover:border-brand-accent/20 hover:bg-brand-dark/45"
                    id={`tech-card-${idx}`}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-800 text-neutral-300 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition duration-300">
                      <IconComp className="h-4.5 w-4.5" />
                    </div>
                    <h4 className="mt-4 font-display text-xs font-bold uppercase tracking-wider text-white select-none">
                      {tech.title}
                    </h4>
                    <p className="mt-2 text-[11px] text-neutral-400 leading-relaxed font-light">
                      {tech.desc}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
