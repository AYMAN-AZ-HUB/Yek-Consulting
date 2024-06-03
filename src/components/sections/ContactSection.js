import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js'; // Assuming themeContext.js is in the same directory


export default function ContactSection() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-12 md:py-16 ${theme === 'dark' ? 'dark:bg-neutral-900' : ''}`}>
            <div className="container mx-auto px-4 md:px-6">
                <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Où nous trouver</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className={`p-6 bg-white ${theme === 'dark' ? 'dark:bg-neutral-800' : 'bg-white'} border ${theme === 'dark' ? 'dark:border-neutral-600' : 'border-gray-200'} rounded-lg shadow`}>
                        <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contactez-nous pour plus d'informations ou de soutien.</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <LocateIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-300" />
                                <div>
                                    <p className="font-medium text-lg text-gray-900 dark:text-white">Adresse</p>
                                    <p className="text-gray-700 dark:text-gray-300 text-base">
                                        [Votre adresse ici]
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MailIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-300" />
                                <div>
                                    <p className="font-medium text-lg text-gray-900 dark:text-white">Email</p>
                                    <p className="text-gray-700 dark:text-gray-300 text-base">
                                        <a href="mailto:support@example.com" className="text-blue-500 dark:text-blue-300">
                                            [Votre email ici]
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <PhoneIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-300" />
                                <div>
                                    <p className="font-medium text-lg text-gray-900 dark:text-white">Téléphone</p>
                                    <p className="text-gray-700 dark:text-gray-300 text-base">
                                        <a href="tel:+15555555555" className="text-blue-500 dark:text-blue-300">
                                            [Votre numéro de téléphone ici]
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.6060630419183!2d2.4479586763649492!3d48.980022871348986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66adc0210e2a3%3A0xbf6383db179aeb5c!2s43%20Rue%20d&#39;Aulnay%2C%2095500%20Gonesse%2C%20France!5e0!3m2!1sfr!2sma!4v1717426550480!5m2!1sfr!2sma"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LocateIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}

function MailIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}
