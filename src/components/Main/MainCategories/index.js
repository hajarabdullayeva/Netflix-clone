import React from "react";
import Categories from "./style";
import MainSection from "../MainSection";

const index = (props) => {
    return (
        <Categories>
            <MainSection
                setId={props.setId}
                title="Popüler"
                url={
                    "https://api.themoviedb.org/3/movie/popular?api_key=7e1ca0ac7a67a3f66ec6ebbd7287325f&language=en-US&page=1"
                }
            />
            <MainSection
                setId={props.setId}
                title="Yüksek Puanlı"
                url={
                    "https://api.themoviedb.org/3/movie/top_rated?api_key=7e1ca0ac7a67a3f66ec6ebbd7287325f&language=en-US&page=1"
                }
            />
            <MainSection
                setId={props.setId}
                title="Şimdi Gösterimde"
                url={
                    "https://api.themoviedb.org/3/movie/now_playing?api_key=7e1ca0ac7a67a3f66ec6ebbd7287325f&language=en-US&page=2"
                }
            />
            <MainSection
                setId={props.setId}
                title="Yakında"
                url={
                    "https://api.themoviedb.org/3/movie/upcoming?api_key=7e1ca0ac7a67a3f66ec6ebbd7287325f&language=en-US&page=1"
                }
            />
        </Categories>
    );
};

export default index;
