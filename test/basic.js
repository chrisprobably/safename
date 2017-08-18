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
