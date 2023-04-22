import React from "react";
import TourCard from "../../shared/TourCard";
import tours from "../../assets/data/tours";
import { Col } from "reactstrap";
const FeatureTourList = () => {
  return (
    <>
      {tours?.map((tour) => {
        return (
          <Col lg="3" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        );
      })}
    </>
  );
};

export default FeatureTourList;
