import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Form, Button, Input, Label } from 'reactstrap';

function Login (props) {
  const usernameLoginInput = useRef("");
  const passwordLoginInput = useRef("");
  const usernameSignupInput = useRef("");
  const emailSignupInput = useRef("");
  const passwordSignupInput = useRef("");
  const acceptTerms = useRef(false);

  function loginCallback (event) {
    event.preventDefault();
    console.log("Fetching...");
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
    <div className='Login d-lg-flex'>
        
      <div className='m-0 p-3 col-lg-6'>
        <Card className='LoginCard p-4'>
          <CardTitle className='title pb-3'><h3>Login</h3></CardTitle>
          <Form className='form' onSubmit={loginCallback}>
            <Label htmlFor='usernameLogin' hidden>Username login</Label>
              <Input id='usernameLogin' className='mb-3' placeholder='Username' innerRef={usernameLoginInput} />
            <Label htmlFor='passwordLogin' hidden>Password login</Label>
            <Input id='passwordLogin' className='mb-3' placeholder='Password' innerRef={passwordLoginInput} />
            <Button>Login</Button>
          </Form>
        </Card>
      </div>

      <div className='m-0 p-3 col-lg-6'>
        <Card className='SignupCard p-4'>
          <CardTitle className='title pb-3'><h3>Signup</h3></CardTitle>
          <Form className='form' onSubmit={signupCallback}>
            <Label htmlFor='usernameSignup' hidden>Username Signup</Label>
            <Input id='usernameSignup' className='mb-3' placeholder='Username' innerRef={usernameSignupInput} />
            <Label htmlFor='emailSignup' hidden>email Signup</Label>
            <Input id='emailSignup' className='mb-3' placeholder='email' innerRef={emailSignupInput} />
            <Label htmlFor='passwordSignup' hidden>Password Signup</Label>
            <Input id='passwordSignup' className='mb-3' placeholder='Password' innerRef={passwordSignupInput} />
            <div className='mb-3'>
              <Input id='acceptTerms' className='me-3' innerRef={acceptTerms} type='checkbox' />
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
