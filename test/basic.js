const t = require('tap');
const safeclassname = require('../safeclassname');

t.test('Replaces spaces with hyphen', function (t) {
	t.equal('foo-bar', safeclassname('foo bar'));
	t.end();
});

t.test('Replaces multiple spaces with hyphens', function (t) {
	t.equal('foo---bar', safeclassname('foo   bar'));
	t.end();
});

t.test('Does not replace capital letters', function (t) {
	t.equal('Foo-BAR', safeclassname('Foo BAR'));
	t.end();
});

t.test('Replaces non-alphanumeric characters with a hex character code', function (t) {
	t.equal('Super_x21_x23_x24_x26_x2c', safeclassname('Super!#$&,'));
	t.end();
});

t.test('returns empty string if passed undefined', function (t) {
	t.equal('', safeclassname(undefined));
	t.end();
});

t.test('returns empty string if passed null', function (t) {
	t.equal('', safeclassname(null));
	t.end();
});

t.test('returns empty string if passed empty string', function (t) {
	t.equal('', safeclassname(''));
	t.end();
});


t.test('Does not replace digits', function (t) {
	t.equal('abc123', safeclassname('abc123'));
	t.end();
});

t.test('Replaces non-space whitespace with a hex character code', function (t) {
	t.equal('foo_x9bar_xa', safeclassname('foo\tbar\n'));
	t.end();
});

t.test('Replaces non-ASCII characters with a hex character code', function (t) {
	t.equal('caf_xe9', safeclassname('café'));
	t.end();
});
