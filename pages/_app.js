import "../styles/globals.css";
import "./app.css";
import logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { Nav, NavItem} from 'reactstrap';
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a className='mr-6 text-black font-bold' href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);
  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button className='mr-6 text-black font-bold' type="button" aria-expanded={dropdown ? "true" : "false"}
           onClick={() => setDropdown((prev) => !prev)}
          >
          {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className='mr-6 text-black font-bold' href={items.url}>{items.title}</a>
      )}
    </li>
  );
};


const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },
 {
    title: 'Token Arena',
    url: '/token-arena',
  },
  {
    title: 'Business | Brand',
    url: '/business-brand',
    submenu: [
      {
        title: 'Signup',
        url: 'business-brand-signup',
      },
      {
        title: 'Create Token',
        url: 'create-token',
      },
      {
        title: 'Dashboard',
        url: 'business-dashboard',
      },
    ],
  },
{
    title: 'Customer | Collector',
    url: '/customer-collector',
    submenu: [
      {
        title: 'Signup',
        url: 'customer-collector-signup',
      },
      {
        title: 'My Tokens',
        url: 'my-tokens',
      },
    ],
  },
  {
    title: 'Getting Started',
    url: '/getting-started',
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
  },
];


function NFTMarketplace({Component, pageProps}) {
  return (
    <div>
      
      <nav className="desktop-nav grid grid-cols-10 items-center border-b p-4" style={{ backgroundColor: "white" }}>
      <div className="col-span-1">
          <div className="mx-auto h-16 w-16">
            <Link href="/">
              <Image src={logo} className="w-full cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="col-span-8">   

        <div className='flex mt-4 justify-center'>
        
         <ul className="menus">
         {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
         })}
         </ul>

          </div>
          </div>
      </nav>
      <Component {...pageProps} />
    
      <nav className="navbar fixed-bottom bottom-0 right-0 navbar-light" role="navigation">
      <Nav className="w-100">
      <div className='flex mt-4 justify-center'>
        <h1 className='mr-6 text-sm text-black font-bold'>Copyright © 2024 Percent Pulse Pvt. Ltd. All rights reserved.</h1>
        <Link href='/privacy-policy'>
          <a className='mr-6 text-sm text-black font-bold'>
            Privacy Policy
          </a>
        </Link>
        <Link href='/terms-and-conditions'>
          <a className='mr-6 text-sm text-black font-bold'>
            Terms and Conditions
          </a>
        </Link>
        </div>
        </Nav>
      </nav>
      
    </div>
    
  ) 
}

export default NFTMarketplace 