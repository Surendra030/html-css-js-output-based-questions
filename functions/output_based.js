var code_base_questions = [
    {
        "serial": 1,
        "question": "What output do you expect from the following code snippet?\n\nvar a = 2;\nvar b = '2';\nconsole.log(a == b);",
        "answer": "true",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 2,
        "question": "What will the following code snippet output?\n\nconsole.log(0.1 + 0.2 == 0.3);",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 3,
        "question": "What will be the result of the following code?\n\nconsole.log(1 + '1');",
        "answer": "\"11\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 4,
        "question": "What will be the output?\n\nconsole.log(typeof NaN);",
        "answer": "\"number\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 5,
        "question": "What will the following code log to the console?\n\nconsole.log(5 + 5 + '5');",
        "answer": "\"105\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 6,
        "question": "What will be the output of the following code?\n\nconsole.log('5' - 2);",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 7,
        "question": "What will this code output?\n\nconsole.log([] + []);",
        "answer": "\"\" (an empty string)",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 8,
        "question": "What will the following code log?\n\nconsole.log([] + {});",
        "answer": "\"[object Object]\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 9,
        "question": "What will be the result of the following code snippet?\n\nconsole.log({} + []);",
        "answer": "\"[object Object]\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 10,
        "question": "What will this output?\n\nconsole.log([1] + [1,2,3]);",
        "answer": "\"11,2,3\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 11,
        "question": "What will the following code produce?\n\nconsole.log('1' - - '1');",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 12,
        "question": "What will the following code return?\n\nconsole.log(3 > 2 > 1);",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 13,
        "question": "What will the following code output?\n\nconsole.log(2 + '2' - '2');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 14,
        "question": "What will this code output?\n\nconsole.log(10 + 5 + 'px');",
        "answer": "\"15px\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 15,
        "question": "What will the following code return?\n\nconsole.log(null + undefined);",
        "answer": "NaN",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 16,
        "question": "What will the following log?\n\nconsole.log(10 * '5');",
        "answer": "50",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 17,
        "question": "What will be the output of this code?\n\nconsole.log('5' * '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 18,
        "question": "What will the following code produce?\n\nconsole.log('5' * []);",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 19,
        "question": "What will this code output?\n\nconsole.log('5' - '2');",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 20,
        "question": "What will the following code return?\n\nconsole.log('5' - - '2');",
        "answer": "7",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 21,
        "question": "What will the following code output?\n\nconsole.log('10' / '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 22,
        "question": "What will be the result of the following code?\n\nconsole.log('10' * '2');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 23,
        "question": "What will the following code snippet return?\n\nconsole.log('10' + 2);",
        "answer": "\"102\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 24,
        "question": "What will the following code log to the console?\n\nconsole.log('10' - 2);",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 25,
        "question": "What will the following code produce?\n\nconsole.log('10' / 2);",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 26,
        "question": "What will be the output of this code?\n\nconsole.log('10' - - 2);",
        "answer": "12",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 27,
        "question": "What will be the result of this code?\n\nconsole.log('10' - '2' + '2');",
        "answer": "\"82\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 28,
        "question": "What will be the result of this code?\n\nconsole.log(null + '2');",
        "answer": "\"null2\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 29,
        "question": "What will the following code produce?\n\nconsole.log(undefined + '2');",
        "answer": "\"undefined2\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 30,
        "question": "What will be the output?\n\nconsole.log(undefined + 2);",
        "answer": "NaN",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 31,
        "question": "What will this code output?\n\nconsole.log(null + 2);",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 32,
        "question": "What will the following code return?\n\nconsole.log(true + false);",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 33,
        "question": "What will be the output of this code?\n\nconsole.log(true + 'false');",
        "answer": "\"truefalse\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 34,
        "question": "What will the following code produce?\n\nconsole.log('true' + false);",
        "answer": "\"truefalse\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 35,
        "question": "What will be the result?\n\nconsole.log('false' + true);",
        "answer": "\"falsetrue\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 36,
        "question": "What will the following code produce?\n\nconsole.log('false' + 'true');",
        "answer": "\"falsetrue\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 37,
        "question": "What will this code output?\n\nconsole.log('' + '');",
        "answer": "\"\" (an empty string)",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 38,
        "question": "What will be the output?\n\nconsole.log('' + true);",
        "answer": "\"true\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 39,
        "question": "What will the following code return?\n\nconsole.log('' + false);",
        "answer": "\"false\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 40,
        "question": "What will the following code produce?\n\nconsole.log('' + null);",
        "answer": "\"null\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 41,
        "question": "What will be the result of this code?\n\nconsole.log('' + undefined);",
        "answer": "\"undefined\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 42,
        "question": "What will the following code produce?\n\nconsole.log(undefined + '');",
        "answer": "\"undefined\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 43,
        "question": "What will this code output?\n\nconsole.log(null + '');",
        "answer": "\"null\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 44,
        "question": "What will the following code return?\n\nconsole.log(false + '');",
        "answer": "\"false\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 45,
        "question": "What will be the result?\n\nconsole.log(true + '');",
        "answer": "\"true\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 46,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 47,
        "question": "What will be the output?\n\nconsole.log(10 / '2' + '2');",
        "answer": "\"52\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 48,
        "question": "What will be the result of this code?\n\nconsole.log(10 / '2' - '2');",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 49,
        "question": "What will the following code return?\n\nconsole.log(10 * '2' + '2');",
        "answer": "\"202\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 50,
        "question": "What will be the result?\n\nconsole.log(10 * '2' - '2');",
        "answer": "18",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 51,
        "question": "What will the following code produce?\n\nconsole.log(10 + +'2');",
        "answer": "12",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 52,
        "question": "What will be the result of the following code?\n\nconsole.log('10' - '5' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 53,
        "question": "What will the following code return?\n\nconsole.log('10' + '5' - '5');",
        "answer": "100",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 54,
        "question": "What will be the output?\n\nconsole.log('10' * '2' + '5');",
        "answer": "\"205\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 55,
        "question": "What will this code produce?\n\nconsole.log(10 * '2' - '5');",
        "answer": "15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 56,
        "question": "What will the following code return?\n\nconsole.log(10 * '2' / '5');",
        "answer": "4",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 57,
        "question": "What will be the output of the following code?\n\nconsole.log(10 + '5' * '2');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 58,
        "question": "What will the following code log?\n\nconsole.log('10' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 59,
        "question": "What will be the result?\n\nconsole.log('10' / '2' * '5');",
        "answer": "25",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 60,
        "question": "What will the following code return?\n\nconsole.log(10 - '5' / '2');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 61,
        "question": "What will be the output?\n\nconsole.log('10' / '5' + '2');",
        "answer": "\"22\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 62,
        "question": "What will the following code produce?\n\nconsole.log(10 + '5' - '2');",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 63,
        "question": "What will be the result?\n\nconsole.log(10 * '5' + '2');",
        "answer": "\"502\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 64,
        "question": "What will the following code return?\n\nconsole.log('10' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 65,
        "question": "What will be the output?\n\nconsole.log('10' + '5' / '2');",
        "answer": "\"102.5\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 66,
        "question": "What will this code output?\n\nconsole.log(10 - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 67,
        "question": "What will the following code log?\n\nconsole.log('10' - '5' * '2' + '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 68,
        "question": "What will be the result?\n\nconsole.log('10' + '5' * '2' - '5');",
        "answer": "\"5\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 69,
        "question": "What will the following code return?\n\nconsole.log(10 * '5' - '2' + '5');",
        "answer": "\"485\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 70,
        "question": "What will be the output of the following code?\n\nconsole.log('10' + '5' - '2' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 71,
        "question": "What will the following code produce?\n\nconsole.log(10 + '5' * '2' + '5');",
        "answer": "\"255\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 72,
        "question": "What will be the result?\n\nconsole.log(10 - '5' * '2' / '5');",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 73,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' * '5');",
        "answer": "12.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 74,
        "question": "What will be the output?\n\nconsole.log('10' / '5' + '2' * '5');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 75,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' / '2' * '5');",
        "answer": "-15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 76,
        "question": "What will be the result?\n\nconsole.log(10 + '5' - '2' * '5');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 77,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' - '5');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 78,
        "question": "What will be the output?\n\nconsole.log('10' - '5' / '2' * '5');",
        "answer": "-15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 79,
        "question": "What will this code log?\n\nconsole.log(10 + '5' - '2' * '5' + '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 80,
        "question": "What will be the result?\n\nconsole.log('10' / '2' * '5' - '2');",
        "answer": "23",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 81,
        "question": "What will the following code return?\n\nconsole.log('10' * '2' / '5' + '2');",
        "answer": "\"42\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 82,
        "question": "What will be the output?\n\nconsole.log(10 + '5' * '2' - '5');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 83,
        "question": "What will the following code produce?\n\nconsole.log(10 * '2' - '5' + '2');",
        "answer": "\"152\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 84,
        "question": "What will be the result?\n\nconsole.log('10' + '5' / '2' * '5' - '2');",
        "answer": "10.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 85,
        "question": "What will the following code return?\n\nconsole.log(10 - '5' + '5' * '2');",
        "answer": "510",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 86,
        "question": "What will be the output?\n\nconsole.log('10' * '2' - '5' / '2');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 87,
        "question": "What will the following code log?\n\nconsole.log(10 / '2' * '5' + '2');",
        "answer": "\"52\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 88,
        "question": "What will be the result?\n\nconsole.log(10 * '2' / '5' - '2');",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 89,
        "question": "What will the following code return?\n\nconsole.log('10' - '5' + '2' * '5');",
        "answer": "\"520\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 90,
        "question": "What will be the output of the following code?\n\nconsole.log(10 + '5' / '2' * '5' - '2');",
        "answer": "10.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 91,
        "question": "What will the following code produce?\n\nconsole.log('10' / '5' - '2' * '5' + '2');",
        "answer": "\"-82\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 92,
        "question": "What will be the result?\n\nconsole.log('10' + '5' * '2' - '5' * '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 93,
        "question": "What will the following code return?\n\nconsole.log('10' - '5' / '2' + '5' * '2');",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 94,
        "question": "What will be the output?\n\nconsole.log(10 * '2' / '5' + '5' - '2');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 95,
        "question": "What will the following code produce?\n\nconsole.log('10' + '5' - '5' + '5' * '2');",
        "answer": "1055",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 96,
        "question": "What will be the result?\n\nconsole.log('10' - '5' / '2' + '5' / '2');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 97,
        "question": "What will the following code return?\n\nconsole.log('10' * '2' / '5' - '2' + '5');",
        "answer": "\"35\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 98,
        "question": "What will be the output?\n\nconsole.log(10 / '5' + '5' * '2' - '5');",
        "answer": "\"52\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 99,
        "question": "What will the following code log?\n\nconsole.log(10 * '2' - '5' + '5' - '2');",
        "answer": "15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 100,
        "question": "What will be the result?\n\nconsole.log('10' / '5' - '2' + '5' * '2');",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 101,
        "question": "What will the following code produce?\n\nconsole.log('10' - '5' * '2' / '5' + '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 102,
        "question": "What will be the result?\n\nconsole.log(10 + '5' / '2' * '5' - '5');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 103,
        "question": "What will the following code return?\n\nconsole.log('10' / '2' + '5' * '2' - '5');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 104,
        "question": "What will be the output?\n\nconsole.log('10' * '2' + '5' - '5' * '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 105,
        "question": "What will the following code produce?\n\nconsole.log('10' - '5' / '2' + '5' * '2');",
        "answer": "\"20\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 106,
        "question": "What will be the result?\n\nconsole.log(10 + '5' * '2' - '5' / '2');",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 107,
        "question": "What will the following code return?\n\nconsole.log('10' + '5' * '2' / '5' - '5');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 108,
        "question": "What will be the output?\n\nconsole.log(10 / '2' + '5' * '2' / '5' - '2');",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 109,
        "question": "What will the following code produce?\n\nconsole.log('10' - '5' * '2' / '5' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 110,
        "question": "What will be the result?\n\nconsole.log(10 + '5' * '2' / '5' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 111,
        "question": "What will the following code return?\n\nconsole.log('10' / '2' - '5' * '2' / '5' + '5');",
        "answer": "\"-55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 112,
        "question": "What will be the output?\n\nconsole.log('10' - '5' / '2' * '2' + '5');",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 113,
        "question": "What will the following code produce?\n\nconsole.log(10 * '5' / '2' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 114,
        "question": "What will be the result?\n\nconsole.log('10' - '5' / '2' * '2' + '5' * '2');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 115,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' * '5' / '2' - '5');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 116,
        "question": "What will be the output?\n\nconsole.log('10' * '2' + '5' / '2' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 117,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' * '2' / '5' + '5' * '2');",
        "answer": "\"5\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 118,
        "question": "What will be the result?\n\nconsole.log('10' / '2' * '2' - '5' * '2' / '5' + '5');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 119,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' - '2' * '5' / '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 120,
        "question": "What will be the output?\n\nconsole.log('10' * '2' / '5' * '2' + '5');",
        "answer": "\"525\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 121,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' / '2' * '5' / '2' + '5');",
        "answer": "7.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 122,
        "question": "What will be the result?\n\nconsole.log('10' + '5' * '2' / '5' * '2');",
        "answer": "\"20\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 123,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' - '2' * '2' + '5' / '2');",
        "answer": "15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 124,
        "question": "What will be the output?\n\nconsole.log('10' * '2' + '5' / '5' * '2');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 125,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2' + '5' - '2' * '5' / '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 126,
        "question": "What will be the result?\n\nconsole.log('10' + '5' - '2' * '5' / '5' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 127,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' * '2' / '5' * '2');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 128,
        "question": "What will be the output?\n\nconsole.log('10' * '2' - '2' * '5' / '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 129,
        "question": "What will the following code produce?\n\nconsole.log(10 + '5' / '2' - '5' / '2' + '5' * '2');",
        "answer": "\"15\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 130,
        "question": "What will be the result?\n\nconsole.log('10' - '5' / '2' * '2' + '5');",
        "answer": "2.5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 131,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' - '5' / '2' * '2' / '5' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 132,
        "question": "What will be the output?\n\nconsole.log('10' - '5' / '2' + '5' * '2' / '5');",
        "answer": "\"20\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 133,
        "question": "What will the following code produce?\n\nconsole.log(10 * '2' + '5' / '2' - '2' * '5');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 134,
        "question": "What will be the result?\n\nconsole.log('10' / '2' - '2' * '5' / '2' + '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 135,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' - '5' * '2' / '5' + '5');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 136,
        "question": "What will be the output?\n\nconsole.log('10' * '2' - '2' / '5' * '5');",
        "answer": "15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 137,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2' * '5' / '2' + '5' * '2');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 138,
        "question": "What will be the result?\n\nconsole.log('10' + '5' - '2' * '2' / '5' + '5');",
        "answer": "\"50\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 139,
        "question": "What will the following code return?\n\nconsole.log(10 - '5' / '2' + '5' / '2' * '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 140,
        "question": "What will be the output?\n\nconsole.log('10' - '5' * '2' + '5' * '2' / '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 141,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2' + '5' / '2' - '2' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 142,
        "question": "What will be the result?\n\nconsole.log('10' - '5' / '2' * '2' / '5' + '5');",
        "answer": "\"50\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 143,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' * '2' - '2' * '5');",
        "answer": "-10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 144,
        "question": "What will be the output?\n\nconsole.log('10' * '2' + '5' - '5' / '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 145,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' * '2' + '5' - '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 146,
        "question": "What will be the result?\n\nconsole.log('10' - '5' * '2' / '5' + '5' * '2');",
        "answer": "\"525\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 147,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' - '2' / '5' * '5');",
        "answer": "8",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 148,
        "question": "What will be the output?\n\nconsole.log('10' * '2' / '5' * '2' - '5' / '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 149,
        "question": "What will the following code produce?\n\nconsole.log(10 / '5' + '5' * '2' - '2' * '5');",
        "answer": "\"10\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 150,
        "question": "What will be the result?\n\nconsole.log('10' - '5' / '2' * '2' / '5' + '5');",
        "answer": "\"50\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 151,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' * '5' - '5' / '2');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 152,
        "question": "What will be the output?\n\nconsole.log('10' * '2' - '5' + '5' / '5');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 153,
        "question": "What will the following code produce?\n\nconsole.log(10 / '5' * '2' - '5' + '5' * '2');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 154,
        "question": "What will be the result?\n\nconsole.log('10' + '5' / '5' * '2' - '5');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 155,
        "question": "What will the following code return?\n\nconsole.log(10 * '5' + '5' * '2' - '5');",
        "answer": "25",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 156,
        "question": "What will be the output?\n\nconsole.log('10' + '5' - '5' + '5' / '2');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 157,
        "question": "What will the following code produce?\n\nconsole.log(10 * '2' / '5' + '5' - '5' / '2');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 158,
        "question": "What will be the result?\n\nconsole.log('10' / '2' + '5' / '5' * '2' + '5');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 159,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' * '2' / '5' - '5' * '2');",
        "answer": "-10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 160,
        "question": "What will be the output?\n\nconsole.log('10' - '5' / '2' + '5' * '2' / '5' - '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 161,
        "question": "What will the following code produce?\n\nconsole.log(10 + '5' / '2' * '5' / '2' - '2' * '2');",
        "answer": "-5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 162,
        "question": "What will be the result?\n\nconsole.log('10' / '5' * '2' + '5' - '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 163,
        "question": "What will the following code return?\n\nconsole.log(10 * '2' / '5' - '5' * '2' / '5' + '5');",
        "answer": "\"50\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 164,
        "question": "What will be the output?\n\nconsole.log('10' / '2' + '5' - '5' / '2' * '2');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 165,
        "question": "What will the following code produce?\n\nconsole.log(10 + '5' * '2' - '5' + '5' / '5');",
        "answer": "25",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 166,
        "question": "What will be the result?\n\nconsole.log('10' + '5' / '2' + '5' * '2' - '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 167,
        "question": "What will the following code return?\n\nconsole.log(10 / '5' + '2' * '5' - '5' * '2');",
        "answer": "\"50\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 168,
        "question": "What will be the output?\n\nconsole.log('10' * '5' / '2' + '5' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 169,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' * '2' + '2' / '5' * '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 170,
        "question": "What will be the result?\n\nconsole.log('10' * '2' - '5' * '2' + '5' / '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 171,
        "question": "What will the following code return?\n\nconsole.log(10 / '2' + '5' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 172,
        "question": "What will be the output?\n\nconsole.log('10' / '2' * '2' - '5' / '2' + '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 173,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' + '5' * '2' - '2' * '5');",
        "answer": "-10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 174,
        "question": "What will be the result?\n\nconsole.log('10' - '5' / '2' + '2' * '5');",
        "answer": "\"50\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 175,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' * '2' / '5' + '2' - '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 176,
        "question": "What will be the output?\n\nconsole.log('10' * '5' / '2' + '5' * '2' / '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 177,
        "question": "What will the following code produce?\n\nconsole.log(10 / '5' * '2' + '5' - '5' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 178,
        "question": "What will be the result?\n\nconsole.log('10' - '5' * '2' + '2' * '5');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 179,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' + '5' * '2');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 180,
        "question": "What will be the output?\n\nconsole.log('10' * '2' / '5' - '5' * '2' + '5');",
        "answer": "-5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 181,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2' * '5' + '2' * '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 182,
        "question": "What will be the result?\n\nconsole.log('10' - '5' * '2' / '2' + '5' * '2');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 183,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' * '5' / '2');",
        "answer": "15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 184,
        "question": "What will be the output?\n\nconsole.log('10' + '5' / '5' * '2' + '5');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 185,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' / '2' + '2' * '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 186,
        "question": "What will be the result?\n\nconsole.log('10' / '2' * '5' - '5' / '2' * '2');",
        "answer": "0",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 187,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' * '2' / '5' * '2');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 188,
        "question": "What will be the output?\n\nconsole.log('10' * '2' - '2' + '5' / '5');",
        "answer": "20",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 189,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2' * '2' - '5' + '5' * '2');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 190,
        "question": "What will be the result?\n\nconsole.log('10' - '5' + '5' / '5' * '2');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 191,
        "question": "What will the following code return?\n\nconsole.log(10 * '2' - '5' / '2' * '5');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 192,
        "question": "What will be the output?\n\nconsole.log('10' * '2' + '2' / '2' - '5');",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 193,
        "question": "What will the following code produce?\n\nconsole.log(10 / '2' * '5' + '5' / '2' * '2');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 194,
        "question": "What will be the result?\n\nconsole.log('10' - '5' * '2' / '5' + '5');",
        "answer": "\"55\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 195,
        "question": "What will the following code return?\n\nconsole.log(10 + '5' / '2' - '2' * '5');",
        "answer": "-10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 196,
        "question": "What will be the output?\n\nconsole.log('10' * '2' / '5' + '5' * '2' - '5');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 197,
        "question": "What will the following code produce?\n\nconsole.log(10 - '5' / '2' * '2' + '5' / '5');",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 198,
        "question": "What will be the result?\n\nconsole.log('10' + '5' / '2' * '5' - '5');",
        "answer": "\"05\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 199,
        "question": "What will the following code return?\n\nconsole.log(10 * '5' + '5' / '2' * '2' / '5');",
        "answer": "15",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 200,
        "question": "What will be the output?\n\nconsole.log('10' + '5' * '2' / '5' + '5');",
        "answer": "\"25\"",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 201,
        "question": "What will be the output of the following HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a;\n        b[0] = 4;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[4, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 202,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj1 = { x: 1 };\n        var obj2 = { x: 1 };\n        console.log(obj1 == obj2);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 203,
        "question": "What is the output of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 1 };\n        var c = a;\n        c.x = 2;\n        console.log(b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 204,
        "question": "What will be the output of the following HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var array = [1, 2, 3];\n        array.length = 1;\n        console.log(array);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 205,
        "question": "What will be the result of this code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.keys(obj).forEach(function(key) {\n            obj[key] = key;\n        });\n        console.log(obj);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "{a: 'a', b: 'b'}",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 206,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.length = 0;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 207,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var x = 5;\n        (function() {\n            x = 10;\n            var x;\n            console.log(x);\n        })();\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 208,
        "question": "What will be the output of this code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a;\n        b.push(4);\n        console.log(a.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "4",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 209,
        "question": "What will be the result of the following code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1 };\n        Object.defineProperty(obj, 'x', { writable: false });\n        obj.x = 2;\n        console.log(obj.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 210,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        function MyClass() {\n            this.value = 1;\n        }\n        MyClass.prototype.value = 2;\n        var instance = new MyClass();\n        console.log(instance.value);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 211,
        "question": "What will be the result of this code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 2 };\n        console.log(a.x == b.x);\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 212,
        "question": "What will be the output of the following code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = {};\n        Object.defineProperty(obj, 'prop', {\n            get: function() { return 'getter'; },\n            set: function(value) { this._prop = value; }\n        });\n        obj.prop = 'value';\n        console.log(obj.prop);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "getter",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 213,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        var result = Object.freeze(obj);\n        result.a = 2;\n        console.log(result.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 214,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 1, 4, 5);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 4, 5, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 215,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { value: 2, writable: false });\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 216,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1 };\n        obj.__proto__.x = 2;\n        console.log(obj.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 217,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        var newArr = arr.map(function(value) {\n            return value * 2;\n        });\n        console.log(newArr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 4, 6]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 218,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1, y: 2 };\n        delete obj.x;\n        console.log('x' in obj);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 219,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var x = 1;\n        function foo() {\n            x = 2;\n            console.log(x);\n        }\n        foo();\n        console.log(x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2\n2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 220,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        console.log(arr.reduce((acc, val) => acc + val));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "6",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 221,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var entries = Object.entries(obj);\n        entries.forEach(entry => {\n            console.log(entry[0] + ':' + entry[1]);\n        });\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "a:1\nb:2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 222,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.forEach(function(value, index, array) {\n            array[index] = value * 2;\n        });\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 4, 6]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 223,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        var copy = Object.assign({}, obj);\n        copy.a = 2;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 224,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = a;\n        delete b.x;\n        console.log(a.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "undefined",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 225,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var x = 1;\n        function foo() {\n            var x = 2;\n            return function() {\n                console.log(x);\n            };\n        }\n        var bar = foo();\n        bar();\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 226,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.push(4);\n        console.log(arr.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "4",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 227,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1 };\n        Object.defineProperty(obj, 'x', { configurable: false });\n        delete obj.x;\n        console.log(obj.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 228,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        console.log(arr.indexOf(2));\n        console.log(arr.indexOf(4));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1\n-1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 229,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var keys = Object.keys(obj);\n        keys.forEach(function(key) {\n            delete obj[key];\n        });\n        console.log(obj);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "{}",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 230,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a.slice(0, 2);\n        console.log(b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 231,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 2 };\n        console.log(a.x == b.x);\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 232,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.reverse();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[3, 2, 1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 233,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 234,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a.splice(1, 1);\n        console.log(a);\n        console.log(b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 3]\n[2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 235,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var { a, b } = obj;\n        console.log(a);\n        console.log(b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1\n2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 236,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.pop();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 237,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1, y: 2 };\n        Object.defineProperty(obj, 'x', { writable: false });\n        obj.x = 3;\n        console.log(obj.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 238,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.shift();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 239,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1, y: 2 };\n        delete obj.y;\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"x\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 240,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.unshift(0);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[0, 1, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 241,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.freeze(obj);\n        obj.a = 3;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 242,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        var newArr = arr.concat(4, 5);\n        console.log(newArr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 3, 4, 5]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 243,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.seal(obj);\n        obj.a = 3;\n        delete obj.b;\n        console.log(obj.a);\n        console.log(obj.b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "3\n2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 244,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = '5';\n        var b = 10;\n        console.log(a + b);\n        console.log(a - b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "510\n-5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 245,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        var keys = Object.getOwnPropertyNames(obj);\n        console.log(keys);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"a\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 246,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var x = 1;\n        setTimeout(function() {\n            console.log(x);\n            x = 2;\n        }, 0);\n        console.log(x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1\n2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 247,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { writable: false });\n        obj.a = 2;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 248,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        console.log(arr.join('-'));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1-2-3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 249,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var copy = Object.assign({}, obj);\n        copy.a = 3;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 250,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 1);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 251,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { configurable: false });\n        delete obj.a;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "undefined",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 252,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.push(4);\n        console.log(arr.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "4",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 253,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1 };\n        Object.defineProperty(obj, 'x', { enumerable: false });\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 254,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a[1] = undefined;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, undefined, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 255,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.shift();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 256,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = 1;\n        function foo() {\n            a = 2;\n            console.log(a);\n        }\n        foo();\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2\n2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 257,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1 };\n        Object.defineProperty(obj, 'x', { configurable: false });\n        delete obj.x;\n        console.log(obj.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 258,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.pop();\n        console.log(arr.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 259,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperties(obj, {\n            a: { enumerable: false },\n            b: { enumerable: true }\n        });\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 260,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = 'hello';\n        var b = new String('hello');\n        console.log(a == b);\n        console.log(a === b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 261,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.preventExtensions(obj);\n        obj.c = 3;\n        console.log(obj.c);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "undefined",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 262,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a;\n        b[0] = 10;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[10, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 263,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        var descriptor = Object.getOwnPropertyDescriptor(obj, 'a');\n        console.log(descriptor);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "{\"value\":1,\"writable\":true,\"enumerable\":true,\"configurable\":true}",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 264,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = '5';\n        var b = 5;\n        console.log(a == b);\n        console.log(a === b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 265,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.length = 2;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 266,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = a;\n        b.x = 2;\n        console.log(a.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 267,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { x: 1 };\n        var copy = Object.create(obj);\n        copy.x = 2;\n        console.log(copy.x);\n        console.log(obj.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2\n1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 268,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 1, 4, 5);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 4, 5, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 269,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { writable: false });\n        Object.defineProperty(obj, 'a', { value: 2 });\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 270,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        console.log(a.reverse());\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[3, 2, 1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 271,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var keys = Object.keys(obj);\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(keys);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 272,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.length = 0;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 273,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var copy = { ...obj };\n        copy.a = 3;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 274,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a[1] = null;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, null, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 275,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.freeze(obj);\n        delete obj.b;\n        console.log(obj.b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 276,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = 'hello';\n        var b = 'world';\n        console.log(a.concat(b));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "helloworld",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 277,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 278,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = Object.create(a);\n        b.x = 2;\n        console.log(b.x);\n        console.log(a.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2\n1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 279,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.splice(1, 1);\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 280,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.keys(obj).forEach(function(key) {\n            console.log(key);\n        });\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "a\nb",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 281,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = 'hello';\n        var b = new String('hello');\n        console.log(a == b);\n        console.log(a === b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 282,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a[1] = 10;\n        console.log(a[1]);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "10",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 283,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { writable: false });\n        obj.a = 2;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 284,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a[2] = 10;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 10]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 285,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var keys = Object.keys(obj);\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(keys);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 286,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = '5';\n        var b = 5;\n        console.log(a == b);\n        console.log(a === b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 287,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.length = 2;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 288,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a;\n        b[0] = 10;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[10, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 289,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { writable: false });\n        Object.defineProperty(obj, 'a', { value: 2 });\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 290,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        console.log(a.reverse());\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[3, 2, 1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 291,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var keys = Object.keys(obj);\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(keys);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 292,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.length = 0;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 293,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.push(4, 5);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 3, 4, 5]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 294,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 2 };\n        console.log(a.x == b.x);\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\ntrue",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 295,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.length = 1;\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 296,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.unshift(0);\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[0, 1, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 297,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = '10';\n        var b = '5';\n        console.log(a / b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "2",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 298,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = 'hello';\n        var b = 'world';\n        console.log(a + b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "helloworld",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 299,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 1 };\n        console.log(a.x == b.x);\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\ntrue",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 300,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = '5';\n        var b = 5;\n        console.log(a + b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "55",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 301,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = a;\n        delete b.x;\n        console.log(a.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "undefined",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 302,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        var desc = Object.getOwnPropertyDescriptor(obj, 'a');\n        console.log(desc);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "{value: 1, writable: true, enumerable: true, configurable: true}",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 303,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.push([4, 5]);\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 3, [4, 5]]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 304,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.freeze(obj);\n        obj.a = 2;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 305,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.shift();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 306,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var descriptor = Object.getOwnPropertyDescriptor(obj, 'a');\n        descriptor.writable = false;\n        Object.defineProperty(obj, 'a', descriptor);\n        obj.a = 3;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 307,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 1 };\n        console.log(a.x == b.x);\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\ntrue",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 308,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 1, 4, 5);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 4, 5, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 309,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = Object.create(a);\n        b.x = 2;\n        console.log(b.hasOwnProperty('x'));\n        console.log(b.hasOwnProperty('x') && b.x === 2);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\ntrue",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 310,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { configurable: false });\n        delete obj.a;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 311,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 1 };\n        console.log(a.x == b.x);\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\ntrue",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 312,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.length = 5;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 3, <empty item>, <empty item>]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 313,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = Object.create(a);\n        delete b.x;\n        console.log(b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 314,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.pop();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 315,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = Object.create(a);\n        b.x = 2;\n        console.log(b.hasOwnProperty('x'));\n        console.log(a.hasOwnProperty('x'));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 316,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 317,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 2 };\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 318,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 0, 4, 5);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 4, 5, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 319,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a.slice(1, 2);\n        console.log(b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 320,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        delete obj.a;\n        console.log('a' in obj);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 321,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = [4, 5, 6];\n        var c = a.concat(b);\n        console.log(c);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 3, 4, 5, 6]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 322,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = Object.create(a);\n        console.log(b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 323,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.push(4);\n        console.log(arr.pop());\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "4",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 324,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var keys = Object.keys(obj);\n        delete obj.b;\n        console.log(keys);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"a\", \"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 325,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.reverse();\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[3, 2, 1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 326,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(Object.getOwnPropertyNames(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 327,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a.slice(1, 2);\n        console.log(a.length);\n        console.log(b.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "3\n1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 328,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1 };\n        Object.defineProperty(obj, 'a', { writable: false });\n        obj.a = 2;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 329,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 2 };\n        var c = { x: 3 };\n        console.log(a.x === b.x);\n        console.log(b.x === c.x);\n        console.log(a.x === c.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false\nfalse\nfalse",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 330,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        var x = arr.shift();\n        console.log(arr);\n        console.log(x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 3]\n1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 331,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var arr = Object.keys(obj);\n        delete obj.a;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"a\", \"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 332,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { writable: false });\n        obj.a = 3;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "1",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 333,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = { x: 1 };\n        var b = { x: 2 };\n        console.log(a.x === b.x);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 334,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.length = 2;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 335,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(2, 1, 4);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 4]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 336,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { configurable: false });\n        delete obj.a;\n        console.log('a' in obj);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "true",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 337,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.push(4);\n        arr.push(5);\n        console.log(arr.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "5",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 338,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr[5] = 5;\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 3, <empty item>, <empty item>, 5]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 339,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        var keys = Object.keys(obj);\n        delete obj.a;\n        console.log(keys);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"a\", \"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 340,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.sort(function(a, b) { return b - a; });\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[3, 2, 1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 341,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        var b = a.map(function(x) { return x * 2; });\n        console.log(b);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 4, 6]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 342,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { value: 3 });\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 343,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.pop();\n        arr.unshift(0);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[0, 1, 2]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 344,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { value: 3, writable: false });\n        obj.a = 4;\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 345,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var a = [1, 2, 3];\n        a.splice(1, 2, 4, 5);\n        console.log(a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 4, 5]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 346,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.push(4, 5);\n        console.log(arr.slice(1, 4));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 3, 4]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 347,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 1);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 348,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        delete obj.b;\n        console.log(obj.hasOwnProperty('b'));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "false",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 349,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        delete obj.a;\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 350,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.unshift(0);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[0, 1, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 351,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 1, 4);\n        console.log(arr.length);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 352,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { enumerable: false });\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"b\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 353,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.reverse();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[3, 2, 1]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 354,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.pop();\n        arr.push(4);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 2, 4]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 355,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        Object.defineProperty(obj, 'a', { get: function() { return 3; } });\n        console.log(obj.a);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "3",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 356,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        var sum = arr.reduce(function(a, b) { return a + b; }, 0);\n        console.log(sum);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "6",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 357,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.shift();\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 358,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var obj = { a: 1, b: 2 };\n        obj.c = 3;\n        console.log(Object.keys(obj));\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[\"a\", \"b\", \"c\"]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 359,
        "question": "What will be the output of this HTML and JavaScript code?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.splice(1, 0, 4);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[1, 4, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 360,
        "question": "What will be the result of the following code snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <script>\n        var arr = [1, 2, 3];\n        arr.shift();\n        arr.unshift(0);\n        console.log(arr);\n    </script>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "[0, 2, 3]",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 361,
        "question": "What will be the result of the following CSS code?\n\n```css\n.container {\n  width: 100%;\n  padding: 20px;\n}\n.container .content {\n  margin: auto;\n  max-width: 600px;\n}\n```",
        "answer": "The `.container` will take up the full width of its parent with 20px padding, while the `.content` inside it will be centered with a maximum width of 600px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 362,
        "question": "What will be the result of this CSS code?\n\n```css\n.box {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 10px;\n}\n```",
        "answer": "The `.box` container will have a grid layout with two columns. The first column will take up one fraction of the available space, and the second column will take up two fractions. There will be a 10px gap between the columns.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 363,
        "question": "What will be the result of the following CSS code?\n\n```css\n.item {\n  position: absolute;\n  top: 50px;\n  left: 50px;\n}\n```",
        "answer": "The `.item` will be positioned absolutely with 50px from the top and 50px from the left of its positioned ancestor.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 364,
        "question": "What will be the output of this CSS code?\n\n```css\n.button {\n  background-color: blue;\n  color: white;\n  border-radius: 5px;\n  padding: 10px 20px;\n  text-align: center;\n}\n```",
        "answer": "The `.button` will have a blue background with white text, rounded corners with a 5px radius, 10px vertical and 20px horizontal padding, and centered text.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 365,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">Column 1</div>\n    <div class=\"col-md-4\">Column 2</div>\n    <div class=\"col-md-4\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "The `.container` will center the content and provide horizontal padding. The `.row` will create a row, and the three `.col-md-4` columns will each take up 4/12 of the row's width on medium and larger screens, making a total of three equally spaced columns.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 366,
        "question": "What will be the result of the following CSS code?\n\n```css\n.item {\n  display: flex;\n  justify-content: space-between;\n}\n```",
        "answer": "The `.item` will use Flexbox layout with its children evenly spaced out with equal space between them.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 367,
        "question": "What will be the output of this CSS code?\n\n```css\n.text {\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n```",
        "answer": "The `.text` will have a font size of 16px, bold weight, and all text transformed to uppercase.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 368,
        "question": "What will be the result of the following CSS code?\n\n```css\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n```",
        "answer": "The `.container` will use Flexbox layout and allow its child elements to wrap onto multiple lines if necessary.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 369,
        "question": "What will be the result of this CSS code?\n\n```css\n.box {\n  width: 100px;\n  height: 100px;\n  background: linear-gradient(to right, red, yellow);\n}\n```",
        "answer": "The `.box` will be a 100px by 100px square with a background gradient that transitions from red on the left to yellow on the right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 370,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">Column 1</div>\n    <div class=\"col-sm-12 col-md-6\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "On small screens, each column will take up the full width of the row (`col-sm-12`), and on medium and larger screens, each column will take up half of the row's width (`col-md-6`), making them stack on top of each other on small screens and sit side by side on larger screens.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 371,
        "question": "What will be the output of this CSS code?\n\n```css\n.element {\n  border: 1px solid black;\n  box-shadow: 10px 10px 5px grey;\n}\n```",
        "answer": "The `.element` will have a 1px solid black border and a shadow that is 10px to the right, 10px down, with a 5px blur radius and grey color.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 372,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  display: grid;\n  grid-template-rows: 100px 200px;\n}\n```",
        "answer": "The `.element` will use CSS Grid layout with two rows, the first row being 100px high and the second row being 200px high.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 373,
        "question": "What will be the result of the following CSS code?\n\n```css\n.item {\n  float: left;\n  width: 50%;\n}\n```",
        "answer": "The `.item` will float to the left and take up 50% of the width of its containing block.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 374,
        "question": "What will be the output of this CSS code?\n\n```css\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n```",
        "answer": "The `.header` will be fixed to the top of the viewport and will span the full width of the viewport.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 375,
        "question": "What will be the result of the following CSS code?\n\n```css\n.box {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background: blue;\n}\n```",
        "answer": "The `.box` will be an inline-block element with a width and height of 100px, and a blue background.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 376,
        "question": "What will be the output of this CSS code?\n\n```css\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n```",
        "answer": "The `.container` will use Flexbox layout with a vertical direction for its children (`flex-direction: column`) and will center the children horizontally (`align-items: center`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 377,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">Column 1</div>\n    <div class=\"col-lg-4\">Column 2</div>\n    <div class=\"col-lg-4\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "On large screens, the `.container` will create a row with three columns of equal width (`col-lg-4`). On smaller screens, these columns will stack vertically unless additional responsive classes are applied.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 378,
        "question": "What will be the output of this CSS code?\n\n```css\n.hidden {\n  display: none;\n}\n```",
        "answer": "The `.hidden` class will make the element not display on the page; it will not take up any space.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 379,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  border-radius: 10px;\n  overflow: hidden;\n}\n```",
        "answer": "The `.element` will have rounded corners with a 10px radius, and any content that overflows the boundary of the element will be hidden.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 380,
        "question": "What will be the result of the following CSS code?\n\n```css\n.header {\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n}\n```",
        "answer": "The `.header` will have a semi-transparent black background with a 50% opacity (`rgba(0, 0, 0, 0.5)`) and white text color.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 381,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-6\">Column 1</div>\n    <div class=\"col-6\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "The `.container-fluid` will create a full-width container, and the `.row` will have two columns (`col-6`) each taking up half of the row's width, regardless of the screen size.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 382,
        "question": "What will be the output of this CSS code?\n\n```css\n.element {\n  position: relative;\n  z-index: 10;\n}\n```",
        "answer": "The `.element` will be positioned relative to its normal position with a `z-index` of 10, which will affect its stacking order relative to other positioned elements.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 383,
        "question": "What will be the result of this CSS code?\n\n```css\n.box {\n  transition: all 0.3s ease-in-out;\n}\n```",
        "answer": "The `.box` will smoothly transition all property changes over 0.3 seconds with an ease-in-out timing function.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 384,
        "question": "What will be the result of the following CSS code?\n\n```css\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n}\n```",
        "answer": "The `.flex-container` will use Flexbox layout and distribute its children evenly with equal space around each item.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 385,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">Column 1</div>\n    <div class=\"col-md-9\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "On medium and larger screens, the `.container` will create a row with two columns where the first column takes up 3/12 of the width (`col-md-3`) and the second column takes up 9/12 of the width (`col-md-9`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 386,
        "question": "What will be the output of this CSS code?\n\n```css\n.element {\n  margin: 10px 20px;\n}\n```",
        "answer": "The `.element` will have a top and bottom margin of 10px and a left and right margin of 20px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 387,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  background: radial-gradient(circle, red, yellow);\n}\n```",
        "answer": "The `.element` will have a background with a radial gradient that starts with red in the center and transitions to yellow towards the edges.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 388,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6\">Column 1</div>\n    <div class=\"col-lg-4 col-md-6\">Column 2</div>\n    <div class=\"col-lg-4 d-none d-md-block\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "On large screens, the `.container` will have three columns with equal width (`col-lg-4`). On medium screens, the first two columns will each take up half of the width (`col-md-6`), and the third column will be hidden on medium and smaller screens (`d-none d-md-block`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 389,
        "question": "What will be the result of the following CSS code?\n\n```css\n.box {\n  opacity: 0.5;\n}\n```",
        "answer": "The `.box` will have 50% opacity, making it semi-transparent.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 390,
        "question": "What will be the result of the following CSS code?\n\n```css\n.item {\n  border: 2px dashed blue;\n}\n```",
        "answer": "The `.item` will have a 2px dashed blue border.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 391,
        "question": "What will be the output of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8\">Column 1</div>\n    <div class=\"col-12 col-md-4\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-12`). On medium and larger screens, the first column will take up 8/12 of the width (`col-md-8`) and the second column will take up 4/12 of the width (`col-md-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 392,
        "question": "What will be the result of the following CSS code?\n\n```css\n.box {\n  box-sizing: border-box;\n  padding: 20px;\n  border: 5px solid black;\n  width: 100px;\n}\n```",
        "answer": "The `.box` will include the padding and border within the 100px width, so the total box size will be 100px by 100px including padding and border.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 393,
        "question": "What will be the output of this CSS code?\n\n```css\n.element {\n  text-align: center;\n  line-height: 50px;\n}\n```",
        "answer": "The `.element` will have its text centered horizontally and the line height set to 50px, affecting the vertical spacing of text within the element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 394,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 offset-md-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium and larger screens, the `.col-md-4` column will be centered within the row due to the `offset-md-4`, which creates an empty space of 4 columns to the left.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 395,
        "question": "What will be the result of the following CSS code?\n\n```css\n.box {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n```",
        "answer": "The `.box` will take up 50% of the container's width and be horizontally centered within its parent container due to the auto margins.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 396,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n```",
        "answer": "The `.element` will be positioned absolutely 10px from the bottom and 10px from the right of its positioned ancestor.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 397,
        "question": "What will be the output of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6\">Column 1</div>\n    <div class=\"col-12 col-md-6\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-12`). On medium and larger screens, each column will take up half of the row's width (`col-md-6`), making them sit side by side.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 398,
        "question": "What will be the result of the following CSS code?\n\n```css\n.box {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n```",
        "answer": "The `.box` will use inline-flex display, which means it will be a flex container in an inline format. Its children will be centered both vertically and horizontally.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 399,
        "question": "What will be the result of the following CSS code?\n\n```css\n.header {\n  border-radius: 10px;\n  overflow: hidden;\n}\n```",
        "answer": "The `.header` will have rounded corners with a radius of 10px, and any content overflowing the border radius will be hidden.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 400,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  background-color: #ff0000;\n  color: #ffffff;\n}\n```",
        "answer": "The `.element` will have a red background (`#ff0000`) and white text color (`#ffffff`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 401,
        "question": "What will be the result of the following CSS code?\n\n```css\n.box {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n```",
        "answer": "The `.box` will use CSS Grid layout with three equal-width columns (`1fr` each).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 402,
        "question": "What will be the output of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-4\">Column 1</div>\n    <div class=\"col-12 col-lg-4\">Column 2</div>\n    <div class=\"col-12 col-lg-4\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-12`). On large screens and up, the columns will each take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 403,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  font-size: calc(1rem + 2vw);\n}\n```",
        "answer": "The `.element`'s font size will be calculated based on `1rem` plus `2vw`, making it responsive to viewport width.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 404,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 col-md-4\">Column 1</div>\n    <div class=\"col-6 col-md-4\">Column 2</div>\n    <div class=\"col-6 col-md-4\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up half of the row's width (`col-6`). On medium screens and up, each column will take up one-third of the row's width (`col-md-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 405,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  background: linear-gradient(to right, red, yellow);\n}\n```",
        "answer": "The `.element` will have a background with a linear gradient that transitions from red on the left to yellow on the right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 406,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  display: flex;\n  align-items: stretch;\n}\n```",
        "answer": "The `.element` will use Flexbox layout, and its children will stretch to fill the available space in the cross-axis.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 407,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6\">Column 1</div>\n    <div class=\"col-12 col-sm-6\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-12`). On small screens and up, each column will take up half of the row's width (`col-sm-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 408,
        "question": "What will be the output of the following CSS code?\n\n```css\n.element {\n  padding: 10px 20px;\n}\n```",
        "answer": "The `.element` will have a padding of 10px on the top and bottom, and 20px on the left and right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 409,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n```",
        "answer": "The `.element` will have a 1px solid border with a semi-transparent black color (`rgba(0, 0, 0, 0.5)`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 410,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  display: flex;\n  flex-direction: column;\n}\n```",
        "answer": "The `.element` will use Flexbox layout with its children stacked in a vertical column.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 411,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-lg-4 col-md-6\">Column 1</div>\n    <div class=\"col-xl-3 col-lg-4 col-md-6\">Column 2</div>\n    <div class=\"col-xl-3 col-lg-4 d-none d-lg-block\">Column 3</div>\n    <div class=\"col-xl-3 d-none d-xl-block\">Column 4</div>\n  </div>\n</div>\n```",
        "answer": "On extra-large screens, the columns will be four equal-width columns (`col-xl-3`). On large screens, the first three columns will be visible (`col-lg-4`) and the fourth column will be hidden (`d-none d-xl-block`). On medium screens, the first two columns will be visible (`col-md-6`) and the third column will be hidden (`d-none d-lg-block`). On smaller screens, all columns will be visible (`col-12`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 412,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n```",
        "answer": "The `.element` will be positioned fixed relative to the viewport, with its top-left corner at the top-left corner of the viewport.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 413,
        "question": "What will be the output of the following CSS code?\n\n```css\n.element {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n```",
        "answer": "The `.element` will have a shadow that is offset 0px horizontally, 4px vertically, with a blur radius of 8px and a shadow color of semi-transparent black (`rgba(0, 0, 0, 0.3)`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 414,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8\">Column 1</div>\n    <div class=\"col-12 col-md-4\">Column 2</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-12`). On medium screens and up, the first column will take up two-thirds of the row's width (`col-md-8`) and the second column will take up one-third (`col-md-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 415,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  font-family: 'Arial', sans-serif;\n}\n```",
        "answer": "The `.element` will use the Arial font, falling back to the default sans-serif font if Arial is not available.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 416,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-4\">Column 1</div>\n    <div class=\"col-6 col-lg-4\">Column 2</div>\n    <div class=\"col-6 col-lg-4\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up half of the row's width (`col-6`). On large screens and up, each column will take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 417,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  opacity: 0.5;\n}\n```",
        "answer": "The `.element` will have 50% opacity, making it semi-transparent.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 418,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  text-align: center;\n}\n```",
        "answer": "The text inside the `.element` will be centered horizontally.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 419,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">Column 1</div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">Column 2</div>\n    <div class=\"col-sm-12 col-md-12 col-lg-4\">Column 3</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-sm-12`). On medium screens, the first two columns will take up half of the row's width each (`col-md-6`), and the third column will take up the full width (`col-md-12`). On large screens and up, each column will take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 420,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  border: 2px dashed #000000;\n}\n```",
        "answer": "The `.element` will have a 2px wide dashed border with a black color (`#000000`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 421,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  transform: rotate(45deg);\n}\n```",
        "answer": "The `.element` will be rotated 45 degrees clockwise.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 422,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 offset-md-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will be centered in the row with a width of one-third of the row's width (`col-md-4`) and an offset of one-third (`offset-md-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 423,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  z-index: 10;\n}\n```",
        "answer": "The `.element` will have a stacking order of 10, meaning it will be positioned above elements with a lower `z-index` value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 424,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-3\">Column 1</div>\n    <div class=\"col-12 col-md-6 col-lg-3\">Column 2</div>\n    <div class=\"col-12 col-md-6 col-lg-3\">Column 3</div>\n    <div class=\"col-12 col-md-6 col-lg-3\">Column 4</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up the full width of the row (`col-12`). On medium screens, each column will take up half of the row's width (`col-md-6`). On large screens and up, each column will take up one-fourth of the row's width (`col-lg-3`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 425,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  text-transform: uppercase;\n}\n```",
        "answer": "The text inside the `.element` will be transformed to uppercase.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 426,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On large screens and up, the column will take up one-third of the row's width (`col-lg-4`). On medium screens, it will take up half of the row's width (`col-md-6`). On small screens and extra-small screens, it will take up the full width of the row (`col-sm-12`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 427,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}\n```",
        "answer": "The `.element` will be positioned relative to its normal position, with a 10px shift downward and a 20px shift to the right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 428,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-lg-3\">Column 1</div>\n    <div class=\"col-sm-4 col-lg-3\">Column 2</div>\n    <div class=\"col-sm-4 col-lg-3\">Column 3</div>\n    <div class=\"col-sm-4 col-lg-3\">Column 4</div>\n  </div>\n</div>\n```",
        "answer": "On small screens and up, each column will take up one-third of the row's width (`col-sm-4`). On large screens and up, each column will take up one-fourth of the row's width (`col-lg-3`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 429,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  margin: auto;\n}\n```",
        "answer": "The `.element` will have automatic margins on all sides, centering it horizontally within its container if its width is set.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 430,
        "question": "What will be the result of this CSS code?\n\n```css\n.element {\n  display: block;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n}\n```",
        "answer": "The `.element` will be a block-level element with a width and height of 100px, and it will be horizontally centered within its container.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 431,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-md-8\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-large screens, the column will take up half of the row's width (`col-xl-6`). On medium screens, it will take up two-thirds of the row's width (`col-md-8`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 432,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  border-radius: 50%;\n}\n```",
        "answer": "The `.element` will have a circular border radius, making it a circle if its width and height are equal.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 433,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4 col-md-6 col-lg-3\">Column 1</div>\n    <div class=\"col-4 col-md-6 col-lg-3\">Column 2</div>\n    <div class=\"col-4 col-md-6 col-lg-3\">Column 3</div>\n    <div class=\"col-4 col-md-6 col-lg-3\">Column 4</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up one-third of the row's width (`col-4`). On medium screens, each column will take up half of the row's width (`col-md-6`). On large screens and up, each column will take up one-fourth of the row's width (`col-lg-3`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 434,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  background: linear-gradient(to right, #ff0000, #0000ff);\n}\n```",
        "answer": "The `.element` will have a background that transitions from red (`#ff0000`) to blue (`#0000ff`) horizontally.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 435,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 col-md-8 col-lg-4\">Column 1</div>\n    <div class=\"col-6 col-md-8 col-lg-4\">Column 2</div>\n    <div class=\"col-6 col-md-8 col-lg-4\">Column 3</div>\n    <div class=\"col-6 col-md-8 col-lg-4\">Column 4</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, each column will take up half of the row's width (`col-6`). On medium screens, each column will take up two-thirds of the row's width (`col-md-8`). On large screens and up, each column will take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 436,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n```",
        "answer": "The `.element` will have a shadow with a blur radius of 10px, a color of black with 50% opacity, and no offset.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 437,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-6 col-xl-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, the column will take up the full width of the row (`col-12`). On large screens and up, it will take up half of the row's width (`col-lg-6`). On extra-large screens, it will take up one-third of the row's width (`col-xl-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 438,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  display: flex;\n  justify-content: center;\n}\n```",
        "answer": "The `.element` will use Flexbox layout with content centered horizontally.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 439,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6 col-lg-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, the column will take up the full width of the row (`col-xs-12`). On small screens and up, it will take up half of the row's width (`col-sm-6`). On large screens and up, it will take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 440,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  overflow: hidden;\n}\n```",
        "answer": "The `.element` will hide any content that overflows its bounds.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 441,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-lg-6\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up one-fourth of the row's width (`col-md-3`). On large screens and up, it will take up one-half of the row's width (`col-lg-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 442,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n```",
        "answer": "The `.element` will use CSS Grid layout with three equal-width columns.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 443,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 col-md-4 col-lg-3\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On small screens and up, the column will take up two-thirds of the row's width (`col-sm-8`). On medium screens and up, it will take up one-third of the row's width (`col-md-4`). On large screens and up, it will take up one-fourth of the row's width (`col-lg-3`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 444,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n```",
        "answer": "The `.element` will be positioned absolutely relative to its nearest positioned ancestor, with a 10px distance from the top and a 20px distance from the right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 445,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-lg-4 col-md-6\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-large screens, the column will take up one-fourth of the row's width (`col-xl-3`). On large screens and up, it will take up one-third of the row's width (`col-lg-4`). On medium screens, it will take up one-half of the row's width (`col-md-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 446,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n```",
        "answer": "The `.element` will be fixed at the bottom-right corner of the viewport, staying in the same position even when scrolling.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 447,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-6\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up the full width of the row (`col-md-12`). On large screens and up, it will take up one-half of the row's width (`col-lg-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 448,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n}\n```",
        "answer": "The `.element` will be an inline-block element with a width and height of 100px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 449,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-4 col-12\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On large screens and up, the column will take up half of the row's width (`col-lg-6`). On medium screens, it will take up one-third of the row's width (`col-md-4`). On extra-small screens, it will take up the full width of the row (`col-12`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 450,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  flex: 1;\n}\n```",
        "answer": "The `.element` will grow and shrink as needed to fill the available space in a flex container, with equal distribution among siblings with the same flex value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 451,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, the column will take up the full width of the row (`col-12`). On small screens and up, it will take up two-thirds of the row's width (`col-sm-8`). On medium screens and up, it will take up one-half of the row's width (`col-md-6`). On large screens and up, it will take up one-fourth of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 452,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  text-align: right;\n}\n```",
        "answer": "The text inside `.element` will be aligned to the right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 453,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On large screens and up, the column will take up one-third of the row's width (`col-lg-4`). On medium screens, it will take up one-half of the row's width (`col-md-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 454,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  margin: 20px;\n}\n```",
        "answer": "The `.element` will have a margin of 20px on all four sides.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 455,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4 col-md-6 col-lg-3\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, the column will take up one-third of the row's width (`col-4`). On medium screens and up, it will take up one-half of the row's width (`col-md-6`). On large screens and up, it will take up one-fourth of the row's width (`col-lg-3`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 456,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  border: 2px solid #000;\n}\n```",
        "answer": "The `.element` will have a solid black border with a width of 2px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 457,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-lg-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up one-half of the row's width (`col-md-6`). On large screens and up, it will take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 458,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  width: 50%;\n}\n```",
        "answer": "The `.element` will have a width of 50% of its containing element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 459,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-8 col-sm-6\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On large screens and up, the column will take up the full width of the row (`col-lg-12`). On medium screens and up, it will take up two-thirds of the row's width (`col-md-8`). On small screens and up, it will take up one-half of the row's width (`col-sm-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 460,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  padding: 10px;\n}\n```",
        "answer": "The `.element` will have padding of 10px on all four sides.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 461,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-lg-2\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up one-fourth of the row's width (`col-md-3`). On large screens and up, it will take up one-sixth of the row's width (`col-lg-2`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 462,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  font-size: 1.5em;\n}\n```",
        "answer": "The font size of the text inside `.element` will be 1.5 times the size of the surrounding text's font size.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 463,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 col-lg-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, the column will take up half of the row's width (`col-6`). On large screens and up, it will take up one-third of the row's width (`col-lg-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 464,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  display: block;\n}\n```",
        "answer": "The `.element` will be a block-level element, taking up the full width of its containing element and starting on a new line.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 465,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-8\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-large screens, the column will take up half of the row's width (`col-xl-6`). On large screens and up, it will take up two-thirds of the row's width (`col-lg-8`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 466,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  border-radius: 10px;\n}\n```",
        "answer": "The `.element` will have rounded corners with a radius of 10px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 467,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-lg-6\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up two-thirds of the row's width (`col-md-8`). On large screens and up, it will take up one-half of the row's width (`col-lg-6`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 468,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  display: inline;\n}\n```",
        "answer": "The `.element` will be an inline element, meaning it will only take up as much width as necessary and will not start on a new line.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 469,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-md-3 col-lg-2\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On small screens and up, the column will take up one-third of the row's width (`col-sm-4`). On medium screens and up, it will take up one-fourth of the row's width (`col-md-3`). On large screens and up, it will take up one-sixth of the row's width (`col-lg-2`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 470,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  color: #ff0000;\n}\n```",
        "answer": "The text color of `.element` will be red (#ff0000).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 471,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-10\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up the full width of the row (`col-md-12`). On large screens and up, it will take up five-sixths of the row's width (`col-lg-10`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 472,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  opacity: 0.5;\n}\n```",
        "answer": "The `.element` will have 50% opacity, making it partially transparent.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 473,
        "question": "What will be the result of this Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-md-4\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On extra-small screens, the column will take up half of the row's width (`col-xs-6`). On medium screens and up, it will take up one-third of the row's width (`col-md-4`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 474,
        "question": "What will be the result of the following CSS code?\n\n```css\n.element {\n  text-transform: uppercase;\n}\n```",
        "answer": "The text inside `.element` will be transformed to uppercase.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 475,
        "question": "What will be the result of the following Bootstrap code?\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-3\">Column</div>\n  </div>\n</div>\n```",
        "answer": "On medium screens and up, the column will take up one-third of the row's width (`col-md-4`). On large screens and up, it will take up one-fourth of the row's width (`col-lg-3`).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 476,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(0.1 + 0.2 === 0.3);\n```",
        "answer": "The result will be `false` because of floating-point precision errors.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 477,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log([1] == [1]);\n```",
        "answer": "The result will be `false` because arrays are compared by reference, not by value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 478,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log([] == ![]);\n```",
        "answer": "The result will be `true` because `[]` is coerced to `false` and `![]` is also `false`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 479,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(1 + '1' - 1);\n```",
        "answer": "The result will be `10` because `1 + '1'` results in the string `'11'`, and then subtracting `1` coerces it back to a number.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 480,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log(typeof NaN);\n```",
        "answer": "The result will be `'number'` because `NaN` is considered a number in JavaScript.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 481,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('5' - 1);\n```",
        "answer": "The result will be `4` because the string `'5'` is coerced to the number `5` before the subtraction.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 482,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('5' + 1);\n```",
        "answer": "The result will be `'51'` because the `+` operator concatenates the string `'5'` with the number `1`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 483,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(1 + 2 + '3');\n```",
        "answer": "The result will be `'33'` because `1 + 2` results in `3`, and then `'3'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 484,
        "question": "What will be the output of this code?\n\n```javascript\nconsole.log('5' == 5);\n```",
        "answer": "The result will be `true` because the `==` operator performs type coercion, converting the string `'5'` to the number `5`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 485,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(5 == '5');\n```",
        "answer": "The result will be `true` because the `==` operator performs type coercion and converts `'5'` to `5`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 486,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log(5 === '5');\n```",
        "answer": "The result will be `false` because the `===` operator checks both value and type, and `5` is a number while `'5'` is a string.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 487,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log([] == []);\n```",
        "answer": "The result will be `false` because arrays are compared by reference, and two different array instances are not equal.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 488,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log({} == {});\n```",
        "answer": "The result will be `false` because objects are compared by reference, and two different object instances are not equal.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 489,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log(null == undefined);\n```",
        "answer": "The result will be `true` because `null` and `undefined` are considered equal when using the `==` operator.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 490,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(null === undefined);\n```",
        "answer": "The result will be `false` because `null` and `undefined` are not strictly equal in terms of both type and value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 491,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(1 + '1' + 1);\n```",
        "answer": "The result will be `'111'` because `1 + '1'` results in the string `'11'`, and then adding `1` to `'11'` results in the string `'111'`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 492,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log(1 - '1' + 1);\n```",
        "answer": "The result will be `1` because `'1'` is coerced to the number `1`, so `1 - 1 + 1` results in `1`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 493,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('1' + - '1');\n```",
        "answer": "The result will be `'0'` because `-'1'` is coerced to the number `-1`, so `'1' + -1` results in the string `'0'`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 494,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log('1' - 1);\n```",
        "answer": "The result will be `0` because the string `'1'` is coerced to the number `1`, so `1 - 1` results in `0`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 495,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('a' - 'b');\n```",
        "answer": "The result will be `NaN` because subtracting two strings that cannot be coerced to numbers results in `NaN`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 496,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('5' * 2);\n```",
        "answer": "The result will be `10` because the string `'5'` is coerced to the number `5`, so `5 * 2` results in `10`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 497,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('5' / 2);\n```",
        "answer": "The result will be `2.5` because the string `'5'` is coerced to the number `5`, so `5 / 2` results in `2.5`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 498,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('5' % 2);\n```",
        "answer": "The result will be `1` because the string `'5'` is coerced to the number `5`, so `5 % 2` results in `1`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 499,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log(2 + 3 + '4');\n```",
        "answer": "The result will be `'54'` because `2 + 3` results in `5`, and then `'4'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 500,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('a' + 'b' - 'c');\n```",
        "answer": "The result will be `NaN` because the operation `'a' + 'b'` results in the string `'ab'`, and subtracting `'c'` from `'ab'` results in `NaN`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 501,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(3 + 4 + '5');\n```",
        "answer": "The result will be `'75'` because `3 + 4` results in `7`, and then `'5'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 502,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(3 - 2 + '1');\n```",
        "answer": "The result will be `'11'` because `3 - 2` results in `1`, and then `'1'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 503,
        "question": "What will be the output of this code?\n\n```javascript\nconsole.log(5 + '5' - 5);\n```",
        "answer": "The result will be `50` because `5 + '5'` results in `'55'`, and subtracting `5` coerces `'55'` to `55`, so `55 - 5` results in `50`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 504,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('5' - 1 + 2);\n```",
        "answer": "The result will be `6` because `'5' - 1` results in `4`, and then adding `2` results in `6`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 505,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log(false + 1);\n```",
        "answer": "The result will be `1` because `false` is coerced to `0`, so `0 + 1` results in `1`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 506,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(true + 1);\n```",
        "answer": "The result will be `2` because `true` is coerced to `1`, so `1 + 1` results in `2`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 507,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(0 == false);\n```",
        "answer": "The result will be `true` because `0` and `false` are considered equal when using the `==` operator.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 508,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(0 === false);\n```",
        "answer": "The result will be `false` because `0` and `false` are not strictly equal in terms of both type and value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 509,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(1 + '1' - 1);\n```",
        "answer": "The result will be `10` because `1 + '1'` results in `'11'`, and then subtracting `1` coerces `'11'` to `11`, so `11 - 1` results in `10`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 510,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(2 + 3 + '5');\n```",
        "answer": "The result will be `'55'` because `2 + 3` results in `5`, and then `'5'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 511,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('5' - 1 + '2');\n```",
        "answer": "The result will be `'42'` because `'5' - 1` results in `4`, and then `'2'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 512,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log('1' + 2 + 3);\n```",
        "answer": "The result will be `'123'` because `'1' + 2` results in `'12'`, and then `3` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 513,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('a' + + 'b');\n```",
        "answer": "The result will be `'aNaN'` because `+'b'` results in `NaN`, so `'a' + NaN` results in `'aNaN'`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 514,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log([] + {});\n```",
        "answer": "The result will be `'[object Object]'` because `[]` is coerced to an empty string and `{}` is coerced to the string representation of an object.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 515,
        "question": "What will be the output of this code?\n\n```javascript\nconsole.log(3 + {});\n```",
        "answer": "The result will be `'3[object Object]'` because `3 + {}` is coerced to the string representation of the object.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 516,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(1 == [1]);\n```",
        "answer": "The result will be `false` because `1` and `[1]` are compared using type coercion, and `[1]` is not coerced to `1`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 517,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(1 === [1]);\n```",
        "answer": "The result will be `false` because `1` and `[1]` are of different types and not strictly equal.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 518,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log([] == false);\n```",
        "answer": "The result will be `false` because `[]` and `false` are compared using type coercion, and `[]` is not coerced to `false`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 519,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log([] === false);\n```",
        "answer": "The result will be `false` because `[]` and `false` are of different types and not strictly equal.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 520,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log({} + []);\n```",
        "answer": "The result will be `'[object Object]'` because `{}` is coerced to its string representation and `[]` is coerced to an empty string.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 521,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(0.1 + 0.2 === 0.3);\n```",
        "answer": "The result will be `false` due to floating-point precision issues.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 522,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('foo' instanceof String);\n```",
        "answer": "The result will be `false` because `'foo'` is a primitive string and not an instance of `String`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 523,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(new String('foo') instanceof String);\n```",
        "answer": "The result will be `true` because `new String('foo')` creates a `String` object.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 524,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(1 + '2' - 1);\n```",
        "answer": "The result will be `11` because `1 + '2'` results in `'12'`, and then subtracting `1` coerces `'12'` to `12`, so `12 - 1` results in `11`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 525,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(true + 1);\n```",
        "answer": "The result will be `2` because `true` is coerced to `1`, so `1 + 1` results in `2`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 526,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log([] + {});\n```",
        "answer": "The result will be `'[object Object]'` because `[]` is coerced to an empty string and `{}` is coerced to the string representation of an object.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 527,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('5' + 2 - 1);\n```",
        "answer": "The result will be `51` because `'5' + 2` results in `'52'`, and then subtracting `1` coerces `'52'` to `52`, so `52 - 1` results in `51`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 528,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('5' - 1 + 2);\n```",
        "answer": "The result will be `6` because `'5' - 1` results in `4`, and then adding `2` results in `6`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 529,
        "question": "What will be the output of this code?\n\n```javascript\nconsole.log(2 + 3 + '5');\n```",
        "answer": "The result will be `'55'` because `2 + 3` results in `5`, and then `'5'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 530,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(1 + '2' + 3);\n```",
        "answer": "The result will be `'123'` because `1 + '2'` results in `'12'`, and then `3` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 531,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('1' + - '1');\n```",
        "answer": "The result will be `'0'` because `-'1'` results in `-1`, so `'1' + -1` results in `'0'`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 532,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log({} + []);\n```",
        "answer": "The result will be `'[object Object]'` because `{}` is coerced to its string representation and `[]` is coerced to an empty string.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 533,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(1 + 2 + '3');\n```",
        "answer": "The result will be `'33'` because `1 + 2` results in `3`, and then `'3'` is concatenated to it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 534,
        "question": "What will be the output of this code?\n\n```javascript\nconsole.log('5' + 1 - 1);\n```",
        "answer": "The result will be `50` because `'5' + 1` results in `'51'`, and then subtracting `1` coerces `'51'` to `51`, so `51 - 1` results in `50`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 535,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log([] == false);\n```",
        "answer": "The result will be `false` because `[]` and `false` are compared using type coercion, and `[]` is not coerced to `false`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 536,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(0 + []);\n```",
        "answer": "The result will be `'0'` because `[]` is coerced to an empty string, so `0 + ''` results in `'0'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 537,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('2' * 3);\n```",
        "answer": "The result will be `6` because `'2'` is coerced to `2`, and then `2 * 3` results in `6`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 538,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(3 + '3' - 2);\n```",
        "answer": "The result will be `31` because `3 + '3'` results in `'33'`, and then subtracting `2` coerces `'33'` to `33`, so `33 - 2` results in `31`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 539,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('2' + 3 - 1);\n```",
        "answer": "The result will be `21` because `'2' + 3` results in `'23'`, and then subtracting `1` coerces `'23'` to `23`, so `23 - 1` results in `21`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 540,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log(2 * '3');\n```",
        "answer": "The result will be `6` because `'3'` is coerced to `3`, so `2 * 3` results in `6`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 541,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('3' - 2);\n```",
        "answer": "The result will be `1` because `'3'` is coerced to `3`, and then `3 - 2` results in `1`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 542,
        "question": "What will be the output of this code?\n\n```javascript\nconsole.log('' + 1 + 2);\n```",
        "answer": "The result will be `'12'` because `'' + 1` results in `'1'`, and then `1 + 2` results in `'12'`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 543,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('2' + 2 - 1);\n```",
        "answer": "The result will be `21` because `'2' + 2` results in `'22'`, and then subtracting `1` coerces `'22'` to `22`, so `22 - 1` results in `21`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 544,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(1 + '2' - 1);\n```",
        "answer": "The result will be `11` because `1 + '2'` results in `'12'`, and then subtracting `1` coerces `'12'` to `12`, so `12 - 1` results in `11`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 545,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('5' - 1 + 2);\n```",
        "answer": "The result will be `6` because `'5' - 1` results in `4`, and then adding `2` results in `6`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 546,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log(2 + '2' - 1);\n```",
        "answer": "The result will be `21` because `2 + '2'` results in `'22'`, and then subtracting `1` coerces `'22'` to `22`, so `22 - 1` results in `21`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 547,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('1' + - '1');\n```",
        "answer": "The result will be `'0'` because `-'1'` results in `-1`, so `'1' + -1` results in `'0'`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 548,
        "question": "What will be the output of the following code?\n\n```javascript\nconsole.log('5' - 1 + 2);\n```",
        "answer": "The result will be `6` because `'5' - 1` results in `4`, and then adding `2` results in `6`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 549,
        "question": "What will be the result of this code?\n\n```javascript\nconsole.log('4' - '2');\n```",
        "answer": "The result will be `2` because `'4' - '2'` results in `2` after coercion.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 550,
        "question": "What will be the result of the following code?\n\n```javascript\nconsole.log('2' * '3');\n```",
        "answer": "The result will be `6` because `'2' * '3'` results in `6` after coercion.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 551,
        "question": "What is the result of this HTML structure?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Test</title>\n</head>\n<body>\n    <div>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n    </div>\n</body>\n</html>\n```",
        "answer": "The result will be a webpage with a title 'Test' and a body containing three paragraphs with the numbers 1, 2, and 3.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 552,
        "question": "How does the `<template>` element work in HTML?\n\n```html\n<template id=\"my-template\">\n    <p>Hello, World!</p>\n</template>\n```",
        "answer": "The `<template>` element is used to declare fragments of HTML that are not rendered when the page loads but can be instantiated using JavaScript. In this case, `<p>Hello, World!</p>` is contained in the template but not visible until it's cloned and appended to the DOM.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 553,
        "question": "What will be the result of this HTML snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Viewport Test</title>\n</head>\n<body>\n    <p>This is a test page.</p>\n</body>\n</html>\n```",
        "answer": "The page will be displayed with a meta viewport tag that makes the page responsive to different device widths, and the character encoding set to UTF-8.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 554,
        "question": "How does the `data-*` attribute work in HTML?\n\n```html\n<div data-custom=\"value\">Content</div>\n```",
        "answer": "The `data-*` attribute is used to store custom data in HTML elements. The value of `data-custom` can be accessed in JavaScript using `element.dataset.custom`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 555,
        "question": "What is the result of this HTML structure with an `<iframe>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Iframe Test</title>\n</head>\n<body>\n    <iframe src=\"https://example.com\" width=\"600\" height=\"400\"></iframe>\n</body>\n</html>\n```",
        "answer": "An iframe will be embedded in the page displaying the content from 'https://example.com' with a width of 600 pixels and height of 400 pixels.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 556,
        "question": "What will be the result of the following HTML snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Test</title>\n</head>\n<body>\n    <form>\n        <input type=\"text\" name=\"username\" required>\n        <input type=\"submit\">\n    </form>\n</body>\n</html>\n```",
        "answer": "The form will contain a text input field for 'username' which is required, and a submit button. The form will not submit if the input field is left empty.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 557,
        "question": "What will be the output of this HTML snippet?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Entities</title>\n</head>\n<body>\n    <p>&lt;div&gt;Some content&lt;/div&gt;</p>\n</body>\n</html>\n```",
        "answer": "The output will display '<div>Some content</div>' as plain text because HTML entities `&lt;` and `&gt;` are used to represent '<' and '>' respectively.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 558,
        "question": "What is the effect of setting the `lang` attribute on the `<html>` tag?\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <title>Language Test</title>\n</head>\n<body>\n    <p>This is an English text.</p>\n</body>\n</html>\n```",
        "answer": "The `lang` attribute specifies the language of the document's content. In this case, `lang=\"en\"` indicates that the content is in English, which helps with search engine optimization and accessibility tools.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 559,
        "question": "How does the `<noscript>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Noscript Test</title>\n</head>\n<body>\n    <noscript>\n        <p>JavaScript is disabled.</p>\n    </noscript>\n</body>\n</html>\n```",
        "answer": "The `<noscript>` element is used to provide alternative content for users who have JavaScript disabled. In this case, if JavaScript is not enabled, the message 'JavaScript is disabled.' will be displayed.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 560,
        "question": "What will be the result of this HTML structure with `display: none`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Display Test</title>\n    <style>\n        .hidden { display: none; }\n    </style>\n</head>\n<body>\n    <p class=\"hidden\">This paragraph is hidden.</p>\n</body>\n</html>\n```",
        "answer": "The paragraph with class `hidden` will not be visible on the page because `display: none` hides the element from rendering in the document.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 561,
        "question": "What will be the output of this HTML snippet with a `<table>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Test</title>\n</head>\n<body>\n    <table border=\"1\">\n        <tr>\n            <td>Cell 1</td>\n            <td>Cell 2</td>\n        </tr>\n    </table>\n</body>\n</html>\n```",
        "answer": "The output will be a table with one row and two cells, bordered with a width of 1 pixel.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 562,
        "question": "What will be the result of this HTML snippet with a `<script>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Script Test</title>\n</head>\n<body>\n    <script>\n        document.write('Hello World!');\n    </script>\n</body>\n</html>\n```",
        "answer": "The output will be 'Hello World!' written directly to the document where the `<script>` tag is placed.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 563,
        "question": "What will be the result of using `<link>` to include an external CSS file?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n    <title>Link Test</title>\n</head>\n<body>\n    <p>This is a styled paragraph.</p>\n</body>\n</html>\n```",
        "answer": "The HTML page will include and apply styles from the `styles.css` file to the content on the page.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 564,
        "question": "What is the effect of the `alt` attribute in the `<img>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Alt Test</title>\n</head>\n<body>\n    <img src=\"image.jpg\" alt=\"Description of image\">\n</body>\n</html>\n```",
        "answer": "The `alt` attribute provides alternative text for the image. If the image cannot be displayed, the text 'Description of image' will be shown instead.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 565,
        "question": "How does the `<form>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Test</title>\n</head>\n<body>\n    <form action=\"submit.html\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <input type=\"submit\">\n    </form>\n</body>\n</html>\n```",
        "answer": "The `<form>` element defines a form for user input. The form will send data to 'submit.html' using the POST method when submitted.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 566,
        "question": "What will be the output of this HTML snippet with an `<a>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Anchor Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\">Visit Example</a>\n</body>\n</html>\n```",
        "answer": "The output will be a hyperlink that says 'Visit Example,' which, when clicked, will navigate to 'https://example.com'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 567,
        "question": "What will be the result of this HTML snippet with `<meta>` tags?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"description\" content=\"A test page\">\n    <meta name=\"keywords\" content=\"HTML, meta, test\">\n    <title>Meta Test</title>\n</head>\n<body>\n    <p>Check the meta tags in the page source.</p>\n</body>\n</html>\n```",
        "answer": "The page will have meta tags defining the character set as UTF-8, a description, and keywords that can be used by search engines and other tools.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 568,
        "question": "How does the `<iframe>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Iframe Test</title>\n</head>\n<body>\n    <iframe src=\"https://example.com\" width=\"500\" height=\"300\"></iframe>\n</body>\n</html>\n```",
        "answer": "The `<iframe>` element embeds another HTML page within the current page. In this case, it will display 'https://example.com' within a frame of 500x300 pixels.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 569,
        "question": "What will be the result of this HTML snippet with a `<button>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Test</title>\n</head>\n<body>\n    <button onclick=\"alert('Button clicked!')\">Click Me</button>\n</body>\n</html>\n```",
        "answer": "Clicking the button will trigger an alert with the message 'Button clicked!'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 570,
        "question": "What is the result of this HTML snippet with a `<style>` block?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        p { color: red; }\n    </style>\n    <title>Style Test</title>\n</head>\n<body>\n    <p>This is a red paragraph.</p>\n</body>\n</html>\n```",
        "answer": "The paragraph will be displayed in red color due to the CSS style defined in the `<style>` block.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 571,
        "question": "What will be the output of this HTML snippet with a `<fieldset>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Fieldset Test</title>\n</head>\n<body>\n    <fieldset>\n        <legend>Personal Information</legend>\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\">\n    </fieldset>\n</body>\n</html>\n```",
        "answer": "The result will be a fieldset with a legend titled 'Personal Information' and a label and text input field for 'Name'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 572,
        "question": "How does the `<datalist>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Datalist Test</title>\n</head>\n<body>\n    <input list=\"browsers\" name=\"browser\">\n    <datalist id=\"browsers\">\n        <option value=\"Chrome\">\n        <option value=\"Firefox\">\n        <option value=\"Safari\">\n        <option value=\"Edge\">\n    </datalist>\n</body>\n</html>\n```",
        "answer": "The `<datalist>` element provides a list of predefined options for an `<input>` element. When the user types in the input field, they will see suggestions from the datalist.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 573,
        "question": "What will be the output of this HTML snippet with `<blockquote>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Blockquote Test</title>\n</head>\n<body>\n    <blockquote cite=\"https://example.com\">\n        <p>This is a blockquote.</p>\n    </blockquote>\n</body>\n</html>\n```",
        "answer": "The `<blockquote>` element is used for quoting blocks of text. It will typically be displayed with indentation, and the `cite` attribute provides a reference to the source.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 574,
        "question": "How does the `<progress>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Progress Test</title>\n</head>\n<body>\n    <progress value=\"30\" max=\"100\"></progress>\n</body>\n</html>\n```",
        "answer": "The `<progress>` element represents the progress of a task. In this case, it shows 30% completion out of 100%.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 575,
        "question": "What is the effect of the `hidden` attribute in HTML?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hidden Test</title>\n</head>\n<body>\n    <p hidden>This paragraph is hidden.</p>\n</body>\n</html>\n```",
        "answer": "The `hidden` attribute will hide the element from view. In this case, the paragraph will not be displayed.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 576,
        "question": "What is the result of this HTML snippet with a `<map>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Map Test</title>\n</head>\n<body>\n    <img src=\"example.jpg\" usemap=\"#image-map\">\n    <map name=\"image-map\">\n        <area shape=\"rect\" coords=\"34,44,270,350\" href=\"https://example.com\" alt=\"Example\">\n    </map>\n</body>\n</html>\n```",
        "answer": "The `<map>` element defines a client-side image map. The `<area>` element specifies clickable areas on the image that link to 'https://example.com'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 577,
        "question": "How does the `<source>` element work in HTML5?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Source Test</title>\n</head>\n<body>\n    <video controls>\n        <source src=\"video.mp4\" type=\"video/mp4\">\n        <source src=\"video.ogv\" type=\"video/ogg\">\n        Your browser does not support the video tag.\n    </video>\n</body>\n</html>\n```",
        "answer": "The `<source>` element allows specifying multiple media resources for the `<video>` or `<audio>` elements. The browser will select the first supported format, in this case, 'video.mp4' or 'video.ogv'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 578,
        "question": "What will be the output of this HTML snippet with `rel=\"noopener noreferrer\"`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Rel Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit Example</a>\n</body>\n</html>\n```",
        "answer": "The `rel=\"noopener noreferrer\"` attribute is used for security reasons to prevent the new page from accessing the originating window and to prevent the referrer information from being sent.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 579,
        "question": "How does the `<output>` element function in HTML?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Output Test</title>\n</head>\n<body>\n    <form>\n        <input type=\"number\" id=\"num1\" value=\"5\">\n        <input type=\"number\" id=\"num2\" value=\"10\">\n        <button type=\"button\" onclick=\"calculate();\">Calculate</button>\n        <output id=\"result\"></output>\n    </form>\n    <script>\n        function calculate() {\n            var num1 = document.getElementById('num1').value;\n            var num2 = document.getElementById('num2').value;\n            var result = document.getElementById('result');\n            result.value = parseInt(num1) + parseInt(num2);\n        }\n    </script>\n</body>\n</html>\n```",
        "answer": "The `<output>` element is used to represent the result of a calculation or user action. The `calculate` function updates the content of the `<output>` element with the sum of the two input values.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 580,
        "question": "What will be the result of this HTML snippet with `<details>` and `<summary>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Details Test</title>\n</head>\n<body>\n    <details>\n        <summary>More Info</summary>\n        <p>This is additional information that can be toggled.</p>\n    </details>\n</body>\n</html>\n```",
        "answer": "The `<details>` element creates a disclosure widget from which the user can obtain additional information or controls. The `<summary>` element provides a heading for the content that can be toggled.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 581,
        "question": "How does the `<meter>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Meter Test</title>\n</head>\n<body>\n    <meter value=\"0.6\" min=\"0\" max=\"1\">60%</meter>\n</body>\n</html>\n```",
        "answer": "The `<meter>` element represents a scalar value within a known range or a fractional value. In this case, it will display 60% completion out of 100%.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 582,
        "question": "What will be the result of this HTML snippet with a `<style>` block and CSS variables?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        :root {\n            --main-bg-color: coral;\n            --main-text-color: white;\n        }\n        body {\n            background-color: var(--main-bg-color);\n            color: var(--main-text-color);\n        }\n    </style>\n    <title>CSS Variables Test</title>\n</head>\n<body>\n    <p>This is a test of CSS variables.</p>\n</body>\n</html>\n```",
        "answer": "The page will use CSS variables defined in `:root` to set the background color of the body to 'coral' and the text color to 'white'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 583,
        "question": "What is the output of this HTML snippet with `<svg>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>SVG Test</title>\n</head>\n<body>\n    <svg width=\"100\" height=\"100\">\n        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />\n    </svg>\n</body>\n</html>\n```",
        "answer": "The `<svg>` element will render a circle with a center at (50, 50), a radius of 40, a black stroke, and a red fill.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 584,
        "question": "How does the `<canvas>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Canvas Test</title>\n</head>\n<body>\n    <canvas id=\"myCanvas\" width=\"200\" height=\"200\" style=\"border:1px solid #000000;\"></canvas>\n    <script>\n        var canvas = document.getElementById('myCanvas');\n        var ctx = canvas.getContext('2d');\n        ctx.fillStyle = '#FF0000';\n        ctx.fillRect(10, 10, 150, 150);\n    </script>\n</body>\n</html>\n```",
        "answer": "The `<canvas>` element provides a space for drawing graphics via JavaScript. In this case, a red rectangle is drawn inside the canvas.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 585,
        "question": "What is the effect of the `draggable` attribute in HTML?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Draggable Test</title>\n</head>\n<body>\n    <img src=\"example.jpg\" draggable=\"true\" alt=\"Draggable Image\">\n</body>\n</html>\n```",
        "answer": "The `draggable` attribute allows the element to be dragged. In this case, the image can be dragged across the page.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 586,
        "question": "What is the purpose of the `role` attribute in HTML?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Role Test</title>\n</head>\n<body>\n    <div role=\"banner\">\n        <h1>Welcome to My Website</h1>\n    </div>\n</body>\n</html>\n```",
        "answer": "The `role` attribute is used to define the role of an element in accessibility terms. In this case, `role=\"banner\"` indicates that the `<div>` element is a banner or header section.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 587,
        "question": "How does the `autofocus` attribute work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autofocus Test</title>\n</head>\n<body>\n    <input type=\"text\" autofocus>\n</body>\n</html>\n```",
        "answer": "The `autofocus` attribute automatically focuses on the input field when the page loads, allowing users to start typing immediately.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 588,
        "question": "What will be the result of this HTML snippet with a `<details>` tag and `<summary>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Details and Summary Test</title>\n</head>\n<body>\n    <details>\n        <summary>Toggle Details</summary>\n        <p>This content can be toggled.</p>\n    </details>\n</body>\n</html>\n```",
        "answer": "The `<details>` element creates a widget that can be toggled open or closed, with `<summary>` providing the heading. Clicking on 'Toggle Details' will show or hide the content inside the `<details>` element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 589,
        "question": "What is the purpose of the `lang` attribute in HTML?\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <title>Language Test</title>\n</head>\n<body>\n    <p>This page is in English.</p>\n</body>\n</html>\n```",
        "answer": "The `lang` attribute specifies the language of the document's content. In this case, `lang=\"en\"` indicates that the content is in English.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 590,
        "question": "What will be the result of this HTML snippet with a `<time>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Time Test</title>\n</head>\n<body>\n    <time datetime=\"2024-09-03T12:00\">September 3, 2024 at 12:00 PM</time>\n</body>\n</html>\n```",
        "answer": "The `<time>` element represents a specific time and date. It will display 'September 3, 2024 at 12:00 PM' with the `datetime` attribute providing a machine-readable format.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 591,
        "question": "What is the function of the `target` attribute in an anchor (`<a>`) tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Target Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\" target=\"_blank\">Visit Example</a>\n</body>\n</html>\n```",
        "answer": "The `target` attribute specifies where to open the linked document. In this case, `target=\"_blank\"` opens the link in a new tab or window.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 592,
        "question": "How does the `<label>` element work with form controls?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Label Test</title>\n</head>\n<body>\n    <form>\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" id=\"email\">\n    </form>\n</body>\n</html>\n```",
        "answer": "The `<label>` element is associated with a form control using the `for` attribute, which matches the `id` of the input field. Clicking the label will focus the associated input field.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 593,
        "question": "What is the purpose of the `placeholder` attribute in an input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Placeholder Test</title>\n</head>\n<body>\n    <input type=\"text\" placeholder=\"Enter your text here\">\n</body>\n</html>\n```",
        "answer": "The `placeholder` attribute provides a hint to the user about what to enter in the input field. The hint is displayed as grayed-out text within the field until the user starts typing.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 594,
        "question": "What will be the result of this HTML snippet with a `<footer>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Footer Test</title>\n</head>\n<body>\n    <footer>\n        <p>&copy; 2024 Your Website</p>\n    </footer>\n</body>\n</html>\n```",
        "answer": "The `<footer>` element represents the footer section of a document or section, typically containing copyright information or contact details. In this case, it displays '© 2024 Your Website' at the bottom of the page.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 595,
        "question": "How does the `srcset` attribute in an `<img>` tag work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Srcset Test</title>\n</head>\n<body>\n    <img src=\"small.jpg\" srcset=\"large.jpg 2x\" alt=\"Responsive Image\">\n</body>\n</html>\n```",
        "answer": "The `srcset` attribute provides a set of images to be used based on the display's resolution or viewport size. In this case, `large.jpg` will be used if the display has a higher resolution (2x).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 596,
        "question": "What is the purpose of the `charset` attribute in the `<meta>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Charset Test</title>\n</head>\n<body>\n    <p>This page uses UTF-8 encoding.</p>\n</body>\n</html>\n```",
        "answer": "The `charset` attribute in the `<meta>` tag specifies the character encoding for the HTML document. In this case, `UTF-8` is used, which supports a wide range of characters.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 597,
        "question": "What is the purpose of the `required` attribute in form elements?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Required Test</title>\n</head>\n<body>\n    <form>\n        <input type=\"text\" required>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `required` attribute makes a form field mandatory. The form cannot be submitted until the user fills out this field.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 598,
        "question": "What is the result of this HTML snippet with a `<section>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Section Test</title>\n</head>\n<body>\n    <section>\n        <h2>Section Title</h2>\n        <p>This is a section of the page.</p>\n    </section>\n</body>\n</html>\n```",
        "answer": "The `<section>` element represents a thematic grouping of content, typically with a heading. In this case, it groups a heading and a paragraph under 'Section Title'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 599,
        "question": "What does the `rel` attribute do in a `<link>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Rel Test</title>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "The `rel` attribute specifies the relationship between the current document and the linked resource. In this case, `rel=\"stylesheet\"` indicates that the linked file is a stylesheet.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 600,
        "question": "How does the `<article>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Article Test</title>\n</head>\n<body>\n    <article>\n        <h2>Article Title</h2>\n        <p>This is an article content.</p>\n    </article>\n</body>\n</html>\n```",
        "answer": "The `<article>` element represents a self-contained piece of content that could be distributed independently. In this case, it contains a heading and a paragraph, representing an article.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 601,
        "question": "What will be the result of this HTML snippet with the `<mark>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Mark Test</title>\n</head>\n<body>\n    <p>This is <mark>highlighted</mark> text.</p>\n</body>\n</html>\n```",
        "answer": "The `<mark>` element highlights the text, rendering it with a yellow background to indicate that it's of special interest.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 602,
        "question": "What does the `<bdi>` element do?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>BDI Test</title>\n</head>\n<body>\n    <p>My name is <bdi>علي</bdi> and I live in the US.</p>\n</body>\n</html>\n```",
        "answer": "The `<bdi>` (Bidirectional Isolation) element isolates a span of text to prevent it from being affected by the text direction of its parent. It is used here to ensure the Arabic name is rendered correctly.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 603,
        "question": "How does the `<progress>` element work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Progress Test</title>\n</head>\n<body>\n    <progress value=\"50\" max=\"100\"></progress>\n</body>\n</html>\n```",
        "answer": "The `<progress>` element represents the progress of a task. Here, it displays a progress bar filled to 50% of its maximum value (100).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 604,
        "question": "What is the result of this HTML snippet with a `<template>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Template Test</title>\n</head>\n<body>\n    <template id=\"myTemplate\">\n        <p>This is a template content.</p>\n    </template>\n    <script>\n        var template = document.getElementById('myTemplate');\n        document.body.appendChild(template.content.cloneNode(true));\n    </script>\n</body>\n</html>\n```",
        "answer": "The `<template>` element is used to declare HTML fragments that are not rendered immediately. The script clones the content of the template and appends it to the body, rendering the content as `<p>This is a template content.</p>`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 605,
        "question": "What is the purpose of the `<dialog>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Dialog Test</title>\n</head>\n<body>\n    <dialog open>\n        <p>This is a dialog box.</p>\n        <button onclick=\"this.parentNode.close()\">Close</button>\n    </dialog>\n</body>\n</html>\n```",
        "answer": "The `<dialog>` element represents a dialog box or other interactive component. It can be opened or closed programmatically or via user interaction. In this example, the dialog is shown on page load and can be closed by clicking the button.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 606,
        "question": "How does the `<details>` element interact with `<summary>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Details Summary Test</title>\n</head>\n<body>\n    <details>\n        <summary>Click to expand</summary>\n        <p>Here is some hidden content.</p>\n    </details>\n</body>\n</html>\n```",
        "answer": "The `<details>` element creates a widget that the user can toggle open or closed, with the `<summary>` element serving as a heading or control. Clicking 'Click to expand' will show or hide the content inside `<details>`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 607,
        "question": "What does the `<output>` element do?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Output Test</title>\n</head>\n<body>\n    <form oninput=\"result.value = +a.value + +b.value\">\n        <input type=\"range\" id=\"a\" value=\"50\">\n        <input type=\"range\" id=\"b\" value=\"50\">\n        <output name=\"result\">100</output>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `<output>` element is used to display the result of a calculation or user action. The `form` element dynamically updates the `<output>` element with the sum of the two range inputs.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 608,
        "question": "What will be the result of this HTML snippet with `<picture>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Picture Test</title>\n</head>\n<body>\n    <picture>\n        <source srcset=\"image.webp\" type=\"image/webp\">\n        <source srcset=\"image.jpg\" type=\"image/jpeg\">\n        <img src=\"fallback.jpg\" alt=\"Fallback Image\">\n    </picture>\n</body>\n</html>\n```",
        "answer": "The `<picture>` element provides a way to specify different images for different scenarios. The browser will choose the most appropriate image based on the `srcset` and `type` attributes. If none match, it will use the fallback image specified in the `<img>` tag.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 609,
        "question": "How does the `<slot>` element work in Web Components?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Slot Test</title>\n</head>\n<body>\n    <my-component>\n        <p slot=\"content\">This is slot content.</p>\n    </my-component>\n    <script>\n        class MyComponent extends HTMLElement {\n            constructor() {\n                super();\n                const shadow = this.attachShadow({ mode: 'open' });\n                shadow.innerHTML = `\n                    <slot name=\"content\"></slot>\n                `;\n            }\n        }\n        customElements.define('my-component', MyComponent);\n    </script>\n</body>\n</html>\n```",
        "answer": "The `<slot>` element is used in Web Components to define placeholder content that can be replaced by external content when the component is used. Here, the content inside the `<p>` tag with `slot=\"content\"` will be projected into the `<slot>` in the shadow DOM.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 610,
        "question": "What is the function of the `<noscript>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>No Script Test</title>\n</head>\n<body>\n    <noscript>\n        <p>JavaScript is not enabled in your browser.</p>\n    </noscript>\n    <script>\n        document.write('JavaScript is enabled.');\n    </script>\n</body>\n</html>\n```",
        "answer": "The `<noscript>` element is used to provide alternative content for users who have JavaScript disabled in their browsers. In this case, it will display a message if JavaScript is not enabled, while JavaScript content will override this message if it is enabled.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 611,
        "question": "How does the `<address>` element function in HTML?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Address Test</title>\n</head>\n<body>\n    <address>\n        <p>Contact us at:</p>\n        <p>1234 Elm Street, Suite 100<br>\n           Springfield, IL 62704</p>\n    </address>\n</body>\n</html>\n```",
        "answer": "The `<address>` element represents contact information for the author or owner of a document or article. It is typically used for contact details and may include physical addresses, phone numbers, or email addresses.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 612,
        "question": "What is the result of this HTML snippet with `<fieldset>` and `<legend>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Fieldset Test</title>\n</head>\n<body>\n    <fieldset>\n        <legend>Personal Information</legend>\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\">\n    </fieldset>\n</body>\n</html>\n```",
        "answer": "The `<fieldset>` element groups related form controls and labels, and the `<legend>` element provides a caption for the `<fieldset>`. In this example, it groups the name input field under 'Personal Information'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 613,
        "question": "What does the `autofocus` attribute do?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autofocus Test</title>\n</head>\n<body>\n    <input type=\"text\" autofocus>\n</body>\n</html>\n```",
        "answer": "The `autofocus` attribute automatically focuses the input field when the page loads, allowing the user to start typing immediately.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 614,
        "question": "What will be the result of this HTML snippet with a `<canvas>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Canvas Test</title>\n</head>\n<body>\n    <canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>\n    <script>\n        var canvas = document.getElementById('myCanvas');\n        var ctx = canvas.getContext('2d');\n        ctx.fillStyle = 'blue';\n        ctx.fillRect(10, 10, 150, 80);\n    </script>\n</body>\n</html>\n```",
        "answer": "The `<canvas>` element provides a space on the page where you can draw graphics using JavaScript. In this example, a blue rectangle is drawn on the canvas.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 615,
        "question": "How does the `data-*` attribute work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Data Attribute Test</title>\n</head>\n<body>\n    <div data-user-id=\"12345\">User Profile</div>\n    <script>\n        var userDiv = document.querySelector('div');\n        console.log(userDiv.dataset.userId);\n    </script>\n</body>\n</html>\n```",
        "answer": "The `data-*` attributes are used to store custom data on HTML elements. In this example, `data-user-id=\"12345\"` stores the user ID, and `dataset.userId` retrieves this value in JavaScript.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 616,
        "question": "What is the effect of the `hidden` attribute on an element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hidden Test</title>\n</head>\n<body>\n    <div hidden>This content is hidden.</div>\n</body>\n</html>\n```",
        "answer": "The `hidden` attribute hides the element from view, making it not rendered on the page. It can be toggled using JavaScript if needed.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 617,
        "question": "What is the function of the `<ruby>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Ruby Test</title>\n</head>\n<body>\n    <ruby>\n        漢字<rt>kanji</rt>\n    </ruby>\n</body>\n</html>\n```",
        "answer": "The `<ruby>` element represents ruby annotations, which provide additional information about the text, usually used for phonetic annotations. In this example, it provides a pronunciation for the kanji characters.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 618,
        "question": "What is the result of this HTML snippet with `<base>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <base href=\"https://example.com/\">\n    <title>Base Test</title>\n</head>\n<body>\n    <a href=\"page.html\">Go to page</a>\n</body>\n</html>\n```",
        "answer": "The `<base>` element specifies a base URL for all relative URLs in the document. In this example, the link 'Go to page' will resolve to 'https://example.com/page.html'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 619,
        "question": "What will be the output of this HTML snippet with `<output>`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Output Test</title>\n</head>\n<body>\n    <form oninput=\"result.value = a.value + b.value\">\n        <input type=\"number\" id=\"a\" value=\"5\">\n        <input type=\"number\" id=\"b\" value=\"10\">\n        <output name=\"result\">15</output>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `<output>` element displays the result of a calculation or user input. In this case, it will show the sum of the values from the two input fields (15).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 620,
        "question": "What is the effect of using `<link rel=\"preload\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Preload Test</title>\n    <link rel=\"preload\" href=\"style.css\" as=\"style\">\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "The `<link rel=\"preload\">` element preloads resources before they are needed. This helps to improve page load performance by fetching resources like stylesheets or scripts early.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 621,
        "question": "What will be the result of this HTML snippet with `<meta name=\"viewport\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Viewport Test</title>\n</head>\n<body>\n</body>\n</html>\n```",
        "answer": "The `<meta name=\"viewport\">` element controls the layout on mobile browsers. In this case, it sets the viewport width to the device width and sets the initial zoom level to 1.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 622,
        "question": "How does the `autocomplete` attribute work in form fields?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autocomplete Test</title>\n</head>\n<body>\n    <form>\n        <input type=\"text\" name=\"username\" autocomplete=\"username\">\n        <input type=\"password\" name=\"password\" autocomplete=\"current-password\">\n    </form>\n</body>\n</html>\n```",
        "answer": "The `autocomplete` attribute controls the browser's ability to automatically fill in form fields. `autocomplete=\"username\"` suggests that the browser should remember and suggest usernames, while `autocomplete=\"current-password\"` suggests saving the password.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 623,
        "question": "What is the result of this HTML snippet with `<input type=\"range\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Range Test</title>\n</head>\n<body>\n    <input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n</body>\n</html>\n```",
        "answer": "The `<input type=\"range\">` element creates a slider control that allows users to select a value between the `min` and `max` attributes. Here, the slider has a range from 0 to 100 with an initial value of 50.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 624,
        "question": "What will be the result of using the `hidden` attribute on a `<video>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Video Hidden Test</title>\n</head>\n<body>\n    <video hidden controls>\n        <source src=\"movie.mp4\" type=\"video/mp4\">\n    </video>\n</body>\n</html>\n```",
        "answer": "The `hidden` attribute will hide the `<video>` element from the page, so it will not be visible or playable by the user, despite having controls and a source.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 625,
        "question": "How does the `contenteditable` attribute work?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Contenteditable Test</title>\n</head>\n<body>\n    <div contenteditable=\"true\">You can edit this text.</div>\n</body>\n</html>\n```",
        "answer": "The `contenteditable` attribute makes an element editable by the user. In this case, the text within the `<div>` can be modified directly by the user.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 626,
        "question": "What is the effect of the `download` attribute in an `<a>` tag?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Download Test</title>\n</head>\n<body>\n    <a href=\"file.pdf\" download>Download PDF</a>\n</body>\n</html>\n```",
        "answer": "The `download` attribute in an `<a>` tag prompts the browser to download the linked file instead of navigating to it. The file will be saved with the same name as specified in the `href`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 627,
        "question": "How does the `target` attribute in an `<a>` tag affect link behavior?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Target Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\" target=\"_blank\">Open in new tab</a>\n</body>\n</html>\n```",
        "answer": "The `target` attribute specifies where to open the linked document. In this example, `target=\"_blank\"` opens the link in a new tab or window.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 628,
        "question": "What will be the result of the `preload` attribute in a `<video>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Preload Test</title>\n</head>\n<body>\n    <video preload=\"auto\" controls>\n        <source src=\"movie.mp4\" type=\"video/mp4\">\n    </video>\n</body>\n</html>\n```",
        "answer": "The `preload` attribute specifies if and how the video should be loaded when the page is loaded. `preload=\"auto\"` tells the browser to preload the video for immediate playback.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 629,
        "question": "How does the `checked` attribute work in a `<input type=\"checkbox\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Checked Test</title>\n</head>\n<body>\n    <input type=\"checkbox\" checked> Option 1\n</body>\n</html>\n```",
        "answer": "The `checked` attribute in a checkbox input specifies that the checkbox is selected by default. In this case, the checkbox will be checked when the page loads.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 630,
        "question": "What is the result of the `maxlength` attribute in a `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Maxlength Test</title>\n</head>\n<body>\n    <input type=\"text\" maxlength=\"10\">\n</body>\n</html>\n```",
        "answer": "The `maxlength` attribute limits the number of characters that can be entered into the text input field. In this case, the user can type a maximum of 10 characters.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 631,
        "question": "What will be the result of using `<picture>` with multiple sources?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Picture Test</title>\n</head>\n<body>\n    <picture>\n        <source srcset=\"image.webp\" type=\"image/webp\">\n        <source srcset=\"image.jpg\" type=\"image/jpeg\">\n        <img src=\"fallback.jpg\" alt=\"Image\">\n    </picture>\n</body>\n</html>\n```",
        "answer": "The `<picture>` element allows for different image sources based on the browser's support for different formats. The browser will use the first matching `<source>` element's `srcset` attribute. If none match, it will fall back to the `<img>` element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 632,
        "question": "What is the effect of the `rel=\"noopener\"` attribute in a link?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Noopener Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Open in new tab</a>\n</body>\n</html>\n```",
        "answer": "The `rel=\"noopener\"` attribute prevents the new page from accessing the window object of the linking page, enhancing security by avoiding potential performance and security issues.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 633,
        "question": "What will be the result of setting `required` on a form input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Required Test</title>\n</head>\n<body>\n    <form>\n        <input type=\"text\" required>\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `required` attribute makes the form input mandatory. The form cannot be submitted until the input field has a value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 634,
        "question": "What is the effect of the `type=\"email\"` attribute in an `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Email Test</title>\n</head>\n<body>\n    <input type=\"email\" placeholder=\"Enter your email\">\n</body>\n</html>\n```",
        "answer": "The `type=\"email\"` attribute ensures that the input field only accepts valid email addresses. It also provides built-in validation to check for the correct email format.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 635,
        "question": "How does the `accept` attribute work in a file input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Accept Test</title>\n</head>\n<body>\n    <input type=\"file\" accept=\"image/*\">\n</body>\n</html>\n```",
        "answer": "The `accept` attribute restricts the file types that can be selected by the user in a file input field. Here, `accept=\"image/*\"` allows only image files to be selected.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 636,
        "question": "What is the purpose of the `min` and `max` attributes in a range input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Min Max Test</title>\n</head>\n<body>\n    <input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n</body>\n</html>\n```",
        "answer": "The `min` and `max` attributes define the minimum and maximum values for the range input. In this case, the slider's value can range from 0 to 100, with an initial value of 50.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 637,
        "question": "How does the `srcset` attribute work in an `<img>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Srcset Test</title>\n</head>\n<body>\n    <img src=\"small.jpg\" srcset=\"large.jpg 2x\" alt=\"Image\">\n</body>\n</html>\n```",
        "answer": "The `srcset` attribute provides a list of image sources for different display resolutions or viewport sizes. In this example, if the device has a high-resolution display (2x), it will use `large.jpg` instead of `small.jpg`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 638,
        "question": "What is the effect of using `novalidate` on a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>No Validate Test</title>\n</head>\n<body>\n    <form novalidate>\n        <input type=\"text\" required>\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `novalidate` attribute prevents the browser from performing default form validation when the form is submitted. In this case, the required field will not trigger validation.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 639,
        "question": "What will be the result of using `<input type=\"date\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Date Test</title>\n</head>\n<body>\n    <input type=\"date\">\n</body>\n</html>\n```",
        "answer": "The `<input type=\"date\">` element provides a date picker interface, allowing users to select a date from a calendar view.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 640,
        "question": "What is the effect of using `aria-label` attribute?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Aria Label Test</title>\n</head>\n<body>\n    <button aria-label=\"Close\">X</button>\n</body>\n</html>\n```",
        "answer": "The `aria-label` attribute provides an accessible label for screen readers, improving accessibility by giving a description of the button's function. In this example, it describes the button as 'Close'.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 641,
        "question": "How does the `autoplay` attribute work in a `<video>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autoplay Test</title>\n</head>\n<body>\n    <video autoplay controls>\n        <source src=\"movie.mp4\" type=\"video/mp4\">\n    </video>\n</body>\n</html>\n```",
        "answer": "The `autoplay` attribute makes the video start playing automatically as soon as it is ready. Here, the video will begin playing without user interaction as soon as the page loads.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 642,
        "question": "What does the `disabled` attribute do to a form element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Disabled Test</title>\n</head>\n<body>\n    <input type=\"text\" disabled>\n</body>\n</html>\n```",
        "answer": "The `disabled` attribute makes the form element unresponsive to user interactions. In this case, the text input field cannot be interacted with or modified by the user.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 643,
        "question": "How does the `placeholder` attribute work in an `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Placeholder Test</title>\n</head>\n<body>\n    <input type=\"text\" placeholder=\"Enter your name\">\n</body>\n</html>\n```",
        "answer": "The `placeholder` attribute provides a hint or example of what should be entered in the input field. It displays a short hint inside the field before the user enters any data.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 644,
        "question": "What is the purpose of the `action` attribute in a `<form>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Action Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `action` attribute specifies the URL where the form data should be sent when the form is submitted. In this example, the form data will be sent to `submit_form.php`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 645,
        "question": "What does the `method` attribute define in a `<form>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Method Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `method` attribute defines the HTTP method to use when submitting the form. In this example, `method=\"post\"` indicates that the form data will be sent via a POST request.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 646,
        "question": "How does the `name` attribute work in a form element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Name Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `name` attribute specifies the name of the form control. It is used to reference form data after submission. Here, `name=\"username\"` allows the value of the input to be sent as part of the form data.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 647,
        "question": "What is the result of using the `method=\"get\"` attribute in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Get Method Test</title>\n</head>\n<body>\n    <form action=\"search.php\" method=\"get\">\n        <input type=\"text\" name=\"query\">\n        <button type=\"submit\">Search</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "Using `method=\"get\"` sends the form data as a query string appended to the URL. This is suitable for non-sensitive data that can be included in the URL.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 648,
        "question": "What will be the outcome of adding `multiple` to an `<input type=\"file\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Multiple Files Test</title>\n</head>\n<body>\n    <input type=\"file\" multiple>\n</body>\n</html>\n```",
        "answer": "The `multiple` attribute allows the user to select more than one file at a time in the file input field.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 649,
        "question": "What effect does the `readonly` attribute have on a form input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Readonly Test</title>\n</head>\n<body>\n    <input type=\"text\" value=\"Read Only\" readonly>\n</body>\n</html>\n```",
        "answer": "The `readonly` attribute makes the input field non-editable, meaning users can see the value but cannot modify it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 650,
        "question": "How does the `autocomplete` attribute work in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autocomplete Test</title>\n</head>\n<body>\n    <form>\n        <input type=\"text\" name=\"username\" autocomplete=\"on\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `autocomplete` attribute controls whether the browser should suggest and automatically fill in values based on previous inputs. `autocomplete=\"on\"` enables this feature.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 651,
        "question": "What is the purpose of the `minlength` and `maxlength` attributes in an `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Minlength Maxlength Test</title>\n</head>\n<body>\n    <input type=\"text\" minlength=\"5\" maxlength=\"10\">\n</body>\n</html>\n```",
        "answer": "The `minlength` and `maxlength` attributes specify the minimum and maximum number of characters allowed in the input field. Here, the input value must be between 5 and 10 characters.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 652,
        "question": "What does the `size` attribute do in a text input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Size Test</title>\n</head>\n<body>\n    <input type=\"text\" size=\"20\">\n</body>\n</html>\n```",
        "answer": "The `size` attribute specifies the visible width of the input field in characters. In this example, the input field will be 20 characters wide.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 653,
        "question": "How does the `value` attribute work in form elements?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Value Test</title>\n</head>\n<body>\n    <input type=\"text\" value=\"Default Value\">\n</body>\n</html>\n```",
        "answer": "The `value` attribute sets the default value of the input field. In this example, the text input will display 'Default Value' when the page loads.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 654,
        "question": "What is the role of the `label` element in forms?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Label Test</title>\n</head>\n<body>\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" id=\"username\">\n</body>\n</html>\n```",
        "answer": "The `label` element provides a user-readable description for a form control. The `for` attribute links the label to the form control with the corresponding `id`, improving accessibility.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 655,
        "question": "What does the `action` attribute in a form element specify?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Action Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `action` attribute specifies the URL to which the form data will be sent when the form is submitted. Here, `submit_form.php` is the endpoint for form submission.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 656,
        "question": "What is the result of using the `target=\"_self\"` attribute in a link?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Target Self Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\" target=\"_self\">Open in same tab</a>\n</body>\n</html>\n```",
        "answer": "The `target=\"_self\"` attribute opens the link in the same tab or window. This is the default behavior if the `target` attribute is not specified.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 657,
        "question": "How does the `enctype` attribute affect form data submission?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Enctype Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\" enctype=\"multipart/form-data\">\n        <input type=\"file\" name=\"file\">\n        <button type=\"submit\">Upload</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `enctype` attribute specifies how form data should be encoded when submitted. `enctype=\"multipart/form-data\"` is used when the form includes file uploads.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 658,
        "question": "What is the purpose of the `action` attribute in a `<form>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Action Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `action` attribute defines the URL to which the form data will be sent for processing. In this example, the form data will be sent to `submit_form.php`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 659,
        "question": "How does the `method` attribute impact form submission?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Method Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"get\">\n        <input type=\"text\" name=\"search\">\n        <button type=\"submit\">Search</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `method` attribute specifies the HTTP method used to send form data. `method=\"get\"` appends form data to the URL, while `method=\"post\"` sends data in the request body.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 660,
        "question": "What does the `required` attribute do in a form element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Required Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"email\" required>\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `required` attribute makes the form field mandatory. The form will not be submitted unless this field is filled out.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 661,
        "question": "How does the `checked` attribute work in a `<input type=\"checkbox\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Checked Attribute Test</title>\n</head>\n<body>\n    <input type=\"checkbox\" checked>\n</body>\n</html>\n```",
        "answer": "The `checked` attribute specifies that the checkbox should be pre-selected when the page loads. The checkbox will be checked by default.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 662,
        "question": "What effect does the `disabled` attribute have on a button element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Disabled Button Test</title>\n</head>\n<body>\n    <button disabled>Disabled Button</button>\n</body>\n</html>\n```",
        "answer": "The `disabled` attribute makes the button unclickable and prevents any associated actions from being performed. The button is visually disabled and cannot be interacted with.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 663,
        "question": "What is the purpose of the `autofocus` attribute in an `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autofocus Test</title>\n</head>\n<body>\n    <input type=\"text\" autofocus>\n</body>\n</html>\n```",
        "answer": "The `autofocus` attribute causes the input field to automatically gain focus when the page loads, allowing users to start typing immediately.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 664,
        "question": "What is the effect of the `target=\"_blank\"` attribute in a link?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Target Blank Test</title>\n</head>\n<body>\n    <a href=\"https://example.com\" target=\"_blank\">Open in new tab</a>\n</body>\n</html>\n```",
        "answer": "The `target=\"_blank\"` attribute opens the link in a new tab or window, rather than the same tab or window.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 665,
        "question": "What does the `pattern` attribute do in an `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Pattern Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" pattern=\"[A-Za-z]+\">\n</body>\n</html>\n```",
        "answer": "The `pattern` attribute specifies a regular expression that the input's value must match. In this example, the input must contain only letters (both uppercase and lowercase).",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 666,
        "question": "What does the `type` attribute specify in an `<input>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Type Attribute Test</title>\n</head>\n<body>\n    <input type=\"password\">\n</body>\n</html>\n```",
        "answer": "The `type` attribute defines the type of data that the input field accepts. In this example, `type=\"password\"` makes the input field obscure the text entered by the user, typically used for passwords.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 667,
        "question": "How does the `value` attribute work in a `<button>` element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Value Test</title>\n</head>\n<body>\n    <button value=\"submit\">Submit</button>\n</body>\n</html>\n```",
        "answer": "The `value` attribute sets the value associated with the button when it is submitted with a form. This value can be used on the server side to identify which button was clicked.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 668,
        "question": "What does the `step` attribute do in an `<input type=\"number\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Step Attribute Test</title>\n</head>\n<body>\n    <input type=\"number\" step=\"0.1\">\n</body>\n</html>\n```",
        "answer": "The `step` attribute specifies the legal number intervals for an input field. In this example, `step=\"0.1\"` allows the input to accept numbers in increments of 0.1.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 669,
        "question": "How does the `min` and `max` attributes work in an `<input type=\"number\">`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Min Max Attributes Test</title>\n</head>\n<body>\n    <input type=\"number\" min=\"1\" max=\"10\">\n</body>\n</html>\n```",
        "answer": "The `min` and `max` attributes specify the minimum and maximum values allowed for the input field. Here, the input value must be between 1 and 10.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 670,
        "question": "What does the `autocomplete=\"off\"` attribute do in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autocomplete Off Test</title>\n</head>\n<body>\n    <form autocomplete=\"off\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `autocomplete=\"off\"` attribute disables the browser's autocomplete feature for the form or input field, preventing previously entered values from being suggested.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 671,
        "question": "What is the effect of the `disabled` attribute on a form element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Disabled Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" disabled>\n</body>\n</html>\n```",
        "answer": "The `disabled` attribute makes the form element unresponsive to user interactions. The input field cannot be edited or interacted with.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 672,
        "question": "How does the `required` attribute affect form submission?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Required Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\" required>\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `required` attribute makes the input field mandatory. The form cannot be submitted until this field is filled out.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 673,
        "question": "What does the `name` attribute do in a form element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Name Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `name` attribute assigns a name to the form element, which is used to identify the form data when it is submitted. In this example, `name=\"username\"` means that the input field's value will be sent with the key `username`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 674,
        "question": "What is the purpose of the `value` attribute in a text input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Value Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" value=\"default text\">\n</body>\n</html>\n```",
        "answer": "The `value` attribute specifies the initial value of the input field. In this example, the text field will display 'default text' when the page loads.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 675,
        "question": "What does the `placeholder` attribute do in a text input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Placeholder Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" placeholder=\"Enter your name\">\n</body>\n</html>\n```",
        "answer": "The `placeholder` attribute provides a hint to the user about what to enter in the input field. The placeholder text appears in the field when it is empty and disappears when the user starts typing.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 676,
        "question": "How does the `formaction` attribute change the behavior of a submit button?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Formaction Attribute Test</title>\n</head>\n<body>\n    <form action=\"default_submit.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\" formaction=\"custom_submit.php\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `formaction` attribute on a submit button overrides the form's `action` attribute, specifying a different URL to which the form data should be sent when this button is clicked.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 677,
        "question": "What is the purpose of the `target` attribute in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Target Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\" target=\"_blank\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `target` attribute specifies where to open the form's response. `target=\"_blank\"` opens the response in a new tab or window.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 678,
        "question": "What does the `novalidate` attribute do in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Novalidate Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\" novalidate>\n        <input type=\"text\" name=\"username\" required>\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `novalidate` attribute disables the browser's built-in form validation, allowing the form to be submitted without checking the validity of the input fields.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 679,
        "question": "What is the purpose of the `method` attribute in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Method Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `method` attribute specifies the HTTP method used to submit the form. `method=\"post\"` sends form data in the body of the request, while `method=\"get\"` appends form data to the URL.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 680,
        "question": "How does the `action` attribute in a form affect submission?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Action Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `action` attribute specifies the URL where the form data should be sent for processing. In this example, form data is sent to `submit_form.php`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 681,
        "question": "What does the `enctype` attribute do in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Enctype Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\" enctype=\"multipart/form-data\">\n        <input type=\"file\" name=\"file\">\n        <button type=\"submit\">Upload</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `enctype` attribute specifies how the form data should be encoded when submitting it to the server. `enctype=\"multipart/form-data\"` is used for forms that include file uploads.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 682,
        "question": "What effect does the `method` attribute have when set to `get` in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Get Method Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"get\">\n        <input type=\"text\" name=\"search\">\n        <button type=\"submit\">Search</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "When `method=\"get\"` is used, form data is appended to the URL as query parameters. This is suitable for data retrieval and searches but is not secure for sensitive data.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 683,
        "question": "How does the `action` attribute impact form submission?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Action Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `action` attribute determines the URL to which the form data is sent when the form is submitted. In this case, `submit_form.php` is the URL that will receive the form data.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 684,
        "question": "What does the `target` attribute in a form specify?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Target Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\" target=\"_blank\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `target` attribute specifies where to display the response after form submission. `target=\"_blank\"` opens the response in a new tab or window.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 685,
        "question": "What is the role of the `novalidate` attribute in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Novalidate Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\" novalidate>\n        <input type=\"text\" name=\"username\" required>\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `novalidate` attribute disables HTML5 form validation, allowing the form to be submitted regardless of input validity.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 686,
        "question": "How does the `autocomplete` attribute affect form inputs?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autocomplete Attribute Test</title>\n</head>\n<body>\n    <form autocomplete=\"off\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `autocomplete` attribute controls whether the browser should automatically fill in form values based on previously entered data. `autocomplete=\"off\"` prevents the browser from suggesting previously entered values.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 687,
        "question": "What does the `formaction` attribute do for a submit button?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Formaction Attribute Test</title>\n</head>\n<body>\n    <form action=\"default_submit.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\" formaction=\"custom_submit.php\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `formaction` attribute on a submit button overrides the form's `action` attribute, specifying a different URL to send the form data to when that button is clicked.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 688,
        "question": "What is the impact of the `method` attribute when set to `post` in a form?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Post Method Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "When `method=\"post\"` is used, form data is sent in the body of the HTTP request, which is suitable for submitting sensitive data or large amounts of data.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 689,
        "question": "What does the `disabled` attribute do to a form element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Disabled Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" disabled>\n</body>\n</html>\n```",
        "answer": "The `disabled` attribute makes the form element unresponsive and uneditable. It also prevents the element from being submitted with the form data.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 690,
        "question": "How does the `placeholder` attribute assist users?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Placeholder Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" placeholder=\"Enter your name\">\n</body>\n</html>\n```",
        "answer": "The `placeholder` attribute provides a hint to the user about what should be entered in the input field. The placeholder text appears when the field is empty and disappears when the user starts typing.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 691,
        "question": "What is the effect of the `required` attribute in an input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Required Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" name=\"email\" required>\n</body>\n</html>\n```",
        "answer": "The `required` attribute makes the input field mandatory. The form cannot be submitted until the field has a value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 692,
        "question": "What does the `pattern` attribute enforce in an input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Pattern Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" pattern=\"[A-Za-z]+\" title=\"Letters only\">\n</body>\n</html>\n```",
        "answer": "The `pattern` attribute specifies a regular expression that the input's value must match for the form to be submitted. In this example, only letters are allowed.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 693,
        "question": "How does the `min` and `max` attributes constrain input values?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Min and Max Attributes Test</title>\n</head>\n<body>\n    <input type=\"number\" min=\"1\" max=\"10\">\n</body>\n</html>\n```",
        "answer": "The `min` and `max` attributes set the minimum and maximum values that are acceptable for the input. For `type=\"number\"`, this constrains the allowed range of numeric values.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 694,
        "question": "What does the `multiple` attribute do for file inputs?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Multiple Attribute Test</title>\n</head>\n<body>\n    <input type=\"file\" multiple>\n</body>\n</html>\n```",
        "answer": "The `multiple` attribute allows users to select more than one file for upload. Without this attribute, only a single file can be selected.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 695,
        "question": "How does the `size` attribute affect a text input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Size Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" size=\"30\">\n</body>\n</html>\n```",
        "answer": "The `size` attribute specifies the width of the text input field in characters. It determines how many characters can be visible at one time.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 696,
        "question": "What role does the `value` attribute play in a radio button?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Value Attribute Test</title>\n</head>\n<body>\n    <input type=\"radio\" name=\"color\" value=\"red\"> Red\n    <input type=\"radio\" name=\"color\" value=\"blue\"> Blue\n</body>\n</html>\n```",
        "answer": "The `value` attribute specifies the value that will be sent to the server when the form is submitted if the radio button is selected. In this example, `value=\"red\"` and `value=\"blue\"` are sent based on user selection.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 697,
        "question": "How does the `selected` attribute affect an option in a select menu?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Selected Attribute Test</title>\n</head>\n<body>\n    <select>\n        <option value=\"1\">Option 1</option>\n        <option value=\"2\" selected>Option 2</option>\n        <option value=\"3\">Option 3</option>\n    </select>\n</body>\n</html>\n```",
        "answer": "The `selected` attribute makes the option the default selection in the drop-down list. In this example, 'Option 2' is selected by default.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 698,
        "question": "What does the `disabled` attribute do to a form submit button?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Disabled Attribute Test</title>\n</head>\n<body>\n    <button type=\"submit\" disabled>Submit</button>\n</body>\n</html>\n```",
        "answer": "The `disabled` attribute makes the submit button inactive and unclickable. It also prevents the button from submitting the form.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 699,
        "question": "How does the `maxlength` attribute constrain text input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Maxlength Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" maxlength=\"10\">\n</body>\n</html>\n```",
        "answer": "The `maxlength` attribute limits the number of characters that can be entered in the text input field. In this example, the user can enter up to 10 characters.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 700,
        "question": "What does the `minlength` attribute enforce for a text input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Minlength Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" minlength=\"5\">\n</body>\n</html>\n```",
        "answer": "The `minlength` attribute specifies the minimum number of characters that must be entered in the input field. In this example, at least 5 characters are required.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 701,
        "question": "How does the `readonly` attribute affect an input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Readonly Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" value=\"Read-only text\" readonly>\n</body>\n</html>\n```",
        "answer": "The `readonly` attribute makes the input field non-editable, meaning users can view the text but cannot change it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 702,
        "question": "What does the `type` attribute specify for an input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Type Attribute Test</title>\n</head>\n<body>\n    <input type=\"password\" name=\"password\">\n</body>\n</html>\n```",
        "answer": "The `type` attribute defines the kind of data that the input field will accept. In this example, `type=\"password\"` makes the input field mask the entered text.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 703,
        "question": "What is the purpose of the `autocomplete` attribute set to `on`?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Autocomplete Attribute Test</title>\n</head>\n<body>\n    <form autocomplete=\"on\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "When `autocomplete=\"on\"` is set, the browser will suggest previously entered values for the form fields based on the user's history.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 704,
        "question": "How does the `hidden` attribute work in HTML?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hidden Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" value=\"Hidden Input\" hidden>\n</body>\n</html>\n```",
        "answer": "The `hidden` attribute makes the element not visible on the page. It does not remove the element from the document but hides it from view.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 705,
        "question": "What does the `form` attribute do for an input element?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Attribute Test</title>\n</head>\n<body>\n    <form id=\"myForm\" action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Submit</button>\n    </form>\n    <input type=\"text\" name=\"email\" form=\"myForm\">\n</body>\n</html>\n```",
        "answer": "The `form` attribute allows an input element to be associated with a specific form, even if the input is outside the form element. In this example, the `email` input is part of the `myForm` form.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 706,
        "question": "What effect does the `tabindex` attribute have on form elements?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Tabindex Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" name=\"username\" tabindex=\"1\">\n    <input type=\"text\" name=\"password\" tabindex=\"2\">\n    <button type=\"submit\" tabindex=\"3\">Submit</button>\n</body>\n</html>\n```",
        "answer": "The `tabindex` attribute determines the order in which elements receive focus when navigating through the form using the Tab key. Elements with a lower `tabindex` value receive focus before elements with a higher value.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 707,
        "question": "What does the `accept` attribute specify for a file input?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Accept Attribute Test</title>\n</head>\n<body>\n    <input type=\"file\" accept=\"image/*\">\n</body>\n</html>\n```",
        "answer": "The `accept` attribute specifies the types of files that are allowed to be selected in the file input. In this example, only image files can be selected.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 708,
        "question": "How does the `pattern` attribute validate input values?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Pattern Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" pattern=\"[A-Za-z]{3,}\" title=\"Minimum 3 letters\">\n</body>\n</html>\n```",
        "answer": "The `pattern` attribute specifies a regular expression that the input's value must match. In this example, the input must contain at least 3 letters.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 709,
        "question": "What is the effect of the `required` attribute on an input field?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Required Attribute Test</title>\n</head>\n<body>\n    <input type=\"text\" name=\"username\" required>\n</body>\n</html>\n```",
        "answer": "The `required` attribute makes the input field mandatory. The form cannot be submitted unless this field is filled out.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 710,
        "question": "What is the purpose of the `formaction` attribute in a submit button?\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Formaction Attribute Test</title>\n</head>\n<body>\n    <form action=\"submit_form.php\" method=\"post\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\" formaction=\"submit_another_form.php\">Submit</button>\n    </form>\n</body>\n</html>\n```",
        "answer": "The `formaction` attribute specifies a URL to which the form data should be submitted when the button is clicked, overriding the form's `action` attribute. In this example, the form data will be submitted to `submit_another_form.php`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 711,
        "question": "What is the effect of the `flex-grow` property in a flex container?\n\n```css\n.container {\n    display: flex;\n}\n.item {\n    flex-grow: 1;\n}\n```",
        "answer": "The `flex-grow` property specifies how much a flex item should grow relative to the rest of the flex items in the flex container. In this example, the flex item will grow to fill the available space in the container.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 712,
        "question": "How does the `grid-template-columns` property work in CSS Grid?\n\n```css\n.container {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n```",
        "answer": "The `grid-template-columns` property defines the number and size of columns in a grid layout. In this example, the container will have two columns, where the second column is twice as wide as the first column.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 713,
        "question": "What does the `z-index` property control in CSS?\n\n```css\n.element {\n    position: absolute;\n    z-index: 10;\n}\n```",
        "answer": "The `z-index` property controls the stacking order of positioned elements. Elements with a higher `z-index` will appear above those with a lower `z-index`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 714,
        "question": "How does the `:nth-child()` pseudo-class work?\n\n```css\nul li:nth-child(2) {\n    color: red;\n}\n```",
        "answer": "The `:nth-child()` pseudo-class selects elements based on their position in a parent element. In this example, the second `<li>` element within a `<ul>` will have its text color set to red.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 715,
        "question": "What is the purpose of the `box-shadow` property?\n\n```css\n.box {\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n}\n```",
        "answer": "The `box-shadow` property adds shadow effects around an element's frame. The values specify the horizontal offset, vertical offset, blur radius, and color of the shadow.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 716,
        "question": "How does the `transform` property affect an element?\n\n```css\n.box {\n    transform: rotate(45deg);\n}\n```",
        "answer": "The `transform` property allows you to apply 2D and 3D transformations to an element, such as rotation, scaling, and translation. In this example, the element will be rotated 45 degrees.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 717,
        "question": "What does the `flex-direction` property control in a flex container?\n\n```css\n.container {\n    display: flex;\n    flex-direction: column;\n}\n```",
        "answer": "The `flex-direction` property defines the direction in which the flex items are placed in the flex container. In this example, the items will be arranged in a column.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 718,
        "question": "How does the `grid-template-areas` property work?\n\n```css\n.container {\n    display: grid;\n    grid-template-areas:\n        'header header'\n        'sidebar content'\n        'footer footer';\n}\n```",
        "answer": "The `grid-template-areas` property defines a grid template by specifying which grid items should be placed in which areas. Named areas can be referenced to position grid items.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 719,
        "question": "What is the effect of the `align-items` property in a flex container?\n\n```css\n.container {\n    display: flex;\n    align-items: center;\n}\n```",
        "answer": "The `align-items` property aligns flex items along the cross axis of the flex container. In this example, the items will be centered vertically within the container.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 720,
        "question": "How does the `position: sticky` property behave?\n\n```css\n.header {\n    position: sticky;\n    top: 0;\n}\n```",
        "answer": "The `position: sticky` property makes an element stick to a specified position (e.g., `top: 0`) when scrolling past it, but it remains in the normal flow of the document when not in view.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 721,
        "question": "What is the purpose of the `clamp()` function in CSS?\n\n```css\n.element {\n    font-size: clamp(16px, 2vw, 24px);\n}\n```",
        "answer": "The `clamp()` function sets a value that adjusts between a defined minimum and maximum based on the viewport size. In this example, the font size will be responsive, ranging between 16px and 24px, with a preferred size of 2vw.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 722,
        "question": "How does the `:not()` pseudo-class work?\n\n```css\nul li:not(.active) {\n    color: gray;\n}\n```",
        "answer": "The `:not()` pseudo-class selects elements that do not match a given selector. In this example, list items without the `active` class will have their text color set to gray.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 723,
        "question": "What does the `background-clip` property control?\n\n```css\n.element {\n    background: linear-gradient(to right, red, blue);\n    background-clip: border-box;\n}\n```",
        "answer": "The `background-clip` property specifies the area within which the background is painted. The `border-box` value makes the background extend to the border edge of the element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 724,
        "question": "How does the `overflow: hidden` property affect an element?\n\n```css\n.container {\n    overflow: hidden;\n}\n```",
        "answer": "The `overflow: hidden` property hides any content that overflows the bounds of the element. This means any content that extends outside the element's box will not be visible.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 725,
        "question": "What is the effect of the `mix-blend-mode` property?\n\n```css\n.element {\n    background: red;\n    mix-blend-mode: multiply;\n}\n```",
        "answer": "The `mix-blend-mode` property defines how an element's content should blend with the background. The `multiply` value combines the element's background with the underlying content, resulting in a multiplied color effect.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 726,
        "question": "How does the `content` property work with the `::before` pseudo-element?\n\n```css\n.element::before {\n    content: 'Prefix';\n}\n```",
        "answer": "The `content` property inserts generated content before the content of the element. In this example, 'Prefix' will be added before the actual content of the `.element`.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 727,
        "question": "What is the effect of the `clip-path` property?\n\n```css\n.element {\n    clip-path: circle(50% at 50% 50%);\n}\n```",
        "answer": "The `clip-path` property defines a clipping region for an element, specifying which parts of the element should be visible. In this example, the element will be clipped to a circular shape.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 728,
        "question": "How does the `text-shadow` property affect text?\n\n```css\n.text {\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n```",
        "answer": "The `text-shadow` property adds shadow effects to text. The values specify the horizontal and vertical offsets, blur radius, and color of the shadow.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 729,
        "question": "What is the purpose of the `will-change` property?\n\n```css\n.element {\n    will-change: transform;\n}\n```",
        "answer": "The `will-change` property informs the browser of expected changes to an element, allowing it to optimize performance by preparing for these changes in advance. In this example, the element is expected to undergo transformations.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 730,
        "question": "How does the `object-fit` property control content fitting?\n\n```css\n.img {\n    object-fit: cover;\n}\n```",
        "answer": "The `object-fit` property specifies how the content of a replaced element (like an image) should fit within its container. The `cover` value scales the content to cover the container, possibly cropping it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 731,
        "question": "What does the `justify-content` property do in a flex container?\n\n```css\n.container {\n    display: flex;\n    justify-content: space-between;\n}\n```",
        "answer": "The `justify-content` property aligns flex items along the main axis of the flex container. The `space-between` value distributes items with equal spacing between them.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 732,
        "question": "How does the `align-content` property work in a flex container?\n\n```css\n.container {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n}\n```",
        "answer": "The `align-content` property aligns flex lines within a flex container along the cross axis. The `center` value centers the lines within the container.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 733,
        "question": "What is the purpose of the `overflow-x` property?\n\n```css\n.container {\n    overflow-x: scroll;\n}\n```",
        "answer": "The `overflow-x` property controls the horizontal overflow of an element. The `scroll` value adds a horizontal scrollbar if the content overflows the element's width.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 734,
        "question": "How does the `grid-auto-flow` property influence grid layout?\n\n```css\n.container {\n    display: grid;\n    grid-auto-flow: dense;\n}\n```",
        "answer": "The `grid-auto-flow` property controls how auto-placed items are placed in the grid. The `dense` value makes the grid layout fill in gaps more efficiently by placing items in the available space.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 735,
        "question": "What is the effect of the `transition` property in CSS?\n\n```css\n.box {\n    transition: all 0.3s ease;\n}\n```",
        "answer": "The `transition` property specifies the transition effect for changes in CSS properties. The example applies a transition effect of 0.3 seconds to all properties with an `ease` timing function.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 736,
        "question": "How does the `filter` property affect an element?\n\n```css\n.img {\n    filter: grayscale(100%);\n}\n```",
        "answer": "The `filter` property applies graphical effects like blur or color shift to an element. The `grayscale(100%)` value converts the element to grayscale.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 737,
        "question": "What does the `background-size` property control?\n\n```css\n.element {\n    background: url(image.jpg);\n    background-size: cover;\n}\n```",
        "answer": "The `background-size` property defines the size of the background image. The `cover` value scales the image to cover the entire background area of the element, potentially cropping it.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 738,
        "question": "How does the `clip-path` property work with SVG paths?\n\n```css\n.element {\n    clip-path: path('M10 10 H 90 V 90 H 10 Z');\n}\n```",
        "answer": "The `clip-path` property clips an element to a specified shape or path. In this example, the element is clipped to the shape defined by the SVG path.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 739,
        "question": "What is the effect of the `pointer-events` property?\n\n```css\n.element {\n    pointer-events: none;\n}\n```",
        "answer": "The `pointer-events` property controls how an element responds to mouse events. The `none` value means the element will not receive any pointer events, effectively making it non-interactive.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 740,
        "question": "How does the `resize` property work with a text area?\n\n```css\n.textarea {\n    resize: both;\n}\n```",
        "answer": "The `resize` property allows users to resize an element. The `both` value enables resizing in both horizontal and vertical directions.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 741,
        "question": "What is the purpose of the `pointer-events: auto` property?\n\n```css\n.element {\n    pointer-events: auto;\n}\n```",
        "answer": "The `pointer-events: auto` property restores the default behavior of pointer events, allowing the element to respond to mouse events as usual.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 742,
        "question": "How does the `position: sticky` property behave in a scrollable container?\n\n```css\n.sticky {\n    position: sticky;\n    top: 0;\n}\n```",
        "answer": "The `position: sticky` property makes an element stick to a defined position (e.g., `top: 0`) when the element's container is scrolled. It switches between relative and fixed positioning based on scroll position.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 743,
        "question": "What does the `grid-column` property specify in CSS Grid?\n\n```css\n.item {\n    grid-column: span 2;\n}\n```",
        "answer": "The `grid-column` property defines how many columns an element should span in a grid layout. The `span 2` value makes the element span across two columns.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 744,
        "question": "How does the `text-overflow` property affect text in a container?\n\n```css\n.container {\n    width: 200px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n```",
        "answer": "The `text-overflow` property specifies how to handle text overflow in a container. The `ellipsis` value adds an ellipsis (...) at the end of the text when it overflows.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 745,
        "question": "What is the effect of the `box-sizing` property?\n\n```css\n.element {\n    box-sizing: border-box;\n}\n```",
        "answer": "The `box-sizing` property changes the box model used for an element. The `border-box` value includes padding and border in the element's total width and height.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 746,
        "question": "How does the `grid-template-rows` property work in CSS Grid?\n\n```css\n.container {\n    display: grid;\n    grid-template-rows: 100px auto;\n}\n```",
        "answer": "The `grid-template-rows` property defines the size of rows in a grid layout. In this example, the grid will have a fixed 100px row followed by a row that automatically adjusts its size.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 747,
        "question": "What does the `background-attachment` property control?\n\n```css\n.element {\n    background: url(image.jpg);\n    background-attachment: fixed;\n}\n```",
        "answer": "The `background-attachment` property specifies how a background image is attached to the viewport. The `fixed` value makes the background image stay in place while the content scrolls.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 748,
        "question": "How does the `:focus-within` pseudo-class work?\n\n```css\n.container:focus-within {\n    border: 2px solid blue;\n}\n```",
        "answer": "The `:focus-within` pseudo-class applies styles to an element when it or any of its descendants have focus. In this example, the container will have a blue border if any child element is focused.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 749,
        "question": "What is the purpose of the `background-origin` property?\n\n```css\n.element {\n    background: url(image.jpg);\n    background-origin: padding-box;\n}\n```",
        "answer": "The `background-origin` property specifies the background positioning area. The `padding-box` value positions the background relative to the padding edge of the element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 750,
        "question": "How does the `object-position` property work?\n\n```css\n.img {\n    object-position: top right;\n}\n```",
        "answer": "The `object-position` property defines the position of the content within an element with `object-fit`. In this example, the content of the image will be positioned at the top right.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 751,
        "question": "What does the `transform: translate3d()` function do?\n\n```css\n.element {\n    transform: translate3d(10px, 20px, 30px);\n}\n```",
        "answer": "The `translate3d()` function moves an element in 3D space along the x, y, and z axes. In this example, the element will be moved 10px to the right, 20px down, and 30px forward.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 752,
        "question": "How does the `grid-area` property work in CSS Grid?\n\n```css\n.item {\n    grid-area: header;\n}\n```",
        "answer": "The `grid-area` property assigns a name to a grid item that corresponds to a named grid area defined in the grid container. In this example, the item is placed in the `header` grid area.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 753,
        "question": "What is the effect of the `column-gap` property?\n\n```css\n.container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 10px;\n}\n```",
        "answer": "The `column-gap` property sets the gap between columns in a grid layout. In this example, a 10px gap is applied between the grid columns.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 754,
        "question": "How does the `background-blend-mode` property work?\n\n```css\n.element {\n    background: url(image.jpg);\n    background-blend-mode: multiply;\n}\n```",
        "answer": "The `background-blend-mode` property specifies how multiple background images or colors should blend with each other. The `multiply` value darkens the colors by multiplying them.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 755,
        "question": "What is the purpose of the `animation-timing-function` property?\n\n```css\n.element {\n    animation-timing-function: ease-in-out;\n}\n```",
        "answer": "The `animation-timing-function` property defines the speed curve of an animation. The `ease-in-out` value makes the animation start and end slowly, with a faster middle phase.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 756,
        "question": "How does the `will-change` property improve performance?\n\n```css\n.element {\n    will-change: transform;\n}\n```",
        "answer": "The `will-change` property hints to the browser which properties are expected to change, allowing it to optimize performance. In this example, it indicates that the `transform` property will change.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 757,
        "question": "What does the `display: grid` property do?\n\n```css\n.container {\n    display: grid;\n}\n```",
        "answer": "The `display: grid` property enables the CSS Grid layout on an element, allowing it to create a grid-based layout with rows and columns.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 758,
        "question": "How does the `place-items` shorthand property work in CSS Grid?\n\n```css\n.container {\n    display: grid;\n    place-items: center;\n}\n```",
        "answer": "The `place-items` shorthand property sets both `align-items` and `justify-items` in a grid container. The `center` value aligns items both horizontally and vertically at the center of their grid areas.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 759,
        "question": "What is the effect of the `object-fit` property?\n\n```css\n.img {\n    object-fit: cover;\n}\n```",
        "answer": "The `object-fit` property specifies how the content of a replaced element (like an image) should fit within its container. The `cover` value scales the content to cover the entire container while maintaining its aspect ratio.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 760,
        "question": "How does the `flex-flow` shorthand property work?\n\n```css\n.container {\n    display: flex;\n    flex-flow: row wrap;\n}\n```",
        "answer": "The `flex-flow` shorthand property combines `flex-direction` and `flex-wrap`. In this example, `row wrap` sets the flex direction to row and allows items to wrap onto multiple lines.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 761,
        "question": "What is the purpose of the `text-shadow` property?\n\n```css\n.text {\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n```",
        "answer": "The `text-shadow` property adds shadow effects to text. The values specify the horizontal and vertical offset, blur radius, and color of the shadow.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 762,
        "question": "How does the `align-items` property work in a flex container?\n\n```css\n.container {\n    display: flex;\n    align-items: center;\n}\n```",
        "answer": "The `align-items` property aligns flex items along the cross axis of the flex container. The `center` value aligns items to the center of the container.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 763,
        "question": "What is the effect of the `background-position` property?\n\n```css\n.element {\n    background: url(image.jpg);\n    background-position: center center;\n}\n```",
        "answer": "The `background-position` property sets the starting position of a background image. The `center center` value positions the image in the center of the element.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 764,
        "question": "How does the `grid-template-areas` property work?\n\n```css\n.container {\n    display: grid;\n    grid-template-areas:\n        'header header'\n        'main sidebar'\n        'footer footer';\n}\n```",
        "answer": "The `grid-template-areas` property defines named grid areas in a grid layout. The example sets up the layout with `header`, `main`, `sidebar`, and `footer` areas.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 765,
        "question": "What does the `justify-items` property do in a grid container?\n\n```css\n.container {\n    display: grid;\n    justify-items: start;\n}\n```",
        "answer": "The `justify-items` property aligns grid items along the inline (horizontal) axis of their grid area. The `start` value aligns items to the start of the grid area.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 766,
        "question": "How does the `margin: auto` property work?\n\n```css\n.element {\n    width: 200px;\n    margin: auto;\n}\n```",
        "answer": "The `margin: auto` property automatically calculates the margins on both sides of the element. This is often used to center an element horizontally within its container.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 767,
        "question": "What does the `max-width` property control?\n\n```css\n.container {\n    max-width: 1200px;\n}\n```",
        "answer": "The `max-width` property sets the maximum width of an element. The element will not exceed the specified `max-width` value even if the container is larger.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 768,
        "question": "How does the `grid-auto-rows` property work in CSS Grid?\n\n```css\n.container {\n    display: grid;\n    grid-auto-rows: 100px;\n}\n```",
        "answer": "The `grid-auto-rows` property sets the size of rows created automatically in a grid layout. In this example, each automatically created row will have a height of 100px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 769,
        "question": "What is the effect of the `visibility` property?\n\n```css\n.element {\n    visibility: hidden;\n}\n```",
        "answer": "The `visibility` property controls the visibility of an element. The `hidden` value makes the element invisible, but it still takes up space in the layout.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 770,
        "question": "How does the `letter-spacing` property affect text?\n\n```css\n.text {\n    letter-spacing: 2px;\n}\n```",
        "answer": "The `letter-spacing` property adjusts the space between characters in text. The `2px` value adds 2 pixels of space between each character.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 771,
        "question": "What does the `flex-basis` property specify?\n\n```css\n.item {\n    flex-basis: 100px;\n}\n```",
        "answer": "The `flex-basis` property defines the initial size of a flex item before space distribution occurs. In this example, the item starts with a size of 100px.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 772,
        "question": "How does the `grid-template-columns` property work in CSS Grid?\n\n```css\n.container {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n```",
        "answer": "The `grid-template-columns` property defines the size of columns in a grid layout. In this example, the grid has two columns where the second column is twice as wide as the first.",
        "flag": {
            "true": 0,
            "false": 0
        }
    },
    {
        "serial": 773,
        "question": "What is the effect of the `z-index` property?\n\n```css\n.element {\n    position: absolute;\n    z-index: 10;\n}\n```",
        "answer": "The `z-index` property specifies the stack order of positioned elements. Higher values place elements on top of those with lower values. In this example, the element will be above others with lower `z-index` values.",
        "flag": {
            "true": 0,
            "false": 0
        }
    }
]

export default code_base_questions;