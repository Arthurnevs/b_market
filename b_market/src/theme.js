// src/theme.js
import { createTheme } from '@mui/material/styles';

// Configuração do tema claro
const theme = createTheme({
  palette: {
    mode: 'light', // Define o modo como claro
    primary: {
      main: '#1976d2', // Cor primária
    },
    secondary: {
      main: '#dc004e', // Cor secundária
    },
    background: {
      default: '#f5f5f5', // Cor de fundo padrão
      paper: '#ffffff', // Cor de fundo dos elementos tipo "paper"
    },
    text: {
      primary: '#000000', // Cor do texto principal
      secondary: '#333333', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fonte padrão
  },
});

export default theme;
