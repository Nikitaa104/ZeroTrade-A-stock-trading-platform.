
import React from "react";

function CreateTicket() {
  return (
    <div className="container">

      {/* Top heading */}
      <div className="row p-5 mb-5 text-center">
        <h1 className="fs-2 mb-3">
          Open a free demat and trading account online
        </h1>
        <h5 className="text-muted">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </h5>
      </div>

      {/* Image + Signup */}
      <div className="row p-5 mb-5 align-items-center">

        {/* Left image */}
        <div className="col-md-6 text-center">
          <img
            src="media\images\New folder\Screenshot 2026-01-26 170624.png"
            alt="signup"
            className="img-fluid"
          />
        </div>

        {/* Right signup */}
        <div className="col-md-6">
          <h2 className="mb-2 fs-2">Signup now</h2>
          <p className="text-muted">Or track your existing application</p>

          <div className="input-group mb-3">
            <span className="input-group-text fs-3">🇮🇳 +91</span>
            <input
              type="text"
              className="form-control fs-3"
              placeholder="Enter your mobile number"
            />
          </div>

          <button className="btn btn-primary w-100 mb-3 fs-3">
            Get OTP
          </button>

          <p className="small text-muted">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#">terms</a> & <a href="#">privacy policy</a>
          </p>

          <hr />

          <p className="small">
            Looking to open NRI account? <a href="#">Click here</a>
          </p>
        </div>

      </div>

      {/* Bottom investment section */}
      <div className="row p-5 mb-5 text-center">
        <h3 className="fs-2 mb-4">
          Investment options with Zerodha demat account
        </h3>
        <img
          src="/media/images/New folder/Screenshot 2026-01-26 163302.png"
          alt="investment options"
          className="img-fluid"
        />
      </div>
        <div className="row">
            <div className="col-md-6">
                <img src = "media\images\New folder\Screenshot 2026-01-26 170801.png"></img>
                <h2 className="fs-3">Benefits of opening a Zerodha demat account</h2>
            </div>
            <div className="col-md-6">
                <ul>
                    <h4 className="fs-3 text-muted">Unbeatable pricing</h4>
                    <p> </p>
                    <p className="fs-4 text-muted">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    <p> </p>
                    <h4 className="fs-3 text-muted">Best investing experience</h4>
                    <p> </p>
                    <p className="fs-4 text-muted">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    <p> </p>
                    <h4 className="fs-3 text-muted">No spam or gimmicks</h4>
                    <p> </p>
                    <p className="fs-4 text-muted">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <p> </p>
                    <h4 className="fs-3 text-muted">The Zerodha universe</h4>
                    <p> </p>
                    <p className="fs-4 text-muted">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default CreateTicket;
