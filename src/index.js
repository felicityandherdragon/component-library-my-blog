import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { ContentModal } from './components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  console.log(useDarkTheme);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        style={{
          background: useDarkTheme ? darkTheme.bgColor : defaultTheme.bgColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div style={{
          width: '50vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
            Toggle dark theme
          </button>
          <PrimaryButton>Primary button default</PrimaryButton>
          <PrimaryButton modifiers={['error', 'primaryButtonError']}>
            Primary button error
          </PrimaryButton>
          <PrimaryButton modifiers={['warning', 'primaryButtonWarning']}>
            Primary button warning
          </PrimaryButton>
          <PrimaryButton modifiers={['success', 'primaryButtonSuccess']}>
            Primary button success
          </PrimaryButton>
          <PrimaryButton disabled>Primary button disabled</PrimaryButton>
          <SecondaryButton modifiers="large">
            Secondary button large
          </SecondaryButton>
          <SecondaryButton>Secondary button default</SecondaryButton>
          <SecondaryButton modifiers={['error', 'secondaryButtonError']}>
            Secondary button error
          </SecondaryButton>
          <SecondaryButton modifiers={['warning', 'secondaryButtonWarning']}>
            Secondary button warning
          </SecondaryButton>
          <SecondaryButton modifiers={['success', 'secondaryButtonSuccess']}>
            Secondary button success
          </SecondaryButton>
          <SecondaryButton modifiers="small">
            Secondary button small
          </SecondaryButton>
          <SecondaryButton disabled>Secondary button disabled</SecondaryButton>
          <TertiaryButton>Tertiary button default</TertiaryButton>
        </div>
        <ContentModal />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
