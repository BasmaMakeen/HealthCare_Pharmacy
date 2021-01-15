var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
tx.executeSql('CREATE TABLE IF NOT EXISTS Invoice_head (Inv_num unique,Inv_date,Inv_User,Inv_tptal_price )');
tx.executeSql('CREATE TABLE IF NOT EXISTS Invoice_Details (Inv_num,Prod_name,quantity,price_prod)');
 tx.executeSql('INSERT INTO Invoice_head VALUES(0,"Kataflam",30-3-2020,120)')
//  tx.executeSql('DELETE FROM Invoice_Details')
// tx.executeSql('DROP TABLE Invoice_Details')
})
var btnAdd=document.querySelector('#btnِAdd');
var btnSell=document.querySelector('#btnSell');
var btnAubmit=document.querySelector('#Submit');
// console.log(btnAdd);
var Price_product;
var Total_price=0;
var total=0;
var total1;
////////////////////////////////////////////////////
function BuyInvoice(){
var Prod_name=document.querySelector('#Prod_name').value;
var Prod_quantity=document.querySelector('#Prod_quant').value;
var Inv_num=document.querySelector('#Inv_num').value;
console.log(Inv_num);

console.log(Prod_name);
console.log(Prod_quantity);
var prod_details=document.querySelector('#Detalis_1');   
const par_element=document.createElement('p');   
par_element.innerText=`${Prod_name}`;
prod_details.appendChild(par_element);

var prod_detail=document.querySelector('#Detalis_2');   
const par_element2=document.createElement('p');    
par_element2.innerText=`${Prod_quantity}`;
prod_detail.appendChild(par_element2);

db.transaction(function (tx) {
  tx.executeSql('SELECT mName,mPrice,mCount FROM Items', [], function (tx, results) {
  var len = results.rows.length, i;
   
  arr=[ Product={
     "Prod_name":"non",
     "prod_Price":0,
     "Prod_Quantity":0
   }]
  for (i = 0; i < len; i++) 
  { arr[i]=results.rows.item(i)  

    if (results.rows.item(i).mName==Prod_name) 
  { 
    var M_Quant=results.rows.item(i).mCount;
    var m_Quantity=Number(M_Quant);
    var prod_detail3=document.querySelector('#price');   
    const par_element3=document.createElement('p');    
    par_element3.innerText=`${arr[i].mPrice}`;
    prod_detail3.appendChild(par_element3);
    Price_product=`${arr[i].mPrice}`*Prod_quantity;
    console.log(Price_product);
    var prod_detail4=document.querySelector('#Price_count');   
    const par_element4=document.createElement('p');    
    par_element4.innerText=`${Price_product}`;
    prod_detail4.appendChild(par_element4);
    Total_price=parseInt(Price_product);
    console.log(typeof(Total_price));
    total+=Total_price;
   // console.log(total);
   }      
  }
document.getElementById("demo").innerText = "Total Price ="+total ;
db.transaction(function (tx) {
tx.executeSql('INSERT INTO Invoice_Details (Inv_num,Prod_name,quantity,price_prod) VALUES (?,?,?,?)' 
,[Inv_num,Prod_name,Prod_quantity,Total_price]); 
// tx.executeSql('UPDATE  Items SET mCount = ?  WHERE mName = ? ',[(m_Quantity+=Number(Prod_quantity)),Prod_name]); 
var prod_Q=Number(Prod_quantity);

console.log(typeof(prod_Q));
console.log(typeof (m_Quantity));
tx.executeSql('UPDATE  Items SET mCount = ?  WHERE mName = ? ',[(m_Quantity+=prod_Q),Prod_name]); 
alert(Prod_name+" is Increased in original table by "+Prod_quantity +" !!!");
})
;
});})}

///////////////////////////////////////////////////////
function SaveINvoiceDatails(){
var Inv_Num=document.querySelector('#Inv_num').value; 
console.log(Inv_Num);
var Inv_Date=document.getElementById('inv_date').value;
console.log(Inv_Date);
var Inv_User=document.querySelector('#inv_user').value;
console.log(Inv_User);
var Inv_total_Price=document.querySelector('#demo').value;
console.log(Inv_total_Price);
db.transaction(function (tx) {
tx.executeSql( 'INSERT INTO Invoice_head (Inv_num ,Inv_date,Inv_User,Inv_tptal_price ) VALUES (?,?,?,?)' 
,[Inv_Num , Inv_Date , Inv_User , Inv_total_Price ]); })
}
btnAdd.addEventListener('click',BuyInvoice);
// btnSell.addEventListener('click',SellInvoice)
btnAubmit.addEventListener('click',SaveINvoiceDatails);