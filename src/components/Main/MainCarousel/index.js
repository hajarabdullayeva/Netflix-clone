import React, {useRef} from "react";
import Carousel from "./style";

const MainCarousel = (props) => {
    const content = useRef();

    const scrollLeft = function () {
        content.current.scrollBy({
            left: -100,
            behavior: "smooth",
        });
    };

    const scrollRight = function () {
        content.current.scrollBy({
            left: 100,
            behavior: "smooth",
        });
    };

    return (
        <Carousel>
            <svg
                onClick={scrollLeft}
                width="18"
                height="32"
                viewBox="0 0 18 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.6793 0L17.32 1.66332L3.27068 16L17.32 30.3367L15.6793 32L0 16L15.6793 0Z"
                    fill="#E5E5E5"
                />
            </svg>
            <div ref={content}>
                {props.result.data &&
                    props.result.data.results.map((el) => (
                        <img
                            onClick={() => props.setId(el.id)}
                            alt="movie"
                            key={el.id}
                            id={el.id}
                            src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`}
                        />
                    ))}
            </div>

            <svg
                onClick={scrollRight}
                width="18"
                height="32"
                viewBox="0 0 18 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.86044 0L0.191643 1.66332L14.4816 16L0.191643 30.3367L1.86044 32L17.8083 16L1.86044 0Z"
                    fill="#E5E5E5"
                />
            </svg>
        </Carousel>
    );
};

export default MainCarousel;
