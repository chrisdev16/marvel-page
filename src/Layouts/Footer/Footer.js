import { Container, Box } from "@mui/material";
import Motion from "../../Components/Logo/Motion";
import Copyright from "../../Components/Copyright";

const Footer = () => {
  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: "#151515", position: "static" }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          height: "20vh",
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
          }}
        >
          <Motion />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Motion />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
