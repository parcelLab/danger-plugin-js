import parcellab from './src';
import { Severity } from './src/types';

(async function dangerReport() {
  await parcellab({
    prLint: {
      scoped: false,
    },
    jira: {
      severity: Severity.Disable,
    },
  });
})();
