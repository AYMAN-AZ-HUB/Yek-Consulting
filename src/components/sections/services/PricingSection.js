import React, { useContext } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/Card';
import { CheckIcon } from '../../icons';
import { FaSearch, FaUsers, FaPenFancy } from "react-icons/fa";
import { FaBoltLightning, FaMapLocationDot, FaRegHandshake } from "react-icons/fa6";

import { ThemeContext } from '../../../contexts/ThemeContext.js'; // Assuming themeContext.js is in the same directory

import "./services.css";

export default function PricingSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl text-center md:text-3xl font-bold mb-8">Services</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PricingCard
                        title="Autorisations"
                        features={[
                            "Obtention  des autorisations administratives nécessaires à l’équipement énergétique",
                            "Autorisation d’exploiter, droit des  ICPE",
                            "Permis de construire",
                            "Contentieux des autorisations"
                        ]}
                        icon={FaPenFancy}
                    />
                    <PricingCard
                        title="Appels d'offres"
                        features={[
                            "Assistance à maîtrise d’ouvrage pour la passation des appels d’offres dans le secteur de l’énergie",
                            "Accompagnement des industriels dans la réponse aux appels d’offre"
                        ]}
                        icon={FaBoltLightning}
                    />
                    <PricingCard
                        title="Domaine public"
                        features={[
                            "Conclusion de baux requis pour l’équipement énergétique",
                            "Convention d’occupation du domaine public"
                        ]}
                        icon={FaMapLocationDot}
                    />
                    <PricingCard
                        title="Projets citoyens"
                        features={[
                            "Projets énergétiques portés ou soutenus par des associations",
                            "Gouvernance des projets",
                            "Subventions"
                        ]}
                        icon={FaUsers}
                    />
                    <PricingCard
                        title="Régulation"
                        features={[
                            "Accès au réseau public de transport ou de distribution",
                            "Mécanisme de soutien",
                            "Tarification",
                            "Autorités de régulation sectorielles (CSA, CRE, ARCEP, ARAF…)"
                        ]}
                        icon={FaRegHandshake}
                    />
                    <PricingCard
                        title="Audits"
                        features={[
                            "Audits réglementaires",
                            "Contrôle de conformité"
                        ]}

                        icon={FaSearch}
                    />
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, description, price, features, icon: Icon }) {
    const { theme } = useContext(ThemeContext);
    const darkMode = theme === 'dark';

    return (
        <Card className={`pricing-card ${darkMode ? 'dark' : ''}`}>

            <CardHeader>
                <div className="box">
                    <div className="flex items-center justify-center gap-2">
                        <Icon className="h-7 w-7 text-[#9b6a36]" />
                        <CardTitle className="title text-center text-xl">{title}</CardTitle>
                    </div>
                    <CardDescription className="sub-title">{description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold mb-2">{price}</div>
                <ul className="space-y-2 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckIcon className={`h-6 w-10 ${darkMode ? 'text-white' : 'text-black'}`} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}