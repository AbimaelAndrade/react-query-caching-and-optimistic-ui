import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Caching and optimistic ui with React Query</h1>
      </header>
    </div>
  );
}

export default App;
