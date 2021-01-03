import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './signup.css'

function Signup(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const name = useFormInput('');
    const age = useFormInput('');
    const address = useFormInput('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    // handle button click of login form
    const handleLogin = () => {
      fetch('http://localhost:4000/signup?email='+username.value+'&password='+password.value+'&name='+name.value+'&age='+age.value+'&address='+address.value)
        .then(res => res.json())
        .then((data) => {
  
          if (data.msg == 'Sucessfull') {
            alert("you have sucessfully registered");
  
          }
          if (data.msg == 'Incorrect') {
            alert("The mail alreday registered");
  
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
            <h3>SignUp</h3>
            <form>
              <div class="form-group">
                <input class="form-control" placeholder="yourmail@example.com" type="text" {...username} autoComplete="new-mail" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Password" type="password" {...password} autoComplete="new-password" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="name" type="text" {...name} />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="age" type="number" {...age} />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="address" type="text" {...address} />
              </div>



              <div class="form-group">
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <input class="btn btn-primary btn-lg btn-block" type="button" value={loading ? 'Signup...' : 'Signup'} onClick={handleLogin} disabled={loading} />
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
  
  export default Signup;