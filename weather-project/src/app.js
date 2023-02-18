import {createDiv, createElement} from "./utils";
import {WEATHERS} from "./constants";
import {WeatherItem} from "./components/weather-item/weather-item.js";

export const initApp = () => {
    const page = createDiv({className: 'app'});

    const listWeathers = createElement('ul', {className: 'weathers'});

    const onClickWeather = (params) => {
        console.log('params:', params)
    }

    WEATHERS.forEach((weather) => {
        const itemWeather = createElement('li', {className: 'weathers__item'});

        itemWeather.append(WeatherItem({weather, onClick: onClickWeather}));

        listWeathers.append(itemWeather);
    });

    page.append(listWeathers)

    return page;
}
