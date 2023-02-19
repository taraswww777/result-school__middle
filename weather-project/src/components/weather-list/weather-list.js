import './weather-list.scss';
import { createElement } from '../../utils';
import { WeatherItem } from '../weather-item/weather-item';

export const WeatherList = ({ weathers, onClickWeather }) => {
  const weatherList = createElement('ul', { className: 'weather-list' });
  weathers.forEach((weather) => {
    const itemWeather = createElement('li', { className: 'weather-list__item' });

    itemWeather.append(WeatherItem({ weather, onClick: onClickWeather }));

    weatherList.append(itemWeather);
  });

  return weatherList;
};
