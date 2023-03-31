import Footer from "./Global/Footer";
import Header from "./Global/Header";
import Router from "./Router/Router";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
