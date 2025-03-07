import React from 'react'
import Hero from '../../Components/Hero/Hero'

import Info from '../../Components/Info/Info'
import CourseList from '../../Components/CourseList/CourseList'
import CourseContext from '../../Components/CourseContext/CourseContext'
import Mobile from '../../Components/Mobile/Mobile'
import Benefits from '../../Components/Benefits/Benefits'
import Spreading from '../../Components/Spreading/Spreading'



const Home = () => {
    return (
        <div>
            <Hero />

            <Info />
            <CourseList />
            <CourseContext />
            <Mobile />
            <Benefits />
            <Spreading />


        </div>
    )
}

export default Home
