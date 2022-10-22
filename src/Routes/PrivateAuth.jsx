import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Contexts/Context';
import Spinner from 'react-bootstrap/Spinner';
const PrivateAuth = ({children}) => {
    let location = useLocation();
    const {userData,loading} = useContext(AuthContext);
    if(loading){
        return<>
             <div className='text-center mt-5'>
             <Spinner animation="grow" variant="primary" /> 
      <Spinner animation="grow" variant="secondary"  />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="dark" />
             </div>
        </>
    }
    if (!userData) {
        
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
    
}

export default PrivateAuth
