# @parcellab/danger-plugin

Set of Danger rules used to check PRs in JavaScript/TypeScript codebases.

This plugin allows configuration for the following events:

- Conventional commits format
- Commit scopes (useful for monorepos)
- PR title length
- PR title scope (useful for monorepos)
- PR relation to JIRA issue
- Maximum number of commits in the PR
- Maximum number of lines in the PR
- Maximum number of changed files in the PR

## Usage

Install:

```sh
yarn add @parcellab/danger-plugin --dev
```

At a glance:

```js
// dangerfile.js
import parcellab from '@parcellab/danger-plugin';

(async function dangerReport() {
  const commitlintConfig = {
    severity: 'warn',
  };
  await parcellab();
})();
```

To override some default parameters:

```js
// dangerfile.js
import configLernaScopes from '@commitlint/config-lerna-scopes';
import parcellab from '@parcellab/danger-plugin';

(async function dangerReport() {
  await parcellab({
    branchSize: {
      maxCommits: 20,
      maxFiles: 200,
      severity: 'fail',
    },
    conventional: {
      rules: configLernaScopes.rules,
      severity: 'warn',
    },
    prLint: {
      severity: 'message',
      scoped: false,
    },
    jira: {
      severity: 'disabled',
    },
  });
})();
```

## Parameters

| Config       | Name          | Default                                 | Description                                    |
| ------------ | ------------- | --------------------------------------- | ---------------------------------------------- |
| branchSize   | maxCommits    | `10`                                    | maximum number of commits                      |
| branchSize   | maxLines      | `2000`                                  | maximum number of line additions and deletions |
| branchSize   | maxFiles      | `100`                                   | maximum number of changed files                |
| branchSize   | severity      | `warn`                                  | danger event type                              |
| conventional | rules         | `@commitlint/config-conventional` rules | conventional commit rules to lint              |
| conventional | severity      | `fail`                                  | danger event type                              |
| prLint       | minBodyLength | `warn`                                  | minimum number of characters in the PR body    |
| prLint       | severity      | `fail`                                  | danger event type                              |
| jira         | severity      | `warn`                                  | danger event type                              |

## Changelog

See the GitHub [release history](https://github.com/parcelLab/danger-plugin-js/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
