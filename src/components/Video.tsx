import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const state = ready;
  console.log(state);
  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="flex items-center justify-center py-7 bg-white">
      <div className="w-full max-w-5xl px-4 relative">
        <div className="relative w-full h-0 pb-[56.25%]">
          {!playing && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('car6.JPG')",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <button
                  onClick={handlePlay}
                  className="bg-white bg-opacity-70 p-4 rounded-full z-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-12 h-12"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <motion.p className="md:text-5xl text-3xl font-bold text-white mt-4 z-20 text-center">
                  HHS Car Club | Cars & Coffee Show
                </motion.p>
              </div>
              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            </div>
          )}
          {playing && (
            <div className="absolute inset-0">
              <ReactPlayer
                url="https://youtu.be/SiD8I38bP8Q"
                playing={playing}
                controls={true}
                width="100%"
                height="100%"
                onReady={() => setReady(true)}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      showinfo: 0,
                      rel: 0,
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
