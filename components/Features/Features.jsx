import {
  AiOutlineCloudDownload,
  AiOutlineSafety,
  AiOutlineWechat,
} from "react-icons/ai";

export default function Features() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(209 213 219)"
          fill-opacity="1"
          d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,149.3C672,128,768,64,864,64C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-featuredColor flex justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center">
          <AiOutlineCloudDownload fontSize="3em" />
          Super fast Instant digital download
        </div>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineSafety fontSize="3em" />
          Super fast Instant digital download
        </div>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineWechat fontSize="3em" />
          Super fast Instant digital download
        </div>
      </div>
    </div>
  );
}
