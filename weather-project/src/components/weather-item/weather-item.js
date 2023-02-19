import './weather-item.scss';
import { createElement } from '../../utils';

export const WeatherItem = ({ weather, onClick }) => {
  const itemWeather = createElement('div', {
    title: weather.code,
    className: 'weather-item',
  });
  itemWeather.style.backgroundImage = `url(${weather.bgUrl})`;
  itemWeather.onclick = () => onClick(weather);

  const weatherIcon = createElement('img', {
    title: weather.code,
    alt: weather.code,
    className: 'weather-item__icon',
    src: weather.iconUrl,
  });

  itemWeather.append(weatherIcon);

  return itemWeather;
};
