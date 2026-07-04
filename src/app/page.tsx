"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Process from "@/components/landing/Process";
import Benefits from "@/components/landing/Benefits";
import Varieties from "@/components/landing/Varieties";
import ServiceArea from "@/components/landing/ServiceArea";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal').forEach((elem: any) => {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to(elem, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Benefits />
      <Varieties />
      <ServiceArea />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  );
}
