const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// menggunakan then and catch
//then berfungsi untuk mencetak hasil yang berhasil ketika promise terpenuhi, dan hasil tersebut menjadi argumen
//catch berfungsi untuk mencetak hasil error ketika promise ditolak/tidak terpenuhi, dan menerima error sebagai argumen
const thenCatch = async (getData) => {
    const hasil = await getData.then(res => res).catch(err => console.log(err))
    console.log(hasil)
}
thenCatch(cekHariKerja('minggu'))

// menggunakan try and catch
// try adalah blok kode untuk menandai ketika mungkin nya terjadi error
//catch adalah untuk menangkap error yang terjadi di dalam blok kode try
const tryCatch = async (getData) => {
    try {
        const hasil = await getData
        console.log(hasil)
    }
    catch (err) {
        console.log(err)
    }
}
tryCatch(cekHariKerja('senin'))