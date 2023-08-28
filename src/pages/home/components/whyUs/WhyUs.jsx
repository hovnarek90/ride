import React from "react";
import SafetyAndSecurity from "./components/safety-and-security/SafetyAndSecurity";
import CompetitivePricing from "./components/competitive/CompetitivePricing";
import "./why-us.css";
import CommunityBuilding from "./components/Community/CommunityBuilding";

export default function WhyUs() {
  return (
    <div className="why-us">
      <SafetyAndSecurity />
      <CompetitivePricing />
      <CommunityBuilding />
    </div>
  );
}
