import "./App.css";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// eslint-disable-next-line no-unused-vars
import Form from "./components/Form";
import Footer2 from "./components/Footer2";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <Form />
      <Footer2/>
    </>
  );
}

export default App;
