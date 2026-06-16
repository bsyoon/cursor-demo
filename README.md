# cursor-demo

멤버 데이터에서 이메일을 검증·추출하는 유틸리티 모듈입니다.

## 릴리스 노트

### v1.0.0

멤버 데이터에서 이메일을 검증·추출할 수 있는 유틸리티 모듈을 추가한 첫 정식 릴리스입니다.

#### ✨ 기능

- **RFC 5322 기반 이메일 검증** (`isValidEmail`) — 로컬 파트·전체 길이 제한(64자 / 254자)을 포함한 형식 검증
- **멤버 배열 이메일 추출** (`extractEmails`) — `{ email }` 객체 배열에서 이메일 필드 추출
- **유효 이메일 필터링** (`getValidEmails`) — 검증을 통과한 이메일만 반환
- **중복 제거** (`uniqueValidEmails`) — 유효 이메일 목록에서 중복 제거
- **단위 테스트 8건** — Node.js 내장 테스트 러너 (`npm test`)

#### 🧹 기타

- `docs/validator.md` — 검증 모듈 스펙 문서 추가
- `.cursor/commands/prep-pr.md` — PR 전 점검 슬래시 커맨드 추가
- `.cursor/rules/coding-style.mdc` — 코딩 스타일 규칙 추가

## 사용법

```js
import { isValidEmail, uniqueValidEmails } from './src/email.js';

isValidEmail('user@example.com'); // true

const members = [
  { email: 'a@example.com' },
  { email: 'invalid' },
  { email: 'a@example.com' },
];
uniqueValidEmails(members); // ['a@example.com']
```

## 테스트

```bash
npm test
```
