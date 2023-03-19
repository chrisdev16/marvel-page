import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import * as React from "react";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(237, 27, 36, 1)",
  },
};

const Motion = () => {
  return (
    <Grid
      item
      component={motion.div}
      sx={{
        // borderRadius: "30px",
        width: { xs: "50px", md: "150px" },
        height: { xs: "50px", md: "150px" },
        display: "flex",
        justifyContent: { xs: "end", md: "center" },
        marginRight: { xs: "4px", md: "none" },
        //background: "rgba(255, 255, 255, 0.2)",
        overflow: "hidden",
        placeContent: "center",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{
          width: "56%",
          overflow: "visible",
          stroke: "#ef233c",
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
