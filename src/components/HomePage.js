import { useContext, useState } from "react";
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselCaption, UncontrolledCarousel } from "reactstrap";
import { UserContext } from "../store/UserContext";

function HomePage (props) {
  const userContext = useContext(UserContext);

  const items = [
    {
      src: 'https://thumbs.dreamstime.com/b/fancy-table-set-dinner-3536261.jpg',
      altText: 'Beautiful dining table set',
      caption: 'Beautiful dining table set',
      key: 1,
    },
    {
      src: 'https://st2.depositphotos.com/1292552/7525/i/600/depositphotos_75255721-stock-photo-cozy-patio-furniture-on-luxury.jpg',
      altText: 'Gorgeous patio lounge set',
      caption: 'Gorgeous patio lounge set',
      key: 2,
    },
    {
      scr: 'https://previews.123rf.com/images/chris_elwell/chris_elwell1401/chris_elwell140100042/25437324-vintage-spice-cabinet-on-rustic-wooden-table.jpg',
      altText: 'Vintage wooden cabinet',
      caption: 'Vintage wooden cabinet',
      key: 3,
    }
  ];

  return (
    <div className="HomePage p-3">
      <h3>Welcome {userContext.username==''?'stranger':userContext.username}!</h3>
      <p>Please login to access more of the website</p>
      
    </div>
  );
}

export default HomePage;
