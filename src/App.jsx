import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  Clients,
  Services,
  About,
  Testimonial,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Clients />
          <Services />
          <About />
          <Testimonial />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
