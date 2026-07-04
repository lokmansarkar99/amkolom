"use client";

import React from "react";

export default function FAQ() {
  return (
    <section className="sec" id="faq" style={{ background: "var(--paper)" }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <p className="eyebrow">প্রশ্নোত্তর</p>
        <h2 className="reveal">যা জানতে চান</h2>
        <div className="faq-list">
          <details className="faq-item" open>
            <summary>কোন সময়ে গ্রাফটিং সবচেয়ে ভালো?<span className="faq-plus"></span></summary>
            <p className="faq-a">সাধারণত বসন্তকাল ও বর্ষা শুরুর আগে — ফাল্গুন থেকে চৈত্র (ফেব্রুয়ারি–এপ্রিল) সময়টা গ্রাফটিংয়ের জন্য সবচেয়ে উপযুক্ত, কারণ এই সময় গাছের বৃদ্ধি সক্রিয় থাকে এবং আবহাওয়া অনুকূল থাকে।</p>
          </details>
          <details className="faq-item">
            <summary>কতদিনে ফল পাওয়া যায়?<span className="faq-plus"></span></summary>
            <p className="faq-a">গ্রাফটিংয়ের ২–৩ বছরের মধ্যেই গাছে ফল আসা শুরু করে, যেখানে বীজ থেকে হওয়া গাছে ফল পেতে সাধারণত ৭–১০ বছর সময় লাগে।</p>
          </details>
          <details className="faq-item">
            <summary>কোন জাতের আম লাগানো যায়?<span className="faq-plus"></span></summary>
            <p className="faq-a">হিমসাগর, ল্যাংড়া, ফজলি ও আম্রপালিসহ চাহিদা অনুযায়ী একাধিক উন্নত জাতের কলম একই গাছে সংযুক্ত করা যায়।</p>
          </details>
          <details className="faq-item">
            <summary>সফলতার হার কত?<span className="faq-plus"></span></summary>
            <p className="faq-a">সঠিক নিয়ম মেনে গ্রাফটিং করা হলে সফলতার হার ৯৫ শতাংশের বেশি থাকে।</p>
          </details>
          <details className="faq-item">
            <summary>বাড়িতে গিয়ে কাজ করেন?<span className="faq-plus"></span></summary>
            <p className="faq-a">হ্যাঁ, জয়পুরহাট সদর, ক্ষেতলাল ও কালাই এলাকায় সরাসরি বাড়িতে গিয়ে গ্রাফটিং সেবা প্রদান করা হয়।</p>
          </details>
        </div>
      </div>
    </section>
  );
}
