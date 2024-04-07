// dateTimeParser.spec.js
const { parseDateTimeGroup, formatDate } = require('./dateTimeParser');

describe("Date Time Group Parser", () => {
  it("parses a standard date-time group string correctly", () => {
    const input = "20230918T230000";
    const expectedDate = new Date('2023-09-18T23:00:00');
    const parsedDate = parseDateTimeGroup(input);
    expect(parsedDate).toEqual(expectedDate);
  });

   it("formats a date object to a human-readable string including hours, minutes, and seconds", () => {
  const date = new Date('2023-09-18T23:18:24');
  const formattedDate = formatDate(date);
  const expectedString = "September 18, 2023, at 11:18:24 PM"; // Note the comma after the date
  expect(formattedDate).toBe(expectedString);
});

  // Test for edge cases
  it("handles leap year dates correctly", () => {
    const input = "20240229T120000";
    const expectedDate = new Date('2024-02-29T12:00:00');
    const parsedDate = parseDateTimeGroup(input);
    expect(parsedDate).toEqual(expectedDate);
  });

  it("throws an error for invalid date-time group strings", () => {
    const input = "19981332T250000"; // Invalid date and time
    expect(() => {
      parseDateTimeGroup(input);
    }).toThrow(new Error('Invalid date-time group string'));
  });

 it("rejects invalid date-time group strings", () => {
    const invalidInput = "20241335T230000";
    expect(() => {
      parseDateTimeGroup(invalidInput);
    }).toThrow(new Error('Invalid date-time group string'));
  });
  // Add more tests for other edge cases
});

