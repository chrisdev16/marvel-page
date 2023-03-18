import NavigationBar from "../Header/NavigationBar";
import { Container } from "@mui/material";

const DefaultLayout = (props) => {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <NavigationBar />
        {props.children}
      </Container>
    </>
  );
};

export default DefaultLayout;
