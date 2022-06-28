import React, {useState} from "react";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainContainer from "./style";

const Main = () => {
    const [id, setId] = useState("290098");

    return (
        <MainContainer>
            <MainHero id={id}/>
            <MainCategories setId={setId}/>
        </MainContainer>
    );
};

export default Main;
