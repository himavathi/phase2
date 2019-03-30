var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query)
{
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
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
var info=store.get(paravalue);
info.onsuccess=function(data)
{
  console.log(data);
  personalinfo(data.target.result);
  career(data.target.result);
  education(data.target.result);
  skills(data.target.result);
}
}
var left=document.querySelector(".left");
function personalinfo(pi)
{
var image=document.createElement("img");
image.src="images/ji.svg";
image.alt=pi.name;
var name=document.createElement("h2");
name.textContent=pi.name;
var address=document.createElement("h3");
address.textContent=pi.address;
var phone=document.createElement("h4");
phone.textContent=pi.phone;
var email=document.createElement("h5");
email.textContent=pi.email;
left.append(image);
left.append(name);
left.append(address);
left.append(phone);
left.append(email);
}

var right=document.querySelector(".right");
function career(c){
  var h1=document.createElement("h1");
  h1.textContent="career objective";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var info=document.createElement("info");
  info.textContent=c.career;
  right.append(info);

}
function education(e)
{
  var h1=document.createElement("h1");
  h1.textContent="education details";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  table.border="1";
  let row='';
  row+="<tr>"+"<th>"+"institute"+"</th>"+"<th>"+"branch"+"</th>"+"<th>"+"percent"+"</th>"+"<th>"+"year"+"</th>"+"</tr>";
  for(i in e.education){
  row+="<tr>"+"<td>"+e.education[i].institute+"</td>"+"<td>"+e.education[i].branch+"</td>"+"<td>"+e.education[i].percent+"</td>"+"<td>"+e.education[i].year+"</td>"+"</tr>";
}
table.innerHTML=row;
right.append(table);



}
function skills(s)
{
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var skills=document.createElement("skills");
  skills.textContent=s.skills;
  right.append(skills);

}
