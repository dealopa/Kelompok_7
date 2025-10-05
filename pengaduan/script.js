// Sidebar navigation
const links = document.querySelectorAll(".sidebar ul li a");
const sections = document.querySelectorAll("main section");

// Ganti tampilan section sesuai menu
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);

        sections.forEach(sec => {
            sec.classList.toggle("hidden", sec.id !== targetId);
        });

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Saat pertama kali load → tampilkan Home saja
sections.forEach(sec => {
    sec.classList.toggle("hidden", sec.id !== "home");
});

// Logika pengaduan
const form = document.getElementById("pengaduanForm");
const tabelBody = document.querySelector("#tabelPengaduan tbody");
let counter = 1;

let pengaduanList = JSON.parse(localStorage.getItem("pengaduanList")) || [];

pengaduanList.forEach(p => tambahKeTabel(p));

form.addEventListener("submit", e => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const kategori = document.getElementById("kategori").value;
    const isi = document.getElementById("isi").value;

    const pengaduan = {
        id: Date.now(),
        nama,
        email,
        kategori,
        isi,
        status: "Sedang diproses",
        balasan: ""
    };

    pengaduanList.push(pengaduan);
    localStorage.setItem("pengaduanList", JSON.stringify(pengaduanList));
    tambahKeTabel(pengaduan);
    form.reset();
    alert("Pengaduan berhasil dikirim!");
});

function tambahKeTabel(p) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${counter++}</td>
    <td>${p.nama}</td>
    <td>${p.kategori}</td>
    <td>${p.isi}</td>
    <td>${p.status}</td>
    <td>${p.balasan || "-"}</td>
  `;
    tabelBody.appendChild(row);
}
