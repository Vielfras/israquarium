import './Header.scss'
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidCircle } from "react-icons/bi";
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import SearchBar from './SearchBar/SearchBar';
import AuthContext from '../../context/AuthContext';
import NavBar from './NavBar/NavBar';

const elmDocument = document.querySelector('html') as HTMLHtmlElement

export default function Header() {

  const [theme, setTheme] = useState('light')

  const auth = useContext(AuthContext)

  useEffect(() => {
    const lsTheme = localStorage.getItem('theme')

    if (lsTheme) {
      // found theme key
      elmDocument.setAttribute('data-bs-theme', lsTheme)
      setTheme(lsTheme)
    } else {
      // theme key not found
      localStorage.setItem('theme', 'light')
      elmDocument.setAttribute('data-bs-theme', 'light')
      setTheme('light')
    }
  }, [])

  return (
    <div className='Header'>
    
      <NavBar />
      {/* ---- Search ---------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* <SearchBar /> */}

      {/* ---- Nav Links ------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* <div className="navbar-collapse collapse" id="menu"> */}
      {/* <ul className="navbar-nav ms-auto" style={{ listStyle: 'none' }}> */}

      {/* ---- Pages ------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* <li className="nav-item mx-2">
            <Link to={'/'} className='nav-link'>Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={'/about'} className='nav-link'>About</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={'/free'} className='nav-link'>Free</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={'/user'} className='nav-link'>User</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={'/business'} className='nav-link'>Biz</Link>
          </li>
          <li className="nav-item mx-2">
          </li> */}

      {/* {
            (auth?.userDetails?.isAdmin) &&
            <li className="nav-item mx-2">
              <Link to={'/admin'} className='nav-link'>Admin</Link>
            </li>
          } */}

      {/* ---- User Profile ------------------------------------------------------------------------------------------------------------------------------ */}
      {/* <li className="nav-item mx-3">
            <Link to='/profile' className="nav-link">
              {
                (auth?.userDetails) ?
                  <img className='profile-icon' style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '90px' }} src={auth.userDetails.image.url} alt={auth.userDetails.image.alt} />
                  :
                  <FaCircleUser className='profile-icon' style={{ filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5))' }} size={24} />
              }
            </Link>
          </li> */}

      {/* </ul> */}
      {/* </div> */}

    </div>

  )
}
