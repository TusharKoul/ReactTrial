var React = require('react')

function puke(object){
  return <pre>{JSON.stringify(object,null,' ')}</pre>
}

// Since this is a stateless component, we can skip creating a react class and just make it a functional component
function ConfirmBattle(props) {
  return (
    props.isLoading === true
    ? <p> LOADING </p>
    : <p> Confirm Battle :{puke(props)}</p>
  );
}

module.exports = ConfirmBattle;