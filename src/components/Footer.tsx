import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="gold-gradient rounded-lg p-1.5">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold">
                Money<span className="text-gold-gradient">Mentor</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered financial planning for every Indian. Free forever.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Tools</h4>
            <div className="space-y-2">
              {["FIRE Planner", "Money Score", "Tax Wizard", "MF X-Ray"].map(t => (
                <div key={t} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Resources</h4>
            <div className="space-y-2">
              {["Blog", "Calculators", "Tax Guide 2025", "Glossary"].map(t => (
                <div key={t} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Legal</h4>
            <div className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map(t => (
                <div key={t} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 mt-8 pt-8 text-center text-xs text-muted-foreground">
          © 2026 AI MoneyMentor. Not a SEBI-registered advisor. For informational purposes only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
