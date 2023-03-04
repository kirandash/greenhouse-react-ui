import React from 'react'
import Input from '../Input'

import Label from '../Label'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Label',
	component: Label,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Label {...args}>Form Label here</Label>

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
	className: 'test-class-name',
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
}

const Template2 = args => (
	<Label {...args}>
		Form label here
		<Input />
	</Label>
)
export const LabelWithInput = Template2.bind({})
LabelWithInput.args = {}
