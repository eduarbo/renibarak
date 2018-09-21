import { arrows, letters, numbers } from './keyCodes';
import {
  FromEvent,
  FromKeyCode,
  FromModifier,
  Manipulator,
  ManipulatorOptions,
  Rule,
  ToKeyCode,
  ToModifier,
  ToOptions,
} from './types';

export const fromKey = (key: string, mandatory: FromModifier[] = [], optional: FromModifier[] = []): FromKeyCode => ({
  key_code: key,
  modifiers: {
    mandatory,
    optional,
  },
});

export const toKey = (key: string, modifiers: ToModifier[] = [], opts: ToOptions = {}): ToKeyCode => ({
  key_code: key,
  modifiers,
  ...opts,
});

export const manipulator = (from: FromEvent, opts: ManipulatorOptions = {}): Manipulator => ({
  from,
  type: 'basic',
  ...opts,
});

export const rule = (description: string, manipulators: Manipulator[]) => ({
  description,
  manipulators,
});
