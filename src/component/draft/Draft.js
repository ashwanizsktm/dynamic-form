import React from "react";
import "./draft.css";
import { Link } from "react-router-dom";

const Draft = () => {
    let data = localStorage.getItem('getFormData');
    data = JSON.parse(data);
    console.log(data);
  return (
    <div className="draft-wrap">
      <p>Turn Over: <span>{ data.TurnOver}</span></p>
      <p>Tax Paid: <span>{ data.TaxPaid}</span></p>
      <p>Loan from promoters: <span>{ data.PromoterLoan}</span></p>
      <p>Management: <span>{ data.Management}</span></p>
      <p>Loan Outstanding: <span>{ data.LoanOut}</span></p>
      <p>Inventory: <span>{ data.Inventory}</span></p>
      <p>Intrest: <span>{ data.Intrest}</span></p>
      <p>ITR Filing Date: <span>{ data.ITRFilingDate}</span></p>
      <p>Equity: <span>{ data.Equity}</span></p>
      <p>Deprication: <span>{ data.Deprication}</span></p>
      <p>Debtors: <span>{ data.Debtors}</span></p>
      <p>Creditors: <span>{ data.Creditors}</span></p>
      <p>Bad Debits:<span>{ data.BadDebits}</span></p>
      <p>Agriculture Rental: <span>{ data.Agriculture}</span></p>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Draft;
