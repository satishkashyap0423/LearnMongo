const User = require("../models/userModel");

async function getUsers(findUser) {
    const users = await User.find(findUser);
    return users
}
async function insertUsers(userObj) {
    await User.create(userObj); // Call save on the instance
    
}

module.exports = {
    getUsers,
    insertUsers
}