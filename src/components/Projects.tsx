import { projectsData } from '../assets/dummy-data';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Title from './Title';

export default function Projects() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className="py-20 lg:py-32 bg-muted/20 dark:bg-black/10 transition-colors duration-700">
            <div className="max-w-7xl mx-auto px-6">
                <Title 
                    title="Work Gallery"
                    heading="Digital Masterpieces"
                    description="A curated selection of high-end ecosystems and artistic digital solutions."
                />

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16"
                >
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="group relative flex flex-col bg-card border border-border rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Project Image: Compact Architecture */}
                            <div className="aspect-16/10 relative overflow-hidden bg-muted">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-primary text-white hover:scale-110 transition-all shadow-lg shadow-primary/20">
                                            <ExternalLinkIcon size={20} />
                                        </a>
                                        <a href="#" className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/30 hover:scale-110 transition-all">
                                            <GithubIcon size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content: Refined & Compact */}
                            <div className="p-6 lg:p-7 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 2).map((tag, j) => (
                                        <span key={j} className="px-2.5 py-0.5 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest border border-primary/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-black text-foreground mb-2 tracking-tighter">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-xs font-medium leading-relaxed mb-6 flex-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {project.desc}
                                </p>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest group/link hover:gap-3 transition-all"
                                >
                                    Experience Case Study
                                    <ExternalLinkIcon size={12} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
