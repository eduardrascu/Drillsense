import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@src/themes';
import { GlobalStyle } from './GlobalStyle';
import App from './App';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, fontFamily: 'monospace', color: 'red', background: '#111', minHeight: '100vh' }}>
          <h2>Runtime Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{(this.state.error as Error).message}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12, color: '#aaa' }}>{(this.state.error as Error).stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
