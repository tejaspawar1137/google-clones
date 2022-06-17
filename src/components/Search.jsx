import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import {useNavigate} from 'react-router-dom'
import MicIcon from "@material-ui/icons/Mic";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({hideButton= false, size}) => {
    const navigate = useNavigate()
    const [{term}, dispatch] = useStateValue()
    console.log(term,'state');
  const [input, setInput] = React.useState("");

  const Searches = (e) => {
    e.preventDefault();
    dispatch({type: actionTypes.SET_SEARCH_TERM, term: input})
    navigate('/search')
  };
  return (
    <form className="search">
      <div className={size ? "nosearchinput": "search__input"}>
        <SearchIcon style={{ color: "gray" }} />
        <input
        className={size ? "noinput" : "input"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <MicIcon />
      </div>
      {!hideButton ? (
        <div className="search__buttons">
        <Button type="submit" onClick={Searches} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">Feeling Lucky</Button>
      </div>
      ) : (
        <div className="search__buttons">
      
      </div>
      )}
      
    </form>
  );
};

export default Search;
