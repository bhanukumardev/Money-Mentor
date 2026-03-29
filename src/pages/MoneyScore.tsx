import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { Heart, Shield, TrendingUp, Wallet, Calculator, Clock, ArrowRight } from "lucide-react";

const dimensions = [
  { icon: Shield, label: "Emergency Fund", key: "emergency" as const, q: "Months of expenses saved?", max: 6 },
  { icon: Heart, label: "Insurance Coverage", key: "insurance" as const, q: "Life + health cover (₹L)?", max: 100 },
  { icon: TrendingUp, label: "Investment Diversification", key: "investment" as const, q: "No. of asset classes invested?", max: 5 },
  { icon: Wallet, label: "Debt Health", key: "debt" as const, q: "EMI-to-income ratio %?", max: 50 },
  { icon: Calculator, label: "Tax Efficiency", key: "tax" as const, q: "Tax-saving investments (₹L)?", max: 3 },
  { icon: Clock, label: "Retirement Readiness", key: "retirement" as const, q: "Years of investing for retirement?", max: 30 },
];

type Scores = { emergency: string; insurance: string; investment: string; debt: string; tax: string; retirement: string; };

const MoneyScore = () => {
  const [answers, setAnswers] = useState<Scores>({ emergency: "", insurance: "", investment: "", debt: "", tax: "", retirement: "" });
  const [showResult, setShowResult] = useState(false);

  const scores = dimensions.map(d => {
    const val = Number(answers[d.key]) || 0;
    if (d.key === "debt") return Math.max(0, Math.round(100 - (val / d.max) * 100));
    return Math.min(100, Math.round((val / d.max) * 100));
  });
  const totalScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  const getGrade = (s: number) => s >= 80 ? "A" : s >= 60 ? "B" : s >= 40 ? "C" : "D";
  const getColor = (s: number) => s >= 80 ? "text-emerald-gradient" : s >= 60 ? "text-gold-gradient" : "text-destructive";

  return (
    <PageLayout>
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="emerald-gradient rounded-2xl p-4 w-fit mx-auto mb-4">
            <Heart className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold">
            Money Health <span className="text-emerald-gradient">Score</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            5-minute assessment across 6 financial wellness dimensions.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 glow-emerald"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dimensions.map((d) => (
                <div key={d.key}>
                  <Label className="text-muted-foreground text-sm flex items-center gap-2">
                    <d.icon className="h-4 w-4 text-secondary" /> {d.q}
                  </Label>
                  <Input placeholder={`Max: ${d.max}`} value={answers[d.key]}
                    onChange={e => setAnswers({...answers, [d.key]: e.target.value})}
                    className="mt-1.5 bg-muted/30 border-border/50" />
                </div>
              ))}
            </div>
            <Button variant="emerald" size="lg" className="w-full mt-8 py-6" onClick={() => setShowResult(true)}>
              Calculate My Score <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card p-8 glow-emerald text-center">
              <h2 className="font-heading text-2xl font-bold">Your Money Health Score</h2>
              <div className="relative w-40 h-40 mx-auto mt-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                  <motion.circle
                    cx="60" cy="60" r="54" fill="none" stroke="url(#emeraldGrad)" strokeWidth="8"
                    strokeLinecap="round" strokeDasharray={339.3}
                    initial={{ strokeDashoffset: 339.3 }}
                    animate={{ strokeDashoffset: 339.3 * (1 - totalScore / 100) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(160, 60%, 45%)" />
                      <stop offset="100%" stopColor="hsl(42, 100%, 55%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-heading font-bold">{totalScore}</span>
                  <span className="text-xs text-muted-foreground">/ 100</span>
                </div>
              </div>
              <div className={`text-2xl font-heading font-bold mt-3 ${getColor(totalScore)}`}>
                Grade: {getGrade(totalScore)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dimensions.map((d, i) => (
                <div key={d.key} className="glass-card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <d.icon className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium">{d.label}</span>
                    </div>
                    <span className={`text-sm font-bold ${getColor(scores[i])}`}>{scores[i]}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${scores[i]}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="h-full emerald-gradient rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button variant="heroOutline" className="w-full" onClick={() => setShowResult(false)}>
              ← Retake Assessment
            </Button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default MoneyScore;
