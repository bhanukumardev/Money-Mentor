import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card glow-gold p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-glow" />
          <div className="relative z-10">
            <Sparkles className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Stop Paying ₹25,000/yr for
              <br />
              <span className="text-gold-gradient">What AI Does Better</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Join 10,000+ Indians who replaced their financial advisor with
              AI-powered, personalized money guidance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/money-score">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Start Free Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required • 100% free</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
