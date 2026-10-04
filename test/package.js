const t = require('tap');
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const root = path.join(__dirname, '..');

t.test('files list includes the main entry point', function (t) {
	t.ok(pkg.files.includes(pkg.main));
	t.end();
});

t.test('files list includes the type definition', function (t) {
	t.ok(pkg.files.includes(pkg.types));
	t.end();
});

t.test('every file in the files list exists', function (t) {
	pkg.files.forEach(function (file) {
		t.ok(fs.existsSync(path.join(root, file)), file + ' exists');
	});
	t.end();
});
