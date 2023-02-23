import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Creators from "./Pages/Creators";
import Comics from "./Pages/Comics";
import Characters from "./Pages/Characters";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";


function App() {
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <DefaultLayout>
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/search" element={<Search />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/creators" element={<Creators />} />
                </Routes>
              </DefaultLayout>
          </ThemeProvider>
      </Router>

  );
}

export default App;
