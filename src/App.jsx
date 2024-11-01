import "./App.css";
import ClintInfo from "./Components/ClintInfo";
import Footer from "./Components/Footer";
import FooterConnect from "./Components/fotter-connect";
import LatestWork from "./Components/latestWork";

import MidSection from "./Components/midSection";
import SlideBar from "./Components/slider";

function App() {
  return (
    <>
      <div className="bg-[#111] text-white m-0 p-0 h-screen">
        <MidSection />
        <LatestWork />
        <ClintInfo />
        <SlideBar />
        <FooterConnect />
        <Footer />
      </div>
    </>
  );
}

export default App;
