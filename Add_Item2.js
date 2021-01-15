

var db = openDatabase('myPharmacy', '1.0', 'pharmacy DB', 2 * 1024 * 1024);


db.transaction(function (tx) { 
tx.executeSql('CREATE TABLE IF NOT EXISTS Items ( mCode unique,mName,mCount,mDesc,mPrice,mPD,mED,mUrl)'); 
// tx.executeSql('DELETE FROM Items');
tx.executeSql('INSERT INTO Items (mCode,mName,mCount,mPrice) VALUES (1,"Kataflam",20,10)');
tx.executeSql('INSERT INTO Items (mCode,mName,mCount,mPrice) VALUES (2,"Profen",50,10)');
tx.executeSql('INSERT INTO Items (mCode,mName,mCount,mPrice) VALUES (3,"septazol",70,50)');
tx.executeSql('INSERT INTO Items (mCode,mName,mCount,mPrice) VALUES (4,"Asosed",20,10)');
tx.executeSql('INSERT INTO Items (mCode,mName,mCount,mPrice) VALUES (5,"power cold",30,30)');
})
var med_code
var med_name;
var med_count;
var med_Desc;
var med_PD;
var med_ED;
var med_URL;
let btnAdd=document.getElementById("btnAdd");
let btnShowCard=document.getElementById("btnShow");
// console.log(btnAdd);
var SignPass=false;
var c=1;
var loadFile = function(event) {
    var image = document.getElementById('output');
    console.log(image);
    image.src = URL.createObjectURL(event.target.files[0]);
    med_URL=image.src;
    console.log(med_URL);
    db.transaction(function (tx1) { 
    c+=2
    tx1.executeSql('INSERT INTO Items (mCode,mUrl) VALUES (?,?)',[c,med_URL]);
    alert("bashaaa");
}) 
};
console.log(med_URL)
console.log("hiiii");
function onClick_AddProduct()
{   
    med_code=document.getElementById("mCode").value;
    med_name=document.getElementById("mName").value;
    med_count=document.getElementById("mCount").value;
    med_Desc=document.getElementById("mDesc").value;
    med_Price=document.getElementById("mPrice").value;
    med_PD=document.getElementById("mPD").value;
    med_ED=document.getElementById("mED").value;
   //  med_img=document.getElementById("output").value;
   //  SourceImage=canvas.toDataURL('image/jpeg');
   //  med_URL=med_img.src;
   //  console.log(med_name)
   //  console.log(med_code);
   //  console.log(med_img);
   //  var conf=confirm("All data is reviewed");
   //  if(conf)
   //   {  
      
        db.transaction(function (tx) { 
        tx.executeSql('INSERT INTO Items (mCode,mName,mCount,mDesc,mPrice,mPD,mED) VALUES (?,?,?,?,?,?,?)',
        [med_code,med_name,med_count,med_Desc,med_Price,med_PD,med_ED]);}) 

        //  window.location.href ="Home.html";
        alert("Product Added Succesfully");
        var var1=document.querySelector("#mName1");
  var var2=document.querySelector("#mDesc1");
  var var3=document.querySelector("#mCount1");
  var var4=document.querySelector("#mPD1");
  var var5=document.querySelector("#mED1")  
      var1.innerHTML="Product Name :"+med_name;
      var2.innerHTML="Product Description :"+med_Desc ;
      var3.innerHTML="Product Count :"+med_count ;
      var4.innerHTML="Product production Date :"+med_PD ;
      var5.innerHTML="Product Expire Date :"+med_ED ;
  
  
    }  

// function getDataUrl(img) {
//    // Create canvas
//    const canvas = document.createElement('canvas');
//    const ctx = canvas.getContext('2d');
//    // Set width and height
//    canvas.width = img.width;
//    canvas.height = img.height;
//    // Draw the image
//    ctx.drawImage(img, 0, 0);
//    SourceImage=canvas.toDataURL('image/jpeg');
//    console.log(SourceImage)
//    return  SourceImage;
// }
// // Select the image
// const img = document.querySelector('#output');
// img.addEventListener('load', function (event) {
//    c+=2;
//    var dataUrl = getDataUrl(event.currentTarget);
//    console.log(dataUrl);
//    db.transaction(function (tx1) { 
//       tx1.executeSql('INSERT INTO Items (mCode,mUrl) VALUES (?,?)',[c,dataUrl]);
//    alert("bsahd");
//    }) 
// });

//  var var0=document.querySelector("#output");
  var var1=document.querySelector("#mName1");
  var var2=document.querySelector("#mDesc1");
  var var3=document.querySelector("#mCount1");
  var var4=document.querySelector("#mPD1");
  var var5=document.querySelector("#mED1")
//   console.log(var1);
//   console.log(var2);
//   console.log(var3);
//   console.log(var4);
//   console.log(var5);
    function PrintInCard() 
    {
      // var0.innerHTML=med_img;
      var1.innerHTML=med_name;
      var2.innerHTML=med_Desc ;
      var3.innerHTML=med_count ;
      var4.innerHTML=med_PD ;
      var5.innerHTML=med_ED ;
      }
   
if(btnAdd)
{
   btnAdd.addEventListener('click',onClick_AddProduct,PrintInCard);
 
 }

console.log("finish");
