var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelper');

var ConfirmBattleContainer = React.createClass({

  contextTypes: {
    router : React.PropTypes.object.isRequired
  },


  getInitialState() {
    return {
      isLoading : true,
      playersInfo : []
    };
  },


  componentDidMount() {
    var query = this.props.location.query
    var players = [query.playerOne,query.playerTwo]

    // getPlayersInfo is going to give us a promise, when that promise resolves, we're going to get our info in the "then" callback
    // this keyword inside the then function is not the this outside
    // To give it context we need to bind this to inner method callback
    githubHelper.getPlayersInfo(players).then(function(players){
      this.setState({
        isLoading : false,
        playersInfo : players
      })
    }.bind(this))
  },

  handleInitialBattle() {
    this.context.router.push({
      pathname : '/results',
      state : {
        //pushing data to next page
        playersInfo : this.state.playersInfo
      }
    })
  },


  render() {
    return (
      <ConfirmBattle
      isLoading = {this.state.isLoading}
      playersInfo = {this.state.playersInfo}
      onInitiateBattle = {this.handleInitialBattle}
      />
    );
  }

});

module.exports = ConfirmBattleContainer;