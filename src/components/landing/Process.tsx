"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { eyebrow: 'ধাপ ০১ / ০৯', num: '০১', title: 'ডাল নির্বাচন', text: 'প্রথমে উপযুক্ত পুরোনো ডাল নির্বাচন করা হয়।' },
  { eyebrow: 'ধাপ ০২ / ০৯', num: '০২', title: 'ডাল কাটা', text: 'নির্বাচিত ডালটি সঠিক মাপে কেটে সমতল করা হয়।' },
  { eyebrow: 'ধাপ ০৩ / ০৯', num: '০৩', title: 'সায়ন সংগ্রহ', text: 'উন্নত জাতের মাতৃগাছ থেকে সায়ন (নতুন ডাল) সংগ্রহ করা হয়।' },
  { eyebrow: 'ধাপ ০৪ / ০৯', num: '০৪', title: 'সায়ন জোড়া', text: 'পুরোনো ডালের সাথে নতুন সায়নটি নিখুঁতভাবে বসানো হয়।' },
  { eyebrow: 'ধাপ ০৫ / ০৯', num: '০৫', title: 'পলিথিন পেঁচানো', text: 'বাতাস ও পানি যেন ঢুকতে না পারে সেজন্য শক্ত করে টেপ বা পলিথিন পেঁচানো হয়।' },
  { eyebrow: 'ধাপ ০৬ / ০৯', num: '০৬', title: 'জোড়া লাগা', text: 'কিছুদিনের মধ্যে পুরোনো ও নতুন ডালের টিস্যু জোড়া লেগে যায়।' },
  { eyebrow: 'ধাপ ০৭ / ০৯', num: '০৭', title: 'নতুন কুঁড়ি', text: 'নতুন ডাল থেকে পাতা ও কুঁড়ি বের হতে শুরু করে।' },
  { eyebrow: 'ধাপ ০৮ / ০৯', num: '০৮', title: 'মুকুল আসা', text: 'সময়মতো নতুন জাতের ডালে মুকুল আসে।' },
  { eyebrow: 'ধাপ ০৯ / ০৯', num: '০৯', title: 'ফলন', text: 'অবশেষে একই গাছে নতুন জাতের আমের ফলন পাওয়া যায়।' }
];

const varietyNames = ["হিমসাগর", "ল্যাংড়া", "ফজলি", "আম্রপালি"];

export default function Process() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const gSelectRingRef = useRef<SVGCircleElement>(null);
  const gKnifeRef = useRef<SVGGElement>(null);
  const gStubRef = useRef<SVGGElement>(null);
  const gScionRef = useRef<SVGGElement>(null);
  const gVarietyTagRef = useRef<SVGTextElement>(null);
  const gTapeRef = useRef<SVGGElement>(null);
  const gHealGlowRef = useRef<SVGCircleElement>(null);
  const gLeavesGrowRef = useRef<SVGGElement>(null);
  const gFlowersRef = useRef<SVGGElement>(null);
  const gFruitsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tagInterval: NodeJS.Timeout | null = null;
    let lastStep = -1;

    const applyStage = (i: number) => {
      if(i === lastStep) return;
      lastStep = i;
      setCurrentStep(i);

      gsap.to(gSelectRingRef.current, { opacity: i === 0 ? 1 : 0, duration: 0.4 });
      gsap.to(gKnifeRef.current, { opacity: i === 1 ? 1 : 0, duration: 0.4 });
      gsap.to(gStubRef.current, { opacity: i >= 1 ? 1 : 0, duration: 0.4 });
      gsap.to(gScionRef.current, { opacity: i >= 2 ? 1 : 0, x: i >= 3 ? 0 : 60, y: i >= 3 ? 0 : -40, duration: 0.6, ease: 'power2.out' });
      gsap.to(gVarietyTagRef.current, { opacity: i === 2 ? 1 : 0, duration: 0.4 });
      gsap.to(gTapeRef.current, { opacity: i >= 4 ? 1 : 0, duration: 0.4 });
      gsap.to(gHealGlowRef.current, { opacity: i === 5 ? 0.5 : 0, duration: 0.5 });
      gsap.to(gLeavesGrowRef.current, { opacity: i >= 6 ? 1 : 0, scale: i >= 6 ? 1 : 0.4, duration: 0.6, ease: 'back.out(1.7)', transformOrigin: '50% 50%' });
      gsap.to(gFlowersRef.current, { opacity: i >= 7 ? 1 : 0, duration: 0.5 });
      gsap.to(gFruitsRef.current, { opacity: i >= 8 ? 1 : 0, scale: i >= 8 ? 1 : 0.3, duration: 0.7, ease: 'back.out(1.6)', transformOrigin: '50% 50%' });

      if(tagInterval) clearInterval(tagInterval);
      
      if(i === 2) {
        let vi = 0;
        if(gVarietyTagRef.current) gVarietyTagRef.current.textContent = varietyNames[0];
        tagInterval = setInterval(() => {
          vi = (vi + 1) % varietyNames.length;
          if (gVarietyTagRef.current) {
            gsap.to(gVarietyTagRef.current, { opacity: 0, duration: 0.18, onComplete: () => {
              if (gVarietyTagRef.current) {
                gVarietyTagRef.current.textContent = varietyNames[vi];
                gsap.to(gVarietyTagRef.current, { opacity: 1, duration: 0.18 });
              }
            }});
          }
        }, 700);
      }
    };

    applyStage(0);

    const st = ScrollTrigger.create({
      trigger: pinRef.current,
      start: 'top top',
      end: '+=800%',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const idx = Math.min(8, Math.max(0, Math.floor(self.progress * 9)));
        applyStage(idx);
      }
    });

    return () => {
      st.kill();
      if(tagInterval) clearInterval(tagInterval);
    };
  }, []);

  return (
    <section className="process-wrap" id="process">
      <div className="process-pin" ref={pinRef}>
        <div className="process-inner">
          <p className="eyebrow" style={{ marginLeft: 0, paddingLeft: 24 }}>কিভাবে আম গাছে গ্রাফটিং করা হয়</p>
          <div className="process-grid">
            <div>
              <p className="process-eyebrow">{steps[currentStep].eyebrow}</p>
              <div className="process-step-num">{steps[currentStep].num}</div>
              <h3 className="process-title">{steps[currentStep].title}</h3>
              <p className="process-text">{steps[currentStep].text}</p>
              <div className="process-dots">
                {steps.map((_, idx) => (
                  <i key={idx} className={idx === currentStep ? "on" : ""} />
                ))}
              </div>
            </div>
            <div className="process-svg-holder">
              <svg viewBox="0 0 400 400" width="100%" height="100%">
                <g>
                  <path d="M20 200 C 90 195, 140 200, 178 200" stroke="#6b4226" strokeWidth="16" strokeLinecap="round" fill="none" />
                </g>
                <circle ref={gSelectRingRef} cx="178" cy="200" r="26" stroke="#FFB300" strokeWidth="3" fill="none" opacity="0" />
                <g ref={gKnifeRef} opacity="0">
                  <line x1="178" y1="150" x2="178" y2="250" stroke="#FFF8E1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M150 130 L195 175" stroke="#cfd8dc" strokeWidth="6" strokeLinecap="round" />
                  <path d="M190 168 L205 183 L195 193 L180 178 Z" fill="#e0e0e0" />
                </g>
                <g ref={gStubRef} opacity="0">
                  <path d="M178 200 C 190 199, 198 200, 205 200" stroke="#6b4226" strokeWidth="16" strokeLinecap="round" fill="none" />
                </g>
                <g ref={gScionRef} opacity="0" transform="translate(60,-40)">
                  <path d="M205 200 C 250 198, 300 200, 340 200" stroke="#8d5a2b" strokeWidth="13" strokeLinecap="round" fill="none" />
                  <ellipse cx="330" cy="180" rx="30" ry="22" fill="#43A047" />
                  <ellipse cx="355" cy="205" rx="26" ry="19" fill="#2e7d32" />
                </g>
                <text ref={gVarietyTagRef} x="330" y="150" textAnchor="middle" fontFamily="var(--font-display)" fontSize="20" fill="#FFB300" opacity="0">হিমসাগর</text>
                <g ref={gTapeRef} opacity="0">
                  <path d="M180 185 Q200 175 220 185 Q200 195 180 185" stroke="#8D4B2C" strokeWidth="10" fill="none" strokeLinecap="round" />
                  <rect x="182" y="188" width="36" height="24" rx="4" fill="#a9683a" opacity="0.9" />
                </g>
                <circle ref={gHealGlowRef} cx="200" cy="200" r="30" fill="#FFB300" opacity="0" />
                <g ref={gLeavesGrowRef} opacity="0">
                  <ellipse cx="230" cy="150" rx="18" ry="12" fill="#43A047" transform="rotate(-20 230 150)" />
                  <ellipse cx="260" cy="140" rx="20" ry="13" fill="#2e7d32" transform="rotate(10 260 140)" />
                  <ellipse cx="300" cy="150" rx="18" ry="12" fill="#43A047" transform="rotate(-15 300 150)" />
                  <ellipse cx="250" cy="250" rx="18" ry="12" fill="#2e7d32" transform="rotate(25 250 250)" />
                  <ellipse cx="290" cy="255" rx="16" ry="11" fill="#43A047" transform="rotate(-10 290 255)" />
                </g>
                <g ref={gFlowersRef} opacity="0">
                  <circle cx="235" cy="120" r="5" fill="#FFF8E1" />
                  <circle cx="270" cy="112" r="5" fill="#FFF8E1" />
                  <circle cx="305" cy="122" r="5" fill="#FFF8E1" />
                  <circle cx="250" cy="285" r="5" fill="#FFF8E1" />
                </g>
                <g ref={gFruitsRef} opacity="0">
                  <ellipse cx="235" cy="130" rx="9" ry="13" fill="#FFB300" transform="rotate(-10 235 130)" />
                  <ellipse cx="272" cy="122" rx="10" ry="15" fill="#E58A00" transform="rotate(6 272 122)" />
                  <ellipse cx="307" cy="132" rx="9" ry="13" fill="#FFB300" transform="rotate(-6 307 132)" />
                  <ellipse cx="252" cy="292" rx="9" ry="14" fill="#E58A00" transform="rotate(14 252 292)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="process-scroll-hint">স্ক্রল করে সম্পূর্ণ প্রক্রিয়া দেখুন</div>
      </div>
    </section>
  );
}
