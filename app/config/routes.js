var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
	<Router history={hashHistory}>
    <Route path='/' components={Main}>
			<IndexRoute components={Home} />
      <Router path = 'playerOne' header = 'Player One' components = {PromptContainer}/>
      <Router path = 'playerTwo/:playerOne' header = 'Player Two' components = {PromptContainer}/>
      <Router path = 'battle' components = {ConfirmBattleContainer}/>
      <Router path = 'results' components = {ResultsContainer}/>
		</Route>
	</Router>
);

module.exports = routes;