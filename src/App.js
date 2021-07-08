import React, { useState } from 'react'

export const App = () => {
  const [developers, setDevelopers] = useState([
    {
      name: 'Brian',
      expertise: ['front-end', 'react'],
      available_for_hire: true,
      favorited: false
    },
    {
      name: 'Sara',
      expertise: ['front-end', 'react', 'graphic design'],
      available_for_hire: false,
      favorited: false
    },
    {
      name: 'Greg',
      expertise: ['front-end', 'react'],
      available_for_hire: true,
      favorited: true
    },
    {
      name: 'Logan',
      expertise: [],
      available_for_hire: true,
      favorited: false
    },
    {
      name: 'Shaune',
      expertise: ['front-end', 'vue'],
      available_for_hire: true,
      favorited: false
    },
    {
      name: 'Emily',
      expertise: ['back-end', 'django'],
      available_for_hire: false,
      favorited: true
    }
  ])

  const handleFavorite = (faveDevName) => {
    const newDevelopers = developers.map((dev) => {
      console.log(faveDevName)
      if (dev.name === faveDevName && dev.favorited) {
        return { ...dev, favorited: false }
      } else {
        return { ...dev, favorited: true }
      }
    })
    setDevelopers(newDevelopers)
  }

  return (
    <main>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, idx) => {
        if (dev.available_for_hire) {
          return (
            <Developer favorited={dev.favorited} name={dev.name} expertise={dev.expertise} key={idx} id={idx} handleFavorite={(dev) => handleFavorite(dev)} />
          )
        }
        return (
          <div key={idx}>
            <h3 style={{ color: 'red' }}>Not Available</h3>
            <Developer favorited={dev.favorited} name={dev.name} expertise={dev.expertise} key={idx} id={idx} handleFavorite={(dev) => handleFavorite(dev)} />
          </div>
        )
      })}
    </main>
  )
}

export const Developer = (props) => {
  const { id, expertise, name, favorited, handleFavorite } = props

  return (
    <div id={id} className=''>
      <h1>{name}</h1>
      {expertise && expertise.map((item, idx) => {
        return (<p key={idx} id={idx}>{item}</p>)
      })}
      <p>{expertise}</p>
      <button onClick={() => handleFavorite(name)}>{favorited ? '♥️' : '♡'}</button>
      <h2>{expertise[0]} developer</h2>
    </div>
  )
}
