const cekNamaKaryawan = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataNama = ['budi', 'dodi', 'badi', 'rudi', 'yudi']
            if (dataNama.includes(nama)) {
                resolve(`karyawan yang bernama ${nama} bekerja disini`)
            } else {
                reject('nama yang dimasukan bukan karyawan disisni')
            }

        }, 2000)
    })
}

cekNamaKaryawan('budi')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })


////////////////////////////////////////////////////////////////////////////////////////////////////////////

const namaMerkMobil = (input) => {
    return new Promise((resolve, reject) => {
        const dataMobil = ['toyota', 'mitsubishi', 'daihatsu']
        if (dataMobil.includes(input)) {
            resolve(`merek mobil ini ${input}`)
        } else {
            reject('ini bukan merek mobil')
        }
    })
}

const getMobil = async (getData) => {
    try {
        const hasil = await getData
        console.log(hasil)
    }
    catch (err) {
        console.log(err)
    }
}

getMobil(namaMerkMobil('yamaha'))
