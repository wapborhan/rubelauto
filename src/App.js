import logo from "./logo.svg";
import "./App.css";
import DATA from "./assets/data/va.json";
import { useState } from "react";

function App() {
  const [data, SetData] = useState(DATA);
  return (
    <div className="App">
      <table border="1">
        <thead>
          <tr>
            <th>SL</th>
            <th>Sale Date</th>
            <th>Name</th>
            <th>Card</th>
            <th>Mobile</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            console.log(item);
            return (
              <tr key={item.sl}>
                <td>{item.sl}</td>
                <td>{item.salesdate}</td>
                <td>{item.name}</td>
                <td>{item.card}</td>
                <td>{item.mobile}</td>
                <td>{item.model}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
