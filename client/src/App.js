import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Input
} from "@material-ui/core";
import useStyles from "./styles";

function App(props) {
  let [response, setResponse] = useState({"return_string": ""});
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

  const handleClear = () => {
   setPostData(postData)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={9}>
      <Typography>{JSON.stringify(body)}</Typography>
        <form className={classes.form}>
          <Input
            placeholder="Enter a string"
            fullWidth
            type="text"
            onChange={(e) => handleChange(e)}
            value={postData}
          />
          <Button
            className={classes.submit}
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography variant="h9">(Warning: Response may take a few seconds)</Typography>
          <Button
            className={classes.clear}
            type="clear"
            onClick={handleClear}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Clear
          </Button>
          <Typography className={classes.returnString}>{JSON.stringify(response)}</Typography>
          <Typography variant="h7" >The return_string will be every third <b>letter</b> of string that was submitted.</Typography>
        </form>
      </Paper>
    </Container>
  );
}

export default App;
