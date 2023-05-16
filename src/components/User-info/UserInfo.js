import React, { useState, useEffect } from 'react';
import { GetUserDetailByUserName } from '../../services/Services';
function UserData({ }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await GetUserDetailByUserName();
        // const data = await response.json();
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserData;
