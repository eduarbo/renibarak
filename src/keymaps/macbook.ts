/* tslint:disable:object-literal-sort-keys */

import {
  arrows,
  functions,
  letters,
  modifiers,
  numbers,
  symbols,
} from '../keyCodes';

const { _1, _2, _3, _4, _5, _6, _7, _8, _9, _0 } = numbers;
const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z } = letters;
const { ESC, GRV, MIN, EQL, BSP, TAB, LBR, RBR, BSL, DEL, SCL, QOT, RET, COM, DOT, SLS, SPC } = symbols;
const { LSHFT, RSHFT, FN, LCT, LOP, LCMD, RCMD, ROP } = modifiers;
const { F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12 } = functions;
const { UP, LFT, DW, RGT } = arrows;

export default [
// ┌────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐
    ESC ,F1 ,F2 ,F3 ,F4 ,F5 ,F6 ,F7 ,F8 ,F9 ,F10,F11,F12,    ,
// ├───┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴──┬┴────┤
    GRV,_1 ,_2 ,_3 ,_4 ,_5 ,_6 ,_7 ,_8 ,_9 ,_0 ,MIN,EQL, BSP ,
// ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬───┤
     TAB , Q , W , E , R , T , Y , U , I , O , P ,LBR,RBR,BSL,
// ├─────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┤
     DEL   , A , S , D , F , G , H , J , K , L ,SCL,QOT, RET ,
// ├───────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─────┤
     LSHFT   , Z , X , C , V , B , N , M ,COM,DOT,SLS, RSHFT ,
// ├────┬───┬┴──┬┴───┼───┴───┴───┴───┴───┼───┴┬──┴┬──┴───────┤
     FN ,LCT,LOP,LCMD,        SPC        ,RCMD,ROP,    UP    ,
// └────┴───┴───┴────┴───────────────────┴────┴───┼───┬──┬───┤
                                                  ,LFT,DW,RGT,
//                                                └───┴──┴───┘
];
