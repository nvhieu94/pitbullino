import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1A43E9',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff'
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff'
    },
    error: {
      main: red.A400,
      light: red.A100,
      dark: red.A200,
      contrastText: '#fff'
    },
    warning: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
        contrastText: '#fff'
    },
    info: {
        main: '#0288d1',
        light: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
    },
    success: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
        contrastText: '#fff'
    }
  },
  components: {
      MuiContainer: {
          styleOverrides: {
              maxWidthLg: {
                maxWidth: '1180px',
                '@media (min-width: 1200px)':{
                    maxWidth: '1180px'
                }
              },
              maxWidthMd: {
                maxWidth: '860px',
                '@media (min-width: 900px)':{
                    maxWidth: '860px'
                }
              },
              maxWidthSm:{
                maxWidth: '680px',
                '@media (min-width: 600px)':{
                    maxWidth: '680px'
                }
              }
          },
          defaultProps: {
              maxWidth: "lg"
          },
          variants: [],
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            height: '38px',
            textTransform: "none",
          },
        }, 
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          }
        }
      }
      
    
  },

});
