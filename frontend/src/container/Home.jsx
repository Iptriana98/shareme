import { React, useState, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

import { Sidebar, UserProfile } from '../components'
import Pins from './Pins'
import { userQuery } from '../utils/data'
import { client } from '../client'
import logo from '../assets/logo.png'


const Home = () => {
  return (
    <h1 className='text-3xl font-bold underline'>Hello world! Home</h1>
  )
}

export default Home