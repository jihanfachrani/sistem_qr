async function loadPegawai(){

const response = await fetch("data/data.json");
const data = await response.json();

const container = document.getElementById("pegawai-list");

if(!container) return;

data.forEach(p => {

container.innerHTML += `

<div class="card">

<img src="${p.foto}">

<h3>${p.nama}</h3>

<p>${p.jabatan}</p>

<a href="detail.html?id=${p.id}" class="btn">Lihat Detail</a>

</div>

`;

});

}

async function loadDetail(){

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(!id) return;

const response = await fetch("data/data.json");
const data = await response.json();

const pegawai = data.find(p => p.id === id);

if(!pegawai) return;

document.getElementById("nama").innerText = pegawai.nama;
document.getElementById("jabatan").innerText = pegawai.jabatan;
document.getElementById("unit").innerText = pegawai.unit;
document.getElementById("email").innerText = pegawai.email;
document.getElementById("foto").src = pegawai.foto;

}

loadPegawai();
loadDetail();