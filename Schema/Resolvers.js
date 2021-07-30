const { users } = require('../FakeData') 

const resolvers = {
    Query: {
        login(_, {email, password}) {
            const user = users.find(item => email == item.email)

            if(!user) throw new Error('User Not Found status: 404');

            if(user.loginTry == 0) {
                throw new Error(`User Blocked: ${user.loginTry}`);
            }

            if(user.password !== password ) {
                user.loginTry = user.loginTry - 1
                throw new Error(`Wrong Password attempts: ${user.loginTry}`);
            }

            return user
        }
    },

    Mutation: {
        loginAttempt(_, {email}) {
            const user = users.find(item => item.email == email)
            user.loginTry = user.loginTry - 1
            return user
        },
        resetAttempt(_, {email}) {
            const user = users.find(item => item.email == email)
            user.loginTry = 3
            return user
        }
    }
}

module.exports = {resolvers}