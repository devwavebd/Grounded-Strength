import { Phone, CalendarCheck, Menu, X, ShieldAlert } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data';
import { useState } from 'react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT', page: 'about' },
    { label: 'PROGRAMS', page: 'programs' },
    { label: 'CONTACT', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-charcoal-light/60 bg-brand-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex cursor-pointer items-center gap-2.5 group"
          id="logo-button"
        >
          {/* Custom SVG logo: styled Gym 'GS' emblem with root structures */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-emerald to-neutral-900 border border-brand-emerald-light/40 group-hover:border-brand-accent transition duration-300">
            <svg
              className="h-6 w-6 text-brand-accent transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-brand-accent animate-pulse" />
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

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => {
                setCurrentPage(item.page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-display text-xs font-bold uppercase tracking-widest transition duration-200 cursor-pointer ${
                currentPage === item.page
                  ? 'text-brand-accent border-b-2 border-brand-accent pb-1'
                  : 'text-neutral-300 hover:text-white'
              }`}
              id={`nav-${item.page}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 rounded-lg border border-brand-charcoal px-3 py-2 text-xs font-bold font-mono text-neutral-300 transition hover:border-brand-accent hover:text-white"
            id="header-phone-link"
          >
            <Phone className="h-3.5 w-3.5 text-brand-emerald-light" />
            {BUSINESS_INFO.phone}
          </a>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-brand-accent text-neutral-950 px-4.5 py-2 text-xs font-bold uppercase tracking-wider transition font-display cursor-pointer"
            id="header-schedule-btn"
          >
            <CalendarCheck className="h-3.5 w-3.5 font-bold" />
            SCHEDULE NOW
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="rounded-lg border border-brand-charcoal p-2 text-neutral-300 transition hover:border-brand-emerald-light"
            aria-label="Call business"
            id="mobile-phone-call"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg bg-brand-charcoal p-2 text-white hover:bg-neutral-800"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER NAV */}
      {mobileMenuOpen && (
        <div className="border-t border-brand-charcoal-light bg-neutral-900 py-4 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left font-display text-sm font-bold uppercase tracking-widest py-1.5 ${
                  currentPage === item.page ? 'text-brand-accent' : 'text-neutral-300 hover:text-white'
                }`}
                id={`mobile-nav-${item.page}`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-px bg-brand-charcoal border-none my-2" />

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">
                {BUSINESS_INFO.scheduleDisclaimer}
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 text-xs font-bold uppercase tracking-wider text-neutral-500 text-neutral-950 transition hover:bg-brand-accent"
                id="mobile-schedule-now-btn"
              >
                <CalendarCheck className="h-4 w-4" />
                SCHEDULE APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
