document.getElementById('search_button').onclick=function(){search();};
document.getElementById('clear').onclick=function(){clear();}
function search(){
   let query=document.getElementById('search_button').value;
   console.log("Searching for...:", query);

console.log("Search button clicked.");
};
function clear(){
    document.getElementById('clear').innerHTML="";
    console.log("Ok cleared");
};