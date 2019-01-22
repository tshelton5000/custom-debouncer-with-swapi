import React, { useState, useEffect} from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [canFetch, setCanFetch] = useState(false);
  const [returnData, setReturnData] = useState('Enter an integer')

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  useEffect(() => {
    if (query !== ''){
      let timer = setTimeout(() => setCanFetch(true), 1500)
      return(
        () => clearTimeout(timer)
      )
    }
  }, [query])

  useEffect(() => {
    if (canFetch){
      fetch(`https://swapi.co/api/people/${query}/`)
        .then(res => res.json())
        .then(json => {
          setReturnData(json.name)
          setCanFetch(false)
        })
    }
  })

  return(
    <div>
      <h1>Search for a Star Wars Character Below!</h1>
      <input onChange={handleChange}/><br/>
      {returnData}
    </div>
  )
}

export default App;
