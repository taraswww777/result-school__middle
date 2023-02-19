import './weather-list.scss';
import {createElement} from 'src/utils';
import {WeatherItem} from '../weather-item/weather-item';
import {Weather} from 'src/types';

interface WeatherListProps {
  weathers: Weather[],
  onClickWeather: (weather: Weather) => void
}

export const WeatherList = ({weathers, onClickWeather}: WeatherListProps) => {
  const weatherList = createElement('ul', {className: 'weather-list'});
  weathers.forEach((weather) => {
    const itemWeather = createElement('li', {className: 'weather-list__item'});

    itemWeather.append(WeatherItem({weather, onClick: onClickWeather}));

    weatherList.append(itemWeather);
  });

  return weatherList;
};
