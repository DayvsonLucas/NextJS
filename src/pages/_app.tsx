import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../hooks/auth'
import { Provider } from 'react-redux';
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../store';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </AuthProvider>
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
