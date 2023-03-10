import { Box, Container, CssBaseline } from "@mui/material";
import marvel_logo from "../../Assets/Images/Marvel-Home-Logo.png";
import ConstructionIcon from "@mui/icons-material/Construction";

const Comics = () => {
  return (
    <div>
      <>
        <CssBaseline />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            minHeight: "1000px",
            margin: "0px",
            display: "flex",
            backgroundColor: "#ED1B24",
            alignItems: "center",
            justifyContent: "center",
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
    </div>
  );
};

export default Comics;
