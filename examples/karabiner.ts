import { Rule } from '../src/types';
import arrows from './arrows';

const profile = (name: string, rules: Rule[]) => ({
  name,
  complex_modifications: {
    rules,
  },
});

export default {
  global: {
    check_for_updates_on_startup: true,
    show_in_menu_bar: true,
    show_profile_name_in_menu_bar: false,
  },
  profiles: [
    profile('Test profile', arrows),
  ],
};
