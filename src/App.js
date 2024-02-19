import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const data = [
    {
      image: "https://http.cat/100.jpg",
      name: "llelande0",
      likes: 33,
      views: 636,
      is_liked: false,
    },
    {
      image: "https://http.cat/101.jpg",
      name: "emansuer1",
      likes: 19,
      views: 336,
      is_liked: true,
    },
    {
      image: "https://http.cat/102.jpg",
      name: "abonifacio2",
      likes: 414,
      views: 390,
      is_liked: false,
    },
    {
      image: "https://http.cat/103.jpg",
      name: "rbrownstein3",
      likes: 196,
      views: 803,
      is_liked: false,
    },
    {
      image: "https://http.cat/200.jpg",
      name: "vrushworth4",
      likes: 76,
      views: 705,
      is_liked: false,
    },
    {
      image: "https://http.cat/201.jpg",
      name: "bgierke5",
      likes: 265,
      views: 687,
      is_liked: true,
    },
    {
      image: "https://http.cat/202.jpg",
      name: "gdod6",
      likes: 295,
      views: 381,
      is_liked: false,
    },
    {
      image: "https://http.cat/203.jpg",
      name: "tfinnie7",
      likes: 356,
      views: 565,
      is_liked: false,
    },
    {
      image: "https://http.cat/204.jpg",
      name: "jqueenborough8",
      likes: 302,
      views: 759,
      is_liked: false,
    },
    {
      image: "https://http.cat/205.jpg",
      name: "bnormavell9",
      likes: 403,
      views: 954,
      is_liked: false,
    },
    {
      image: "https://http.cat/206.jpg",
      name: "gpoulgreena",
      likes: 157,
      views: 431,
      is_liked: false,
    },
    {
      image: "https://http.cat/207.jpg",
      name: "tdumphreyb",
      likes: 164,
      views: 793,
      is_liked: true,
    },
    {
      image: "https://http.cat/208.jpg",
      name: "mstockerc",
      likes: 145,
      views: 716,
      is_liked: false,
    },
    {
      image: "https://http.cat/226.jpg",
      name: "ssticheld",
      likes: 156,
      views: 607,
      is_liked: false,
    },
    {
      image: "https://http.cat/300.jpg",
      name: "gyeabsleye",
      likes: 58,
      views: 180,
      is_liked: true,
    },
    {
      image: "https://http.cat/301.jpg",
      name: "mpoilef",
      likes: 61,
      views: 171,
      is_liked: false,
    },
    {
      image: "https://http.cat/302.jpg",
      name: "hhookg",
      likes: 445,
      views: 43,
      is_liked: false,
    },
    {
      image: "https://http.cat/303.jpg",
      name: "fmonellih",
      likes: 311,
      views: 422,
      is_liked: false,
    },
    {
      image: "https://http.cat/304.jpg",
      name: "ipiggoti",
      likes: 305,
      views: 529,
      is_liked: true,
    },
    {
      image: "https://http.cat/305.jpg",
      name: "bkocherj",
      likes: 43,
      views: 135,
      is_liked: false,
    },
  ];

  const cards = data.map((card) => {
    return (
      <div className="col-md-3">
        <Card
          name={card.name}
          image={card.image}
          likes={card.likes}
          views={card.views}
          is_liked={card.is_liked}
        />
      </div>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="container mt-5">
        <div className="row">{cards}</div>
      </div>
    </div>
  );
}

export default App;
