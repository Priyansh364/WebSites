import React from "react";

const Left1 = (props) => {

  return (
    <div>
      <div className="left h-screen  m-2 mt-0">
        <div className=" rounded ">
          <div className="home">
            <div className="">
              <img
                className="dark:invert spotifyicon hover:cursor-pointer w-24 pb-1 "
                src="/icons/spotifyicon.svg"
                alt="no img spotify  here"
              />
            </div>
            <div className="Home  hover:cursor-pointer flex">
              <img
                className="invert w-6"
                src="/icons/home.svg"
                alt="no image search here"
              />
              <h3>Home</h3>
            </div>
            <div className="search hover:cursor-pointer flex">
              <img
                className="invert"
                src="/icons/searchicon.svg"
                alt="no image search here"
              />
              <h3>Search</h3>
            </div>
          </div>
        </div>

        <div className="library flex justify-between flex-col h-full mb-4 rounded">
          <div className=" h-auto">
            <div className="p-3 lib flex align-center justify-between">
              <div className="m-3 flex gap align-center">
                <div>
                  <img
                    className="w-7 invert"
                    src="/icons/libicon.svg"
                    alt="no img spotify  here"
                  />
                </div>
                <div className="align-center pl-3 pt-1">Your Library</div>
              </div>
            </div>

            <div className="w-full min-h-48 max-h-96 overflow-auto	 bg-[#27272a]">
              {props.songs.map((song, index) => (
                <div key={index}>
                  <div className="bg-gray-600  justify-between flex rounded-md m-2 p-2 border-2 border-[#aeaeae] text-black">
                    <div className="flex gap-6">

                    <img className="w-6" src="/icons/musiclist.svg" alt="no icon" />
                    <div> 
                      <div>
                      {song.name} 
                        </div> 
                        <div className="text-xs text-[#242429]"> {song.artist} </div>
                    
                    </div>
                    </div>
                    <div onClick={()=>{ props.play(index)}} className="flex hover:cursor-pointer items-center">
                      <span> Play </span>   
                      <img className="ml-2 w-6" src="/icons/playbtn.svg" alt="no play" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer p-3 text-zinc-500 flex gap-5 flex-col  ">
            <div className="gap-5 flex">
              <div className="hover:cursor-pointer hover:underline-offset-auto">Legal</div>
              <div className="hover:cursor-pointer">Safety & Privacy Center</div>
              <div className="hover:cursor-pointer">Privacy Policy</div>
            </div>
            <div className="gap-5 flex">
              <div className="hover:cursor-pointer hover:text-xs">Cookies</div>
              <div className="hover:cursor-pointer"> About Us</div>
              <div className="hover:cursor-pointer">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left1;
