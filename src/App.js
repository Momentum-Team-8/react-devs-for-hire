import React from 'react'

export const Developer = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Front-End Developer</h2>
    </div>
  )
  // return React.createElement('div', {}, [
  //     React.createElement('h2', {}, props.name),
  //     React.createElement('h2', {}, 'Front-End Developer'),
  // ])
}

export const App = () => {
  return (
    <div>
      <Developer name='Roan' />
      <Developer name='Sara' />
      <Developer name='Brian' />
      <Developer name='Logan' />
      <Developer name='Shaune' />
      <Developer name='Greg' />
    </div>
  )

  //   return React.createElement("div", {}, [
  //     React.createElement(Developer, { name: "Roan" }),
  //     React.createElement(Developer, { name: "Sara" }),
  //     React.createElement(Developer, { name: "Brian" }),
  //     React.createElement(Developer, { name: "Greg" }),
  //     React.createElement(Developer, { name: "Shaune" }),
  //   ]);
}
