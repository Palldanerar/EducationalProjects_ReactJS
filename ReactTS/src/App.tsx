import React from "react";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div>
      <Card
        width="200px"
        height="200px"
      >
        <button>Клик</button>
        <div>Save</div>
      </Card>
    </div>
  );
}
