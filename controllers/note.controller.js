const Group = require('../models/group.model');

exports.addNote = async (req, res) => {
  try {
    const { text } = req.body;
    const group = await Group.findById(req.params.id);

    group.notes.push({ text });
    await group.save();

    return res.status(200).json({
      success: true,
      group,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    const groupNotes = group.notes;
    return res.status(200).json({
      success: true,
      groupNotes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { groupId } = req.params;

    const group = await Group.findById(groupId);

    const noteIndex = group.notes.findIndex(
      (note) => note._id.toString() === noteId
    );

    if (noteIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: 'Note not found' });
    }

    group.notes.splice(noteIndex, 1);

    await group.save();

    return res.status(200).json({
      success: true,
      group,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};


exports.editNote = async (req, res) => {
    try {
      const { noteId, groupId } = req.params;
      const { text } = req.body;
  
      const group = await Group.findById(groupId);
  
      if (!group) {
        return res.status(404).json({ success: false, message: 'Group not found' });
      }
  
      const note = group.notes.id(noteId);
  
      if (!note) {
        return res.status(404).json({ success: false, message: 'Note not found' });
      }
  
      note.text = text;
      await group.save();
  
      return res.status(200).json({ success: true, group });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Internal Server Error', error });
    }
  };
