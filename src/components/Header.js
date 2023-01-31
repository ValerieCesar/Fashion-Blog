import React from 'react'
import TopNavagation from './TopNavagation'

function Header() {
  return (
    <div> 
      <header> 
      <TopNavagation/>    
        <h1>Sartre's List</h1>
        <h2 class="sub">Better-Dressed People</h2>
      </header>
    </div>
  )
}

export default Header