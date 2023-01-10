import "./App.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Middle from "./components/middle/Middle";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/list/UserList";
import DynamicUserList from "./components/list/DynamicUserList";
import CountriesDynamicList from "./components/list/CountriesDynamicList";

function App() {
  return (
    <div className="App">
      {/*  <Header /> 
      <UserList />
      <DynamicUserList />
      */}
      <CountriesDynamicList />

      {/*  <Navbar />
      <Carousel />
    <Middle />
    <Footer /> */}
    </div>
  );
}

export default App;
