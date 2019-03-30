function submitData()
{
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var address=document.querySelector("#address").value;
  var phone=document.querySelector("#phone").value;
  var email=document.querySelector("#email").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gpercent=document.querySelector("#gpercent").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercent=document.querySelector("#ipercent").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var syear=document.querySelector("#syear").value;
  var spercent=document.querySelector("#spercent").value;
  var skills=document.querySelector("#skills").value;
  // indexedDB IMPLEMENTATION
  var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
  if(!idb in window)
  {
    console.log("index db is not supported");

  }
  // indexdb creation
  var request;
  var store;
  var open=idb.open("storeData",1);
  console.log("indexdb is created");


open.onupgradeneeded=function(e)
 {
  var request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is crated");
}
open.onerror=function(error)
{
  console.log("error occured");
}
open.onsuccess=function(e)
{
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    address:address,
    phone:phone,
    email:email,
    education:[
    {
    institute:ginstitute,
    branch:gbranch,
    year:gyear,
    percent:gpercent
  },
  {  institute:iinstitute,
    branch:ibranch,
    year:iyear,
    percent:ipercent
  },
  {
    institute:sinstitute,
    branch:"",
    year:syear,
    percent:spercent
  }
],
    skills:skills










  });

}
window.open("index.html");




}
