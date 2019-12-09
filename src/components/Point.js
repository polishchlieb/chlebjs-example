import { Bread, Component } from 'chleb';

export default class Point extends Component {
    render({ x, y, visibility }) {
        return (
            <div style={
                {
                    position: 'absolute',
                    left: `${x}px`,
                    bottom: `${y}px`,
                    width: '2px',
                    height: '2px',
                    borderRadius: '50%',
                    backgroundColor: visibility ? 'black' : 'none'
                }
            }>
            </div>
        );
    }
}