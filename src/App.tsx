import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FestivalDetail from "./pages/Festival/FestivalDetail";
import Search from "./pages/Search/Search";
import Main from "./pages/Main";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import Festival from "./pages/Festival/Festival";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/festival/:id" element={<FestivalDetail />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/*         
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
