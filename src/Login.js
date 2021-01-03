import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './login.css'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    }
  }

  onSubmit = () => {
    fetch('http://localhost:4000/login?email=' + this.state.username + '&password=' + this.state.password)
      .then(res => res.json())
      .then((data) => {

        if (data.msg == 'Sucessfull') {
          this.props.history.push('/profile/');

        }
        if (data.msg == 'Incorrect') {
          console.log('Incorrect')

        }
        if (data.msg == 'Not valid') {

        }
      })

    console.log("done");
  }

  render() {
    return (
      <div class="container login-container">
        <div class="row">
          <div class="col-md-6 ads">
            <h1><span id="fl">Company</span><span id="sl">Name</span></h1>
          </div>
          <div class="col-md-6 login-form">

            <h3>Login</h3>
            <form>
              <div class="form-group">
                <input class="form-control" onChange={(e) => { this.setState({ username: e.target.value }) }} placeholder="email" type="email" />
              </div>
              <div class="form-group">
                <input class="form-control" onChange={(e) => { this.setState({ password: e.target.value }) }} placeholder="password" type="password" />
              </div>
              <div class="form-group">
                <button onClick={this.onSubmit}>Login</button>
              </div>
              <div class="form-group forget-password">
                <p>If you are a new user please</p>
                <a href="#">SignUp</a>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default Login;