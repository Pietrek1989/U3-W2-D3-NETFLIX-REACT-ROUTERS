// import { Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";
import Genre from "./Genre";

const CarouselParent = () => {
  return (
    <div>
      <Genre></Genre>

      <div id="carousel-parent">
        <CarouselRow
          titleOf="Harry Potter"
          link="https://www.omdbapi.com/?apikey=4f6eac88&s=harry%20potter"
        ></CarouselRow>
        <CarouselRow
          titleOf="Matrix"
          link="https://www.omdbapi.com/?apikey=4f6eac88&s=matrix"
        ></CarouselRow>
        <CarouselRow
          titleOf="Star Wars"
          link="https://www.omdbapi.com/?apikey=4f6eac88&s=star%20wars"
        ></CarouselRow>
      </div>
    </div>
  );
};

export default CarouselParent;
