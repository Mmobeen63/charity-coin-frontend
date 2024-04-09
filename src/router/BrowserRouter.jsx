import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import CookiesPolicy from '../pages/CookiesPolicy'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route  element={<HomePage />} path="/" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<CookiesPolicy />} path="/cookies-policy" />
    </Routes>
    </BrowserRouter>
  );
}

export default Router