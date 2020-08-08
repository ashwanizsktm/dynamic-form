import React, { Component } from "react";
import "./Input.css";
import Ifield from "../Ifields/Ifield";
import Label from "../label/label";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: {
        TurnOvery1: {
          value: "",
          label: "TurnOver",
          elementConf: {
            type: "TurnOver",
            placeholder: "TurnOver...year1",
          },
          errorStatus: false,
          error: "TurnOver is required",
        },
        TurnOvery2: {
          value: "",
          elementConf: {
            type: "TurnOver",
            placeholder: "TurnOver...year1",
          },
          errorStatus: false,
          error: "TurnOver is required",
        },
        Depricationy1: {
          label: "Deprication",
          elementConf: {
            type: "Deprication",
            placeholder: "Deprication...",
          },
          value: "",
          errorStatus: false,
          error: "Deprication is required",
        },
        Depricationy2: {
          elementConf: {
            type: "Deprication",
            placeholder: "Deprication...",
          },
          value: "",
          errorStatus: false,
          error: "Deprication is required",
        },
        BadDebitsy1: {
          label: "Bad Debits",
          elementConf: {
            type: "BadDebits",
            placeholder: "Bad Debits...",
          },
          value: "",
          errorStatus: false,
          error: "Bad Debits is required",
        },
        BadDebitsy2: {
          elementConf: {
            type: "BadDebits",
            placeholder: "Bad Debits...",
          },
          value: "",
          errorStatus: false,
          error: "Bad Debits is required",
        },
        Intresty1: {
          label: "Intrest",
          elementConf: {
            type: "Intrest",
            placeholder: "Intrest...",
          },
          value: "",
          errorStatus: false,
          error: "Intrest is required",
        },
        Intresty2: {
          elementConf: {
            type: "Intrest",
            placeholder: "Intrest...",
          },
          value: "",
          errorStatus: false,
          error: "Intrest is required",
        },
        Managementy1: {
          label: "Management",
          elementConf: {
            type: "Management",
            placeholder: "Management...",
          },
          value: "",
          errorStatus: false,
          error: "Management is required",
        },
        Managementy2: {
          elementConf: {
            type: "Management",
            placeholder: "Management...",
          },
          value: "",
          errorStatus: false,
          error: "Management is required",
        },
        TaxPaidy1: {
          label: "Tax Paid",
          elementConf: {
            type: "TaxPaid",
            placeholder: "Tax Paid...",
          },
          value: "",
          errorStatus: false,
          error: "Tax Paid is required",
        },
        TaxPaidy2: {
          elementConf: {
            type: "TaxPaid",
            placeholder: "Tax Paid...",
          },
          value: "",
          errorStatus: false,
          error: "Tax Paid is required",
        },
        Equityy1: {
          label: "Total equity in business",
          elementConf: {
            type: "Equity",
            placeholder: "Total equity...",
          },
          value: "",
          errorStatus: false,
          error: "Total equity is required",
        },
        Equityy2: {
          elementConf: {
            type: "Equity",
            placeholder: "Total equity...",
          },
          value: "",
          errorStatus: false,
          error: "Total equity is required",
        },
        LoanOuty1: {
          label: "Loan Outstanding",
          elementConf: {
            type: "LoanOut",
            placeholder: "Loan Outstanding...",
          },
          value: "",
          errorStatus: false,
          error: "Loan Outstanding is required",
        },
        LoanOuty2: {
          elementConf: {
            type: "LoanOut",
            placeholder: "Loan Outstanding...",
          },
          value: "",
          errorStatus: false,
          error: "Loan Outstanding is required",
        },
        PromoterLoany1: {
          label: "Loan from promoters",
          elementConf: {
            type: "PromoterLoan",
            placeholder: "Loan from promoters...",
          },
          value: "",
          errorStatus: false,
          error: "Loan from promoters is required",
        },
        PromoterLoany2: {
          elementConf: {
            type: "PromoterLoan",
            placeholder: "Loan from promoters...",
          },
          value: "",
          errorStatus: false,
          error: "Loan from promoters is required",
        },
        Inventoryy1: {
          label: "Inventory",
          elementConf: {
            type: "Inventory",
            placeholder: "Inventory...",
          },
          value: "",
          errorStatus: false,
          error: "Inventory is required",
        },
        Inventoryy2: {
          elementConf: {
            type: "Inventory",
            placeholder: "Inventory...",
          },
          value: "",
          errorStatus: false,
          error: "Inventory is required",
        },
        Debtorsy1: {
          label: "Debtors",
          elementConf: {
            type: "Debtors",
            placeholder: "Debtors...",
          },
          value: "",
          errorStatus: false,
          error: "Debtors is required",
        },
        Debtorsy2: {
          elementConf: {
            type: "Debtors",
            placeholder: "Debtors...",
          },
          value: "",
          errorStatus: false,
          error: "Debtors is required",
        },
        Creditorsy1: {
          label: "Creditors",
          elementConf: {
            type: "Creditors",
            placeholder: "Creditors...",
          },
          value: "",
          errorStatus: false,
          error: "Creditors is required",
        },
        Creditorsy2: {
          elementConf: {
            type: "Creditors",
            placeholder: "Creditors...",
          },
          value: "",
          errorStatus: false,
          error: "Creditors is required",
        },
        ITRFilingDatey1: {
          label: "ITR Filing Date",
          elementConf: {
            type: "ITRFilingDate",
            placeholder: "ITR Filing Date...",
          },
          value: "",
          errorStatus: false,
          error: "ITR Filing Date is required",
        },
        ITRFilingDatey2: {
          elementConf: {
            type: "ITRFilingDate",
            placeholder: "ITR Filing Date...",
          },
          value: "",
          errorStatus: false,
          error: "ITR Filing Date is required",
        },
        Agriculturey1: {
          label: "AgricultureRental",
          elementConf: {
            type: "Agriculture",
            placeholder: "AgricultureRental...",
          },
          value: "",
          errorStatus: false,
          error: "AgricultureRental is required",
        },
        Agriculturey2: {
          elementConf: {
            type: "Agriculture",
            placeholder: "AgricultureRental...",
          },
          value: "",
          errorStatus: false,
          error: "AgricultureRental is required",
        },
      },
    };
  }

  //on input change
  onchangeHandel = (e, item) => {
    e.preventDefault();
    const updatedFrom = { ...this.state.inputData };
    const updatedFromElement = { ...this.state.inputData[item]};
    updatedFromElement.value = e.target.value;
    updatedFrom[item] = updatedFromElement;
    this.setState({ inputData: updatedFrom });
  };
  //on focusout event
  onblurHandel = (e, item) => {
    e.preventDefault();
    const { inputData } = this.state;
    if (inputData[item].value === "") {
      this.setState(() => {
        inputData[item].errorStatus = true;
      });
    } else if (inputData[item].value !== "") {
      this.setState(() => {
        inputData[item].errorStatus = false;
      });
    }
    const updatedFrom = { ...this.state.inputData };
    this.setState({ inputData: updatedFrom });
  };

  //on submit
  formSubmission = (e) => {
    e.preventDefault();
    const getinputData = {};
    const getFormele = {};
    for (let formElementIdentifier in this.state.inputData) {
      getinputData[formElementIdentifier] = this.state.inputData[
        formElementIdentifier
      ].value;
      getFormele[formElementIdentifier] = this.state.inputData[
        formElementIdentifier
      ].errorStatus;
    }
    console.log(getFormele);
    let parseDate = JSON.stringify(getinputData);
    localStorage.setItem("getFormData", parseDate);
  };
  resetForm = (e, item) => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.inputData) {
      formElementArray.push({
        id: key,
        config: this.state.inputData[key],
      });
    }
    return (
      <>
        <form className="styled-form" onSubmit={(e) => this.formSubmission(e)}>
          {formElementArray.map((item, idx) => {
            return (
              <div className="inputBlock" key={"inputField" + idx}>
                <Label value={item.config.label} />
                <Ifield
                  name={item.config.name}
                  value={item.config.value}
                  onblurHandel={(event) => this.onblurHandel(event, item.id)}
                  onchangeHandel={(event) =>
                    this.onchangeHandel(event, item.id)
                  }
                  />
                  {this.state.inputData[item.id].errorStatus ? (
                    <p className="errors">
                      {this.state.inputData[item.id].error}
                    </p>
                  ) : null}
              </div>
            );
          })}
          <footer>
            <Button type="submit" value="Save Document" />
            <Link to='/Save draft' className="styled-btn">Save draft</Link>
            <Button type="submit" value="Submit Document" />
            <Button type="reset" value="Reset"/>  
          </footer>
        </form>
      </>
    );
  }
}

export default Input;
