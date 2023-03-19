import { Box, Container, CssBaseline, Grid } from "@mui/material";
import marvel_logo from "../../Assets/Images/Marvel-Home-Logo.png";
import ConstructionIcon from "@mui/icons-material/Construction";
import characters_background from "../../Assets/Images/horizontal_marvel_bg_image.jpg";
import bgImage from "../../Assets/Images/vertical_marvel_bg_image_2.jpg";

const Comics = () => {
  return (
    <div>
      <>
        <CssBaseline />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: {
              xs: `url(${bgImage})`,
              md: `url(${characters_background})`,
            },
            backgroundSize: "cover",
          }}
        >
          <Grid
            container
            direction={"column"}
            sx={{
              minHeight: "120vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              alignContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <span>
              <Box sx={{ mt: 5 }}>
                <img src={marvel_logo} alt={"marvel logo"} />
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5%",
                }}
              >
                <ConstructionIcon fontSize={"large"} />
                <h3 style={{ color: "#000" }}>Site is under Construction</h3>
              </Box>
            </span>
          </Grid>
        </Container>
      </>
    </div>
  );
};

export default Comics;
