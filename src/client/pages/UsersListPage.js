import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.fetchUsers()

  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }


  render() {
    return <div>
      Heres a big list of users
      <ul>
        {this.renderUsers()}
      </ul>
    </div>
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

function loadData(store) {
  return store.dispatch(fetchUsers())
}


export default {
  component: connect(mapStateToProps, {fetchUsers})(UsersList),
  loadData
}