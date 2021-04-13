import React, { useState, useEffect, useReducer,useMemo} from 'react';
import {indexDB,artists} from "../../api/db/indexedDb";
import RichAutoComplete from '../RichAutoComplete/RichAutoComplete';
import RichButton from '../RichButton/RichButton';
import RichNumberTextBox from '../RichNumberTextBox/RichNumberTextBox';
import RichTextBox from '../RichTextBox/RichTextBox';



const initialArtists = [];
function init(initialArtists){
  return [];
} 

function reducer(state,action){
  switch (action.type) {
    case 'fill-autocomplete':
      return artists;
      
    defauult:
      return new Error();
  }
}


export  function Home() {

  // const [artists, setArtists] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialArtists, init);
  const [loaded,setLoaded] = useState(false);
  //const artistsMemo = useMemo(()=>artists,[]);

   useEffect(()=>{
      if(!loaded){   
      dispatch({
        type: 'fill-autocomplete',
      });
      setLoaded(true);
    }
  });

  

  return (<>
  <div style={{padding: 20+"px"}}>
    <h2>Home</h2>
    <h4>Buttons of rich-ui framework</h4>
    <RichButton type="default"></RichButton>
    <RichButton type="primary"></RichButton>
    <RichButton type="secondary"></RichButton>
    <RichButton type="disable"></RichButton>
    <RichButton type="link"></RichButton>
    <br/>
    <h3>To use this button you must write</h3>
    <p>To write <code>RichButton</code> you can use type property to select the button you want <code>type</code></p>
    <h4> Text fields from material-ui framework</h4>
    <RichTextBox></RichTextBox>
    <br/>
    <h4>Number text field from Material iu framework</h4>
    <RichNumberTextBox></RichNumberTextBox>
    <h4>Autocomplete example with indexDB</h4>
    <RichAutoComplete></RichAutoComplete>
    <br/>
    <br/>
    <br/>
    <h4>Select artist from the list</h4>
    
  
    </div>
     </> );
     
    
  };

  