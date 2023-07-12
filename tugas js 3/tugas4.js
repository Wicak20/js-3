// async function getName() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()

//         const names = data.map(user => user.name)

//     } catch (error) {
//         console.log('Error: nihh', error)
//     }


//     console.log(????)
// }

// getName()


async function getFetch() {

    const hasilFetch = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(async (res) => {
            const formattedResponse = await res.json()
            return formattedResponse.map(item => item.name)

        }).catch(_error => {
            console.log('error, the input you entered is wrong')
        })

    console.log(hasilFetch)
}

getFetch()


