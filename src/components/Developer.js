import React, { useState } from 'react'

const Developer = (props) => {
  const { id, expertise, name, favorited, handleFavorite } = props
  const [expanded, setExpanded] = useState(false)

  const handleShowMore = () => setExpanded(!expanded)

  return (
    <div id={id} className=''>
      <h1>{name}</h1>
      {expertise && expertise.map((item, idx) => {
        return (<p key={idx} id={idx}>{item}</p>)
      })}
      <button onClick={() => handleFavorite(name)}>{favorited ? '♥️' : '♡'}</button>
      <button onClick={handleShowMore}>More Information</button>
      {expanded &&
        <div>
          More information about the dev
        </div>}
      {expertise &&
        <h2>{expertise[0]} developer</h2>}
    </div>
  )
}

export default Developer
