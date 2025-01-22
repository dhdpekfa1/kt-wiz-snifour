/**
 * @docs Commits 공식 홈페이지: https://www.conventionalcommits.org/en/v1.0.0/
 * @description
 * commitlint 규칙에서 사용되는 숫자는 다음과 같은 의미를 가집니다.
 * - 0: 규칙을 무시합니다.
 * - 1: 경고
 * - 2: 오류
 * - always: 항상 이 조건을 만족해야 합니다.
 * - never: 이 조건을 절대 만족해서는 안됩니다.
 * @example
 * ```
 * chore: run tests on travis ci
  fix(server): send cors headers
  feat(blog): add comment section
  # 타입에 !가 붙으면 BREAKING CHANGE
  refactor!: drop support for Node 6
  BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
 * ```
 * @warning
  * chore: Run tests on travis ci (x) -> chore: run tests on travis ci (o)
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 커밋 타입 제한 (필수)
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'design',
        'test',
        'refactor',
        'build',
        'ci',
        'perf',
        'chore',
        'rename',
        'remove',
      ],
    ],
    /**
     * ``` 다음과 같은 규칙을 사용할 수 "없습니다"
      'sentence-case': 문장 형식 (첫 글자만 대문자)
      'start-case': 각 단어의 첫 글자를 대문자로
      'pascal-case': 각 단어의 첫 글자를 대문자로, 단어 사이에 공백 없음
      'upper-case': 모든 글자를 대문자로
     * ```
     */
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    // 주제가 비어있으면 안됩니다.
    'subject-empty': [2, 'never'],
    // 주제 끝에 마침표를 찍지 말아야합니다.
    'subject-full-stop': [2, 'never', '.'],
    // 커밋 타입은 항상 소문자여야 합니다.
    'type-case': [2, 'always', 'lower-case'],
    // 타입이 비어있으면 안됩니다.
    'type-empty': [2, 'never'],
  },
};
