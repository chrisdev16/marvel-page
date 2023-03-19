import { Button, Container, CssBaseline, Grid, TextField } from "@mui/material";
import characters_background from "../../Assets/Images/54702.jpg";

const Search = () => {
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
            backgroundImage: `url(${characters_background})`,
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
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <Grid
              item
              width={"80%"}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                marginTop: "3vh",
                borderRadius: "30px",
              }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder={"Κάντε μία αναζήτηση..."}
                fullWidth
                sx={{ borderRadius: "20%" }}
              >
                <Button variant="contained">Αναζήτηση</Button>
              </TextField>
            </Grid>
          </Grid>
        </Container>
      </>
    </div>
  );
};

export default Search;
