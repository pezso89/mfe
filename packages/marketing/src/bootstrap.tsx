import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el: Element) => {
  ReactDOM.createRoot(el).render(<App />);
};

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#_marketing-dev-root');
  if (root) {
    mount(root);
  }
}

export { mount };