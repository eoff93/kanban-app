'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Note = require('./Note.jsx');

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var notes = _ref.notes;

  return _react2.default.createElement(
    'ul',
    null,
    notes.map(function (note) {
      return _react2.default.createElement(
        'li',
        { key: note.id },
        _react2.default.createElement(_Note2.default, { task: note.task })
      );
    })
  );
};
//# sourceMappingURL=/home/eoff/repos/kanban-app/app/components/Notes.js.map