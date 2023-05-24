const jwt = require('jsonwebtoken');
const users = require('../model/login');
const { GetData } = require('../helpers/commonFunctions');

module.exports = async (req, res, next) => {
  try {
    if (
      req.originalUrl.startsWith('/auth/login') ||
      req.originalUrl.startsWith('/Contact') ||
      req.originalUrl.startsWith('/Patient')
    )
      return next();
    const token = req.header('Authorization')
      ? req.header('Authorization').replace('Bearer ', '')
      : null;
    if (!token) {
      return res.json({
        success: false,
        message: 'Unauthorized Access',
      });
    }

    const decoded = await jwt.verify(token, 'asdasdasdasd');
    if (!decoded) {
      return res.json({
        success: false,
        message: 'Invalid Token',
      });
    }

    if (decoded.exp < Date.now()) {
      return res.json({ success: false, message: 'Token Expired' });
    }

    const isUserExists = await GetData(users, { _id: decoded.id });
    if (!isUserExists[0]) {
      return res.json({ success: false, message: 'Access Denied' });
    }
    let matchvalidity = isUserExists[0].Password.concat(
      isUserExists[0].id
    ).concat(isUserExists[0].Email);

    if (matchvalidity != decoded.validity) {
      return res.json({ success: false, message: 'Access Denied' });
    }
    req.user = decoded;
    return next();
  } catch (ex) {
    return res.send({ success: false, message: ex.message });
  }
};
