import "../WeatherCard/WeatherCard.css";
import sunny from "../../src/assets/sunny.png";
function WeatherCard ({ weatherData }) {
    return(
        <section className="weather__card">
        <p className="weather__card-temp">{weatherData.temp.F} F</p>
        <img src={sunny} alt="sunny" className="weather__card-image" />
            </section>
    )
}
export default WeatherCard
