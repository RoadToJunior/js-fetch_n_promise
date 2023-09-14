fetch("http://api.nbp.pl/api/cenyzlota/last/20?format=json")
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => alert(err));
