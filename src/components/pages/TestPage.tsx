import React from 'react'
import useFetchSongs from '../../hooks/useFetchSongs';

const TestPage = () => {
  const songs = useFetchSongs("/api/songs?q=metal")
  console.log("songs = ",songs)
  return (
    <>
        <div>Test Page</div>
        <ul>
          {
            songs.map(songs => {
              return ( <li>{songs.song_name}</li> )
            })
          }
        </ul>
    </>
  )
}

export default TestPage;


