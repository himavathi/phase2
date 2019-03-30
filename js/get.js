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
var info=store.getAll();
info.onsuccess=function(data)
{
  console.log(data.target.result);
  display(data.target.result);
}
}
var parent=document.querySelector(".parent");
function display(d){
  for(i=0;i<d.length;i++)
  {
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/ji.svg";
    image. alt=d[i].name;
    var name=document.createElement("h2");
    name.textContent=d[i].name;
    var address=document.createElement("h3");
    address.textContent=d[i].address;
    var phone=document.createElement("h4");
    phone.textContent=d[i].phone;
    var email=document.createElement("h5");
    email.textContent=d[i].email;
    var link=document.createElement("a");
    link.classList.add("link");
      link.href="resume.html?id="+d[i].id;
      link.textContent="viewprofile";
      child.append(image);
    child.append(name);
    child.append(address);
    child.append(phone);
    child.append(email);
    child.append(link);
    parent.append(child);
  }
}
