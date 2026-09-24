import sys
import re

filepath = 'c:/Users/Nahush Patel/Desktop/Relationship/WhatHappened.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update imports
import_old = "import { Play, Pause, BookOpen, Volume2, BrainCircuit, Download, X, ArrowDown, ArrowRight, Heart, Eye, MessageSquare, CheckCircle2, Users } from 'lucide-react';"
import_new = "import { Play, Pause, BookOpen, Volume2, BrainCircuit, Download, X, ArrowDown, ArrowRight, Heart, Eye, MessageSquare, CheckCircle2, Users, Leaf, Sun, List } from 'lucide-react';"
if import_old in text:
    text = text.replace(import_old, import_new)
    print("Updated imports.")
else:
    print("Old imports not found, maybe already updated.")

# 2. Replace Hero Section
hero_start = text.find("{/* ═══════════════════════════════════════════════════════════════════\n          HERO")
if hero_start == -1:
    print("Hero start not found!")
    sys.exit(1)

hero_end_marker = "{/* ═══════════════════════════════════════════════════════════════════\n          MAIN CONTENT"
hero_end = text.find(hero_end_marker)
if hero_end == -1:
    print("Hero end not found!")
    sys.exit(1)

new_hero = """{/* ═══════════════════════════════════════════════════════════════════
          HERO - Two Column Layout with Floating Cards
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-20 pb-32 flex flex-col items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.08)_0%,rgba(248,250,252,1)_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-xl mx-auto text-center lg:text-left"
            >
              <p className="text-[10px] md:text-xs font-bold text-slate-400 tracking-[0.25em] uppercase mb-6">
                UNDERSTAND · HEAL · MOVE FORWARD
              </p>
              
              <h1 className="font-serif text-5xl lg:text-7xl mb-6 text-slate-800 leading-tight">
                The Psychology of <br/>
                <span className="text-[#0284c7] italic">Complicated Breakups</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 mx-auto lg:mx-0 max-w-lg">
                A comprehensive, research-backed guide to understanding what happens when a relationship breaks down, how attractions and emotions evolve, and the emotional realities of what comes after.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <button className="w-full sm:w-auto bg-[#0284c7] text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#0369a1] transition-colors shadow-lg shadow-[#0284c7]/20">
                  <BookOpen size={18} />
                  Start Reading the Guide <ArrowRight size={16} className="ml-1" />
                </button>
                <button className="w-full sm:w-auto bg-white text-slate-700 px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                  <List size={18} className="text-[#0284c7]" />
                  Explore Topics
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  {['bg-rose-100', 'bg-blue-100', 'bg-emerald-100', 'bg-amber-100', 'bg-purple-100'].map((bg, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center ${bg} text-[10px] font-bold text-slate-600 shadow-sm`}>
                      {['EP', 'SJ', 'JG', 'TL', 'AL'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 italic max-w-[250px] leading-relaxed text-center sm:text-left">
                  A clear, compassionate guide for anyone navigating love, loss and new beginnings.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Image with Floating Bubbles */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Organic Blob Image */}
              <div className="relative mx-auto w-[90%] max-w-[500px] aspect-square ml-auto">
                <div 
                  className="w-full h-full bg-slate-200 overflow-hidden shadow-2xl"
                  style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" 
                    alt="Looking at sunset" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>

                {/* Floating Bubbles */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[5%] -left-16 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px]"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0284c7] flex items-center justify-center shrink-0">
                    <BrainCircuit size={20} />
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-tight">Why do relationships become complicated?</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[0%] -right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[200px]"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                    <Heart size={20} />
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-tight">What really happens after a breakup?</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[20%] -left-12 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[200px]"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Leaf size={20} />
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-tight">How do emotions evolve over time?</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 8, 0] }} 
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-[25%] -right-12 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px]"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Sun size={20} />
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-tight">How can I heal and move forward?</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURES ROW (Overlapping Hero)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative z-30 -mt-16 container mx-auto px-6 lg:px-12 max-w-7xl mb-12">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                <Heart size={22} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-slate-800 mb-1">Understand Patterns</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Learn the psychological dynamics that lead to breakups.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center">
                <Users size={22} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-slate-800 mb-1">See Both Perspectives</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Explore what typically happens on both sides.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BrainCircuit size={22} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-slate-800 mb-1">Process Your Emotions</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Make sense of the feelings you're experiencing.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                <Leaf size={22} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-slate-800 mb-1">Find a Way Forward</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Practical insights for healing and personal growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
"""

text = text[:hero_start] + new_hero + text[hero_end:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Hero section fully updated!")
