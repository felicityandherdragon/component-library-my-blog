import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { typeScale } from '../utils';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { Illustrations, CloseIcon } from '../assets';
import { EmailInput, NameInput, MessageInput } from './TextFileds';

const ModalWrapper = styled.div`
  width: 395px;
  height: 550px;
  padding: 15px;
  box-shadow: 3px 3px 10px ${(props) => props.theme.cardShadowA},
    -3px 0 5px ${(props) => props.theme.cardShadowB};
  border: 3px solid ${(props) => props.theme.formElementBackground};
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5px;

  &:hover,
  &:active,
  &:focus {
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

const LargeModal = styled(ModalWrapper)`
  width: 720px;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
  padding-top: 8px;
  border-top: 1px solid ${(props) => props.theme.textOnFormElementBackground};
`;

const ModalText = styled.p`
  font-size: ${typeScale.paragraph};
  margin: 3px;
  padding: 5px;
`;

const ModalImg = styled.img`
  width: 60%;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  background: none;
  border: none;
  padding: 0;
`;

export const ContentModal = ({ useSmallModal, setUseSmallModal }) => {
  const animation = useSpring({
    opacity: useSmallModal ? 1 : 0,
    transform: useSmallModal ? `translateY(0)` : `translateY(-100%)`,
    config: config.slow,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setUseSmallModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
        <ModalImg
          src={Illustrations.ModalOne}
          alt="illustration for card"
          aria-hidden="true"
        />
        <ModalHeader>This is the heading of the modal</ModalHeader>
        <ModalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
          dictum fusce ut placerat orci nulla pellentesque dignissim enim.
        </ModalText>
        <PrimaryButton>Read more</PrimaryButton>
      </ModalWrapper>
    </animated.div>
  );
};

export const LargeContentModal = ({ useLargeModal, setUseLargeModal }) => {
  const animation = useSpring({
    opacity: useLargeModal ? 1 : 0,
    transform: useLargeModal ? `translateY(0)` : `translateY(-100%)`,
    config: config.slow,
  });

  return (
    <animated.div style={animation}>
      <LargeModal>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setUseLargeModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
        <ModalImg
          src={Illustrations.connection}
          alt="illustration for large card"
          aria-hidden="true"
          style={{ width: '35%' }}
        />
        <div style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
          <ModalHeader>This is the heading of the modal</ModalHeader>
          <NameInput label="Name" placeholder="My Name" />
          <EmailInput label="Email" placeholder="something@test.com" />
          <MessageInput label="Message" placeholder="This is some message" />
          <SecondaryButton>Send</SecondaryButton>
        </div>
      </LargeModal>
    </animated.div>
  );
};
