import {
    createBrowserRouter
  } from "react-router-dom";

import { MainPage } from '../../pages/main-page';
import { NiechanowoPage } from '../../pages/niechanowo';
import { ProchnowoPage } from '../../pages/prochnowo';
import { SzamocinPage } from '../../pages/szamocin';

export const PATH = {
  main: '/',
  niechanowo: '/niechanowo',
  prochnowo: '/prochnowo',
  szamocin: '/szamocin',
}

export const router = createBrowserRouter([
    {
      path: PATH.main,
      element: <MainPage />,
    },
    {
      path: PATH.niechanowo,
      element: <NiechanowoPage />,
    },
    {
      path: PATH.prochnowo,
      element: <ProchnowoPage />,
    },
    {
      path: PATH.szamocin,
      element: <SzamocinPage />,
    },
  ]);