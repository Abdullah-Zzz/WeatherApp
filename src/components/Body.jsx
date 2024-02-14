import React from "react"
import "../style.css"
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import humidity from "../assets/humidity.png"
import wind from "../assets/wind.png"


export default function Body(props) {

    const [apiData, setApiData] = React.useState(null);
    const [icons, setIcons] = React.useState("");

    const apiKey = "0a83cc2dd0627496cf3db95ad81da347";

    React.useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.input}&units=Metric&appid=${apiKey}`)
            .then((res) => res.json())
            .then((object) => {
                setApiData(object);

                if (object.weather) {
                    const weatherCode = object.weather[0].icon;
                    if (weatherCode === "01d" || weatherCode === "01n") {
                        setIcons(clearIcon);
                    } else if (weatherCode === "02d" || weatherCode === "02n") {
                        setIcons(cloudIcon);
                    } else if (weatherCode.startsWith("03") || weatherCode.startsWith("04")) {
                        setIcons(drizzleIcon);
                    } else if (weatherCode.startsWith("09") || weatherCode.startsWith("10")) {
                        setIcons(rainIcon);
                    } else if (weatherCode.startsWith("13")) {
                        setIcons(snowIcon);
                    } else {
                        setIcons(clearIcon);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                setApiData({ message: "Error fetching data" });
            });
    }, [props.ValueToRunEffect]);


    return (
        <>
            {apiData && (
                <div className="mainSection">
                    <img src={icons} alt="Weather Icon" className="WeatherPhotos"/>
                    <h1 className="mainContent degree">{apiData.main && apiData.main.temp}&deg;C</h1>
                    <h2 className="mainContent city">{apiData.name || apiData.message}</h2>
                </div>
            )}
            {
                apiData && (
                    <div className="bottomSection">
                        <div className="lastSection humidity">
                            <img src={humidity} alt="Humidity" />
                            <div className="bottomContent">
                                <h3>{apiData.main && apiData.main.humidity}%</h3>
                                <p>humidity</p>
                            </div>
                        </div>
                        <div className="lastSection windspeed">
                            <img src={wind} alt="Wind" />
                            <div className="bottomContent">
                                <h3>{apiData.wind && apiData.wind.speed} km/h</h3>
                                <p>windspeed</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}