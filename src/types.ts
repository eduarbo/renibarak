export type Partial<T> = { [P in keyof T]?: T[P] };

export type Parameters = {
  'basic.to_if_alone_timeout_milliseconds?': number;
  'basic.to_if_held_down_threshold_milliseconds?': number;
  'basic.simultaneous_threshold_milliseconds?': number;
  'basic.to_delayed_action_delay_milliseconds?': number;
}

export type ToModifier =
  | 'caps_lock'
  | 'left_command'
  | 'left_control'
  | 'left_option'
  | 'left_shift'
  | 'right_command'
  | 'right_control'
  | 'right_option'
  | 'right_shift'
  | 'fn';
export type FromModifier = ToModifier | 'command' | 'control' | 'option' | 'shift' | 'any';

export type KeyCode = { key_code: string };
export type ConsumerKeyCode = { consumer_key_code: string };
export type PointingButton = { pointing_button: string };
export type AnyEvent = 'key_code' | 'consumer_key_code' | 'pointing_button';
export type Any = { any: AnyEvent };
export type Simultaneous = Array<KeyCode | ConsumerKeyCode | PointingButton | Any>;

export type InputSource = {
  language?: string;
  input_source_id?: string;
  input_mode_id?: string;
};

export type MouseKey = {
  x?: number;
  y?: number;
  vertical_wheel?: number;
  horizontal_wheel?: number;
  speed_multiplier?: number;
};

export type VarType = {
  name: string;
  value: string;
};

export type ToOptions = {
  lazy?: boolean;
  repeat?: boolean;
  halt?: boolean;
  hold_down_milliseconds?: number;
};

export type ToBaseEvent = ToOptions & {
  modifiers?: ToModifier[];
};

export type ToKeyCode = ToBaseEvent & KeyCode;
export type ToConsumerKeyCode = ToBaseEvent & ConsumerKeyCode;
export type ToPointingButton = ToBaseEvent & PointingButton;
export type ToShellCommand = ToBaseEvent & { shell_command: string };
export type ToSelectInputSource = ToBaseEvent & { select_input_source: InputSource };
export type ToSetVariable = ToBaseEvent & { set_variable: VarType };
export type ToMouseKey = ToBaseEvent & { mouse_key: MouseKey };
export type ToEvent =
  | ToKeyCode
  | ToConsumerKeyCode
  | ToPointingButton
  | ToShellCommand
  | ToSelectInputSource
  | ToSetVariable
  | ToMouseKey;

export type FromModifiers = {
  mandatory?: FromModifier[];
  optional?: FromModifier[];
};

export type FromBaseEvent = {
  modifiers?: FromModifiers;
};

export type FromKeyCode = FromBaseEvent & KeyCode;
export type FromConsumerKeyCode = FromBaseEvent & ConsumerKeyCode;
export type FromPointingButton = FromBaseEvent & PointingButton;
export type FromAny = FromBaseEvent & Any;
export type FromEvent = FromKeyCode | FromConsumerKeyCode | FromPointingButton | FromAny;
export type KeyRestriction = 'strict' | 'strict_inverse' | 'insensitive';
export type FromSimultaneous = FromBaseEvent & {
  simultaneous: Simultaneous;
  simultaneous_options?: {
    detect_key_down_uninterruptedly?: boolean;
    key_down_order?: KeyRestriction;
    key_up_order?: KeyRestriction;
    key_up_when?: 'any' | 'all';
    to_after_key_up?: ToEvent[];
  };
};

export type FrontmostApplicationCondition = {
  type: 'frontmost_application_if' | 'frontmost_application_unless';
  bundle_identifiers?: string[];
  file_paths?: string[];
  description?: string;
};

export type DeviceCondition = {
  type: 'device_if' | 'device_unless';
  identifiers: {
    vendor_id?: number;
    product_id?: number;
    location_id?: number;
    is_keyboard?: boolean;
    is_pointing_device?: boolean;
    description?: string;
  };
  description?: string;
};

export type KeyboardTypes = Array<'ansi' | 'iso' | 'jis'>;
export type KeyboardCondition = {
  type: 'keyboard_type_if' | 'keyboard_type_unless';
  keyboard_types: KeyboardTypes,
  description?: string;
};

export type InputSourceCondition = {
  type: 'input_source_if' | 'input_source_unless';
  input_sources: Array<{
    language?: string;
    input_source_id?: string;
    input_mode_id?: string;
  }>;
  description?: string;
};

export type VariableCondition = {
  type: 'variable_if' | 'variable_unless';
  name: string;
  value: string | number;
  description?: string;
};

export type Condition =
  | FrontmostApplicationCondition
  | DeviceCondition
  | KeyboardCondition
  | InputSourceCondition
  | VariableCondition;

export type ManipulatorOptions = {
  to?: ToEvent[];
  to_if_alone?: ToEvent[];
  to_if_held_down?: ToEvent[];
  to_after_key_up?: ToEvent[];
  to_delayed_action?: {
    to_if_invoked?: ToEvent[];
    to_if_canceled?: ToEvent[];
  };
  conditions?: Condition[];
  parameters?: Parameters;
  description?: 'string';
};

export type Manipulator = ManipulatorOptions & {
  type: 'basic';
  from: FromEvent;
};

export type Rule = {
  description?: string,
  manipulators?: Manipulator[],
};

export type Profile = {
  name?: string,
  selected?: boolean,
  fn_function_keys?: Array<{
    from: FromKeyCode,
    to: ToEvent,
  }>,
  complex_modifications?: {
    parameters?: Parameters,
    rules?: Rule[],
    virtual_hid_keyboard?: {
      keyboard_type?: KeyboardTypes,
      caps_lock_delay_milliseconds?: number,
    },
    devices: [],
  }
}
