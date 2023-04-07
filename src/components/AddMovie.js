import React from "react";
import { Button, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "./style";

function AddMovie() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.heading} variant="h3">
        Add Movie
      </Typography>
      <form>
      <Box
        className={classes.boxinput}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "65ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Release Date"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Genre" variant="outlined" />
        <TextField id="outlined-basic" label="Run Time" variant="outlined" />
        <TextField id="outlined-basic" label="Rating" variant="outlined" />
        <TextField id="outlined-basic" label="Synopsis" variant="outlined" />
        <TextField id="outlined-basic" label="Director" variant="outlined" />
        <TextField id="outlined-basic" label="Movie Cast" variant="outlined" />
        <Button className={classes.submitbtn} variant="contained" color="primary"> Submit </Button>
      </Box>
      </form>
      
    </>
  );
}

export default AddMovie;
