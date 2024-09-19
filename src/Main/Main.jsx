import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards"></section>
      <p className="cards__text">Today is 75 @deg; F / You may want to wear:</p>
    </main>
  );
}
export default Main;
