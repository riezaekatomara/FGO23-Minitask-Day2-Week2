// const readline = require("readline");

import readline from "readline";

// const {
//   getCurrentWeather,
//   getWeatherForecast,
// } = require("./services/weatherService");

import { getWeatherInfo } from "./src/utils/apiUtils.js";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const promptUser = () => {
//   r1.question("Masukkan nama kota: ", async (city) => {
//     if (!city) {
//       console.log("Nama Kota Tidak");
//       promptUser();
//       return;
//     }
//     console.log(`Memanggil data cuaca untuk ${city}...`);

//     const currentWeather = await getCurrentWeather(city);
//     if (currentWeather) {
//       console.log("/n=== Cuaca Saat ini ===");
//       console.log(`Kota: ${currentWeather.name}`);
//       console.log(`Suhu: ${currentWeather.main.temp}`);
//       console.log(`Cuaca: ${currentWeather.weather[0].description}`);
//     } else {
//       console.log("Gagal mengambil data");
//     }

//     const forecast = await getWeatherForecast(city);
//     if (forecast) {
//       console.log("/n=== Perkiraan Cuaca ===");
//       forecast.list.slice(0, 5).forEach((item, index) => {
//         console.log(
//           `\n${index + 1}. Waktu: ${item.dt_txt}, Suhu: ${
//             item.main.temp
//           } C, Cuaca: ${item.weather[0].description}`
//         );
//       });
//     } else {
//       console.log("Gagal mengambil data");
//     }

r1.question(`Checkin: `, (city) => {
  getWeatherInfo(city);
  r1.close();
});
