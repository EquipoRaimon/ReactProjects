export const PIEZAS = {
    0: { shape: [[0]], color: '#fff2d1' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]],
        color: '#00FFFF',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]],
        color: '#0000FF',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']],
        color: '#FFA500',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']],
        color: '#FFFF00',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]],
        color: '#00FF00',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]],
        color: '#800080',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]],
        color: '#FF0000',
    },
};

export function randomPieza() {
    const piezas = 'IJLOSTZ';
    const piezaRandom = piezas[Math.floor(Math.random() * piezas.length)];
    return PIEZAS[piezaRandom];
};