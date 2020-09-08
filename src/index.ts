import { characterRemovalRange, replacementRules } from './replacementRules';

export default function rasmifize(arabicString: string): string {
  let rasm = arabicString.replace(characterRemovalRange, '');

  replacementRules.forEach((replacementRule) => {
    rasm = rasm.replace(replacementRule.original, replacementRule.replacement);
  });

  return rasm.trim();
}