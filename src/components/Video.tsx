import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className=" flex items-center justify-center object-cover object-fit">
      <ReactPlayer url="https://youtu.be/SiD8I38bP8Q" />
    </div>
  );
};

export default Video;
