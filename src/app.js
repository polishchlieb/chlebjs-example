import { Bread } from 'chleb';
import App from './components/App.js';

new Bread({ app: App })
    .render(document.querySelector('#root'));