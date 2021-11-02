import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { PrimaryButton } from "./Buttons";
import { Illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  width: 395px;
  height: 550px;
  padding: 15px;
  box-shadow: 3px 3px 10px ${props => props.theme.cardShadowA}, -3px 0 5px ${props => props.theme.cardShadowB};
  border: 3px solid ${props => props.theme.formElementBackground};
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5px;

  &:hover, &:active, &:focus {
    border-image: linear-gradient(
      to bottom right,
      #b795c9 0%,
      #84a7cc 25%,
      #c4d6a0 50%,
      #efce7a 75%,
      #c9729f 100%
    );
    border-image-slice: 1;
  }
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
  padding-top: 8px;
  border-top: 1px solid ${props => props.theme.textOnFormElementBackground};
`;

const ModalText = styled.p`
  font-size: ${typeScale.paragraph};
  margin: 3px;
  padding: 5px;
`;

const ModalImg = styled.img`
  width: 70%;
`

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  background: none;
  border: none;
  padding: 0;
`

export const ContentModal = () => {
  return (
    <ModalWrapper>
      <CloseModalButton aria-label="Close modal" onClick={() => console.log("You closed the modal!")}>
        <CloseIcon />
      </CloseModalButton>
      <ModalImg src={Illustrations.ModalOne} alt="illustration for card" aria-hidden="true" />
      <ModalHeader>This is the heading of the modal</ModalHeader>
      <ModalText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.
      </ModalText>
      <PrimaryButton>Read more</PrimaryButton>
    </ModalWrapper>
  );
};
