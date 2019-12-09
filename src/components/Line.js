import { Bread, Component } from 'chleb';

export default class Line extends Component {
    // Assume x1 > x2 & y1 > y2
    render({ x1, y1, x2, y2 }) {
        const xs = [x1, x2];
        x1 = Math.max(...xs);
        x2 = Math.min(...xs);

        const ys = [y1, y2];
        y1 = Math.max(...ys);
        y2 = Math.min(...ys);

        const dx = x2 - x1;
        const dy = y2 - y1;

        const hypotenuse = Math.sqrt(dx ** 2 + dy ** 2);
        const angle = Math.asin(dy / hypotenuse);

        const left = dx / 2 + x1;
        const bottom = dy / 2 + y1;

        const style = {
            backgroundColor: 'black',
            transform: `rotate(${angle}rad)`,
            width: '1px',
            height: `${hypotenuse}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            position: 'absolute'
        };

        return (
            <div class="line" style={style}></div>
        );
    }
}