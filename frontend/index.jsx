import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
    Box, 
    Typography, 
    Button, 
    Divider, 
    Switch, 
    FormControlLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    AutoAwesome,
    Psychology,
    Code,
    SaveAlt,
    History,
    Translate,
    Settings,
    Palette
} from '@mui/icons-material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#10a37f',
        },
        background: {
            default: '#f8f9fa',
        },
    },
});

function Popup() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ p: 2, width: '100%' }}>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AutoAwesome sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6" component="h1">
                        ChatGPT Enhancer
                    </Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />

                {/* Quick Actions */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
                        Quick Actions
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button 
                            variant="contained" 
                            size="small" 
                            startIcon={<Code />}
                            sx={{ flex: 1 }}
                        >
                            Code Mode
                        </Button>
                        <Button 
                            variant="contained"
                            size="small"
                            startIcon={<Psychology />}
                            sx={{ flex: 1 }}
                        >
                            Expert Mode
                        </Button>
                    </Box>
                </Box>

                {/* Features List */}
                <List dense>
                    <ListItem>
                        <ListItemIcon>
                            <SaveAlt fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Auto-save conversations"
                            secondary="Never lose your important chats"
                        />
                        <Switch size="small" />
                    </ListItem>
                    
                    <ListItem>
                        <ListItemIcon>
                            <History fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Context memory"
                            secondary="Enhance chat continuity"
                        />
                        <Switch size="small" />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Translate fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Auto-translate"
                            secondary="Seamless language switching"
                        />
                        <Switch size="small" />
                    </ListItem>
                </List>

                <Divider sx={{ my: 1 }} />

                {/* Footer Actions */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Tooltip title="Settings">
                        <IconButton size="small">
                            <Settings fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Theme">
                        <IconButton size="small">
                            <Palette fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Popup />);