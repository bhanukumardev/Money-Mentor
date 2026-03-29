import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Shield, Baby, Calculator, Users, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "FIRE Path Planner",
    desc: "Month-by-month roadmap to Financial Independence. SIP amounts, asset allocation, insurance gaps, and tax-saving moves.",
    path: "/fire-planner",
    gradient: "gold-gradient",
    glow: "glow-gold",
  },
  {
    icon: Shield,
    title: "Money Health Score",
    desc: "5-minute assessment across 6 dimensions: emergency fund, insurance, investments, debt, tax efficiency, retirement.",
    path: "/money-score",
    gradient: "emerald-gradient",
    glow: "glow-emerald",
  },
  {
    icon: Baby,
    title: "Life Event Advisor",
    desc: "AI guidance for bonus, marriage, new baby, inheritance — customized to your tax bracket, risk profile, and goals.",
    path: "/life-events",
    gradient: "gold-gradient",
    glow: "glow-gold",
  },
  {
    icon: Calculator,
    title: "Tax Wizard",
    desc: "Upload Form 16 or input salary. AI finds every missed deduction, compares tax regimes, and suggests optimal investments.",
    path: "/tax-wizard",
    gradient: "emerald-gradient",
    glow: "glow-emerald",
  },
  {
    icon: Users,
    title: "Couple's Money Planner",
    desc: "India's first AI joint planner. Optimize HRA, NPS, SIPs across both incomes with combined net worth tracking.",
    path: "/couples-planner",
    gradient: "gold-gradient",
    glow: "glow-gold",
  },
  {
    icon: BarChart3,
    title: "MF Portfolio X-Ray",
    desc: "Upload CAMS/KFintech statement. Get XIRR, overlap analysis, expense ratio drag, benchmark comparison, and rebalancing plan.",
    path: "/mf-xray",
    gradient: "emerald-gradient",
    glow: "glow-emerald",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Powerful Tools</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Everything You Need to
            <br />
            <span className="text-gold-gradient">Master Your Money</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Six AI-powered tools that replace a ₹25,000/year financial advisor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={feature.path}
                className={`glass-card p-8 block group hover:scale-[1.03] transition-all duration-300 ${feature.glow} h-full`}
              >
                <div className={`${feature.gradient} rounded-xl p-3 w-fit`}>
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mt-5">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{feature.desc}</p>
                <div className="mt-5 flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-1 transition-all">
                  Try Now <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
