import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Live from "./components/Live";
import Greatest from "./Greatest";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <Explore/>
      <Live/>
      <Greatest img="/greatest.jpg"
      title='The Greatest Outdoors'
      description='Wishlists curated by Escape'
      linkText='Get Ispired'
      />
    </main>
    <Footer/>
    </>
  );
}
