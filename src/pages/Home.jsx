import NavbarHome from "../components/Navbar";
import CardHome from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const cardsData = [
    { image: './images/image1.png', title: 'Hámster', description: 'Un hámster muy bonito' },
    { image: './images/image2.jpg', title: 'Perrito', description: 'Perrito bonito' },
    { image: './images/image3.jpg', title: 'Gatito', description: 'Un gatito muy bonito' },
    { image: './images/image4.jpg', title: 'Zorrito', description: 'Un zorrito contento' },
    { image: './images/image5.jpg', title: 'Panda Rojo', description: 'Un panda rojo' },
    { image: './images/image6.jpg', title: 'Oso Panda', description: 'Un osito panda' },
  ];

  return (
    <>
      <NavbarHome />
      <div className="container mt-4">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CardHome image={card.image} title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
