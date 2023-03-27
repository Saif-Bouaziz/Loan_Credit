/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import { useState } from 'react';
import Container from "assets/theme/components/container";
function ContactUs() { 
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalPayment, setTotalPayment] = useState('');

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleInterestChange(e) {
    setInterest(e.target.value);
  }

  function handleYearsChange(e) {
    setYears(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const formattedMonthlyPayment = '$' + monthly.toFixed(2);
    const formattedTotalInterest = '$' + (monthly * calculatedPayments - principal).toFixed(2);
    const formattedTotalPayment = '$' + (monthly * calculatedPayments).toFixed(2);

    setMonthlyPayment(formattedMonthlyPayment);
    setTotalInterest(formattedTotalInterest);
    setTotalPayment(formattedTotalPayment);
  }


  return (  
 
 
  <>
    
    <DefaultNavbar
      routes={routes}
      action={{
      type: "external",
      route: "https://www.creative-tim.com/product/material-kit-react",
      label: "Get Started Now",
      color: "info",
      }}
      sticky
    />  

    
    <div className="section" style={{marginLeft:200}} >
      <div className="container">
        <div className="content">
          <h1>Simple Loan Calculator</h1>
          <p>
            The Simple Loan Calculator will determine your estimated payments
            for loan amounts, interest rates and terms.
          </p>
        </div>

        <div className="columns">
          <div className="column is-three-quarters">
            <div className="card">
              <div className="card-content">
                <form id="loan-form" onSubmit={handleSubmit}>
                  <div className="level">
                    
                    <div className="level-left is-marginless">
                      <div className="level-item">
                        <p className="number">1</p>
                        Loan Amount
                      </div>
                    </div>

                    
                    <div className="level-right">
                      <div className="level-item">
                        <div className="field">
                          <div className="control has-icons-left ">
                            <input className="input" id="amount" type="number" onChange={handleAmountChange}/>
                            <span className="icon is-small is-left">
                              <i className="fa fa-dollar-sign"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="level">
                    
                    <div className="level-left is-marginless">
                      <div className="level-item">
                        <p className="number">2</p>
                        Interest Rate
                      </div>
                    </div>

                    
                    <div className="level-right">
                      <div className="level-item">
                        <div className="field">
                          <div className="control has-icons-right">
                            <input className="input" id="interest" type="number"  onChange={handleInterestChange}/>
                            <span className="icon is-small is-right">
                              <i className="fa fa-percentage"></i>
                              
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="level">
                   
                    <div className="level-left is-marginless">
                      <div className="level-item">
                        <p className="number">3</p>
                        Number Of Years
                      </div>
                    </div>

                    
                    <div className="level-right">
                      <div className="level-item">
                        <div className="field">
                          <div className="control has-icons-left">
                            <input className="input" id="years" type="number" onChange={handleYearsChange} />
                            <span className="icon is-small is-left">
                              <i className="fa fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="control">
                    <button
                      className="button is-large is-fullwidth is-primary is-outlined" type="submit"
                    >
                      Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div> 




      <div class="section" style={{marginLeft:200}}> 
        <h1 class="title ">Calculated Results</h1>
        <div class="columns is-multiline">

          <div class="column is-12-tablet is-6-desktop is-3-widescreen">
            <div class="notification is-primary has-text"> 
              <p id="monthlyPayment" class="title is-1">$</p>
              <p class="subtitle is-4">Monthly Payments</p> 
              <span id="monthlyPayment">{monthlyPayment}</span>
            </div>
          </div>

          <div class="column is-12-tablet is-6-desktop is-3-widescreen">
            <div class="notification is-info has-text">
              <p id="totalInterest" class="title is-1">%</p>
              <p class="subtitle is-4">Total Interest</p> 
              <span id="totalInterest">{totalInterest}</span>
            </div>
          </div>

          <div class="column is-12-tablet is-6-desktop is-3-widescreen">
            <div class="notification is-link has-text">
              <p id="totalPayment" class="title is-1">$</p>
              <p class="subtitle is-4">Total Amount</p> 
              <span id="totalPayment">{totalPayment}</span>
            </div>
          </div>

        </div>
      </div>   

    
  </> 
      


   
    

  );
}

export default ContactUs;
