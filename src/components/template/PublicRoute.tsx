import React,{ useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authUserContext } from '../../context/AuthUserContext';

type Props = {
  element:React.ReactElement,
}

const PublicRoute : React.FC<Props> = ({ element }) => {
  const { currentUser } = useContext(authUserContext);
  
  return (
    <>  
      {
        !currentUser ?
          ( element ) : 
          ( <Navigate to="/"/>  )
      }
    </>
  )
}


export default PublicRoute;