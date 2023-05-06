import React from 'react'

import TextArea from '../TextArea'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/TextArea',
	component: TextArea,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <TextArea {...args} />

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
