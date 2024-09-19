import "../WeatherCard/WeatherCard.css";
import sunny from "../../src/assets/sunny.png";
function WeatherCard () {
    return(
        <section className="weather__card">
        <p className="weather__card-temp">75 @deg F</p>
        <img src={sunny} alt="sunny" className="weather__card-image" />
            </section>
    )
}
export default WeatherCard