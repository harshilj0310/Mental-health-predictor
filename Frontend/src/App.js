import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat/Chat";
import Questions from "./Components/Questions/Questions";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
