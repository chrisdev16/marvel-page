import NavigationBar from "./NavigationBar";
import {Container} from "@mui/material";

const DefaultLayout = (props) => {
  return (
      <>
        <NavigationBar />
        <Container>{props.children}</Container>
      </>
  )
}

export  default DefaultLayout;