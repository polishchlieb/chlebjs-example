import { Bread, Component } from '@chlebjs/core';

export default class App extends Component {
    data = {
        value: 'hell world!@#)(*'
    };

    render() {
        return (
            <div>
                <h1>{ this.value }</h1>
            </div>
        );
    }
}