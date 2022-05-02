

const hireGetCandidate = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello hireGetCandidate`}))
  res.end()
  
}

export default hireGetCandidate