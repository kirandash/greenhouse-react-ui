import React from 'react'
import Badge from '../Badge'

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {},
}

const Template = args => <Badge {...args}>Badge</Badge>

export const Base = Template.bind({})
Base.args = {
    className: 'test-class-name',
    color: 'base',
}

export const Neutral = Template.bind({})

Neutral.args = {
    className: 'test-class-name',
    color: 'neutral',
}

export const Success = Template.bind({})
Success.args = {
    className: 'test-class-name',
    color: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
    className: 'test-class-name',
    color: 'danger',
}

export const Warning = Template.bind({})
Warning.args = {
    className: 'test-class-name',
    color: 'warning',
}
