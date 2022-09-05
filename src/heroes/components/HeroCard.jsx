import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>);

    return <p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `./assets/heroes/${id}.jpg`;

  return (
    <div className="overflow-hidden rounded-lg border-double border-black border-4 w-44 bg-white animate__animated animate__fadeIn"> 
           
            <div>

                <div>
                    <img src={heroImageUrl} alt={superhero} />
                </div>

                <div className="p-2">
                    <div className="text-black">
                        <h5 className="font-bold">{superhero}</h5>
                        <p>{alter_ego}</p>
                        
                        <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                        <p>
                            <small>{first_appearance}</small>
                        </p>

                        <Link className="text-blue-700" to={`/hero/${ id }`}>
                            More...
                        </Link>

                    </div>
                </div>

            </div>
    </div>
  )
}
