import "./app.scss";
import {createDiv, createElement} from "./utils";
import {WEATHERS} from "./constants";
import {WeatherList} from "./components/weather-list/weather-list";

const state = {
    currentWeather: WEATHERS[0],
    player: new Audio(WEATHERS[0].soundUrl)
};

export const initApp = () => {
    const page = createDiv({className: 'app'});
    const title = createElement('h1', {className: 'app__title', innerHTML: 'Weather sounds'});
    const weathers = createDiv({className: 'app__weathers'});

    const refreshApp = () => {
        page.style.backgroundImage = `url(${state.currentWeather.bgUrl})`
    }


    const onClickWeather = (weather) => {
        if (weather.code !== state.currentWeather.code) {
            state.player.pause();
            state.player.src = weather.soundUrl;
            state.player.loop = true;
            state.player.play();
            state.currentWeather = weather;
        } else {
            if (state.player.paused) {
                state.player.play();
            } else {
                state.player.pause();
            }
        }

        refreshApp();
    }

    weathers.append(WeatherList({weathers: WEATHERS, onClickWeather}));

    page.append(title)
    page.append(weathers)
    refreshApp();
    return page;
}
