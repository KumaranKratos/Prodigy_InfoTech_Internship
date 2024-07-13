window.addEventListener('DOMContentLoaded', (event) => {
    // Fetch and insert the navbar content
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            window.addEventListener("scroll",()=>{
                const header=document.querySelector("header");
                if(window.scrollY>50){
                    header.style.background="white"
                }else{
                    header.style.background="transparent"
            
                }
            })  
        });
});
