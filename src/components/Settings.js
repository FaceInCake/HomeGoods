import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardTitle, CardText, Placeholder } from "reactstrap";
import { themes, changeTheme } from "../App";
import { UserContext } from "../store/UserContext";
import { get, post } from "../Database";

function Settings (props) {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
      if (! userContext.loggedin) {
        navigate("../");
        return;
      }
      get("./php/getEmail.php", d => {
        if (d.success) {
          setEmail(d.email);
        }
      })
      
    }
  }, []);

  function changeEmailCallback (event) {
    const email = prompt("Change email to?");
    post("./php/changeEmail.php", {
      email: email
    }, d => {
      if (d.success) {
        setEmail(email);
      }
      alert(d.message);
    });
  }

  function changePasswordCallback (event) {
    const pass = prompt("Enter new password:");
    post("./php/changePassword.php", {
      password: pass
    }, d => {
      if (d.success) {
        alert(d.message);
      }
    });
  }

  return (
    <div className="Settings p-5 w-100">
      <Card className="col-lg-8 mx-auto">
        <CardImg top alt="A pile of cogs" style={{height: '10rem', objectFit: 'cover'}}
          src="https://thumbs.dreamstime.com/b/pile-watch-parts-date-ring-top-30065566.jpg"/>
        <CardBody>
          <CardTitle tag="h3">Settings</CardTitle>
          <CardText>
            Username: {userContext.username}
          </CardText><hr/><CardText>
            Email: {email || <Placeholder animation="wave" xs={6}/>}
            <Button className="ms-3" onClick={changeEmailCallback} color="warning" size="sm">Change Email</Button>
          </CardText><hr/><CardText>
            Password: ••••••••••••
            <Button className="ms-3" onClick={changePasswordCallback} color="warning" size="sm">Change Password</Button>
          </CardText><hr/>
          {themes.map(s => (
            <Button className="m-2" key={s} onClick={() => changeTheme(s)} color="info" size="sm">{s}</Button>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default Settings;
