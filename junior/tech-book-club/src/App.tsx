import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
