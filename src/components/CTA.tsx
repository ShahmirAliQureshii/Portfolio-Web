import { ArrowRightIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="py-20 2xl:pb-32 px-4">
            <div className="container mx-auto max-w-3xl">
                <div className="rounded-[3rem] bg-linear-to-b from-primary/10 to-transparent border-2 border-primary/20 p-12 md:p-20 text-center relative overflow-hidden transition-all duration-700 shadow-2xl shadow-primary/5">
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
                    <div className="relative z-10">
                        <motion.h2 className="text-3xl sm:text-5xl select-none font-black mb-8 text-foreground tracking-tight"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 50 }}
                        >
                            Let's Build Something <br /> <span className="text-primary">Exceptional.</span>
                        </motion.h2>
                        <motion.p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-medium"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 50, delay: 0.1 }}
                        >
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 50, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <a href="https://wa.me/923252862245" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <PrimaryButton className="w-full sm:w-auto px-10 py-4 gap-3 bg-[#25D366] hover:bg-[#20ba59] border-none shadow-2xl shadow-green-500/20">
                                    Chat on WhatsApp <ArrowRightIcon size={20} />
                                </PrimaryButton>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};