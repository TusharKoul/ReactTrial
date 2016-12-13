var React = require('React');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	contextTypes: {
		router : React.PropTypes.object.isRequired
	},
	getInitialState() {
		return {
			username:''
		};
	},
	handleUpdateUser(e) {
		this.setState({
			username:e.target.value
		});
	},
	handleSubmitUser(e){
		e.preventDefault()
		var username = this.state.username
		this.setState({
			username: ''
		})

		// If playerOne is in the route parameter i.e. website.com/playerTwo/playerOne
		// Then go to battle.
		// Else if website.com/playerOne i.e. no route parameter then go to player 2
		if (this.props.routeParams.playerOne) {
			// go to battle
      this.context.router.push({
        pathname : '/battle',
        query : {
          playerOne : this.props.routeParams.playerOne,
          playerTwo : this.state.username
        }
      });
		}
		else {
			// go to player 2
      this.context.router.push('/playerTwo/' + this.state.username)
		}
	},
	render() {
		return(
			<Prompt
      onSubmitUser = {this.handleSubmitUser}
      onUpdateUser = {this.handleUpdateUser}
      header = {this.props.route.header}
      username = {this.state.username}
      />
		);
	}
});

module.exports = PromptContainer;