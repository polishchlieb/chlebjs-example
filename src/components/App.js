import { Bread, Component } from 'chleb';

const names = ['Vadim', 'Dmitri', 'Boris', 'Artyom', 'Aleksandr', 'Iwan', 'Sergey'];

export default class App extends Component {
    data = {
        greeting: ''
    };

    render() {
        return (
            <div>
                <h1>{this.greeting}</h1>
                <button onclick={this.randomize}>blyat that's not my name</button>
                <br/><br/>
                <a href="https://discord.gg/BsFhmWD">breadoggos here</a>
            </div>
        );
    }

    randomize() {
        this.greeting = 'Hello ' + names[Math.floor(Math.random() * names.length)] + '!';
    }

    ready = this.randomize;
}