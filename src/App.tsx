/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import MeetTrainers from './components/MeetTrainers';
import ProgramsView from './components/ProgramsView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Sparkles, Navigation, CalendarCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState('long-term');

  const handleOpenBookingWithProgram = (progId: string) => {
    setSelectedProgramId(progId);
    setBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedProgramId('long-term');
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-neutral-100 flex flex-col justify-between selection:bg-brand-accent selection:text-neutral-950 font-sans antialiased">
      
      {/* Header element */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Main viewport with dynamic page animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            id="page-transition-wrapper"
          >
            {currentPage === 'home' && (
              <>
                <Hero
                  onOpenBooking={handleOpenGeneralBooking}
                  setCurrentPage={setCurrentPage}
                />
                <WhyUs onOpenBooking={handleOpenGeneralBooking} />
                <MeetTrainers
                  onOpenBooking={handleOpenGeneralBooking}
                  setCurrentPage={setCurrentPage}
                />
                <ProgramsView
                  onOpenBooking={handleOpenGeneralBooking}
                  setSelectedProgram={setSelectedProgramId}
                />
                <ContactView onOpenBooking={handleOpenGeneralBooking} />
              </>
            )}

            {currentPage === 'about' && (
              <>
                {/* Specific Header Accent for About US details (Meets Screenshot 2 visual context) */}
                <section className="relative overflow-hidden bg-gradient-to-b from-brand-emerald/20 to-brand-dark py-20 text-center border-b border-brand-charcoal-light">
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
                  <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <svg className="absolute h-full w-full" width="100%" height="100%">
                      <defs>
                        <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(5, 243, 162, 0.4)" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                  </div>
                  <div className="relative z-10 mx-auto max-w-4xl px-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-3 block">
                      WHO WE ARE
                    </span>
                    <h1 className="font-display text-4xl font-black uppercase text-white tracking-tight sm:text-5.5xl md:text-6xl">
                      OUR CLINICAL TRAINERS
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-350 leading-relaxed font-light">
                      At Grounded Strength, we combine proper physical alignment, tailored neuromuscular mapping tools, and personalized exercise selections to treat chronic joint pain and fuel modern athletic potential.
                    </p>
                  </div>
                </section>
                <MeetTrainers
                  onOpenBooking={handleOpenGeneralBooking}
                  setCurrentPage={setCurrentPage}
                />
                <WhyUs onOpenBooking={handleOpenGeneralBooking} />
              </>
            )}

            {currentPage === 'programs' && (
              <>
                {/* Specific Header Accent for Programs View */}
                <section className="relative overflow-hidden bg-gradient-to-b from-brand-emerald/20 to-brand-dark py-20 text-center border-b border-brand-charcoal-light">
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
                  <div className="relative z-10 mx-auto max-w-4xl px-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3 block">
                      BIO-FEEDBACK TRAINING Blueprints
                    </span>
                    <h1 className="font-display text-4xl font-black uppercase text-white tracking-tight sm:text-5.5xl md:text-6xl">
                      OUR PROGRAMS
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-350 leading-relaxed font-light">
                      Browse three distinct physical membership models configured intentionally around the computer-controlled load metrics of ARX systems and direct electrode configurations of NeuFit.
                    </p>
                  </div>
                </section>
                <ProgramsView
                  onOpenBooking={handleOpenGeneralBooking}
                  setSelectedProgram={setSelectedProgramId}
                />
                <WhyUs onOpenBooking={handleOpenGeneralBooking} />
              </>
            )}

            {currentPage === 'contact' && (
              <>
                {/* Specific Header Accent for Contacts View */}
                <section className="relative overflow-hidden bg-gradient-to-b from-brand-emerald/20 to-brand-dark py-20 text-center border-b border-brand-charcoal-light">
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
                  <div className="relative z-10 mx-auto max-w-4xl px-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-3 block">
                      RESERVE SECURE SCHEDULING
                    </span>
                    <h1 className="font-display text-4xl font-black uppercase text-white tracking-tight sm:text-5.5xl md:text-6xl">
                      CONTACT US TODAY
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-350 leading-relaxed font-light">
                      Choose to transmit direct structured inquiries or lock in your digital performance booking time using our physical appointment scheduler below.
                    </p>
                  </div>
                </section>
                <ContactView onOpenBooking={handleOpenGeneralBooking} />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer element */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Persistent General Interactive Scheduling Overlay */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialProgramId={selectedProgramId}
      />
    </div>
  );
}
