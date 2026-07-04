"use client";

import React from "react";

export default function Varieties() {
  return (
    <section className="sec" id="varieties" style={{ background: "var(--paper)" }}>
      <div className="container">
        <p className="eyebrow">জাত নির্বাচন</p>
        <h2 className="reveal">যে চারটি জাত সবচেয়ে বেশি চাওয়া হয়</h2>
        <p className="sec-lede reveal">
          প্রতিটি জাতের নিজস্ব স্বাদ, রঙ ও মৌসুম আছে — আপনার গাছ ও পছন্দ অনুযায়ী সবচেয়ে উপযুক্তটি বেছে নেওয়া যায়।
        </p>
        <div className="variety-grid">
          <div className="variety-card reveal">
            <div className="variety-top" style={{ background: "#FFF3D0" }}>
              <svg viewBox="0 0 100 100">
                <ellipse cx="50" cy="55" rx="30" ry="38" fill="#FFB300" transform="rotate(-8 50 55)" />
                <ellipse cx="42" cy="40" rx="10" ry="16" fill="#FFD966" opacity=".7" transform="rotate(-8 42 40)" />
              </svg>
            </div>
            <div className="variety-body">
              <h3>হিমসাগর</h3>
              <dl className="variety-meta">
                <dt>মৌসুম</dt><dd>জ্যৈষ্ঠ–আষাঢ় (মে–জুন)</dd>
                <dt>স্বাদ</dt><dd>অত্যন্ত মিষ্টি, আঁশহীন, ঘ্রাণযুক্ত</dd>
                <dt>রঙ</dt><dd>হালকা হলুদ, ভেতরে জাফরানি</dd>
                <dt>আকার</dt><dd>মাঝারি</dd>
              </dl>
            </div>
          </div>
          <div className="variety-card reveal">
            <div className="variety-top" style={{ background: "#E9F5E1" }}>
              <svg viewBox="0 0 100 100">
                <ellipse cx="50" cy="55" rx="30" ry="38" fill="#43A047" transform="rotate(-8 50 55)" />
                <ellipse cx="42" cy="40" rx="10" ry="16" fill="#8BC98A" opacity=".7" transform="rotate(-8 42 40)" />
              </svg>
            </div>
            <div className="variety-body">
              <h3>ল্যাংড়া</h3>
              <dl className="variety-meta">
                <dt>মৌসুম</dt><dd>আষাঢ়–শ্রাবণ (জুন–জুলাই)</dd>
                <dt>স্বাদ</dt><dd>টক-মিষ্টির চমৎকার মিশ্রণ, আঁশহীন</dd>
                <dt>রঙ</dt><dd>পাকলেও সবুজ থেকে যায়</dd>
                <dt>আকার</dt><dd>মাঝারি থেকে বড়</dd>
              </dl>
            </div>
          </div>
          <div className="variety-card reveal">
            <div className="variety-top" style={{ background: "#F1F3D8" }}>
              <svg viewBox="0 0 100 100">
                <ellipse cx="50" cy="55" rx="32" ry="40" fill="#C7C43A" transform="rotate(-8 50 55)" />
                <ellipse cx="42" cy="38" rx="11" ry="17" fill="#E3E185" opacity=".7" transform="rotate(-8 42 38)" />
              </svg>
            </div>
            <div className="variety-body">
              <h3>ফজলি</h3>
              <dl className="variety-meta">
                <dt>মৌসুম</dt><dd>শ্রাবণ–ভাদ্র (জুলাই–আগস্ট)</dd>
                <dt>স্বাদ</dt><dd>হালকা মিষ্টি ও রসালো</dd>
                <dt>রঙ</dt><dd>সবুজ-হলুদ</dd>
                <dt>আকার</dt><dd>বড় ও ভারী</dd>
              </dl>
            </div>
          </div>
          <div className="variety-card reveal">
            <div className="variety-top" style={{ background: "#FBE7DE" }}>
              <svg viewBox="0 0 100 100">
                <ellipse cx="50" cy="55" rx="28" ry="34" fill="#E5622E" transform="rotate(-8 50 55)" />
                <ellipse cx="43" cy="42" rx="9" ry="14" fill="#F3A57F" opacity=".7" transform="rotate(-8 43 42)" />
              </svg>
            </div>
            <div className="variety-body">
              <h3>আম্রপালি</h3>
              <dl className="variety-meta">
                <dt>মৌসুম</dt><dd>আষাঢ় (জুন–জুলাই)</dd>
                <dt>স্বাদ</dt><dd>গাঢ় মিষ্টি</dd>
                <dt>রঙ</dt><dd>লালচে-কমলা</dd>
                <dt>আকার</dt><dd>ছোট থেকে মাঝারি, ফলন বেশি</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
