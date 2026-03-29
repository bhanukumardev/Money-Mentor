import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Bangalore",
    text: "MoneyMentor's FIRE planner showed me I can retire at 45 instead of 60. The SIP strategy alone saved me ₹3L in taxes this year.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    role: "Startup Founder, Mumbai",
    text: "The MF Portfolio X-Ray found 40% overlap in my funds. After rebalancing, my XIRR improved from 11% to 16%.",
    rating: 5,
  },
  {
    name: "Anita & Vikram",
    role: "Couple, Delhi",
    text: "The Couple's Planner optimized our combined tax savings by ₹1.8L. No advisor ever suggested splitting NPS contributions this way.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Trusted by <span className="text-gold-gradient">10,000+</span> Indians
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 border-t border-border/30 pt-4">
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
