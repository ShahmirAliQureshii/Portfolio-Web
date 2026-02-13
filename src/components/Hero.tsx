import { ArrowRightIcon, GithubIcon, LinkedinIcon, InstagramIcon, CheckCircle2Icon, TrendingUpIcon, UsersIcon, AwardIcon, MessageCircleIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';

export default function Hero() {
    const mainImageUrl = '/profilepicture.jpeg';
    const whatsappLink = "https://wa.me/923252862245";

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-20 px-4 overflow-hidden bg-background transition-colors duration-700">
            {/* Architectural Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[100px] lg:blur-[150px] dark:bg-primary/20 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-secondary/5 rounded-full blur-[80px] lg:blur-[120px] dark:bg-secondary/15" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left: Conversion Engine */}
                    <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] mb-6 lg:mb-10 shadow-sm select-none"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for New Projects
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 lg:mb-8 leading-[1.1] lg:leading-none text-foreground select-none"
                        >
                            Building <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-hover to-secondary">
                                Digital Legacies.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-muted-foreground text-base md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-12 leading-relaxed font-semibold"
                        >
                            I'm <span className="text-foreground border-b-2 lg:border-b-4 border-primary/30">Shahmir Ali Qureshi</span>. 
                            CEO of <span className="text-primary">SnapperUI</span>. I specialize in engineering premium full-stack ecosystems that scale businesses.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-12 lg:mb-16"
                        >
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <PrimaryButton className="w-full sm:w-auto px-10 py-4 lg:px-12 lg:py-5 text-sm lg:text-base shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all bg-[#25D366] hover:bg-[#20ba59] border-none">
                                    <MessageCircleIcon className="size-5 lg:size-6" />
                                    Contact Me
                                </PrimaryButton>
                            </a>
                            <a href="#projects" className="w-full sm:w-auto">
                                <GhostButton className="w-full sm:w-auto px-10 py-4 lg:px-12 lg:py-5 text-sm lg:text-base border-2 border-primary/40 text-primary hover:bg-primary/5 transition-all font-black uppercase tracking-widest">
                                    Explore Portfolio
                                    <ArrowRightIcon className="size-5 lg:size-6" />
                                </GhostButton>
                            </a>
                        </motion.div>

                        {/* Success Bar: Social Proof Metrics */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-border"
                        >
                            <div className="flex items-center gap-3 lg:gap-4 text-left group">
                                <div className="size-10 lg:size-12 rounded-xl lg:rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <TrendingUpIcon className="size-5 lg:size-6" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-lg lg:text-xl font-black text-foreground">10+</div>
                                    <div className="text-[8px] lg:text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none truncate">Modern Ecosystems</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 lg:gap-4 text-left group">
                                <div className="size-10 lg:size-12 rounded-xl lg:rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <UsersIcon className="size-5 lg:size-6" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-lg lg:text-xl font-black text-foreground">Quality</div>
                                    <div className="text-[8px] lg:text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none truncate">Focused Design</div>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center gap-3 lg:gap-4 text-left group">
                                <div className="size-10 lg:size-12 rounded-xl lg:rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <AwardIcon className="size-5 lg:size-6" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-lg lg:text-xl font-black text-foreground">State-of-the-Art</div>
                                    <div className="text-[8px] lg:text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none truncate">Modern Stack</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Masterwork Profile Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative z-10 w-full max-w-[300px] lg:max-w-[380px] group cursor-pointer">
                            {/* Layered Interactive Shadows */}
                            <div className="absolute -inset-8 bg-primary/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <div className="relative bg-card border-2 border-border rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-primary/40 group-hover:-translate-y-4">
                                <div className="aspect-4/4 relative overflow-hidden bg-muted">
                                    <img 
                                        src={mainImageUrl} 
                                        alt="Shahmir Ali Qureshi" 
                                        className="w-full h-full object-cover bg-center object-top transition-all duration-1000 group-hover:scale-105"
                                    />
                                    
                                    {/* High-End Glass Badge */}
                                    <div className="absolute top-4 left-4 lg:top-6 lg:left-6 px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl lg:rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">
                                        <div className="flex items-center gap-1.5 lg:gap-2">
                                            <div className="size-1.5 lg:size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                            <span className="text-[8px] lg:text-[10px] font-black text-white uppercase tracking-[0.2em]">Verified Architect</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 lg:p-8 space-y-6 lg:space-y-8 bg-linear-to-b from-card to-muted/30">
                                    <div className="text-center">
                                        <h3 className="text-foreground font-black text-xl lg:text-2xl mb-1 tracking-tight">Shahmir Ali Q.</h3>
                                        <p className="text-primary font-black text-[10px] lg:text-xs uppercase tracking-[0.3em]">Full-Stack Visionary</p>
                                    </div>

                                    <div className="flex items-center justify-center gap-6 lg:gap-8 pt-6 border-t border-border">
                                        <a href="https://www.linkedin.com/in/shahmir-qureshi-162200252/" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-125">
                                            <LinkedinIcon className="size-5 lg:size-6" />
                                        </a>
                                        <a href="https://github.com/ShahmirAliQureshii" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-125">
                                            <GithubIcon className="size-5 lg:size-6" />
                                        </a>
                                        <a href="https://www.instagram.com/devshahmir/" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-125">
                                            <InstagramIcon className="size-5 lg:size-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Interactive Floating Card */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-12 p-4 lg:p-5 bg-card border-2 border-border rounded-4xl shadow-2xl hidden xl:block backdrop-blur-md"
                            >
                                <div className="flex items-center gap-3 lg:gap-4">
                                    <div className="size-12 lg:size-14 bg-linear-to-br from-primary to-primary-hover rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
                                        <CheckCircle2Icon className="text-white size-6 lg:size-8" />
                                    </div>
                                    <div>
                                        <div className="text-[8px] lg:text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Success Rate</div>
                                        <div className="text-base lg:text-lg font-black text-foreground">Top Tier</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}