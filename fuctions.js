let url = "http://www.raydelto.org/agenda.php"

fetch(url)
.then(response => response.json())
.then(data => ShowData(data))
.catch(error => console.log(error))

const ShowData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++) {
        body += `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    }
document.getElementById('data').innerHTML = body

let form = document.getElementById('form').addEventListener('submit', sendData);
    function sendData(e){
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;

        if(name != '' && lastName != '' && phone != ''){
            let person = {
                nombre:name,
                apellido:lastName,
                telefono:phone
            }
            send(person);

        }else{
            alert("Por favor completar todos los campos.");
        }
    }
    
    function send(contact){
        fetch(url , {
            method:'POST',
            body: JSON.stringify(contact),
        }).then( r =>{

            alert("Contacto agregado exitosamente");
            if ('ok' == true) {
              location.reload();
            }else {
            }
        }).catch(e =>{

            alert(`Error al guardar contacto: ${e}`)
        })
    }
}