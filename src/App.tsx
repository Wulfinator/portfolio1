import { Suspense, lazy } from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
// import Testimonial from "./components/Testimonial";
import { Routes, Route } from "react-router-dom";

const Impressum = lazy(() => import("./components/Impressum"));

function App() {
  return (
    <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Feature />
                  <Projects />
                  <Resume />
                  {/* <Testimonial /> */}
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/impressum" element={
              <Suspense fallback={<div>Loading...</div>}>
                <Impressum />
              </Suspense>
            } />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
