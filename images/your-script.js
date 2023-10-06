class Chat {
    constructor() {
        this.messages = [];
        this.typingIndicatorTimeout = null;
        this.init();
    }

    init() {
        this.messageInput = document.getElementById('message-input');
        this.sendButton = document.getElementById('send-button');
        this.chatMessages = document.getElementById('chat-messages');

        this.sendButton.addEventListener('click', () => {
            this.sendMessage();
        });

        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        this.displayTypingIndicator();
    }

    sendMessage() {
        const messageText = this.messageInput.value.trim();
        if (messageText !== '') {
            const message = {
                text: messageText,
                timestamp: new Date(),
                sender: 'You',
            };
            this.messages.push(message);
            this.displayMessage(message);

            // Simulate a response after a short delay (e.g., from a recipient)
            setTimeout(() => {
                const response = {
                    text: 'Hello! This is a simulated response.',
                    timestamp: new Date(),
                    sender: 'Recipient',
                };
                this.messages.push(response);
                this.displayMessage(response);
            }, 1000);

            this.messageInput.value = '';
        }
    }

    displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <div class="message-header">${message.sender} • ${this.formatTimestamp(message.timestamp)}</div>
            <div class="message-text">${message.text}</div>
        `;
        this.chatMessages.appendChild(messageElement);

        // Scroll to the latest message
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    displayTypingIndicator() {
        this.typingIndicatorTimeout = setInterval(() => {
            const message = {
                text: 'Typing...',
                timestamp: new Date(),
                sender: 'Recipient',
            };
            this.displayMessage(message);
        }, 1500);
    }

    formatTimestamp(timestamp) {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        return new Intl.DateTimeFormat('en-US', options).format(timestamp);
    }
}

// Initialize the chat when the page loads
window.onload = () => {
    new Chat();
};
