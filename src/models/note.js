import { model, Schema } from 'mongoose';

const notesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: { type: String, required: false, default: '' },
  tag: {
    type: String,
    enum: [
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ],
    default: 'Todo',
    required: false,
  },
  timestamps: true,
});

export const Note = model('Note', notesSchema);
