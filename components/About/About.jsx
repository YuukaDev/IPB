import { AiOutlineSafety, AiOutlineWechat } from "react-icons/ai";

import { BiCloudDownload } from "react-icons/bi";

export default function Features() {
  return (
    <div className="mt-28 float-left w-2/6">
      <div className="">
        <h1 className="text-lg text-left">Who Are We</h1>
        <p className="text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, ex
          nulla aperiam reiciendis, ipsam distinctio veritatis exercitationem
          vero sit in ducimus iure labore at voluptatem nihil recusandae magnam
          dolores enim?
        </p>
      </div>
      <div className="flex justify-start items-center gap-20 mt-5">
        <div className="flex flex-col justify-start items-start">
          <BiCloudDownload fontSize="3em" />
          <h2 className="mt-2 text-lg">Instant Delivery</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineSafety fontSize="3em" />
          <h2 className="mt-2 text-lg">Reliable & safe</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineWechat fontSize="3em" />
          <h2 className="mt-2 text-lg">Customer Support</h2>
        </div>
      </div>
    </div>
  );
}
