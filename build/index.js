'use strict';

var _require = require('create-jest-runner'),
    createJestRunner = _require.createJestRunner;

module.exports = createJestRunner(require.resolve('./runMocha'));