import { RiArrowUpSFill } from 'react-icons/ri';
import React, { useState } from 'react';

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube
} from 'react-icons/ai';


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (

    // this div contain className dark to toggle for dark mode
    // this name maste be write like this {dark} this conact name
    // if this name not hear wile be not apply dark property

    <div className={darkMode && "dark"}>

      <div className="text-slate-400 pb-8 dark:text-slate-300 dark:bg-bgDark-dark">

        {/* start header */}
        <div className="bg-bg pb-40 dark:bg-bgDark">
          <div className="container py-9 flex justify-between items-center">
            <div>
              <h1 className="text-slate-800 dark:text-white font-bold text-3xl">Social Media Dashboard</h1>
              <span className="text-sm">Total Followers : 12.3456</span>
            </div>

            <div>
              <label htmlFor="checkbox" className="mr-2">Dark Mode</label>
              <span>
                <input type="checkbox" id='checkbox' onChange={() => setDarkMode(!darkMode)} />
              </span>
            </div>

          </div>
        </div>
        {/* end header */}

        <div className="container -mt-40">

          {/* start large cards */}
          <div className="
                      grid 
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4
                      lg:gap-8
                      gap-6 
                      "
          >

            <div className="card before:bg-facebook">

              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-facebook"><AiFillFacebook size={22} /></span>
                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl">1987</h2>
              <p className="font-medium uppercase tracking-[0.3em]">Followers</p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen" >
                <span><RiArrowUpSFill /></span>
                <span>Today</span>
              </div>

            </div>

            <div className="card before:bg-twitter ">

              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-twitter"><AiFillTwitterSquare size={22} /></span>
                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl">1987</h2>
              <p className="font-medium uppercase tracking-[0.3em]">Followers</p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen" >
                <span><RiArrowUpSFill /></span>
                <span>Today</span>
              </div>

            </div>

            <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500  ">

              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-fuchsia-800"><AiFillInstagram size={22} /></span>
                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl">1987</h2>
              <p className="font-medium uppercase tracking-[0.3em]">Followers</p>

              <div className="flex items-center justify-center gap-1 pt-6 text-mainGreen" >
                <span><RiArrowUpSFill /></span>
                <span>Today</span>
              </div>

            </div>

            <div className="card before:bg-rose-700 ">

              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-rose-700"><AiFillYoutube size={22} /></span>
                <span>@abcd</span>
              </div>

              <h2 className="text-slate-800 dark:text-white text-6xl">1987</h2>
              <p className="font-medium uppercase tracking-[0.3em]">Followers</p>

              <div className="flex items-center justify-center gap-1 pt-6 text-rose-700" >
                <span><RiArrowUpSFill /></span>
                <span>Today</span>
              </div>

            </div>

          </div>
          {/* end large cards */}

          {/* start small cards*/}
          <div className="mt-12">
            <h2 className="text-2xl font-bold">Overview - Today</h2>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-6 mt-6">

              {Array(8).fill(" ").map((element) => (

                <div className="card-sm">

                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Pages Views</h4>
                    <AiFillFacebook className="text-facebook" size={22} />
                  </div>

                  <div className="flex items-center justify-between mt-8 ">
                    <h3 className="font-black text-2xl text-slate-800 dark:text-white">{""} 101</h3>
                    <div className="flex items-center justify-center gap-1 text-mainGreen text-sm">
                      <span><RiArrowUpSFill /></span>
                      <span>300%</span>
                    </div>
                  </div>

                </div>

              ))}
            </div>
          </div>
          {/* end small cards*/}

        </div>

      </div>

    </div>

  )
}

export default App
