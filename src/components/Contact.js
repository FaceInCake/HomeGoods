import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function Contact (props) {

  const SUPPORT_EMAIL = "eppel@uwindsor.ca";
  const LEGAL_EMAIL = "legal@email.com";



  return (
    <div className='Contact d-lg-flex'>

      <div className='m-0 p-3 col-lg-6'>
        <Card>
          <CardImg top alt="Image of helping hands" src="https://thumbs.dreamstime.com/b/silhouette-people-helping-person-mountain-90378085.jpg"
            className="CardImage"/>
          <CardBody>
            <CardTitle tag='h3'>Need Help?</CardTitle>
            <CardText>
              You can contact our support team at <a href={'mailto:'+SUPPORT_EMAIL}>{SUPPORT_EMAIL}</a>,
              or you can submit a support ticket <Link to="../Ticket">here</Link>.
            </CardText>
          </CardBody>
        </Card>
      </div>
      
      <div className='m-0 p-3 col-lg-6'>
        <Card>
          <CardImg top alt="Gavel and block" className="CardImage"
            src="https://media.istockphoto.com/photos/judges-gavel-on-a-white-background-picture-id453975745?b=1&k=20&m=453975745&s=612x612&w=0&h=6-nBSbEsaOA7H8ptKIG54nQLxf-WRlurVC0XtVlcBKU="/>
          <CardBody>
            <CardTitle tag="h3">Legal Support</CardTitle>
            <CardText>
              If you need to contact our legal team. You can email us at <a href={'mailto:'+LEGAL_EMAIL}>{LEGAL_EMAIL}</a>,
              or you can submit a <Link to="../Ticket">support ticket</Link>.
            </CardText>
          </CardBody>
        </Card>
      </div>

    </div>
  );
}

export default Contact;
