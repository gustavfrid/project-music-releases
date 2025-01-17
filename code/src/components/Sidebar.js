import React from 'react'
import data from '../stretch-goal.json'
// import './sidebar.css'

// console.log(data)

export const Sidebar = () =>
  data.playlists.items.map(item => (
    <li className='playlist' key={item.name}>
      <a href={item.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
        {item.name}
      </a>
    </li>
  ))
