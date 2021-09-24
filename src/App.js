import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import FoodContainer from "./Components/Header/FoodContainer/FoodContainer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <FoodContainer />
    </>
  );
}

export default App;
