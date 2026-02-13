import { motion } from 'framer-motion';

interface TitleProps {
    title?: string;
    heading?: string;
    description?: string;
}

export default function Title({ title, heading, description }: TitleProps) {

    return (
        <div className="text-center mb-16">
            {title && (
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 50 }}
                    className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4"
                >
                    {title}
                </motion.p>
            )}
            {heading && (
                <motion.h2 className="text-3xl select-none md:text-5xl text-foreground font-black tracking-tight"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 50, delay: 0.1 }}
                >
                    {heading}
                </motion.h2>
            )}
            {description && (
                <motion.p className='max-w-2xl mx-auto text-lg text-muted-foreground mt-6 font-medium leading-relaxed'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 50, delay: 0.2 }}
                >
                    {description}
                </motion.p>
            )}
        </div>
    )
}