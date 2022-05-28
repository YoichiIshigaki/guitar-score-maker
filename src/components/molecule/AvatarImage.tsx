import React,{ useContext } from 'react'
import GuitarIcon from "../../img/GuitarIcon.png"
import { authUserContext } from '../../context/AuthUserContext';

// type StyleProps = {
//   style?: { [key:string] : string | number }
// }

const AvatarImage : React.FC = () => {
  
  const imageUrl = "https://jp.seaicons.com/wp-content/uploads/2015/10/Guitar-icon1.png"
  const currentUser = useContext(authUserContext)

  console.log("currentUser = ",currentUser)

  return ( 
    <>
      <div className="bg-black text-white">
      {
        currentUser.currentUser ? (
          <>
            <img 
              src={currentUser.currentUser.photoURL || imageUrl}
              alt="avatar user"
              height="30"
              width="30"
            />
            <p>{currentUser.currentUser.displayName || "avatar name logined"}</p>
          </>
        ) : (
            <>
              <p>avatar image</p>
            </>
        )
      }
      </div>
    </>
  )
}

export default AvatarImage;
