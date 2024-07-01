import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";

interface IslidbarButton {
  title:string,
  icon:React.ReactNode;
}

const slidbarButtonsItems:IslidbarButton[] = [
  {
    title:"Home",
    icon:<GoHomeFill></GoHomeFill>
  },
  {
    title:"Explore",
    icon:<CiSearch></CiSearch>
  },
  {
    title:"Notifications",
    icon:<IoIosNotifications></IoIosNotifications>
  },
  {
    title:"Messages",
    icon:<MdOutlineEmail></MdOutlineEmail>
  },
  {
    title:"Profile",
    icon:<CiUser></CiUser>
  }
]




export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen pt-3">
      <div className="col-span-3 pl-[30%] border border-r-white">       
          <div className="text-4xl pt-4 mb-2 h-fit w-fit hover:bg-gray-400 cursor-pointer rounded-full p-4 transition-all">
          <BsTwitterX />
          </div>
          <div>
            <ul>
              {slidbarButtonsItems.map((item)=><li className="flex p-4 text-4xl gap-4 w-fit h-fit mb-1 hover:bg-gray-400 cursor-pointer rounded-full transition-all"><span>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
          <div className="mt-4 px-5">
            <button className="text-4xl bg-[#1D9BF0] rounded-full p-4 w-full hover:bg-gray-400 cursor-pointer transition-all">Post</button>
          </div>
          </div>
      </div>
      <div className="col-span-6 bg-slate-700">
        feed
      </div>
      <div className="col-span-3">
        extra
      </div>
    </div>
  );
}
