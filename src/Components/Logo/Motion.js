import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import * as React from "react";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(237, 27, 36, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Motion = () => {
  return (
    <Grid
      item
      component={motion.div}
      sx={{
        // borderRadius: "30px",
        width: { xs: "50px", md: "100px" },
        height: { xs: "50px", md: "100px" },
        display: "flex",
        justifyContent: { xs: "center", md: "center" },
        marginRight: { xs: "4px", md: "none" },
        overflow: "hidden",
        placeContent: "center",
        backgroundColor: "#ED1B24",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{
          width: "70%",
          overflow: "visible",
          stroke: "#fff",
          strokeWidth: 5,
          strokeLinejoin: "round",
          strokeLinecap: "round",
        }}
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </Grid>
  );
};

export default Motion;
