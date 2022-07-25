document.addEventListener("keyup", e =>{
    if(e.target.matches("#buscador")){

        if(e.key =="Enter")e.target.value = ""
        document.querySelectorAll(".articulo").forEach(buscar =>{

            buscar.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?buscar.classList.remove("filtro")
            :buscar.classList.add("filtro")
        })
    }

})