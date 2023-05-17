import { faBone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanUser } from '../../redux/slices/userSlice';
import { Search } from '../Search';


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleExit = () => {
    dispatch(cleanUser())
    return navigate('/signin')
  }

  const links = [
    {href: '/', title: 'Home'},
    {href: '/products', title: 'Products'},
    {href: '/signin', title: 'SignIn'},
    {href: '/signup', title: 'SignUp'}
 ];

    return (
        <header className="sticky-top shadow p-3 mb-5 bg-primary rounded">
          <nav className="navbar navbar-expand-lg bg-info bg-gradient rounded">
            <div className="container-fluid">
            <FontAwesomeIcon icon={faBone} spin size="2xl" />
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link active" aria-current="page" href={link.href}>{link.title}</a>
                  </li>
                ))}
                <button onClick={handleExit} className='btn btn-primary'>Выход</button>
              </ul>
              <Search />
            </div>
          </nav>
        </header>
    )
}