import { macroCondition, dependencySatisfies } from '@embroider/macros';

let emberVersion;

if (macroCondition(dependencySatisfies('ember-source', '>= 4.1.0-alpha.0'))) {
  emberVersion = '4.1+';
} else {
  emberVersion = '<4.1';
}

export function getEmberVersion() {
  return emberVersion
}
