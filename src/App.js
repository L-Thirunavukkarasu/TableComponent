import "./App.css";
import TableCustom from "./components/basicTable";
import TableSort from "./components/tableSort";
import TableRadioBtn from "./components/tableRadioBtn";
import TableCheckBox from "./components/tableCheckBox";

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <p>1.Basic Table Component</p>
      </header>
      <TableCustom />
      <header className="appHeader">
        <p>2.Sorting Table Component</p>
      </header>
      <TableSort />
      <header className="appHeader">
        <p>3.Radio button Table Component</p>
      </header>
      <TableRadioBtn />
      <header className="appHeader">
        <p>4.Checkbox Table Component</p>
      </header>
      <TableCheckBox />
    </div>
  );
}

export default App;
