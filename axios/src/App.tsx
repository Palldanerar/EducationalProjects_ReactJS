import { useEffect, useState } from "react";
import { getPost } from "./api/requests";

function App() {
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
