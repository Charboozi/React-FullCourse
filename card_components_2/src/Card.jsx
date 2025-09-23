import profilePic from './assets/react.svg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Charboozi</h2>
            <p className='card-text'>I make Youtube videos and play video games</p>
        </div>
    );
}
// in jsx {class} is a reserved keyword so we have to use {className}
export default Card