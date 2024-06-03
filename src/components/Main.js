import React from 'react';
import ServicesSection from './sections/ServicesSection';
import PricingSection from './sections/PricingSection';
import PricingSection from './sections/services/PricingSection';
import ContactSection from './sections/ContactSection';

export default function Main() {
    return (
        <main className="flex-1">
            <ServicesSection />
            <PricingSection />
            <ContactSection />
        </main>
    );
}
