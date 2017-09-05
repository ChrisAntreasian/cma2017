import fetchival from 'fetchival'

export default () => {
    getAll: () => {
        fetchival('/users', { mode: 'cors' }).get().then(
            (result) =>{
                console.log(result)
            }).catch((error) => {
                console.log(error)
            })
        )
    },
    getByID: (id) => {
        console.log('get by id')
    },
    getByTerm: (term) => {
        console.log('get by term')
    }
}
