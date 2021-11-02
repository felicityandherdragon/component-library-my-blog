import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
// import { defaultTheme } from '../utils';
import { typeScale } from '../utils';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header4};
    padding: 16px 24px;
  `,
  warning: (props) => `
    background: none;
    color: ${props.theme.status.warningColorHover};
    box-shadow: none;
    transition: box-shadow 0.5s linear;
    &:hover, &:focus {
      color: ${props.theme.textColorInverted};
      box-shadow: inset 20px -5px 91px 6px ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
      box-shadow:none;
    }
  `,
  primaryButtonWarning: (props) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
    box-shadow: none;
  `,
  secondaryButtonWarning: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
    background-color: ${props.theme.secondaryColor};
    color: ${props.theme.status.warningColor};
    box-shadow: none;

    &:hover, &:focus, &:active {
      box-shadow: inset 20px -5px 91px 6px ${props.theme.status.warningColorHover};
      color: ${props.theme.textColorInverted};
    }
  `,
  error: (props) => `
    background: none;
    color: ${props.theme.status.errorColor};
    box-shadow: none;
    transition: box-shadow 0.5s linear;
    &:hover, &:focus {
      box-shadow: inset 20px -5px 91px 6px ${props.theme.status.errorColorHover};
      color: ${props.theme.textColorInverted};
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
      box-shadow: none;
    }
  `,
  primaryButtonError: (props) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
    box-shadow: none;
  `,
  secondaryButtonError: (props) => `
    border: 2px solid ${props.theme.status.errorColor};
    box-shadow:none;
    background-color: ${props.theme.secondaryColor};
  `,
  success: (props) => `
    background: none;
    color: ${props.theme.status.successColor};
    box-shadow: none;
    transition: box-shadow 0.5s linear;
    &:hover, &:focus {
      box-shadow: inset 20px -5px 91px 6px ${props.theme.status.successColorHover};
      color: ${props.theme.textColorInverted};
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
      box-shadow: none;
    }
  `,
  primaryButtonSuccess: (props) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
    box-shadow:none;
  `,
  secondaryButtonSuccess: (props) => `
    border: 2px solid ${props.theme.status.successColor};
    box-shadow:none;
    background-color: ${props.theme.secondaryColor};
  `,
};

const Button = styled.button`
  font-family: ${props => props.theme.primaryFont};
  font-size: ${typeScale.paragraph};
  border: 2px solid;
  min-width: 180px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: none;
  justify-content: center;
  margin: 5px;
  transition: box-shadow 0.5s linear;

  &:hover {
    box-shadow: inset 20px -5px 91px 6px ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:focus {
    box-shadow: inset 20px -5px 91px 6px ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    box-shadow: inset 20px -5px 91px 6px ${props => props.theme.primaryActiveColor};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textColorOnDisabled};
    border: 2px solid ${props => props.theme.textColorOnDisabled};
  }
`;

export const PrimaryButton = styled(Button)`
  color: ${props => props.theme.textColorOnPrimary};
  border: none;
  background-color: ${props => props.theme.primaryColor};

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textColorOnDisabled};
    border: none;
    box-shadow: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${props => props.theme.textColorOnDisabled};
    border: 2px solid ${props => props.theme.textColorOnDisabled};
    box-shadow: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  color: ${props => props.theme.textColor};
  border: none;
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  border-radius: 0;
  background: none;

  &:hover {
    box-shadow: none;
  }

  &:disabled {
    border: none;
    background: none;
    text-decoration: none;
    box-shadow: none;
    border: 2px solid ${props => props.theme.textColorOnDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
