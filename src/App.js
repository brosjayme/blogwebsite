import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import { selectSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
