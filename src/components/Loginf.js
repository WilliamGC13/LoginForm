import React from "react";



    export default class Loginf extends React.Component {
    
    render() {
        return (
          <form class="container">

          <div class="mb-3">
          <h3>Log In</h3>
            <label for="exampleInputEmail1" class="form-label">User Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  );
};
};

