import "./App.css";
import Slider from "./components/Slider/Slider";
function App() {
  const images = [
    "https://images.pexels.com/photos/10957671/pexels-photo-10957671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const imagesArray = [...new Array(10)].map((_, index) => {
    return {
      imageUrl: index % 2 === 0 ? images.at(0) : images.at(1),
      id: crypto.randomUUID(),
    };
  });

  return (
    <div className="App">
      <h1>React Slider.</h1>
      <Slider width={`80%`} images={imagesArray} />
    </div>
  );
}

export default App;
