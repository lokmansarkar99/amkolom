"use client";

import React from "react";

export default function ServiceArea() {
  return (
    <section className="sec">
      <div className="container">
        <p className="eyebrow">সেবা এলাকা</p>
        <h2 className="reveal">জয়পুরহাট ও আশেপাশের এলাকায় সেবা প্রদান করা হয়</h2>
        <div className="area-wrap">
          <div className="map-holder reveal">
            <svg viewBox="0 0 400 320" width="100%">
              <path d="M40 60 C 80 30, 160 20, 230 40 C 300 55, 360 90, 350 150 C 345 200, 300 240, 230 260 C 160 280, 80 270, 50 220 C 20 175, 20 100, 40 60 Z" fill="#E9F5E1" stroke="#43A047" strokeWidth="1.5" />
              <g className="pulse-dot" style={{ position: "absolute" }}>
              </g>
              <g transform="translate(150,120)">
                <circle r="11" className="core" fill="#E58A00" />
                <circle r="11" className="ring" fill="rgba(229,138,0,.5)" />
                <circle r="11" className="ring r2" fill="rgba(229,138,0,.5)" />
                <text x="18" y="5" fontFamily="var(--font-body)" fontSize="14" fill="#0D2818">জয়পুরহাট সদর</text>
              </g>
              <g transform="translate(220,90)">
                <circle r="9" className="core" fill="#E58A00" />
                <circle r="9" className="ring" fill="rgba(229,138,0,.5)" />
                <circle r="9" className="ring r2" fill="rgba(229,138,0,.5)" />
                <text x="15" y="4" fontFamily="var(--font-body)" fontSize="14" fill="#0D2818">ক্ষেতলাল</text>
              </g>
              <g transform="translate(190,190)">
                <circle r="9" className="core" fill="#E58A00" />
                <circle r="9" className="ring" fill="rgba(229,138,0,.5)" />
                <circle r="9" className="ring r2" fill="rgba(229,138,0,.5)" />
                <text x="15" y="4" fontFamily="var(--font-body)" fontSize="14" fill="#0D2818">কালাই</text>
              </g>
            </svg>
          </div>
          <div className="reveal">
            <p style={{ fontSize: "1.15rem", opacity: 0.85, maxWidth: "44ch" }}>
              যদি আপনার বাগান বা বাড়ির উঠানে পুরোনো আমগাছ থাকে, সরাসরি বাড়িতে গিয়ে গ্রাফটিং সেবা দেওয়া হয় নিচের এলাকাগুলোতে —
            </p>
            <ul className="area-list">
              <li><span className="tag"></span> জয়পুরহাট সদর</li>
              <li><span className="tag"></span> ক্ষেতলাল</li>
              <li><span className="tag"></span> কালাই</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
