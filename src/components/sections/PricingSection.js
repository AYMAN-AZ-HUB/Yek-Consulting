import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { CheckIcon } from '../icons';
import { DatabaseIcon, CpuIcon, CodeIcon, ShieldIcon } from '../icons';

export default function PricingSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl text-center md:text-3xl font-bold mb-8">Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PricingCard
                        title="Infrastructure"
                        features={[
                            "Streamline your IT infrastructure for maximum efficiency",
                        ]}
                        icon={CpuIcon}
                    />
                    <PricingCard
                        title="Cybersecurity"
                        features={[
                            "Protect your business from cyber threats with our security solutions",
                        ]}
                        icon={ShieldIcon}
                    />
                    <PricingCard
                        title="Software Development"
                        features={[
                            "Build custom software solutions to meet your unique needs",
                        ]}
                        icon={CodeIcon}
                    />
                    <PricingCard
                        title="Data Management"
                        features={[
                            "Optimize your data infrastructure for better insights and decision-making",
                        ]}
                        icon={DatabaseIcon}
                    />
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, description, price, features, icon: Icon }) {
    return (
        <Card className='shadow-lg shadow-gray-600 hover:scale-125'>
            <CardHeader>
                <div className="flex items-center justify-center gap-2">
                    <Icon className="h-7 w-7 text-green-600" />

                    <CardTitle className='text-center text-xl text-black'>{title}</CardTitle>
                </div>
                <CardDescription>{description}</CardDescription>
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