import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = ({ badge, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};
