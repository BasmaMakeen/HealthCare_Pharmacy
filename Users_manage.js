var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);

db.transaction(function (tx) { 
tx.executeSql('CREATE TABLE IF NOT EXISTS Users ( username unique,password)'); })

var user;
var pass;
let btnSign=document.getElementById("btnSignUp");
var SignPass=false;
function onClick_2()
{
    user=document.getElementById("InputUsername").value;
    pass=document.getElementById("inputPassword").value;
    // console.log(user);
    // console.log(pass);
  //  db.transaction(function (tx) {
  //   tx.executeSql('SELECT * FROM Users', [], function (tx, results) {
  //   var len = results.rows.length, i;
  //   for (i = 0; i < len; i++) 
  //   {
  //       SignPass=false;
  //     if(results.rows.item(i)!=user){SignPass=true;}  
  //   }
  //   if(SignPass){
      db.transaction(function (tx) { 
      tx.executeSql('INSERT INTO Users (username,password) VALUES (?,?)',[user,pass]); 
     
     alert("User with name "+user+" password "+pass+"  Added  Sussusfully");
    
  }) 
  
    }   
   
if(btnSign)
{
  btnSign.addEventListener('click',onClick_2);
}
console.log("finish");
//----------------------variable--------------------------

var btnShow=document.querySelector('#btnShow');
var btnDelete=document.querySelector('#btnDelete');
var btnUpdate=document.querySelector('#btnUpdate');

var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);
//---------------------- Show all Users--------------------------
function onShowFun()
{
db.transaction(function (tx) { 
  tx.executeSql('SELECT * FROM Users ', [], function (tx, results) { 
     var html = "<table>";
     var html = "<table style='border:black solid;'>";
     html+="<th>User Name &nbsp;&nbsp;</th><th>Password &nbsp;&nbsp</th>";     
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
//---------------------- Delete User--------------------------
function onDeleteFun(){

  var UserName=document.getElementById('SelectItem').value;
  console.log(UserName);
     
  db.transaction(function (tx) { 
  tx.executeSql('DELETE FROM Users WHERE username = ? ',[UserName]); 
  alert( UserName+' Deleted Successfgully');
   
  });}
  //---------------------- Update User--------------------------
  function onUpdate(){
    var UserName=document.getElementById('SelectItem').value;
    var New_user=document.getElementById('New_user').value;
    var New_pass=document.getElementById('New_pass').value;
    console.log(UserName);
    console.log(New_user);
    console.log(New_pass);
 
    db.transaction(function (tx) { 
    tx.executeSql('UPDATE  Users SET username= ? , password=? WHERE username = ? ',[New_user,New_pass,UserName]); 
  
    console.log( UserName+' Update  Successfgully');
     
    });
  }
    
   


btnShow.addEventListener('click',onShowFun);
btnDelete.addEventListener('click',onDeleteFun);
btnUpdate.addEventListener('click',onUpdate);

  

