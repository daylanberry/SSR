import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminPage extends Component {

  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins(){
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render() {
    return (
      <div>
        Protected list of admins
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = ({ admins, auth }) => ({
  admins
})

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminPage)),
  loadData: ({dispatch}) => dispatch(fetchAdmins())
}