
var btnShow=document.querySelector('#btnShow');
var btnDelete=document.querySelector('#btnDelete');

var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);
function onShowFun()
{
db.transaction(function (tx) { 
  tx.executeSql('SELECT mCode,mName,mCount,mPrice FROM Items ', [], function (tx, results) { 
     var html = "<table>";
     var html = "<table style='border:black solid; text-align:center'>";
     html+="<th>Prod ID&nbsp;&nbsp;</th><th>Prod Name &nbsp;&nbsp;</th><th>Prod Quantity&nbsp;&nbsp;</th><th>Prod Price &nbsp;&nbsp;</th>";     
for (var i = 0; i < results.rows.length; i++) { 
html += "<tr>";
for(var prop in results.rows.item(i)){
  html+="<td>"+results.rows.item(i)[prop] +"</td>";
}
html+="</tr>";
     } 
html+="</table>";
document.getElementById("showdata").innerHTML = html;
  }, null); 
}); 
}

//---------------------- Delete Product--------------------------
function onDeleteFun(){
  var Prod_id=document.getElementById('prod_id').value;
  console.log(Prod_id);
  console.log(typeof(Prod_id))
  var Prod_id_num=Number(Prod_id);
  console.log(typeof(Prod_id_num))
  
  db.transaction(function (tx) { 
  tx.executeSql('DELETE FROM Items WHERE mCode = ? ',[Prod_id_num]); 
  alert( Prod_id+' Deleted Successfgully'); 
  });}
  //---------------------- Update User--------------------------
 
 

    
  


btnShow.addEventListener('click',onShowFun);
btnDelete.addEventListener('click',onDeleteFun)
  

