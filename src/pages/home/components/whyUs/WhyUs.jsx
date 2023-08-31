import React from "react";
import SafetyAndSecurity from "./components/safety-and-security/SafetyAndSecurity";
import CompetitivePricing from "./components/competitive/CompetitivePricing";
import "./why-us.css";
import CommunityBuilding from "./components/Community/CommunityBuilding";

export default function WhyUs() {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="why-us">
          <h3>Why Us?</h3>
          <SafetyAndSecurity />
          <CompetitivePricing />
          <CommunityBuilding />
        </div>
      </div>
    </section>
  );
}
