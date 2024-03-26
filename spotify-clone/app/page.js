"use client";

import Card from "@/components/Card";
import Left1 from "@/components/Left1";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [audio, setAudio] = useState(null);
  const [cursong, setCursong] = useState(null);
  const [isplaying, setIsplaying] = useState(false);

  useEffect(() => {
    const main = () => {
      const songsData = [
        {
          filename: "_Heeriye(PagalWorld.com.cm).mp3",
          name: "Hereye",
          id: "0",
          artist: "Jasleen Royal",
          link: "https://c.saavncdn.com/022/Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
        },
        {
          filename: "_Ram Siya Ram(PagalWorld.com.cm).mp3",
          name: "Ram Siya Ram",
          id: "1",
          artist: "Sachet Tandon",
          link: "https://i.pinimg.com/736x/18/3c/e2/183ce2ec09dfba0645702ef05e840f72.jpg",
        },
        {
          filename: "God Damn(PagalWorld.com.cm).mp3",
          name: "God Damn",
          id: "2",
          artist: "Badshah,Karan Ahuja",
          link: "https://www.pagalworld.com.cm/siteuploads/thumb/sft142/70529_4.jpg",
        },
        {
          filename: "Har Har Shambhu(PagalWorld.com.cm).mp3",
          name: "Har Har Shambhu",
          id: "3",
          artist: "Jeetu Sharma",
          link: "https://c.saavncdn.com/224/Har-Har-Shambhu-Shiv-Mahadeva-Hindi-2022-20220729065345-500x500.jpg",
        },
        {
          filename: "O Mahi O Mahi(PagalWorld.com.cm).mp3",
          name: "O Mahi O Mahi",
          id: "4",
          artist: "Arijit Singh",
          link: "https://c.saavncdn.com/058/O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg",
        },
        {
          filename: "Pehle Bhi Main(PagalWorld.com.cm).mp3",
          name: "Pehle bhi me",
          id: "5",
          artist: "Raj Shekhar and Vishal Mishra",
          link: "https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20231124191036-500x500.jpg",
        },
        {
          filename: "Sector 15(PagalWorld.com.cm).mp3",
          name: "Sector 15",
          id: "6",
          artist: "Khasa Ala Chahar",
          link: "https://www.pagalworld.com.cm/siteuploads/thumb/sft142/70531_4.jpg",
        },
      ];
      const songUrls = songsData.map((song) => ({
        url: `/Songs/${song.filename}`,
        name: song.name,
        id: song.id,
        artist: song.artist,
        link: song.link,
      }));

      var audio = new Audio("/Songs/_Heeriye(PagalWorld.com.cm).mp3");
      setAudio(audio);
      setSongs(songUrls);
    };

    main();
  }, []);

  const playstop = () => {
    if (isplaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsplaying(!isplaying);

    // var audio = new Audio(songs[1].url);
    // audio.play();
  };

  const playAudio = async (prop) => {
    stopAudio();

    var audio = new Audio(songs[prop].url);
    audio.play();
    setAudio(audio);
    setIsplaying(true);

    setCursong(prop);
  };
  console.log(audio);
  console.log(cursong);

  for (let index = 0; index < songs.length; index++) {
    const element = songs[index];
    if (element.id == cursong) {
      console.log(element.id);
    }
  }

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      // audio.currentTime = 0;
      // setAudio(null);
    } else {
    }
  };

  const nextsong = () => {
    stopAudio();
    if (cursong >= songs.length - 1) {
      setCursong(0);
      var audio = new Audio(songs[0].url);

      setAudio(audio);
      audio.play();
      setIsplaying(true);
    } else {
      for (let index = 0; index < songs.length; index++) {
        const element = songs[index];
        if (element.id == cursong + 1) {
          var audio = new Audio(songs[index].url);

          setAudio(audio);
          setCursong(cursong + 1);
          audio.play();
          setIsplaying(true);
        }
      }
    }
  };

  const prevsong = () => {
    stopAudio();
    if (cursong == 0) {
      setCursong(songs.length-1);
      var audio = new Audio(songs[songs.length-1].url);

      setAudio(audio);
      audio.play();
      setIsplaying(true);
    } else {

    for (let index = 0; index < songs.length; index++) {
      const element = songs[index];
      if (element.id == cursong - 1) {
        var audio = new Audio(songs[index].url);

        setAudio(audio);
        audio.play();
        setCursong(cursong - 1);
      }
    }
  }
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>

      <body>
        <div className="w-full leftnavbar  fixed  flex">
          <Left1 songs={songs} play={playAudio} />

          <Navbar />
        </div>
        <div className="w-full bg-[#181717] relative">
          <div className=" p-4 ml-0 absolute w-[75%] m-2  right">
            <div className="text-3xl spotifyplaylist pl-3">Spotify Playlists</div>
            <div className="cards flex  flex-wrap">
              {songs.map((song, index) => (
                <div
                  key={index}
                  className=" card bg-zinc-800 w-[20%] p-2 flex flex-col gap-1 rounded-md m-5"
                >
                  <Card
                    onClick={() => {
                      playAudio(index);
                    }}
                    id={index}
                    songs={song.name}
                    songartist={song.artist}
                    link={song.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed playbar right-4 bottom-3 w-[75%]">
          <div className="text-white  bottom-4 flex flex-col  left-96 right-16 w-[100%] rounded-3xl h-14 bg-[#4b5563]">
            <div className="flex mx-6 mt-1">
              <div className="songinfo mt-1 text-black w-[40%]">
                {cursong != null ? <div></div> : <div className="">Hereye</div>}
                {songs.map((song, index) => (
                  <div key={index}>
                    {index == cursong ? (
                      <div className="">{song.name}</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex  justify-center">
                <img
                  onClick={prevsong}
                  className="w-7 hover:cursor-pointer"
                  src="/icons/previous.svg"
                  alt="ecfdsdsad"
                />

                {!isplaying ? (
                  <img
                    className="w-7 mx-3 hover:cursor-pointer"
                    onClick={playstop}
                    src="/icons/playbtn.svg"
                    alt="ecfdsdsad"
                  />
                ) : (
                  <img
                    className="w-5 mx-4 hover:cursor-pointer"
                    onClick={playstop}
                    src="/icons/pausebtn.svg"
                    alt="ecfdsdsad"
                  />
                )}

                <img
                  onClick={nextsong}
                  className="w-7 hover:cursor-pointer"
                  src="/icons/nextbtn.svg"
                  alt="ecfdsdsad"
                />
              </div>
              <div className="songtime"></div>
            </div>
            <div className="w-full flex my-2 justify-center">
              <div className="seekbar border-2 border-black w-[95%] flex justify-center"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
