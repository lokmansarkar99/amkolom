"use client";

import React from "react";

export default function FinalCTA() {
  const phone = process.env.NEXT_PUBLIC_PHONE;

  return (
    <section className="final-cta">
      <svg className="silhouette" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0 200 L0 140 Q60 100 120 130 T240 120 T360 140 T480 110 T600 135 T720 115 T840 140 T960 120 T1080 138 T1200 125 L1200 200 Z" fill="#1B5E20" opacity="0.55" />
        <path d="M0 200 L0 165 Q80 140 160 160 T320 150 T480 165 T640 145 T800 165 T960 150 T1200 160 L1200 200 Z" fill="#0D2818" opacity="0.6" />
      </svg>
      <div className="container">
        <h2 className="reveal">সঠিক কলম, উন্নত ফলন, সমৃদ্ধ আগামী</h2>
        <p className="reveal">আপনার আঙিনার গাছটিকেও দিন নতুন সম্ভাবনা — অভিজ্ঞ হাতে, নিরাপদ পদ্ধতিতে।</p>
        <div className="final-btns">
          <a href={`tel:${phone}`} className="btn btn-primary">এখনই যোগাযোগ করুন</a>
          <a href="#contact" className="btn btn-ghost-cream">ফ্রি পরামর্শ নিন</a>
        </div>
      </div>
    </section>
  );
}
