"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bottom row with copyright and social links */}
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">CodeKar</Link>
            <p className="footer-copyright">© All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
