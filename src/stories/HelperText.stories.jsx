import React from 'react'

import HelperText from '../HelperText'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/HelperText',
	component: HelperText,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <HelperText {...args}>HelperText</HelperText>

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
	className: 'test-class-name',
}

export const Invalid = Template.bind({})
Invalid.args = {
	valid: false,
}

const Template2 = args => (
	<HelperText {...args}>
		<li>HelperText</li>
		<li>HelperText</li>
		<li>HelperText</li>
	</HelperText>
)
export const ListOfHelperTexts = Template2.bind({})
ListOfHelperTexts.args = {
	valid: false,
	as: 'ul',
}
