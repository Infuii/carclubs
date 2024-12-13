import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full">
          <ReactPlayer
            url="https://youtu.be/SiD8I38bP8Q"
            playing={true}
            controls={false}
            width="100%"
            height="100%"
            loop={true}
            muted={true}
            playsinline={true}
            style={{ objectFit: "cover" }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
                  controls: 0,
                  autoplay: 1,
                },
              },
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hopkinton Car Club
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Experience the Thrill of Our First Cars & Coffee
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Video;
