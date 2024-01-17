const {dc, sum, sumObj} = require('./sum');

test('one plus two equal three', () => {
	expect(sum(1, 2)).toBe(3);
	expect(sum(1, 2)).toBeDefined();
	expect(sum(1, 2)).toBeTruthy();
    
});

test('falsy', () => {
	expect(sum()).not.toBe(1);
	expect(sum()).toBeFalsy();
    // toBeNull
    // tobeUndefinied
});

test('numbers', () => {
	const float = 0.1 + 0.2;
	expect(sum(1, 2)).toBeGreaterThan(0);
	expect(sum(1, 2)).toBeGreaterThanOrEqual(0);
	expect(sum(1, 2)).toBeLessThan(5);
	expect(sum(1, 2)).toBeLessThanOrEqual(5);
	expect(float).toBeCloseTo(0.3);
});


test('contains', () => {
    let justiceLeague = dc();
    expect(justiceLeague).toContain('batman');
    expect(new Set(justiceLeague)).toContain('batman');
});

test('one plus two equal three', () => {
	expect(sumObj(1, 2)).toEqual({ a : 1, b : 2, sum : 3 });
});