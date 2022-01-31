import React, { useState, useEffect } from 'react';
import "./Nav.css";
import Avatar from '@mui/material/Avatar';

const Nav = () => {
	 
	const [show, setShow] = useState(false);

	useEffect(() => {
	  window.addEventListener("scroll",()=>{
		  if(window.scrollY>150){setShow(true);}
		  else setShow(false);
	  })
	
	  return () => {
		window.removeEventListener("scroll");
	  };
	}, []);
	

	return (
		<div className={`nav ${show && "nav__black"}`}>

			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
				className="nav__logo" />

			<Avatar className="nav__avatar"/>

			
		</div>
	)
};

export default Nav;
