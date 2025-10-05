const tabelAdmin = document.querySelector("#tabelAdmin tbody");
let pengaduanList = JSON.parse(localStorage.getItem("pengaduanList")) || [];
let counter = 1;

function render() {
    tabelAdmin.innerHTML = "";
    counter = 1;
    pengaduanList.forEach((p, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${counter++}</td>
          <td>${p.nama}</td>
          <td>${p.kategori}</td>
          <td>${p.isi}</td>
          <td>${p.status}</td>
          <td>${p.balasan || "-"}</td>
          <td>
            <button onclick="balas(${index})">Balas</button>
          </td>
        `;
        tabelAdmin.appendChild(row);
    });
}

function balas(index) {
    const jawaban = prompt("Masukkan balasan untuk pengaduan ini:");
    if (jawaban) {
        pengaduanList[index].balasan = jawaban;
        pengaduanList[index].status = "Selesai";
        localStorage.setItem("pengaduanList", JSON.stringify(pengaduanList));
        render();
        alert("Balasan terkirim!");
    }
}

render();