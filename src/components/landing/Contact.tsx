"use client";

import { FaPhone, FaLocationDot, FaWhatsapp, FaFacebookMessenger, FaMapLocationDot } from "react-icons/fa6";

export default function Contact() {
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  const waLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK;
  const msgLink = process.env.NEXT_PUBLIC_MESSENGER_LINK;
  const mapLink = process.env.NEXT_PUBLIC_MAP_LINK;

  return (
    <section className="sec" id="contact">
      <div className="container">
        <p className="eyebrow">যোগাযোগ</p>
        <h2 className="reveal">সরাসরি কথা বলুন</h2>
        <div className="contact-wrap">
          <div className="contact-card reveal">
            <p className="contact-name">মোঃ হাসিবুল রহমান</p>
            <p className="contact-role">আম গাছে গ্রাফটিং বিশেষজ্ঞ</p>
            <div className="contact-row"><span className="icon-wrap"><FaPhone /></span><span className="mono">{phone}</span></div>
            <div className="contact-row"><span className="icon-wrap"><FaLocationDot /></span><span>{address}</span></div>
            <div className="contact-btns">
              <a className="contact-btn call" href={`tel:${phone}`}><FaPhone /> কল করুন</a>
              <a className="contact-btn wa" href={waLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
              <a className="contact-btn msg" href={msgLink} target="_blank" rel="noopener noreferrer"><FaFacebookMessenger /> Messenger</a>
              <a className="contact-btn map" href={mapLink} target="_blank" rel="noopener noreferrer"><FaMapLocationDot /> ম্যাপ দেখুন</a>
            </div>
          </div>
          <div className="reveal" style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "1.1rem", opacity: 0.8, maxWidth: "42ch" }}>
              সপ্তাহের যেকোনো দিন সরাসরি কল করুন অথবা হোয়াটসঅ্যাপে বার্তা পাঠান — আপনার গাছের অবস্থা জেনে উপযুক্ত পরামর্শ দেওয়া হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
