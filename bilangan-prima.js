
const prima = {
    displayNumber : "0",
    displayHasil : "Hasil"
};

/** Update Display */
function updateDisplay () {
    document.querySelector("#displayNumber").innerText = prima.displayNumber;
    document.querySelector("#displayHasil").innerText = prima.displayHasil
}

//Memberikan update digit pada display
function inputDigit (digit) {
    //Membuat angka 0 berganti menjadi angka pada tombol ditekan
    if (prima.displayNumber === "0") {
        prima.displayNumber = digit;
    } else {
        prima.displayNumber = prima.displayNumber + digit;
    }
}

//Digunakan Untuk Menghapus Ketika Tombol Hapus Ditekan
function clearPrima () {
    prima.displayNumber = "0";
    prima.displayHasil = "Hasil"
}

//Digunakan Untuk Menghitung Ketika Tombol Hasil Ditekan
function performPrima () {
    var inputNilai = parseInt(prima.displayNumber);
    faktorPembagi = 0;
    var result = 0;

    for (var i=1; i<=inputNilai; i++) {
        if (inputNilai % i == 0) {
            faktorPembagi = faktorPembagi + 1
        }
    }

    if (faktorPembagi == 2) {
        result = "Bilangan Prima";
    } else {
        result = "Bukan Bilangan Prima";
    }

    prima.displayHasil = result;
}

//Mengambil Elemen Pada Tombol
const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        const target = event.target;

        //Jika Ditekan Tombol Hapus
        if (target.classList.contains("hapus")) {
            clearPrima();
            updateDisplay();
            return;
        }

        //Jika Ditekan Tombol Hasil
        if (target.classList.contains("periksa")) {
            performPrima();
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay()
    })
}

