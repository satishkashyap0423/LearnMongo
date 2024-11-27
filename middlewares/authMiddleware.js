async function authMiddleware(req, res, next) {
  try {
    console.log("middleware")
    next()
  } catch (error) {
    await res.status(400).json({ error: error.message });
  }
}

module.exports = {
    authMiddleware
}