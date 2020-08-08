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
        TurnOver: {
          value: "",
          label: "TurnOver",
          elementConf: {
            type: "TurnOver",
            placeholder: "TurnOver...",
          },
          valid: false,
          errorStatus: false,
          error: "TurnOver is required",
        },
        Deprication: {
          label: "Deprication",
          elementConf: {
            type: "Deprication",
            placeholder: "Deprication...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Deprication is required",
        },
        BadDebits: {
          label: "Bad Debits",
          elementConf: {
            type: "BadDebits",
            placeholder: "Bad Debits...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Bad Debits is required",
        },
        Intrest: {
          label: "Intrest",
          elementConf: {
            type: "Intrest",
            placeholder: "Intrest...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Intrest is required",
        },
        Management: {
          label: "Management",
          elementConf: {
            type: "Management",
            placeholder: "Management...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Management is required",
        },
        TaxPaid: {
          label: "Tax Paid",
          elementConf: {
            type: "TaxPaid",
            placeholder: "Tax Paid...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Tax Paid is required",
        },
        Equity: {
          label: "Total equity in business",
          elementConf: {
            type: "Equity",
            placeholder: "Total equity...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Total equity is required",
        },
        LoanOut: {
          label: "Loan Outstanding",
          elementConf: {
            type: "LoanOut",
            placeholder: "Loan Outstanding...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Loan Outstanding is required",
        },
        PromoterLoan: {
          label: "Loan from promoters",
          elementConf: {
            type: "PromoterLoan",
            placeholder: "Loan from promoters...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Loan from promoters is required",
        },
        Inventory: {
          label: "Inventory",
          elementConf: {
            type: "Inventory",
            placeholder: "Inventory...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Inventory is required",
        },
        Debtors: {
          label: "Debtors",
          elementConf: {
            type: "Debtors",
            placeholder: "Debtors...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Debtors is required",
        },
        Creditors: {
          label: "Creditors",
          elementConf: {
            type: "Creditors",
            placeholder: "Creditors...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "Creditors is required",
        },
        ITRFilingDate: {
          label: "ITR Filing Date",
          elementConf: {
            type: "ITRFilingDate",
            placeholder: "ITR Filing Date...",
          },
          value: "",
          valid: false,
          errorStatus: false,
          error: "ITR Filing Date is required",
        },
        Aggriculture: {
          label: "AgricultureRental",
          elementConf: {
            type: "Agriculture",
            placeholder: "AgricultureRental...",
          },
          value: "",
          valid: false,
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
            <Button type="file" value="Upload Document" />
            <Button type="reset" value="Reset"/>  
          </footer>
        </form>
      </>
    );
  }
}

export default Input;
