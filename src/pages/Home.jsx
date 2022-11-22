import Footer from "../components/Footer";
import MenuButton from "../components/MenuButton";
import "../styles/pages/Home.css";

function Home() {
  return (
    <>
      <div className="home__container">
        <div className="home__menu">
          <div className="home__title">
            <h1>
              TicTacToe
            </h1>
          </div>
          <div className="home__btnscontainer">
            <div className="home__btns">
              <MenuButton text="Local Mulitplayer" link="/pick/local" />
              <MenuButton text="Bot" link="/pick/bot" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
