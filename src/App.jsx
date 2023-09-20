import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import "./App.css";
import Header from "./components/header/header";
import Registration from "./components/loginform/components/registr/RegistrationForm";
import Verification from "./components/loginform/components/verify/Verify";
import Login from "./components/loginform/components/login/LoginForm";
import MyAccount from "./components/loginform/components/user/User";
import { useState } from "react";

export default function App({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="reg"
          element={<Registration data={data} handleChange={handleChange} />}
        />
        <Route path="verify" element={<Verification />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<MyAccount />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
