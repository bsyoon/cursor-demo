// RFC 5322 이메일 패턴 (emailregex.com 권장안, regular-expressions.info RFC 5322 구현)
// https://emailregex.com/
// https://www.regular-expressions.info/email.html
const RFC5322_EMAIL_REGEX =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

const MAX_EMAIL_LENGTH = 254;
const MAX_LOCAL_PART_LENGTH = 64;

/**
 * 이메일 문자열이 RFC 5322 형식과 길이 제한을 만족하는지 검증한다.
 * @param {string} email - 검증할 이메일
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') return false;

  const atIndex = email.lastIndexOf('@');
  if (atIndex <= 0 || atIndex > MAX_LOCAL_PART_LENGTH) return false;
  if (email.length > MAX_EMAIL_LENGTH) return false;

  return RFC5322_EMAIL_REGEX.test(email);
}
