import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, BookOpen, Volume2, BrainCircuit, Download, X, ArrowDown, ArrowRight, Heart, Eye, MessageSquare, CheckCircle2, Users, Leaf, Sun, List, AlertCircle, Info } from 'lucide-react';
import AfterTheBreakup from './AfterTheBreakup';

export default function WhatHappened() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.onended = () => setIsPlaying(false);
    }
  }, []);

  // Numbered section header
  const SectionHeader = ({ num, title, subtitle }) => (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0284c7] to-[#A8844A] flex items-center justify-center font-serif text-white font-bold text-lg shrink-0 shadow-lg shadow-[#0284c7]/20">
          {num}
        </div>
        <h3 className="text-2xl md:text-3xl font-serif leading-tight">{title}</h3>
      </div>
      {subtitle && <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">{subtitle}</p>}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0284c7] selection:text-white overflow-x-hidden pt-[var(--nav-height,80px)]">
      
      {/* ═══════════════════════════════════════════════════════════════════
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
              
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6 mx-auto lg:mx-0 max-w-lg">
                A comprehensive, research-backed guide to understanding what happens when a relationship breaks down, how attractions and emotions evolve, and the emotional realities of what comes after.
              </p>

              <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-4 mb-4 flex items-start gap-3 max-w-lg mx-auto lg:mx-0 text-left shadow-sm">
                <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900/80 leading-relaxed">
                  <strong className="text-amber-700">Important:</strong> Psychology explains possibilities, not certainties. This framework highlights common psychological patterns, but it is not equally applicable to every unique relationship scenario.
                </p>
              </div>

              <div className="bg-sky-50/80 border border-sky-200/60 rounded-xl p-4 mb-10 flex items-start gap-3 max-w-lg mx-auto lg:mx-0 text-left shadow-sm">
                <Info size={20} className="text-sky-600 shrink-0 mt-0.5" />
                <p className="text-sm text-sky-900/80 leading-relaxed">
                  <strong className="text-sky-700">A Note on Gender:</strong> This guide occasionally uses "she" (e.g., a girlfriend feeling attracted) and "he" (e.g., a boyfriend feeling insecure) as consistent, illustrative examples. However, these psychological dynamics, outside attractions, and emotional responses happen to <strong>both men and women</strong> equally.
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
      
{/* ═══════════════════════════════════════════════════════════════════
          MAIN CONTENT - The Psychology Guide
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="guide-start" className="py-20 md:py-28 relative z-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-28">

          {/* ── Intro Note ── */}
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This guide strips away opinions and random internet advice, relying entirely on clinical relationship psychology. What you will read here helps explain the confusing behaviors and emotions that people struggle to understand during a complex breakup.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              These are not personal opinions - these are deep-rooted psychological patterns that therapists and researchers have studied for decades.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-100 p-5 rounded-2xl border border-slate-200">
              <BookOpen size={20} className="text-[#0284c7] shrink-0" />
              <p className="text-sm text-slate-600">I put together a full guide. You can download it here:</p>
              <a 
                href="/Understanding Attraction.pdf" 
                download 
                className="flex items-center gap-2 text-sm font-medium bg-[#0284c7] text-white px-5 py-2.5 rounded-xl hover:bg-white transition-colors shrink-0 shadow-lg shadow-[#0284c7]/10"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </motion.div>

            {/* ── Research Credits ── */}
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen size={18} className="text-[#0284c7] shrink-0" />
                <p className="text-slate-600 text-sm font-medium">This research is based on the following books and peer-reviewed studies:</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
                {[
                  "Attached - Amir Levine & Rachel Heller",
                  "Hold Me Tight - Dr. Sue Johnson",
                  "The State of Affairs - Esther Perel",
                  "The Rule of Love",
                  "The Psychology of Love",
                  "Life With ADHD: 50 Facts and More",
                  "Mating in Captivity - Esther Perel",
                  "The Seven Principles for Making Marriage Work - John Gottman",
                  "8 Dates - John & Julie Gottman",
                  "The Science of Trust - John Gottman",
                  "A General Theory of Love - Thomas Lewis, Fari Amini & Richard Lannon",
                  "Wired for Love - Stan Tatkin",
                  "Not \"Just Friends\" - Shirley Glass",
                  "After the Affair - Janis A. Spring",
                  "Come As You Are - Emily Nagoski",
                  "The Body Keeps the Score - Bessel van der Kolk",
                  "Polysecure - Jessica Fern",
                  "Getting the Love You Want - Harville Hendrix",
                  "Love Sense - Dr. Sue Johnson",
                  "The Course of Love - Alain de Botton",
                  "Why We Love - Helen Fisher",
                  "Anatomy of Love - Helen Fisher",
                  "The Road Less Travelled - M. Scott Peck",
                  "How to Be an Adult in Relationships - David Richo",
                  "Running on Empty - Jonice Webb",
                  "Emotional Intelligence - Daniel Goleman",
                  "Emotional Intelligence 2.0 - Travis Bradberry & Jean Greaves",
                  "The Five Love Languages - Gary Chapman",
                  "Boundaries in Dating - Henry Cloud & John Townsend"
                ].map((book, i) => (
                  <p key={i} className="text-slate-500 text-xs leading-relaxed flex items-start gap-1.5">
                    <span className="text-[#0284c7]/50 mt-0.5 shrink-0">▪</span>
                    <span>{book}</span>
                  </p>
                ))}
              </div>
              <p className="text-slate-600 text-[11px] italic">+ peer-reviewed research from PMC, APA journals, and relationship psychology studies.</p>
            </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GOING DEEPER - The Psychological Reality
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-20 bg-slate-50 border-y border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,166,107,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-28">

          {/* Section intro */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0284c7] mb-8">
              <Eye size={26} strokeWidth={1.2} />
            </div>
            <h2 id="topics-start" className="font-serif text-3xl md:text-5xl mb-6 scroll-mt-24">Going Deeper</h2>
            <p className="text-slate-600 leading-relaxed">
              The sections above explain the basics. But what actually happens inside two people when things start to shift? This part goes deeper - into the feelings, the confusion, and the pain that both sides experience.
            </p>
          </motion.div>

          {/* ── 1. Emotional attention shifts ── */}
          <div>
            <SectionHeader num="①" title="Her Attention Can Slowly Shift" subtitle="It doesn't happen all at once - it's gradual" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              When someone starts feeling something for another person, their attention slowly moves toward that new connection. It's not a conscious decision like "I don't care about my boyfriend anymore." It happens through small moments - a conversation here, a laugh there - until the pattern becomes real.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-4">The boyfriend starts to feel like</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex gap-2.5"><span className="text-slate-600">→</span> The familiar relationship</li>
                  <li className="flex gap-2.5"><span className="text-slate-600">→</span> Problems, emotional pressure</li>
                  <li className="flex gap-2.5"><span className="text-slate-600">→</span> Expectations and responsibility</li>
                  <li className="flex gap-2.5"><span className="text-slate-600">→</span> Conflict and guilt</li>
                </ul>
              </div>
              <div className="bg-[#0284c7]/[0.04] p-7 rounded-2xl border border-[#0284c7]/10">
                <h4 className="text-[#0284c7]/60 text-xs uppercase tracking-widest font-bold mb-4">The other person starts to feel like</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex gap-2.5"><span className="text-[#0284c7]/40">→</span> Something new and exciting</li>
                  <li className="flex gap-2.5"><span className="text-[#0284c7]/40">→</span> Validation and attention</li>
                  <li className="flex gap-2.5"><span className="text-[#0284c7]/40">→</span> Possibility and discovery</li>
                  <li className="flex gap-2.5"><span className="text-[#0284c7]/40">→</span> Freedom from the heavy stuff</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-5 rounded-xl text-center">
              <p className="text-slate-600 italic text-sm">That contrast can make the new connection feel much more powerful than it actually is.</p>
            </div>
          </div>

          {/* ── 2. His suffering can push her further ── */}
          <div>
            <SectionHeader num="②" title="His Pain Can Accidentally Push Her Away" subtitle="This is one of the hardest things to understand" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              When the boyfriend senses something is wrong, his natural response is to show how much he's hurting - hoping she'll come closer. But sometimes the opposite happens.
            </p>
            
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-10 rounded-[2rem] border border-slate-200 mb-8">
              <div className="space-y-6 max-w-2xl mx-auto">
                {[
                  { left: "She becomes emotionally distant", right: "" },
                  { left: "He gets scared", right: "asks for reassurance" },
                  { left: "He becomes more emotional", right: "shows how much he's hurting" },
                  { left: "She feels pressured and guilty", right: "doesn't know how to handle it" },
                  { left: "She pulls back more", right: "needs space" },
                  { left: "He gets even more distressed", right: "can't understand why" },
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    className="flex flex-col md:flex-row items-center gap-3 md:gap-6"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl flex-1 w-full text-center text-sm text-slate-700">{step.left}</div>
                    {step.right && (
                      <>
                        <ArrowRight size={14} className="text-slate-500 shrink-0 hidden md:block" />
                        <div className="bg-[#0284c7]/[0.06] border border-[#0284c7]/10 p-4 rounded-xl flex-1 w-full text-center text-sm text-slate-600 italic">{step.right}</div>
                      </>
                    )}
                    {i < 5 && <ArrowDown size={14} className="text-slate-800/10 md:hidden" />}
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-slate-600 text-xs italic mt-8 max-w-lg mx-auto">
                This becomes a loop. Each time it repeats, the gap gets wider. His pain is real - but it can produce the opposite response from what he hopes for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-100 border border-slate-200 p-6 rounded-2xl">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-3">What he's thinking</p>
                <p className="text-slate-700 font-serif italic">"I'm showing her how badly I'm hurting. Surely she'll come closer."</p>
              </div>
              <div className="bg-slate-100 border border-slate-200 p-6 rounded-2xl">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-3">What she might be experiencing</p>
                <p className="text-slate-700 font-serif italic">"I don't know how to deal with all this intensity. I need space."</p>
              </div>
            </div>
          </div>

          {/* ── 3. Why she seems happy ── */}
          <div>
            <SectionHeader num="③" title="Why She Can Seem Happy While He's Suffering" subtitle="This part is especially confusing - and especially painful" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              When the relationship gets emotionally heavy, she might start putting more energy into other parts of her life - friends, going out, hobbies, dancing, spending time alone. From the outside, the boyfriend thinks:
            </p>
            <div className="bg-[#0284c7]/[0.06] border border-[#0284c7]/10 p-6 rounded-2xl text-center font-serif italic text-slate-700 mb-10">
              "How can she be dancing and enjoying herself while I'm suffering?"
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              But her activity doesn't automatically measure how much she cares. Psychologically, it can mean several different things:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Wanting to feel like herself", desc: "\"I want my identity back - not just 'the girlfriend.'\"" },
                { title: "Emotional relief", desc: "\"When I'm doing this, I don't have to think about the hard stuff.\"" },
                { title: "Excitement from something new", desc: "\"Something different feels good right now.\"" },
                { title: "Avoiding the pain", desc: "\"If I keep busy, I don't have to face the difficult conversation.\"" },
                { title: "Rediscovering herself", desc: "\"I want to experience who I am outside of this relationship.\"" },
                { title: "Attention has moved", desc: "If someone else is involved - her emotional energy may have shifted toward them." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-slate-100 p-5 rounded-2xl border border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h4 className="font-bold text-sm mb-2 text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500 italic leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-slate-600 italic text-xs mt-6">You can't tell which one it is just by watching someone dance or enjoy their life.</p>
          </div>

          {/* ── 4. Why he suffers more ── */}
          <div>
            <SectionHeader num="④" title="Why He Sometimes Suffers So Much More" subtitle="Because they're in completely different places emotionally" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              When a relationship is falling apart, the two people can be thinking completely different things:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 border-l-4 border-blue-400/40 p-7 rounded-r-2xl">
                <p className="text-blue-700/70 text-xs font-bold uppercase tracking-widest mb-3">What he's thinking</p>
                <p className="text-xl font-serif text-slate-700 italic">"How do we save us?"</p>
              </div>
              <div className="bg-slate-100 border-l-4 border-red-400/40 p-7 rounded-r-2xl">
                <p className="text-red-700/70 text-xs font-bold uppercase tracking-widest mb-3">What she might already be thinking</p>
                <p className="text-xl font-serif text-slate-700 italic">"Do I actually want this anymore?"</p>
              </div>
            </div>
            <div className="bg-white shadow-sm border-slate-200 p-7 rounded-2xl border border-slate-200 max-w-3xl space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                If she has already started pulling back emotionally, she may have been processing the separation <strong className="text-slate-700">before</strong> it actually happens. She goes through it gradually, over weeks or months.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                But for him, it hits all at once. That's why the person being left can seem devastated while the other seems calm.
              </p>
              <p className="text-slate-600 text-sm italic">
                It doesn't mean one loved more or the other never cared. It means they experienced the ending at different speeds.
              </p>
            </div>
          </div>

          {/* ── 5. The contrast effect ── */}
          <div>
            <SectionHeader num="⑤" title="When Someone Else Is in the Picture, It Gets Stronger" subtitle="This is what makes your situation different from normal relationship problems" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              If there is another person she's feeling something for, she may be receiving from them:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0284c7]/[0.06] p-7 rounded-2xl border border-[#0284c7]/15">
                <h4 className="text-[#0284c7] text-sm font-bold uppercase tracking-widest mb-4">From the new person</h4>
                <div className="space-y-2.5">
                  {["Novelty", "Attention", "Validation", "Excitement", "Possibility"].map((t, i) => (
                    <div key={i} className="bg-slate-100/20 p-3 rounded-xl text-center text-slate-700 text-sm">{t}</div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">From the relationship</h4>
                <div className="space-y-2.5">
                  {["Conflict", "Guilt", "Expectations", "Emotional responsibility", "Familiarity"].map((t, i) => (
                    <div key={i} className="bg-slate-100/20 p-3 rounded-xl text-center text-slate-600 text-sm">{t}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-6 rounded-2xl max-w-3xl">
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                That contrast makes the new connection feel unfairly powerful. But it would be too simple to say:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <X size={14} className="text-red-700/60 shrink-0" />
                  <span>"She likes the other guy because her boyfriend was bad."</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <X size={14} className="text-red-700/60 shrink-0" />
                  <span>"She stopped loving her boyfriend because she found someone better."</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm italic mt-4">
                Real situations involve several things happening at once. It's never as simple as one reason.
              </p>
            </div>
          </div>

          {/* ── 6. Deactivation ── */}
          <div>
            <SectionHeader num="⑥" title="The Slow 'Switching Off'" subtitle="How someone can still be in a relationship but emotionally check out" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
              When someone is pulling away, they slowly reduce the things that keep a relationship alive. It looks like this:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Fewer real conversations",
                "Less curiosity about the partner",
                "Less desire to fix problems together",
                "Less physical closeness",
                "Less reassurance when things feel shaky",
                "Less sharing about daily life",
                "Less concern about how the partner feels",
                "More independent activities",
                "More emotional energy going somewhere else",
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-slate-100 border border-slate-200 p-4 rounded-xl text-sm text-slate-600 flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-400/40 shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#0284c7]/[0.06] to-transparent border-l-4 border-[#0284c7]/30 p-6 rounded-r-2xl">
              <p className="text-slate-600 text-sm italic leading-relaxed">
                This is what researchers call "behavioral disengagement." The person is still technically in the relationship - but they've stopped putting energy into it.
              </p>
            </div>
          </div>

          {/* ── 7. What it feels like for him ── */}
          <div>
            <SectionHeader num="⑦" title="What This Feels Like for Him" subtitle="And why it hurts in a way that's hard to explain" />
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-10 rounded-[2rem] border border-slate-200 mb-8">
              <div className="max-w-2xl mx-auto space-y-6">
                {[
                  { before: "She used to care when I was hurt.", after: "Now I'm crying and she's going out." },
                  { before: "She used to want to talk to me.", after: "Now she wants space." },
                  { before: "She used to worry about losing me.", after: "Now she seems completely fine." },
                ].map((pair, i) => (
                  <motion.div 
                    key={i}
                    className="grid md:grid-cols-2 gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="bg-slate-100 p-4 rounded-xl text-center">
                      <p className="text-slate-700 text-sm font-serif italic">{pair.before}</p>
                    </div>
                    <div className="bg-red-950/15 border border-red-500/20 p-4 rounded-xl text-center">
                      <p className="text-red-700/60 text-sm font-serif italic">{pair.after}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-200 max-w-2xl mx-auto">
                <p className="text-center text-slate-600 text-sm leading-relaxed mb-4">
                  What's happening psychologically:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-xs text-slate-600 uppercase tracking-widest font-bold mb-2">His attachment system</p>
                    <p className="text-lg font-bold text-slate-700 mb-3">Getting MORE activated</p>
                    <div className="space-y-2 text-sm text-slate-600 italic">
                      <p>"Don't leave me."</p>
                      <p>"Why are you changing?"</p>
                      <p>"Do you still love me?"</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-600 uppercase tracking-widest font-bold mb-2">Her attachment system</p>
                    <p className="text-lg font-bold text-slate-700 mb-3">Getting LESS activated</p>
                    <div className="space-y-2 text-sm text-slate-600 italic">
                      <p>"I need space."</p>
                      <p>"I want to do my own things."</p>
                      <p>"I want to enjoy myself."</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-slate-500 text-xs italic mt-6">
                  That creates an enormous gap between two people who used to be close.
                </p>
              </div>
            </div>
          </div>

          {/* ── 8. The Important Distinction ── */}
          <div>
            <SectionHeader num="⑧" title="The Really Important Distinction" subtitle="Three situations that can look the same from the outside - but are very different inside" />
            
            <div className="space-y-6 mb-10">
              <motion.div 
                className="bg-emerald-950/10 border border-emerald-900/20 p-7 rounded-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-4">A. She's unhappy but still emotionally invested</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  She might go out, dance, spend time alone - but she still:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {["Cares about his feelings", "Communicates openly", "Keeps boundaries with others", "Tries to repair things", "Wants the relationship", "Makes sacrifices for it"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-emerald-800/60 text-sm">
                      <CheckCircle2 size={14} className="text-emerald-700/60 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <p className="text-emerald-700/40 text-xs italic mt-4">This is NOT emotional abandonment.</p>
              </motion.div>

              <motion.div 
                className="bg-orange-950/10 border border-orange-900/20 p-7 rounded-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-orange-700 font-bold text-sm uppercase tracking-widest mb-4">B. She's emotionally exhausted and withdrawing</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  She may still love him - but she's been overwhelmed by how things have been going.
                </p>
                <p className="text-orange-700/50 font-serif italic text-sm">
                  "I care about you, but I don't want to keep doing this."
                </p>
              </motion.div>

              <motion.div 
                className="bg-red-950/10 border border-red-500/20 p-7 rounded-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-red-700 font-bold text-sm uppercase tracking-widest mb-4">C. Her emotional energy has moved to someone else</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  This is when the pattern looks like:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Less investment in the boyfriend ↓",
                    "More investment in the other person ↑",
                    "Less interest in fixing things ↓",
                    "More independent social life ↑",
                    "Boundaries with the other person ↓",
                    "Attention toward alternative ↑",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-red-800/50 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <p className="text-red-700/40 text-xs italic mt-4">This is much more significant than simply "she likes dancing now."</p>
              </motion.div>
            </div>

            {/* Final note */}
            <div className="bg-slate-100 border border-[#0284c7]/15 p-8 rounded-2xl max-w-3xl mx-auto text-center">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-4">What I would NOT conclude</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                I wouldn't say "She doesn't care about him anymore" based on behavior alone.
              </p>
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                A better way to put it: her actions might show less effort in the relationship - but you'd need to understand whether that's emotional exhaustion, needing space, seeking independence, or genuinely moving on.
              </p>
              <div className="w-12 h-[1px] bg-[#0284c7]/30 mx-auto mb-6" />
              <p className="text-slate-500 text-xs leading-relaxed">
                The boyfriend's pain is real evidence of <em>his</em> experience. But it's not direct evidence of what's happening inside <em>her</em> mind. Both realities can exist at the same time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          UNDERSTANDING THE OTHER PERSON'S SIDE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,166,107,0.05)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(201,166,107,0.03)_0%,transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-28">

          {/* ══ SECTION HERO ══ */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0284c7]/70 mb-4">A Different Perspective</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-slate-800 leading-tight">
              Understanding the<br/>
              <span className="text-[#0284c7] italic">Other Person's Side</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto mb-6">
              If you want to understand how attraction toward someone who is already in a relationship can develop - without attaching it to specific people - this section explains the psychology behind it.
            </p>
            <p className="text-slate-500 text-sm italic max-w-xl mx-auto mb-10">
              Being attracted to someone who is already committed does not automatically mean the person is trying to break the relationship. Outside attractions are fairly common, and research has found that many people experience them without acting on them or damaging their primary relationship.
            </p>
          </motion.div>

          {/* ══ 1-2. THE INNOCENT BEGINNING & RECIPROCATION ══ */}
          <div>
            <SectionHeader num="❶" title="It Usually Starts Very Innocently" subtitle="No plan, no strategy - just noticing someone" />
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-slate-100 p-8 rounded-2xl border border-slate-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#0284c7] font-serif text-lg mb-5">The initial thoughts</h4>
                <div className="space-y-3">
                  {[
                    "\"She's interesting.\"",
                    "\"I enjoy talking to her.\"",
                    "\"We have good chemistry.\"",
                    "\"She's attractive.\"",
                    "\"I feel comfortable around her.\""
                  ].map((t, i) => (
                    <div key={i} className="bg-[#0284c7]/[0.04] p-3.5 rounded-xl border border-[#0284c7]/10">
                      <p className="text-slate-800/65 text-sm font-serif italic">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs italic mt-5">At this stage, there may be no plan whatsoever to pursue a relationship. The person may simply enjoy the interaction.</p>
              </motion.div>

              <motion.div
                className="bg-[#0284c7]/[0.04] p-8 rounded-2xl border border-[#0284c7]/15"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#0284c7] font-serif text-lg mb-5">Then reciprocation changes everything</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  This is often a major turning point. When the other person starts:
                </p>
                <div className="space-y-2.5">
                  {[
                    "Initiating conversations",
                    "Looking for opportunities to spend time together",
                    "Flirting",
                    "Sharing personal things",
                    "Giving special attention",
                    "Seeking emotional support"
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <ArrowRight size={12} className="text-[#0284c7]/50 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-slate-100/20 p-4 rounded-xl border border-[#0284c7]/10">
                  <p className="text-[#0284c7]/80 font-serif italic text-sm">"Maybe she likes me too."</p>
                  <p className="text-slate-500 text-xs mt-2">That changes the psychological situation because the attraction is no longer completely one-sided.</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-slate-100 border border-slate-200 p-5 rounded-xl text-center">
              <p className="text-slate-600 text-sm italic">Research on attractive alternatives suggests that reciprocated attraction (Interpersonal Attraction) represents a greater threat to an existing relationship than an attractive person who isn't reciprocating.</p>
            </div>
          </div>

          {/* ══ 3. TESTING BOUNDARIES ══ */}
          <div>
            <SectionHeader num="❷" title="Testing Boundaries - Often Without Realizing" subtitle="The line between enjoying someone and pursuing them" />
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-3xl">
              This doesn't necessarily happen consciously. It can begin with very small things:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {[
                "Messaging more often",
                "Joking in a flirtatious way",
                "Sitting together more",
                "Spending time alone",
                "Discussing relationship problems",
                "Asking personal questions",
                "Complimenting appearance",
                "Finding excuses to meet"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <p className="text-slate-600 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-950/10 border border-emerald-900/20 p-6 rounded-2xl text-center">
                <p className="text-emerald-700/80 text-xs font-bold uppercase tracking-widest mb-3">Just enjoying</p>
                <p className="text-emerald-800/70 font-serif italic text-sm">"I enjoy talking to this person."</p>
              </div>
              <div className="bg-red-950/10 border border-red-500/20 p-6 rounded-2xl text-center">
                <p className="text-red-700/80 text-xs font-bold uppercase tracking-widest mb-3">Active pursuit</p>
                <p className="text-red-800/70 font-serif italic text-sm">"I'm going to see how far this can go."</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0284c7]/10 via-[#0284c7]/5 to-transparent border-l-4 border-[#0284c7] p-6 rounded-r-2xl">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-slate-800">This is where intent becomes important.</strong> There is a major difference between these two states. The person is essentially discovering: "How much closeness is possible here?"
              </p>
            </div>
          </div>

          {/* ══ 4. BECOMING AN EMOTIONAL ALTERNATIVE ══ */}
          <div>
            <SectionHeader num="❸" title="Becoming an Emotional Alternative" subtitle="One of the most important stages" />
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-3xl">
              The person who is attracted may start becoming someone the other turns to when:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {["They're upset", "They're fighting with their partner", "They feel lonely", "They need validation", "They want someone to listen", "They want excitement"].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#0284c7]/[0.04] p-4 rounded-xl border border-[#0284c7]/10 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <p className="text-slate-600 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white shadow-sm border-slate-200 p-8 rounded-[2rem] border border-slate-200 mb-8">
              <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">The dynamic that forms</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200 text-center">
                  <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold mb-2">Partner =</p>
                  <p className="text-slate-600 text-sm">Relationship responsibilities</p>
                </div>
                <div className="bg-[#0284c7]/[0.06] p-5 rounded-xl border border-[#0284c7]/15 text-center">
                  <p className="text-[#0284c7]/50 text-[10px] uppercase tracking-widest font-bold mb-2">Other person =</p>
                  <p className="text-slate-700 text-sm">Excitement (Novelty Effect) + validation + emotional escape</p>
                </div>
              </div>
              <p className="text-center text-slate-500 text-xs italic mt-6">That combination can be extremely powerful. The attraction isn't necessarily only physical anymore.</p>
            </div>

            <div className="space-y-2">
              {[
                "\"I understand her better.\"",
                "\"She is happier when she's with me.\"",
                "\"She tells me things she doesn't tell her partner.\"",
                "\"Maybe we would actually work together.\""
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-100 p-4 rounded-xl border border-slate-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="text-slate-600 font-serif italic text-sm text-center">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══ 5. THE UNFAIR COMPARISON ══ */}
          <div>
            <SectionHeader num="❹" title="The Existing Relationship Makes It Feel Stronger" subtitle="The comparison is never neutral" />
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-4">Existing partner represents</h4>
                <div className="space-y-2.5">
                  {["Arguments", "Responsibilities", "Familiarity", "Expectations", "Unresolved problems"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0284c7]/[0.04] p-7 rounded-2xl border border-[#0284c7]/10">
                <h4 className="text-[#0284c7]/60 text-xs uppercase tracking-widest font-bold mb-4">New person represents</h4>
                <div className="space-y-2.5">
                  {["Novelty", "Attention", "Excitement", "Validation", "Fewer responsibilities", "Possibility"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]/40 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#0284c7]/[0.06] border border-[#0284c7]/10 p-6 rounded-2xl text-center font-serif italic text-slate-700 mb-4 text-sm">
              "Why does being with this person feel so much easier?"
            </div>
            <p className="text-center text-slate-500 text-xs italic">
              That comparison is misleading (Idealization & Halo Effect) because the new relationship hasn't experienced the same responsibilities and conflicts. The new person is being experienced largely in the early, exciting stage.
            </p>
          </div>

          {/* ══ 6-7. DELIBERATE vs. GRADUAL ══ */}
          <div>
            <SectionHeader num="❺" title="Deliberate Pursuit vs. Gradual Development" subtitle="This distinction is extremely important" />
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-red-950/10 p-7 rounded-3xl border border-red-500/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-red-700 font-serif text-xl mb-2">Deliberate Pursuit</h4>
                <p className="text-slate-500 text-xs mb-5 italic">When someone is actively trying to get closer</p>
                <div className="space-y-2.5">
                  {[
                    "Intentionally creating one-on-one opportunities",
                    "Increasing private communication",
                    "Encouraging emotional dependence",
                    "Criticizing the existing partner",
                    "Suggesting the relationship isn't right",
                    "Implying they would treat them better",
                    "Encouraging secrecy",
                    "Encouraging a breakup",
                    "Waiting for a vulnerable moment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-red-800/55 text-sm">
                      <ArrowRight size={12} className="text-red-700/40 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-[#0284c7]/[0.04] p-7 rounded-3xl border border-[#0284c7]/15"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-[#0284c7] font-serif text-xl mb-2">Gradual Development</h4>
                <p className="text-slate-500 text-xs mb-5 italic">When it happens without a plan</p>
                <div className="flex flex-col items-center gap-2 mb-6">
                  {["Friendship", "Attraction", "Emotional closeness", "Chemistry", "Romantic feelings"].map((stage, i) => (
                    <React.Fragment key={i}>
                      <div className="bg-slate-100/20 px-5 py-2.5 rounded-xl border border-[#0284c7]/10 w-full text-center">
                        <p className="text-slate-800/65 text-sm">{stage}</p>
                      </div>
                      {i < 4 && <ArrowDown size={14} className="text-[#0284c7]/30" />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="bg-slate-100/20 p-4 rounded-xl border border-[#0284c7]/10">
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "I didn't intend for this to happen." - And that can be completely sincere.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-5 rounded-xl text-center">
              <p className="text-slate-600 text-sm italic">Research on "mate poaching" has examined these dynamics. But the existence of this research does not mean that every friendship with an attached person is mate poaching.</p>
            </div>
          </div>

          {/* ══ 8-9. FANTASY & INTERNAL CONFLICT ══ */}
          <div>
            <SectionHeader num="❻" title="Fantasy, Imagination & Internal Conflict" subtitle="When the mind starts creating a future that doesn't exist yet" />
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-slate-100 p-7 rounded-2xl border border-slate-200"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#0284c7] font-serif text-lg mb-5">The imagination starts working</h4>
                <div className="space-y-2.5">
                  {["Dating the person", "Travelling together", "Physical intimacy", "What life together would look like", "How they'd treat them differently", "Whether they would be happier together"].map((t, i) => (
                    <div key={i} className="bg-[#0284c7]/[0.04] p-3 rounded-lg text-center">
                      <p className="text-slate-600 text-sm">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs italic mt-5">Fantasy (Limerence) strengthens attraction even before anything happens. But fantasy still isn't proof that someone wants a real relationship.</p>
              </motion.div>

              <motion.div
                className="bg-white shadow-sm border-slate-200 p-7 rounded-2xl border border-slate-200"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-slate-700 font-serif text-lg mb-5">The internal conflict</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Desire", thought: "\"I really like this person.\"" },
                    { label: "Morality", thought: "\"They're already in a relationship.\"" },
                    { label: "Hope", thought: "\"Maybe their relationship is already ending.\"" },
                    { label: "Fear", thought: "\"What if I get rejected?\"" },
                    { label: "Opportunity", thought: "\"They seem interested in me too.\"" },
                    { label: "Uncertainty", thought: "\"Maybe this is only attraction.\"" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-100 p-3 rounded-xl border border-slate-200">
                      <span className="text-[#0284c7] text-[10px] font-bold uppercase tracking-wider w-20 shrink-0">{item.label}</span>
                      <p className="text-slate-600 text-sm font-serif italic">{item.thought}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-xs italic mt-5">This creates a push-pull pattern. Sometimes closer, then backing away. Confusing for everyone.</p>
              </motion.div>
            </div>
          </div>

          {/* ══ 10. FROM ATTRACTION TO INVESTMENT ══ */}
          <div>
            <SectionHeader num="❼" title="From Attraction to Investment" subtitle="Attraction isn't the critical point - investment is" />
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-10 rounded-[2rem] border border-slate-200 mb-8">
              <div className="space-y-3 max-w-2xl mx-auto">
                {[
                  { level: "1", label: "Notice", desc: "\"They're attractive.\"", intensity: 10 },
                  { level: "2", label: "Enjoy", desc: "\"I like talking to them.\"", intensity: 20 },
                  { level: "3", label: "Curiosity", desc: "\"I wonder if they like me.\"", intensity: 35 },
                  { level: "4", label: "Attraction", desc: "\"I'm developing feelings.\"", intensity: 50 },
                  { level: "5", label: "Emotional Investment", desc: "\"I want to be important to them.\"", intensity: 65 },
                  { level: "6", label: "Alternative Relationship", desc: "\"I could actually be with them.\"", intensity: 80 },
                  { level: "7", label: "Active Pursuit", desc: "\"I want this to happen.\"", intensity: 95 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0284c7]/20 text-[#0284c7] font-bold flex items-center justify-center shrink-0 text-xs">{item.level}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-slate-700 text-sm font-bold w-44 shrink-0">{item.label}</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${item.intensity}%`, background: `linear-gradient(to right, rgba(201,166,107,${0.7 + item.intensity/300}), rgba(2,132,199,${0.8 + item.intensity/300}))` }} />
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs font-serif italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-slate-600 text-xs italic mt-8">Those are very different states. The biggest transition is from attraction to investment (Emotional Escalation).</p>
            </div>
          </div>

          {/* ══ 11-12. PRIVATE TIME & SECRECY ══ */}
          <div>
            <SectionHeader num="❽" title="Private Time & Secrecy Change Everything" subtitle="Opportunity accelerates - secrecy intensifies" />
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-slate-100 p-7 rounded-2xl border border-slate-200"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#0284c7] font-serif text-lg mb-5">When private time increases</h4>
                <div className="space-y-2">
                  {["Meeting after work", "Going for coffee", "Travelling together", "Talking late at night", "Sharing personal problems", "Texting throughout the day"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <ArrowRight size={12} className="text-[#0284c7]/40 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs italic mt-5">
                  More opportunities for: self-disclosure → intimacy → emotional dependence → romantic escalation. Research shows commitment reduces attention to attractive alternatives.
                </p>
              </motion.div>

              <motion.div
                className="bg-red-950/10 p-7 rounded-2xl border border-red-500/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-red-700 font-serif text-lg mb-5">When secrecy begins</h4>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-emerald-950/15 p-4 rounded-xl border border-emerald-900/15 text-center">
                    <p className="text-emerald-700/60 text-[10px] font-bold uppercase tracking-widest mb-1">Open</p>
                    <p className="text-slate-600 text-sm italic">"I met a friend for coffee."</p>
                  </div>
                  <div className="text-center"><ArrowDown size={16} className="text-red-700/30 mx-auto" /></div>
                  <div className="bg-red-950/15 p-4 rounded-xl border border-red-900/15 text-center">
                    <p className="text-red-700/60 text-[10px] font-bold uppercase tracking-widest mb-1">Secret</p>
                    <p className="text-slate-600 text-sm italic">"I met this person but my partner can't know."</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["Excitement", "Guilt", "Anxiety", "Fear of discovery", "Stronger intensity", "\"Something special\""].map((t, i) => (
                    <div key={i} className="bg-slate-100/20 p-2.5 rounded-lg text-center">
                      <p className="text-red-800/50 text-xs">{t}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* ══ 13-15. KEY BEHAVIORAL DISTINCTIONS ══ */}
          <div>
            <SectionHeader num="❾" title="The Behavioral Distinctions That Matter" subtitle="What they say and do tells you far more than what they feel" />
            <div className="space-y-6 mb-10">
              <motion.div
                className="bg-emerald-950/10 p-7 rounded-3xl border border-emerald-900/20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-emerald-700 font-bold text-sm uppercase tracking-widest mb-4">Respects the boundary</h4>
                <div className="bg-slate-100/30 p-5 rounded-2xl border border-emerald-900/15 mb-4">
                  <p className="text-emerald-700/80 font-serif italic">"Figure out your relationship first. If you're single later, we can see what happens."</p>
                </div>
                <p className="text-slate-600 text-sm">Allows the other to make an independent decision. Reduces private contact. Doesn't push.</p>
              </motion.div>

              <motion.div
                className="bg-orange-950/10 p-7 rounded-3xl border border-orange-900/20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-orange-700 font-bold text-sm uppercase tracking-widest mb-4">Active influence</h4>
                <div className="bg-slate-100/30 p-5 rounded-2xl border border-orange-900/15 mb-4">
                  <p className="text-orange-700/80 font-serif italic">"Your relationship isn't working. You should leave them and be with me."</p>
                </div>
                <p className="text-slate-600 text-sm">Actively influencing the relationship decision. Pursuing an outcome.</p>
              </motion.div>

              <motion.div
                className="bg-red-950/10 p-7 rounded-3xl border border-red-500/20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-red-700 font-bold text-sm uppercase tracking-widest mb-4">Encouraging concealment - a much stronger signal</h4>
                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {["\"Don't tell your partner.\"", "\"Just say you're with friends.\"", "\"Your partner doesn't need to know.\""].map((t, i) => (
                    <div key={i} className="bg-slate-100/30 p-4 rounded-xl border border-red-900/15 text-center">
                      <p className="text-red-700/70 text-sm font-serif italic">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">At that point, the person isn't simply experiencing attraction. They're participating in concealment (Emotional Infidelity).</p>
              </motion.div>
            </div>
            <div className="bg-gradient-to-r from-[#0284c7]/10 via-[#0284c7]/5 to-transparent border-l-4 border-[#0284c7] p-6 rounded-r-2xl">
              <p className="text-slate-700 text-sm italic"><strong className="text-slate-800">Feelings and behavior aren't the same thing.</strong> A person can be very attracted and still choose not to turn that attraction into active pursuit.</p>
            </div>
          </div>

          {/* ══ 16-17. IT CAN DISAPPEAR OR GROW ══ */}
          <div>
            <SectionHeader num="❿" title="It Can Disappear - or Get Stronger" subtitle="Neither outcome is guaranteed" />
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                className="bg-emerald-950/10 p-7 rounded-3xl border border-emerald-900/20"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-emerald-700 font-serif text-xl mb-4">Sometimes it disappears</h4>
                <div className="space-y-2">
                  {["Novelty", "Fantasy", "Attention", "Emotional vulnerability", "Workplace proximity", "Temporary excitement"].map((t, i) => (
                    <div key={i} className="bg-slate-100/20 p-3 rounded-lg text-center">
                      <p className="text-emerald-800/55 text-sm">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="text-emerald-700/40 text-xs italic mt-5">Many people experience outside attractions without them disrupting their primary relationship.</p>
              </motion.div>

              <motion.div
                className="bg-red-950/10 p-7 rounded-3xl border border-red-500/20"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-red-700 font-serif text-xl mb-4">Sometimes it gets stronger</h4>
                <div className="flex flex-col items-center gap-2 mb-5">
                  {["Familiarity", "Emotional closeness", "Attachment", "Stronger attraction"].map((stage, i) => (
                    <React.Fragment key={i}>
                      <div className="bg-slate-100/20 px-5 py-2.5 rounded-lg border border-red-900/10 w-full text-center">
                        <p className="text-red-800/55 text-sm">{stage}</p>
                      </div>
                      {i < 3 && <ArrowDown size={14} className="text-red-700/25" />}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">Especially if they become an important source of validation, comfort, and emotional support.</p>
              </motion.div>
            </div>
          </div>

          {/* ══ 18-20. BREAKS & BEHAVIOR ══ */}
          <div>
            <SectionHeader num="⓫" title="How a Break Changes Everything" subtitle="A break can be interpreted very differently" />
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-center">
                <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold mb-3">Person taking the break</p>
                <p className="text-slate-700 font-serif italic">"I need space to understand myself."</p>
              </div>
              <div className="bg-[#0284c7]/[0.04] p-6 rounded-2xl border border-[#0284c7]/10 text-center">
                <p className="text-[#0284c7]/50 text-[10px] uppercase tracking-widest font-bold mb-3">The other person hears</p>
                <p className="text-slate-700 font-serif italic">"Their relationship is basically over."</p>
              </div>
            </div>
            <p className="text-center text-slate-600 text-sm italic mb-10">Those are not the same thing. A break doesn't mean "I'm available."</p>

            <div className="bg-white shadow-sm border-slate-200 p-8 rounded-[2rem] border border-slate-200 mb-8">
              <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">Their behavior during the break tells you a lot</p>
              <div className="space-y-4 max-w-2xl mx-auto">
                {[
                  { text: "\"Take your time. Don't decide because of me.\"", signal: "Restraint", bg: "bg-emerald-950/10 border-emerald-900/15", accent: "text-emerald-700" },
                  { text: "\"Now that you're on a break, let's spend more time together.\"", signal: "Active interest", bg: "bg-amber-950/10 border-amber-900/15", accent: "text-amber-700" },
                  { text: "\"You already know you don't love your partner.\"", signal: "Stronger influence", bg: "bg-orange-950/10 border-orange-900/15", accent: "text-orange-700" },
                  { text: "Increasing romantic/physical intimacy immediately", signal: "Active pursuit", bg: "bg-red-950/10 border-red-900/15", accent: "text-red-700" },
                  { text: "Waiting and respecting boundaries", signal: "Greater restraint", bg: "bg-emerald-950/10 border-emerald-900/15", accent: "text-emerald-700" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`${item.bg} border p-5 rounded-2xl flex flex-col md:flex-row md:items-center gap-3`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className={`${item.accent} text-[10px] font-bold uppercase tracking-widest w-32 shrink-0`}>{item.signal}</span>
                    <p className="text-slate-600 text-sm font-serif italic">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ THE 5-SIGNAL ANALYSIS FRAMEWORK ══ */}
          <div>
            <SectionHeader num="⓬" title="How to Actually Analyze the Situation" subtitle="Don't try to guess what's inside someone's head - look at five observable things" />
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-10 rounded-[2rem] border border-slate-200 mb-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { n: "1", title: "Initiation", q: "Who keeps starting conversations and meetings?" },
                  { n: "2", title: "Escalation", q: "Is it becoming progressively more intimate?" },
                  { n: "3", title: "Secrecy", q: "Are they hiding the interaction?" },
                  { n: "4", title: "Boundary Response", q: "What happens when someone says stop?" },
                  { n: "5", title: "Investment", q: "Is the person increasingly making time, effort, and future plans?" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#0284c7]/[0.06] p-5 rounded-2xl border border-[#0284c7]/15 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#0284c7]/20 text-[#0284c7] font-bold flex items-center justify-center mb-3 text-sm">{item.n}</div>
                    <p className="text-slate-700 text-sm font-bold mb-2">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.q}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-slate-600 text-xs italic mt-8">Those five things give you much more information than trying to guess what's inside someone's head.</p>
            </div>

            {/* Three Final Questions */}
            <div className="space-y-4">
              {[
                { q: "\"Does this person find the other person attractive?\"", a: "Could be true and completely normal.", bg: "bg-emerald-950/10", border: "border-emerald-900/20", accent: "text-emerald-700" },
                { q: "\"Does this person want something romantic?\"", a: "Requires stronger evidence.", bg: "bg-amber-950/10", border: "border-amber-900/20", accent: "text-amber-700" },
                { q: "\"Is this person actively trying to replace the existing partner?\"", a: "Requires evidence of deliberate pursuit, not merely attraction.", bg: "bg-red-950/10", border: "border-red-500/20", accent: "text-red-700" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${item.bg} ${item.border} border p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className={`${item.accent} font-serif italic flex-1`}>{item.q}</p>
                  <ArrowRight size={16} className="text-slate-500 shrink-0 hidden md:block" />
                  <p className="text-slate-600 text-sm flex-1">{item.a}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-r from-[#0284c7]/10 via-[#0284c7]/5 to-transparent border-l-4 border-[#0284c7] p-6 rounded-r-2xl">
              <p className="text-slate-700 text-sm"><strong className="text-slate-800">Those shouldn't be treated as the same thing.</strong> Research supports the first as a fairly common experience, while the latter two involve progressively stronger behavioral evidence.</p>
            </div>
          </div>

          {/* ══ SECTION CLOSING ══ */}
          <motion.div
            className="bg-gradient-to-br from-[#0284c7]/15 via-[#0284c7]/5 to-transparent p-10 md:p-14 rounded-[2.5rem] border border-[#0284c7]/20 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0284c7]/60 mb-6">The Key Insight</p>
              <h3 className="text-xl md:text-3xl font-serif leading-snug mb-8 text-slate-800 max-w-3xl mx-auto">
                You can't always know what another person feels.<br/>But you can observe what they do.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                Attraction is common. Acting on it is a choice (Boundary Crossing). And how someone responds when a boundary is set tells you more about their character than their initial feelings ever could.
              </p>
              <div className="w-12 h-[1px] bg-[#0284c7]/30 mx-auto mb-6" />
              <p className="text-slate-500 text-xs italic max-w-xl mx-auto leading-relaxed">
                This is consistent with the relationship books: <em>Attached</em> emphasizes patterns over isolated incidents, <em>Hold Me Tight</em> focuses on emotional cycles and attachment needs, and <em>The State of Affairs</em> shows how attraction, novelty, secrecy, and boundaries can coexist without simple "good person / bad person" explanations.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CRISIS MANAGEMENT - Feelings vs Actions
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-28">

          {/* ── 1. Feeling vs Action ── */}
          <div>
            <SectionHeader num="1" title="A Feeling Is Not the Same as Doing Something" subtitle="This is the most important thing to understand first" />
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-slate-100 border border-slate-200 p-8 rounded-2xl hover:border-[#0284c7]/20 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-serif text-[#0284c7] mb-5">The feeling</h4>
                <ul className="space-y-4 text-slate-800/65 text-[15px] leading-relaxed">
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> Sometimes you notice someone and feel something - you didn't choose it</li>
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> Finding someone interesting or nice to talk to</li>
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> This doesn't mean the relationship is broken</li>
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> By itself, a feeling isn't a betrayal</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-slate-100 border border-slate-200 p-8 rounded-2xl hover:border-[#0284c7]/20 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-serif text-[#0284c7] mb-5">The action</h4>
                <ul className="space-y-4 text-slate-800/65 text-[15px] leading-relaxed">
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> What you do next - that's the choice</li>
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> Feeding it: seeking them out, hiding things, spending private time</li>
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> Or setting a limit: staying honest, keeping things in the open</li>
                  <li className="flex gap-3"><span className="text-[#0284c7] mt-1">•</span> This part is what actually changes a relationship</li>
                </ul>
              </motion.div>
            </div>
            <div className="bg-gradient-to-r from-[#0284c7]/10 via-[#0284c7]/5 to-transparent border-l-4 border-[#0284c7] p-6 rounded-r-2xl">
              <p className="text-slate-700 font-serif italic text-lg leading-relaxed">
                "The goal isn't to never feel anything. It's to notice it, be honest about it, and choose not to act on it."
              </p>
            </div>
          </div>

          {/* ── 2. Three Ideas ── */}
          <div>
            <SectionHeader num="2" title="Three Ideas That Helped Me Understand" subtitle="Simple concepts from relationship psychology" />
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Understanding What You Feel",
                  text: "Noticing someone doesn't mean your relationship is bad. What matters is what that feeling is pointing at - a need for attention, excitement, or connection - not the feeling itself.",
                },
                {
                  title: "How We React to Fear",
                  text: "When someone senses something is off, their worry is real and normal. But reacting with checking, questioning, or controlling pushes the other person further away.",
                },
                {
                  title: "How to Rebuild Closeness",
                  text: "The answer isn't just avoiding others. It's about being truly present with each other - being available, actually listening, and staying interested in each other's lives.",
                },
              ].map((l, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white shadow-sm border-slate-200 border border-slate-200 p-7 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <h4 className="text-[#0284c7] font-serif text-lg mb-4">{l.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{l.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── 3. How It Develops ── */}
          <div>
            <SectionHeader num="3" title="How These Things Usually Develop" subtitle="Not a fixed path - it can stop at any point" />
            
            {/* Timeline dots */}
            <div className="relative py-10 overflow-hidden">
              <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-white/5 via-white/10 to-[#0284c7]/20 -translate-y-1/2" />
              <div className="flex items-center justify-between relative z-10 px-4">
                {[
                  { n: 1, label: "Being around\neach other" },
                  { n: 2, label: "Getting\nfamiliar" },
                  { n: 3, label: "Noticing\nsomething" },
                  { n: 4, label: "Looking\nforward to it" },
                  { n: 5, label: "The turning\npoint" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all ${
                      i === 4 ? 'bg-[#0284c7] text-white shadow-[#0284c7]/30' : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {s.n}
                    </div>
                    <span className="mt-3 text-[10px] md:text-xs text-slate-500 text-center whitespace-pre-line leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-950/15 border border-emerald-900/20 p-6 rounded-2xl text-center">
                <p className="text-emerald-700 font-bold text-sm mb-2">If boundaries are set (Boundary Setting) ↓</p>
                <p className="text-emerald-800/60 text-sm">The feeling fades, distance grows naturally, and the relationship gets stronger</p>
              </div>
              <div className="bg-red-950/15 border border-red-500/20 p-6 rounded-2xl text-center">
                <p className="text-red-700 font-bold text-sm mb-2">If nothing changes ↓</p>
                <p className="text-red-800/60 text-sm">More talking, more sharing personal things (Emotional Intimacy), more hiding - it slowly gets deeper</p>
              </div>
            </div>
            <p className="text-center text-slate-600 italic mt-6 text-xs">Most situations stay in the early stages and never become serious - if handled honestly.</p>
          </div>

          {/* ── 4. Why Being Around Someone Matters ── */}
          <div>
            <SectionHeader num="4" title="Why Being Around Someone a Lot Matters" subtitle="It can happen without anyone meaning for it to" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                  <h4 className="text-[#0284c7] font-serif text-lg mb-3">The Closeness Effect</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    When you see someone every day - at work, in class, anywhere - your brain starts feeling comfortable around them. This happens on its own. Nobody has to plan it.
                  </p>
                </div>
                <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                  <h4 className="text-[#0284c7] font-serif text-lg mb-3">Familiarity Builds Liking</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The more you see someone, the more your brain starts to like them - even if you're not trying to. It's just how the human mind works. It doesn't mean you went looking for it.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 flex flex-col justify-center items-center text-center">
                <h4 className="font-serif text-lg mb-6 text-slate-700">More time together ➔ more comfort (Proximity Effect & Mere-Exposure Effect)</h4>
                <div className="flex items-center justify-center gap-3 mb-8">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="rounded-full bg-[#0284c7]" style={{ opacity: 0.25 + (i * 0.12), width: `${10 + (i * 5)}px`, height: `${10 + (i * 5)}px` }} />
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 italic max-w-[260px]">
                  This doesn't mean "see someone enough and you'll fall for them." It means the brain creates more chances for a positive connection - which is exactly what happens in a shared space.
                </p>
              </div>
            </div>
          </div>

          {/* ── 5. The Unfair Comparison ── */}
          <div>
            <SectionHeader num="5" title="Why the Comparison Feels Unfair" subtitle="Your brain plays a trick on you here" />
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="text-[#0284c7] font-serif text-lg mb-4">Your partner (fully known)</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• You've seen their flaws, their bad days, their mistakes</li>
                  <li>• You've had real fights and real problems together</li>
                  <li>• They feel safe and familiar - sometimes too familiar</li>
                  <li>• You judge them based on everyday reality</li>
                </ul>
              </div>
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="text-[#0284c7] font-serif text-lg mb-4">The new person (mostly unknown)</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• You only see their best side</li>
                  <li>• No fights, no stress, no boring days together</li>
                  <li>• They feel exciting because they're new</li>
                  <li>• You judge them based on possibility, not reality</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-100 border border-[#0284c7]/15 p-6 rounded-2xl text-center">
              <p className="text-slate-700 font-serif italic leading-relaxed">
                Your brain compares someone you fully know against someone you barely know (Grass is Greener Syndrome). That's never going to be a fair comparison - and it doesn't mean the new person is actually better.
              </p>
            </div>
          </div>

          {/* ── 6. The Loop ── */}
          <div>
            <SectionHeader num="6" title="How It Quietly Gets Stronger" subtitle="A loop that repeats without you noticing" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-6">
              {[
                { title: "Looking forward", sub: '"Will I see them?"' },
                { title: "Talking", sub: "A conversation happens" },
                { title: "Feeling good", sub: "It felt nice" },
                { title: "Remembering", sub: '"That was good"' },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  <motion.div 
                    className={`p-5 rounded-xl w-full md:w-44 text-center border ${i % 2 === 0 ? 'bg-[#0284c7]/10 border-[#0284c7]/20' : 'bg-[#0284c7]/5 border-[#0284c7]/10'}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="font-bold text-sm mb-1">{s.title}</p>
                    <p className="text-[11px] text-slate-600">{s.sub}</p>
                  </motion.div>
                  {i < 3 && <ArrowRight size={16} className="text-[#0284c7]/30 shrink-0 hidden md:block" />}
                  {i < 3 && <ArrowDown size={16} className="text-[#0284c7]/30 shrink-0 md:hidden" />}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center text-xs text-slate-600 italic">↺ It loops back to the start - each time making the pattern a little stronger.</p>
          </div>

          {/* ── 7. What She Might Be Feeling ── */}
          <div>
            <SectionHeader num="7" title="What She Might Be Feeling Inside" subtitle="It's often confusing, even when nothing has happened" />
            <div className="space-y-1">
              {[
                {
                  q: "Is this really about him, or about something missing?",
                  a: "Sometimes the other person just happens to fill a gap - for attention, excitement, or feeling understood. The real question is about what's missing, not who filled it.",
                },
                {
                  q: "Feeling confused or guilty about something she didn't choose",
                  a: "It feels unfair to be judged for a feeling that showed up on its own - but she still needs to take responsibility for what she does with it.",
                },
                {
                  q: "She might not even call it what it is yet",
                  a: "Sometimes it's only later - when she realizes how often she thinks about him - that the pattern becomes clear.",
                },
                {
                  q: "Usually, she doesn't actually want to leave",
                  a: "Feeling something and wanting to pursue it are two different things. Most people in this position want to protect their relationship, not end it.",
                },
              ].map((m, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-5 p-6 border-b border-slate-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#0284c7]/20 text-[#0284c7] font-bold flex items-center justify-center shrink-0 text-sm">?</div>
                  <div>
                    <p className="font-bold text-[15px] mb-2 text-slate-800">{m.q}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{m.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center bg-slate-100 p-4 rounded-xl text-slate-600 italic text-sm font-serif">
              Being aware of it without feeling ashamed - that's the healthiest place to start.
            </div>
          </div>

          {/* ── 8. What He Might Be Feeling ── */}
          <div>
            <SectionHeader num="8" title="What He Might Be Feeling Inside" subtitle="The fear kicks in even before anything has actually happened" />
            <div className="bg-[#0284c7]/[0.06] p-6 rounded-2xl text-center font-serif italic text-slate-700 border border-[#0284c7]/10 mb-8 text-sm leading-relaxed">
              When someone feels like they might lose the person they love, real anxiety shows up - this is a normal human response, not jealousy or control.
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['"Am I losing her?"', '"Why him and not me?"', '"What does she feel with him?"', '"Is something happening that I don\'t know?"'].map((q, i) => (
                <div key={i} className="bg-white shadow-sm border-slate-200 border border-slate-200 p-5 rounded-xl text-center flex items-center justify-center min-h-[80px]">
                  <p className="text-[#0284c7] font-serif italic text-xs leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-lg font-bold text-center mb-5">The fear is real. What matters is what you do with it.</p>
            <ul className="max-w-2xl mx-auto space-y-3 text-slate-600 text-sm">
              <li className="flex gap-3"><span className="text-[#0284c7]">•</span> The worry doesn't need to be pushed down - but it needs to be talked about, not acted out</li>
              <li className="flex gap-3"><span className="text-[#0284c7]">•</span> Checking phones and asking questions every day might calm the fear for a moment, but it doesn't build real trust</li>
              <li className="flex gap-3"><span className="text-[#0284c7]">•</span> Saying "I'm scared" works so much better than becoming a detective</li>
            </ul>
          </div>

          {/* ── 9. The Levels ── */}
          <div>
            <SectionHeader num="9" title="How Deep Does It Go?" subtitle="The deeper it gets, the more important honesty becomes" />
            <div className="space-y-3">
              {[
                { tag: "Level 1", title: "Just Noticing", desc: '"He\'s nice-looking." A passing thought. Very common. Not a problem on its own.', bg: "bg-slate-100" },
                { tag: "Level 2", title: "Getting Interested", desc: "Wanting to talk more, looking forward to seeing them, thinking about them. Most situations stay here - and can stay here.", bg: "bg-[#0284c7]/[0.08]" },
                { tag: "Level 3", title: "Getting Emotionally Close", desc: "Private conversations, sharing personal problems with them, hiding the interactions from your partner. This is where things get serious.", bg: "bg-[#0284c7]/20" },
                { tag: "Level 4", title: "Crossing a Clear Line", desc: "Flirting with intent, secret meetups, romantic or sexual conversations. This is no longer about a feeling - it's a choice.", bg: "bg-red-900/20 border-red-500/30" },
              ].map((lv, i) => (
                <motion.div 
                  key={i} 
                  className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-5 rounded-2xl border border-slate-200 ${lv.bg}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 w-20 shrink-0">{lv.tag}</div>
                  <div className="font-bold text-base md:w-56 shrink-0">{lv.title}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{lv.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── 10. The Fork ── */}
          <div>
            <SectionHeader num="10" title="The Turning Point: Two Roads" subtitle="It's not the feeling that decides - it's what you do with it" />
            <div className="text-center mb-8">
              <span className="inline-block bg-[#0284c7] text-white font-bold uppercase tracking-widest text-[11px] px-6 py-3 rounded-full shadow-lg shadow-[#0284c7]/20">
                The feeling is noticed
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-emerald-900/30 bg-emerald-950/10 rounded-3xl p-8">
                <h4 className="text-emerald-700 font-serif text-xl mb-6 text-center">It fades away ✓</h4>
                <div className="space-y-3">
                  {["Set limits early on", "Less private time, less personal talk", "The excitement fades naturally", "They become just another person", "The relationship gets stronger"].map((t, i) => (
                    <p key={i} className="bg-slate-100/30 p-3.5 rounded-xl border border-emerald-900/30 text-emerald-800/70 text-sm text-center">{t}</p>
                  ))}
                </div>
              </div>
              <div className="border border-red-900/30 bg-red-950/10 rounded-3xl p-8">
                <h4 className="text-red-700 font-serif text-xl mb-6 text-center">It gets deeper ✗</h4>
                <div className="space-y-3">
                  {["More talking, more often", "Sharing more personal things", "More attention and validation", "Emotional energy shifts away from partner", "Hiding things ➔ real risk to the relationship"].map((t, i) => (
                    <p key={i} className="bg-slate-100/30 p-3.5 rounded-xl border border-red-900/30 text-red-800/70 text-sm text-center">{t}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── 11 & 13. What to Avoid ── */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <SectionHeader num="11" title="What Not to Do" subtitle="For the person feeling it - this doesn't mean being cold" />
              <div className="space-y-2.5">
                {[
                  "Making excuses to talk to them",
                  "Finding ways to be alone with them",
                  "Flirting, even as a 'joke'",
                  "Texting them late at night",
                  "Telling them about your relationship problems",
                  "Checking their social media a lot",
                  "Planning to 'accidentally' run into them",
                  "Hiding any of this from your partner"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5 bg-red-950/15 border border-red-500/20 p-3.5 rounded-xl">
                    <div className="bg-red-500/80 text-slate-800 rounded-full p-0.5 shrink-0"><X size={12} strokeWidth={3} /></div>
                    <p className="text-slate-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-5 text-slate-500 italic text-xs">Being friendly and professional (Workplace Attraction) is enough. She doesn't need to be cold - just not secretive.</p>
            </div>
            
            <div>
              <SectionHeader num="12" title="What Not to Do" subtitle="For the partner who senses something - this is just as important" />
              <div className="space-y-2.5">
                {[
                  "Going through her phone or messages",
                  "Demanding her passwords",
                  "Questioning her every single day",
                  "Telling her who she can and can't talk to",
                  "Trying to compete with or insult the other person",
                  "Trying to make her jealous back",
                  "Asking 'Do you like him more than me?' over and over",
                  "Keeping track of everything she does"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5 bg-orange-950/15 border border-orange-900/20 p-3.5 rounded-xl">
                    <div className="bg-orange-500/80 text-slate-800 rounded-full p-0.5 shrink-0"><X size={12} strokeWidth={3} /></div>
                    <p className="text-slate-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-5 text-slate-500 italic text-xs">You don't need to become a detective to protect the relationship - you need to be someone she feels safe being honest with.</p>
            </div>
          </div>

          {/* ── 13. The Worry Loop ── */}
          <div>
            <SectionHeader num="13" title="The Worry Trap" subtitle="How fear can accidentally push someone away" />
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-10 rounded-[2rem] border border-slate-200 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                {[
                  { title: "Suspicion", sub: '"Who were you talking to?"' },
                  { title: "Questioning", sub: "Checking phone, daily questions" },
                  { title: "She pulls back", sub: '"He doesn\'t trust me"' },
                  { title: "He gets more worried", sub: '"She\'s hiding something"' },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    <div className={`p-5 rounded-xl w-full md:w-44 text-center border ${i % 2 === 0 ? 'bg-red-950/15 border-red-500/20' : 'bg-orange-950/15 border-orange-900/20'}`}>
                      <p className="font-bold text-sm mb-1">{s.title}</p>
                      <p className="text-[11px] text-slate-600">{s.sub}</p>
                    </div>
                    {i < 3 && <ArrowRight size={14} className="text-slate-500 shrink-0 hidden md:block" />}
                    {i < 3 && <ArrowDown size={14} className="text-slate-500 shrink-0 md:hidden" />}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-8 text-slate-500 text-xs italic max-w-lg mx-auto">
                Each time this loop repeats, it gets worse. The only way to break it is to say the fear out loud instead of investigating it.
              </p>
            </div>
          </div>

          {/* ── 14 & 15. What to Do Instead ── */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <SectionHeader num="14" title="What She Can Do" subtitle="Three steps - if she wants to protect the relationship" />
              <div className="space-y-4">
                {[
                  { n: 1, t: "Name It", d: "Admit the feeling to yourself without panicking. \"I'm noticing something\" is just a statement, not a crime." },
                  { n: 2, t: "Stop Feeding It", d: "Stop creating reasons to talk, to be alone, or to share personal things with them." },
                  { n: 3, t: "Keep Things Open", d: "Don't hide the interactions. Secrecy is what turns a feeling into something worse." },
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    className="bg-slate-100 p-6 rounded-2xl border border-slate-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-[#0284c7] rounded-full text-white font-bold flex items-center justify-center mb-3 text-sm">{s.n}</div>
                    <h4 className="font-bold mb-2">{s.t}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader num="15" title="What He Can Do" subtitle="Three steps - if he wants to protect the relationship" />
              <div className="space-y-4">
                {[
                  { n: 1, t: "Pause Before Reacting", d: "Notice the worry without immediately acting on it. A reaction from fear almost never lands the way you want it to." },
                  { n: 2, t: "Ask to Understand, Not to Catch", d: "Ask what she's going through - not to prove she's guilty of something. The way you ask changes everything." },
                  { n: 3, t: "Put Energy Into the Relationship", d: "Focus on attention, affection, and honest conversation with her - not on watching the other person." },
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    className="bg-slate-100 p-6 rounded-2xl border border-slate-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-[#0284c7] rounded-full text-white font-bold flex items-center justify-center mb-3 text-sm">{s.n}</div>
                    <h4 className="font-bold mb-2">{s.t}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── 16. The Conversation ── */}
          <div>
            <SectionHeader num="16" title="The Conversation That Matters" subtitle="Not during a fight - sit down together and think about these honestly" />
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="font-serif text-[#0284c7] mb-5 border-b border-slate-200 pb-3">For her to think about</h4>
                <ul className="space-y-3.5 text-slate-700 text-sm">
                  {["What is it about him that draws me?", "Did I encourage this?", "Have I already crossed a line?", "Do I still want this relationship?", "What's missing here that I noticed there?"].map((q, i) => (
                    <li key={i} className="flex gap-2.5"><span className="text-[#0284c7] shrink-0">▪</span> {q}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-100 p-7 rounded-2xl border border-slate-200">
                <h4 className="font-serif text-[#0284c7] mb-5 border-b border-slate-200 pb-3">For him to think about</h4>
                <ul className="space-y-3.5 text-slate-700 text-sm">
                  {["What exactly feels threatening?", "What would I consider crossing a line?", "What do I need to feel safe again?", "Have I pushed her away in any way?", "Can I listen without turning it into an interrogation?"].map((q, i) => (
                    <li key={i} className="flex gap-2.5"><span className="text-[#0284c7] shrink-0">▪</span> {q}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center p-6 bg-[#0284c7]/[0.06] border border-[#0284c7]/15 rounded-xl">
              <p className="font-serif text-lg italic text-slate-700">"What kind of relationship are we actually choosing to have?"</p>
            </div>
          </div>

          {/* ── 17. Rebuilding ── */}
          <div>
            <SectionHeader num="17" title="How to Rebuild Closeness" subtitle="Avoiding someone else isn't the goal - reconnecting with each other is" />
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              {[
                { l: "A", t: "Be Available", d: "Be reachable emotionally - not just physically in the same room." },
                { l: "R", t: "Actually Respond", d: "When she reaches out emotionally, don't brush it off. Respond for real." },
                { l: "E", t: "Stay Interested", d: "Keep paying attention to each other's inner world. Don't stop being curious about her." },
              ].map((p, i) => (
                <motion.div 
                  key={i} 
                  className="text-center w-full md:w-56"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-serif font-bold mb-5 shadow-lg ${
                    i === 1 ? 'bg-[#0284c7] text-white shadow-[#0284c7]/30' : 'bg-[#0284c7]/15 text-[#0284c7] border border-[#0284c7]/40'
                  }`}>
                    {p.l}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{p.t}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.d}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-white shadow-sm border-slate-200 border border-slate-200 p-7 rounded-2xl max-w-3xl mx-auto">
              <p className="text-[#0284c7] text-[11px] font-bold tracking-widest uppercase mb-5 text-center">Put your energy here instead</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Real time together, without distractions",
                  "Say what you appreciate - out loud",
                  "Physical affection, not just logistics",
                  "Talk about what you need before it builds up",
                  "Talk about the future together",
                  "Try something new as a couple"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Heart size={14} className="text-[#0284c7] shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── 18. Quick Reference Table ── */}
          <div>
            <SectionHeader num="18" title="The Full Journey at a Glance" subtitle="A simple map to come back to whenever you need it" />
            <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-slate-100/20">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#0284c7]/20 bg-[#0284c7]/[0.06]">
                    <th className="p-4 font-bold text-[#0284c7] text-sm">Stage</th>
                    <th className="p-4 font-bold text-[#0284c7] text-sm">What she feels</th>
                    <th className="p-4 font-bold text-[#0284c7] text-sm">What he feels</th>
                    <th className="p-4 font-bold text-[#0284c7] text-sm">What helps</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 text-sm">
                  {[
                    ["New person around", '"He\'s just someone at work"', "Doesn't notice anything", "Nothing needed yet"],
                    ["Getting comfortable", "Enjoys talking to him more", "Still unaware", "Nothing needed yet"],
                    ["Noticing something", '"He\'s nice to talk to"', "Might notice small changes", "Notice it, don't feed it"],
                    ["Looking forward to it", "Excited to see him", "Might feel something is off", "Less private time with them"],
                    ["Sharing personal things", "Opens up to him emotionally", "Worry increases", "Stop here. Be honest."],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-white/[0.01] transition-colors">
                      <td className="p-4 font-bold text-slate-800 text-sm">{row[0]}</td>
                      <td className="p-4 italic">{row[1]}</td>
                      <td className="p-4">{row[2]}</td>
                      <td className="p-4">{row[3]}</td>
                    </tr>
                  ))}
                  <tr className="bg-red-950/15">
                    <td className="p-4 font-bold text-red-700 text-sm">The turning point</td>
                    <td className="p-4">Energy shifts one way or the other</td>
                    <td className="p-4">Reacts to what he senses</td>
                    <td className="p-4 font-bold text-slate-800">Honest conversation + reconnection</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              THE CLOSING MESSAGE
              ═══════════════════════════════════════════════════════════════ */}
          <div className="bg-[#0284c7] text-white p-10 md:p-16 rounded-[2.5rem] text-center shadow-2xl shadow-[#0284c7]/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.35)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <p className="font-bold tracking-[0.2em] uppercase text-[11px] mb-6 opacity-60">The one thing that matters most</p>
              <h3 className="text-2xl md:text-4xl font-serif leading-snug mb-12 max-w-3xl mx-auto">
                You can't always choose what you feel.<br/>
                But you can choose whether you feed it -<br/>
                and whether you're honest about it.
              </h3>

              <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
                <div className="bg-slate-100/10 rounded-2xl p-6 text-left border border-black/[0.06]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <X size={12} strokeWidth={4} className="opacity-60" />
                    <p className="font-bold text-[11px] uppercase tracking-wider opacity-60">Doesn't help (from him)</p>
                  </div>
                  <p className="font-serif italic opacity-85">"If you really loved me, you'd never notice anyone else."</p>
                </div>
                <div className="bg-slate-100/10 rounded-2xl p-6 text-left border border-black/[0.06]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <X size={12} strokeWidth={4} className="opacity-60" />
                    <p className="font-bold text-[11px] uppercase tracking-wider opacity-60">Doesn't help (from her)</p>
                  </div>
                  <p className="font-serif italic opacity-85">"I haven't done anything physical, so nothing is wrong."</p>
                </div>
              </div>

              <div className="pt-8 border-t border-black/10 max-w-2xl mx-auto">
                <p className="font-bold text-xl mb-3">Most of this stays small - and can stay small.</p>
                <p className="opacity-75 leading-relaxed text-sm font-serif">
                  If someone truly wants to stay, they don't need to destroy a feeling - they just need to stop giving it energy. That's realistic. That's doable. And the earlier you do it, the easier it is.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AFTER THE BREAKUP: THE THREE PERSPECTIVES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.03)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(94,167,175,0.03)_0%,transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-32">
          {/* ══ HERO ══ */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#4338ca]/70 mb-4">The Aftermath</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-slate-800 leading-tight">
              After the Breakup:<br />
              <span className="text-[#4338ca] italic">Three Different Realities</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto mb-6">
              When a relationship ends because of an overlap or affair, there are actually three people experiencing entirely different psychological processes.
            </p>
          </motion.div>

          {/* ══ WHY IT FEELS DIFFERENT ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-4 text-slate-800">Why this breakup feels different</h3>
              <p className="text-slate-600 leading-relaxed max-w-3xl">A normal breakup is often: <strong className="text-slate-700">Relationship → Breakup → Grief → Recovery</strong>. But an affair/overlap breakup looks more like:</p>
            </motion.div>

            <motion.div 
              className="bg-white shadow-sm border-slate-200 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-center">
                {[
                  "Old Relationship",
                  "Emotional Disconnection",
                  "New Attraction",
                  "Guilt / Confusion",
                  "Breakup",
                  "New Relationship + Grief"
                ].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="bg-slate-100 border border-slate-200 rounded-xl px-4 py-3">
                      <p className="text-[#4338ca] text-xs md:text-sm font-medium">{step}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight size={14} className="text-slate-600 hidden md:block" />}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="bg-[#4f46e5]/5 border border-[#4f46e5]/10 p-6 rounded-2xl">
                  <p className="text-[#4338ca] font-serif italic text-lg mb-2">"I'm relieved this relationship is over."</p>
                </div>
                <div className="bg-[#0369a1]/5 border border-[#0369a1]/10 p-6 rounded-2xl text-right md:text-left">
                  <p className="text-[#0369a1] font-serif italic text-lg mb-2">"I miss what I had with that person."</p>
                </div>
              </div>
              <p className="text-center mt-6 text-slate-500 text-sm italic">Those aren't contradictory. Esther Perel emphasizes that infidelity can lead to very different outcomes.</p>
            </motion.div>
          </div>

          {/* ══ THE THREE PERSONAS ══ */}
          <div className="space-y-24">
            {/* Person A: The One Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-x-6 md:-inset-x-12 -inset-y-12 bg-gradient-to-b from-[#0369a1]/5 to-transparent rounded-[3rem] -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#0369a1]/20 border border-[#0369a1]/30 flex items-center justify-center text-[#0369a1] font-serif font-bold text-xl">A</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-slate-800">The Person Who Was Left</h3>
                  <p className="text-[#0369a1]/80 text-sm">"I lost my relationship."</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { step: "Shock", text: "'How did this happen?' The brain looks for explanations, leading to obsession over the other person.", icon: "⚡" },
                  { step: "Comparison", text: "'What do they have that I don't?' The brain tries to turn a complex relationship into a simple competition.", icon: "⚖" },
                  { step: "Anger", text: "Often not just about choosing someone else, but how they handled the transition (deception).", icon: "🔥" },
                  { step: "Bargaining", text: "'I'll change. Maybe I can fix this.' Trying to regain control over something uncontrollable.", icon: "🤝" },
                  { step: "Nostalgia", text: "'Remember when we were happy?' The cycle of pain → nostalgia → hope → disappointment.", icon: "🌅" },
                  { step: "Acceptance", text: "Moving from 'How do I get them back?' to 'What do I want my life to look like now?'", icon: "🌱" }
                ].map((s, i) => (
                  <div key={i} className="bg-white shadow-sm border-slate-200 border border-slate-200 p-5 rounded-2xl hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{s.icon}</span>
                      <h4 className="text-[#0369a1] font-bold text-sm uppercase tracking-wider">{s.step}</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Person B: The One Who Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-x-6 md:-inset-x-12 -inset-y-12 bg-gradient-to-b from-[#0f766e]/5 to-transparent rounded-[3rem] -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#0f766e]/20 border border-[#0f766e]/30 flex items-center justify-center text-[#0f766e] font-serif font-bold text-xl">B</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-slate-800">The Person Who Left</h3>
                  <p className="text-[#0f766e]/80 text-sm">"I finally escaped the old relationship."</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#0f766e]/10 to-transparent border border-[#0f766e]/20 p-6 rounded-2xl">
                  <h4 className="text-[#0f766e] font-serif text-xl mb-3">1. Relief & Excitement</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    If they were emotionally exhausted, the breakup feels like freedom. The new relationship feels extremely powerful because it represents novelty, validation, and freedom.
                  </p>
                  <div className="bg-slate-100/30 p-4 rounded-xl">
                    <p className="text-slate-500 text-sm italic">Sometimes people aren't only attracted to the new person; they're attracted to <strong className="text-slate-700">who they become around that person (Transference)</strong>.</p>
                  </div>
                </div>
                
                <div className="bg-white shadow-sm border-slate-200 border border-slate-200 p-6 rounded-2xl">
                  <h4 className="text-slate-700 font-serif text-xl mb-3">2. The Reality Check</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    The fantasy becomes reality. The new relationship has to survive ordinary life (bills, disagreements, routine) rather than just secret texts and excitement.
                  </p>
                </div>

                <div className="bg-white shadow-sm border-slate-200 border border-slate-200 p-6 rounded-2xl">
                  <h4 className="text-slate-700 font-serif text-xl mb-3">3. Nostalgia</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    They might suddenly remember: <em className="text-slate-700">"My ex knew me for years. We had a life together."</em> <strong className="text-slate-700">Missing the past ≠ wanting to return to the past.</strong>
                  </p>
                </div>

                <div className="bg-white shadow-sm border-slate-200 border border-slate-200 p-6 rounded-2xl">
                  <h4 className="text-slate-700 font-serif text-xl mb-3">4. Guilt (Or Lack Thereof)</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    They may feel a mix of relief + guilt + sadness. However, some feel <strong className="text-slate-700">no guilt</strong> at all if they believe the relationship was already over emotionally.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Person C: The New Partner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-x-6 md:-inset-x-12 -inset-y-12 bg-gradient-to-b from-[#0284c7]/5 to-transparent rounded-[3rem] -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/30 flex items-center justify-center text-[#0284c7] font-serif font-bold text-xl">C</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-slate-800">The New Partner</h3>
                  <p className="text-[#0284c7]/80 text-sm">"I finally got the person I wanted."</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { title: "Excitement", desc: "'They chose me.'" },
                  { title: "Validation", desc: "'They left their old relationship for me.'" },
                  { title: "Fear", desc: "'What if they do the same thing to me?'" },
                  { title: "Jealousy", desc: "'Do they still love their ex?'" },
                  { title: "Insecurity", desc: "'Am I really their long-term choice?'" },
                  { title: "Pressure", desc: "'They sacrificed so much; this has to work.'" }
                ].map((item, i) => (
                  <div key={i} className="bg-white shadow-sm border-slate-200 border border-[#0284c7]/10 p-4 rounded-2xl text-center">
                    <h5 className="text-[#0284c7] font-bold text-sm mb-2">{item.title}</h5>
                    <p className="text-slate-600 text-xs italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ══ THE BIGGEST MISCONCEPTION ══ */}
          <motion.div
            className="bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-14 rounded-[2.5rem] border border-slate-200"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-[#4338ca] text-xs font-bold uppercase tracking-widest mb-10">The Biggest Misconception</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="border border-slate-200 p-6 rounded-2xl bg-slate-100/20 text-center opacity-50 relative">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">Expectation</p>
                <p className="text-slate-700 italic leading-relaxed">"The person who was left suffers.<br/>The person who left is happy."</p>
              </div>
              <div className="border border-[#4338ca]/20 p-6 rounded-2xl bg-[#4f46e5]/10 text-center shadow-[0_0_30px_rgba(139,92,246,0.1)] relative">
                <p className="text-[#4338ca] text-xs font-bold uppercase tracking-widest mb-3">Reality</p>
                <p className="text-slate-800 italic leading-relaxed">It is much messier.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                <p className="text-slate-600 text-sm leading-relaxed">Happy about leaving<br/><strong className="text-[#0f766e] block my-2 text-xl">+</strong>Sad about losing it</p>
              </div>
              <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                <p className="text-slate-600 text-sm leading-relaxed">Hurt by the breakup<br/><strong className="text-[#0369a1] block my-2 text-xl">+</strong>Recognizes it wasn't working</p>
              </div>
              <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                <p className="text-slate-600 text-sm leading-relaxed">Excited about the new person<br/><strong className="text-[#0284c7] block my-2 text-xl">+</strong>Anxious about the future</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-slate-600 italic text-sm">Human emotions aren't a single line. You cannot determine someone's internal emotional state from their external behavior alone (e.g. posting pictures, going out, looking happy).</p>
          </motion.div>

          {/* ══ WHAT DETERMINES THE OUTCOME ══ */}
          <div>
            <h4 className="text-2xl font-serif text-center mb-10 text-slate-800">What determines what happens afterward?</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Length of previous relationship",
                "How emotionally disconnected it already was",
                "Whether the affair was emotional, sexual, or both",
                "Whether the new relationship continues",
                "Whether the breakup was mutual or one-sided",
                "Whether there was deception",
                "Whether there is guilt",
                "Whether they maintain contact",
                "Whether the new relationship survives ordinary life"
              ].map((factor, i) => (
                <div key={i} className="px-5 py-2.5 bg-slate-100 border border-slate-200 rounded-full hover:bg-slate-100 transition-colors">
                  <p className="text-slate-700 text-sm">{factor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ══ FINAL WARNING ══ */}
          <motion.div
            className="bg-gradient-to-r from-red-50 via-transparent to-red-50 border-y border-red-500/20 py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center px-6">
              <h4 className="text-red-700 font-serif text-2xl mb-6">Don't Use Psychology to Mind-Read</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Conclusions like <em className="text-slate-700">"She's avoidant, therefore she'll miss me later"</em> or <em className="text-slate-700">"She's happy now, therefore she never loved me"</em> are too strong.
              </p>
              <div className="bg-slate-100/40 p-6 rounded-2xl border border-red-900/10 inline-block text-left">
                <p className="text-slate-700 italic text-sm leading-relaxed">
                  Attachment theory explains <strong className="text-slate-800">patterns of behavior</strong>, but it cannot tell us exactly what one particular person is thinking at a particular moment. It shouldn't become a method for trying to decode or control the other person's mind.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* ══ THE SIMPLE SUMMARY ══ */}
          <div className="text-center max-w-2xl mx-auto space-y-6 pt-10">
             <p className="text-[#4338ca] font-bold tracking-[0.2em] uppercase text-xs mb-8">In Summary</p>
             <div className="space-y-6 text-lg font-serif">
               <p className="text-[#0369a1]"><strong>The person left:</strong> "I lost someone."</p>
               <p className="text-[#0f766e]"><strong>The person who left:</strong> "I gained freedom, but I may have lost something."</p>
               <p className="text-[#0284c7]"><strong>The new person:</strong> "I gained someone, but now I have to build a real relationship with them."</p>
             </div>
             <div className="pt-10 mt-10 border-t border-slate-200">
                <p className="text-slate-600 italic leading-relaxed">
                  And eventually, all three have to deal with reality rather than the story they had in their head. That's why the months after an affair-related breakup can be psychologically complicated.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE RELATIONSHIP GUIDE - Complete Psychology-Based Guide
          ═══════════════════════════════════════════════════════════════════ */}

      <section className="py-24 md:py-32 relative z-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(94,167,175,0.04)_0%,transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(201,120,107,0.04)_0%,transparent_40%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-32">

          {/* ══ GUIDE HERO ══ */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0369a1]/20 to-[#0f766e]/20 border border-slate-200 flex items-center justify-center mb-8">
              <Heart size={32} strokeWidth={1.2} className="text-[#0284c7]" />
            </div>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0369a1] mb-4">The Complete Relationship Guide</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#0f766e] bg-clip-text text-transparent leading-tight">
              When Love Gets<br/>Complicated
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto">
              A psychology-based guide for every couple - whether you're facing this situation now, have faced it before, or want to be ready if it ever comes. Understanding these patterns can protect what matters most.
            </p>
          </motion.div>

          {/* ══ THE FUNDAMENTAL RULE ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0369a1] to-[#3D8A92] flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-[#0369a1]/20">
                  ★
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Fundamental Rule</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">The single most important distinction in any relationship crisis</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div 
                className="relative overflow-hidden bg-gradient-to-br from-[#0369a1]/10 to-transparent p-8 rounded-3xl border border-[#0369a1]/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0369a1]/5 rounded-full blur-3xl" />
                <h4 className="text-2xl font-serif text-[#0369a1] mb-4">Feelings</h4>
                <p className="text-3xl font-bold text-slate-800 mb-4">Are NOT<br/>Controllable</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You cannot simply switch off an emotion. A girlfriend may genuinely feel attracted to someone else. A boyfriend may genuinely feel terrified of losing her. Neither person chose these feelings.
                </p>
                <div className="mt-6 p-4 bg-slate-100/30 rounded-2xl border border-[#0369a1]/10">
                  <p className="text-[#0369a1]/80 font-serif italic text-sm">"I'm feeling something I didn't ask for."</p>
                </div>
              </motion.div>

              <motion.div 
                className="relative overflow-hidden bg-gradient-to-br from-[#0f766e]/10 to-transparent p-8 rounded-3xl border border-[#0f766e]/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0f766e]/5 rounded-full blur-3xl" />
                <h4 className="text-2xl font-serif text-[#0f766e] mb-4">Actions</h4>
                <p className="text-3xl font-bold text-slate-800 mb-4">ARE<br/>Controllable</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  What you <em>do</em> with that feeling - that's 100% your choice. How much you communicate with them, whether you hide conversations, whether you're honest, whether you set boundaries.
                </p>
                <div className="mt-6 p-4 bg-slate-100/30 rounded-2xl border border-[#0f766e]/10">
                  <p className="text-[#0f766e]/80 font-serif italic text-sm">"What I do next - that's on me."</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-[#0284c7]/15 via-[#0284c7]/5 to-transparent border-l-4 border-[#0284c7] p-6 rounded-r-2xl">
              <p className="text-slate-700 font-serif italic text-lg leading-relaxed">
                "That's the distinction that makes the situation manageable. Separate feelings, actions, boundaries, and relationship decisions."
              </p>
            </div>
          </div>

          {/* ══ HER CHOICES vs HIS CHOICES - Side by Side ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f766e] to-[#A85A4A] flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-[#0f766e]/20">
                  ⚖
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">Actions Within Your Control</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">What each person CAN choose - even when feelings feel overwhelming</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Girlfriend's choices */}
              <motion.div
                className="bg-gradient-to-b from-[#0f766e]/[0.08] to-transparent p-7 rounded-3xl border border-[#0f766e]/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#0f766e] font-serif text-xl mb-2">She Chooses Whether To:</h4>
                <p className="text-slate-500 text-xs mb-5 italic">Even when attraction feels automatic</p>
                <div className="space-y-2.5">
                  {[
                    "How much she communicates with him",
                    "Whether she creates opportunities to be alone with him",
                    "Whether she flirts",
                    "Whether she hides conversations",
                    "Whether she becomes physically intimate",
                    "Whether she compares him with her boyfriend",
                    "Whether she tells her boyfriend honestly",
                    "Whether she tries to repair the existing relationship",
                    "Whether she leaves the relationship"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3 bg-slate-100/20 p-3.5 rounded-xl border border-[#0f766e]/10"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <ArrowRight size={12} className="text-[#0f766e]/60 shrink-0" />
                      <p className="text-slate-800/65 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Boyfriend's choices */}
              <motion.div
                className="bg-gradient-to-b from-[#0369a1]/[0.08] to-transparent p-7 rounded-3xl border border-[#0369a1]/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-[#0369a1] font-serif text-xl mb-2">He Chooses NOT To:</h4>
                <p className="text-slate-500 text-xs mb-5 italic">Even when fear feels overwhelming</p>
                <div className="space-y-2.5">
                  {[
                    "Repeatedly call / text obsessively",
                    "Monitor her every move",
                    "Interrogate her",
                    "Threaten her",
                    "Beg for reassurance",
                    "Manipulate through guilt",
                    "Follow her",
                    "Demand immediate reassurance",
                    "Interfere with her friendships / work",
                    "Retaliate against the other person"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3 bg-slate-100/20 p-3.5 rounded-xl border border-[#0369a1]/10"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <X size={12} className="text-[#0369a1]/60 shrink-0" />
                      <p className="text-slate-800/65 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* ══ THE NEGATIVE CYCLE - "The Dance" ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-red-500/20">
                  ↻
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Destructive Dance</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">From <em>Hold Me Tight</em> - one person's move triggers the other's, which triggers the first again</p>
            </motion.div>

            {/* The Escalation Cycle - Visual */}
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 mb-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,60,60,0.03)_0%,transparent_70%)] pointer-events-none" />
              
              <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-red-700/60 mb-10">The Pursue-Withdraw Cycle</p>
              
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { text: "She becomes distant", color: "from-[#0f766e]/20 to-transparent", border: "border-[#0f766e]/20", arrow: "text-[#0f766e]/40" },
                  { text: "He panics", color: "from-[#0369a1]/20 to-transparent", border: "border-[#0369a1]/20", arrow: "text-[#0369a1]/40" },
                  { text: "He asks for reassurance", color: "from-[#0369a1]/25 to-transparent", border: "border-[#0369a1]/25", arrow: "text-[#0369a1]/40" },
                  { text: "She feels pressured", color: "from-[#0f766e]/25 to-transparent", border: "border-[#0f766e]/25", arrow: "text-[#0f766e]/40" },
                  { text: "She withdraws", color: "from-[#0f766e]/30 to-transparent", border: "border-[#0f766e]/30", arrow: "text-[#0f766e]/40" },
                  { text: "He panics MORE", color: "from-[#0369a1]/30 to-transparent", border: "border-[#0369a1]/30", arrow: "text-[#0369a1]/40" },
                  { text: "He pursues HARDER", color: "from-[#0369a1]/35 to-transparent", border: "border-[#0369a1]/35", arrow: "text-red-700/60" },
                  { text: "She withdraws FURTHER", color: "from-red-500 to-transparent", border: "border-red-500/30", arrow: "" },
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      className={`bg-gradient-to-r ${step.color} p-4 rounded-2xl border ${step.border} text-center`}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <p className="text-slate-700 font-medium text-sm">{step.text}</p>
                    </motion.div>
                    {step.arrow && <div className={`text-center ${step.arrow}`}><ArrowDown size={16} className="mx-auto" /></div>}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-slate-600 text-xs italic max-w-lg mx-auto">
                  ↺ Each time this loop repeats, the intensity increases. The cycle must be recognized and broken - not by one person winning, but by both stepping out of the dance.
                </p>
              </div>
            </div>

            {/* Escalation Intensity Graph */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">Emotional Intensity Over Each Cycle</p>
              <div className="flex items-end justify-center gap-3 h-48 mb-4">
                {[
                  { h: 20, label: "Cycle 1" },
                  { h: 35, label: "Cycle 2" },
                  { h: 52, label: "Cycle 3" },
                  { h: 68, label: "Cycle 4" },
                  { h: 82, label: "Cycle 5" },
                  { h: 95, label: "Crisis" },
                ].map((bar, i) => (
                  <motion.div 
                    key={i}
                    className="flex flex-col items-center gap-2 h-full justify-end"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    style={{ transformOrigin: 'bottom' }}
                  >
                    <div 
                      className={`w-10 md:w-14 rounded-t-xl ${i < 3 ? 'bg-gradient-to-t from-amber-500 to-amber-400' : i < 5 ? 'bg-gradient-to-t from-red-500 to-red-400' : 'bg-gradient-to-t from-red-600 to-red-400'}`}
                      style={{ height: `${bar.h}%` }}
                    />
                    <span className={`text-[9px] md:text-[10px] ${i === 5 ? 'text-red-700 font-bold' : 'text-slate-600'}`}>{bar.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-600 px-4">
                <span>Low intensity</span>
                <span>→ Time</span>
                <span>Emotional breakdown</span>
              </div>
            </div>
          </div>

          {/* ══ IF THE BOYFRIEND IS LOSING CONTROL ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0369a1] to-[#3D8A92] flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-[#0369a1]/20">
                  ♂
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">If The Boyfriend Is Losing Control</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">His first goal should NOT be "How do I make her love me again?"</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-red-950/10 border border-red-500/20 p-7 rounded-3xl">
                <p className="text-red-700/80 text-xs font-bold uppercase tracking-widest mb-4">✗ Wrong question</p>
                <p className="text-2xl font-serif text-red-700/80 italic leading-snug">"How do I make her love me again?"</p>
              </div>
              <div className="bg-emerald-950/10 border border-emerald-900/20 p-7 rounded-3xl">
                <p className="text-emerald-700/80 text-xs font-bold uppercase tracking-widest mb-4">✓ Right question</p>
                <p className="text-2xl font-serif text-emerald-700/80 italic leading-snug">"How do I stop my fear from controlling my behavior?"</p>
              </div>
            </div>

            {/* What he should do */}
            <div className="bg-[#0369a1]/[0.05] p-8 rounded-3xl border border-[#0369a1]/15 mb-8">
              <h4 className="text-[#0369a1] font-serif text-xl mb-6">What Should He Actually Do?</h4>
              
              <div className="space-y-6">
                <div className="bg-slate-100/20 p-6 rounded-2xl border border-[#0369a1]/10">
                  <p className="text-[#0369a1] text-sm font-bold uppercase tracking-widest mb-3">Step 1 - Pause the action</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">When he feels the urge to send 20 messages, confront her, check her online activity:</p>
                  <div className="bg-[#0369a1]/10 p-4 rounded-xl border border-[#0369a1]/15">
                    <p className="text-[#0369a1]/90 font-serif italic text-sm">"I'm experiencing fear of losing the relationship. I don't need to act on the fear immediately."</p>
                  </div>
                </div>

                <div className="bg-slate-100/20 p-6 rounded-2xl border border-[#0369a1]/10">
                  <p className="text-[#0369a1] text-sm font-bold uppercase tracking-widest mb-3">Step 2 - One clear need, not 20 demands</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-950/15 p-4 rounded-xl border border-red-500/20">
                      <p className="text-red-700/60 text-[10px] font-bold uppercase tracking-widest mb-2">✗ Instead of</p>
                      <p className="text-slate-600 text-sm italic leading-relaxed">"Why are you doing this to me? You don't care about me anymore. Who were you with? Why didn't you reply?"</p>
                    </div>
                    <div className="bg-emerald-950/15 p-4 rounded-xl border border-emerald-900/20">
                      <p className="text-emerald-700/60 text-[10px] font-bold uppercase tracking-widest mb-2">✓ Try</p>
                      <p className="text-slate-600 text-sm italic leading-relaxed">"I'm feeling very insecure about where we stand. I don't want to pressure you. I need us to have an honest conversation about whether you still want this relationship."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-5 bg-[#0369a1]/[0.06] border border-[#0369a1]/15 rounded-xl">
              <p className="font-serif italic text-slate-700 text-sm">That second approach is dramatically different - and dramatically more effective.</p>
            </div>
          </div>

          {/* ══ IF THE GIRLFRIEND IS ATTRACTED TO SOMEONE ELSE ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f766e] to-[#A85A4A] flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-[#0f766e]/20">
                  ♀
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">If She's Attracted to Someone Else</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Her first responsibility is NOT to punish herself - it's to decide what she does with the attraction</p>
            </motion.div>

            {/* The 3 Possibilities */}
            <div className="space-y-6 mb-10">
              {/* Possibility 1 */}
              <motion.div 
                className="bg-gradient-to-br from-emerald-50 to-transparent p-8 rounded-3xl border border-emerald-500/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-6 text-7xl font-serif text-emerald-700/[0.08] font-bold">1</div>
                <h4 className="text-emerald-700 font-serif text-2xl mb-2">"I want my relationship."</h4>
                <p className="text-slate-600 text-sm mb-6">Then she needs to protect the relationship from the alternative connection.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Reducing unnecessary private interaction",
                    "Stopping flirtation",
                    "Not creating romantic opportunities",
                    "Establishing appropriate boundaries",
                    "Being honest about what is happening",
                    "Investing attention back into the relationship",
                    "Addressing what made her vulnerable"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-emerald-800/60 text-sm">
                      <CheckCircle2 size={14} className="text-emerald-700/60 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-slate-100/30 p-4 rounded-xl border border-emerald-900/20">
                  <p className="text-slate-600 text-sm italic">Simply saying "I love my boyfriend but I can't control myself" isn't enough. If she continually feeds the attraction, it becomes increasingly important.</p>
                </div>
              </motion.div>

              {/* Possibility 2 */}
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-transparent p-8 rounded-3xl border border-amber-500/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-6 text-7xl font-serif text-amber-700/[0.08] font-bold">2</div>
                <h4 className="text-amber-700 font-serif text-2xl mb-2">"I don't know whether I want my relationship."</h4>
                <p className="text-slate-600 text-sm mb-6">Then she shouldn't maintain the boyfriend as a secure base while exploring the other relationship indefinitely.</p>
                <div className="bg-slate-100/30 p-5 rounded-2xl border border-amber-900/15">
                  <p className="text-amber-700/70 font-serif italic leading-relaxed">
                    "I'm confused about my feelings. I don't want to lie to you or keep you in a relationship while I'm emotionally somewhere else. I need to honestly figure out whether I want to continue this relationship."
                  </p>
                </div>
                <p className="text-slate-500 text-xs italic mt-4">That is painful, but considerably healthier than maintaining two emotional realities simultaneously.</p>
              </motion.div>

              {/* Possibility 3 */}
              <motion.div 
                className="bg-gradient-to-br from-red-50 to-transparent p-8 rounded-3xl border border-red-500/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-6 text-7xl font-serif text-red-700/[0.08] font-bold">3</div>
                <h4 className="text-red-700 font-serif text-2xl mb-2">"I no longer want the relationship."</h4>
                <p className="text-slate-600 text-sm mb-4">Then the solution isn't to force herself to fall back in love.</p>
                <p className="text-slate-600 text-sm leading-relaxed">She should end the relationship respectfully. The boyfriend deserves the ability to make his own life decisions based on reality.</p>
              </motion.div>
            </div>
          </div>

          {/* ══ WHEN BOTH ARE DYSREGULATED ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-purple-500/20">
                  ⚡
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">When BOTH Are Dysregulated</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">The hardest version - when emotions are spiraling on both sides</p>
            </motion.div>

            {/* The collision visual */}
            <div className="bg-white shadow-sm border-slate-200 p-8 rounded-[2.5rem] border border-slate-200 mb-10">
              <div className="grid md:grid-cols-3 gap-4 items-center mb-8">
                <div className="bg-[#0369a1]/10 p-5 rounded-2xl border border-[#0369a1]/15 text-center">
                  <p className="text-[#0369a1] font-serif text-lg italic">"Don't leave me."</p>
                  <p className="text-slate-600 text-xs mt-2">He says</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl">💥</div>
                  <p className="text-slate-600 text-[10px] mt-1">COLLISION</p>
                </div>
                <div className="bg-[#0f766e]/10 p-5 rounded-2xl border border-[#0f766e]/15 text-center">
                  <p className="text-[#0f766e] font-serif text-lg italic">"I need space."</p>
                  <p className="text-slate-600 text-xs mt-2">She says</p>
                </div>
              </div>
              
              <p className="text-center text-slate-600 text-sm mb-8">He gets more desperate → She becomes more distant → He becomes more desperate → Eventually both people are behaving in ways they don't recognize.</p>
              
              <div className="bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-5 rounded-2xl border border-purple-500/15 text-center">
                <p className="text-purple-700/80 font-bold text-sm">STOP trying to solve the entire relationship during emotional activation.</p>
              </div>
            </div>

            {/* The 3 Steps to De-Escalate */}
            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Stop Escalation",
                  desc: "No major relationship decisions during a screaming match, panic episode, or emotional meltdown.",
                  color: "from-red-500",
                  border: "border-red-500/20",
                  accent: "text-red-700"
                },
                {
                  step: "Step 2",
                  title: "Take Temporary Space",
                  desc: "Not \"I'm ignoring you.\" But: \"We're both too activated right now. Let's take two hours and talk at 8 PM.\"",
                  color: "from-amber-500",
                  border: "border-amber-900/20",
                  accent: "text-amber-700"
                },
                {
                  step: "Step 3",
                  title: "Have One Structured Conversation",
                  desc: "Each person answers five questions honestly.",
                  color: "from-emerald-500",
                  border: "border-emerald-900/20",
                  accent: "text-emerald-700"
                }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-r ${s.color} to-transparent p-7 rounded-3xl border ${s.border}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className={`${s.accent} text-xs font-bold uppercase tracking-widest mb-2`}>{s.step}</p>
                  <h4 className="text-xl font-serif text-slate-800 mb-2">{s.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* The 5 Questions */}
            <div className="mt-8 bg-white p-8 rounded-3xl border border-purple-500/10">
              <p className="text-center text-purple-700/60 text-xs font-bold uppercase tracking-widest mb-8">Each Person Answers:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { n: "1", q: "What am I feeling?" },
                  { n: "2", q: "What am I afraid of?" },
                  { n: "3", q: "What do I need?" },
                  { n: "4", q: "What am I willing to do?" },
                  { n: "5", q: "What am I NOT willing to do?" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-purple-500/[0.06] p-5 rounded-2xl border border-purple-500/10 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-8 h-8 mx-auto rounded-full bg-purple-400/20 text-purple-700 font-bold flex items-center justify-center mb-3 text-sm">{item.n}</div>
                    <p className="text-slate-700 text-sm font-serif">{item.q}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-slate-600 text-xs italic mt-6">Johnson's EFT approach moves from identifying the destructive pattern → identifying deeper emotions → communicating needs directly.</p>
            </div>
          </div>

          {/* ══ THE MOST IMPORTANT CONVERSATION ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0284c7] to-[#A8844A] flex items-center justify-center font-serif text-white font-bold text-lg shrink-0 shadow-lg shadow-[#0284c7]/20">
                  💬
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Most Important Conversation</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Eventually, they need to sit together and face reality</p>
            </motion.div>

            {/* The conversation flow */}
            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,166,107,0.03)_0%,transparent_60%)] pointer-events-none" />

              {/* The question */}
              <div className="text-center mb-10">
                <div className="inline-block bg-[#0369a1]/10 px-6 py-3 rounded-full border border-[#0369a1]/20 mb-4">
                  <p className="text-[#0369a1] font-serif italic text-sm">Boyfriend asks:</p>
                </div>
                <p className="text-2xl font-serif text-slate-800">"Do you actually want to continue this relationship?"</p>
              </div>

              {/* The 3 answers */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* YES */}
                <motion.div
                  className="bg-emerald-950/15 p-6 rounded-2xl border border-emerald-500/20"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">✓</div>
                  <h5 className="text-emerald-700 font-serif text-lg text-center mb-3">If YES</h5>
                  <div className="bg-slate-100/30 p-4 rounded-xl">
                    <p className="text-emerald-800/60 text-sm italic text-center">"What needs to change for this relationship to work?"</p>
                  </div>
                </motion.div>

                {/* UNCERTAIN */}
                <motion.div
                  className="bg-amber-950/15 p-6 rounded-2xl border border-amber-500/20"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">?</div>
                  <h5 className="text-amber-700 font-serif text-lg text-center mb-3">If UNCERTAIN</h5>
                  <div className="bg-slate-100/30 p-4 rounded-xl">
                    <p className="text-amber-800/60 text-sm italic text-center">"What information or experience do we need before making the decision?"</p>
                  </div>
                </motion.div>

                {/* NO */}
                <motion.div
                  className="bg-red-950/15 p-6 rounded-2xl border border-red-500/20"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-red-500/20 text-red-700 flex items-center justify-center font-bold text-xl mb-4">✗</div>
                  <h5 className="text-red-700 font-serif text-lg text-center mb-3">If NO</h5>
                  <div className="bg-slate-100/30 p-4 rounded-xl">
                    <p className="text-red-800/60 text-sm italic text-center">"How do we separate respectfully?"</p>
                  </div>
                </motion.div>
              </div>

              <p className="text-center text-slate-600 text-xs italic mt-8">This is much healthier than spending months asking "Does she still love me?" while watching what she does with another person.</p>
            </div>
          </div>

          {/* ══ BOUNDARY vs CONTROL - The Critical Distinction ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-indigo-500/20">
                  🛡
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">Boundary vs. Control</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">A very important psychological distinction most people confuse</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-red-950/10 p-8 rounded-3xl border border-red-500/20 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-5">
                  <X size={32} className="text-red-700/20" />
                </div>
                <h4 className="text-red-700 font-serif text-2xl mb-6">Control Says:</h4>
                <div className="bg-slate-100/30 p-5 rounded-2xl border border-red-900/15 mb-4">
                  <p className="text-red-700/80 font-serif text-lg italic">"You are forbidden from talking to him."</p>
                </div>
                <p className="text-slate-500 text-sm">This attempts to dictate another person's behavior through force or threat.</p>
              </motion.div>

              <motion.div
                className="bg-emerald-950/10 p-8 rounded-3xl border border-emerald-500/20 relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-5">
                  <CheckCircle2 size={32} className="text-emerald-700/20" />
                </div>
                <h4 className="text-emerald-700 font-serif text-2xl mb-6">Boundary Says:</h4>
                <div className="bg-slate-100/30 p-5 rounded-2xl border border-emerald-900/15 mb-4">
                  <p className="text-emerald-700/80 font-serif text-lg italic">"If our relationship includes an ongoing romantic relationship with someone else, I won't remain in this relationship."</p>
                </div>
                <p className="text-slate-500 text-sm">This states what YOU will do - not what the other person must do.</p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-500/10 p-6 rounded-2xl border border-indigo-500/15 text-center">
              <p className="text-indigo-700/80 font-serif italic text-lg leading-relaxed max-w-2xl mx-auto">
                "I can't control what you feel. But I can decide what kind of relationship I'm willing to participate in."
              </p>
            </div>
          </div>

          {/* ══ THE SOLUTION - Complete Side-by-Side Table ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0284c7] to-[#A8844A] flex items-center justify-center font-serif text-white font-bold text-lg shrink-0 shadow-lg shadow-[#0284c7]/20">
                  ✦
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Actual Solution</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">What healthy looks like - for both sides</p>
            </motion.div>

            <div className="overflow-x-auto border border-slate-200 rounded-3xl bg-slate-50 shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0369a1]/10 via-transparent to-[#0f766e]/10">
                    <th className="p-5 font-bold text-[#0369a1] text-sm font-serif border-b border-slate-200">
                      <span className="flex items-center gap-2">♂ Boyfriend</span>
                    </th>
                    <th className="p-5 font-bold text-[#0f766e] text-sm font-serif border-b border-slate-200">
                      <span className="flex items-center gap-2">♀ Girlfriend</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Accept the feeling of fear", "Accept the attraction without automatically acting on it"],
                    ["Stop impulsive pursuit", "Stop feeding the alternative connection if she chooses the relationship"],
                    ["Don't monitor / control", "Don't hide / deceive"],
                    ["Communicate needs clearly", "Communicate feelings honestly"],
                    ["Respect her autonomy", "Respect his emotional safety"],
                    ["Decide what boundaries he needs", "Decide what relationship she actually wants"],
                    ["Don't use suffering to obtain love", "Don't use confusion to maintain two relationships"],
                    ["Work on the relationship if both choose it", "Invest in repair if both choose it"],
                    ["Accept that he cannot force love", "Accept that attraction doesn't excuse harmful actions"],
                    ["If the relationship ends, begin separation", "If she no longer wants it, end it honestly"],
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-slate-200 hover:bg-slate-100 transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="p-4 text-[#0369a1]/80 border-r border-slate-200">{row[0]}</td>
                      <td className="p-4 text-[#0f766e]/80">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ══ WHAT FEEDING THE ATTRACTION LOOKS LIKE ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-orange-500/20">
                  ⚠
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">When It Crosses the Line</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">The problem isn't the feeling - it's what she's doing with the feeling</p>
            </motion.div>

            <div className="bg-white shadow-sm border-slate-200 p-8 rounded-3xl border border-orange-500/10 mb-8">
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Saying "I love my boyfriend, but I'm attracted to this coworker" is human. But imagine she also:
              </p>
              
              {/* Escalation Steps Visual - like a rising staircase */}
              <div className="space-y-2">
                {[
                  { text: "Messages him constantly", intensity: 15 },
                  { text: "Deliberately meets him outside work", intensity: 25 },
                  { text: "Hides conversations", intensity: 35 },
                  { text: "Flirts openly", intensity: 45 },
                  { text: "Creates opportunities to be alone", intensity: 55 },
                  { text: "Becomes physically intimate", intensity: 70 },
                  { text: "Tells him things she hides from her boyfriend", intensity: 80 },
                  { text: "Builds a separate emotional relationship", intensity: 95 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="w-16 shrink-0">
                      <div 
                        className="h-3 rounded-full"
                        style={{ 
                          width: `${item.intensity}%`,
                          background: `linear-gradient(to right, rgba(251,146,60,${0.7 + item.intensity/300}), rgba(239,68,68,${0.7 + item.intensity/300}))`
                        }}
                      />
                    </div>
                    <p className="text-slate-600 text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-red-950/15 p-5 rounded-2xl border border-red-500/20 text-center">
                <p className="text-red-700/80 font-serif italic">At this point, the problem isn't merely the feeling. It's what she's doing with the feeling.</p>
              </div>
            </div>

            <p className="text-slate-500 text-sm italic text-center">
              Perel's framework: secrecy, sexual/romantic intensity, and emotional involvement can exist in different combinations. Couples need to establish what fidelity means for <em>their</em> relationship.
            </p>
          </div>

          {/* ══ THE DEEPEST POINT ══ */}
          <div className="relative">
            <motion.div
              className="bg-gradient-to-br from-[#0369a1]/15 via-white to-[#0f766e]/15 p-10 md:p-16 rounded-[2.5rem] border border-slate-200 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0284c7] mb-8">The Deepest Point</p>
                
                <h3 className="text-2xl md:text-4xl font-serif leading-snug mb-8 max-w-3xl mx-auto text-slate-800">
                  The goal isn't to eliminate every uncomfortable emotion.
                </h3>
                <p className="text-slate-500 text-lg mb-10">That's impossible.</p>
                
                <div className="bg-slate-100/30 p-8 rounded-3xl border border-[#0284c7]/15 max-w-2xl mx-auto mb-10">
                  <p className="text-[#0284c7] font-serif text-xl md:text-2xl italic leading-relaxed">
                    "I can feel something without allowing that feeling to dictate harmful behavior."
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                  <div className="bg-[#0369a1]/[0.08] p-6 rounded-2xl border border-[#0369a1]/15">
                    <p className="text-[#0369a1] font-serif italic">The boyfriend can feel terrified without controlling her.</p>
                  </div>
                  <div className="bg-[#0f766e]/[0.08] p-6 rounded-2xl border border-[#0f766e]/15">
                    <p className="text-[#0f766e] font-serif italic">The girlfriend can feel attracted without secretly building another relationship.</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
                  And <strong className="text-slate-700">both people can make a conscious decision</strong> about whether they actually want to continue the relationship. If they both want it, the next stage is rebuilding emotional safety. If one doesn't, the solution is honest separation - not psychological force.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ══ A.R.E. - REBUILDING EMOTIONAL BOND ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-emerald-500/20">
                  🌱
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">A.R.E. - Rebuilding the Emotional Bond</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Johnson's framework for creating a safer emotional connection (Attachment)</p>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              {[
                { letter: "A", title: "Accessibility", desc: "Am I emotionally available to my partner? Can they reach me when they need me?", color: "from-emerald-400 to-teal-500", bg: "bg-emerald-500/20" },
                { letter: "R", title: "Responsiveness", desc: "When my partner reaches out emotionally, do I respond with genuine care? Do I show them they matter?", color: "from-teal-400 to-cyan-500", bg: "bg-teal-500/20" },
                { letter: "E", title: "Engagement", desc: "Am I truly engaged in this relationship? Do I pay attention to my partner's inner world?", color: "from-cyan-400 to-blue-500", bg: "bg-cyan-500/20" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex-1 text-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className={`w-24 h-24 mx-auto rounded-full ${item.bg} border border-slate-200 flex items-center justify-center text-4xl font-serif font-bold mb-5 bg-gradient-to-br ${item.color} bg-clip-text text-transparent shadow-lg`}>
                    {item.letter}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-emerald-950/10 p-6 rounded-2xl border border-emerald-900/20 text-center">
              <p className="text-emerald-700/70 font-serif italic">If both people genuinely want the relationship, the next stage is not endless reassurance - it's rebuilding accessibility, responsiveness, and engagement.</p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              ADDITIONAL PSYCHOLOGY - What Every Couple Should Know
              ═══════════════════════════════════════════════════════════════════ */}

          {/* Section Divider */}
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#0284c7]/50 to-transparent mb-8" />
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0284c7]/60 mb-4">Beyond This Situation</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-4 text-slate-800">What Every Couple Should Know</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Psychology-based insights that protect relationships - whether you're facing a crisis or building something stronger.</p>
          </motion.div>

          {/* ══ ATTACHMENT STYLES ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-violet-500/20">
                  🔗
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">Understanding Attachment Styles</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">How your early experiences shape how you love - and what triggers you</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Anxious Attachment",
                  subtitle: "The Pursuer",
                  traits: ["Fears abandonment intensely", "Needs constant reassurance", "Hypervigilant to signs of withdrawal", "May become clingy or controlling", "Interprets distance as rejection"],
                  color: "from-blue-500/15", border: "border-blue-500/15", accent: "text-blue-700",
                  tip: "If this is you: your need for closeness is valid, but pursuing harder pushes people away. Learn to self-soothe before seeking reassurance."
                },
                {
                  title: "Avoidant Attachment",
                  subtitle: "The Withdrawer",
                  traits: ["Fears engulfment or losing independence", "Needs space to feel safe", "Suppresses emotions under stress", "May seem cold or dismissive", "Interprets closeness as pressure"],
                  color: "from-teal-500", border: "border-teal-500/15", accent: "text-teal-700",
                  tip: "If this is you: your need for space is valid, but withdrawing without explanation feels like rejection. Learn to communicate your needs before shutting down."
                },
                {
                  title: "Secure Attachment",
                  subtitle: "The Balanced Partner",
                  traits: ["Comfortable with closeness AND independence", "Communicates needs directly", "Doesn't catastrophize conflict", "Provides consistent reassurance", "Can self-regulate emotions"],
                  color: "from-emerald-500", border: "border-emerald-500/15", accent: "text-emerald-700",
                  tip: "This is the goal: you can feel safe enough to be vulnerable AND strong enough to give your partner space."
                },
                {
                  title: "Disorganized Attachment",
                  subtitle: "The Push-Pull",
                  traits: ["Both craves and fears closeness", "Unpredictable emotional responses", "May oscillate between clinging and withdrawing", "Often rooted in past trauma", "Feels safest in chaos"],
                  color: "from-purple-500/15", border: "border-purple-500/15", accent: "text-purple-700",
                  tip: "If this is you: you're not broken. But you may need professional support to build the internal safety that relationships require."
                },
              ].map((style, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-br ${style.color} to-transparent p-7 rounded-3xl border ${style.border}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h4 className={`${style.accent} font-serif text-xl mb-1`}>{style.title}</h4>
                  <p className="text-slate-600 text-xs mb-4">{style.subtitle}</p>
                  <ul className="space-y-2 mb-5">
                    {style.traits.map((t, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${style.accent.replace('text-', 'bg-')}/40`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-100/20 p-3 rounded-xl">
                    <p className="text-slate-500 text-xs italic leading-relaxed">{style.tip}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Attachment Compatibility Visual */}
            <div className="bg-white p-8 rounded-3xl border border-violet-500/10">
              <p className="text-center text-violet-700/50 text-xs font-bold uppercase tracking-widest mb-6">Most Common Pairing in Relationship Crisis</p>
              <div className="flex items-center justify-center gap-6">
                <div className="bg-blue-500/10 p-5 rounded-2xl border border-blue-500/15 text-center flex-1 max-w-[200px]">
                  <p className="text-blue-700 font-serif text-lg">Anxious</p>
                  <p className="text-slate-600 text-xs mt-1">pursues harder</p>
                </div>
                <div className="text-center space-y-1">
                  <ArrowRight size={20} className="text-slate-500 mx-auto" />
                  <p className="text-slate-600 text-[9px]">triggers</p>
                  <ArrowRight size={20} className="text-slate-500 mx-auto rotate-180" />
                </div>
                <div className="bg-teal-500/10 p-5 rounded-2xl border border-teal-500/15 text-center flex-1 max-w-[200px]">
                  <p className="text-teal-700 font-serif text-lg">Avoidant</p>
                  <p className="text-slate-600 text-xs mt-1">withdraws further</p>
                </div>
              </div>
              <p className="text-center text-slate-600 text-xs italic mt-6">This pairing creates the exact pursue-withdraw cycle described in Hold Me Tight. Neither person is "wrong" - they're stuck in a pattern.</p>
            </div>
          </div>

          {/* ══ THE 5 LOVE LANGUAGES ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-pink-500/20">
                  💝
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">Speaking Each Other's Language</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Why you might be showing love in ways your partner can't receive</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { icon: "🗣️", title: "Words of Affirmation", desc: "Verbal appreciation, compliments, encouragement", color: "from-pink-500/15 to-transparent", border: "border-pink-500/10" },
                { icon: "⏳", title: "Quality Time", desc: "Undivided attention, being fully present together", color: "from-violet-500/15 to-transparent", border: "border-violet-500/10" },
                { icon: "🎁", title: "Receiving Gifts", desc: "Thoughtful gestures that show \"I was thinking of you\"", color: "from-amber-500 to-transparent", border: "border-amber-500/10" },
                { icon: "🤝", title: "Acts of Service", desc: "Doing things that make their life easier", color: "from-emerald-500 to-transparent", border: "border-emerald-500/10" },
                { icon: "🤗", title: "Physical Touch", desc: "Hugs, holding hands, physical closeness", color: "from-rose-500/15 to-transparent", border: "border-rose-500/10" },
              ].map((lang, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-b ${lang.color} p-5 rounded-2xl border ${lang.border} text-center`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="text-2xl mb-3">{lang.icon}</div>
                  <h5 className="text-sm font-bold text-slate-700 mb-2">{lang.title}</h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{lang.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-slate-100/30 p-5 rounded-2xl border border-pink-500/10 text-center">
              <p className="text-slate-600 text-sm italic">The biggest mistake couples make: expressing love in <em>their own</em> language instead of their partner's. Learn what your partner actually needs to hear/feel.</p>
            </div>
          </div>

          {/* ══ GOTTMAN'S FOUR HORSEMEN ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-red-500/20">
                  ☠
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Four Relationship Killers</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Gottman's research: these four patterns predict relationship failure with over 90% accuracy</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Criticism",
                  icon: "🗡️",
                  bad: "\"You never think about anyone but yourself. You're so selfish.\"",
                  good: "\"I felt hurt when you forgot our plans. Can we talk about it?\"",
                  antidote: "Use \"I feel\" statements instead of \"You always/never\"",
                  color: "red"
                },
                {
                  title: "Contempt",
                  icon: "😤",
                  bad: "Eye-rolling, mocking, sarcasm, name-calling, sneering",
                  good: "\"I appreciate when you...\" Express what you DO value",
                  antidote: "Build a culture of appreciation and respect",
                  color: "orange"
                },
                {
                  title: "Defensiveness",
                  icon: "🛡️",
                  bad: "\"That's not my fault! YOU were the one who...\"",
                  good: "\"You're right, I could have handled that better. What do you need?\"",
                  antidote: "Accept responsibility for even a small part",
                  color: "amber"
                },
                {
                  title: "Stonewalling",
                  icon: "🧱",
                  bad: "Shutting down, silent treatment, walking away mid-conversation",
                  good: "\"I'm overwhelmed. I need 30 minutes, then let's continue.\"",
                  antidote: "Take a structured break with a promise to return",
                  color: "yellow"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`bg-${item.color}-950/10 p-7 rounded-3xl border border-${item.color}-900/20`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-serif text-xl text-slate-800">{item.title}</h4>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="bg-red-950/20 p-3 rounded-xl border border-red-900/15">
                      <p className="text-[10px] text-red-700/60 font-bold uppercase tracking-widest mb-1">Looks like:</p>
                      <p className="text-slate-600 text-sm italic">{item.bad}</p>
                    </div>
                    <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-900/15">
                      <p className="text-[10px] text-emerald-700/60 font-bold uppercase tracking-widest mb-1">Instead:</p>
                      <p className="text-slate-600 text-sm italic">{item.good}</p>
                    </div>
                  </div>
                  <div className="bg-slate-100/20 p-3 rounded-xl">
                    <p className="text-slate-500 text-xs"><strong className="text-slate-600">Antidote:</strong> {item.antidote}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Relationship Health Meter */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">Relationship Health Spectrum</p>
              <div className="relative h-8 rounded-full overflow-hidden bg-slate-100 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-amber-500/60 via-yellow-400/60 to-emerald-500" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-600">
                <span>All 4 horsemen present</span>
                <span>Occasional criticism</span>
                <span>Healthy conflict</span>
                <span>Strong bond</span>
              </div>
              <p className="text-center text-slate-600 text-xs italic mt-4">Gottman's research shows that stable couples have a 5:1 ratio of positive to negative interactions during conflict.</p>
            </div>
          </div>

          {/* ══ EMOTIONAL INTELLIGENCE IN RELATIONSHIPS ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-cyan-500/20">
                  🧠
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">Emotional Intelligence for Couples</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">The skills that separate couples who survive from those who don't</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Emotional Awareness",
                  items: ["Name your emotion before speaking", "Notice body signals (racing heart, tight chest)", "Distinguish between primary and reactive emotions", "Understand your triggers"],
                  color: "cyan"
                },
                {
                  title: "Emotional Regulation",
                  items: ["Pause 6 seconds before responding in anger", "Use breathing to calm your nervous system", "Don't make decisions at emotional peak", "Practice self-soothing techniques"],
                  color: "teal"
                },
                {
                  title: "Emotional Communication",
                  items: ["Lead with vulnerability, not accusation", "Say what you NEED, not what they DID wrong", "Listen to understand, not to respond", "Validate before problem-solving"],
                  color: "emerald"
                }
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-100 p-7 rounded-3xl border border-slate-200"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className={`text-${cat.color}-400 font-serif text-lg mb-5`}>{cat.title}</h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <CheckCircle2 size={14} className={`text-${cat.color}-400/50 shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══ THE REPAIR CONVERSATION TEMPLATE ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0284c7] to-[#A8844A] flex items-center justify-center font-serif text-white font-bold text-lg shrink-0 shadow-lg shadow-[#0284c7]/20">
                  🔧
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Repair Conversation</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">A template for having the hard conversation without destroying each other</p>
            </motion.div>

            <div className="bg-white shadow-sm border-slate-200 p-8 md:p-10 rounded-[2.5rem] border border-slate-200">
              <div className="space-y-6 max-w-2xl mx-auto">
                {[
                  { step: "1", title: "Set the Stage", desc: "\"I want to talk about something important. Not to fight - to understand. Can we do that?\"", color: "text-cyan-700", bg: "bg-cyan-500/10 border-cyan-500/15" },
                  { step: "2", title: "Share Without Blaming", desc: "\"When [specific thing happened], I felt [emotion]. I'm not saying you did it on purpose.\"", color: "text-teal-700", bg: "bg-teal-500/10 border-teal-500/15" },
                  { step: "3", title: "Listen Without Defending", desc: "\"Tell me what you were feeling when that happened. I'll just listen.\"", color: "text-emerald-700", bg: "bg-emerald-500/10 border-emerald-500/15" },
                  { step: "4", title: "Validate Their Experience", desc: "\"I can see why you felt that way. That makes sense.\" (Even if you disagree.)", color: "text-green-700", bg: "bg-green-500/10 border-green-500/15" },
                  { step: "5", title: "State What You Need", desc: "\"What I need from you going forward is [specific, actionable request].\"", color: "text-lime-700", bg: "bg-lime-500/10 border-lime-500/15" },
                  { step: "6", title: "Ask What They Need", desc: "\"What do you need from me? I want to get this right.\"", color: "text-[#0284c7]", bg: "bg-[#0284c7]/10 border-[#0284c7]/15" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className={`${s.bg} border p-5 rounded-2xl`}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-7 h-7 rounded-full bg-slate-100/30 ${s.color} font-bold flex items-center justify-center text-sm`}>{s.step}</div>
                      <h5 className={`${s.color} font-bold text-sm`}>{s.title}</h5>
                    </div>
                    <p className="text-slate-600 text-sm italic pl-10">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ TRUST REBUILDING GRAPH ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-amber-500/20">
                  📈
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">The Trust Rebuilding Journey</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Trust is not rebuilt in a day - it's rebuilt in consistent small moments</p>
            </motion.div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 mb-8">
              <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">Trust Level Over Time (With Consistent Effort)</p>
              
              {/* Visual trust graph using bars */}
              <div className="flex items-end justify-center gap-2 h-52 mb-6 px-4">
                {[
                  { h: 10, label: "Broken", color: "from-red-500 to-red-400" },
                  { h: 15, label: "", color: "from-red-500 to-red-400" },
                  { h: 18, label: "", color: "from-red-400 to-orange-400" },
                  { h: 22, label: "", color: "from-orange-500 to-orange-400" },
                  { h: 28, label: "Fragile", color: "from-orange-400 to-amber-400" },
                  { h: 30, label: "", color: "from-amber-500 to-amber-400" },
                  { h: 25, label: "Setback", color: "from-red-400 to-orange-400" },
                  { h: 35, label: "", color: "from-amber-400 to-yellow-400" },
                  { h: 42, label: "", color: "from-yellow-500 to-yellow-400" },
                  { h: 48, label: "Growing", color: "from-yellow-400 to-lime-400" },
                  { h: 55, label: "", color: "from-lime-500 to-lime-400" },
                  { h: 52, label: "", color: "from-lime-400 to-yellow-400" },
                  { h: 60, label: "", color: "from-lime-400 to-emerald-400" },
                  { h: 68, label: "", color: "from-emerald-500 to-emerald-400" },
                  { h: 72, label: "Stable", color: "from-emerald-500 to-emerald-400" },
                  { h: 78, label: "", color: "from-emerald-400 to-teal-400" },
                  { h: 82, label: "", color: "from-teal-500 to-teal-400" },
                  { h: 88, label: "", color: "from-teal-400 to-cyan-400" },
                  { h: 92, label: "Strong", color: "from-teal-500 to-emerald-500" },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-1 flex-1 h-full justify-end"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    style={{ transformOrigin: 'bottom' }}
                  >
                    <div 
                      className={`w-full rounded-t-lg bg-gradient-to-t ${bar.color} min-w-[8px]`}
                      style={{ height: `${bar.h}%` }}
                    />
                    {bar.label && <span className="text-[8px] md:text-[9px] text-slate-600 mt-1 whitespace-nowrap">{bar.label}</span>}
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-between text-[9px] text-slate-600 px-2">
                <span>Crisis</span>
                <span>→ Months of consistent effort →</span>
                <span>Rebuilt</span>
              </div>
              
              <p className="text-center text-slate-600 text-xs italic mt-6">Notice the setbacks - they're normal. Trust rebuilding is not linear. What matters is the overall trend.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Small Deposits", items: ["Keeping promises", "Being on time", "Following through", "Being transparent"], icon: "🪙" },
                { title: "Big Deposits", items: ["Having the hard conversation", "Choosing honesty over comfort", "Showing up when it's difficult", "Defending the relationship"], icon: "💎" },
                { title: "Withdrawals (Avoid)", items: ["Broken promises", "Hidden conversations", "White lies", "Inconsistency"], icon: "⚠️" },
              ].map((col, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-100 p-6 rounded-2xl border border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-center mb-3">
                    <span className="text-xl">{col.icon}</span>
                  </div>
                  <h5 className="text-center text-sm font-bold text-slate-700 mb-3">{col.title}</h5>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="text-slate-500 text-xs text-center">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══ DAILY RELATIONSHIP RITUALS ══ */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center font-serif text-slate-800 font-bold text-lg shrink-0 shadow-lg shadow-rose-500/20">
                  ☀️
                </div>
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">Daily Rituals That Protect Love</h3>
              </div>
              <p className="text-slate-600 italic text-sm pl-[60px] leading-relaxed">Small, consistent actions that build emotional security every day</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { time: "Morning", ritual: "A genuine goodbye - eye contact, a kiss, a real \"have a good day\"", why: "Sets the emotional tone for the day" },
                { time: "During the Day", ritual: "One thoughtful message - not logistics, but connection", why: "Shows they're on your mind" },
                { time: "Reunion", ritual: "6-second kiss + how was your day (listen for real)", why: "Transitions from separate to together" },
                { time: "Evening", ritual: "20 minutes of stress-reducing conversation (no screens)", why: "Builds emotional intimacy daily" },
                { time: "Conflict", ritual: "Repair attempt within 24 hours - never let it fester", why: "Prevents resentment from building" },
                { time: "Weekly", ritual: "One dedicated date - even if it's at home", why: "Keeps the friendship alive under the romance" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-rose-500/[0.04] p-5 rounded-2xl border border-rose-500/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <p className="text-rose-700/80 text-[10px] font-bold uppercase tracking-widest mb-2">{item.time}</p>
                  <p className="text-slate-700 text-sm mb-2">{item.ritual}</p>
                  <p className="text-slate-600 text-xs italic">{item.why}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <AfterTheBreakup />

          {/* ══ THE FINAL GOLDEN RULE ══ */}
          <motion.div
            className="bg-gradient-to-br from-[#0284c7]/20 via-[#0284c7]/10 to-transparent p-10 md:p-16 rounded-[2.5rem] border border-[#0284c7]/25 text-center relative overflow-hidden shadow-2xl shadow-[#0284c7]/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,166,107,0.1)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0284c7] mb-8">Remember This Always</p>
              <h3 className="text-2xl md:text-4xl font-serif leading-snug mb-8 text-slate-800 max-w-3xl mx-auto">
                A relationship doesn't survive because two people never face difficulties.
              </h3>
              <p className="text-xl md:text-2xl font-serif text-[#0284c7] italic mb-10 max-w-2xl mx-auto leading-relaxed">
                It survives because two people decide - again and again - to face them together, with honesty, with boundaries (Secure Attachment), and with respect.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <div className="bg-slate-100/20 px-6 py-4 rounded-2xl border border-[#0284c7]/15 flex-1">
                  <p className="text-[#0369a1] font-serif text-sm italic">His strength: "I can feel afraid without controlling."</p>
                </div>
                <div className="bg-slate-100/20 px-6 py-4 rounded-2xl border border-[#0284c7]/15 flex-1">
                  <p className="text-[#0f766e] font-serif text-sm italic">Her strength: "I can feel attracted without betraying."</p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-[#0284c7]/15">
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
                  And if the relationship ends? Then end it honestly - because the person who loved you deserves to make their life decisions based on truth, not illusion.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


    </div>
  );
}
