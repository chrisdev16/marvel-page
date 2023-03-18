import { Container, Box, CssBaseline } from "@mui/material";
import marvel_logo from "../../Assets/Images/Marvel-Home-Logo.png";
import ConstructionIcon from "@mui/icons-material/Construction";
import bgImage from "../../Assets/Images/vertical_marvel_bg_image_2.jpg";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: "1000px",
          margin: "0px",
          display: "flex",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.7,
        }}
      >
        <span>
          <Box>
            <img src={marvel_logo} alt={"marvel logo"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ConstructionIcon fontSize={"large"} />
            <h3 style={{ paddingLeft: "5px" }}>Site is under Construction</h3>
          </Box>
        </span>
      </Container>
    </>
  );
};

export default Home;
