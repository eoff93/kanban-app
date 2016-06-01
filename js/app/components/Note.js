'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Note = function (_React$Component) {
  _inherits(Note, _React$Component);

  function Note(props) {
    _classCallCheck(this, Note);

    // Track `editing` state.

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Note).call(this, props));

    _this.renderEdit = function () {
      // We deal with blur and input handlers here. These map to DOM events.
      // We also set selection to input end using a callback at a ref.
      // It gets triggered after the component is mounted.
      //
      // We could also use a string reference (i.e., `ref="input") and
      // then refer to the element in question later in the code through
      // `this.refs.input`. We could get the value of the input using
      // `this.refs.input.value` through DOM in this case.
      //
      // Refs allow us to access the underlying DOM structure. They
      // can be using when you need to move beyond pure React. They
      // also tie your implementation to the browser, though.
      return _react2.default.createElement('input', { type: 'text',
        ref: function ref(element) {
          return element ? element.selectionStart = _this.props.task.length : null;
        },
        autoFocus: true,
        defaultValue: _this.props.task,
        onBlur: _this.finishEdit,
        onKeyPress: _this.checkEnter });
    };

    _this.renderNote = function () {
      // If the user clicks a normal note, trigger editing logic.
      return _react2.default.createElement(
        'div',
        { onClick: _this.edit },
        _this.props.task
      );
    };

    _this.edit = function () {
      // Enter edit mode.
      _this.setState({
        editing: true
      });
    };

    _this.checkEnter = function (e) {
      // The user hit *enter*, let's finish up.
      if (e.key === 'Enter') {
        _this.finishEdit(e);
      }
    };

    _this.finishEdit = function (e) {
      // `Note` will trigger an optional `onEdit` callback once it
      // has a new value. We will use this to communicate the change to
      // `App`.
      //
      // A smarter way to deal with the default value would be to set
      // it through `defaultProps`.
      //
      // See the *Typing with React* chapter for more information.
      var value = e.target.value;

      if (_this.props.onEdit) {
        _this.props.onEdit(value);

        // Exit edit mode.
        _this.setState({
          editing: false
        });
      }
    };

    _this.state = {
      editing: false
    };
    return _this;
  }

  _createClass(Note, [{
    key: 'render',
    value: function render() {
      // Render the component differently based on state.
      if (this.state.editing) {
        return this.renderEdit();
      }

      return this.renderNote();
    }
  }]);

  return Note;
}(_react2.default.Component);

exports.default = Note;
//# sourceMappingURL=/home/eoff/repos/kanban-app/app/components/Note.js.map