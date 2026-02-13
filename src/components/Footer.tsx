import { footerLinks } from '../assets/dummy-data';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer className="bg-muted/30 dark:bg-primary/5 border-t border-border pt-16 pb-8 transition-colors duration-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-12 border-b border-border">
                    <div className="max-w-sm">
                        <a href="/" className="group flex items-center gap-2 mb-6">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl italic group-hover:scale-110 transition-transform">S</div>
                            <span className="text-xl font-bold tracking-tighter text-foreground">SHAHMIR</span>
                        </a>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                            Full-Stack Developer and Founder of SnapperUI, crafting high-performance web experiences with modern technologies. 
                            Let's build your next digital masterpiece.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-bold text-xs text-foreground uppercase tracking-widest mb-6 border-b border-primary/20 pb-2 inline-block">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link: { name: string; url: string }, i) => (
                                        <li key={i}>
                                            <a
                                                href={link.url}
                                                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-muted-foreground font-medium">
                        © {new Date().getFullYear()} {' '}
                        <span className="text-foreground font-bold">Shahmir Ali Qureshi</span>. Built with Passion.
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 lg:gap-8">
                        <a href="https://wa.me/923252862245" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground hover:text-primary transition-colors font-black uppercase tracking-widest border-b-2 border-primary/20 pb-0.5">WhatsApp</a>
                        <a href="https://www.linkedin.com/in/shahmir-qureshi-162200252/" target="_blank" className="text-xs text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest">LinkedIn</a>
                        <a href="https://github.com/ShahmirAliQureshii" target="_blank" className="text-xs text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest">GitHub</a>
                        <a href="https://www.instagram.com/devshahmir/" target="_blank" className="text-xs text-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest">Instagram</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};