import { useRef } from 'react';
import { featuresData } from '../assets/dummy-data';
import Title from './Title';
import { motion } from 'framer-motion';

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Expertise"
                    heading="Comprehensive Digital Solutions"
                    description="I combine technical skill with creative vision to deliver high-impact web applications and branding."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuresData.map((feature, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-300", "hover:border-white/15", "hover:-translate-y-1");
                                }
                            }}
                            className="rounded-2xl p-8 bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 select-none">
                                <div className="text-primary group-hover:text-white transition-colors">{feature.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight select-none">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed font-medium select-none">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};