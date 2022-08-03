import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardTitle, Form, Button, Input, Label } from 'reactstrap';
import { post } from '../Database';
import { UserContext } from '../store/UserContext';

function Login (props) {
  const navigate = useNavigate();
  const usernameLoginInput = useRef("");
  const passwordLoginInput = useRef("");
  const usernameSignupInput = useRef("");
  const emailSignupInput = useRef("");
  const passwordSignupInput = useRef("");
  const acceptTerms = useRef(false);
  const userContext = useContext(UserContext);

  function loginCallback (event) {
    event.preventDefault();
    const username = usernameLoginInput.current.value;
    post("./php/LoginAttempt.php", {
      username: username,
      password: passwordLoginInput.current.value
    }, d => {
      sessionStorage.setItem("loggedin", d.loggedin??false);
      if (d.loggedin) {
        userContext.login(d.uid, username);
        navigate("/");
      }
      alert(d.message);
    });
  }

  function signupCallback (event) {
    event.preventDefault();
    post("./php/SignupAttempt.php", {
      username: usernameSignupInput.current.value,
      password: passwordSignupInput.current.value,
      email: emailSignupInput.current.value
    }, d => {
      console.log(d);
    })
  }

  return (
    <div className='Login d-lg-flex'>
        
      <div className='m-0 p-3 col-lg-6'>
        <Card className='LoginCard p-4'>
          <CardTitle className='title pb-3'><h3>Login</h3></CardTitle>
          <Form className='form' onSubmit={loginCallback}>
            <Label htmlFor='usernameLogin' hidden>Username login</Label>
              <Input id='usernameLogin' className='mb-3' placeholder='Username' innerRef={usernameLoginInput} required />
            <Label htmlFor='passordLogin' hidden>Password login</Label>
              <Input id='passwordLogin' className='mb-3' placeholder='Password' type='password' innerRef={passwordLoginInput} required />
            <Button>Login</Button>
          </Form>
        </Card>
      </div>

      <div className='m-0 p-3 col-lg-6'>
        <Card className='SignupCard p-4'>
          <CardTitle className='title pb-3'><h3>Signup</h3></CardTitle>
          <Form className='form' onSubmit={signupCallback}>
            <Label htmlFor='usernameSignup' hidden>Username Signup</Label>
              <Input id='usernameSignup' className='mb-3' placeholder='Username' innerRef={usernameSignupInput} required />
            <Label htmlFor='emailSignup' hidden>email Signup</Label>
              <Input id='emailSignup' className='mb-3' placeholder='email' type='email' innerRef={emailSignupInput} required />
            <Label htmlFor='passwordSignup' hidden>Password Signup</Label>
              <Input id='passwordSignup' className='mb-3' placeholder='Password' type='password' innerRef={passwordSignupInput} required />
            <div className='mb-3'>
              <Input id='acceptTerms' className='me-3' innerRef={acceptTerms} type='checkbox' required />
              <Label htmlFor='acceptTerms'>I accept the <Link to='../TermsAndService'>Terms and Services</Link></Label>
            </div>
            <Button>Signup</Button>
          </Form>
        </Card>
      </div>

      </div>
  );
}

export default Login;
