var React = require('react')
var PropTypes = React.PropTypes
var styles = require('../styles')
var Link = require('react-router').Link
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var MainWrapper = require('./MainWrapper')
var Loading = require('./Loading')


function puke(object){
  return <pre>{JSON.stringify(object,null,' ')}</pre>
}

// Since this is a stateless component, we can skip creating a react class and just make it a functional component
function ConfirmBattle(props) {
  return (
    props.isLoading === true
    ? <Loading text='Please wait' speed={600}/>
    : <MainWrapper>
        <h1>Confirm Players</h1>
        <div className = "col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className = "col-sm-8 col-sm-offset-2">
          <div className = "col-sm-12" style={styles.space}>
           <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
            Initiate Battle
           </button>
          </div>
          <div className = "col-sm-12" style={styles.space}>
            <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-danger"> Reselect Players </button>
            </Link>
          </div>
        </div>
      </MainWrapper>
  );
}

ConfirmBattle.propTypes = {
  isLoading : PropTypes.bool.isRequired,
  playersInfo : PropTypes.array.isRequired,
  onInitiateBattle : PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
