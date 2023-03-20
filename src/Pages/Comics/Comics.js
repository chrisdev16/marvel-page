import { Container, CssBaseline, Grid } from "@mui/material";
import characters_background from "../../Assets/Images/horizontal_marvel_bg_image.jpg";
import bgImage from "../../Assets/Images/vertical_marvel_bg_image_2.jpg";
import LogoConstruction from "../../Components/Logo/LogoConstruction";
import Motion from "../../Components/Logo/Motion";

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
    </div>
  );
};

export default Comics;
