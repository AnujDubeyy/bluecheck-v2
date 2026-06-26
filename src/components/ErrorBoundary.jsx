import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          backgroundColor: '#1e1e1e',
          color: '#ff6b6b',
          fontFamily: 'monospace',
          minHeight: '100vh',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>🚨 React Rendering Error Caught</h1>
          <div style={{ background: '#2d2d2d', padding: '15px', borderRadius: '6px', marginBottom: '20px' }}>
            <strong>Error:</strong> {this.state.error ? this.state.error.toString() : 'Unknown Error'}
          </div>
          {this.state.errorInfo && (
            <div>
              <strong>Component Stack:</strong>
              <pre style={{ background: '#2d2d2d', padding: '15px', borderRadius: '6px', color: '#abb2bf', overflowX: 'auto', marginTop: '10px' }}>
                {this.state.errorInfo.componentStack}
              </pre>
            </div>
          )}
          {this.state.error && this.state.error.stack && (
            <div style={{ marginTop: '20px' }}>
              <strong>Error Stack:</strong>
              <pre style={{ background: '#2d2d2d', padding: '15px', borderRadius: '6px', color: '#abb2bf', overflowX: 'auto', marginTop: '10px' }}>
                {this.state.error.stack}
              </pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
