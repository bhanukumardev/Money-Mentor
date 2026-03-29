import { motion } from "framer-motion";
import { UserPlus, Brain, LineChart, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Share Your Profile", desc: "Age, income, expenses, goals — takes 5 minutes" },
  { icon: Brain, title: "AI Analyzes", desc: "Our AI evaluates 50+ financial parameters" },
  { icon: LineChart, title: "Get Your Roadmap", desc: "Personalized plan with month-by-month actions" },
  { icon: Rocket, title: "Track & Grow", desc: "Monitor progress and get AI-driven adjustments" },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">Simple Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            How It <span className="text-emerald-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < 3 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t border-dashed border-border" />
              )}
              <div className="emerald-gradient rounded-2xl p-4 w-fit mx-auto">
                <step.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div className="mt-2 text-xs font-bold text-primary/60 font-heading">STEP {i + 1}</div>
              <h3 className="font-heading text-lg font-semibold mt-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
