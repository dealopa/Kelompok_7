const form = document.getElementById("pengaduanForm");
const tabelBody = document.querySelector("#tabelPengaduan tbody");
let counter = 1;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const kategori = document.getElementById("kategori").value;
    const isi = document.getElementById("isi").value;

    // Buat baris baru
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${counter++}</td>
    <td>${nama}</td>
    <td>${kategori}</td>
    <td>${isi}</td>
    <td>Sedang diproses</td>
  `;
    tabelBody.appendChild(row);

    // Reset form
    form.reset();

    alert("Pengaduan berhasil dikirim!");
});