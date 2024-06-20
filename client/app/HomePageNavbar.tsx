import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
      <div  className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Logo" src="/"/>
        </div>
      </div>   
      </div>
      <div className="flex-none">
        <div className="flex items-center space-x-4">
          <a className="btn btn-ghost text-xl">Login</a>
          <a className="btn btn-ghost text-xl">Signin</a>
        </div>
        <div className="dropdown dropdown-end">
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
