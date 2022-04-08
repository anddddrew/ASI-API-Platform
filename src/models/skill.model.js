const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Skill Object
 * @param id - unique ID for this skill
 * @param iconName - image filename for the icon to be displayed, relative to "/icons/" folder
 * @param title - Skill title (READING III)
 * @param goal - The success condition for the skill to be complete
 * @param time - The time frequency of which to perform the skill
 * @param frequency - The time limit for which you need to maintain the skill before acquiring it
 * @param xp - The amount of XP granted upon completion of the skill
 */
const skillSchema = new Schema({
  iconName: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  goal: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    enum: ["DAILY", "WEEKLY", "2x/WEEK", "MONTHLY"],
    required: true,
  },
  timelimit: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  requirements: {
    type: [Schema.Types.ObjectId],
    required: true,
  }
}, { collection: 'dataItems' });

module.exports = mongoose.model('Skill', skillSchema);