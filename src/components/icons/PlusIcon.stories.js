import React from 'react';
import PlusIcon from './PlusIcon';

export default {
  title: 'SISTEMA/ic_Plus',
  component: PlusIcon,
};

const Template = args => <PlusIcon {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};