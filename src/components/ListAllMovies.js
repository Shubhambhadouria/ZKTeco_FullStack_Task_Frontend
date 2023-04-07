import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Link,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MovieService from "../services/MovieService";
import useStyles from "./style";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ListAllMovies() {
  // const [id, setId] = useState("");
  // const [title, setTitle] = useState("");
  // const [releaseDate, setReleaseDate] = useState("");
  // const [genre, setGenre] = useState("");
  // const [runTime, setRuntime] = useState("");
  // const [rating, setRating] = useState("");
  // const [synopsis, setSynopsis] = useState("");
  // const [director, setDirector] = useState("");
  // const [moviecast, setMoviecast] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [createdAt, setCreatedAt] = useState("");
  // const [updatedAt, setUpdatedAt] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getMovies()
      .then((res) => {
        setMovies(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();

  return (
    <>
      <main
        style={{
          backgroundImage:
            "url(https://cdn.rohde-schwarz.com.cn/pws/solution/electronic_design/catv-doc-electronic-design-rohde-schwarz_w1920_hX.jpg)",
          backgroundSize: "cover", // or "contain"
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link href="/addmovie">
          <Button
            className={classes.addbtn}
            variant="contained"
            color="primary"
          >
            Add Movie
          </Button>
        </Link>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {movies.map((data) => (
              <Grid item key={data.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`data:image/jpeg;base64,${data.photo}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.movtitle}
                      align="left"
                      variant="h5"
                    >
                      {data.title}
                    </Typography>
                    <Typography className={classes.movsynop} align="left">
                      {data.synopsis}
                    </Typography>
                    <Typography className={classes.movgen} align="left">
                      {data.genre}
                    </Typography>
                    <Typography className={classes.movrat} align="left">
                      IMDb {data.rating}
                    </Typography>
                    <Typography className={classes.movrel} align="left">
                      {data.releaseDate}
                    </Typography>
                    <Typography className={classes.movrun} align="left">
                      {data.runTime} min
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardaction}>
                    <Link href="/updatemovie">
                    <Button
                      variant="contained"
                      size="medium"
                      align="flex-end"
                      color="primary"
                    >
                      Edit
                    </Button>
                    </Link>
                    
                    <Button variant="contained" size="medium" color="secondary">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default ListAllMovies;
