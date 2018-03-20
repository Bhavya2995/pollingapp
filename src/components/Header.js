import React from 'react'

const Header = () => {
   const styleHeader = {
        border: "1px solid",
        backgroundColor: "#121926",
        color: "white"
      }
  return (
    <div>
       <header className="mb-5" style={styleHeader}>
          <h1 className="display-4 text-center">Polling App</h1>
        </header>
    </div>
  )
}
export default Header;