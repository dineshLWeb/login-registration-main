import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (

    <div>
      <body class="hold-transition register-page">
<div className="register-box">
  <div className="register-logo">
    <b>Admin</b>LTE
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form  onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="first name" required onChange={(e) => setFname(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="last name" required onChange={(e) => setLname(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block"> Sign Up</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div>
      <a href="/sign-in" className="text-center">sign in?</a>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}
{/* jQuery */}
{/* Bootstrap 4 */}
{/* AdminLTE App */}





</body>

    </div>
   );
  }
    // <div className="auth-wrapper">
    //   <div className="auth-inner">
    //     <form onSubmit={handleSubmit}>
    //       <h3>Sign Up</h3>
         

    //       <div className="mb-3">
    //         <label>First name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="First name"
    //           onChange={(e) => setFname(e.target.value)}
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label>Last name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="Last name"
    //           onChange={(e) => setLname(e.target.value)}
    //         />
    //       </div>

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

    //       <div className="d-grid">
    //         <button type="submit" className="btn btn-primary">
    //           Sign Up
    //         </button>
    //       </div>
    //       <p className="forgot-password text-right">
    //         Already registered <a href="/sign-in">sign in?</a>
    //       </p>
    //     </form>
    //   </div>
    // </div>
//   );
// }
