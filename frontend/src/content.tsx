import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { PinButton } from './components/PinButton';

// Template for message observer and pin button injection
const injectPinButtons = () => {
    // Find all message containers
    const messageContainers = document.querySelectorAll('.message');
    
    messageContainers.forEach(container => {
        // Skip if already processed
        if (container.querySelector('.pin-button-container')) return;

        // Create container for pin button
        const pinContainer = document.createElement('div');
        pinContainer.className = 'pin-button-container';
        
        // Extract message data
        const messageId = container.getAttribute('data-message-id') || '';
        const chatId = window.location.pathname.split('/').pop() || '';
        const content = container.textContent || '';
        const userId = 'TODO: Get user ID';  // TODO: Implement user identification

        // Create root and render pin button
        const root = createRoot(pinContainer);
        root.render(
            <ChakraProvider>
                <PinButton
                    messageId={messageId}
                    chatId={chatId}
                    content={content}
                    userId={userId}
                />
            </ChakraProvider>
        );

        // Insert pin button into message container
        container.appendChild(pinContainer);
    });
};

// Template for setting up mutation observer
const setupObserver = () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                injectPinButtons();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
};

// Initialize
setupObserver();
injectPinButtons(); 