import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {

  const {id} = useParams();  
  const hero = useMemo(() => getHeroesById( id ) , [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
      navigate (-1)
  }

  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className="animate__animated animate__fadeInLeft">

        <div className="mt-5 flex flex-col gap-5 sm:flex-row">

          <div className="border-4 border-double border-black bg-white w-40 md:w-60">
                <img 
                  src={heroImageUrl} 
                  alt={hero.superhero}
                  className='w-full' 
                  />
          </div>


          <div className="max-w-sm h-auto ">
              <h3 className="text-xl" >{hero.superhero}</h3>
              <ul className="divide-y divide-sky-700">
                <li><b>Alter ego: </b>{ hero.alter_ego }</li>
                <li><b>Publisher: </b>{ hero.publisher }</li>
                <li><b>First appearance: </b>{ hero.first_appearance }</li>
              </ul>

              <h5 className="mt-3 font-bold" >Characters</h5>
              <p>{ hero.characters }</p>

              <button 
                className="mt-3 border-2 border-sky-500 p-1 rounded-md hover:bg-sky-500"
                onClick={onNavigateBack}  
              >Return</button>
          </div>
        </div>
    </div>
    
  )
}
