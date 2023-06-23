import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const App = () => {
  const [selected, setSelected] = useState([]);

  const [options, setOptions] = useState([
    { id: 1, label: "Pasta & risotto", value: "Pasta & risotto." },
    { id: 2, label: "Salad", value: "Salad" },
    { id: 3, label: "Bread & doughs.", value: "Bread & doughs." },
    { id: 4, label: "Curry", value: "Curry" },
    { id: 5, label: "Vegetable sides.", value: "Vegetable sides." },
    { id: 6, label: "Cereals", value: "Cereals" },
    { id: 7, label: "Soup", value: "Soup" },
    { id: 8, label: "Antipasti", value: "Antipasti" },
    { id: 9, label: "Roast", value: "Roast" },
    { id: 10, label: "Baked goods.", value: "Baked goods" },
    { id: 11, label: " Coconut rice.", value: " Coconut rice." },
    { id: 12, label: "Pepper rice.", value: "Pepper rice." },
    { id: 13, label: " Lentil rice.", value: " Lentil rice." },
    { id: 14, label: "Curry leaves rice.", value: "Curry leaves rice." },
    { id: 15, label: "Ghee rice.", value: "Ghee rice." },
    { id: 16, label: "Mutton biriyani", value: "Mutton biriyani" },
    { id: 17, label: "Chicken Biriyani", value: "Chicken Biriyani" },
    { id: 18, label: "Prawn biriyani", value: "Prawn biriyani" },
    { id: 19, label: "beaf biriyani", value: "beaf biriyani" },
    { id: 20, label: "Fish biriyani", value: "Fish biriyani" },
    { id: 21, label: "Egg biriyani", value: "Egg biriyani" },
    { id: 22, label: "Chicken 65", value: "Chicken 65" },
    { id: 23, label: "Mango ", value: "mango" },
    { id: 24, label: "Strawberry ", value: "strawberry" },
    { id: 25, label: "Grapes ", value: "grapes" },
    { id: 26, label: "banana ", value: "banana" },
    { id: 27, label: "fries ", value: "fries" },
    { id: 28, label: "peri peri fries ", value: "peri peri fries" },
    { id: 29, label: "chessy balls ", value: "chessy balls" },
    { id: 30, label: "pizza ", value: "pizza" },
    { id: 31, label: "burger ", value: "burger" },
    { id: 32, label: "egg masala ", value: "egg masala" },
    { id: 33, label: "fish fries ", value: "fish fries" },
    { id: 34, label: "White rice.", value: "White rice." },
    { id: 35, label: "Mutton fry", value: "Mutton fry" },
    { id: 36, label: "Chicken fry", value: "Chicken fry" },
    { id: 37, label: "Prawn fry", value: "Prawn fry" },
    { id: 38, label: "beaf fry", value: "beaf fry" },
    { id: 39, label: "Fish fry", value: "Fish fry" },
    { id: 40, label: "Egg fry", value: "Egg fry" },
    { id: 41, label: "Thandhoori", value: "Thandhoori" },
    { id: 42, label: "kebab ", value: "kebab" },
    { id: 43, label: "bbq ", value: "bbq" },
    { id: 44, label: "atho ", value: "atho" },
    { id: 45, label: "smoothi ", value: "smoothi" },
    { id: 46, label: " mango milkshake ", value: " mango milkshake" },
    { id: 47, label: "peri cheesy fries ", value: "peri cheesy fries" },
    { id: 48, label: "potato chessy balls ", value: "potato chessy balls" },
    { id: 49, label: "Chicken pizza ", value: " Chicken pizza" },
    { id: 50, label: "Chicken burger ", value: "Chickenburger" },
  ]);

  const numAscending = [...selected].sort((a, b) => (a.id > b.id ? 1 : -1));

  const selectChange = (val) => {
    let change = [...val].map((ele) => JSON.stringify(ele));

    const filteredOptions = [...options] // duplicate options
    .filter((e) => {
      // converting option item to string for compare
      return !change.includes(JSON.stringify(e))
    })
    let initial = [
      ...val,
      ...filteredOptions,
    ];
    setOptions(initial);
    setSelected(val);
  };

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
            options={options}
            value={numAscending}
            onChange={selectChange}
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
            onClick={() => {
              const stuffs = selected
                .map((e) => String(e.label).replace("&", "and"))
                .join(", ");
              let val =
                `mailto:priyavel7358@gmail.com?subject=Ordered Menu!&body=Hi! Priya, I would like to order the these items!....` +" " +
                stuffs;
              window.location = val;
            }}
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

