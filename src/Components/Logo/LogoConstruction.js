import { Box, Grid } from "@mui/material";
import marvel_logo from "../../Assets/Images/Marvel-Home-Logo.png";
import ConstructionIcon from "@mui/icons-material/Construction";

const LogoConstruction = () => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        alignContent: { xs: "start", md: "center" },
        justifyContent: { xs: "start", md: "center" },
        marginTop: "15px",
      }}
    >
      <span>
        <Box>
          <img src={marvel_logo} alt={"marvel logo"} />
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ConstructionIcon fontSize={"large"} />
          <h3 style={{ color: "#000" }}>Site is under Construction</h3>
        </Box>
      </span>
    </Grid>
  );
};

export default LogoConstruction;
