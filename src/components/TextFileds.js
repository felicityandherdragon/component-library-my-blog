import React from "react";
import styled from "styled-components";
import { typeScale, primaryFont } from "../utils";

const Input = styled.input`
  width: 316px;
  height: 52px;
  background-color: ${props => props.theme.textFieldBackground};
  border: none;
  padding-left: 8px;
  font-family: ${primaryFont};
  border-radius: 2px;
`;

const Label = styled.label`
  color: ${props => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin-bottom: 8px;
`;

export const EmailInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", }}>
    <Label htmlFor="email">{label}</Label>
    <Input id="email" type="email" placeholder={placeholder} />
  </div>
);

export const NameInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", }}>
    <Label htmlFor="text">{label}</Label>
    <Input id="text" type="text" placeholder={placeholder} />
  </div>
);

export const MessageInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", }}>
    <Label htmlFor="textarea">{label}</Label>
    <Input id="textarea" type="textarea" placeholder={placeholder} />
  </div>
);
