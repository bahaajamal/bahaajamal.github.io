let projectsDiv = document.getElementById("projects");
let parentstyle = document.createAttribute("style")
parentstyle.value = "display:flex;  flex-wrap:wrap; justify-content:center; text-align:center; flex-direction:row-reverse;"
projectsDiv.setAttributeNode(parentstyle)

for(let i=0;i<PROJECTS.length;i++){
 //div
 let projectDiv = document.createElement("div");
 let divstyle = document.createAttribute("style");
 divstyle.value = "display:flex; flex-direction:column; width:300px; margin:10px;  margin-left:50px; justify-content:center;";
 projectDiv.setAttributeNode(divstyle)
 //h3
 let title = document.createElement("h3");
 let titleNode = document.createTextNode(PROJECTS[i].title)
 title.appendChild(titleNode)
 //img
 let image = document.createElement("img")
 let source = document.createAttribute("src")
 source.value="./images/"+PROJECTS[i].img;
 image.setAttributeNode(source)
 let imgStyle= document.createAttribute("style")
 imgStyle.value ="width:200px; height:180px;"
 image.setAttributeNode(imgStyle)
 //p
 let p = document.createElement("p")
 let pNode = document.createTextNode(PROJECTS[i].description)
 p.appendChild(pNode)
 //addtodiv
 projectDiv.appendChild(title)
 projectDiv.appendChild(image)
 projectDiv.appendChild(p)
 //addtoPARENT
 projectsDiv.appendChild(projectDiv)
}