// 
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);
  
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          shadow={true}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" title="General" pagesize='15' country='in' category='general' />} />
          <Route exact path="/Business" element={<News setProgress={setProgress} key="Business" title="Business" pagesize='15' country='in' category='business' />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" title="Entertainment" pagesize='15' country='in' category='entertainment' />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} key="Health" title="Health" pagesize='15' country='in' category='health' />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} key="Science" title="Science" pagesize='15' country='in' category='science' />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} key="Sports" title="Sports" pagesize='15' country='in' category='sports' />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress} key="Technology" title="Technology" pagesize='15' country='in' category='technology' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
