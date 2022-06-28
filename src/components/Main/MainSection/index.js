import React from "react";
import MainCarousel from "../MainCarousel";
import Section from "./style";
import useFetch from "../../../hooks/useFetch";

const MainSection = (props) => {
    const [res] = useFetch(props.url);
    return (
        <Section>
            <h2>{props.title}</h2>
            <MainCarousel setId={props.setId} result={res}/>
        </Section>
    );
};
export default MainSection;
