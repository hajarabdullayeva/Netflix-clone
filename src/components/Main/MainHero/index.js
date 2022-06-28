import React, {useState} from "react";
import Hero from "./style";
import useFetch from "../../../hooks/useFetch";
import Modal from "../../Modal";

const MainHero = (props) => {
    const [open, setOpen] = useState(false);
    const res = useFetch(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=7e1ca0ac7a67a3f66ec6ebbd7287325f&append_to_response=videos`
    );

    return (
        <Hero url={res[0]?.data?.backdrop_path}>
            <div className="hero__overlay"></div>
            <div className="hero__data">
                <h1>{res[0]?.data?.original_title}</h1>
                <p>{res[0]?.data?.overview}</p>
                <button onClick={() => setOpen(true)}>
                    <svg
                        width="15"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0.333313L20 11L0 21.6666V0.333313Z" fill="#141414"/>
                    </svg>
                    Oynat
                </button>
            </div>
            {open && (
                <Modal id={res[0]?.data?.videos.results[0]?.key} setOpen={setOpen}/>
            )}
        </Hero>
    );
};

export default MainHero;
