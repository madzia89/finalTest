import React, {Component} from 'react';

const toUpperCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

class App extends Component {

    state = {
        users: null
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?results=5")
            .then(response => response.json())
            .then(users => this.setState({users}));
    }


    render() {

        return (
            <div>
                {this.state.users &&
                this.state.users.results.map(random => (
                    <div>
                        <img src={random.picture.thumbnail} alt={"user"}/>
                        <h3>
                            {toUpperCase(random.name.first)} {toUpperCase(random.name.last)}
                        </h3>
                        <p>{random.email}</p>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

export default App
