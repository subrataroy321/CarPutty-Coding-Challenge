import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  var [fundNeeded, setFundNeeded] = useState(5000);
  var [amountDonatedTotal, setAmountDonatedTotal] = useState(0);
  var [donateAmount, setDonateAmount] = useState();
  var [percentage, setPercentage] = useState(50);
  var [peopleDonated, setPeopleDonated] = useState(0);
  var [amountNeedToFund, setAmountNeedToFund] = useState(fundNeeded);

  useEffect(()=> {
    setPercentage((amountDonatedTotal/fundNeeded)*100);
    setAmountNeedToFund(fundNeeded-amountDonatedTotal);
    
  },[amountDonatedTotal])

  const addDonation = (e) => {
    if(amountNeedToFund >= donateAmount && donateAmount >= 5) {
      setAmountDonatedTotal(amountDonatedTotal+parseInt(donateAmount));
      setDonateAmount("")
      setPeopleDonated(++peopleDonated);
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="speech-bubble bottom">
            {
              (fundNeeded === amountDonatedTotal) 
              ? 
              <p>Achived the goal of <strong><sup>$</sup>{fundNeeded}</strong></p>
              :
              <p><strong><sup>$</sup>{amountNeedToFund}</strong> still needed to fund this project</p>
            }
          </div>
          <div className="donation-box">
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} style={{width: `${percentage}%`}}>
              </div>
            </div>
            <div className="donation">
              <h2>Only four days left to fund this project</h2>
              {
                (peopleDonated === 0)
                ?
                <p style={{fontSize: "1.4em"}}>Be the <strong>1st</strong> person and encourage others</p>
                :
                <p style={{fontSize: "1.4em"}}>Join the <strong>{peopleDonated}</strong> other donors who have already supported this project</p>
              }
              <div className="input-group input-container">
                <span className="input-group-addon"><strong>$</strong></span>
                <input type="text" className="form-control input-lg" placeholder="50" value={donateAmount} onChange={(e) => setDonateAmount(e.target.value)}/>
                <div className="input-group-btn" onClick={(e) => addDonation(e)}>
                  <button className="btn btn-success input-lg">
                    <span>Give Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Challenge completed by Subrata Roy</p>
    </div>
  );
}

export default App;
