import React from "react";
import styled from 'styled-components'

export default function Title(props) {
  return (
      <TitleWrapper className="title" style={{color:props.color}}>
        <h2>{props.title}</h2>
        <div className="first">
            <div className=""></div>
        </div>
      </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 5px;

  h2 {
    font-weight: 400;
    text-trasform: uppercase;
    letter-spacing: 0.3rem;
    color: black;
  }

  .underline {
    width: 120px;
    border: 1px solid;
    margin: 0 auto;
  }
`;
