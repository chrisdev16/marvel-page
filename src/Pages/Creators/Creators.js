import { Container, CssBaseline, Grid } from "@mui/material";
import LogoConstruction from "../../Components/Logo/LogoConstruction";
import Motion from "../../Components/Logo/Motion";
import bgImage from "../../Assets/Images/vertical_marvel_bg_image_2.jpg";

const Creators = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: "100vh",
          margin: "0px",
          display: "flex",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
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
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
            <Motion />
          </Grid>
          <Grid item>
            <LogoConstruction />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Creators;
