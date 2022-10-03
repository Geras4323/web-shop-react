import React from 'react';

function Home() {
  return (
    <div className="w-screen h-screen grid justify-center items-center">
      <div className="w-80 flex flex-col items-center">
        <h1 className="text-xl mb-9 text-start w-full font-bold">Welcome</h1>

        <p className="text-lg">Go to <a href="/showroom" className="text-hospital-green underline">Showroom</a></p>

      </div>
    </div>
  );
}

export { Home }