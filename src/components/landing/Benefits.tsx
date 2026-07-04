"use client";

import React from "react";

export default function Benefits() {
  return (
    <>
      <section className="sec sec-deep" style={{ paddingTop: 70, paddingBottom: 70, textAlign: "center" }}>
        <div className="container">
          <p className="display" style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", color: "var(--mango)", margin: 0 }}>
            একটি পুরোনো গাছেই এখন পাওয়া যাবে উন্নত জাতের আম
          </p>
        </div>
      </section>

      <section className="sec" id="benefits">
        <div className="container">
          <p className="eyebrow">কেন গ্রাফটিং</p>
          <h2 className="reveal" style={{ opacity: 1, transform: "none" }}>একটি সিদ্ধান্ত, দীর্ঘমেয়াদি ফলন</h2>
          <p className="sec-lede reveal" style={{ opacity: 1, transform: "none" }}>
            সঠিক গ্রাফটিং শুধু নতুন জাত যোগ করে না — পুরোনো গাছের সম্পূর্ণ সম্ভাবনাকেই নতুন করে জাগিয়ে তোলে।
          </p>
          <div className="benefit-grid">
            <div className="benefit-card reveal" style={{ opacity: 1, transform: "none" }}>
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21c-4-3-7-6-7-10a7 7 0 0114 0c0 4-3 7-7 10z" />
                <path d="M12 21V9" />
              </svg>
              <p>দেশি গাছে উন্নত জাতের আম ফলানো যায়</p>
            </div>
            <div className="benefit-card reveal" style={{ opacity: 1, transform: "none" }}>
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18M3 12h18" />
              </svg>
              <p>এক গাছে একাধিক জাতের আম ফলানো সম্ভব</p>
            </div>
            <div className="benefit-card reveal" style={{ opacity: 1, transform: "none" }}>
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
              </svg>
              <p>ফলের গুণগত মান বৃদ্ধি পায়</p>
            </div>
            <div className="benefit-card reveal" style={{ opacity: 1, transform: "none" }}>
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
              <p>দ্রুত ফলন পাওয়া যায়</p>
            </div>
            <div className="benefit-card reveal" style={{ opacity: 1, transform: "none" }}>
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21c4-8 8-11 18-13" />
                <path d="M14 3c2 2 3 5 3 8" />
              </svg>
              <p>পুরোনো গাছকে নতুন জীবন দেওয়া যায়</p>
            </div>
            <div className="benefit-card reveal" style={{ opacity: 1, transform: "none" }}>
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <p>অভিজ্ঞ হাতে নিরাপদ গ্রাফটিং</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
