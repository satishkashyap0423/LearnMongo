const fs = require('fs');
const path = require('path');
const { getUsers, insertUsers } = require('../services/userServices');
const sqlite3 = require('sqlite3').verbose();

async function register(req, res) {
  try {
    let userObj = {
      name:'kunal',
      email:"kamina.gupta@bursys.com"
    }
    // const users = await getUsers(findUser)
    const data  = await insertUsers(userObj)
    res.status(200).json({ users:data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { register };
