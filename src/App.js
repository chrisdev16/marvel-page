import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Creators from "./Pages/Creators";
import Comics from "./Pages/Comics";

function App() {
  return (
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/comics" element={<Comics />} />
          </Routes>
        </DefaultLayout>
      </Router>

  );
}

export default App;
