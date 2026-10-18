/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AreasOfCare } from './components/AreasOfCare';
import { GrowthCalculator } from './components/GrowthCalculator';
import { LiveConsultancy } from './components/LiveConsultancy';
import { PatientResources } from './components/PatientResources';
import { PublicationsSection } from './components/PublicationsSection';
import { PediatricNutritionCalculator } from './components/PediatricNutritionCalculator';
import { ClinicalUpdates } from './components/ClinicalUpdates';
import { ParentFAQ } from './components/ParentFAQ';
import { AppointmentEnquiry } from './components/AppointmentEnquiry';
import { ClinicLocation } from './components/ClinicLocation';
import { DoctorReferralModal } from './components/DoctorReferralModal';
import { PWAInstallModal } from './components/PWAInstallModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Footer } from './components/Footer';

function AppContent() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isLiveConsultModalOpen, setIsLiveConsultModalOpen] = useState(false);
  const [isDoctorReferralOpen, setIsDoctorReferralOpen] = useState(false);
  const [isPWAInstallOpen, setIsPWAInstallOpen] = useState(false);
  const [preselectedCondition, setPreselectedCondition] = useState<string | undefined>(undefined);
  const [liveConsultChildName, setLiveConsultChildName] = useState<string>('');
  const [liveConsultConcern, setLiveConsultConcern] = useState<string>('');

  const handleOpenEnquiry = (conditionTitle?: string) => {
    if (conditionTitle) {
      setPreselectedCondition(conditionTitle);
    }
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setPreselectedCondition(undefined);
  };

  const handleOpenLiveConsult = (childName?: string, concern?: string) => {
    if (childName) setLiveConsultChildName(childName);
    if (concern) setLiveConsultConcern(concern);
    setIsLiveConsultModalOpen(true);
  };

  const handleCloseLiveConsult = () => {
    setIsLiveConsultModalOpen(false);
  };

  const handleOpenPWAInstall = () => {
    setIsPWAInstallOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFE] text-[#10253F] relative">
      {/* Offline Status Alert */}
      <OfflineIndicator />

      {/* Premium Sticky Navigation */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenLiveConsult={() => handleOpenLiveConsult()}
        onOpenPWAInstall={handleOpenPWAInstall}
      />

      <main className="flex-1 pb-20 md:pb-0">
        {/* Section B: Hero Experience */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onOpenLiveConsult={() => handleOpenLiveConsult()}
          onOpenPWAInstall={handleOpenPWAInstall}
        />

        {/* About Dr. Rakesh Kumar & PGIMER Chandigarh */}
        <AboutSection />

        {/* Clinical Areas of Care & Conditions */}
        <AreasOfCare
          onSelectConditionForEnquiry={(condTitle) => handleOpenEnquiry(condTitle)}
        />

        {/* Live Appointment & Tele-Consultancy Portal */}
        <LiveConsultancy />

        {/* Clinical Growth & Mid-Parental Height Calculator */}
        <GrowthCalculator />

        {/* Approved Patient Resources & Google Docs Library */}
        <PatientResources />

        {/* Pediatric Indian Nutrition, Food Image Scanner & Insulin Calculator (< 17 Years) */}
        <PediatricNutritionCalculator />

        {/* Research & Publications */}
        <PublicationsSection />

        {/* Evidence-Based Clinical Updates & Health Bulletins */}
        <ClinicalUpdates
          onDiscussWithDoctor={(topicTitle) => handleOpenEnquiry(`Regarding Clinical Update: ${topicTitle}`)}
        />

        {/* Dedicated Accordion FAQ Section for Parents */}
        <ParentFAQ
          onOpenEnquiry={(condition) => handleOpenEnquiry(condition)}
          onOpenLiveConsult={() => handleOpenLiveConsult()}
          onOpenGrowthCalc={() => {
            const el = document.getElementById('growth-calculator');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenHypoGuide={() => {
            const el = document.getElementById('hypo-guide');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Embedded Appointment Enquiry Form Section */}
        <AppointmentEnquiry
          preselectedCondition={preselectedCondition}
          onLaunchLiveConsult={(name, concern) => handleOpenLiveConsult(name, concern)}
        />

        {/* Clinic Location, OPD Timings, Map & FAQs */}
        <ClinicLocation onOpenDoctorReferral={() => setIsDoctorReferralOpen(true)} />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenDoctorReferral={() => setIsDoctorReferralOpen(true)}
        onOpenLiveConsult={() => handleOpenLiveConsult()}
        onOpenPWAInstall={handleOpenPWAInstall}
      />

      {/* Mobile Sticky Quick Action Bar (iOS & Android) */}
      <MobileQuickBar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenLiveConsult={() => handleOpenLiveConsult()}
        onOpenPWAInstall={handleOpenPWAInstall}
      />

      {/* Appointment Enquiry Modal */}
      {isEnquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10253F]/65 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <AppointmentEnquiry
            isModal={true}
            onClose={handleCloseEnquiry}
            preselectedCondition={preselectedCondition}
            onLaunchLiveConsult={(name, concern) => {
              handleCloseEnquiry();
              handleOpenLiveConsult(name, concern);
            }}
          />
        </div>
      )}

      {/* Live Video Teleconsultation Modal */}
      {isLiveConsultModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#10253F]/75 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <LiveConsultancy
            isModal={true}
            onClose={handleCloseLiveConsult}
            prefilledChildName={liveConsultChildName}
            prefilledConcern={liveConsultConcern}
          />
        </div>
      )}

      {/* Referring Doctor Portal Modal */}
      <DoctorReferralModal
        isOpen={isDoctorReferralOpen}
        onClose={() => setIsDoctorReferralOpen(false)}
      />

      {/* PWA Home Screen Installation Modal for iOS & Android */}
      <PWAInstallModal
        isOpen={isPWAInstallOpen}
        onClose={() => setIsPWAInstallOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
