import React, { useEffect } from "react";
import { fetchUserList } from "../Redux/Actions.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UserListing = (props) => {
  useEffect(() => {
    props.loadUsers();
  }, [])
  return ( 
    props.user.loading ? 
    <div>
      <h2>Loading...</h2>
    </div> : 
    props.user.errorMessage ? 
    <div>
      <h2>{props.user.errorMessage}</h2>
    </div>
   : 
    <div>
      <div className="card">
        <div className="card-header">
          <h2>User Listing </h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
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
            <tbody>
              {
                props.user.userList && props.user.userList.map(item=> <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.father}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                  <td>
                    <Link className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchUserList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
