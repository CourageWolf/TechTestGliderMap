import React, { useState, useEffect } from "react";

export default function Question1(props) {
  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(1337);

  useEffect(() => {
    if (title.length < 0) {
      setError("You need to enter a title!");
    }
  }, [title]);

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      data: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((e) => console.log(error));
  };

  return (
    <div>
      <div>
        <div>Title:</div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <div>Body:</div>
        <input type="text" onChange={(e) => setBody(e.target.value)} />
      </div>

      <div>
        <div>UserId:</div>
        <select onChange={(e) => setUserId(e.target.value)}>
          <option>1337</option>
          <option>1234</option>
          <option>1066</option>
        </select>
      </div>

      <div>{error}</div>

      <button onClick={handleSubmit} style={{ margin: 10 }}>
        Submit
      </button>
    </div>
  );
}
