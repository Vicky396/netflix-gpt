import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video '>
        <h1 className='text-4xl font-bold '>{title}</h1>
        <p className='py-6 text-sm w-1/3'>{overview}</p>
        <div>
        <button className='bg-white text-black  p-2 px-10 text-lg rounded-lg  mx-2 hover:opacity-20'>Play</button>
        <button className='bg-white text-black p-2 px-10text-lg rounded-lg  mx-2 hover:opacity-20'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle