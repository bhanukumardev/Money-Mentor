import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { Baby, Gift, Users, Building, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const events = [
  { icon: Gift, label: "Got a Bonus", key: "bonus", color: "gold-gradient" },
  { icon: Users, label: "Getting Married", key: "marriage", color: "emerald-gradient" },
  { icon: Baby, label: "New Baby", key: "baby", color: "gold-gradient" },
  { icon: Building, label: "Buying a House", key: "house", color: "emerald-gradient" },
  { icon: Briefcase, label: "Inheritance", key: "inheritance", color: "gold-gradient" },
];

const adviceMap: Record<string, string[]> = {
  bonus: [
    "Build/top up emergency fund to 6 months expenses",
    "Max out 80C investments (PPF, ELSS) if not done",
    "Invest 50% in equity SIPs, 30% debt, 20% fun money",
    "Consider NPS for additional ₹50K deduction under 80CCD(1B)",
    "Pre-pay high-interest loans (credit card, personal loan)",
  ],
  marriage: [
    "Set wedding budget at max 20% of combined annual income",
    "Open a joint savings account for shared expenses",
    "Review and update insurance nominees",
    "Consolidate and align investment goals with spouse",
    "Plan HRA optimization — claim on higher salary's tax bracket",
  ],
  baby: [
    "Increase health insurance — family floater with maternity",
    "Start a Sukanya Samriddhi / child education SIP immediately",
    "Increase life cover to 15-20x annual income",
    "Create a will or update existing one",
    "Budget for childcare: ₹15-25K/month in metros",
  ],
  house: [
    "Keep EMI under 35% of take-home pay",
    "Down payment should be minimum 20% to avoid PMI",
    "Claim HRA + home loan interest deduction strategy",
    "Don't break long-term investments for down payment",
    "Build 3-month buffer fund over and above emergency fund",
  ],
  inheritance: [
    "Park in liquid fund while you plan (don't rush decisions)",
    "Pay off all high-interest debt immediately",
    "Consult a tax advisor — inheritance tax implications",
    "Diversify across asset classes based on total portfolio",
    "Consider charitable donation for tax benefits under 80G",
  ],
};

const LifeEvents = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [income, setIncome] = useState("");
  const [amount, setAmount] = useState("");
  const [showAdvice, setShowAdvice] = useState(false);

  return (
    <PageLayout>
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="gold-gradient rounded-2xl p-4 w-fit mx-auto mb-4">
            <Baby className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold">
            Life Event <span className="text-gold-gradient">Advisor</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            AI-powered financial guidance for life's biggest moments.
          </p>
        </motion.div>

        {!showAdvice ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="glass-card p-8 glow-gold">
              <h3 className="font-heading font-semibold mb-4">Select Your Life Event</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {events.map(e => (
                  <button key={e.key} onClick={() => setSelected(e.key)}
                    className={`glass-card p-4 text-center transition-all hover:scale-105 ${
                      selected === e.key ? "ring-2 ring-primary glow-gold" : ""
                    }`}
                  >
                    <div className={`${e.color} rounded-lg p-2 w-fit mx-auto`}>
                      <e.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="text-xs font-medium mt-2">{e.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 glow-gold">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-muted-foreground text-sm">Annual Income (₹)</Label>
                  <Input placeholder="e.g. 1800000" value={income} onChange={e => setIncome(e.target.value)}
                    className="mt-1.5 bg-muted/30 border-border/50" />
                </div>
                <div>
                  <Label className="text-muted-foreground text-sm">Amount Involved (₹)</Label>
                  <Input placeholder="e.g. 500000" value={amount} onChange={e => setAmount(e.target.value)}
                    className="mt-1.5 bg-muted/30 border-border/50" />
                </div>
              </div>
              <Button variant="hero" size="lg" className="w-full mt-6 py-6"
                onClick={() => selected && setShowAdvice(true)} disabled={!selected}
              >
                Get AI Advice <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card p-8 glow-gold">
              <h2 className="font-heading text-2xl font-bold mb-2">
                AI Recommendations for: {events.find(e => e.key === selected)?.label}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Based on ₹{Number(income).toLocaleString("en-IN")} annual income | ₹{Number(amount).toLocaleString("en-IN")} involved
              </p>
              <div className="space-y-4">
                {adviceMap[selected!]?.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }} className="flex gap-3 items-start"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <Button variant="heroOutline" className="w-full" onClick={() => setShowAdvice(false)}>← Try Another Event</Button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default LifeEvents;
