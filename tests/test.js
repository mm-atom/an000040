const test = require('ava');
const fs = require('fs/promises');

const { default: a } = require('../dist/index');

test('run command in current dir', async (t) => {
	const readme = await a('cat ./readme.md');
	const file = await fs.readFile('./readme.md', 'utf-8');
	t.is(readme, file.trimEnd());
});

test('run command in special dir', async (t) => {
	const settings = await a('cat ./settings.json', './.vscode/');
	const file = await fs.readFile('./.vscode/settings.json', 'utf-8');
	t.is(settings, file);
});
