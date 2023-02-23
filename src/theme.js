import {createTheme} from "@mui/material";

const myTheme = createTheme({
   components: {
       MuiAppBar: {
           styleOverrides: {
               root: {
                   backgroundColor: "#000",
               }
           }
       }
   }
})

export default createTheme(myTheme);