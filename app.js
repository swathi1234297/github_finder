const search=document.querySelector("#search")
const searchButton=document.querySelector(".searchButton")
const pname=document.querySelector(".main__profile-name")
const puname=document.querySelector(".main__profile-username")
const prepos=document.querySelector(".main__profile-repos")
const purl=document.querySelector(".main__profile-url")
const profile=document.querySelector("#profile");
const gist=document.querySelector(".gist");
const followers=document.querySelector(".followers");
const following=document.querySelector(".following");
 const company=document.querySelector(".company");
 const blog=document.querySelector(".blog");
 
 const member=document.querySelector(".member");

const client_id="fd67e6a6dc0981106e7e";
const client_secret="5dee79612d06599d5cc0624445aaa70b9eb67c30";

const fetchUsers=async(user)=>{                       
const api_call=await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);                        //to make the api call or http call use fetch api.. y this work-instantiate the function within 'url'..
  
const data=await api_call.json();                                         
 return{data}                                                                                         
 };
                                                                        
 const showData=()=>{                                                      
  fetchUsers(search.value).then((res)=>{
console.log(res);
pname.innerHTML=`Name:<span class="main__profile-value">${res.data.name}</span>`;
puname.innerHTML=`Username:<span class="main__profile-value">${res.data.login}</span>`;
prepos.innerHTML=`Repos:<span class="main__profile-value">${res.data.public_repos}</span>`;
purl.innerHTML=`URL:<span class="main__profile-value">${res.data.html_url}</span>`;
profile.innerHTML=`<div class='profile'> <img id='photo' src='${res.data.avatar_url}' alt='${res.data.login}'/></div>`;
gist.innerHTML=`<span class="badge badge-secondary">Public Gists: ${res.data.public_gists}</span>`;

followers.innerHTML=`<span class="badge badge-success">Followers: ${res.data.followers}</span>`;

following.innerHTML=`<span class="badge badge-info">Following: ${res.data.following}</span>`;
company.innerHTML=`<li class="list-group-item">Company: ${res.data.company}</li>`;

 blog.innerHTML=`<li class="list-group-item">Website/Blog: ${res.data.blog}</li>`;

 

 member.innerHTML=`<li class="list-group-item">Member Since: ${res.data.created_at}</li>`;

})                                                    
 };
searchButton.addEventListener("click",()=>{
  showData();
})