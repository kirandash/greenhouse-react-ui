import React from 'react'

import Input from '../Input'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Input {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
	className: 'test-class-name',
	placeholder: 'Enter text',
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
	placeholder: 'Enter text',
}

export const Invalid = Template.bind({})
Invalid.args = {
	invalid: true,
	placeholder: 'Enter text',
}

export const Password = Template.bind({})
Password.args = {
	type: 'password',
	placeholder: 'Enter password',
}
