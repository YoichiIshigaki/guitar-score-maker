import React from 'react'
import {auth} from "../../modules/firebase/firebase"

const MyPage:React.FC = () => {

  return (
    <div>
      <h1>My Page</h1>
      <button 
        className="bg-blue-400 hover:bg-blue-600 rounded-xl shadow-xl text-white m-10 text-center p-2"
        onClick={() => auth.signOut()}>
        <p>サインアウト</p>
      </button>
    </div>
  )
}

export default MyPage
