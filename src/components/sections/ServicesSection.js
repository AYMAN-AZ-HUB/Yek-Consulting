import React from 'react';
import { CpuIcon, CodeIcon, ShieldIcon, DatabaseIcon } from '../icons';
import Hero from '../Hero';

export default function ServicesSection() {
    return (
        <Hero/>
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
