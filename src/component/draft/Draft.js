import React from "react";
import Blocks from '../Blocks/Blocks';
import "./draft.css";
import { Link } from "react-router-dom";

const Draft = () => {
  let data = localStorage.getItem('getFormData');
  data = JSON.parse(data);
  console.log(data);
  return (
    <>
      <div className="blocks-wrap">
        <Blocks className="com-blocks1 " value="Profit & Loss" />
        <Blocks className="com-blocks2 " value="Profit & Loss" />
        <Blocks className="com-blocks3 " value="others" />
      </div>
      <div className="draft-wrap">
        <p>
          <span className="title">Turn Over:</span>
          <span className="value">{data.TurnOvery1}</span>
          <span className="value">{data.TurnOvery2}</span>
        </p>

        <p> 
          <span className="title">Tax Paid:</span>
          <span className="value">{data.Depricationy1}</span>
          <span className="value">{data.Depricationy2}</span>
        </p>

        <p> 
          <span className="title">Bad Debits:</span>
          <span className="value">{data.BadDebitsy1}</span>
          <span className="value">{data.BadDebitsy2}</span>
        </p>
 
        <p> 
          <span className="title">Intrest:</span>
          <span className="value">{data.Intresty1}</span>
          <span className="value">{data. Intresty2}</span>
        </p>
 
        <p> 
          <span className="title">Management:</span>
          <span className="value">{data.Managementy1}</span>
          <span className="value">{data.Managementy2}</span>
        </p>
 
        <p> 
          <span className="title">Deprication:</span>
          <span className="value">{data.Depricationy1}</span>
          <span className="value">{data.Depricationy2}</span>
        </p>
 
        <p> 
          <span className="title">Equityy1:</span>
          <span className="value">{data.Equityy1}</span>
          <span className="value">{data.Equityy1}</span>
        </p>
 
        <p> 
          <span className="title">LoanOut:</span>
          <span className="value">{data.LoanOuty1}</span>
          <span className="value">{data.LoanOuty2}</span>
        </p>
 
        <p> 
          <span className="title">PromoterLoan:</span>
          <span className="value">{data.PromoterLoany1}</span>
          <span className="value">{data.PromoterLoany2}</span>
        </p>
 
        <p> 
          <span className="title">Inventory:</span>
          <span className="value">{data.Inventoryy1}</span>
          <span className="value">{data.Inventoryy2}</span>
        </p>
 
        <p> 
          <span className="title"> Debtor:</span>
          <span className="value">{data.Debtorsy1}</span>
          <span className="value">{data.Debtorsy2}</span>
        </p>
 
        <p> 
          <span className="title"> Creditors:</span>
          <span className="value">{data.Creditorsy1}</span>
          <span className="value">{data.Creditorsy2}</span>
        </p>
 
        <p> 
          <span className="title"> ITRFilingDate:</span>
          <span className="value">{data.ITRFilingDatey1}</span>
          <span className="value">{data.ITRFilingDatey2}</span>
        </p>
 
        <p> 
          <span className="title"> Agriculture:</span>
          <span className="value">{data.Agriculturey1}</span>
          <span className="value">{data.Agriculturey2}</span>
        </p>
        
        <div><Link to='/'>Home</Link></div>
      </div>

    </>
  );
};

export default Draft;
