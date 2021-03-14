
export function Supprimer(email) {
    return (
        
    fetch('http://localhost:4000/users', {
        method: "DELETE",
        body: email,
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))
    
        
    )
    
}

