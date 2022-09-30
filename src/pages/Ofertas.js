import { useEffect, useContext } from 'react';
// import axios from 'axios';
import UserContext from "../context/UserContext";

const Ofertas = () => {
  const { jwt } = useContext(UserContext);

  useEffect(() => {
    if (jwt) {
      fetch('https://localhost:7172/api/JobPosition', {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${jwt}`,
        },
      })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
    }
  }, [jwt]);

  return (
    <div>Ofertas</div>
  )
}

export default Ofertas;