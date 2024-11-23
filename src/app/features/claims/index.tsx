import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

function ClaimsComponent() {
  const location = useLocation();

  useEffect(() => {
   const state = location.state as { sreachType: string };
   console.log("🚀 ~ useEffect ~ state:", state)

  }, [location])
  
  return (
    <div>ClaimsComponent</div>
  )
}

export default ClaimsComponent