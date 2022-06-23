import React from 'react'
import "./nav.css"
import{AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='/#top' rel="noreferrer" onClick={() => setActiveNav('/#top')} ClassName="active"><AiOutlineHome /></a>
      <a href='/about/#about' onClick={() => setActiveNav('about/#about')} className={activeNav === '/about/#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='/portfolio/#experience' onClick={() => setActiveNav('/portfolio/#experience')} className={activeNav === '/portfolio/#experience' ? 'active' : ''}><BiBook /></a>
      <a href='/services/#services' onClick={() => setActiveNav('/services/#services')} className={activeNav === '/services/#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='/contact/#contact' onClick={() => setActiveNav('/contact/#contact')} className={activeNav === '/contact/#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav