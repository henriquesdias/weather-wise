# Weather Wise

An weather app where you can find the current and next days'forecast for the location you search.

## Built With

<div>
   <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
   <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E">
   <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
   <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
   <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
   <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
   <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
</div>

## How to Run

Follow the instructions to run the app locally

1. First, you need to access the https://openweathermap.org/ website to register an API key that the application uses to access weather data.
2. Clone this repository
3. Install all dependencies

```bash
   npm i
```

4. Create a .env file at the root of the project and fill it in according to the .env.example file. In this case, the "VITE_API_KEY" variable should be the key that you get in the first step.

5. Run script

```bash
  npm run dev
```

6. Access http://localhost:5173

## Build

1. Follow the first 4 steps in "How to Run" section.
2. Run script

```bash
  npm run build
```

3. Run script

```bash
  npm run preview
```

4. Access http://localhost:4173

## Deploy

You can check the application without install anything by visiting the link https://weather-wise-flame.vercel.app/
