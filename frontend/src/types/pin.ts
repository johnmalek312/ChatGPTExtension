export interface Pin {
    id: string;
    messageId: string;
    chatId: string;
    content: string;
    userId: string;
    createdAt: Date;
    updatedAt?: Date;
}

export interface PinCreate {
    messageId: string;
    chatId: string;
    content: string;
    userId: string;
} 