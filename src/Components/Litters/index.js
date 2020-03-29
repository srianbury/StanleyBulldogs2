import React from "react";
import Carousel from "react-bootstrap/Carousel";
import DescContainer from "../Container";

const PreviousLitters = ({ litters }) => (
  <div className="mt-4" id="litters">
    <div className="p-0">
      <hr className="my-4" />
      <h2 className="section-heading text-center">Previous Litters</h2>
      <div className="container-fluid p-0">
        {litters.map(litter => (
          <LitterWrapper key={litter.id} litter={litter} />
        ))}
      </div>
    </div>
  </div>
);

const LitterWrapper = ({ litter }) => {
  const Left = () => (
    <div className="ml-1 mr-1 mt-4">
      <h6>
        Made with <i className="fa fa-heart" /> by {litter.mom.name} and{" "}
        {litter.dad.name}
      </h6>
      <h6>Born {litter.birthday}</h6>
    </div>
  );
  const Right = () => (
    <div className="row no-gutters">
      <Carousel interval={null}>
        {litter.images.map(image => (
          <Carousel.Item key={image.id}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
  return <DescContainer left={<Left />} right={<Right />} />;
};

const CurrentLitter = ({ litter }) => (
  <div className="mt-4" id="currentLitters">
    <div className="p-0">
      <div className="container-fluid p-0">
        <CurrentPupperWrapper litter={litter} />
      </div>
    </div>
  </div>
);

const CurrentPupperWrapper = ({ litter }) => {
  const Left = () => (
    <div>
      <h2 className="section-heading text-center">Current Puppies</h2>
      <p>{litter.description}</p>
      <p>Born {litter.birthday}</p>
    </div>
  );
  const Right = () => (
    <div className="row no-gutters">
      <Carousel interval={null}>
        {litter.images.map(image => (
          <Carousel.Item key={image.id}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
  return <DescContainer left={<Left />} right={<Right />} />;
};

export default PreviousLitters;
export { CurrentLitter };
