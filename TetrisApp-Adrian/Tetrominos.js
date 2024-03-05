import { Colors } from "./styles";

export const TETROMINOS = {
    0: { shape: [[0]], color: Colors.colors.shadow },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]],
        color: Colors.colors.i_primary,
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]],
        color: Colors.colors.j_primary,
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']],
        color: Colors.colors.l_primary,
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']],
        color: Colors.colors.o_primary,
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]],
        color: Colors.colors.s_primary,
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]],
        color: Colors.colors.t_primary,
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]],
        color: Colors.colors.z_primary,
    },
};

export function randomTetromino() {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
};