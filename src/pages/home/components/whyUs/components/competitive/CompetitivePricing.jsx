import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import "./competitive-pricing.css";

export default function CompetitivePricing() {
  return (
    <div className="competitive-pricing">
      <div className="icon">
        <FontAwesomeIcon icon={faMoneyBill} />
      </div>
      <h2>Competitive Pricing</h2>
      <p>
        We focuses on cost-effectiveness, offering competitive pricing that
        helps users save money on transportation expenses.{" "}
      </p>
    </div>
  );
}
