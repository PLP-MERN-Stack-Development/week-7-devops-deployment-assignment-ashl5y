const Data = require('../models/Data');
const { logger } = require('../utils/logger');

// @desc    Get all data for logged in user
// @route   GET /api/data
// @access  Private
exports.getData = async (req, res) => {
  try {
    const data = await Data.find({ user: req.user.id });

    res.status(200).json({
      status: 'success',
      count: data.length,
      data,
    });
  } catch (error) {
    logger.error(`Get data error: ${error.message}`);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};

// @desc    Create new data
// @route   POST /api/data
// @access  Private
exports.createData = async (req, res) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const data = await Data.create(req.body);

    logger.info(`New data created: ${data._id}`);

    res.status(201).json({
      status: 'success',
      data,
    });
  } catch (error) {
    logger.error(`Create data error: ${error.message}`);
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Update data
// @route   PUT /api/data/:id
// @access  Private
exports.updateData = async (req, res) => {
  try {
    let data = await Data.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        status: 'fail',
        message: `No data found with id of ${req.params.id}`,
      });
    }

    // Make sure user owns the data
    if (data.user.toString() !== req.user.id) {
      logger.warn(`User ${req.user.id} attempted to update data they don't own`);
      return res.status(403).json({
        status: 'fail',
        message: 'Not authorized to update this data',
      });
    }

    data = await Data.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    logger.info(`Data updated: ${data._id}`);

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    logger.error(`Update data error: ${error.message}`);
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

// @desc    Delete data
// @route   DELETE /api/data/:id
// @access  Private
exports.deleteData = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        status: 'fail',
        message: `No data found with id of ${req.params.id}`,
      });
    }

    // Make sure user owns the data
    if (data.user.toString() !== req.user.id) {
      logger.warn(`User ${req.user.id} attempted to delete data they don't own`);
      return res.status(403).json({
        status: 'fail',
        message: 'Not authorized to delete this data',
      });
    }

    await data.deleteOne();

    logger.info(`Data deleted: ${data._id}`);

    res.status(200).json({
      status: 'success',
      data: {},
    });
  } catch (error) {
    logger.error(`Delete data error: ${error.message}`);
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};