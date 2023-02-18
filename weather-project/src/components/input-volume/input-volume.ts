import './input-volume.scss';
import {createDiv, createElement} from 'src/utils';
import {HTMLElementEvent} from 'src/types';

interface InputVolumeProps {
  onChange: Function;
}

export const InputVolume = ({onChange}: InputVolumeProps) => {
  const inputVolumeComponent = createDiv({className: 'input-volume'});
  const inputVolume = createElement('input', {
    className: 'input-volume__input',
    type: 'range',
    min: 0.0,
    max: 1.0,
    step: 0.1,
    value: 0.5
  });
  inputVolume.onchange = (v: HTMLElementEvent) => {
    onChange(v.target.value);
  };

  inputVolumeComponent.append(inputVolume);
  return inputVolumeComponent;
};
