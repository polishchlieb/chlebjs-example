import { Bread, Component } from 'chleb';

const rect = {
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: '1px',
    // transform: 'skew(-20deg)'
};

export default class Rectangle extends Component {
    render({ a, b, margin }) {
        return (
            <div class="rectangle" style={
                { ...rect,
                    left: `${margin}px`,
                    top: `${margin}px`,
                    width: `${a}px`,
                    height: `${b}px`
                }
            }></div>
        );
    }
}