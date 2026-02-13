import { CheckIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { plansData } from '../assets/dummy-data';
import { motion } from 'framer-motion';

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold select-none mb-4 text-foreground">Service Packages</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
                        Transparent pricing for high-quality development and design services. 
                        Ready to start? Let's bring your vision to life on Fiverr.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plansData.map((plan: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`relative p-8 rounded-4xl border transition-all duration-300 cursor-pointer ${
                                plan.popular 
                                ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-xl shadow-primary/5' 
                                : 'border-border bg-card hover:border-primary/20 shadow-sm hover:shadow-md'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20 select-none">
                                    Recommended
                                </div>
                            )}
                            <div className="mb-8 select-none">
                                <h3 className="text-xl font-bold mb-2 text-foreground tracking-tight">{plan.name}</h3>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{plan.desc}</p>
                            </div>
                            <div className="mb-8 select-none">
                                <span className="text-4xl font-extrabold text-foreground tracking-tighter">{plan.price}</span>
                                <span className="text-muted-foreground text-sm font-bold ml-2">USD</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feat: string, j: number) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <CheckIcon className="size-3 text-primary stroke-[3px]" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <a href={plan.link} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="w-full py-4 shadow-lg shadow-primary/10">
                                    Book on Fiverr
                                </PrimaryButton>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
