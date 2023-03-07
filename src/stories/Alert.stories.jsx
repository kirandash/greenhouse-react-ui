import React from 'react'

import Alert from '../Alert'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Alert',
	component: Alert,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Alert {...args}>Registered successfully</Alert>

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
	className: 'test-class-name',
}

const Template2 = args => (
	<Alert {...args}>Incorrect code. Please try again.</Alert>
)
export const Error = Template2.bind({})
Error.args = {
	type: 'error',
}
