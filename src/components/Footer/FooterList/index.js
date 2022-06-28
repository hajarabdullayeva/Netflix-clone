import React from "react";
import List from "./style";

const FooterList = (props) => {
  return (
    <List>
      {props.list.map((el, i) => (
        <li key={i}>
          <a href="?">{el}</a>
        </li>
      ))}
    </List>
  );
};

export default FooterList;
