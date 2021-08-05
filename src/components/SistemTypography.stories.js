import React from 'react';
import SistemTypography from './SistemTypography';

export default {
  title: 'SISTEMA/SistemTypography',
  component: SistemTypography,
};

const Template = args => <SistemTypography {...args} />;

export const Titulo = Template.bind({});
Titulo.args = {
  name: 'World!',
};