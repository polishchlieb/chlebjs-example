import { Pixel, Component } from 'chleb';

const randomRGB = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

export default class Doggo extends Component {
    state = {
        style: {
            cursor: 'pointer',
            userSelect: 'none',
            display: 'inline-block',
            padding: '10px'
        }
    };

    render() {
        return (
            <div style={this.state.style}>
                <h1 onclick={this.clicked}>pimposlaw</h1>
            </div>
        );
    }

    clicked = this.mounted = () => {
        this.setState({
            style: {
                backgroundColor: randomRGB()
            }
        });
    }
}