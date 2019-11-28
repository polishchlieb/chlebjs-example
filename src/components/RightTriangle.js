import { Bread, Component } from 'chleb';

const outer = {
    position: 'relative'
};

const line = {
    position: 'absolute',
    height: '1px',
    backgroundColor: 'black'
};

export default class RightTriangle extends Component {
    render({ angle, hypotenuse, margin }) {
        angle = RightTriangle.toRadians(angle);

        let left = hypotenuse / 2 - (hypotenuse / 2 * Math.cos(angle));
        let top = hypotenuse / 2 * Math.sin(angle);

        const hypotenuse_line = {
            ...line,
            width: `${hypotenuse}px`,
            transform: `rotate(-${angle}rad)`,
            left: `${-left + margin}px`,
            top: `${top + margin}px`
        };

        const bottom_leg = {
            ...line,
            width: `${hypotenuse * Math.cos(angle)}px`,
            top: `${2 * top + margin}px`,
            left: `${margin}px`
        };

        const upper_leg = {
            ...line,
            width: `${2 * top}px`,
            transform: `rotate(-90deg)`,
            top: `${top + margin}px`,
            left: `${-top + hypotenuse * Math.cos(angle) + margin}px`
        };

        return (
            <div class="outer" style={outer}>
                <div style={hypotenuse_line}></div>
                <div style={bottom_leg}></div>
                <div style={upper_leg}></div>
            </div>
        );
    }

    static toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}