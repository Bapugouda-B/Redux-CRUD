import React, { useEffect } from 'react'
import { fetchUserList } from '../Redux/Actions.js'
import { connect } from 'react-redux'

function UserListing({loadUsers}) {
  useEffect(()=>{
    loadUsers();
  },[loadUsers]);
  return (
    <div>
      <div className="card">
        <div className="card-header">
            
            <h2>User Listing </h2>
        </div>
        <div className="card-body">
            <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <td>Student No</td>
                        <td>Student Name</td>
                        <td>Father Name</td>
                        <td>Mother Name</td>
                        <td>Email</td>
                        <td>Phone No</td>
                        <td>Action</td>
                    </tr>
                </thead>
            </table>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loadUsers: () => dispatch(fetchUserList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserListing)
