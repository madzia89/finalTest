import React, {Component} from 'react';


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
                        <p>{random.email}</p>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

export default App
