import React from 'react';
import { IconButton, Tooltip, useToast } from '@chakra-ui/react';
import { pinService } from '../services/api';

interface PinButtonProps {
    messageId: string;
    chatId: string;
    content: string;
    userId: string;
}

export const PinButton: React.FC<PinButtonProps> = ({ messageId, chatId, content, userId }) => {
    const toast = useToast();

    const handlePin = async () => {
        try {
            await pinService.createPin({
                messageId,
                chatId,
                content,
                userId,
            });
            
            toast({
                title: "Message pinned",
                status: "success",
                duration: 2000,
            });
        } catch (error) {
            toast({
                title: "Failed to pin message",
                status: "error",
                duration: 2000,
            });
        }
    };

    return (
        <Tooltip label="Pin message">
            <IconButton
                aria-label="Pin message"
                icon={<span>📌</span>}
                size="sm"
                variant="ghost"
                onClick={handlePin}
            />
        </Tooltip>
    );
}; 