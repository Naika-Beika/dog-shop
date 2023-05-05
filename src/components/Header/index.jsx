import React from 'react';
export const Header = () => {


    return (
        <header className="sticky-top shadow p-3 mb-5 bg-primary rounded">
             <nav className="navbar navbar-expand-lg bg-info bg-gradient rounded">
              <div className="container-fluid">
               <a className="navbar-brand">Dog-shop</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/signin">SignIn</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/signup">SignUp</a>
                    </li>
                   </ul>
               <form className="d-flex" role="search">
                 <input className="form-control me-2" type="search" placeholder="Search"          aria-label="Search"></input>
                 <button className="btn btn-outline-success" type="submit">Search</button>
               </form>
             </div>
           </div>
         </nav>
        </header>
    )
}