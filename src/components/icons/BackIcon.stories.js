import React from 'react';
import BackIcon from './BackIcon';

export default {
  title: 'SISTEMA/ic_Back',
  component: BackIcon,
};

const Template = args => <BackIcon {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};