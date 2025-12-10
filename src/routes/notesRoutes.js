import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const routerNotes = Router();

// router.use('/notes/:noteId', celebrate(noteIdSchema));

routerNotes.get(
  '/notes',
  celebrate(getAllNotesSchema, { abortEarly: false }),
  getAllNotes,
);

routerNotes.get(
  '/notes/:noteId',
  celebrate(noteIdSchema, { abortEarly: false }),
  getNoteById,
);

routerNotes.post(
  '/notes',
  celebrate(createNoteSchema, { abortEarly: false }),
  createNote,
);

routerNotes.patch(
  '/notes/:noteId',
  celebrate(updateNoteSchema, { abortEarly: false }),
  updateNote,
);

routerNotes.delete(
  '/notes/:noteId',
  celebrate(noteIdSchema, { abortEarly: false }),
  deleteNote,
);

export default routerNotes;
