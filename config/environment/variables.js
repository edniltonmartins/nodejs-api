const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://nofood_adm:lvg28QfeqBZ7wFsq@nofood-sjwdz.mongodb.net/nofood?retryWrites=true'
    }
}

module.exports = variables;