fetch('data.json').then(r=>r.json()).then(data=>{
let total=0,tb=document.getElementById('tbody');
let labels=[],vals=[];
data.gastosFijos.forEach(g=>{
 total+=g.anual;
 tb.innerHTML+=`<tr><td>${g.nombre}</td><td>Q${g.anual.toFixed(2)}</td></tr>`;
 labels.push(g.nombre); vals.push(g.anual);
});
document.getElementById('annual').textContent='Q'+total.toFixed(2);
document.getElementById('monthly').textContent='Q'+(total/12).toFixed(2);
new Chart(document.getElementById('chart'),{type:'doughnut',data:{labels:labels,datasets:[{data:vals}]}})
});