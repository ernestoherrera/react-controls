# Username Textbox

## Purpose
This control allows you to collect username information. It uses styled-components library for css styling; therefore, to use this control in your projects, all you need is the one file: usernameTextbox.js
You may change the css styles directly in the file.

## Properties

    onChange : PropTypes.func

By providing this callback function, the UsernameTextbox component will pass to its client its value.
-------------------------------------------------------------------------------------------

    inputWidth : PropTypes.string

By default the input control is set to '275px' wide. With this property one can change the default by providing a value.

    inputHeight : PropTypes.string

By default the input control is set to '32px' tall. With this property one can change the default by providing a value. Changing this property, means one needs to provide the labelHeight property for the label.

    labelWidth : PropTypes.string

By default the input control is set to '32px' wide. With this property one can change the default by providing a value.

    labelHeight : PropTypes.string

By default the input control is set to '32px' tall. With this property one can change the default by providing a value.

    iconSize : PropTypes.number

By default the svg image is set to 26 wide and tall. With this property one can change the default by providing a value.