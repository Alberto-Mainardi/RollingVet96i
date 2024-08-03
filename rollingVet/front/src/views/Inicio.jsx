import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForm from "../components/WeatherForm";
import DataCard from "../components/DataCard";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error from "../components/Error";

const Inicio = () => {

  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false)
  return (
    <>
      <main className=" container my-5">
        <WeatherForm setWeatherData={setWeatherData} setError={setError}></WeatherForm>
        { !error ? (
          <DataCard weatherData={weatherData}></DataCard>
        ) : (
          <Error />
        )}
      </main>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );

}

export default Inicio