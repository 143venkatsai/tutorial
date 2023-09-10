var tablinks = document.getElementsByClassName("tab-links");
    var tabcontent = document.getElementsByClassName("tab-content");

    function openTab(tabname){
        for(let tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(let tabcont of tabcontent){
            tabcont.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        event.currentTarget.classList.add("active-tab");
        document.getElementById(tabname).classList.add("active-tab");
    }


    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyUAJ6R472CGyEFa05kfgOik3URnvLvbZWHozsPuCJS1mi6Mdp7ErufHeUNM1nlzNDu-A/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })