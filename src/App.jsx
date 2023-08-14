import "./App.css";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// eslint-disable-next-line no-unused-vars
import Form from "./components/Form";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <Form />
      
    </>
  );
}

export default App;
