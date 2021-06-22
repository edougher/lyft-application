import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Input,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";

function App(props) {
  let [response, setResponse] = useState({});
  let [postData, setPostData] = useState("");
  let classes = useStyles();

  const body = { string_to_cut: `${postData}` };

  const fetchFromApi = async () => {
    const reqObj = {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(
        "https://cut-string-lyft.herokuapp.com/test",
        reqObj
      );
      const data = await response.json();
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setPostData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFromApi();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
      <Typography>{JSON.stringify(body)}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input
            placeholder="Enter a string"
            fullWidth
            type="text"
            onChange={(e) => handleChange(e)}
            value={postData}
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography>{JSON.stringify(response)}</Typography>
        </form>
      </Paper>
    </Container>
  );
}

export default App;
