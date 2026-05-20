import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquareText, ShieldAlert, Sparkles, AlertCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface ContactViewProps {
  onOpenBooking: () => void;
}

export default function ContactView({ onOpenBooking }: ContactViewProps) {
  // Contact Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    setSubmitting(true);
    
    // Simulate API transmit
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedMessage(`Thank you, ${fullName}! Your neurological performance request has been transmitted securely.`);
      
      // Clear fields
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <section className="relative bg-brand-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="mb-16 text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            REACH OUT TO AUSTIN SPECIALISTS
          </span>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4.5xl">
            GET IN TOUCH
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-400 font-light">
            Questions regarding our NeuFit technology or customized long-term memberships? Transmission is direct and confidential.
          </p>
        </div>

        {/* 2-Columns Layout: Logo & Details on Left, Message Form on Right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Side: Brand Art Emblem + Location details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 text-left">
            <div>
              {/* Premium modern representation of the Grounded Strength GS Emblem / Badge */}
              <div className="relative mb-8 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-emerald to-neutral-900 border-2 border-brand-accent/30 p-4 shadow-xl">
                <svg
                  className="h-14 w-14 text-brand-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  <circle cx="12" cy="12" r="3" className="fill-brand-accent/15" />
                </svg>
                {/* Animated visual signal */}
                <div className="absolute -top-1 -left-1 flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                Grounded Strength
              </h3>
              <p className="mt-2 text-xs text-brand-gold uppercase font-mono tracking-widest font-semibold">
                Nervous System Optimization & High Performance Center
              </p>
            </div>

            {/* Quick Contact Info Bullet Panels */}
            <div className="space-y-6">
              
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-800 border border-brand-charcoal-light text-brand-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    OUR PRECISE LOCATION
                  </span>
                  <div className="mt-1 font-display text-sm font-bold text-white uppercase">
                    {BUSINESS_INFO.scheduleDisclaimer}
                  </div>
                  <p className="text-xs text-neutral-300 font-light mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-800 border border-brand-charcoal-light text-brand-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    CALL OR INQUIRE DIRECT
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="mt-1 block font-mono text-sm font-bold text-white hover:text-brand-accent transition"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[10px] text-neutral-500 font-light mt-0.5 uppercase tracking-wider">
                    Response prioritized within 2 business hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-800 border border-brand-charcoal-light text-brand-accent">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    TEXT US FOR DIRECT QUOTE
                  </span>
                  <a
                    href={`sms:${BUSINESS_INFO.textPhone}`}
                    className="mt-1 block font-mono text-sm font-bold text-white hover:text-brand-accent transition"
                  >
                    {BUSINESS_INFO.textPhone}
                  </a>
                  <p className="text-[10px] text-neutral-500 font-light mt-0.5 uppercase tracking-wider">
                    Text-capable support lines are permanently monitored.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA action buttons */}
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-charcoal hover:bg-neutral-800 border border-brand-charcoal-light hover:border-brand-accent/40 px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition duration-300 font-display cursor-pointer"
                id="contact-quick-scheduler-btn"
              >
                <Sparkles className="h-4 w-4 text-brand-accent animate-pulse" />
                OPEN APPOINTMENT SCHEDULER
              </button>
            </div>
          </div>

          {/* Right Side: Sending Inquiries Form Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-brand-charcoal-light bg-brand-charcoal/50 p-6 md:p-8 card-glow">
              <h3 className="font-display text-lg font-black uppercase text-white tracking-wide mb-6">
                SEND US A MESSAGE
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="text-left">
                    <label className="mb-1 block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="Enter Full Name"
                      className="w-full rounded-xl border border-brand-charcoal bg-brand-dark px-4 py-3 text-xs text-neutral-200 focus:border-brand-accent focus:outline-none transition font-sans font-light"
                      id="contact-form-name"
                    />
                  </div>
                  <div className="text-left">
                    <label className="mb-1 block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      className="w-full rounded-xl border border-brand-charcoal bg-brand-dark px-4 py-3 text-xs text-neutral-200 focus:border-brand-accent focus:outline-none transition font-sans font-light"
                      id="contact-form-email"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="mb-1 block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Phone Number (SMS Capable) *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-2xs text-neutral-500 border-r border-brand-charcoal pr-2.5">
                      {/* Interactive Visual Flag */}
                      <span className="text-xs">🇺🇸</span>
                      <span>+1</span>
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="(512) 289-1382"
                      className="w-full rounded-xl border border-brand-charcoal bg-brand-dark pl-20 pr-4 py-3 text-xs text-neutral-200 focus:border-brand-accent focus:outline-none transition font-mono"
                      id="contact-form-phone"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="mb-1 block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Inquiry Message / Performance Background
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us about your fitness targets, background trauma, or pain areas..."
                    className="w-full rounded-xl border border-brand-charcoal bg-brand-dark px-4 py-3 text-xs text-neutral-200 focus:border-brand-accent focus:outline-none transition font-sans font-light leading-relaxed"
                    id="contact-form-msg"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-[11px] text-neutral-400 leading-normal select-none cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-0.5 rounded border-brand-charcoal bg-brand-dark text-brand-emerald-light transition focus:ring-brand-accent"
                  />
                  <span>
                    I agree to the terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </span>
                </label>

                {/* Response / Success feedback message with motion slider */}
                <AnimatePresence>
                  {submittedMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-400 flex items-start gap-2.5 text-left"
                      id="contact-form-success"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <div>
                        <strong>SUCCESS:</strong> {submittedMessage}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-brand-accent text-neutral-950 font-display text-xs font-extrabold uppercase tracking-widest py-4 transition disabled:opacity-45 cursor-pointer"
                    id="contact-submit-inquiry-btn"
                  >
                    {submitting ? (
                      <span className="animate-spin rounded-full h-4.5 w-4.5 border-2 border-neutral-950 border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        SEND US A MESSAGE
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
