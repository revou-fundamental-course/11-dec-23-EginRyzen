const menu = document.querySelector('.menu-toggle input');

const nav = document.querySelector('nav ul');
// alert(nav);

menu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

function Data() {

    // Input
    const nama = document.getElementById("nama").value;
    const tglLahir = document.getElementsByName("tgl_lahir")[0].value;
    const favLanguage = document.querySelector('input[name="fav_language"]:checked');
    const pesan = document.querySelector('textarea[name="w3review"]').value;
    // alert(tglLahir);

    if (!favLanguage || !nama || !tglLahir || !pesan) {
        alert('Isi Form  Yang Belum Di isi');
    } else {

        const currentTime = new Date();
        // Output
        const output_time = document.querySelector('#output_time');
        const outputnama = document.querySelector('#output_nama');
        const outputtgllhr = document.querySelector('#output_tgllhr');
        const output_jk = document.querySelector('#output_jk');
        const output_pesan = document.querySelector('#output_pesan');

        // const submit = document.querySelector('#submit');
        // console.log(submit);

        output_time.textContent = currentTime;
        outputnama.textContent = nama;
        outputtgllhr.textContent = tglLahir;
        output_jk.textContent = (favLanguage ? favLanguage.value : "");
        output_pesan.textContent = pesan;

    }
}