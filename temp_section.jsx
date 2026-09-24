      {/* ═══════════════════════════════════════════════════════════════════
          AFTER THE BREAKUP: THE THREE PERSPECTIVES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative z-20 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c11] to-[#0a0a0a] border-y border-white/5">
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
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#6d28d9]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-8">
              <Users size={32} strokeWidth={1.2} className="text-[#a78bfa]" />
            </div>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#a78bfa]/70 mb-4">The Aftermath</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-white/90 leading-tight">
              After the Breakup:<br />
              <span className="text-[#a78bfa] italic">Three Different Realities</span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mx-auto mb-6">
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
              <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-4 text-white/90">Why this breakup feels different</h3>
              <p className="text-white/50 leading-relaxed max-w-3xl">A normal breakup is often: <strong className="text-white/80">Relationship → Breakup → Grief → Recovery</strong>. But an affair/overlap breakup looks more like:</p>
            </motion.div>

            <motion.div 
              className="bg-[#111] p-8 md:p-12 rounded-[2.5rem] border border-white/5 overflow-hidden relative"
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
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
                      <p className="text-[#a78bfa] text-xs md:text-sm font-medium">{step}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight size={14} className="text-white/20 hidden md:block" />}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="bg-[#8b5cf6]/5 border border-[#8b5cf6]/10 p-6 rounded-2xl">
                  <p className="text-[#a78bfa] font-serif italic text-lg mb-2">"I'm relieved this relationship is over."</p>
                </div>
                <div className="bg-[#5EA7AF]/5 border border-[#5EA7AF]/10 p-6 rounded-2xl text-right md:text-left">
                  <p className="text-[#5EA7AF] font-serif italic text-lg mb-2">"I miss what I had with that person."</p>
                </div>
              </div>
              <p className="text-center mt-6 text-white/40 text-sm italic">Those aren't contradictory. Esther Perel emphasizes that infidelity can lead to very different outcomes.</p>
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
              <div className="absolute -inset-x-6 md:-inset-x-12 -inset-y-12 bg-gradient-to-b from-[#5EA7AF]/5 to-transparent rounded-[3rem] -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#5EA7AF]/20 border border-[#5EA7AF]/30 flex items-center justify-center text-[#5EA7AF] font-serif font-bold text-xl">A</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white/90">The Person Who Was Left</h3>
                  <p className="text-[#5EA7AF]/80 text-sm">"I lost my relationship."</p>
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
                  <div key={i} className="bg-[#111]/50 border border-white/5 p-5 rounded-2xl hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{s.icon}</span>
                      <h4 className="text-[#5EA7AF] font-bold text-sm uppercase tracking-wider">{s.step}</h4>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
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
              <div className="absolute -inset-x-6 md:-inset-x-12 -inset-y-12 bg-gradient-to-b from-[#C97B6B]/5 to-transparent rounded-[3rem] -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#C97B6B]/20 border border-[#C97B6B]/30 flex items-center justify-center text-[#C97B6B] font-serif font-bold text-xl">B</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white/90">The Person Who Left</h3>
                  <p className="text-[#C97B6B]/80 text-sm">"I finally escaped the old relationship."</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#C97B6B]/10 to-transparent border border-[#C97B6B]/20 p-6 rounded-2xl">
                  <h4 className="text-[#C97B6B] font-serif text-xl mb-3">1. Relief & Excitement</h4>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">
                    If they were emotionally exhausted, the breakup feels like freedom. The new relationship feels extremely powerful because it represents novelty, validation, and freedom.
                  </p>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <p className="text-white/40 text-sm italic">Sometimes people aren't only attracted to the new person; they're attracted to <strong className="text-white/70">who they become around that person</strong>.</p>
                  </div>
                </div>
                
                <div className="bg-[#111]/50 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white/80 font-serif text-xl mb-3">2. The Reality Check</h4>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">
                    The fantasy becomes reality. The new relationship has to survive ordinary life (bills, disagreements, routine) rather than just secret texts and excitement.
                  </p>
                </div>

                <div className="bg-[#111]/50 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white/80 font-serif text-xl mb-3">3. Nostalgia</h4>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">
                    They might suddenly remember: <em className="text-white/70">"My ex knew me for years. We had a life together."</em> <strong className="text-white/80">Missing the past ≠ wanting to return to the past.</strong>
                  </p>
                </div>

                <div className="bg-[#111]/50 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white/80 font-serif text-xl mb-3">4. Guilt (Or Lack Thereof)</h4>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">
                    They may feel a mix of relief + guilt + sadness. However, some feel <strong className="text-white/80">no guilt</strong> at all if they believe the relationship was already over emotionally.
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
              <div className="absolute -inset-x-6 md:-inset-x-12 -inset-y-12 bg-gradient-to-b from-[#C9A66B]/5 to-transparent rounded-[3rem] -z-10" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#C9A66B]/20 border border-[#C9A66B]/30 flex items-center justify-center text-[#C9A66B] font-serif font-bold text-xl">C</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white/90">The New Partner</h3>
                  <p className="text-[#C9A66B]/80 text-sm">"I finally got the person I wanted."</p>
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
                  <div key={i} className="bg-[#111]/50 border border-[#C9A66B]/10 p-4 rounded-2xl text-center">
                    <h5 className="text-[#C9A66B] font-bold text-sm mb-2">{item.title}</h5>
                    <p className="text-white/50 text-xs italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ══ THE BIGGEST MISCONCEPTION ══ */}
          <motion.div
            className="bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-14 rounded-[2.5rem] border border-white/10"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-10">The Biggest Misconception</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="border border-white/5 p-6 rounded-2xl bg-black/20 text-center opacity-50 relative">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Expectation</p>
                <p className="text-white/70 italic leading-relaxed">"The person who was left suffers.<br/>The person who left is happy."</p>
              </div>
              <div className="border border-[#a78bfa]/20 p-6 rounded-2xl bg-[#8b5cf6]/10 text-center shadow-[0_0_30px_rgba(139,92,246,0.1)] relative">
                <p className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3">Reality</p>
                <p className="text-white/90 italic leading-relaxed">It is much messier.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
                <p className="text-white/60 text-sm leading-relaxed">Happy about leaving<br/><strong className="text-[#C97B6B] block my-2 text-xl">+</strong>Sad about losing it</p>
              </div>
              <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
                <p className="text-white/60 text-sm leading-relaxed">Hurt by the breakup<br/><strong className="text-[#5EA7AF] block my-2 text-xl">+</strong>Recognizes it wasn't working</p>
              </div>
              <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
                <p className="text-white/60 text-sm leading-relaxed">Excited about the new person<br/><strong className="text-[#C9A66B] block my-2 text-xl">+</strong>Anxious about the future</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-white/50 italic text-sm">Human emotions aren't a single line. You cannot determine someone's internal emotional state from their external behavior alone (e.g. posting pictures, going out, looking happy).</p>
          </motion.div>

          {/* ══ WHAT DETERMINES THE OUTCOME ══ */}
          <div>
            <h4 className="text-2xl font-serif text-center mb-10 text-white/90">What determines what happens afterward?</h4>
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
                <div key={i} className="px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/[0.05] transition-colors">
                  <p className="text-white/70 text-sm">{factor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ══ FINAL WARNING ══ */}
          <motion.div
            className="bg-gradient-to-r from-red-950/20 via-transparent to-red-950/20 border-y border-red-900/20 py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center px-6">
              <h4 className="text-red-400 font-serif text-2xl mb-6">Don't Use Psychology to Mind-Read</h4>
              <p className="text-white/60 leading-relaxed mb-6">
                Conclusions like <em className="text-white/80">"She's avoidant, therefore she'll miss me later"</em> or <em className="text-white/80">"She's happy now, therefore she never loved me"</em> are too strong.
              </p>
              <div className="bg-black/40 p-6 rounded-2xl border border-red-900/10 inline-block text-left">
                <p className="text-white/70 italic text-sm leading-relaxed">
                  Attachment theory explains <strong className="text-white/90">patterns of behavior</strong>, but it cannot tell us exactly what one particular person is thinking at a particular moment. It shouldn't become a method for trying to decode or control the other person's mind.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* ══ THE SIMPLE SUMMARY ══ */}
          <div className="text-center max-w-2xl mx-auto space-y-6 pt-10">
             <p className="text-[#a78bfa] font-bold tracking-[0.2em] uppercase text-xs mb-8">In Summary</p>
             <div className="space-y-6 text-lg font-serif">
               <p className="text-[#5EA7AF]"><strong>The person left:</strong> "I lost someone."</p>
               <p className="text-[#C97B6B]"><strong>The person who left:</strong> "I gained freedom, but I may have lost something."</p>
               <p className="text-[#C9A66B]"><strong>The new person:</strong> "I gained someone, but now I have to build a real relationship with them."</p>
             </div>
             <div className="pt-10 mt-10 border-t border-white/5">
                <p className="text-white/50 italic leading-relaxed">
                  And eventually, all three have to deal with reality rather than the story they had in their head. That's why the months after an affair-related breakup can be psychologically complicated.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE RELATIONSHIP GUIDE - Complete Psychology-Based Guide
          ═══════════════════════════════════════════════════════════════════ */}
