const fs = require('fs');

const jwt = require('jsonwebtoken');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
        
    req.user = decoded.data;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};