import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import SearchIcon from "@material-ui/icons/Search";
import Telegram from "@material-ui/icons/Telegram";
import Books from "@material-ui/icons/BookSharp";
import Images from "@material-ui/icons/Image";
import Videos from "@material-ui/icons/PlayCircleFilledSharp";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term)
         console.log(data,'data');
  // const data = response;
  return (
    <>
      <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img
              className="searchPage__img"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </Link>
        </div>
        <div className="searchPage__headerBody">
          <Search size hideButton />
          <div style={{ display: "flex" }}>
            <div className="searchPage__options">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__options">
              <Telegram />
              <Link to="/all">News</Link>
            </div>
            <div className="searchPage__options">
              <Books />
              <Link to="/all">Books</Link>
            </div>
            <div className="searchPage__options">
              <Videos />
              <Link to="/all">Videos</Link>
            </div>
            <div className="searchPage__options">
              <Images />
              <Link to="/all">Images</Link>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div style={{margin:"30px 0", maxWidth:"700px"}}>
              <a  href={item.link} >{item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                 <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
              )}{item.displayLink}</a>
              <a  className="searchPage__resultTitle" href={item.link}>
                <h2 className="searchPage__resultTitleH2" style={{marginTop:'10px'}}>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchPage;
