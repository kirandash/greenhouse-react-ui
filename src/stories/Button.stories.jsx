import React from 'react'

import Button from '../Button'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	className: 'test-class-name',
}

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
	layout: 'outline',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
}
