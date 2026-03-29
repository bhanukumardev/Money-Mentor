import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { Flame, TrendingUp, Target, PiggyBank, ArrowRight } from "lucide-react";

const FirePlanner = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    age: "", retireAge: "", income: "", expenses: "", savings: "", riskProfile: "moderate",
  });
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => setShowResult(true);

  const monthlyInvestment = form.income && form.expenses ? 
    Math.round((Number(form.income) - Number(form.expenses)) * 0.6) : 0;
  const yearsToFire = form.age && form.retireAge ? Number(form.retireAge) - Number(form.age) : 25;
  const fireNumber = form.expenses ? Number(form.expenses) * 12 * 25 : 0;

  return (
    <PageLayout>
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="gold-gradient rounded-2xl p-4 w-fit mx-auto mb-4">
            <Flame className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold">
            FIRE Path <span className="text-gold-gradient">Planner</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Build your month-by-month roadmap to Financial Independence and Early Retirement.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 glow-gold"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-muted-foreground text-sm">Current Age</Label>
                <Input placeholder="e.g. 28" value={form.age} onChange={e => setForm({...form, age: e.target.value})}
                  className="mt-1.5 bg-muted/30 border-border/50" />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">Target Retirement Age</Label>
                <Input placeholder="e.g. 45" value={form.retireAge} onChange={e => setForm({...form, retireAge: e.target.value})}
                  className="mt-1.5 bg-muted/30 border-border/50" />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">Monthly Income (₹)</Label>
                <Input placeholder="e.g. 150000" value={form.income} onChange={e => setForm({...form, income: e.target.value})}
                  className="mt-1.5 bg-muted/30 border-border/50" />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">Monthly Expenses (₹)</Label>
                <Input placeholder="e.g. 60000" value={form.expenses} onChange={e => setForm({...form, expenses: e.target.value})}
                  className="mt-1.5 bg-muted/30 border-border/50" />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">Current Savings/Investments (₹)</Label>
                <Input placeholder="e.g. 2000000" value={form.savings} onChange={e => setForm({...form, savings: e.target.value})}
                  className="mt-1.5 bg-muted/30 border-border/50" />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">Risk Profile</Label>
                <div className="flex gap-2 mt-1.5">
                  {["conservative", "moderate", "aggressive"].map(r => (
                    <button key={r}
                      onClick={() => setForm({...form, riskProfile: r})}
                      className={`flex-1 rounded-lg py-2.5 text-xs font-medium transition-all capitalize ${
                        form.riskProfile === r ? "gold-gradient text-primary-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                      }`}
                    >{r}</button>
                  ))}
                </div>
              </div>
            </div>
            <Button variant="hero" size="lg" className="w-full mt-8 py-6" onClick={handleSubmit}>
              Generate My FIRE Roadmap <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card p-8 glow-gold text-center">
              <h2 className="font-heading text-2xl font-bold">Your FIRE Number</h2>
              <div className="text-5xl font-heading font-bold text-gold-gradient mt-3">
                ₹{(fireNumber / 10000000).toFixed(1)} Cr
              </div>
              <p className="text-muted-foreground mt-2">{yearsToFire} years to Financial Independence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: PiggyBank, label: "Monthly SIP Needed", value: `₹${monthlyInvestment.toLocaleString("en-IN")}` },
                { icon: TrendingUp, label: "Expected CAGR", value: form.riskProfile === "aggressive" ? "14%" : form.riskProfile === "moderate" ? "12%" : "9%" },
                { icon: Target, label: "Savings Rate", value: form.income ? `${Math.round(((Number(form.income) - Number(form.expenses)) / Number(form.income)) * 100)}%` : "0%" },
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <card.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-gold-gradient">{card.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{card.label}</div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">📊 Recommended Asset Allocation</h3>
              <div className="space-y-3">
                {[
                  { name: "Equity Mutual Funds", pct: form.riskProfile === "aggressive" ? 70 : form.riskProfile === "moderate" ? 55 : 35 },
                  { name: "Debt Funds / PPF", pct: form.riskProfile === "aggressive" ? 15 : form.riskProfile === "moderate" ? 25 : 40 },
                  { name: "Gold / REITs", pct: 10 },
                  { name: "Emergency Fund", pct: form.riskProfile === "aggressive" ? 5 : form.riskProfile === "moderate" ? 10 : 15 },
                ].map((a, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{a.name}</span>
                      <span className="text-primary font-medium">{a.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${a.pct}%` }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="h-full gold-gradient rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="heroOutline" className="w-full" onClick={() => setShowResult(false)}>
              ← Recalculate
            </Button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default FirePlanner;
