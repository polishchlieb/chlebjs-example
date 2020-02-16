import { Pixel, Component } from 'chleb';
import Counter from './Counter';
import Button from './Button';
import Doggo from './Doggo';

export default class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <Button/>
                <Doggo/>
            </div>
        );
    }
}