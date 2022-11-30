
window.onclick = e => {

    var elem = document.getElementById('lang');
    
    
    if(e.target.textContent == "English") {

        elem.textContent = 'Français';
  

    } else if(e.target.textContent == "Français"){
        elem.textContent = 'English';
    
    }


    var fileName = location.href.split("/").slice(-1); 

    if(e.target.textContent == "Français" || e.target.textContent == "English") {

        
        if(fileName[0] === "") {
            window.location.href = "./pages/english/home.html";
        }
        
        
        if(fileName.includes("index.html")) {
            
            window.location.href = "./pages/english/home.html";
          
        } else if(fileName.includes("home.html")) { 
            window.location.href = "../../index.html";
           
        } else if(fileName.includes("formations.html")) {
            window.location.href = "../english/studies.html";
       
        } else if(fileName.includes("studies.html")) {
            window.location.href = "../french/formations.html";
           
        } else if(fileName.includes("competences.html")) {
            window.location.href = "../english/skills.html";
           
        } else if(fileName.includes("skills.html")) {
            window.location.href = "../french/competences.html";
           
        } else if(fileName.includes("projets.html")) {
            window.location.href = "../english/projects.html";
        
        } else if(fileName.includes("projects.html")) {
            window.location.href = "../french/projets.html";
            
        } else if(fileName.includes("loisirs.html")) {
            window.location.href = "../english/hobbies.html";
            
        } else if(fileName.includes("hobbies.html")) {
            window.location.href = "../french/loisirs.html";

        } else if(fileName.includes("contact.html")) {
            window.location.href = "../english/contactEn.html";
            
        } else if(fileName.includes("contactEn.html")) {
            window.location.href = "../french/contact.html";
        }
    }
   

} 

function updateMenuLoad() {
    var elem = document.getElementById('lang');
    if(elem.textContent == "Français") {
        changeMenuContentToEn();
    } else if(elem.textContent == "English") {
        changeMenuContentToFr();
    }
}

function changeMenuContentToFr() {
    var fileName = location.href.split("/").slice(-1); 
  
   
    var elem1 = document.getElementById('tab1');
    elem1.textContent = 'Accueil';
    var elem2 = document.getElementById('tab2');
    elem2.textContent = 'Formations';
    var elem3 = document.getElementById('tab3');
    elem3.textContent = 'Compétences';
    var elem4 = document.getElementById('tab4');
    elem4.textContent = 'Projets';
    var elem5 = document.getElementById('tab5');
    elem5.textContent = 'Loisirs';
    var elem6 = document.getElementById('tab6');
    elem6.textContent = 'Contact';
}

function changeMenuContentToEn() {
    var fileName = location.href.split("/").slice(-1); 
    

    var elem1 = document.getElementById('tab1');
    elem1.textContent = 'Home';
    var elem2 = document.getElementById('tab2');
    elem2.textContent = 'Studies';
    var elem3 = document.getElementById('tab3');
    elem3.textContent = 'Skills';
    var elem4 = document.getElementById('tab4');
    elem4.textContent = 'Projects';
    var elem5 = document.getElementById('tab5');
    elem5.textContent = 'Hobbies';
    var elem6 = document.getElementById('tab6');
    elem6.textContent = 'Contact';
}

//windows.location.origin
function redirectPages(clicked_id) {
    var elem = document.getElementById('lang');

    var fileName = location.href.split("/").slice(-1); 
    if(fileName.includes("index.html") || fileName[0] === "") {


        if(clicked_id == "tab1") {
            if(elem.textContent == 'English') {

                window.location.href = "./index.html";       
            } else {
                window.location.href = "./pages/english/home.html";
            }
        } 
        else if(clicked_id == "tab2") {
            if(elem.textContent == 'English') {
                window.location.href = "./pages/french/formations.html";
            } else {
                window.location.href = "./pages/english/studies.html";
            }
        } 
        else if(clicked_id == "tab3") {
            if(elem.textContent == 'English') {
                window.location.href = "./pages/french/competences.html";
            } else {
                window.location.href = "./pages/english/skills.html";
            }
        } 
        else if(clicked_id == "tab4") {
            if(elem.textContent == 'English') {
                window.location.href = "./pages/french/projets.html";
            } else {
                window.location.href = "./pages/english/projects.html";
            }
        } 
        else if(clicked_id == "tab5") {
            if(elem.textContent == 'English') {
                window.location.href = "./pages/french/loisirs.html";
            } else {
                window.location.href = "./pages/english/hobbies.html";
            }
        } 
        else if(clicked_id == "tab6") {
            if(elem.textContent == 'English') {
                window.location.href = "./pages/french/contact.html";
            } else {
                window.location.href = "./pages/english/contactEn.html";
            }
        }
    } else {


        if(clicked_id == "tab1") {
            if(elem.textContent == 'English') {


                window.location.href = "../../index.html";
            } else {
                window.location.href = "../english/home.html";
            }
        } 
        else if(clicked_id == "tab2") {
            if(elem.textContent == 'English') {
                window.location.href = "../french/formations.html";
            } else {
                window.location.href = "../english/studies.html";
            }
        } 
        else if(clicked_id == "tab3") {
            if(elem.textContent == 'English') {
                window.location.href = "../french/competences.html";
            } else {
                window.location.href = "../english/skills.html";
            }
        } 
        else if(clicked_id == "tab4") {
            if(elem.textContent == 'English') {
                window.location.href = "../french/projets.html";
            } else {
                window.location.href = "../english/projects.html";
            }
        } 
        else if(clicked_id == "tab5") {
            if(elem.textContent == 'English') {
                window.location.href = "../french/loisirs.html";
            } else {
                window.location.href = "../english/hobbies.html";
            }
        } 
        else if(clicked_id == "tab6") {
            if(elem.textContent == 'English') {
                window.location.href = "../french/contact.html";
            } else {
                window.location.href = "../english/contactEn.html";
            }
        } 

    }
}


function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      alert("Text has been copied, now paste in the text-area")
    }
  }


  
function popUpFunc() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popUpFunc2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}