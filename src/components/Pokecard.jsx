import './Pokecard.css'

const Pokecard = (props) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="Pokecard">
            <b>{props.name}</b>
            <img src={url}/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    )
}

export default Pokecard;