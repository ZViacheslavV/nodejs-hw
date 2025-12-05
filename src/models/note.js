import { model, Schema } from 'mongoose';

const notesSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

notesSchema.index(
  { title: 'text', content: 'text' },
  {
    name: 'NoteTextIndex',
    weights: { title: 5, content: 1 },
    default_language: 'english',
  },
);

export const Note = model('Note', notesSchema);
