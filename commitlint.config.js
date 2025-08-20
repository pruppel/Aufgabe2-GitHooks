export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'] //Ticketnummer muss vorhanden sein
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['commit-']
    }
  }
};
