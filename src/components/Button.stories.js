import React from 'react';
import ButtonLIB from './ButtonLIB';

export default {
  title: 'SISTEMA/ButtonLIB',
  component: ButtonLIB,
};

const Template = args => <ButtonLIB {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Botón'
};