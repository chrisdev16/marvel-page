import {Box, Container, CssBaseline} from "@mui/material";
import characters_background from "../../Assets/Images/characters_bg.jpg";
import * as React from 'react';
import {BASE_ENDPOINT_URL, MY_AUTH} from "../../Services/Utils";
import axios from "axios";


const Characters = () => {

    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        const URL = `${BASE_ENDPOINT_URL}/v1/public/characters${MY_AUTH}`;
        axios
            .get(URL)
            .then((response) => {
                setCharacters(response.data.data.results);
                console.log(response.data.data.results);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

  return (
      <React.Fragment>
          <CssBaseline />
            <Container maxWidth={false} disableGutters  sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${characters_background})`,
                backgroundSize: "cover",
                minHeight: "350px",
            }}>
                <span>
                <Box  sx={{
                    textAlign: "center",
                }}>
                    <h1 style={{color: "#fff", margin: "0px"}}> MARVEL CHARACTERS </h1>
                </Box>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <h4 style={{color: "#fff",  margin: "2px"}}> Explore & find your favorite marvel characters! </h4>
                </Box>
                    </span>
            </Container>
            <Container maxWidth={false} disableGutters sx={{
                backgroundColor: "#ef233c",
                minHeight: "1000px"
            }} >

            </Container>
      </React.Fragment>
  )
}

export  default Characters;