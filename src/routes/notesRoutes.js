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

const notesRouter = Router();

// router.use('/notes/:noteId', celebrate(noteIdSchema));

notesRouter.get(
  '/notes',
  celebrate(getAllNotesSchema, { abortEarly: false }),
  getAllNotes,
);

notesRouter.get(
  '/notes/:noteId',
  celebrate(noteIdSchema, { abortEarly: false }),
  getNoteById,
);

notesRouter.post(
  '/notes',
  celebrate(createNoteSchema, { abortEarly: false }),
  createNote,
);

notesRouter.patch(
  '/notes/:noteId',
  celebrate(updateNoteSchema, { abortEarly: false }),
  updateNote,
);

notesRouter.delete(
  '/notes/:noteId',
  celebrate(noteIdSchema, { abortEarly: false }),
  deleteNote,
);

export default notesRouter;
