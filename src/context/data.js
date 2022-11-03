import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdPlaylistPlay, MdOutlineExplore } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

const data = [
  {
    label: "Home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    label: "Search",
    url: "/search",
    icon: <BsSearch />,
  },
  {
    label: "Discover",
    url: "/discover",
    icon: <MdOutlineExplore />,
  },
  {
    label: "PlayList",
    url: "/watchlist",
    icon: <MdPlaylistPlay />,
  },
];
export default data;
