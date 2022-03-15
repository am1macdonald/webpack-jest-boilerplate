import sinkShip from './index.js';



test('sinks a ship', () => {
	expect(sinkShip()).toBe('down she goes!');
});
