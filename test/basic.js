const t = require('tap');
const safename = require('../safename');

t.test('Replaces spaces with hyphen', function (t) {
	t.equal('foo-bar', safename('foo bar'));
	t.end();
});

t.test('Replaces multiple spaces with hyphens', function (t) {
	t.equal('foo---bar', safename('foo   bar'));
	t.end();
});

t.test('Does not replace capital letters', function (t) {
	t.equal('Foo-BAR', safename('Foo BAR'));
	t.end();
});

t.test('Replaces non-alphanumeric characters with a hex character code', function (t) {
	t.equal('Super_x21_x23_x24_x26_x2c', safename('Super!#$&,'));
	t.end();
});
