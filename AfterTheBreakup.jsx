import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, AlertCircle, HeartCrack, RefreshCcw, ArrowRight, Activity, Clock, CheckCircle2, UserX, Compass, BookOpen, Map, ArrowDown } from 'lucide-react';

const SectionHeader = ({ num, title, subtitle, icon: Icon }) => (
  <div className="mb-10 mt-16 border-t border-slate-200 pt-12">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center font-serif text-xl font-bold shrink-0">
        {num}
      </div>
      <h2 className="font-serif text-2xl md:text-4xl text-slate-800">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-600 text-lg ml-16">{subtitle}</p>}
  </div>
);

const BranchCard = ({ title, items, colorClass }) => (
  <div className={`bg-white p-6 rounded-2xl border ${colorClass} shadow-sm h-full`}>
    <h4 className="font-serif text-lg text-slate-800 mb-4">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-600">
          <ArrowRight size={14} className="mt-1 shrink-0 opacity-50" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function AfterTheBreakup() {
  return (
    <div className="w-full">
      
      {/* Introduction to the Aftermath */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-800 text-white p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl mb-20"
      >
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Compass size={120} />
        </div>
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#38bdf8] mb-4">The Missing Piece</p>
        <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
          What Happens After <br/> The Breakup?
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
          Psychologically, the story does not end at the breakup. The breakup creates a whole new phase with multiple possible paths. <strong className="text-white">Relationship ending ≠ emotional attachment ending at the same moment.</strong>
        </p>
      </motion.div>

      <SectionHeader 
        num="I" 
        title="The Breakup Decision Stage" 
        subtitle="A breakup is rarely just 'I don't love you anymore → breakup.' It involves massive ambivalence." 
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {[
          { title: 'Attachment', desc: '"I still care about this person."' },
          { title: 'Frustration', desc: '"I can\'t continue like this."' },
          { title: 'Fear', desc: '"What happens if I leave?"' },
          { title: 'Relief', desc: '"Maybe I\'ll finally feel free."' },
          { title: 'Guilt', desc: '"I\'m hurting someone."' },
          { title: 'Identity', desc: '"Who am I without this relationship?"' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200">
            <h5 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-2">{item.title}</h5>
            <p className="text-slate-600 italic text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <SectionHeader 
        num="II" 
        title="Immediately After: The Two Sides" 
        subtitle="The person who was left vs. The person who initiated." 
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
          <div className="flex items-center gap-3 mb-6">
            <HeartCrack className="text-red-500" />
            <h3 className="text-xl font-serif text-slate-800">The Person Who Was Left</h3>
          </div>
          <ul className="space-y-4">
            <li className="text-slate-700"><strong>1. Shock:</strong> "How did this happen?"</li>
            <li className="text-slate-700"><strong>2. Searching:</strong> Reviewing old messages, photos, mistakes.</li>
            <li className="text-slate-700"><strong>3. Rejection Sensitivity:</strong> "Why wasn't I enough?"</li>
            <li className="text-slate-700"><strong>4. Bargaining:</strong> "I'll change, I'll do anything."</li>
            <li className="text-slate-700"><strong>5. Reality Acceptance:</strong> "It's over. What do I want my life to become?"</li>
          </ul>
        </div>

        <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-blue-500" />
            <h3 className="text-xl font-serif text-slate-800">The Person Who Initiated</h3>
          </div>
          <p className="text-sm text-slate-500 italic mb-4">Don't assume: Person who leaves = happy.</p>
          <div className="space-y-4">
            <div>
              <strong className="text-slate-700 block mb-1">Immediately After:</strong>
              <p className="text-sm text-slate-600">Relief, excitement, freedom, validation, reduced conflict.</p>
            </div>
            <div>
              <strong className="text-slate-700 block mb-1">Later On (Possible):</strong>
              <p className="text-sm text-slate-600">Loneliness, nostalgia, guilt, missing familiarity, realization that the new life isn't what they imagined.</p>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader 
        num="III" 
        title="The New Relationship Reality" 
        subtitle="If there is a third person, what happens next? None of these outcomes are inevitable." 
      />

      <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider mb-8">
          <span>Attraction</span> <ArrowRight size={14}/>
          <span>Novelty</span> <ArrowRight size={14}/>
          <span>Validation</span> <ArrowRight size={14}/>
          <span>Fantasy</span> <ArrowRight size={14}/>
          <span>Reality</span> <ArrowRight size={14}/>
          <span>Routine</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700"><CheckCircle2 size={16} className="inline mr-2 text-emerald-500" /> Healthy relationship develops</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700"><CheckCircle2 size={16} className="inline mr-2 text-rose-500" /> Attraction fades</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700"><CheckCircle2 size={16} className="inline mr-2 text-amber-500" /> Relationship becomes unstable</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700"><CheckCircle2 size={16} className="inline mr-2 text-purple-500" /> Person compares new partner with ex</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700"><CheckCircle2 size={16} className="inline mr-2 text-blue-500" /> Person misses previous relationship</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700"><CheckCircle2 size={16} className="inline mr-2 text-slate-500" /> Both relationships end</div>
        </div>
      </div>
      
      <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl mb-12">
        <p className="text-amber-800 font-medium">Rebound Relationships</p>
        <p className="text-sm text-amber-700/80 mt-1">A relationship that begins quickly is not automatically a rebound. And a rebound is not automatically doomed. Psychology explains possibilities, not certainties.</p>
      </div>

      <SectionHeader 
        num="IV" 
        title="Breakup ➔ Reconnection" 
        subtitle="If both want to repair the relationship. (It is not just: 'Miss them → get back together')" 
      />

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
        {[
          '1. Both acknowledge what actually happened.',
          '2. Understand why the relationship broke.',
          '3. Identify each person\'s contribution.',
          '4. Identify what must actually change.',
          '5. Re-establish emotional safety.',
          '6. Rebuild communication.',
          '7. Rebuild trust.',
          '8. Rebuild intimacy.',
          '9. Create new relationship patterns.',
          '10. Evaluate if the new relationship is actually different.'
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i+1}</div>
            <p className="text-sm text-slate-700 pt-1">{step.split('. ')[1]}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl mb-12 text-center">
        <h4 className="font-serif text-xl text-slate-800 mb-3">If Only ONE Person Wants Reconciliation</h4>
        <p className="text-slate-600 italic max-w-2xl mx-auto">
          Love cannot be negotiated into existence. You can communicate honestly, apologize, demonstrate change, and respect boundaries—but you cannot force attraction, commitment, or reconciliation.
        </p>
      </div>

      <SectionHeader 
        num="V" 
        title="Moving Forward (If It's Final)" 
        subtitle="How people psychologically reconstruct their identity." 
      />

      <div className="flex flex-col gap-4 mb-16">
        <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">1</div>
          <div>
            <h5 className="font-bold text-slate-800">Stabilization</h5>
            <p className="text-sm text-slate-600">Stop repeatedly checking the ex, establish sleep/eating routines, reconnect with friends, create physical distance.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">2</div>
          <div>
            <h5 className="font-bold text-slate-800">Grief</h5>
            <p className="text-sm text-slate-600">Allow sadness, anger, loneliness, confusion, and nostalgia to process naturally.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">3</div>
          <div>
            <h5 className="font-bold text-slate-800">Meaning-making</h5>
            <p className="text-sm text-slate-600">Ask: <em className="text-slate-500">What actually happened?</em> rather than: <em className="text-slate-500">How can I get them back?</em></p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">4</div>
          <div>
            <h5 className="font-bold text-slate-800">Identity Reconstruction</h5>
            <p className="text-sm text-slate-600">Rebuilding routines, friendships, hobbies, career, independence, and future plans.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">5</div>
          <div>
            <h5 className="font-bold text-slate-800">Integration</h5>
            <p className="text-sm text-slate-600">The relationship becomes part of your history rather than the center of your present.</p>
          </div>
        </div>
      </div>

      {/* MASTER DIAGRAM MAP */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Map size={200} />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 text-center relative z-10">Master Psychological Map</h3>
        <p className="text-slate-400 text-center text-sm mb-12 relative z-10">From attraction → attachment → crisis → breakup → recovery → possible futures.</p>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6">
          
          {/* Phase 1 */}
          <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full text-slate-300 text-sm font-medium">Relationship & Connection</div>
          <div className="h-6 w-px bg-slate-700"></div>
          
          <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full text-slate-300 text-sm font-medium">Problems & Emotional Distance</div>
          <div className="h-6 w-px bg-slate-700"></div>

          <div className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full text-slate-300 text-sm font-medium">Outside Attraction / Boundary Decision</div>
          <div className="h-6 w-px bg-slate-700"></div>

          {/* THE BREAKUP */}
          <div className="bg-red-500/20 border border-red-500/50 px-10 py-4 rounded-2xl text-white font-bold text-xl font-serif shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            THE BREAKUP
          </div>
          
          {/* Split Path */}
          <div className="flex w-full max-w-md justify-between px-12 relative h-12">
            <div className="absolute top-0 left-1/2 w-1/2 h-1/2 border-l border-t border-slate-600 rounded-tl-xl -translate-x-full"></div>
            <div className="absolute top-0 right-1/2 w-1/2 h-1/2 border-r border-t border-slate-600 rounded-tr-xl translate-x-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-24 w-full">
            
            {/* Path 1: Separation */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-slate-800 border border-slate-600 px-6 py-3 rounded-xl text-white font-bold text-center w-full">Separation</div>
              <ArrowDown className="text-slate-600" size={20}/>
              <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg text-slate-400 text-xs text-center w-full">Grief & Detachment</div>
              <ArrowDown className="text-slate-600" size={20}/>
              <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg text-slate-400 text-xs text-center w-full">Identity Recovery</div>
              <ArrowDown className="text-slate-600" size={20}/>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded text-emerald-400 text-[10px] text-center">New Relationship</div>
                <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded text-blue-400 text-[10px] text-center">Single Life</div>
              </div>
            </div>

            {/* Path 2: Reconciliation */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-slate-800 border border-slate-600 px-6 py-3 rounded-xl text-white font-bold text-center w-full">Reconciliation</div>
              <ArrowDown className="text-slate-600" size={20}/>
              <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg text-slate-400 text-xs text-center w-full">Repair & Trust</div>
              <ArrowDown className="text-slate-600" size={20}/>
              <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg text-slate-400 text-xs text-center w-full">New Patterns</div>
              <ArrowDown className="text-slate-600" size={20}/>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded text-emerald-400 text-[10px] text-center">Healthy Repair</div>
                <div className="bg-red-500/10 border border-red-500/30 p-2 rounded text-red-400 text-[10px] text-center">Fails Again</div>
              </div>
            </div>

          </div>

        </div>
      </motion.div>

    </div>
  );
}
