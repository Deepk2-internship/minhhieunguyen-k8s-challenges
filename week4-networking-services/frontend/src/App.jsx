import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/data`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend (React + Vite)</h1>
      <h2>Response from backend:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;