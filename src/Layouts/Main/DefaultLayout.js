import Header from "../Header/Header";
import { Container } from "@mui/material";
import Footer from "../Footer/Footer";

const DefaultLayout = (props) => {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </>
  );
};

export default DefaultLayout;
