import React from 'react'
import App from './App';
import {ResetCSS} from "./global/ResetCSS"
import GithubProvider from './providers/github-provider';

function Providers() {
  return (
      <main>
          <GithubProvider>
              <ResetCSS />
              <App />
          </GithubProvider>
      </main>
  );
}

export default Providers