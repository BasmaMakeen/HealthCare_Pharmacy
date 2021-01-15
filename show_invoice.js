
var btnSearch=document.querySelector('#btnASearch');

var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);
function onSearch()
{
  var Search=document.querySelector('#SelectInv').value;
 //var Search=document.querySelector('#SelectInv').Value;
  console.log(Search);

db.transaction(function (tx) { 
  tx.executeSql('SELECT Inv_User,H.Inv_date,D.Prod_name,D.quantity,D.price_prod FROM Invoice_head H,Invoice_Details D WHERE H.Inv_num=D.Inv_num AND H.Inv_num=?', [Search], function (tx, results) { 
     var html = "<table>";
     var html = "<table style='border:black solid;'>";
     html+="<th>User Name&nbsp;&nbsp;</th><th>Invoice Date &nbsp;&nbsp;</th><th>Prod Name&nbsp;&nbsp;</th><th>Prod Quantity &nbsp;&nbsp;</th><th>Prod Price</th>";     
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
btnSearch.addEventListener('click',onSearch);