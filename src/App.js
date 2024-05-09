import "./App.css";
import Collapse from "./components/Collapse";
import ImgButton from "./components/ImgButton";
import Tabs from "./components/Tabs";
import VideoEditor from "./components/VideoEditor";
import Breadcrums from "./components/breadcrums/Breadcrums";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[950px] mx-auto">
        <Breadcrums />
        <div className="max-w-[900px] mx-auto">
          <Tabs />
        </div>
        <ImgButton />
        <div className="container mx-auto p-4">
          <h3 className=" text-4xl font-bold bg-gradient-to-r from-gradientFrom to-gradientTo text-transparent bg-clip-text mb-5">
            FAQ
          </h3>
          <div className="max-w-[700px]">
            <Collapse title="can education flashcards be usedfor all groups">
              <p>This is the content of collapse 1.</p>
            </Collapse>
            <Collapse title="how to education flashcards work?">
              <p>This is the content of collapse 2.</p>
            </Collapse>
            <Collapse title="can education flashcards be used for test preparation?">
              <p>This is the content of collapse 3.</p>
            </Collapse>
          </div>
        </div>
        {/* <Collapse/> */}

        {/* <Header/> */}
      </div>
    </>
  );
}

export default App;
