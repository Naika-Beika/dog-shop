import { faBone, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cleanUser } from '../../redux/slices/userSlice';
import { Search } from '../Search';


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.user)

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

    return (
        <header className="sticky-top shadow p-3 bg-primary rounded">
          <nav className="navbar navbar-expand-lg bg-info bg-gradient rounded">
            <div className="container-fluid">
            <FontAwesomeIcon icon={faBone} spin size="2xl" cursor="pointer" onClick={homeClick}/>
              <ul className="navbar-nav ms-2">
                <Link className="nav-item nav-link active" to='/products'>Products</Link>
                {!token && <Link className="nav-item nav-link active" to='/signin'>SignIn</Link>}
                {!token && <Link className="nav-item nav-link active" to='/signup'>SignUp</Link>}
                {token && <button onClick={handleExit} className='btn btn-primary'>Выход</button>}
              </ul>
              <Search />
              <FontAwesomeIcon icon={faPerson} className="me-2" size="2xl" onClick={handleClick} cursor="pointer" />
            </div>
          </nav>
        </header>
    )
}