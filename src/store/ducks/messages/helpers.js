export const createNewMessage = payload => ({
    type: payload.type,
    content: payload.content,
    id: Math.floor(Math.random() * 10000),
});