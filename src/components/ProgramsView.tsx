import { motion } from 'motion/react';
import { Layers, CreditCard, Sparkles, Check, ArrowRight, Zap, Target, Star } from 'lucide-react';
import { PROGRAMS } from '../data';

interface ProgramsViewProps {
  onOpenBooking: () => void;
  setSelectedProgram: (progId: string) => void;
}

export default function ProgramsView({ onOpenBooking, setSelectedProgram }: ProgramsViewProps) {
  const customIcons = [Layers, CreditCard, Sparkles];

  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-24 lg:py-32 border-y border-brand-charcoal-light/30">
      {/* Background radial soft light blobs for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-emerald-light/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Head copy block */}
        <div className="mb-16 text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            FLEXIBLE RESULTS-DRIVEN PACKAGES
          </span>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4.5xl">
            COACHING PROGRAMS
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-400 font-light">
            Our systematic personal training plans integrate visual nervous mapping, customizable strength load levels, and scientific asymmetry calibrations.
          </p>
        </div>

        {/* 3 Columns Program Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROGRAMS.map((prog, idx) => {
            const IconComponent = customIcons[idx] || Sparkles;
            
            return (
              <div
                key={prog.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-brand-charcoal-light bg-brand-dark/30 p-6 transition duration-300 hover:border-brand-accent/25 hover:bg-brand-dark/50 card-glow"
                id={`program-card-item-${prog.id}`}
              >
                {/* Accent Top Lip */}
                <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-brand-emerald-light/20 to-brand-accent/20 group-hover:from-brand-accent group-hover:to-brand-accent transition duration-300" />

                <div className="space-y-6">
                  {/* Badge & Program Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent border border-brand-accent/25">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
                      TIER 0{prog.number}
                    </span>
                  </div>

                  {/* Header Titles */}
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white group-hover:text-brand-accent transition">
                      {prog.title}
                    </h3>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                      {prog.subtitle}
                    </p>
                  </div>

                  {/* Price Tag Graphic */}
                  <div className="rounded-xl bg-brand-charcoal/50 p-3.5 border border-brand-charcoal-light">
                    <span className="block text-[9px] uppercase tracking-widest text-neutral-500">PROGRAM INVESTMENT</span>
                    <strong className="font-display text-sm font-bold text-white uppercase tracking-wider">{prog.price}</strong>
                  </div>

                  {/* Program Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {prog.description}
                  </p>

                  <div className="h-px bg-brand-charcoal-light border-none" />

                  {/* Bullet features */}
                  <div className="space-y-2.5">
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-neutral-500">WHAT IS INCLUDED:</span>
                    {prog.features.map((f, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-neutral-350">
                        <Check className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" strokeWidth="2.5" />
                        <span className="font-light">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      setSelectedProgram(prog.id);
                      onOpenBooking();
                    }}
                    className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-xl border border-brand-charcoal group-hover:border-brand-accent/50 bg-brand-charcoal/30 group-hover:bg-brand-accent text-neutral-300 group-hover:text-neutral-950 py-3.5 text-xs font-bold uppercase tracking-widest transition duration-300 font-display cursor-pointer"
                    id={`start-training-${prog.id}`}
                  >
                    START YOUR TRAINING
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-banner: Science of Neurological Training */}
        <div className="mt-16 rounded-2xl border border-brand-accent/15 bg-gradient-to-tr from-brand-emerald/15 to-brand-dark/40 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-start gap-4 text-left">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                <Zap className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="block font-display text-xs font-bold uppercase text-white">HI-TECH NEUROMUSCULAR</span>
                <p className="mt-1 text-[11px] text-neutral-450 leading-relaxed font-light">
                  Direct targeting of nervous constraints to quickly release deep, continuous range of functional muscle movement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                <Target className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="block font-display text-xs font-bold uppercase text-white">SYMMETRIC LOAD PLANNING</span>
                <p className="mt-1 text-[11px] text-neutral-450 leading-relaxed font-light">
                  Computerized assessment machinery that perfectly matches muscle capacity with safe force loads to prevent sports injuries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                <Star className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="block font-display text-xs font-bold uppercase text-white">PROVEN TRAJECTORY FLOWS</span>
                <p className="mt-1 text-[11px] text-neutral-450 leading-relaxed font-light">
                  Structured scientific programs created so business executives & amateur sports participants can safely restore physical confidence.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
