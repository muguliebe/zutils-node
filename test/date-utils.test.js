const DateUtils = require('../src/date.utils')

const dy = DateUtils.currentDate()

test('currentDate return equal before value', () => {
    expect(DateUtils.currentDate()).toBe(dy)
})

