import getTimeOfDay from "./getTimeOfDay"; // replace with the correct path to the file

describe("getTimeOfDay", () => {
	it("should return 🌑 if current hour is between 20 and 23", () => {
		const dateMock = jest.spyOn(global, "Date").mockImplementation(() => ({
			getHours: jest.fn().mockReturnValue(20),
		}));
		expect(getTimeOfDay()).toBe("🌑");
		dateMock.mockRestore();
	});

	it("should return 🌑 if current hour is between 0 and 6", () => {
		const dateMock = jest.spyOn(global, "Date").mockImplementation(() => ({
			getHours: jest.fn().mockReturnValue(2),
		}));
		expect(getTimeOfDay()).toBe("🌑");
		dateMock.mockRestore();
	});

	it("should return ☀️ if current hour is between 7 and 19", () => {
		const dateMock = jest.spyOn(global, "Date").mockImplementation(() => ({
			getHours: jest.fn().mockReturnValue(9),
		}));
		expect(getTimeOfDay()).toBe("☀️");
		dateMock.mockRestore();
	});
});
