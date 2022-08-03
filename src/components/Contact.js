import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function Contact (props) {

  const SUPPORT_EMAIL = "eppel@uwindsor.ca";



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
        <Card className='p-4'>
          Thing 2
        </Card>
      </div>

    </div>
  );
}

export default Contact;
