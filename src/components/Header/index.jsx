import { faBone, faPerson } from '@fortawesome/free-solid-svg-icons';
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

  const handleClick = () =>{
    return navigate('/user')
  }

  const homeClick = () =>{
    return navigate('/')
  }

  const links = [
    {href: '/products', title: 'Products'},
    {href: '/signin', title: 'SignIn'},
    {href: '/signup', title: 'SignUp'}
 ];

    return (
        <header className="sticky-top shadow p-3 bg-primary rounded">
          <nav className="navbar navbar-expand-lg bg-info bg-gradient rounded">
            <div className="container-fluid">
            <FontAwesomeIcon icon={faBone} spin size="2xl" cursor="pointer" onClick={homeClick}/>
              <ul className="navbar-nav ms-2">
                {links.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link active" aria-current="page" href={link.href}>{link.title}</a>
                  </li>
                ))}
                <button onClick={handleExit} className='btn btn-primary'>Выход</button>
              </ul>
              <Search />
              <FontAwesomeIcon icon={faPerson} className="me-2" size="2xl" onClick={handleClick} cursor="pointer" />
            </div>
          </nav>
        </header>
    )
}