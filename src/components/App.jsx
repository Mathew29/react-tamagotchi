import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Tamagotchi from './Tamagotchi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: {
        hungerLevel: '100',
        playLevel: '100',
        healthLevel: '100',
        cleanLevel: '100',
        poopLevel: '100',
        formattedWaitTime: '0'
      }
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(() => {         
      this.updateStatTimer();
    },
    2000
    );
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  updateStatTimer() {
    let newStats = this.state.masterTamagotchi;
    newStats.playLevel--;
    // let newMasterTamagotchi = this.state.masterTamagotchi.slice();
    // masterTamagotchi.forEach((stat) =>
    //   stat.formattedWaitTime = (stat.timeOpen).fromNow(true)

    // );
    // const newStats =  (this.state.masterTamagotchi.timeOpen).fromNow(true)
    this.setState({masterTamagotchi: newStats});
    console.log('Update');   
    
  }

  handleAddingNewTamagotchi(newTamagotchi) {    
    // newTamagotchi.formattedWaitTime = (newTamagotchi.timeOpen).fromNow(true);
    this.setState({masterTamagotchi: newTamagotchi});
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' render={() => <Tamagotchi
          tamagotchiStat={this.state.masterTamagotchi}
          onNewTimerStart={this.handleAddingNewTamagotchi} /> } />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;