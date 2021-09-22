import React, { Component} from 'react';

class AppErrorBoundary extends Component {
  
    state = { error: false, errorMessage: '' };
  
    static getDerivedStateFromError(error:string) {
      return { error: true, errorMessage: error.toString() };
    }
  
    componentDidCatch(error:any, errorInfo:object) {
      console.log({ error, errorInfo });
    }
  
    render() {
      const { error, errorMessage } = this.state;
      const { children } = this.props;
  
      return error ? <div>{`An error has occured: ${error}`}</div> : children;
    }
  }

  export default AppErrorBoundary;