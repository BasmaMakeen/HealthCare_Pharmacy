

var user;
var pass;
let btnLogin=document.getElementById("loginbtn");
console.log(btnLogin);
var Loginpass=false;
function onClick_2()
{
    user=document.getElementById("InputUsername").value;
    pass=document.getElementById("InputPassword").value;
    console.log(user);
    console.log(pass);
    if(user=="admin"&pass==123)
    {
       alert("login successful !!! Welcom  Admin");
       window.location.href="Home_Admin.html";
    }
    var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);
    db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Users (username unique, password)');
   //  tx.executeSql('INSERT INTO Users   VALUES ("admin",123)')
    // tx.executeSql('INSERT INTO Users (username,password) VALUES ("admin",123)');
    tx.executeSql('SELECT * FROM Users', [], function (tx, results) {
    var len = results.rows.length, i;
    console.log(len);
    for (i = 0; i < len; i++) 
    {
        Loginpass=false;
        console.log(results.rows.item(i).username);       
    if((results.rows.item(i).username==user&user!="admin")& (results.rows.item(i).password==pass))
                {
                   var conf=confirm("login successful welcom "+user);
                   if(conf)
                   {  
                       window.location.href="Home_User.html";
                   }
                   else
                   {
                      window.location.href ="Login.html";
                   }
                    break ;   
                   }   
        else
           {
                Loginpass=true;
           }

    }
   
     if(Loginpass){      alert("login failed Incorrect Username or Password");}


    
  });
  
});

    
}
if(btnLogin)
{
   btnLogin.addEventListener('click',onClick_2);
   console.log("finish");
}
