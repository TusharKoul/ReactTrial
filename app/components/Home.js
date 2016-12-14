var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var MainWrapper = require('../components/MainWrapper')

var Home = React.createClass({
	render: function() {
		return (
			<MainWrapper>
				<h1>Github Battle</h1>
				<p className = "lead"> Some fancy Motto </p>
				<Link to="/playerOne">
					<button type = "button btn btn-lg btn-success">Get Started</button>
				</Link>
			</MainWrapper>
		);
	}
});

module.exports = Home;