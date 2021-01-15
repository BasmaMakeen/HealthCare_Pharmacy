
var btnShow=document.querySelector('#btnShow');
var btnDelete=document.querySelector('#btnDelete');

var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);
function onShowFun()
{
db.transaction(function (tx) { 
  tx.executeSql('SELECT mCode,mName,mCount,mPrice,mUrl FROM Items ', [], function (tx, results) { 
     var html = "<table>";
     var html = "<table style='border:black solid;'>";
     html+="<th>Prod ID&nbsp;&nbsp;</th><th>Prod Name &nbsp;&nbsp;</th><th>Prod Quantity&nbsp;&nbsp;</th><th>Prod Price &nbsp;&nbsp;</th><th>Prod URL</th>";     
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
function onDeleteFun(){

  var ProdID=document.getElementById('SelectItem').value;
  console.log(ProdID);
     
  db.transaction(function (tx) { 
  tx.executeSql('SELECT mCode FROM Items ', [], function (tx, results) { 
  
  console.log(results.mCode);
  var len=results.rows.length;
  console.log(len);
    // for (i = 0; i < len; i++) 
    // {
    //  if(results.rows.item(i).mCode==ProdID)
    //  {
    //   tx.executeSql('DELETE FROM Items WHERE mCode = ? ',[ProdID]); 
    //   console.log('Prpduct Deleted Successfgully');
    //  }
    // }
  });})
    
    // if((results.rows.item(i).username==user&user!="admin")& (results.rows.item(i).password==pass))
    //             {
    //                var conf=confirm("login Sussusfully");
    //                if(conf)
    //                {  
    //                    window.location.href="Home_User.html";
    //                }
    //                else {
    //                   window.location.href ="Login.html";}
    //                 break ;   
    //                }   
    //     else
    //        {
    //             Loginpass=true;
    //        }
    // }
  

}
btnShow.addEventListener('click',onShowFun);
btnDelete.addEventListener('click',onDeleteFun)
  

