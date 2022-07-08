const axios = require('axios')

//Asynchronous IIFEs
const getUsers = (async () => {
    async function fetchUsers() {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)
            .catch((err) => console.log(err))
        return users
    }
    return {
        array: await fetchUsers()
    }
})()

module.exports = getUsers
