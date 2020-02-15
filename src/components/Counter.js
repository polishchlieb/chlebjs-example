import { Pixel, Component } from 'chleb';
import store from '../store';

const [state, setState, subscribe] = store;

const $style = document.createElement('style');
document.querySelector('head').appendChild($style);

const possible = 'abcdefghijklmnopqrstuwxyz';
function random() {
    let str = '';
    for (let i = 0; i < 10; i++)
        str += possible[Math.floor(Math.random() * possible.length)];
    return str;
}

export default class Counter extends Component {
    ref = Pixel.createRef();

    constructor() {
        super();
        subscribe(() => {
            this.renderComponent();
            
            const name = random();
            $style.sheet.insertRule(`
                .${name} {
                    color: ${'#' + Math.floor(Math.random()*16777215).toString(16)}
                }
            `);
            this.ref.current.className = name;
        });
    }

    render() {
        return (
            <h1 ref={this.ref}>{String(state.counter)}</h1>
        );
    }
}