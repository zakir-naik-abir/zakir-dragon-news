import { IoBookmarkOutline } from "react-icons/io5";
import { TbEyeFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
      const {_id, others_info, category_id, rating, number, badge, total_view, title, author, name, published_date, img, thumbnail_url, image_url, details } = news;
  return (
    <div className="flex ">
      <div className="flex flex-col space-y-2 overflow-hidden  shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between items-center space-x-4 bg-gray-200 p-2 px-3">
          <div className="flex items-center gap-3">
            <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author.name}</a>
              <span className="text-xs dark:text-gray-600">{author.published_date}</span>
            </div>
          </div>
          <div className="flex gap-3 text-2xl">
            <IoBookmarkOutline></IoBookmarkOutline>
            <CiShare2></CiShare2>
          </div>
        </div>
        {/* title */}
        <div className="px-3">
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        </div>
        <div className="px-3">
          <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
          <p className="text-sm dark:text-gray-600">
            {
              details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-semibold">Read More...</Link></p> : <p>details.slice(0, 180)</p>
            }
          </p>
        </div>
        <div className="flex  justify-between items-center px-3">
          <div className="items-center space-x-3">
            <button aria-label=" Share this post" type="button" className=" text-center">
              <div className="flex gap-1 text-yellow-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
            </button>
            <button aria-label="Bookmark this post" type="button" className="">
              {rating.number}
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600 pb-3">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              
              <span className="text-xl"><TbEyeFilled></TbEyeFilled></span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <span>{total_view}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard;