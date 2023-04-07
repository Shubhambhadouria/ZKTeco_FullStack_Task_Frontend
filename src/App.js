import "./App.css";
import ListAllMovies from "./components/ListAllMovies";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import {About} from '../src/components/About'
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" Component={ListAllMovies} />
        <Route path="/about" Component={About} />
        <Route path="/addmovie" Component={AddMovie} />
        <Route path="/updatemovie" Component={UpdateMovie} />
      </Routes>

      {/* <ListAllMovies /> */}
    </div>
  );
}

export default App;
