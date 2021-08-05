import React from 'react';
import PropTypes from 'prop-types';

import {Typography, Button, Box} from '@material-ui/core';
/*import {makeStyles} from '@material-ui/core/styles';*/

/*const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
  },
});*/

const SistemTypography = ({name}) => {
  /*  const classes = useStyles();*/
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">h1</Typography>
        <Typography variant="h1">Hello {name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">subtitle1</Typography>
        <Typography variant="subtitle1">Hello {name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">subtitle2</Typography>
        <Typography variant="subtitle2">Hello {name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">body1</Typography>
        <Typography variant="body1">Hello {name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">body2</Typography>
        <Typography variant="body2">Hello {name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">overline</Typography>
        <Typography variant="overline">HELLO {name}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">button</Typography>
        <Button variant="contained" color="primary">Hello {name}</Button>
        <Button variant="contained" color="secondary">Hello {name}</Button>
        <Button variant="outlined" color="secondary">Hello {name}</Button>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">button</Typography>
        <Button variant="contained" color="primary">Hello {name}</Button>
        <Button variant="contained" color="secondary">Hello {name}</Button>
        <Button variant="outlined" color="secondary">Hello {name}</Button>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">caption</Typography>
        <Typography variant="caption">Hello {name}</Typography>
      </Box>


    </>
  );
};

SistemTypography.propTypes = {
  name: PropTypes.string,
};

SistemTypography.defaultProps = {
  name: 'Marta'
};

export default SistemTypography;
