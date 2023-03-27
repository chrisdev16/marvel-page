import { Box, Divider, Stack, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box
      sx={{
        height: "5vh",
        display: { xs: "none", md: "flex" },
        alignContent: "center",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "end",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        divider={<Divider orientation="vertical" flexItem color={"#fff"} />}
        sx={{
          color: "#FFF",
        }}
      >
        <Typography>Copyright &copy; 2023</Typography>
        <Typography>Marvel-App</Typography>
        <Typography>Created by Chris Charistos</Typography>
        <Typography> All rights reserved. </Typography>
      </Stack>
    </Box>
  );
};

export default Copyright;
