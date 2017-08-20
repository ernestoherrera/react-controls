# Password Textbox

# Purpose
This control allows you to collect password information. It uses styled-components library for css styling; therefore, to use this control in your projects, all you need is the one file: passwordTextbox.js

It detects the CAPS LOCK on.

## Composition

PasswordTextbox is made up by a label and input html controls. Screen readers use label controls to ease the data input for people with disabilities.

## Properties

    onChange : React.PropTypes.func.isRequired

By providing this callback function, the PasswordTextbox component will pass to its client its value.

-------------------------------------------------------------------------------------------

    inputWidth : PropTypes.string

By default the input control is set to '275px' wide. With this property one can change the default by providing a value.

-------------------------------------------------------------------------------------------

    inputHeight : PropTypes.string

By default the input control is set to '32px' tall. With this property one can change the default by providing a value. Changing this property, means one needs to provide the labelHeight property for the label.

-------------------------------------------------------------------------------------------

    labelWidth : PropTypes.string

By default the input control is set to '32px' wide. With this property one can change the default by providing a value.

-------------------------------------------------------------------------------------------

    labelHeight : PropTypes.string

By default the input control is set to '32px' tall. With this property one can change the default by providing a value.

-------------------------------------------------------------------------------------------

    iconSize : PropTypes.number

By default the svg image is set to 22 wide and tall. With this property one can change the default by providing a value.