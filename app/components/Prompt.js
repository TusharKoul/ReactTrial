var React = require('react')
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;
var MainWrapper = require('../components/MainWrapper')

var Prompt = React.createClass({
  propTypes : {
    header : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    onSubmitUser : PropTypes.func.isRequired,
    onUpdateUser : PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style = {transparentBg}>
        <h1>{this.props.header}</h1>
        <div className = "col-sm-12">
          <form onSubmit = {this.props.onSubmitUser}>
            <div className = "form-group">
              <input className = "form-control" placeholder="Github User Name" type = "text"
              onChange = {this.props.onUpdateUser}
              value = {this.props.username}
              />
            </div>
            <div className = "form-group col-sm-4 col-sm-offset-4">
              <button className = "btn btn-block btn-success" type = "submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Prompt;