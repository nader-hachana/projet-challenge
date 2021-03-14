import React from 'react'
import {useState, useEffect} from 'react'
function Users_data() {
  const [users, setUsers] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded) {
      console.log("loaded");
      fetch("http://localhost:4000/")
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setUsers(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [users])
  return(
  <div>{console.log([users])}</div>
 );

}
export default Users_data




/*export const Users_data = [
  
    {
      Nom: "Hachana",
      Prenom: "Med Nader",
      date_de_naissance: "19/05/1999",
      mot_de_passe: "12345678",
      numero: "50271153",
      email: "mednader.hachana@ensi-uma.tn",
      pole: "Devcom",
      role: "utilisateur",
    },
    {
        Nom: "makhlouf",
        Prenom: "Khadija",
        date_de_naissance: "14/03/1999",
        mot_de_passe: "87654321",
        numero: "52995314",
        email: "khadijamalek.makhlouf@ensi-uma.tn",
        pole: "Devcom",
        role: "utilisateur",
      },
    ];*/


