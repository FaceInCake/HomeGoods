import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap';

function About (props) {

  return (
    <div className='About p-3 col-lg-6 mx-auto'>
      <UncontrolledAccordion open={''}>
        <AccordionItem open>
          <AccordionHeader targetId='1'>Our Mission</AccordionHeader>
          <AccordionBody accordionId='1'>
            Home Goods strives to provide the highest quality service
            for all your indoor decor needs. If you aren't satisfied
            with your service, we'll gladly compensate you.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId='2'>Quick History</AccordionHeader>
          <AccordionBody accordionId='2'>
            Home Goods was originally created on March 11, 2005, as
            a small brick-and-mortar thrift shop.
            Since then, Home Goods has expanded to 30 stores across
            12 countries!
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId='3'>Our Owner</AccordionHeader>
          <AccordionBody accordionId='3'>
            Our Owner, Jeff Moriah, was born in February 23, 1978,
            in the town of Brampton Ontario. Jeff pursued a degree in business
            but would frequently help their dad with their woodworking. From this,
            Jeff gained a great admiration for furniture and interior decor, and
            realised the shortcomings of the retail sector. This was what Home Goods came from.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}

export default About;
