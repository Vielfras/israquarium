import './Header.scss'
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidCircle } from "react-icons/bi";
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import SearchBar from './SearchBar/SearchBar';
import AuthContext from '../../context/AuthContext';

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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; 
    setTheme(newTheme); 
    elmDocument.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className='Header'>

      <div className="navbar navbar-light navbar-expand-xl px-2 border-bottom pb-4">

        {/* ---- Logo ------------------------------------------------------------------------------------------------------------------------------------------ */}
        <Link to={'/'} className="navbar-brand">
          <BiSolidCircle size={30} color='red' />
          <BiSolidCircle size={30} color='orange' style={{ marginLeft: '-15px', opacity: '0.7' }} />
          <span style={{ fontWeight: '500', fontFamily: 'monospace' }}>BizCard</span>
        </Link>

        {/* ---- Search ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <SearchBar />

        {/* ---- Hamburger ------------------------------------------------------------------------------------------------------------------------------------- */}
        <button className="navbar-toggler ms-2" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ---- Nav Links ------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav ms-auto" style={{ listStyle: 'none' }}>

            {/* ---- Pages ------------------------------------------------------------------------------------------------------------------------------------- */}
            <li className="nav-item mx-2">
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
            </li>

            {
              (auth?.userDetails?.isAdmin) &&
              <li className="nav-item mx-2">
                <Link to={'/admin'} className='nav-link'>Admin</Link>
              </li>
            }

            {/* ---- Light\Dark Mode --------------------------------------------------------------------------------------------------------------------------- */}
            <li className="nav-item mx-3 theme-icon my-auto">
              <button type="button" className='dark-light-mode-button' onClick={() => toggleTheme()}>

                {
                  theme === 'light' ?
                    <BsFillMoonStarsFill size={18} fill='#000070' />
                    :
                    <BsFillSunFill size={18} fill='#FFFFB0' />
                }
              </button>
            </li>

            {/* ---- User Profile ------------------------------------------------------------------------------------------------------------------------------ */}
            <li className="nav-item mx-3">
              <Link to='/profile' className="nav-link">
                {
                  (auth?.userDetails) ?
                    <img className='profile-icon' style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '90px' }} src={auth.userDetails.image.url} alt={auth.userDetails.image.alt} />
                    :
                    <FaCircleUser className='profile-icon' style={{ filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5))' }} size={24} />
                }
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </div>
  )
}
