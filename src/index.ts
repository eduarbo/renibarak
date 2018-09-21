import { arrows, letters, numbers } from './keyCodes';

type Partial<T> = {
    [P in keyof T]?: T[P];
};

type ToModifier = 'caps_lock' | 'left_command' | 'left_control' | 'left_option' | 'left_shift' | 'right_command' | 'right_control' | 'right_option' | 'right_shift' | 'fn';
type FromModifier = ToModifier | 'command' | 'control' | 'option' | 'shift' | 'any';

type KeyCode = { key_code: string };
type ConsumerKeyCode = { consumer_key_code: string };
type PointingButton = { pointing_button: string };
type AnyEvent = 'key_code' | 'consumer_key_code' | 'pointing_button';
type Any = { any: AnyEvent };
type Simultaneous = Array<KeyCode | ConsumerKeyCode | PointingButton | Any>;

type InputSource = {
  language?: string,
  input_source_id?: string,
  input_mode_id?: string,
};

type MouseKey = {
  x?: number,
  y?: number,
  vertical_wheel?: number,
  horizontal_wheel?: number,
  speed_multiplier?: number,
};

type VarType = {
  name: string,
  value: string,
};

type ToOptions = {
  lazy?: boolean,
  repeat?: boolean,
  halt?: boolean,
  hold_down_milliseconds?: number,
};

type ToBaseEvent = ToOptions & {
  modifiers?: ToModifier[],
};

type ToKeyCode = ToBaseEvent & KeyCode;
type ToConsumerKeyCode = ToBaseEvent & ConsumerKeyCode;
type ToPointingButton = ToBaseEvent & PointingButton;
type ToShellCommand = ToBaseEvent & { shell_command: string };
type ToSelectInputSource = ToBaseEvent & { select_input_source: InputSource };
type ToSetVariable = ToBaseEvent & { set_variable: VarType };
type ToMouseKey = ToBaseEvent & { mouse_key: MouseKey };
type ToEvent = ToKeyCode | ToConsumerKeyCode | ToPointingButton | ToShellCommand | ToSelectInputSource | ToSetVariable | ToMouseKey;

type FromModifiers = {
  mandatory?: FromModifier[],
  optional?: FromModifier[],
}

type FromBaseEvent = {
  modifiers?: FromModifiers,
};

type FromKeyCode = FromBaseEvent & KeyCode;
type FromConsumerKeyCode = FromBaseEvent & ConsumerKeyCode;
type FromPointingButton = FromBaseEvent & PointingButton;
type FromAny = FromBaseEvent & Any;
type FromEvent = FromKeyCode | FromConsumerKeyCode | FromPointingButton | FromAny;
type KeyRestriction = 'strict' | 'strict_inverse' | 'insensitive';
type FromSimultaneous = FromBaseEvent & {
  simultaneous: Simultaneous
  simultaneous_options?: {
    detect_key_down_uninterruptedly?: boolean,
    key_down_order?: KeyRestriction,
    key_up_order?: KeyRestriction,
    key_up_when?: 'any' | 'all',
    to_after_key_up?: ToEvent[],
  },
};

type FrontmostApplicationCondition = {
  type: 'frontmost_application_if' | 'frontmost_application_unless',
  bundle_identifiers?: string[],
  file_paths?: string[],
  description?: string,
};

type DeviceCondition = {
  type: 'device_if' | 'device_unless',
  identifiers: {
    vendor_id?: number,
    product_id?: number,
    location_id?: number,
    is_keyboard?: boolean,
    is_pointing_device?: boolean,
    description?: string
  },
  description?: string,
}

type KeyboardCondition = {
  type: 'keyboard_type_if' | 'keyboard_type_unless'
  keyboard_types: Array<'ansi' | 'iso' | 'jis'>,
  description?: string,
}

type InputSourceCondition = {
  type: 'input_source_if' | 'input_source_unless',
  input_sources: Array<{
    language?: string,
    input_source_id?: string,
    input_mode_id?: string,
  }>,
  description?: string,
}

type VariableCondition = {
  type: 'variable_if' | 'variable_unless',
  name: string,
  value: string | number,
  description?: string,
}

type Condition = FrontmostApplicationCondition | DeviceCondition | KeyboardCondition | InputSourceCondition | VariableCondition;

type Manipulator = {
  type: 'basic',
  from: FromEvent,
  to?: ToEvent[],
  to_if_alone?: ToEvent[],
  to_if_held_down?: ToEvent[],
  to_after_key_up?: ToEvent[],
  to_delayed_action?: {
    to_if_invoked?: ToEvent[],
    to_if_canceled?: ToEvent[],
  },
  conditions?: Condition[],
  parameters?: {
    'basic.to_if_alone_timeout_milliseconds?': number,
    'basic.to_if_held_down_threshold_milliseconds?': number,
    'basic.simultaneous_threshold_milliseconds?': number,
    'basic.to_delayed_action_delay_milliseconds?': number,
  },
  description?: 'string',
}

export const fromKey = (key: string, mandatory: FromModifier[] = [], optional: FromModifier[] = []): FromKeyCode => ({
  key_code: key,
  modifiers: {
    mandatory,
    optional,
  }
});

export const toKey = (key: string, modifiers: ToModifier[] = [], opts: ToOptions = {}): ToKeyCode => ({
  key_code: key,
  modifiers,
  ...opts,
});
