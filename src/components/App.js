import { Bread, Component } from 'chleb';

import Circle from './Circle';
import RightTriangle from './RightTriangle';
import Rectangle from './Rectangle';

export default class App extends Component {
    render() {
        return (
            <div>
                <RightTriangle angle={45} hypotenuse={500} margin={20}></RightTriangle>
                <Circle radius={200} margin={100}></Circle>
                <Rectangle a={500} b={200} margin={200}></Rectangle>
            </div>
        );
    }
}