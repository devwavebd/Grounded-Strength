import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Check, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { TRAINERS, PROGRAMS, AVAILABLE_HOURS, BUSINESS_INFO } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrainerId?: string;
  initialProgramId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialTrainerId = 'bert',
  initialProgramId = 'long-term'
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedTrainer, setSelectedTrainer] = useState(initialTrainerId);
  const [selectedProgram, setSelectedProgram] = useState(initialProgramId);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [agreeTexts, setAgreeTexts] = useState(true);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  // Generate a mock range of dates for scheduling (next 7 days starting tomorrow)
  const getUpcomingDates = () => {
    const dates = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        dayOfWeek: days[d.getDay()],
        dayOfMonth: d.getDate(),
        month: months[d.getMonth()],
        fullString: `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`
      });
    }
    return dates;
  };

  const datesList = getUpcomingDates();

  const handleNextStep = () => {
    if (step === 1 && (!selectedTrainer || !selectedProgram)) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep(prev => prev + 1);
  };

  const handleBackStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) return;
    setBookedSuccess(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedTrainer(initialTrainerId);
    setSelectedProgram(initialProgramId);
    setSelectedDate('');
    setSelectedTime('');
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setBookedSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  const currentTrainerObj = TRAINERS.find(t => t.id === selectedTrainer);
  const currentProgramObj = PROGRAMS.find(p => p.id === selectedProgram);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md"
          id="booking-modal-overlay"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-brand-charcoal-light bg-neutral-900 text-neutral-100 card-glow z-10"
          id="booking-modal-container"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-charcoal-light px-6 py-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-accent" />
              <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase">
                {bookedSuccess ? 'CONGRATULATIONS' : `STEP ${step} OF 3: APPOINTMENT SCHEDULER`}
              </h3>
            </div>
            <button
              onClick={resetAndClose}
              className="rounded-full p-1.5 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
              aria-label="Close dialog"
              id="booking-close-btn"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!bookedSuccess ? (
            <div className="p-6">
              {/* Step Indicators */}
              <div className="mb-6 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold font-mono ${step >= 1 ? 'bg-brand-accent text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>1</span>
                  <span className="hidden text-xs font-semibold tracking-wider text-neutral-400 uppercase sm:inline">Preferences</span>
                </div>
                <div className="h-px flex-1 bg-brand-charcoal-light mx-3" />
                <div className="flex items-center gap-2">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold font-mono ${step >= 2 ? 'bg-brand-accent text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>2</span>
                  <span className="hidden text-xs font-semibold tracking-wider text-neutral-400 uppercase sm:inline">Date & Time</span>
                </div>
                <div className="h-px flex-1 bg-brand-charcoal-light mx-3" />
                <div className="flex items-center gap-2">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold font-mono ${step >= 3 ? 'bg-brand-accent text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>3</span>
                  <span className="hidden text-xs font-semibold tracking-wider text-neutral-400 uppercase sm:inline">User Details</span>
                </div>
              </div>

              {/* Step 1: Trainer & Program Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="mb-3 block text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                      Select Your Dedicated Coach
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {TRAINERS.map(t => (
                        <div
                          key={t.id}
                          onClick={() => setSelectedTrainer(t.id)}
                          className={`group cursor-pointer rounded-xl border p-4 transition duration-200 ${
                            selectedTrainer === t.id
                              ? 'border-brand-accent bg-brand-emerald/20 text-white'
                              : 'border-brand-charcoal hover:border-neutral-700 bg-brand-charcoal/40 text-neutral-300'
                          }`}
                          id={`trainer-option-${t.id}`}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={t.image}
                              alt={t.name}
                              referrerPolicy="no-referrer"
                              className="h-12 w-12 rounded-lg object-cover border border-neutral-750"
                            />
                            <div>
                              <h4 className="font-display font-bold text-white group-hover:text-brand-accent transition">
                                {t.name}
                              </h4>
                              <p className="text-xs text-neutral-400">{t.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                      Select Performance Program
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {PROGRAMS.map(p => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedProgram(p.id)}
                          className={`cursor-pointer rounded-xl border p-4 text-center transition duration-200 ${
                            selectedProgram === p.id
                              ? 'border-brand-accent bg-brand-emerald/20 text-white'
                              : 'border-brand-charcoal hover:border-neutral-700 bg-brand-charcoal/40 text-neutral-300'
                          }`}
                          id={`program-option-${p.id}`}
                        >
                          <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-brand-accent font-mono text-sm font-bold">
                            {p.number}
                          </div>
                          <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                            {p.title}
                          </h4>
                          <p className="mt-1 text-[10px] text-neutral-400 uppercase tracking-widest leading-normal">
                            {p.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Picker */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="mb-3 block text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                      Select Consultation Date
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {datesList.map((d, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(d.fullString)}
                          className={`flex min-w-[76px] flex-col items-center rounded-lg border py-3 px-2 transition select-none ${
                            selectedDate === d.fullString
                              ? 'border-brand-accent bg-brand-emerald/20 text-white'
                              : 'border-brand-charcoal hover:border-neutral-700 bg-brand-charcoal/40 text-neutral-300'
                          }`}
                          id={`date-option-${index}`}
                        >
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                            {d.dayOfWeek}
                          </span>
                          <span className="my-1 font-display text-xl font-bold">
                            {d.dayOfMonth}
                          </span>
                          <span className="text-[10px] uppercase">
                            {d.month}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {AVAILABLE_HOURS.map((h, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedTime(h)}
                          className={`rounded-lg border py-2 px-1 text-center font-mono text-xs transition duration-150 ${
                            selectedTime === h
                              ? 'border-brand-accent bg-brand-accent text-neutral-950 font-bold'
                              : 'border-brand-charcoal hover:border-neutral-700 bg-brand-charcoal/40 text-neutral-300'
                          }`}
                          id={`time-option-${i}`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Enter User Details */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="rounded-xl bg-brand-charcoal/60 p-4 border border-brand-charcoal-light mb-4">
                    <p className="text-xs text-brand-gold uppercase tracking-wider font-semibold mb-2">SUMMARY</p>
                    <div className="grid grid-cols-2 gap-y-2 text-xs text-neutral-300">
                      <div><span className="text-neutral-500">Coach:</span> <strong className="text-white">{currentTrainerObj?.name}</strong></div>
                      <div><span className="text-neutral-500">Program:</span> <strong className="text-white">{currentProgramObj?.title}</strong></div>
                      <div><span className="text-neutral-500">Date:</span> <strong className="text-brand-accent">{selectedDate}</strong></div>
                      <div><span className="text-neutral-500">Time:</span> <strong className="text-brand-accent">{selectedTime}</strong></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-brand-charcoal-light bg-brand-charcoal px-3 py-2 text-sm text-neutral-200 focus:border-brand-accent focus:outline-none transition"
                        id="booking-name-field"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={e => setClientEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        className="w-full rounded-lg border border-brand-charcoal-light bg-brand-charcoal px-3 py-2 text-sm text-neutral-200 focus:border-brand-accent focus:outline-none transition"
                        id="booking-email-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-2.5 left-3 h-4 w-4 text-neutral-500" />
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={e => setClientPhone(e.target.value)}
                        placeholder="(512) 555-0199"
                        className="w-full rounded-lg border border-brand-charcoal-light bg-brand-charcoal pl-9 pr-3 py-2 text-sm text-neutral-200 focus:border-brand-accent focus:outline-none transition"
                        id="booking-phone-field"
                      />
                    </div>
                  </div>

                  <label className="mt-3 flex items-start gap-2.5 text-xs text-neutral-400 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeTexts}
                      onChange={e => setAgreeTexts(e.target.checked)}
                      required
                      className="mt-0.5 rounded border-brand-charcoal bg-brand-charcoal text-brand-emerald-light transition focus:ring-brand-accent focus:ring-offset-neutral-900"
                    />
                    <span>
                      I agree to the terms & conditions of {BUSINESS_INFO.name}. By providing my number, I explicitly agree to receive confirmation & reminders via text message from this business.
                    </span>
                  </label>

                  {/* Actions Bar inside Form */}
                  <div className="mt-6 flex items-center justify-between border-t border-brand-charcoal-light pt-4">
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="text-xs font-semibold tracking-wider text-neutral-400 uppercase hover:text-white transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 transition hover:bg-brand-accent font-display cursor-pointer"
                      id="booking-submit-btn"
                    >
                      <Send className="h-3.5 w-3.5" />
                      Book Appointment
                    </button>
                  </div>
                </form>
              )}

              {/* Default Step Progress Actions */}
              {step < 3 && (
                <div className="mt-6 flex items-center justify-between border-t border-brand-charcoal-light pt-4">
                  {step > 1 ? (
                    <button
                      onClick={handleBackStep}
                      className="text-xs font-semibold tracking-wider text-neutral-400 uppercase hover:text-white transition"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    disabled={
                      (step === 1 && (!selectedTrainer || !selectedProgram)) ||
                      (step === 2 && (!selectedDate || !selectedTime))
                    }
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-800 hover:bg-brand-emerald-light border border-neutral-750 hover:text-neutral-950 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition disabled:opacity-40 disabled:pointer-events-none cursor-pointer font-display"
                    id="booking-next-btn"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/25 ring-8 ring-brand-accent/10">
                <ShieldCheck className="h-8 w-8 text-brand-accent animate-pulse" />
              </div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white uppercase">
                Appointment Secured
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-neutral-300">
                Excellent selection, <strong>{clientName}</strong>! Your neuromuscular evaluation with <strong>{currentTrainerObj?.name}</strong> has been prioritized.
              </p>
              
              <div className="mx-auto mt-6 max-w-sm rounded-xl border border-brand-charcoal-light bg-brand-charcoal/50 p-4 text-xs text-neutral-350">
                <div className="mb-2 uppercase font-semibold text-brand-gold tracking-widest text-[10px]">Session Blueprint</div>
                <div className="space-y-1">
                  <div><strong>Trainer:</strong> {currentTrainerObj?.name}</div>
                  <div><strong>Focus:</strong> {currentProgramObj?.title} ({currentProgramObj?.subtitle})</div>
                  <div><strong>Scheduled On:</strong> {selectedDate} at {selectedTime}</div>
                  <div className="mt-2 text-[10px] text-green-400">✓ A confirmation text has been transmitted to {clientPhone}</div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={resetAndClose}
                  className="rounded-lg bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 transition hover:bg-neutral-700 hover:text-white cursor-pointer font-display"
                  id="booking-done-btn"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
