import React, { useState }  from 'react'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovie = ({ handelAdd }) => {
  const [titles, setTitles] = useState("");
  const [posters, setPosters] = useState("");
  const [rate, setRate] = useState("");
  const [trailer, setTrailer] = useState("");

    const AddNewMovie = () => {
        handelAdd({

            id: Math.random(),
            title: titles,
            rating: rate,
            image: posters,
            Description:trailer
        });
  };
  const [toggle, setToggle] = useState(false);
  const handel = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <Button variant="outline-warning" onClick={()=>handel()}>New Movie</Button>
      </div>
      {toggle && (<div style={{display:'flex', flexDirection:'column',marginLeft:'40%', marginTop:'50px',width:'300px' }}>


    < input
        type="text"
        placeholder="Add your movie"
        onChange={(e) => setTitles(e.target.value)}
        />
    < input
        type="text"
        placeholder="Add the movie picture"
        onChange={(e) => setPosters(e.target.value)}
        />
        < input
        type="text"
        placeholder="Add the Rating "
        onChange={(e) => setRate(e.target.value)}
        />
        < input
        type="text"
        placeholder=" Description of te movie "
        onChange={(e) => setTrailer(e.target.value)}
        />




     <Button  onClick={() => AddNewMovie()} variant="outline-warning" style={{displa:'flex', flexDirection:'row'}}>Add</Button>

     </div>)}


      </>
      )
}

export default AddMovie
