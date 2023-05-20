import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="container mt-5">
        <div className="row md:py-5 d-flex align-items-center">
          <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
            <div>
              <h2 className="text-center fs-1 fw-bold ">Playtime</h2>
            </div>

            <p className="fw-bold text-secondary">
              Find the perfect action figures for your collection. Egg Attack
              Action Marvel Spiderman Spider-Man and Ironman Iron Man by Beast
              Kingdom
            </p>

            <Button className="btn-info btn-lg text-white fw-bold">
              {" "}
              <FaArrowRight /> SHOP NOW
            </Button>
          </div>
          <div className="col-12 col-md-6 sm-12 ms-6 mt-3">
            <img
              data-aos="fade-up-left"
              className="img-fluid rounded-4"
              src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
