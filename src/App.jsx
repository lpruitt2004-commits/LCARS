import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./lcars.css";

const LCARSLayout = lazy(() => import("./components/LCARSLayout"));
const Landing = lazy(() => import("./pages/Landing"));
const Encyclopedia = lazy(() => import("./pages/Encyclopedia"));
const Article = lazy(() => import("./pages/Article"));

const App = () => (
  <Router>
    <Suspense fallback={<div className="lcars-loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<LCARSLayout />}>
          <Route index element={<Landing />} />
          <Route path="encyclopedia" element={<Encyclopedia />} />
          <Route path="article/:id" element={<Article />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
