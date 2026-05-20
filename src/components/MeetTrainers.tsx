import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle, ChevronDown, ChevronUp, Calendar, Mail, FileText, ArrowRight } from 'lucide-react';
import { TRAINERS, KEY_PILLARS, BUSINESS_INFO } from '../data';
import { Page } from '../types';

interface MeetTrainersProps {
  onOpenBooking: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function MeetTrainers({ onOpenBooking, setCurrentPage }: MeetTrainersProps) {
  const [expandedTrainer, setExpandedTrainer] = useState<string | null>(null);

  const toggleExpandTrainer = (id: string) => {
    if (expandedTrainer === id) {
      setExpandedTrainer(null);
    } else {
      setExpandedTrainer(id);
    }
  };

  return (
    <section className="relative bg-brand-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Head Block */}
        <div className="mb-16 text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            EXPERT PHYSIOLOGICAL COACHES
          </span>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4.5xl">
            MEET YOUR TRAINERS
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-400 font-light">
            Each instructor at Grounded Strength Austin is a specialized neuromuscular practitioner, licensed under the revolutionary NeuFit system.
          </p>
        </div>

        {/* Dynamic Key Principles Carousel/Accordion Grid (Page 2 Header context) */}
        <div className="mb-24 rounded-2xl border border-brand-charcoal-light bg-brand-charcoal/40 p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold">OUR PROVEN COVENANTS</span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                THE 5 CORES OF GROUNDED STRENGTH
              </h3>
            </div>
            <div className="h-px flex-1 bg-brand-charcoal-light mx-4 hidden md:block" />
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand-accent/20 bg-brand-accent/5 hover:bg-brand-accent px-4 py-2 text-2xs font-bold uppercase tracking-wider text-brand-accent hover:text-neutral-950 transition font-display cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5" /> Book Consultation
            </button>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed font-light mb-8 max-w-4xl">
            At Grounded Strength, we use technology, proper alignment, and exercise selection to achieve better results than most gyms or even physical therapists. Here is our established roadmap to physical restoration:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {KEY_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="relative rounded-xl border border-brand-charcoal bg-brand-dark/45 p-5 transition hover:border-brand-accent/15"
                id={`pillar-${idx + 1}`}
              >
                <div className="absolute top-4 right-4 font-mono text-3xl font-extrabold text-brand-accent/10">
                  0{idx + 1}
                </div>
                <div className="mb-3 flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accent font-mono text-xs font-bold leading-none">
                  {idx + 1}
                </div>
                <h4 className="font-display text-[10px] font-bold uppercase tracking-wider text-white select-none">
                  {p.title}
                </h4>
                <p className="mt-2 text-[10.5px] text-neutral-400 leading-normal font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trainers List Grid */}
        <div className="space-y-16">
          {TRAINERS.map((trainer, index) => {
            const isExpanded = expandedTrainer === trainer.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={trainer.id}
                className={`flex flex-col gap-10 lg:items-center lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}
                id={`trainer-card-${trainer.id}`}
              >
                {/* Image Section */}
                <div className="relative w-full max-w-md shrink-0 mx-auto">
                  <div className="absolute inset-0 -m-1 rounded-3xl bg-gradient-to-tr from-brand-accent/25 to-brand-emerald-light/5 blur-lg opacity-40" />
                  <div className="relative overflow-hidden rounded-2xl border border-brand-charcoal bg-neutral-900 aspect-square">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-102 transition duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-left">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">{trainer.role}</span>
                      <h3 className="font-display text-2xl font-black text-white">{trainer.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Info Text Content */}
                <div className="flex-1 space-y-6 text-left">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold text-brand-gold uppercase tracking-widest">
                      NeuFit Methodologist
                    </span>
                    <h3 className="font-display text-3xl font-black uppercase tracking-tighter text-white">
                      {trainer.name}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {trainer.bioSummary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {trainer.highlights.map((hlt, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-400">
                        <CheckCircle className="h-4 w-4 text-brand-accent shrink-0" />
                        <span>{hlt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button Set */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => toggleExpandTrainer(trainer.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-brand-charcoal bg-brand-charcoal/30 hover:bg-neutral-800 hover:border-brand-accent/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition font-display cursor-pointer"
                    >
                      <FileText className="h-4 w-4 text-brand-accent" />
                      {isExpanded ? 'HIDE BIOGRAPHY' : `MORE ABOUT ${trainer.name.split(' ')[0].toUpperCase()}`}
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-transparent hover:border-brand-emerald-light/40 hover:bg-brand-emerald/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition font-display cursor-pointer"
                    >
                      <Mail className="h-4 w-4" />
                      QUESTIONS? GET IN TOUCH
                    </button>
                  </div>

                  {/* Accordion Expandable Biography Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t border-brand-charcoal-light pt-6 mt-6 space-y-4"
                        id={`trainer-extended-bio-${trainer.id}`}
                      >
                        <div className="space-y-3">
                          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                            COACHING PATH & REVOLUTION
                          </h4>
                          {trainer.fullBio.map((par, pidx) => (
                            <p key={pidx} className="text-xs text-neutral-350 leading-relaxed font-light">
                              {par}
                            </p>
                          ))}
                        </div>

                        <div className="space-y-2 pt-4">
                          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-gold flex items-center gap-1.5">
                            <Award className="h-3.5 w-3.5 text-brand-accent" /> EDUCATION & CREDENTIALS
                          </h4>
                          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {trainer.educationAndCredentials.map((crd, cidx) => (
                              <li key={cidx} className="flex items-start gap-2 text-[11px] text-neutral-400">
                                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                                <span>{crd}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <button
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-brand-accent text-neutral-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition font-display cursor-pointer"
                          >
                            <Calendar className="h-4 w-4" />
                            SCHEDULE WITH {trainer.name.split(' ')[0].toUpperCase()}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
