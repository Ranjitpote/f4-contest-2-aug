import "./sign-in-page-desktop.css";
const SignInPageDesktop = () => {
  return (
    <div className="sign-in-page-desktop">
      <img
        className="background-pattern-icon"
        alt=""
        src="/background-pattern.svg"
      />
      <div className="dont-have-an-container">
        <span>{`Don’t have an account? `}</span>
        <span className="sign-up">Sign up</span>
      </div>
      <div className="sign-in-card">
        <div className="white-background" />
        <div className="continue-cta">
          <div className="label">COntinue</div>
        </div>
        <b className="sign-in-to">Sign in to your account</b>
        <b className="forget-your-password">Forget your password?</b>
        <div className="email">
          <div className="your-email">Your email</div>
          <div className="email-input-field">
            <div className="value">youremail@email.com</div>
          </div>
        </div>
        <div className="password">
          <div className="your-email">Password</div>
          <div className="password-input-field">
            <div className="value">************</div>
          </div>
        </div>
        <div className="welcome-back-container">
          <span>Welcome back!</span>
          <span className="span"> 👋</span>
        </div>
      </div>
    </div>
  );
};

export default SignInPageDesktop;
