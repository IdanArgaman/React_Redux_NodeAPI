// all errors caught by async wrapper and sent to error handler
// no need for try catch, we need to use this pattern
// in order to catch and handle errors from async code patterns like async/await

export const AsyncWrapper = func => (req, res, next) =>
    func(req, res, next).catch(next);