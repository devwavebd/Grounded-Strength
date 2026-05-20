/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'programs' | 'contact';

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bioSummary: string;
  fullBio: string[];
  educationAndCredentials: string[];
  image: string;
  highlights: string[];
}

export interface Program {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price?: string;
  tagline: string;
  image: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  agreedToTerms: boolean;
}

export interface BookingSlot {
  id: string;
  time: string;
  available: boolean;
}
