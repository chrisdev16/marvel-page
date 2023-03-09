import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/Main/DefaultLayout";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Creators from "./Pages/Creators/Comics";
import Comics from "./Pages/Comics/Comics";
import Characters from "./Pages/Characters/Characters";
import {ThemeProvider} from "@mui/material";
import theme from "./Assets/Styles/theme";


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
