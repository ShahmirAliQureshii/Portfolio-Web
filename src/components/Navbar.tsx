import { MenuIcon, SunIcon, MoonIcon, XIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#features' }, 
        { name: 'Projects', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'SnapperUI', href: 'https://snapperui.com' },
    ];

    return (
        <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
            <div className='max-w-6xl mx-auto flex items-center justify-between bg-background/80 dark:bg-primary/10 backdrop-blur-xl border border-border rounded-2xl p-3 shadow-lg transition-all duration-300'>
                <a href='/' className="group flex items-center gap-2 px-2">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl italic group-hover:scale-110 transition-transform">S</div>
                    <span className="text-xl font-bold tracking-tighter text-foreground transition-colors">SHAHMIR</span>
                </a>

                <div className='hidden md:flex items-center gap-8 text-sm font-medium'>
                    {navLinks.map((link) => (
                        <a href={link.href} key={link.name} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className='hidden md:flex items-center gap-4'>
                    <button 
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl bg-muted dark:bg-white/5 text-muted-foreground hover:bg-border transition-all border border-border"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
                    </button>
                    <PrimaryButton onClick={() => {window.open('https://wa.me/923252862245', '_blank');}} className='text-xs sm:text-sm px-6'>Contact Me</PrimaryButton>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-muted dark:bg-white/5 text-muted-foreground"
                    >
                         {theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
                        <MenuIcon className='size-6' />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className='flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-background z-50 transition-colors duration-300'
                    >
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 p-3 rounded-full bg-muted text-foreground hover:bg-border transition-colors"
                        >
                            <XIcon size={24} />
                        </button>

                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-foreground text-2xl font-bold hover:text-primary transition-colors">
                                {link.name}
                            </a>
                        ))}

                        <PrimaryButton onClick={() => {setIsOpen(false); window.open('https://wa.me/923252862245', '_blank');}} className="mt-4 px-10 py-4 text-lg">Contact Me</PrimaryButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};