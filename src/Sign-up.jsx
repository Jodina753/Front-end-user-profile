import React, { Component } from 'react';

class SignUp extends Component {
    state = {  } 
    render() { 
        return (<>
        <div className=" sign-up main-container">
            <div className="header">
              <h2>Registration</h2>
            </div>

            <div className=" sign-up input-container" onInput={this.onInput}>
              <input type="text" name="email" placeholder="Email"></input>

              <input type="text" name="username" placeholder="Username"></input>

              <input type="text" name="password" placeholder="Password"></input>

              <button onClick={this.onSignUp}>Sign Up!</button>
            </div>
          </div>
        
        </>);
    }
}
 
export default SignUp;