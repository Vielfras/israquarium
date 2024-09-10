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

    </div>

  )
}
