import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />/
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      {/* <Login path="/" /> */}
    </div>
  );
}

export default App;
