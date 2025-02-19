export const getWeatherInfo = async (city) => {
  try {
    const API_KEY = "8fe4f91b0f8171689f2674c57a3a6c01";
    const API_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(`${API_url}`);
    if (!response.ok) throw new Error("ERROR");
    const dataJSON = await response.json();
    console.log(
      `Today weather ${city} is ${dataJSON.weather[0].main}(${dataJSON.weather[0].description})`
    );
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
