
window.onclick = e => {

    var elem = document.getElementById('lang');
    
    
    if(e.target.textContent == "English") {

        elem.textContent = 'Français';
  

    } else if(e.target.textContent == "Français"){
        elem.textContent = 'English';
    
    }


    var fileName = location.href.split("/").slice(-1); 

    if(e.target.textContent == "Français" || e.target.textContent == "English") {

        
        if(fileName.length == 1) {
            window.location.href = "./pages/english/home.html";
        }
        
        
        if(fileName == "index.html") {
            
            window.location.href = "./pages/english/home.html";
          
        } else if(fileName == "home.html") { 
            window.location.href = "../../index.html";
           
        } else if(fileName == "formations.html") {
            window.location.href = "../english/studies.html";
       
        } else if(fileName == "studies.html") {
            window.location.href = "../french/formations.html";
           
        } else if(fileName == "competences.html") {
            window.location.href = "../english/skills.html";
           
        } else if(fileName == "skills.html") {
            window.location.href = "../french/competences.html";
           
        } else if(fileName == "projets.html") {
            window.location.href = "../english/projects.html";
        
        } else if(fileName == "projects.html") {
            window.location.href = "../french/projets.html";
            
        } else if(fileName == "autres.html") {
            window.location.href = "../english/others.html";
            
        } else if(fileName == "others.html") {
            window.location.href = "../french/autres.html";
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
  
    console.log(fileName)
    var elem1 = document.getElementById('tab1');
    elem1.textContent = 'Accueil';
    var elem2 = document.getElementById('tab2');
    elem2.textContent = 'Formations';
    var elem3 = document.getElementById('tab3');
    elem3.textContent = 'Compétences';
    var elem4 = document.getElementById('tab4');
    elem4.textContent = 'Projets';
    var elem5 = document.getElementById('tab5');
    elem5.textContent = 'Autres';
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
    elem5.textContent = 'Others';
}

//windows.location.origin
function redirectPages(clicked_id) {
    var elem = document.getElementById('lang');

    var fileName = location.href.split("/").slice(-1); 
    if(fileName == "index.html" || fileName.length == 1) {

        console.log("aaaaaaaaaaaaaaaaaaaaaaa")

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
                window.location.href = "./pages/french/autres.html";
            } else {
                window.location.href = "./pages/english/others.html";
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
                window.location.href = "../french/autres.html";
            } else {
                window.location.href = "../english/others.html";
            }
        } 

    }
}