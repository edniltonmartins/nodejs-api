const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://nofood_adm:PaYcy5dguKn7CrYW@nofood-sjwdz.mongodb.net/test?retryWrites=true'
    }
}

module.exports = variables;