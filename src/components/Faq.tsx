import { faqData } from '../assets/dummy-data';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 2xl:py-32 bg-muted/30 dark:bg-primary/10 transition-colors duration-500">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground select-none tracking-tight">Common Questions</h2>
                    <p className="text-muted-foreground font-medium">Everything you need to know about working with me.</p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                            >
                                <span className="font-bold text-foreground tracking-tight select-none">{faq.question}</span>
                                <ChevronDownIcon className={`size-5 text-primary transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            {activeIndex === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed font-medium select-none"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
