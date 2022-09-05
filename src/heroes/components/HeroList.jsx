import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";



export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher ( publisher ), [publisher]) ;
    
  return (
    <div className="animate__animated animate__fadeIn grid mt-5 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {
            heroes.map(hero => (
                <HeroCard 
                    key={hero.id}
                    { ...hero } 
                    />
            ))
        }
    </div>
  )
}
