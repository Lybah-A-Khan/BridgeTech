import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { label: "my_site.html", id: "html" },
  { label: "hello.py", id: "python" },
  { label: "ai_model.py", id: "ai" },
];

function HtmlScreen() {
  return (
    <div className="h-full bg-white p-4 font-mono text-[11px] leading-5 overflow-hidden">
      <p><span className="text-gray-400">{"<!-- Student project -->"}</span></p>
      <p><span className="text-blue-500">{"<h1"}</span> <span className="text-orange-400">style</span>=<span className="text-green-600">"color:#2d6a4f"</span><span className="text-blue-500">{">"}</span></p>
      <p className="pl-4">Hi, I'm <span className="text-primary font-bold">learning to code</span></p>
      <p><span className="text-blue-500">{"</h1>"}</span></p>
      <p className="mt-1"><span className="text-blue-500">{"<p>"}</span>Built with <span className="text-primary font-semibold">BridgeTech</span> 🌱<span className="text-blue-500">{"</p>"}</span></p>
      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-md p-2">
        <p className="text-emerald-700 font-sans text-[10px] font-medium">Live preview</p>
        <p className="text-gray-800 font-sans text-sm font-semibold mt-0.5">Hi, I'm learning to code</p>
        <p className="text-gray-500 font-sans text-[10px]">Built with BridgeTech 🌱</p>
      </div>
    </div>
  );
}

function PythonScreen() {
  return (
    <div className="h-full bg-[#1e1e2e] p-4 font-mono text-[11px] leading-5 overflow-hidden">
      <p><span className="text-blue-400"># Python by Saleh, grade 7</span></p>
      <p className="mt-1">
        <span className="text-purple-400">def </span>
        <span className="text-yellow-300">greet</span>
        <span className="text-gray-300">(name):</span>
      </p>
      <p className="pl-4">
        <span className="text-purple-400">return </span>
        <span className="text-green-400">f"Hello, </span>
        <span className="text-orange-300">{"{"}</span>
        <span className="text-gray-300">name</span>
        <span className="text-orange-300">{"}"}</span>
        <span className="text-green-400">! 👋"</span>
      </p>
      <p className="mt-2">
        <span className="text-purple-400">for </span>
        <span className="text-gray-300">student </span>
        <span className="text-purple-400">in </span>
        <span className="text-gray-300">students:</span>
      </p>
      <p className="pl-4">
        <span className="text-yellow-300">print</span>
        <span className="text-gray-300">(greet(student))</span>
      </p>
      <div className="mt-3 border-t border-white/10 pt-2">
        <p className="text-gray-500">Output:</p>
        <p className="text-green-400">Hello, Saleh! 👋</p>
        <p className="text-green-400">Hello, Maya! 👋</p>
        <p className="text-primary animate-pulse">_</p>
      </div>
    </div>
  );
}

function AIScreen() {
  return (
    <div className="h-full bg-white p-4 overflow-hidden">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Google Teachable Machine</p>
      <div className="space-y-2.5">
        {[
          { label: "Rock", pct: 92, color: "bg-emerald-500" },
          { label: "Paper", pct: 5, color: "bg-blue-400" },
          { label: "Scissors", pct: 3, color: "bg-rose-400" },
        ].map((c, i) => (
          <div key={c.label} className="flex items-center gap-2">
            <span className="text-[10px] w-12 text-right text-gray-500 font-medium">{c.label}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${c.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${c.pct}%` }}
                transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
              />
            </div>
            <span className="text-[10px] w-7 font-bold text-gray-600">{c.pct}%</span>
          </div>
        ))}
      </div>
      <div className="mt-3 bg-emerald-50 rounded-md p-2 border border-emerald-200">
        <p className="text-[10px] text-emerald-700 font-semibold">✅ Model accuracy: 87% — FLL Challenge winner</p>
      </div>
    </div>
  );
}

interface LaptopMockupProps {
  className?: string;
}

export function LaptopMockup({ className = "" }: LaptopMockupProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTab((p) => (p + 1) % tabs.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      className={`relative w-full max-w-[500px] mx-auto select-none ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Screen bezel */}
      <div className="bg-[#2a2a2a] rounded-[16px] p-3 shadow-2xl ring-1 ring-white/5">
        {/* Camera dot */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-2 rounded-full bg-[#555]" />
        </div>

        {/* Screen */}
        <div className="bg-white rounded-lg overflow-hidden" style={{ aspectRatio: "16/10" }}>
          {/* Browser chrome */}
          <div className="bg-gray-100 px-3 py-1.5 flex items-center gap-2 border-b border-gray-200 flex-shrink-0">
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex gap-1 flex-1 min-w-0">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`text-[9px] px-2 py-0.5 rounded-sm truncate flex-shrink-0 transition-all cursor-pointer font-medium
                    ${activeTab === i
                      ? "bg-white text-gray-700 shadow-sm border border-gray-200/80"
                      : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.28 }}
                className="h-full"
              >
                {activeTab === 0 && <HtmlScreen />}
                {activeTab === 1 && <PythonScreen />}
                {activeTab === 2 && <AIScreen />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div className="bg-[#3a3a3a] h-[3px] mx-4 shadow-inner" />

      {/* Keyboard base */}
      <div className="relative bg-[#363636] rounded-b-[14px] h-5 mx-0 shadow-xl">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[30%] h-2 bg-[#444] rounded-full" />
      </div>

      {/* Ground shadow */}
      <div className="h-3 bg-black/10 rounded-full blur-xl mt-1.5 mx-10" />

      {/* Tab indicator dots */}
      <div className="flex justify-center gap-2 mt-5">
        {tabs.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${activeTab === i ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
