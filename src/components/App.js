import { Bread, Component } from 'chleb';

import Circle from './Circle';
import RightTriangle from './RightTriangle';
import Rectangle from './Rectangle';
import Point from './Point';
import Line from './Line';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Point x={0} y={0} visibility={true}></Point> */}
                <Line x1={0} y1={0} x2={100} y2={100}></Line>
            </div>
        );
    }
}