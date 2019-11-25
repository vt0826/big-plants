import React from "react";
import styled from "styled-components";

const Row = styled.div`
    &::after{
        content:''
        clear: both;
        display: table;
}
`;

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width:${width}%`;
}

const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : "width:100")}
  width: 100% @media only screen and (min-wdith: 768px) {
    width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  }
`;

export default function Grid(props) {
  return (
    <div>
      <Row>
        <Column span="3">1</Column>
        <Column span="1">4</Column>
        <Column span="1">5</Column>
        <Column span="1">6</Column>
        <Column span="1">7</Column>
        <Column span="1">8</Column>
        <Column span="1">9</Column>
        <Column span="1">10</Column>
        <Column span="1">11</Column>
        <Column span="1">12</Column>
      </Row>
    </div>
  );
}
