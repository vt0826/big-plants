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
    <StyledLink to={`detail/${props.index}`}>
      <ImgOverlay image={props.plantImages} size={props.size}>
        <Overlay>
          <OverlayText>{props.header}</OverlayText>
        </Overlay>
      </ImgOverlay>
    </StyledLink>
  );
}

//<Img src={props.plantImages} alt={"plant"} key={props.index} />
function Plants(props) {
  return (
    <Wrapper>
      {plantsData.map((plant, index) => {
        const plantImages = require("../img/" + plant.img);
        return (
          <Container size={size(index)} key={index}>
            <ImageContainer>
              <PlantImage plantImages={plantImages} index={index} header={plant.header} size={size(index)} />
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

export { Plants };

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
  margin-top: 60px;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: ${props => (props.size === "wide" ? "66.6%" : "33.3%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #90ee90;
}`;

const ImageContainer = styled.div`
:hover ${Overlay} {
  opacity: 1;
}
@media (min-width: 768px) {
  border-bottom: 3px solid #000;
  padding:0 40px;
    }
  }

`;

const SummaryContainer = styled(Container)`
  margin: 0;
  display: flex;
  @media (min-width: 768px) {
    width: ${props => (props.size === "wide" ? "50%" : "80%")};
    padding: 0 40px;
  }
`;

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
  background-image: url(${props => props.image});
  height: 250px;
  position: relative;
  text-align: center;
  margin: 0 auto;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (min-width: 768px) {
    height: 300px;
  }
`;

const NameText = styled.h3`
  font-size: 28px;
  font-weight: 700;
`;
const SummaryText = styled.p`
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
