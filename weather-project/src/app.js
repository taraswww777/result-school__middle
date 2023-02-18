import "./app.scss";
import {createDiv} from "./utils";
import {WEATHERS} from "./constants";
import {WeatherList} from "./components/weather-list/weather-list";

const state = {
    currentWeather: WEATHERS[0]
};

export const initApp = () => {
    const page = createDiv({className: 'app'});
    const weathers = createDiv({className: 'app__weathers'});

    const refreshApp = () => {
        page.style.backgroundImage = `url(${state.currentWeather.bgUrl})`
    }


    const onClickWeather = (weather) => {
        console.log('weather:', weather);
        state.currentWeather = weather;
        refreshApp();
    }

    weathers.append(WeatherList({weathers: WEATHERS, onClickWeather}));

    page.append(weathers)
    refreshApp();
    return page;
}
