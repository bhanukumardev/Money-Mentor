import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { Calculator, ArrowRight, CheckCircle2, IndianRupee } from "lucide-react";

const TaxWizard = () => {
  const [form, setForm] = useState({
    basic: "", hra: "", special: "", lta: "", pf80c: "", nps80ccd: "", healthIns: "", homeLoan: "",
  });
  const [showResult, setShowResult] = useState(false);

  const gross = Number(form.basic) + Number(form.hra) + Number(form.special) + Number(form.lta);

  const oldRegime = () => {
    const standardDeduction = 50000;
    const sec80c = Math.min(Number(form.pf80c) || 0, 150000);
    const sec80ccd = Math.min(Number(form.nps80ccd) || 0, 50000);
    const sec80d = Math.min(Number(form.healthIns) || 0, 75000);
    const homeLoan = Math.min(Number(form.homeLoan) || 0, 200000);
    const taxable = Math.max(0, gross * 12 - standardDeduction - sec80c - sec80ccd - sec80d - homeLoan);
    return calculateOldTax(taxable);
  };

  const newRegime = () => {
    const standardDeduction = 75000;
    const taxable = Math.max(0, gross * 12 - standardDeduction);
    return calculateNewTax(taxable);
  };

  const calculateOldTax = (income: number) => {
    if (income <= 250000) return 0;
    let tax = 0;
    if (income > 250000) tax += Math.min(income - 250000, 250000) * 0.05;
    if (income > 500000) tax += Math.min(income - 500000, 500000) * 0.2;
    if (income > 1000000) tax += (income - 1000000) * 0.3;
    return Math.round(tax * 1.04);
  };

  const calculateNewTax = (income: number) => {
    if (income <= 400000) return 0;
    let tax = 0;
    const slabs = [
      [400000, 800000, 0.05], [800000, 1200000, 0.1], [1200000, 1600000, 0.15],
      [1600000, 2000000, 0.2], [2000000, 2400000, 0.25], [2400000, Infinity, 0.3],
    ];
    for (const [lower, upper, rate] of slabs) {
      if (income > lower) tax += Math.min(income - lower, upper - lower) * rate;
    }
    return Math.round(tax * 1.04);
  };

  const oldTax = oldRegime();
  const newTax = newRegime();
  const savings = Math.abs(oldTax - newTax);
  const betterRegime = oldTax <= newTax ? "Old" : "New";

  const missedDeductions = [
    Number(form.nps80ccd) < 50000 && "NPS 80CCD(1B): Invest up to ₹50,000 more for extra deduction",
    Number(form.pf80c) < 150000 && "Section 80C: You can claim up to ₹1.5L (ELSS, PPF, EPF, etc.)",
    Number(form.healthIns) < 25000 && "Section 80D: Health insurance premium up to ₹25K (₹50K for parents)",
    Number(form.homeLoan) === 0 && "Section 24: Home loan interest up to ₹2L is deductible",
  ].filter(Boolean);

  return (
    <PageLayout>
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="emerald-gradient rounded-2xl p-4 w-fit mx-auto mb-4">
            <Calculator className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold">
            Tax <span className="text-emerald-gradient">Wizard</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Old vs New regime comparison with missed deduction finder.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 glow-emerald"
          >
            <h3 className="font-heading font-semibold mb-4">Monthly Salary Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: "basic", label: "Basic Salary" },
                { key: "hra", label: "HRA" },
                { key: "special", label: "Special Allowance" },
                { key: "lta", label: "LTA" },
              ].map(f => (
                <div key={f.key}>
                  <Label className="text-muted-foreground text-sm">{f.label} (₹/month)</Label>
                  <Input placeholder="e.g. 50000" value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({...form, [f.key]: e.target.value})}
                    className="mt-1.5 bg-muted/30 border-border/50" />
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold mb-4 mt-8">Annual Investments & Deductions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: "pf80c", label: "80C (PF + ELSS + PPF etc.)" },
                { key: "nps80ccd", label: "80CCD(1B) - NPS" },
                { key: "healthIns", label: "80D - Health Insurance" },
                { key: "homeLoan", label: "Sec 24 - Home Loan Interest" },
              ].map(f => (
                <div key={f.key}>
                  <Label className="text-muted-foreground text-sm">{f.label} (₹/year)</Label>
                  <Input placeholder="e.g. 150000" value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({...form, [f.key]: e.target.value})}
                    className="mt-1.5 bg-muted/30 border-border/50" />
                </div>
              ))}
            </div>

            <Button variant="emerald" size="lg" className="w-full mt-8 py-6" onClick={() => setShowResult(true)}>
              Compare Tax Regimes <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`glass-card p-8 text-center ${betterRegime === "Old" ? "glow-emerald ring-2 ring-secondary" : ""}`}>
                <h3 className="font-heading font-semibold">Old Regime</h3>
                <div className="text-4xl font-heading font-bold text-emerald-gradient mt-3">
                  ₹{oldTax.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Annual tax liability</p>
                {betterRegime === "Old" && <span className="inline-block mt-3 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">✓ Recommended</span>}
              </div>
              <div className={`glass-card p-8 text-center ${betterRegime === "New" ? "glow-gold ring-2 ring-primary" : ""}`}>
                <h3 className="font-heading font-semibold">New Regime</h3>
                <div className="text-4xl font-heading font-bold text-gold-gradient mt-3">
                  ₹{newTax.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Annual tax liability</p>
                {betterRegime === "New" && <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">✓ Recommended</span>}
              </div>
            </div>

            <div className="glass-card p-8 glow-gold text-center">
              <IndianRupee className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-heading text-xl font-semibold">You Save</h3>
              <div className="text-4xl font-heading font-bold text-gold-gradient">₹{savings.toLocaleString("en-IN")}</div>
              <p className="text-sm text-muted-foreground mt-1">by choosing {betterRegime} Regime</p>
            </div>

            {missedDeductions.length > 0 && (
              <div className="glass-card p-8">
                <h3 className="font-heading text-xl font-semibold mb-4">💡 Missed Deductions</h3>
                <div className="space-y-3">
                  {missedDeductions.map((d, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }} className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">{d}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <Button variant="heroOutline" className="w-full" onClick={() => setShowResult(false)}>← Recalculate</Button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default TaxWizard;
