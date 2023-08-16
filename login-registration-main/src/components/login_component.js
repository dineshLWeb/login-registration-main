import React, { Component, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./Dashboard";
        } else {
          alert("something went wrong");
        }
      });
  }

  return (
    // <div className="auth-wrapper">
    //   <div className="auth-inner">
    //     <form onSubmit={handleSubmit}>
    //       <h3>Sign In</h3>

    //       <div className="mb-3">
    //         <label>Email address</label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           placeholder="Enter email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           placeholder="Enter password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <div className="custom-control custom-checkbox">
    //           <input
    //             type="checkbox"
    //             className="custom-control-input"
    //             id="customCheck1"
    //           />
    //           <label className="custom-control-label" htmlFor="customCheck1">
    //             Remember me
    //           </label>
    //         </div>
    //       </div>

    //       <div className="d-grid">
    //         <button type="submit" className="btn btn-primary">
    //           Submit
    //         </button>
    //       </div>
    //       <p className="forgot-password text-right">
    //         <a href="/sign-up">Sign Up</a>
    //       </p>
    //     </form>
    //   </div>
    // </div> <div class="card">
    <div>
      <body class="hold-transition login-page">
 <div className="login-box">
  <div className="login-logo">
    <a href="#"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="/sign-up">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="/sign-up" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</body>
</div>

  );
}
