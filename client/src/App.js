import React, { useState, useEffect } from "react";

function App(props) {
  let [response, setResponse] = useState({});
  let [postData, setPostData] = useState("");

  const body = { string_to_cut: `${postData}` };

  const fetchFromApi = async () => {
    const reqObj = {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    };

    try {
      const response = await fetch("https://cut-string-lyft.herokuapp.com/test", reqObj);
      const data = await response.json()
      console.log(data)
      setResponse(data)
    } catch (error) {
      console.log(error)
    }
  };

  //useEffect(() => {
  //  fetchFromApi()
  //});

  const handleChange = (e) => {
    setPostData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFromApi()
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={postData}
      ></input>
      <button type="button" onClick={handleSubmit}>
        Fetch Response
      </button>
      <h2>{JSON.stringify(response)}</h2>
    </div>
  );
}

export default App;
