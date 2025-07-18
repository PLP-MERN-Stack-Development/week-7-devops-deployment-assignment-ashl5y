const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logger } = require('../utils/logger');

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    logger.warn('No token provided for protected route');
    return res.status(401).json({
      status: 'fail',
      message: 'Not authorized to access this route',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      logger.warn(`User with id ${decoded.id} not found`);
      return res.status(401).json({
        status: 'fail',
        message: 'User no longer exists',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    logger.error(`Token verification error: ${error.message}`);
    return res.status(401).json({
      status: 'fail',
      message: 'Not authorized to access this route',
    });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      logger.warn(`User ${req.user.id} attempted to access unauthorized route`);
      return res.status(403).json({
        status: 'fail',
        message: `User role ${req.user.role} is not authorized to access this route`,
      });
    }
    next();
  };
};