import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './login.css'


function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    fetch('http://localhost:4000/login?email=' + username.value + '&password=' + password.value)
      .then(res => res.json())
      .then((data) => {

        if (data.msg == 'Sucessfull') {
          props.history.push('/profile');

        }
        if (data.msg == 'Incorrect') {
          alert("Incorrect username and password");

        }
        if (data.msg == 'Not valid') {
          alert("Do not give empty email or password");

        }
        console.log('done')
      })

  }

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
              <input class="form-control" placeholder="yourmail@example.com" type="text" {...username} autoComplete="new-mail" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="Password" type="password" {...password} autoComplete="new-password" />
            </div>
            <div class="form-group">
              {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
              <input class="btn btn-primary btn-lg btn-block" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
            </div>
            <div class="form-group forget-password">
              <p>If you are a new user please</p>
              <a href="/signup">SignUp</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;