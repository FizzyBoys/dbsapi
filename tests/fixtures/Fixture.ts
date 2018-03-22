import * as fs from 'fs';

class Fixture {
	public async loadFixture(path) {
		return JSON.parse(
			fs.readFileSync(`./tests/fixtures/data/${path}.json`, 'utf8')
		);
	}
}

export default new Fixture();
