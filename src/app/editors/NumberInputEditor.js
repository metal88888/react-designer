'use strict';

var React = require('react');

var NumberInputEditor = React.createClass({
    render: function () {
        return (
               <input type='number' value={this.props.value} onChange={this.props.onChange} />
        )
    }
});
module.exports = NumberInputEditor;
