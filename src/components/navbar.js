import React from 'react';



const NavBar = ({ searchfield, searchChange }) => {
  return (  
    <nav id="nav-i" className="navbar navbar-expand-sm bg-dark navbar-dark d-flex">
      <a className="navbar-brand justify-content-start" href="#">Logo</a>
          <ul id="my" >
            <li className="nav-item dropdown">
                <a id="dropdown-i" className="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Genre List</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Romance</a></li>
                  <li><a className="dropdown-item" href="#">Adventure</a></li>
                </ul>
            </li>
        </ul>

        <input id="input-i" 
               placeholder='        search movies' 
               className="form-control"  
               type="text" 
               onChange={searchChange}
        />
      {/* <div id="collapseOne" className="collapse" data-bs-parent="#accordion" role="tabpanel" aria-labelledby="headingOne">
          <li className="row mb-3">
            <div className="col">
              <input id="input-i" className="form-control"  type="text"/>
            </div>
          </li>
      </div>

      <h5 className="mb-0">
          <a id="a-i" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <i id="i-i" className="fa fa-fw fa-search"></i>
          </a>
      </h5> */}
      <h3 id="h3-i">Movie Trailer</h3>
      <button id="button-i" className="btn btn-light"><b>Logout</b></button>
   </nav>
  );
}

export default NavBar;