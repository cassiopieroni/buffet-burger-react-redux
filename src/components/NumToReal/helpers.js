export const numToReal = num => {  
    if (!num && num !== 0)
        return;

    return (num).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
};