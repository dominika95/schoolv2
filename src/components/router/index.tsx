import {
    createBrowserRouter
  } from "react-router-dom";

import {MainPage} from '../../pages/main-page'
import App from '../../pages/App/App'

export const PATH = {
  app: '/',
  main: '/main',
}

export const router = createBrowserRouter([
    {
        path: PATH.app,
        element: <App />,
    },
    {
      path: PATH.main,
      element: <MainPage />,
    },
  ]);