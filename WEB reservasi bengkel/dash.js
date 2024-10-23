// Array data gambar dan deskripsi
const layananData = [
    {
        imgSrc: "/Aset/logo cvt.png"
    },
    {

        imgSrc: "/Aset/logo oli.png"
    },
    {
        imgSrc: "/Aset/pngwing.com (13).png"
    },
    {
        imgSrc: "/Aset/pngwing.com (12).png"
    }
];


function displayLayanan() {
    const container = document.getElementById('layanan-container');
    
    layananData.forEach(layanan => {
        const layananBox = document.createElement('div');
        layananBox.classList.add('layanan-box');

        const imgElement = document.createElement('img');
        imgElement.src = layanan.imgSrc;
        imgElement.alt = layanan.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = layanan.title;

        layananBox.appendChild(imgElement);
        layananBox.appendChild(titleElement);


        container.appendChild(layananBox);
    });
}

document.addEventListener('DOMContentLoaded', displayLayanan);
