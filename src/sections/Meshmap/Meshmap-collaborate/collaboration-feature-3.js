import React from "react";
import styled from "styled-components";
import WorldImg from "./images/world-image.svg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const CollaborationFeatureWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.DarkTheme ? "#121212" : "fff"};;
    max-width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5% 8%;
    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 40%;
        max-width: 40%;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }
    }

    h2 {
      span {
        color: #00b39f;
      }
    }

    .hero-image {
      flex: 0 0 50%;
      max-width: 50%;
    }

    img {
      opacity: 0;
    }

    .visible {
      opacity: 1;
      transition: opacity ease-in 0.5s;
    }

`;

const CollaborationFeature3 = () => {
  const [locatorRef, inView] = useInView({ threshold: 1.0 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  // else if (!inView && imageInView)
  // setimageInView(false);

  return (
    <CollaborationFeatureWrapper>
      <div className="hero-image">
        <img className={imageInView ? "visible" : ""} src={WorldImg} alt="" ref={locatorRef} />
      </div>
      <div className="hero-text">
        <h2><span>Collaborate with your Team</span></h2>
        <p>Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.</p>
      </div>
    </CollaborationFeatureWrapper>

  );
};

export default CollaborationFeature3;