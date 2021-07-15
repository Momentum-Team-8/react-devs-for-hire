import React, { useState } from 'react'
import Developer from './components/Developer'
import { data } from './developers'

export const App = () => {
  const [developers, setDevelopers] = useState(data)

  const handleFavorite = (faveDevName) => {
    const newDevelopers = developers.map((dev) => {
      if (dev.name === faveDevName && dev.favorited) {
        console.log(dev.name)
        console.log(faveDevName)
        console.log(dev.name === faveDevName)
        return { ...dev, favorited: false, isExpanded: true }
      } else {
        return { ...dev, favorited: true, isExpanded: false }
      }
    })
    setDevelopers(newDevelopers)
  }

  return (
    <main>
      <h1>FOOBAR</h1>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, idx) => {
        if (dev.available_for_hire) {
          return (
            <Developer favorited={dev.favorited} name={dev.name} expertise={dev.expertise} key={idx} id={idx} handleFavorite={(dev) => handleFavorite(dev)} isExapnded={dev.isExpanded} />
          )
        }
        return (
          <div key={idx}>
            <h3 style={{ color: 'red' }}>Not Available</h3>
            <Developer favorited={dev.favorited} name={dev.name} expertise={dev.expertise} key={idx} id={idx} handleFavorite={(dev) => handleFavorite(dev)} isExpanded={dev.isExpanded} />
          </div>
        )
      })}
    </main>
  )
}
