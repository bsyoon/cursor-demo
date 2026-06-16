import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, extractEmails, getValidEmails, uniqueValidEmails } from './email.js';

describe('isValidEmail', () => {
    it('returns true for valid emails', () => {
        assert.equal(isValidEmail('alice@example.com'), true);
    });

    it('returns false for invalid emails', () => {
        assert.equal(isValidEmail('not-an-email'), false);
        assert.equal(isValidEmail(null), false);
    });
});

describe('extractEmails', () => {
    it('extracts email fields from members', () => {
        const members = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'bob@example.com' },
        ];
        assert.deepEqual(extractEmails(members), ['alice@example.com', 'bob@example.com']);
    });

    it('returns empty array for non-array input', () => {
        assert.deepEqual(extractEmails(null), []);
    });
});

describe('getValidEmails', () => {
    it('returns only valid emails', () => {
        const members = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'invalid' },
            { name: 'Carol', email: 'carol@example.org' },
        ];
        assert.deepEqual(getValidEmails(members), ['alice@example.com', 'carol@example.org']);
    });

    it('returns empty array for non-array input', () => {
        assert.deepEqual(getValidEmails(undefined), []);
    });
});

describe('uniqueValidEmails', () => {
    it('returns unique valid emails only', () => {
        const members = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'bob@example.com' },
            { name: 'Alice2', email: 'alice@example.com' },
            { name: 'Invalid', email: 'not-an-email' },
        ];
        assert.deepEqual(uniqueValidEmails(members), ['alice@example.com', 'bob@example.com']);
    });

    it('returns empty array for non-array input', () => {
        assert.deepEqual(uniqueValidEmails(null), []);
    });
});
