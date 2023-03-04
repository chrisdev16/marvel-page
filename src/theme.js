import {createTheme} from "@mui/material";

const myTheme = createTheme({
   components: {
       MuiAppBar: {
           styleOverrides: {
               root: {
                   backgroundColor: "#151515",
               }
           }
       }
   }
})

export default createTheme(myTheme);