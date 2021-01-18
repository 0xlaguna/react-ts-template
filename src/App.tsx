import { ErrorBoundary, Header, PageLayout, SideNav } from '@components';
import { CssBaseline, ToastContainer } from '@medly-components/core';
import Routes from '@routes';
import { store } from '@store';
import { ThemeProvider } from '@styled';
import { defaultTheme } from '@theme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <CssBaseline />
        <Router>
          <ErrorBoundary>
            <PageLayout>
              <ToastContainer position="top-end" />
              <SideNav />
              <Header />
              <Routes />
            </PageLayout>
          </ErrorBoundary>
        </Router>
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
