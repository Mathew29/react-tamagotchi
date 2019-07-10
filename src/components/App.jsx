import React from 'react'
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterTamagotchi: []
        };
        this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
    }

    handleAddingNewTamagotchi(newTamagotchi) {
        let newMasterTamagotchi = this.state.masterTamagotchi.slice();
        newTamagotchi.formattedWaitTime = (newTamagotchi.timeOpen).fromNow(true);
        newMasterTamagotchi.push(newTamagotchi);
        this.setState({masterTamagotchi: newMasterTamagotchi});
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route component={Error404}/>
                </Switch>
            </div>
        )
    }
}

export default App;