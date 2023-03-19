import {
  Alert,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import characters_background from "../../Assets/Images/characters_bg.jpg";
import { useEffect, useState } from "react";
import { BASE_ENDPOINT_URL, MY_AUTH } from "../../Services/Utils";
import axios from "axios";
import CharacterCard from "../../Components/Characters/CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const URL = `${BASE_ENDPOINT_URL}/v1/public/characters${MY_AUTH}&offset=${offset}`;
    setIsLoading(true);
    axios
      .get(URL)
      .then((response) => {
        const res = response.data.data;
        setCharacters(res.results);
        setOffset(res.offset + res.count);
        setPageCount(Math.ceil(res.total / res.count));
        setIsLoading(false);
        console.log(res.results);
      })
      .catch((e) => {
        setError(true);
        setIsLoading(false);
        console.log(e);
      });
    // eslint-disable-next-line
  }, [currentPage]);

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
        <CircularProgress />
      </div>
    );
  }

  const handleChange = (e, value) => {
    setCurrentPage(value);
    setOffset((value - 1) * 20);
    console.log("currentPage pushed: " + currentPage);
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${characters_background})`,
          backgroundSize: "cover",
          minHeight: "350px",
        }}
      >
        <span>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "#fff", margin: "0px" }}>
              {" "}
              MARVEL CHARACTERS{" "}
            </h1>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <h4 style={{ color: "#fff", margin: "2px" }}>
              {" "}
              Explore & find your favorite marvel characters!{" "}
            </h4>
          </Box>
        </span>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {error ? (
          <Stack sx={{ width: "100%", mt: "5vh" }} spacing={2}>
            <Alert variant="outlined" severity="error">
              There was an error with getting Marvel Characters
            </Alert>
          </Stack>
        ) : (
          <Grid container spacing={1} m={1} direction={"row"}>
            {characters.map((character) => {
              return (
                <Grid
                  item
                  key={character.id}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                >
                  <CharacterCard
                    name={character.name}
                    image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    id={character.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
      <Box
        mt={5}
        mb={5}
        display={"flex"}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Pagination
          variant="outlined"
          count={pageCount}
          onChange={handleChange}
          page={currentPage}
        />
      </Box>
    </>
  );
};

export default Characters;
