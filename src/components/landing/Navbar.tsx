"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone } from "react-icons/fa6";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const phone = process.env.NEXT_PUBLIC_PHONE;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (navRef.current) {
      ScrollTrigger.create({
        start: "top -60",
        end: 99999,
        toggleClass: { targets: navRef.current, className: "scrolled" }
      });
    }
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="brand">
        <svg className="mark" viewBox="0 0 40 40" fill="none">
          <path d="M20 36C20 36 6 28 6 15C6 8 12 4 20 8C28 4 34 8 34 15C34 28 20 36 20 36Z" fill="#43A047" />
          <path d="M20 36V16" stroke="#FFF8E1" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        আমকলম
      </div>
      <div className="nav-links">
        <a href="#process">প্রক্রিয়া</a>
        <a href="#varieties">জাত সমূহ</a>
        <a href="#faq">প্রশ্নোত্তর</a>
        <a href="#contact">যোগাযোগ</a>
      </div>
      <div className="nav-cta">
        <span className="nav-phone"><FaPhone style={{ marginRight: '8px' }} /> {phone}</span>
        <a href="#contact" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: ".85rem" }}>
          যোগাযোগ করুন
        </a>
      </div>
    </nav>
  );
}
