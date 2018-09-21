import { fromKey, manipulator, rule, toKey } from '../src/index';

const bindRightOption = (fromKeyCode: string, toKeyCode: string) => manipulator(
  fromKey(fromKeyCode, ['right_option'], ['any']), {
  to: [
    toKey(toKeyCode),
  ],
});

const title = 'Arrow keys (@eduarbo)';
const rules = [
  rule('Option + H/J/K/L to arrow keys', [
    bindRightOption('h', 'left_arrow'),
    bindRightOption('j', 'down_arrow'),
    bindRightOption('k', 'up_arrow'),
    bindRightOption('l', 'right_arrow'),
  ]),
];

const complexModification = { title, rules };

export default rules;
export { complexModification };
