"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [testIndex, setTestIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const slides = 3; // number of testimonials

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width:1080px)').matches) {
        setPerView(3);
      } else if (window.matchMedia('(min-width:760px)').matches) {
        setPerView(2);
      } else {
        setPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setTestIndex((prev) => {
      const maxIndex = Math.max(0, slides - perView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setTestIndex((prev) => {
      const maxIndex = Math.max(0, slides - perView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [perView]);

  return (
    <section className="sec" id="testimonials">
      <div className="container">
        <p className="eyebrow">কৃষকদের অভিজ্ঞতা</p>
        <h2 className="reveal">যারা ইতিমধ্যে ফল পেয়েছেন</h2>
        <div className="test-track-holder">
          <div 
            className="test-track" 
            ref={trackRef}
            style={{ transform: `translateX(-${(100 / perView) * testIndex}%)` }}
          >
            <div className="test-slide">
              <div className="test-card">
                <p className="test-quote">"আমার ৩০ বছরের পুরোনো গাছে এখন হিমসাগরের স্বাদ পাচ্ছি। ভাবিনি এত সহজে সম্ভব হবে।"</p>
                <div className="test-who">
                  <div className="test-avatar">ক</div>
                  <div>
                    <div className="test-name">আব্দুল করিম</div>
                    <div className="test-loc">কৃষক, জয়পুরহাট সদর</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-slide">
              <div className="test-card">
                <p className="test-quote">"একই গাছে এখন তিন রকম আম ধরে — হিমসাগর, ল্যাংড়া আর ফজলি। প্রতিবেশীরাও অবাক হয়ে যায়।"</p>
                <div className="test-who">
                  <div className="test-avatar">র</div>
                  <div>
                    <div className="test-name">রহিমা বেগম</div>
                    <div className="test-loc">গৃহস্থ, ক্ষেতলাল</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-slide">
              <div className="test-card">
                <p className="test-quote">"কাজটা খুব যত্ন নিয়ে করেছেন, আর মাত্র দুই বছরেই ফল ধরা শুরু করেছে। পেশাদার কাজ বলতে যা বোঝায়।"</p>
                <div className="test-who">
                  <div className="test-avatar">ই</div>
                  <div>
                    <div className="test-name">মোঃ ইউনুস আলী</div>
                    <div className="test-loc">বাগান মালিক, কালাই</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="test-nav">
          <button onClick={prevSlide} aria-label="আগেরটি">←</button>
          <button onClick={nextSlide} aria-label="পরেরটি">→</button>
        </div>
      </div>
    </section>
  );
}
