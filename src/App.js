import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Pasta & risotto", value: "Pasta & risotto." },
  { label: "Salad", value: "Salad" },
  { label: "Bread & doughs.", value: "Bread & doughs." },
  { label: "Curry", value: "Curry" },
  { label: "Vegetable sides.", value: "Vegetable sides." },
  { label: "Cereals", value: "Cereals" },
  { label: "Soup", value: "Soup" },
  { label: "Antipasti", value: "Antipasti" },
  { label: "Roast", value: "Roast" },
  { label: "Baked goods.", value: "Baked goods" },
  { label: " Coconut rice.", value: " Coconut rice." },
  { label: "Pepper rice.", value: "Pepper rice." },
  { label: " Lentil rice.", value: " Lentil rice." },
  { label: "Curry leaves rice.", value: "Curry leaves rice." },
  { label: "Ghee rice.", value: "Ghee rice." },
  { label: "Mutton biriyani", value: "Mutton biriyani" },
  { label: "Chicken Biriyani", value: "Chicken Biriyani" },
  { label: "Prawn biriyani", value: "Prawn biriyani" },
  { label: "beaf biriyani", value: "beaf biriyani" },
  { label: "Fish biriyani", value: "Fish biriyani" },
  { label: "Egg biriyani", value: "Egg biriyani" },
  { label: "Chicken 65", value: "Chicken 65" },
  { label: "Mango ", value: "mango" },
  { label: "Strawberry ", value: "strawberry" },
  { label: "Grapes ", value: "grapes" },
  { label: "banana ", value: "banana" },
  { label: "fries ", value: "fries" },
  { label: "peri peri fries ", value: "peri peri fries" },
  { label: "chessy balls ", value: "chessy balls" },
  { label: "pizza ", value: "pizza" },
  { label: "burger ", value: "burger" },
  { label: "egg masala ", value: "egg masala" },
  { label: "fish fries ", value: "fish fries" },
];

const App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Select your favourite menu</h1>
      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "90%", margin: "10px" }}>
          <MultiSelect
            options={options.sort()}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
        <div style={{ width: "20%", margin: "10px" }}>
          <button
            style={{
              height: "100%",
              color: "white",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => (window.location = "mailto:priyavel7358@gmail.com")}
          >
            Send mail
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
