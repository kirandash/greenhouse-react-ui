import React from 'react'

import Avatar from '../Avatar'

// TODO: Convert to TypeScript
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Avatar',
	component: Avatar,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Avatar {...args} />

export const Regular = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {
	src: 'https://i.pravatar.cc/300',
	alt: 'Judith',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	src: 'https://i.pravatar.cc/300',
	alt: 'Judith',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	src: 'https://i.pravatar.cc/300',
	alt: 'Judith',
}
