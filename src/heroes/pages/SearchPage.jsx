import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0) ;
  const showError = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: q,
  });  


  const onSearchSubmit = (event) => {
      event.preventDefault();
      // if (searchText.trim().length <= 1 ) return;

      navigate(`?q=${ searchText }`);
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="sm:grid grid-cols-2 gap-5 mt-4">

        <div className="max-w-md">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a Hero"
              className="text-black mt-4 p-1 w-full rounded-md"
              name="searchText"
              value={ searchText }
              onChange={ onInputChange }
              autoComplete="off"
            />
          </form>

          <button 
            className="my-3 border-2 border-sky-500 p-1 rounded-md hover:bg-sky-500"
            onClick={onSearchSubmit}
            >
            Search
          </button>

        </div>

        <div>
          <h4>Results</h4>
          <hr />

  
          <div className="rounded-md bg-blue-300 text-blue-800 w-auto p-2 mt-3 animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>Search a Hero</div>
          
          <div className="rounded-md bg-red-300 text-red-800 w-auto p-2 mt-3 animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>No Hero with <b>{q}</b></div>          
    
          <div className="md:flex gap-10 mt-3">
          {
            heroes.map(hero => (
              <HeroCard className="flex flex-row" key={hero.id} {...hero} />
            ))
          }
          </div>

        </div>

      </div>
    </>
  )
}
