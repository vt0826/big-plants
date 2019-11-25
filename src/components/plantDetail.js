import React, { useState, useEffect } from "react";
//style components
import styled from "styled-components";
//import constant
import { device } from "../constant/device";
// data
import plantsData from "../data/plants.json";

//styles
const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 120px;
  @media ${device.tablet} {
    padding: 250px 64px;
  }
`;
const ImageContainer = styled.article`
  flex-basis: 100%;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
`;

const Img = styled.div`
  background-image: url(${props => props.image});
  height: 250px;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media ${device.tablet} {
    height: auto;
    padding-bottom: 100%;
  }
`;
const SummaryContainer = styled.article`
  flex-basis: 100%;
  padding: 0 20px;
  margin: 0;
  @media ${device.tablet} {
    margin-top: 40px;
    flex-basis: 40%;
    padding: 0 40px;
  }
`;

const Form = styled.form`
  display: flex;

  margin-top: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
const StyledTextarea = styled.textarea`
  border: 1px solid #000;
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  padding: 0 20px;
  width: 100%;
  :focus {
    border: 3px solid #555;
  }
`;
const Button = styled.button`
  margin-top: 20px;
  border: 1px solid #000;
  width: 100px;
  cursor: pointer;
  background-color: ${props => (props.textEmpty ? props.theme.button : props.theme.buttonHover)};
  color: ${props => (props.textEmpty ? props.theme.textColor : props.theme.textHover)};
`;
const LabelComment = styled.h5`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
`;

const LabelName = styled.h3`
  font-size: 28px;
  padding: 0 20px;
  margin: 0;
  line-height: 1.5;
  @media ${device.tablet} {
    padding: 0;
  }
`;
const LabelHeader = styled(LabelName)`
  padding: 0;
`;

const LabelDetail = styled.p`
  font-size: 16;
  font-weight: 300;
  line-height: 1.5;
`;
const CommentContainer = styled.div`
  margin-top: 12px;
  height: 300px;
  overflow: auto;
`;
const Comments = styled.div`
  margin-top: 8px;
  background-color: ${props => props.theme.commentBackgroundColor}

  padding: 20px 20px;
`;

function CommentsDisplay(props) {
  return (
    <CommentContainer>
      <h5> Comments</h5>
      {props.comments.map(comment => {
        return <Comments>{comment}</Comments>;
      })}
    </CommentContainer>
  );
}

function PlantDetail(props) {
  const [plant] = useState(plantsData[props.plantId]);
  const [plantImage, setPlantImage] = useState("");
  const [textEmpty, setTextEmpty] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(plantsData[props.plantId].comments);

  // check if comment input field is empty
  useEffect(() => {
    comment ? setTextEmpty(false) : setTextEmpty(true);
  }, [comment]);

  //require image first from the data recieved.
  useEffect(() => {
    setPlantImage(require("../img/" + plant.img));
  }, [plant]);

  //submit the coement and reset the input field.
  const handleSubmit = e => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  if (plant) {
    return (
      <Wrapper>
        <ImageContainer>
          <Img image={plantImage} />
          <LabelName>{plant.name}</LabelName>
        </ImageContainer>
        <SummaryContainer>
          <LabelHeader>{plant.header}</LabelHeader>
          <LabelDetail>{plant.detail}</LabelDetail>
          <LabelComment>Leave a comment:</LabelComment>
          <Form onSubmit={handleSubmit}>
            <StyledTextarea
              rows="4"
              cols="50"
              onChange={e => {
                setComment(e.target.value);
              }}
              value={comment}
              placeholder={`ask about the ${plant.name}`}
            ></StyledTextarea>
            <Button textEmpty={textEmpty}>
              <h3> Send</h3>
            </Button>
          </Form>

          {comments.length ? <CommentsDisplay comments={comments} /> : null}
        </SummaryContainer>
      </Wrapper>
    );
  } else {
    return null;
  }
}

export { PlantDetail };
