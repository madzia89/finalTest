import React, {Component} from 'react'
import {Row, Col} from 'react-flexbox-grid'


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
                    <Row middle="xs">
                        <Col xs={6} sm={1}>
                            <img src={random.picture.thumbnail} alt={"user"}/>
                        </Col>
                        <Col xs={6} sm={11}>
                            <a href='#'>{random.email}</a>
                        </Col>
                        <hr/>
                    </Row>
                ))}
            </div>
        )
    }
}

export default App
