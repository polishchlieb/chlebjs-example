import { Bread } from '@chlebjs/core';
import App from './components/App.js';

new Bread({ app: App })
    .render(document.querySelector('#root'));