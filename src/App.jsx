import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrimaryClasses from "./pages/PrimaryClasses";
import SecondryClasses from "./pages/SecondryClasses";
import AddData from "./components/SecondryClasses/AddData";
import UserData from "./components/SecondryClasses/UserData";
import EditData from "./components/SecondryClasses/EditData";
import AddData1 from "./components/PrimaryClasses/AddData";
import UserData1 from "./components/PrimaryClasses/UserData";
import EditData1 from "./components/PrimaryClasses/EditData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secondryClsses" element={<SecondryClasses />} />
          <Route path="/secondryClsses/addData" element={<AddData />} />
          <Route path="/secondryClsses/userData/:id" element={<UserData />} />
          <Route path="/secondryClsses/updateData/:id" element={<EditData />} />
          <Route path="/PrimaryClasses" element={<PrimaryClasses />} />
          <Route path="/PrimaryClasses/addData" element={<AddData1 />} />
          <Route path="/PrimaryClasses/userData/:id" element={<UserData1 />} />
          <Route
            path="/PrimaryClasses/updateData/:id"
            element={<EditData1 />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
