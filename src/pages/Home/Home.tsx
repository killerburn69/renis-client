import React from 'react'
import CardMain from '../../components/CardMain'
import Mainbackground from '../../components/Mainbackground'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Subbackground from '../../components/Subbackground'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Mainbackground>
        <CardMain/>
      </Mainbackground>
    </div>
  )
}

export default Home