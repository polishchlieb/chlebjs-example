import { Bread, Component } from 'chleb';

const style = {
    borderRadius: '50%',
    position: 'absolute',
    borderWidth: '1px',
    borderStyle: 'solid'
};

export default class Circle extends Component {
    render({ radius, margin }) {
        return (
            <div class="circle" style={
                { ...style,
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                    left: `${margin}px`,
                    bottom: `${margin}px`
                }
            }></div>
        );
    }
}