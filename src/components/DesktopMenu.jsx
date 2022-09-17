import React from 'react';

function DesktopMenu() {
  return (
    <div className="w-36 h-auto border border-very-light-pink rounded-md pt-5 px-5">
      <ul>
        <li className="text-end font-bold mb-5">
          <a href="/" className="title">My orders</a>
        </li>

        <li className="text-end font-bold mb-5">
          <a href="/">My account</a>
        </li>

        <li className="text-end pt-5 border-t border-t-very-light-pink mb-5">
          <a href="/" className="text-hospital-green text-sm ">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export { DesktopMenu }