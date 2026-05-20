import { HelpCircle, Phone, MapPin, ExternalLink, CalendarDays, KeyRound, Globe, ArrowUp } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onOpenBooking: () => void;
}

export default function Footer({ setCurrentPage, onOpenBooking }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-brand-charcoal-light/60 text-left pt-20 pb-8 text-neutral-400 font-sans font-light">
      
      {/* Decorative gradient accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Column 1: Logo & Brief Bio statement */}
          <div className="lg:col-span-5 space-y-6">
            <div
              onClick={() => {
                setCurrentPage('home');
                scrollToTop();
              }}
              className="flex cursor-pointer items-center gap-3 group"
              id="footer-logo-btn"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-emerald border border-brand-accent/30 text-brand-accent transition duration-300 group-hover:border-brand-accent">
                <svg
                  className="h-6 w-6 text-brand-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="font-display text-base font-extrabold tracking-widest text-white group-hover:text-brand-accent transition">
                  GROUNDED
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                  STRENGTH ATX
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-450 leading-relaxed max-w-md">
              Clinical personal training focused on optimizing the nervous system to treat joint trauma constraints and release complete, high-performance athletic strength. Based in Austin, Texas.
            </p>

            <div className="flex items-center gap-4.5 text-xs">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-brand-accent" /> Austin Location (HQ)
              </span>
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              IMPORTANT LINKS
            </h4>
            <div className="h-0.5 w-10 bg-brand-accent border-none" />

            <nav className="flex flex-col gap-3 font-mono text-xs text-neutral-350">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  scrollToTop();
                }}
                className="text-left hover:text-brand-accent transition"
                id="footer-link-home"
              >
                &gt; HOME
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  scrollToTop();
                }}
                className="text-left hover:text-brand-accent transition"
                id="footer-link-about"
              >
                &gt; ABOUT US
              </button>
              <button
                onClick={() => {
                  setCurrentPage('programs');
                  scrollToTop();
                }}
                className="text-left hover:text-brand-accent transition"
                id="footer-link-programs"
              >
                &gt; PROGRAMS
              </button>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  scrollToTop();
                }}
                className="text-left hover:text-brand-accent transition"
                id="footer-link-contact"
              >
                &gt; CONTACT
              </button>
            </nav>
          </div>

          {/* Column 3: Contact Info Indices & Action */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              LOCATION & BOOKING
            </h4>
            <div className="h-0.5 w-10 bg-brand-accent border-none" />

            <div className="space-y-3.5 text-xs text-neutral-350">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-emerald-light shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-emerald-light shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-brand-accent text-neutral-950 px-5.5 py-3 text-xs font-bold uppercase tracking-wider transition font-display cursor-pointer"
                id="footer-train-cta"
              >
                <CalendarDays className="h-3.5 w-3.5" />
                TRAIN WITH US
              </button>
            </div>
          </div>

        </div>

        {/* Divider separator */}
        <div className="h-px bg-brand-charcoal border-none my-12" />

        {/* Bottom baseline layout */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-[10px] text-neutral-500">
          <div>
            COPYRIGHT © 2026 | GROUNDED STRENGTH | POWERED BY MARKETING BEAVER
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-brand-accent transition font-bold"
              id="back-to-top-btn"
            >
              BACK TO TOP <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
