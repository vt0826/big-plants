import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import plantsData from "../data/plants";

function size(index) {
  if (index === 3 || index === 6) {
    return "wide";
  } else {
    return "narrow";
  }
}

function PlantImage(props) {
  return (
    <ImgOverlay>
      <StyledLink to={`detail/${props.index}`}>
        <Overylay>
          <OverlayText>{props.header}</OverlayText>
        </Overylay>
        <Img src={props.plantImages} alt={"plant"} key={props.index} />
      </StyledLink>
    </ImgOverlay>
  );
}

function Plants(props) {
  return (
    <Wrapper>
      {plantsData.map((plant, index) => {
        const plantImages = require("../img/" + plant.img);
        return (
          <Container size={size(index)}>
            <ImageContainer>
              <PlantImage plantImages={plantImages} index={index} header={plant.header} />
            </ImageContainer>
            <SummaryContainer size={size(index)}>
              <StyledLink to={`detail/${index}`}>
                <NameText size={size(index)}>{plant.name}</NameText>
                <SummaryText size={size(index)}>{plant.summary}</SummaryText>
              </StyledLink>
            </SummaryContainer>
            <Link to={`detail/${index}`}></Link>
          </Container>
        );
      })}
    </Wrapper>
  );
}

export default Plants;

const Wrapper = styled.section`
  padding: 60px 10px 0px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding: 150px 64px 0px;
  }
`;

const Container = styled.div`
  margin-top: 80px;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: ${props => (props.size === "wide" ? "66.3%" : "33.3%")};
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
      border-bottom: 3px solid #000;
    }
  }
`;

const SummaryContainer = styled(Container)`
  margin: 0;
  padding: 0 40px;
  display: flex;
  @media (min-width: 768px) {
    width: ${props => (props.size === "wide" ? "50%" : "80%")};
  }
`;

const Overylay = styled.div`
  position: absolute;
  padding: 0 4px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #90ee90;

}`;
const OverlayText = styled.h3`
  font-size: 24px;
  width: 100;
  position: absolute;
  top: 45%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const ImgOverlay = styled.div`
  width: 80%;
  position: relative;
  background-color: #90ee90;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin-left: 40px;

    height: 300px;
  }

  :hover ${Overylay} {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  padding: 0px 4px;
  margin: 0;
  @media (min-width: 768px) {
    height: 300px;
  }
`;

const NameText = styled.h3`
  font-size: 28px;
  font-weight: 700;
  @media (min-width: 768px) {
    padding-left: ${props => (props.size === "wide" ? "40px" : "0")};
  }
`;
const SummaryText = styled.p`
  line-height: 1.5;
  @media (min-width: 768px) {
    padding-left: ${props => (props.size === "wide" ? "40px" : "0")};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
