export default function SoftBackdrop() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-700">
            <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[160px] animate-pulse" />
            <div className="absolute -right-20 -bottom-20 w-[600px] h-[400px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px]" />
        </div>
    )
}