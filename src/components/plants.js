import React from "react";
// styled components
import styled from "styled-components";
//import constant
import { device } from "../constant/device";
//reachrouter
import { Link } from "@reach/router";
//data
import plantsData from "../data/plants";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 50px 10px;

  @media ${device.tablet} {
    padding: 200px 64px;
  }
`;

const Container = styled.div`
  margin-top: 60px;
  flex-basis: 100%;

  @media ${device.tablet} {
    flex-basis: ${props => (props.isWide ? "66.6%" : "33.3%")};
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
  background-color: ${props => props.theme.overlayBackgroundColor};
}`;

const ImageContainer = styled.div`
:hover ${Overlay} {
  opacity: 1;
}
  
@media ${device.tablet}  {
  border-bottom: 3px solid ${props => props.theme.borderColor};;
  padding:0 40px;
    }
  }

`;

const SummaryContainer = styled(Container)`
  margin: 0;
  display: flex;

  @media ${device.tablet} {
    width: ${props => (props.isWide ? "50%" : "80%")};
    padding: 0 40px;
  }
`;

const OverlayText = styled.h3`
  font-size: 24px;
  width: 100%;
  position: absolute;
  top: 35%;
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

  @media ${device.tablet} {
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
  color: ${props => props.theme.textColor};
`;

//check the index for wideder pics
function isWide(index) {
  if (index === 3 || index === 6) {
    return true;
  } else {
    return false;
  }
}

function PlantImage(props) {
  return (
    <StyledLink to={`detail/${props.index}`}>
      <ImgOverlay image={props.plantImages}>
        <Overlay>
          <OverlayText>{props.header}</OverlayText>
        </Overlay>
      </ImgOverlay>
    </StyledLink>
  );
}

function Plants(props) {
  return (
    <Wrapper>
      {plantsData.map((plant, index) => {
        const plantImages = require("../img/" + plant.img);
        return (
          <Container isWide={isWide(index)} key={index}>
            <ImageContainer>
              <PlantImage plantImages={plantImages} index={index} header={plant.header} />
            </ImageContainer>
            <SummaryContainer isWide={isWide(index)}>
              <StyledLink to={`detail/${index}`}>
                <NameText>{plant.name}</NameText>
                <SummaryText>{plant.summary}</SummaryText>
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
