import './index.scss';
import {initApp} from './app';

const rootApp = document.getElementById('root');

if (rootApp) {
  const app = initApp();

  rootApp.append(app);
}
