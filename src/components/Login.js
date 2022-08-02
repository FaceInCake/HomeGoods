import './Login.css';
import { useRef } from 'react';
import MainNav from './MainNav';
import * as BS from 'reactstrap';

function Login (props) {
  const usernameLoginInput = useRef("");
  const passwordLoginInput = useRef("");
  const usernameSignupInput = useRef("");
  const passwordSignupInput = useRef("");

  function loginCallback (event) {
    event.preventDefault();
    fetch("php/LoginAttempt.php")
    .then(r => r.json())
    .then(data => {
      console.log(data);
    })
    .catch(reason => {
      console.error("Login error occured: "+reason);
    });
  }

  function signupCallback (event) {

  }

  return (
    <div className='Login'>
      <MainNav />
      <div className='MainContent'>
        <BS.Card className='LoginCard col-lg-6'>
          <BS.CardTitle className='title'>Login</BS.CardTitle>
          <BS.Form className='form p-3' onSubmit={loginCallback}>
            <BS.Label htmlFor='usernameLogin' hidden>Username login</BS.Label>
            <BS.Input id='usernameLogin' className='mb-3' placeholder='Username' innerRef={usernameLoginInput} />
            <BS.Label htmlFor='passwordLogin' hidden>Password login</BS.Label>
            <BS.Input id='passwordLogin' className='mb-3' placeholder='Password' innerRef={passwordLoginInput} />            
            <BS.Button>Login</BS.Button>
          </BS.Form>
        </BS.Card>
        <BS.Card className='SignupCard col-lg-6'>
        <BS.CardTitle className='title'>Signup</BS.CardTitle>
          <BS.Form className='form p-3' onSubmit={signupCallback}>
            <BS.Label htmlFor='usernameSignup' hidden>Username Signup</BS.Label>
            <BS.Input id='usernameSignup' className='mb-3' placeholder='Username' innerRef={usernameSignupInput} />
            <BS.Label htmlFor='passwordSignup' hidden>Password Signup</BS.Label>
            <BS.Input id='passwordSignup' className='mb-3' placeholder='Password' innerRef={passwordSignupInput} />            
            <BS.Button>Signup</BS.Button>
          </BS.Form>
        </BS.Card>
      </div>
    </div>
  );
}

export default Login;
