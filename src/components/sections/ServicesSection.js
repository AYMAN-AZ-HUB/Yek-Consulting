import React from 'react';
import { CpuIcon, CodeIcon, ShieldIcon, DatabaseIcon } from '../icons';

export default function ServicesSection() {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-10 md:py-72 bg-image">
            <div className="container mx-auto px-10 md:px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h1 className="text-5xl md:text-5xl font-bold mb-4">Unlock Your IT Potential</h1>
                        <p className="text-black-600 dark:text-gray-400 mb-20 text-3xl">
                            Our IT consulting services help businesses of all sizes optimize their technology and drive
                            growth.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                            Request Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceItem({icon, title, description}) {
    return (
        <div className="flex items-start gap-4">
            {icon}
            <div>
                <h3 className="text-lg mb-2 font-bold">{title}</h3>
                <p className="text-white-600 dark:text-white-400">{description}</p>
            </div>
        </div>
    );
}
