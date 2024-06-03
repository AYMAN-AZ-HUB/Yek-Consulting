import React from 'react';
import ServicesSection from './sections/ServicesSection';
import PricingSection from './sections/services/PricingSection';
import Azholding from './sections/Azholding';
import Card from './sections/Card';
import ContactSection from './sections/ContactSection';
import Nospresentations from './sections/Nospresentations'

export default function Main() {
    return (
        <main className="flex-1">
            <ServicesSection />
            <Azholding />
            <Card />
            <PricingSection />
            <Nospresentations />
            <ContactSection />
        </main>
    );
}
