const Group = require('../models/group.model');

exports.createGroup = async (req, res) => {
  try {
    const { name, color } = req.body;

    if (!name || !color) {
      return res.status(404).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const newGroup = new Group({
      name,
      color,
      notes: [],
    });

    newGroup.save();

    return res.status(200).json({
      success: true,
      message: 'Create Group Successfully',
      newGroup,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error:error
    });
  }
};

exports.getGroupsData = async (req, res) => {
  try {
    const groups = await Group.find();
    return res.status(200).json({
      success: true,
      groups,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error : error
    });
  }
};
