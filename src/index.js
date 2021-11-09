import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { ContentModal, LargeContentModal } from './components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [useLargeModal, setUseLargeModal] = useState(false);
  const [useSmallModal, setUseSmallModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        style={{
          background: useDarkTheme ? darkTheme.bgColor : defaultTheme.bgColor,
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            width: '40vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
            Toggle dark theme
          </button>
          <PrimaryButton label='primary button default' />
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
        <div
          style={{ width: '60vw', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top:'10px' }}>
            <button
              onClick={() => setUseSmallModal(!useSmallModal)}
              style={{ marginBottom: '10px' }}
            >
              Small card
            </button>
            <button
              onClick={() => setUseLargeModal(!useLargeModal)}
              style={{ marginBottom: '10px' }}
            >
              Large card
            </button>
          </div>
          {useSmallModal && (
            <ContentModal
              useSmallModal={useSmallModal}
              setUseSmallModal={setUseSmallModal}
            />
          )}
          {useLargeModal && (
            <LargeContentModal
              useLargeModal={useLargeModal}
              setUseLargeModal={setUseLargeModal}
            />
          )}
        </div>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
