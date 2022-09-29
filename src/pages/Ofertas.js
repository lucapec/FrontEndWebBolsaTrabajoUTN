import { useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Ofertas = () => {
  const { jwt } = useContext(UserContext);

  useEffect(() => {
    if (jwt) {
      axios.get('https://localhost:7172/api/JobPosition', {}, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
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