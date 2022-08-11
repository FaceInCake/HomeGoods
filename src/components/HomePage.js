import { useContext, useState } from "react";
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselCaption, UncontrolledCarousel } from "reactstrap";
import { UserContext } from "../store/UserContext";

function HomePage (props) {
  const userContext = useContext(UserContext);

  return (
    <div className="HomePage p-3">
      <h3>Welcome {userContext.username==''?'stranger':userContext.username}!</h3>
      <p>Please login to access more of the website</p>
      
    </div>
  );
}

export default HomePage;
