import React, { useEffect } from "react";
import { RemoveUser, fetchUserList } from "../Redux/Actions.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loadUsers();
  }, [])

  const handleDelete = (code) => {
      if(window.confirm('Are you sure you want to delete')){
        props.removeuser(code);
        props.loadUsers();
        toast.success("User deleted successfully")
      }
  }

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
        <div style={{textAlign:"right"}}>

        <Link to={"/user/add"} className="btn btn-success" >Add user</Link>

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
                    <Link to={"/user/edit/"+item.id} className="btn btn-primary">Edit</Link>
                    <button onClick={()=>handleDelete(item.id)} className="btn btn-danger">Delete</button>
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
    removeuser: (code) => dispatch(RemoveUser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
