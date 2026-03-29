import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/PageLayout";
import { BarChart3, ArrowRight, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";

const sampleFunds = [
  { name: "Axis Bluechip Fund", type: "Large Cap", value: 250000, xirr: 14.2, expense: 0.49 },
  { name: "Mirae Asset Large Cap", type: "Large Cap", value: 180000, xirr: 12.8, expense: 0.53 },
  { name: "Parag Parikh Flexi Cap", type: "Flexi Cap", value: 320000, xirr: 18.5, expense: 0.63 },
  { name: "SBI Small Cap Fund", type: "Small Cap", value: 150000, xirr: 22.1, expense: 0.67 },
  { name: "HDFC Mid Cap Opp.", type: "Mid Cap", value: 200000, xirr: 16.4, expense: 0.72 },
];

const MFXray = () => {
  const [showResult, setShowResult] = useState(false);
  const [fundCount, setFundCount] = useState("5");

  const totalValue = sampleFunds.reduce((a, b) => a + b.value, 0);
  const avgXirr = sampleFunds.reduce((a, b) => a + b.xirr, 0) / sampleFunds.length;
  const avgExpense = sampleFunds.reduce((a, b) => a + b.expense, 0) / sampleFunds.length;
  const overlapPct = 38;

  return (
    <PageLayout>
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="emerald-gradient rounded-2xl p-4 w-fit mx-auto mb-4">
            <BarChart3 className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold">
            MF Portfolio <span className="text-emerald-gradient">X-Ray</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Upload CAMS/KFintech statement for complete portfolio analysis.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 glow-emerald"
          >
            <div className="border-2 border-dashed border-border/50 rounded-2xl p-12 text-center mb-6">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Upload CAMS/KFintech Statement</h3>
              <p className="text-sm text-muted-foreground mb-4">PDF or Excel format</p>
              <Button variant="heroOutline" size="sm">Choose File</Button>
            </div>
            <div className="text-center text-sm text-muted-foreground mb-6">— or try with sample data —</div>
            <div>
              <Label className="text-muted-foreground text-sm">Number of Funds</Label>
              <Input value={fundCount} onChange={e => setFundCount(e.target.value)}
                className="mt-1.5 bg-muted/30 border-border/50 max-w-xs" />
            </div>
            <Button variant="emerald" size="lg" className="w-full mt-6 py-6" onClick={() => setShowResult(true)}>
              Analyze Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Value", value: `₹${(totalValue / 100000).toFixed(1)}L`, color: "text-gold-gradient" },
                { label: "Portfolio XIRR", value: `${avgXirr.toFixed(1)}%`, color: "text-emerald-gradient" },
                { label: "Avg Expense Ratio", value: `${avgExpense.toFixed(2)}%`, color: "text-gold-gradient" },
                { label: "Fund Overlap", value: `${overlapPct}%`, color: "text-destructive" },
              ].map((s, i) => (
                <div key={i} className="glass-card p-5 text-center">
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className={`text-2xl font-heading font-bold ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">📊 Fund-wise Breakdown</h3>
              <div className="space-y-4">
                {sampleFunds.map((fund, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-4 bg-muted/20 rounded-xl"
                  >
                    <div>
                      <div className="font-medium text-sm">{fund.name}</div>
                      <div className="text-xs text-muted-foreground">{fund.type} • Expense: {fund.expense}%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">₹{(fund.value / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-secondary font-medium">{fund.xirr}% XIRR</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" /> Issues Found
              </h3>
              <div className="space-y-3">
                {[
                  "38% overlap between Axis Bluechip & Mirae Large Cap — consider consolidating",
                  "No international exposure — add 10-15% via Nasdaq/S&P 500 fund",
                  "Expense ratio drag: ₹3,720/year — switch to direct plans to save ₹1,800",
                ].map((issue, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <AlertTriangle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm">{issue}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" /> AI Rebalancing Plan
              </h3>
              <div className="space-y-3">
                {[
                  "Exit Mirae Asset Large Cap → Redirect SIP to Parag Parikh Flexi Cap",
                  "Add Motilal Oswal Nasdaq 100 FOF — 15% allocation",
                  "Switch all funds to Direct plans via CAMS/MFU portal",
                  "Continue SBI Small Cap — strong alpha generation, hold for 5+ years",
                ].map((r, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="heroOutline" className="w-full" onClick={() => setShowResult(false)}>← Analyze Again</Button>
          </motion.div>
        )}
      </div>
    </PageLayout>
  );
};

export default MFXray;
