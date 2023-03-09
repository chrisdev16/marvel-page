import NavigationBar from "../Header/NavigationBar";
import {Container} from "@mui/material";

const DefaultLayout = (props) => {
  return (
      <>
        <NavigationBar />
        <Container maxWidth={false} disableGutters >{props.children}</Container>
      </>
  )
}

export  default DefaultLayout;