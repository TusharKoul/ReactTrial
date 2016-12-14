var React = require('react');
var Results = require('../components/Results');
var githubHelper = require('../utils/githubHelper')

var ResultsContainer = React.createClass({

  contextTypes: {
    router : React.PropTypes.object.isRequired
  },


  // Our ResultsContainer is going to manage only isLoading and Scores
  // playersInfo is passed to this container from ConfirmBattleContainer
  getInitialState() {
    return {
      isLoading : true,
      scores : []
    };
  },


  componentDidMount() {
    // This is the state that's being passed on from the previous page in state
    playersInfo = this.props.location.state.playersInfo
    githubHelper.battle(playersInfo).then(function(scores){
      this.setState({
        isLoading : false,
        scores : scores
      })
    }.bind(this))
  },


  render() {
    playersInfo = this.props.location.state.playersInfo
    return (
      <Results
      isLoading = {this.state.isLoading}
      scores = {this.state.scores}
      playersInfo = {playersInfo}
      />
    );
  }

});

module.exports = ResultsContainer;