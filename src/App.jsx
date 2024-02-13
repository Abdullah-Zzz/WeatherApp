import React from "react";
import "./style.css";
import SearchBar from "./components/Search"
import Body from "./components/Body"



function App() {
  const [Input, setInput] = React.useState("karachi");
  const [generateData, setGenerateData] = React.useState(true);

  function settingInput(event) {
    setInput(event.target.value);
  }

  function newInput() {
    setGenerateData((prevValue) => !prevValue);
  }

 

  return (
    <>
      <div className="whole">
        <div className="container">
          <SearchBar 
            userInput={settingInput}
            onClicksearchIcon={newInput}
          />
          <Body 
            ValueToRunEffect={generateData}
            input={Input}
          />

          
        </div>
      </div>
    </>
  );
}

export default App;
