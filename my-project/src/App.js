import React from 'react'
import { connect } from 'react-redux';

import { fetchUserRequest } from './Redux/actions';

const mapStateToProps = (store)=> {
  const {users} = store.app
  return {users}
}

function App({users,fetchUserRequest}) {
  console.log("The users",users)
  return (
    <div className="App">

      <button onClick = {()=> fetchUserRequest('Madan-444')}>FetchData</button>
      
    </div>
  );
}

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchUserRequest: (nae)=> dispatch(fetchUserRequest(nae)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
