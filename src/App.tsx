/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Leaf, ShieldCheck, Database, Sliders, CloudSun, HeartPulse } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 relative"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-leaf/5 blur-3xl rounded-full -z-10" />
          
          <div className="flex flex-col items-center">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-brand-leaf text-brand-cream shadow-xl shadow-brand-leaf/20 mb-8 cursor-default transition-all"
            >
              <Leaf size={32} strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="font-serif text-6xl sm:text-8xl font-light text-brand-leaf mb-2 tracking-tighter text-center">
              Fern
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-brand-olive/20" />
              <p className="text-brand-olive text-xs sm:text-sm uppercase tracking-[0.4em] font-bold">
                Privacy & Governance
              </p>
              <div className="h-px w-8 bg-brand-olive/20" />
            </div>
          </div>
        </motion.header>

        <motion.main 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="markdown-body"
        >
          <motion.section variants={fadeIn} className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-brand-olive" size={24} />
              <h2 className="!mt-0 !mb-0">Privacy Policy</h2>
            </div>
            <p>
              At <strong>Fern</strong>, we believe your health journey is personal. Our privacy commitment is simple: <strong>We do not collect, sell, or store your personal data on any server.</strong>
            </p>

            <div className="grid gap-8 mt-10">
              <div className="flex gap-4">
                <div className="mt-1 text-brand-olive">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Local Storage</h3>
                  <p className="text-base text-brand-dark/70">
                    All your data (name, weight, intake history, streaks) is stored exclusively in your browser's local storage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-brand-olive">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">No Tracking</h3>
                  <p className="text-base text-brand-dark/70">
                    We do not use cookies or tracking pixels to monitor your behavior.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-brand-olive">
                  <CloudSun size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Weather Data</h3>
                  <p className="text-base text-brand-dark/70">
                    We use your approximate location solely to provide hydration advice based on local temperature. This data is processed in real-time and never logged.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <hr className="border-brand-olive/10 mb-20" />

          <motion.section variants={fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <HeartPulse className="text-brand-olive" size={24} />
              <h2 className="!mt-0 !mb-0">Terms of Service</h2>
            </div>
            <p>
              By using this application, you agree to the following terms of engagement with your leaf-fox companion:
            </p>

            <div className="space-y-8 mt-10">
              <div>
                <h3 className="text-xl font-medium mb-2">Educational Purpose</h3>
                <p className="text-base text-brand-dark/70 leading-relaxed">
                  This app is a motivational tool and should not be used as professional medical advice. Always consult a doctor for specific hydration needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">User Responsibility</h3>
                <p className="text-base text-brand-dark/70 leading-relaxed">
                  You are responsible for ensuring your device is secure, as your data lives only on your machine.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Guardian Duty</h3>
                <p className="text-base text-brand-dark/70 leading-relaxed">
                  You bear the responsibility for Fern's well-being. Neglect leading to "Wilting" or regression is a natural consequence of the simulation.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.main>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-32 pt-12 border-t border-brand-olive/10 text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-brand-olive/50">
            © {new Date().getFullYear()} Fern Hydration Companion
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

