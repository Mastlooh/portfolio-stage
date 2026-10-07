const data = [
  {mot:'pomme', association:'pomme gala', cat:'Fruits', statut:'Actif'},
  {mot:'lait', association:'lait demi-écrémé', cat:'Produits laitiers', statut:'Actif'},
  {mot:'pâtes', association:'pâtes penne', cat:'Épicerie', statut:'Actif'},
  {mot:'café', association:'café moulu', cat:'Épicerie', statut:'À vérifier'},
  {mot:'pizza', association:'pizza margherita', cat:'Surgelés', statut:'Actif'}
];
const rows=document.querySelector('#rows'), search=document.querySelector('#search');
function render(){const q=search.value.toLowerCase(); rows.innerHTML=data.filter(x=>Object.values(x).some(v=>v.toLowerCase().includes(q))).map(x=>`<tr><td><strong>${x.mot}</strong></td><td>${x.association}</td><td>${x.cat}</td><td><span class="pill">${x.statut}</span></td></tr>`).join('')}
search.addEventListener('input',render); document.querySelector('#add').addEventListener('click',()=>alert('Dans le projet réel, cette action pouvait écrire une nouvelle donnée dans Google Sheets via l’API.')); render();
