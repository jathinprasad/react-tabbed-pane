import { useState } from "react";
import TabForm from "./components/TabForm.js";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    name: "Jathin",
    email: "jathinprasad@gmail.com",
    age: 30,
    interests: ["cricket", "football"],
    theme: "dark",
  });

  return (
    <div className="App">
      <TabForm data={data} setData={setData} />
    </div>
  );
}
