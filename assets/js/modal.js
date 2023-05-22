const integrantes = [
    {
        id: 'fvg',
        nombre: 'Frank Villachica Gaspar',
        codigo: 'A19002661',
        curso: 'Desarrollo de Aplicaciones Web',
        correo: 'furakam98@gmail.com',
        imagen: 'https://res.cloudinary.com/furakam/image/upload/v1653870840/ProfileImages/KumaToFuranku_et5dmx.jpg'
    },
    {
        id: 'wrs',
        nombre: 'Wilmer Reluz Salvador',
        codigo: 'CH75943251',
        curso: 'Desarrollo de Aplicaciones Web',
        correo: 'thechonguer@gmail.com',
        imagen: 'https://res.cloudinary.com/furakam/image/upload/v1653870302/ProfileImages/Relux.jpg'
    },
    {
        id: 'rps',
        nombre: 'Richard Pisfil Salazar',
        codigo: 'CH76677379',
        curso: 'Desarrollo de Aplicaciones Web',
        correo: 'theledermaster@gmail.com',
        imagen: 'https://res.cloudinary.com/furakam/image/upload/v1653870302/ProfileImages/Leder.jpg'
    },
    {
        id: 'dsp',
        nombre: 'David Samamé Paico',
        codigo: 'A20101724',
        curso: 'Desarrollo de Aplicaciones Web',
        correo: 'jayancalover@gmail.com',
        imagen: 'https://res.cloudinary.com/furakam/image/upload/v1653870302/ProfileImages/samamander.jpg'
    },
    {
        id: 'jpq',
        nombre: 'Jean Pierre Quispe',
        codigo: 'SL74069963',
        curso: 'Desarrollo de Aplicaciones Web',
        correo: 'antimamani@gmail.com',
        imagen: 'https://res.cloudinary.com/furakam/image/upload/v1653870302/ProfileImages/witheprince.jpg'
    }
];


const listaIntegrantes = document.querySelectorAll('.lista__name')
const modalBack = document.querySelector('.modal');

listaIntegrantes.forEach(i => {
    i.addEventListener('click',e=>{
        const idIntegrante = i.id;
        const datos = integrantes.filter(inte => inte.id === idIntegrante)
        console.log(datos);
        modalBack.classList.add('modal--active');

        const templateModal = `
            <div class="modal__content">
                <div class="modal__title">
                    <h1>Información</h1>
                    <button id="closeModalBtn">X</button>
                </div>
                <div class="modal__info">
                    <img src="${datos[0].imagen}" alt="">
                    <div class="info__datos">
                        <h2>${datos[0].nombre}</h2>
                        <h2>${datos[0].codigo}</h2>
                        <h2>${datos[0].curso}</h2>
                        <h2>Cuarto Ciclo</h2>
                        <h2>${datos[0].correo}</h2>
                    </div>
                </div>
            </div>
        `;

        modalBack.innerHTML = templateModal;

        const btnClose = document.querySelector('#closeModalBtn');
        btnClose.addEventListener('click',()=>{
            modalBack.removeChild(document.querySelector('.modal__content'));
            modalBack.classList.remove('modal--active');
        });
    })
});

