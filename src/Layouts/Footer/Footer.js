import { Container, Box } from "@mui/material";
import Motion from "../../Components/Logo/Motion";
import Copyright from "../../Components/Footer/Copyright";

const Footer = () => {
  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: "#151515", position: "static" }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },

          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Motion />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "start",
          height: "15vh",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Box>
          <Motion />
        </Box>
        <Box sx={{ marginLeft: "15px" }}>
          <Copyright />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
