interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}
declare const data: ToJsonStringify;
declare const sumThreeNumbers: (num1: number, num2: number, num3: number) => number;
declare const resultSum: number;
declare const constNumber: number;
declare let variableString: string;
declare const constBoolean: boolean;
declare let variableArray: number[];
declare const constObject: {
    key: string;
    value: number;
};
declare let variableAny: any;
declare const constTuple: [string, number];
declare let variableUnion: string | number;
declare const dataJson: string;
