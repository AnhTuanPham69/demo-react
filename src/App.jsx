import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <div>Login</div>
    </div>
  );
}

export default App;
