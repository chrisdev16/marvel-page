import {Alert, Box, CircularProgress, Container, CssBaseline, Grid, Stack} from "@mui/material";
import characters_background from "../../Assets/Images/characters_bg.jpg";
import {useEffect, useState} from 'react';
import {BASE_ENDPOINT_URL, MY_AUTH} from "../../Services/Utils";
import axios from "axios";
import CharacterCard from "../../Components/Characters/CharacterCard"

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const URL = `${BASE_ENDPOINT_URL}/v1/public/characters${MY_AUTH}`;
        setIsLoading(true);
        axios
            .get(URL)
            .then((response) => {
                setCharacters(response.data.data.results);
                setIsLoading(false);
            })
            .catch((e) => {
                setError(true);
                setIsLoading(false);
                console.log(e);
            })
    }, [])

    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "50vh",
                }}
            >
                <CircularProgress/>
            </div>
        )
    }

    return (
        <>
            <CssBaseline/>
            <Container maxWidth={false} disableGutters sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${characters_background})`,
                backgroundSize: "cover",
                minHeight: "350px",
            }}>
                <span>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <h1 style={{color: "#fff", margin: "0px"}}> MARVEL CHARACTERS </h1>
                </Box>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <h4 style={{color: "#fff", margin: "2px"}}> Explore & find your favorite marvel characters! </h4>
                </Box>
                    </span>
            </Container>

            <Container maxWidth={false} disableGutters sx={{
                backgroundColor: "#ef233c",
                minHeight: "500px",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",

            }}>
                {error ? (
                    <Stack sx={{width: "100%", mt: "5vh"}} spacing={2}>
                        <Alert variant="outlined" severity="error">
                            There was an error with getting Marvel Characters
                        </Alert>
                    </Stack>
                ) : (
                    <Grid container spacing={2} m={2} direction={"row"}>
                        {characters.map((character) => {
                            return (
                                <Grid item key={character.id} xs={6} sm={4} md={3} lg={3} xl={2}>
                                    <CharacterCard
                                        name={character.name}
                                        image={
                                            `${character.thumbnail.path}.${character.thumbnail.extension}`
                                        }
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </Container>
        </>
    )
}

export default Characters;