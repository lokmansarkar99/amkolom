"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nums = containerRef.current?.querySelectorAll(".why-num");
    
    if (nums) {
      nums.forEach((num) => {
        const target = parseFloat(num.getAttribute("data-target") || "0");
        const suffix = num.getAttribute("data-suffix") || "";
        
        ScrollTrigger.create({
          trigger: num,
          start: "top 85%",
          once: true,
          onEnter: () => {
            let obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                num.textContent = Math.floor(obj.val) + suffix;
              }
            });
          }
        });
      });
    }
  }, []);

  return (
    <section className="sec sec-deep">
      <div className="container" ref={containerRef}>
        <p className="eyebrow">আস্থার কারণ</p>
        <h2 className="reveal">কেন আমাদের বেছে নেবেন</h2>
        <div className="why-grid">
          <div className="why-card reveal">
            <div className="why-num" data-target="10" data-suffix="+">0</div>
            <div className="why-label">বছরের অভিজ্ঞতা</div>
          </div>
          <div className="why-card reveal">
            <div className="why-num" data-target="500" data-suffix="+">0</div>
            <div className="why-label">সফল গ্রাফটিং</div>
          </div>
          <div className="why-card reveal">
            <div className="why-num" data-target="95" data-suffix="%">0</div>
            <div className="why-label">সফলতার হার</div>
          </div>
          <div className="why-card reveal">
            <div className="why-num" data-target="3" data-suffix="">0</div>
            <div className="why-label">এলাকায় নিয়মিত সেবা</div>
          </div>
          <div className="why-card reveal">
            <div className="why-num" data-target="100" data-suffix="%">0</div>
            <div className="why-label">বাড়িতে গিয়ে সেবা</div>
          </div>
        </div>
      </div>
    </section>
  );
}
