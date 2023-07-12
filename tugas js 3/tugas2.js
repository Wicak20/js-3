const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['januari', 'february', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('sorry data not found'), [])
        }
    }, 1000)
}

const viewMonth = (error, berhasil) => {
    if (error) {
        console.log(error)
    } else {
        const monthData = berhasil.map((el) => {
            return el
        })
        console.log(monthData)
    }
}

getMonth(viewMonth)