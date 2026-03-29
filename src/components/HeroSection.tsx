import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "₹0", label: "Cost to start", icon: Target },
  { value: "5 min", label: "To get your score", icon: TrendingUp },
  { value: "100%", label: "Personalized AI", icon: Shield },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8">
              <span className="h-1.5 w-1.5 rounded-full gold-gradient animate-pulse-glow" />
              AI-Powered Financial Planning for India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mt-6"
          >
            Your Money Deserves
            <br />
            <span className="text-gold-gradient">A Smarter Plan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Stop guessing with your finances. AI Money Mentor builds personalized
            financial roadmaps, scores your money health, and guides every life decision —
            all for free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/money-score">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Check Your Money Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/fire-planner">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                Plan Your FIRE Journey
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 glow-gold group hover:scale-105 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary mb-3 mx-auto" />
                <div className="text-3xl font-heading font-bold text-gold-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
