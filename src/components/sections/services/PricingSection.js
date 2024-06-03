import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/Card';
import { CheckIcon } from '../../icons';
import { FaSearch, FaUsers, FaPenFancy } from "react-icons/fa";
import { FaBoltLightning, FaMapLocationDot, FaRegHandshake } from "react-icons/fa6";
import "./services.css";

export default function PricingSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl text-center md:text-3xl font-bold mb-8">Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
 
                    <PricingCard
                        title="Conseil "
                        features={[
                            "Rédaction et négociation de contrats ",

                            "Etude de faisabilité et assistance des projets" ,
                            
                            "Conseil sur les options de financement ",
                            
                            "Conseil sur la conformité aux traités internationaux" 
                        ]}
                        icon={FaMapLocationDot}
                    />
                    <PricingCard
                        title="Contentieux et arbitrage"
                        features={[
                            "Résolution des litiges contractuels ",

                            "Arbitrage national et international" ,
                            
                            "Contestations de décisions réglementaires" ,
                            
                            "Litiges relatifs à la conformité environnementale" 
                        ]}
                        icon={FaUsers}
                    />
                    <PricingCard
                        title="Régulation"
                        features={[
                            "Autorisation administrative en matière d’équipement énergétique" ,

                            "Autorisation d’exploiter ",
                            
                            "Permis de construire" ,
                            
                            "Déclaration IC, ICPE" 
                        ]}
                        icon={FaRegHandshake}
                    />
                    <PricingCard
                        title="Audits"
                        features={[
                            "Contrôle des risques" ,

                            "Evaluation de conformité" ,
                            
                            "Audit des contrats" ,
                            
                            "Audit environnemental et de sécurité",
                            
                        ]}
                        icon={FaSearch}
                    />
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, description, price, features, icon: Icon }) {
    return (
        <Card className="pricing-card">
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
                        <li key={index} className="flex items-center gap-2 text-black">
                            <CheckIcon className="h-6 w-10 text-green-500" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}   