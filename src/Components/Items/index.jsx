import React from "react";
import styled from "styled-components";
import Item from "../Item";
import ImgageFilter from "../ImgageFilter";

export default ({ props }) => {
  return (
    <Items>
      {ImgageFilter(props.type)}
      <Item {...props}></Item>
      <span>{props.date}</span>
    </Items>
  );
};

const Items = styled.div`
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 1rem;
`;
