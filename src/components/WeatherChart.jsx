import { useState, useEffect } from "react";
const AUTHORIZATION_KEY = import.meta.env.VITE_AUTHORIZATION_KEY;
const urlTaipei = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=${AUTHORIZATION_KEY}&format=JSON&LocationName=%E5%A4%A7%E5%AE%89%E5%8D%80&ElementName=%E9%AB%94%E6%84%9F%E6%BA%AB%E5%BA%A6&sort=time&StartTime=2026-02-05T12%3A00%3A00,2026-02-06T12%3A00%3A00,2026-02-07T12%3A00%3A00&DataTime=2026-02-05T12%3A00%3A00,2026-02-06T12%3A00%3A00,2026-02-07T12%3A00%3A00`;

export function WeatherChart() {
  const [chartDataFeelsLikeNoon, setChartDataFeelsLikeNoon] = useState([
    { date: "2026-02-05", apparentTemperature: 28 },
    { date: "2026-02-06", apparentTemperature: 26 },
    { date: "2026-02-07", apparentTemperature: 15 },
  ]);

  useEffect(() => {
    fetch(urlTaipei)
      .then((response) => response.json())
      .then((data) => console.log("data", data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setChartDataFeelsLikeNoon([]);
      });
  }, []);


  return (
    <div>
      <div>weather</div>
      <h4>台北市大安區</h4>

      <main>{chartDataFeelsLikeNoon.map((item) => {
        return (
          <div key={item.date}>
            <span>{item.date}</span>
            {" "}
            <span>
              {item.apparentTemperature}
              <span>°C</span>
            </span>
          </div>
        );
      })}
      </main>
    </div>
  )
}


