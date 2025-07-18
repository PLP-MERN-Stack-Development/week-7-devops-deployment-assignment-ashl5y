const User = require('../models/User');
const { logger } = require('../utils/logger');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      logger.warn(`Registration attempt with existing email: ${email}`);
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists',
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = user.getSignedJwtToken();

    logger.info(`New user registered: ${user._id}`);

    res.status(201).json({
      status: 'success',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error(`Registration error: ${error.message}`);
    res.status(500).json({
      status: 'error',
      message: 'Server error during registration',
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide an email and password',
      });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      logger.warn(`Login attempt with non-existent email: ${email}`);
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials',
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      logger.warn(`Failed login attempt for user: ${email}`);
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials',
      });
    }

    const token = user.getSignedJwtToken();

    logger.info(`User logged in: ${user._id}`);

    res.status(200).json({
      status: 'success',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    res.status(500).json({
      status: 'error',
      message: 'Server error during login',
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      user: req.user,
    });
  } catch (error) {
    logger.error(`Get user profile error: ${error.message}`);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};