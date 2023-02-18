import './input-volume.scss';
import { createDiv, createElement } from '../../utils';

export const InputVolume = ({ onChange }) => {
  const inputVolumeComponent = createDiv({ className: 'input-volume' });
  const inputVolume = createElement('input', {
    className: 'input-volume__input',
    type: 'range',
    min: 0.0,
    max: 1.0,
    step: 0.1,
    value: 0.5,
  });
  inputVolume.onchange = (v) => {
    onChange(v.target.value);
  };

  inputVolumeComponent.append(inputVolume);
  return inputVolumeComponent;
};
