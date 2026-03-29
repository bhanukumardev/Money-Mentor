import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { Users, ArrowRight, CheckCircle2, CircleUser } from "lucide-react";

const CouplesPlanner = () => {
  const [form, setForm] = useState({
    p1Name: "Partner 1", p1Income: "", p1Hra: "", p1Investments: "",
    p2Name: "Partner 2", p2Income: "", p2Hra: "", p2Investments: "",
  });
  const [showResult, setShowResult] = useState(false);

  const p1Inc = Number(form.p1Income) || 0;
  const p2Inc = Number(form.p2Income) || 0;
  const combined = p1Inc + p2Inc;
  const higherEarner = p1Inc >= p2Inc ? form.p1Name : form.p2Name;

  const recommendations = [
    `Claim HRA on ${higherEarner}'s salary for maximum tax benefit`,
    "Split NPS contributions: ₹50K each under 80CCD(1B) = ₹1L combined deduction",
    `SIP allocation: ${Math.round(p1Inc / combined * 100)}% from ${form.p1Name}, ${Math.round(p2Inc / combined * 100)}% from ${form.p2Name}`,
    "Health insurance: Family floater on higher income for 80D max benefit",
    "Maintain individual emergency funds + 1 joint emergency fund",
    "Life insurance: Each partner should have 15x their annual income coverage",
    "Home loan: Joint loan for higher eligibility, EMIs from higher income",
    "Create joint investment goals for shared objectives (vacation, house)",
  ];

  return (
    <PageLayout>
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="gold-gradient rounded-2xl p-4 w-fit mx-auto mb-4">
            <Users className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold">
            Couple's Money <span className="text-gold-gradient">Planner</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            India's first AI-powered joint financial planning tool.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[1, 2].map(p => (
              <div key={p} className={`glass-card p-8 ${p === 1 ? "glow-gold" : "glow-emerald"}`}>
                <div className="flex items-center gap-2 mb-4">
                  <CircleUser className={`h-5 w-5 ${p === 1 ? "text-primary" : "text-secondary"}`} />
                  <h3 className="font-heading font-semibold">Partner {p}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground text-sm">Name</Label>
                    <Input value={form[`p${p}Name` as keyof typeof form]}
                      onChange={e => setForm({...form, [`p${p}Name`]: e.target.value})}
                      className="mt-1.5 bg-muted/30 border-border/50" />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-sm">Monthly Income (₹)</Label>
                    <Input placeholder="e.g. 120000" value={form[`p${p}Income` as keyof typeof form]}
                      onChange={e => setForm({...form, [`p${p}Income`]: e.target.value})}
                      className="mt-1.5 bg-muted/30 border-border/50" />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-sm">Monthly HRA (₹)</Label>
                    <Input placeholder="e.g. 30000" value={form[`p${p}Hra` as keyof typeof form]}
                      onChange={e => setForm({...form, [`p${p}Hra`]: e.target.value})}
                      className="mt-1.5 bg-muted/30 border-border/50" />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-sm">Current Investments (₹)</Label>
                    <Input placeholder="e.g. 1500000" value={form[`p${p}Investments` as keyof typeof form]}
                      onChange={e => setForm({...form, [`p${p}Investments`]: e.target.value})}
                      className="mt-1.5 bg-muted/30 border-border/50" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="hero" size="lg" className="w-full py-6" onClick={() => setShowResult(true)}>
              Optimize Our Finances <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-6 text-center glow-gold">
                <div className="text-xs text-muted-foreground">Combined Monthly Income</div>
                <div className="text-2xl font-heading font-bold text-gold-gradient">₹{combined.toLocaleString("en-IN")}</div>
              </div>
              <div className="glass-card p-6 text-center glow-emerald">
                <div className="text-xs text-muted-foreground">Combined Net Worth</div>
                <div className="text-2xl font-heading font-bold text-emerald-gradient">
                  ₹{((Number(form.p1Investments) + Number(form.p2Investments)) / 100000).toFixed(1)}L
                </div>
              </div>
              <div className="glass-card p-6 text-center glow-gold">
                <div className="text-xs text-muted-foreground">Income Split</div>
                <div className="text-2xl font-heading font-bold text-gold-gradient">
                  {combined > 0 ? `${Math.round(p1Inc / combined * 100)}:${Math.round(p2Inc / combined * 100)}` : "0:0"}
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">💡 AI-Optimized Recommendations</h3>
              <div className="space-y-4">
                {recommendations.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }} className="flex gap-3 items-start"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{r}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <Button variant="heroOutline" className="w-full" onClick={() => setShowResult(false)}>← Edit Details</Button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default CouplesPlanner;
