"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-rays"></div>
      <div id="particles"></div>
      <div className="container hero-grid">
        <div>
          <p className="hero-kicker">আপনার পুরোনো আমগাছকে দিন নতুন জীবন</p>
          <h1>আম গাছে <span className="accent">গ্রাফটিং</span></h1>
          <p className="sub">উন্নত জাতের আম ফলানোর আধুনিক ও নিরাপদ পদ্ধতি — একই গাছে হিমসাগর, ল্যাংড়া, ফজলি কিংবা আম্রপালির স্বাদ।</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">ফ্রি পরামর্শ নিন</a>
            <a href="#contact" className="btn btn-outline">যোগাযোগ করুন</a>
          </div>
          <div className="hero-stats">
            <div><b>১০+</b><span>বছরের অভিজ্ঞতা</span></div>
            <div><b>৫০০+</b><span>সফল গ্রাফটিং</span></div>
            <div><b>৯৫%+</b><span>সফলতার হার</span></div>
          </div>
        </div>
        <div className="hero-visual" id="heroVisual">
          <svg className="tree-svg" viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="240" cy="520" rx="170" ry="18" fill="#1B5E20" opacity="0.08" />
            <path d="M240 520 L240 300" stroke="#5c3a22" strokeWidth="14" strokeLinecap="round" />
            <path d="M240 380 L170 300" stroke="#5c3a22" strokeWidth="9" strokeLinecap="round" />
            <path d="M240 340 L305 270" stroke="#5c3a22" strokeWidth="9" strokeLinecap="round" />
            <path d="M240 300 L200 220" stroke="#5c3a22" strokeWidth="7" strokeLinecap="round" />

            <g className="leaf-sway">
              <ellipse cx="150" cy="230" rx="95" ry="80" fill="#43A047" opacity="0.9" />
            </g>
            <g className="leaf-sway d2">
              <ellipse cx="270" cy="180" rx="110" ry="92" fill="#1B5E20" opacity="0.85" />
            </g>
            <g className="leaf-sway d3">
              <ellipse cx="330" cy="270" rx="88" ry="72" fill="#43A047" opacity="0.9" />
            </g>
            <g className="leaf-sway d4">
              <ellipse cx="200" cy="150" rx="80" ry="66" fill="#2e7d32" opacity="0.9" />
            </g>

            <g>
              <circle cx="185" cy="255" r="12" fill="#FFB300" />
              <circle cx="300" cy="300" r="10" fill="#E58A00" />
              <circle cx="250" cy="210" r="13" fill="#FFB300" />
              <circle cx="330" cy="220" r="9" fill="#E58A00" />
              <circle cx="150" cy="200" r="9" fill="#FFB300" />
            </g>
          </svg>
          <div className="scroll-cue"><span>স্ক্রল করুন</span><span className="stick"></span></div>
        </div>
      </div>
    </section>
  );
}
