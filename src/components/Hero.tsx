import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Target, Flame } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ onOpenBooking, setCurrentPage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 lg:py-36">
      {/* Visual Background Element: Ambient Dark Tech Matrix */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg className="absolute h-full w-full" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(5, 243, 162, 0.4)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-accent/20 blur-[130px]" />
        <div className="absolute left-10 bottom-1/4 h-80 w-80 rounded-full bg-brand-emerald-light/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Superior Neurological Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-emerald/15 px-4.5 py-1.5 text-xs font-bold font-mono text-brand-accent tracking-widest uppercase mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {BUSINESS_INFO.tagline}
        </motion.div>

        {/* Brand Display Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          GROUNDED <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-emerald-light">STRENGTH</span>
        </motion.h1>

        {/* Custom Agency-Style Line Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base text-neutral-400 font-sans tracking-wide leading-relaxed"
        >
          Experience a revolutionary personal training breakthrough in Austin, Texas. We utilize clinical, cutting-edge neuromuscular technologies to cure physical pain and unlock maximum athletic power.
        </motion.p>

        {/* CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-brand-accent text-neutral-950 px-8 py-4 font-display text-[13px] font-extrabold uppercase tracking-widest transition duration-300 transform hover:-translate-y-0.5 pointer duration-200 cursor-pointer"
            id="hero-train-btn"
          >
            TRAIN WITH US
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => {
              setCurrentPage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center rounded-xl border border-brand-charcoal hover:border-brand-accent bg-brand-charcoal/30 hover:bg-brand-charcoal/60 px-8 py-4 font-display text-[13px] font-bold uppercase tracking-widest text-white transition duration-300 cursor-pointer"
            id="hero-about-btn"
          >
            ABOUT OUR METHOD
          </button>
        </motion.div>

        {/* Interactive Luxury Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', sharpness: 100 }}
          className="mx-auto mt-20 max-w-4xl rounded-2xl border border-brand-accent/20 bg-gradient-to-r from-brand-emerald/15 via-brand-charcoal/80 to-brand-emerald/15 p-6 md:p-8 card-glow"
          id="hero-value-card"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:text-left justify-between">
            {/* Metric Pillar 1 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-gold">Nervous System Focus</span>
                <p className="mt-1 text-xs text-neutral-350 leading-relaxed font-sans font-light">
                  Targeting nerve-to-muscle firing sequences to alleviate pain permanently.
                </p>
              </div>
            </div>

            {/* Split line on desktop */}
            <div className="hidden md:block h-12 w-px bg-brand-accent/10" />

            {/* Metric Pillar 2 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-emerald-light/10 border border-brand-emerald-light/30 text-brand-emerald-light">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-gold">Advanced Precision</span>
                <p className="mt-1 text-xs text-neutral-350 leading-relaxed font-sans font-light">
                  Replacing old workout methods with visual, computer-guided force metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-brand-charcoal-light my-5 md:my-6 border-none" />

          {/* Core Banner Statement */}
          <blockquote className="text-center font-display text-sm font-semibold tracking-wide text-neutral-200 uppercase leading-relaxed max-w-2xl mx-auto">
            &ldquo;{BUSINESS_INFO.heroBannerQuote}&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
