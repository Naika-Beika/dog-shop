import React from 'react'
export const Footer = () =>{
    return (
      <footer className='footer'>
        <div className='p-3 mb-2 bg-info-subtle text-emphasis-info'>
         <nav className="nav flex-column">
           <a className="nav-link active" aria-current="page" href="#">Active</a>
           <a className="nav-link" href="#">Link</a>
           <a className="nav-link" href="#">Link</a>
         </nav>
        </div>
      </footer>
    )
}