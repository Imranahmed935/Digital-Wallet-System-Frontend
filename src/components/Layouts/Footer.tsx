import Logo from "@/assets/icon/Logo";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-300">
      <div className="mx-auto max-w-screen-xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Logo />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                ZPay
              </h1>
            </div>

            <p className="mt-5 max-w-sm text-sm text-gray-400">
              ZPay isn’t just a digital wallet — it’s freedom in your pocket.
              Seamless payments, smart finance, and fast money movement.
            </p>

            <div className="mt-6 flex gap-4">
              {[
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" },
                { icon: Youtube, url: "https://youtube.com" },
              ].map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                  bg-white/5 text-gray-300 transition-all 
                  hover:bg-violet-500 hover:text-white hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div>
              <p className="mb-4 text-sm font-semibold text-white">Services</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/feature" className="hover:text-violet-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-violet-400">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Company</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="hover:text-violet-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-violet-400">
                    Meet the Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Support</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/contact" className="hover:text-violet-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-violet-400">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold text-white">Legal</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/privacy" className="hover:text-violet-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-violet-400">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-10 h-px bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-violet-400 font-medium">ZPay</span>. All
            rights reserved.
          </p>
          <p>Secure • Fast • Trusted</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
