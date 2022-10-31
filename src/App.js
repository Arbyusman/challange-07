import "./assets/styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, SearchPage,PageNotFound } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="Cars" element={<SearchPage />} />
        <Route path="*" exact={true} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
