Dagaz.Controller.persistense = "none";

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("ee"); // 0
    design.addDirection("ww"); // 1
    design.addDirection("se"); // 2
    design.addDirection("sw"); // 3
    design.addDirection("e");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("w");  // 6
    design.addDirection("nw"); // 7
    design.addDirection("n");  // 8
    design.addDirection("s");  // 9

    design.addPlayer("White", [1, 0, 7, 5, 6, 3, 4, 2, 9, 8]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    design.addPosition("a11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j11", [2, 0, 23, 21, 1, 0, 0, 0, 0, 22]);
    design.addPosition("k11", [2, 0, 23, 21, 1, 0, -1, 0, 0, 0]);
    design.addPosition("l11", [2, -2, 23, 21, 1, 0, -1, 0, 0, 22]);
    design.addPosition("m11", [0, -2, 23, 21, 1, 0, -1, 0, 0, 0]);
    design.addPosition("n11", [0, -2, 23, 21, 0, 0, -1, 0, 0, 22]);
    design.addPosition("o11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("q11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("r11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("s11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("t11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("j10", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("k10", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("l10", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("m10", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("n10", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("o10", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("p10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("q10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("r10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("s10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("t10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h9", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("i9", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("j9", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("k9", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("l9", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("m9", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("n9", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("o9", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("p9", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("q9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("r9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("s9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("t9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g8", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("h8", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("i8", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("j8", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("k8", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("l8", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("m8", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("n8", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("o8", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("p8", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("q8", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("r8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("s8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("t8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("g7", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("h7", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("i7", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("j7", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("k7", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("l7", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("m7", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("n7", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("o7", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("p7", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("q7", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("r7", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("s7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("t7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e6", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("f6", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("g6", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("h6", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("i6", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("j6", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("k6", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("l6", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("m6", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("n6", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("o6", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("p6", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("q6", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("r6", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("s6", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("t6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d5", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("e5", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("f5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("g5", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("h5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("i5", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("j5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("k5", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("l5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("m5", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("n5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("o5", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("p5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("q5", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("r5", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("s5", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("t5", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("u5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("v5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [2, 0, 23, 21, 1, -21, 0, 0, 0, 22]);
    design.addPosition("d4", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("e4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("f4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("g4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("h4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("i4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("j4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("k4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("l4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("m4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("n4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("o4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("p4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("q4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("r4", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("s4", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("t4", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("u4", [0, -2, 23, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("v4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [2, 0, 23, 0, 1, -21, 0, 0, 0, 22]);
    design.addPosition("c3", [2, 0, 23, 21, 1, -21, -1, 0, -22, 0]);
    design.addPosition("d3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("e3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("f3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("g3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("h3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("i3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("j3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("k3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("l3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("m3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("n3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("o3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("p3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("q3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("r3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("s3", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("t3", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("u3", [0, -2, 23, 21, 1, 0, -1, -23, -22, 0]);
    design.addPosition("v3", [0, -2, 0, 21, 0, 0, -1, -23, 0, 22]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [2, 0, 23, 0, 1, -21, 0, 0, -22, 0]);
    design.addPosition("c2", [2, 0, 23, 0, 1, -21, -1, -23, 0, 22]);
    design.addPosition("d2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("e2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("f2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("g2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("h2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("i2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("j2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("k2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("l2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("m2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("n2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("o2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("p2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("q2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("r2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("s2", [2, -2, 23, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("t2", [2, -2, 23, 21, 1, -21, -1, -23, -22, 0]);
    design.addPosition("u2", [0, -2, 0, 21, 1, -21, -1, -23, 0, 22]);
    design.addPosition("v2", [0, -2, 0, 21, 0, 0, -1, -23, -22, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [2, 0, 0, 0, 1, -21, 0, -23, -22, 0]);
    design.addPosition("d1", [2, 0, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("e1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("f1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("g1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("h1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("i1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("j1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("k1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("l1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("m1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("n1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("o1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("p1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("q1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("r1", [2, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("s1", [2, -2, 0, 0, 1, -21, -1, -23, -22, 0]);
    design.addPosition("t1", [0, -2, 0, 0, 1, -21, -1, -23, 0, 0]);
    design.addPosition("u1", [0, -2, 0, 0, 0, -21, -1, -23, -22, 0]);
    design.addPosition("v1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0, 2);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("Captain", 1, 10);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);

    design.setup("White", "Soldier", 205);
    design.setup("White", "Soldier", 207);
    design.setup("White", "Soldier", 209);
    design.setup("White", "Soldier", 211);
    design.setup("White", "Soldier", 213);
    design.setup("White", "Soldier", 182);
    design.setup("White", "Soldier", 184);
    design.setup("White", "Soldier", 186);
    design.setup("White", "Soldier", 188);
    design.setup("White", "Soldier", 190);
    design.setup("White", "Soldier", 192);
    design.setup("White", "Soldier", 159);
    design.setup("White", "Soldier", 163);
    design.setup("White", "Soldier", 165);
    design.setup("White", "Soldier", 167);
    design.setup("White", "Soldier", 171);
    design.setup("White", "Captain", 161);
    design.setup("White", "Captain", 169);
    design.setup("Black", "Soldier", 116);
    design.setup("Black", "Soldier", 120);
    design.setup("Black", "Soldier", 122);
    design.setup("Black", "Soldier", 126);
    design.setup("Black", "Soldier", 95);
    design.setup("Black", "Soldier", 97);
    design.setup("Black", "Soldier", 99);
    design.setup("Black", "Soldier", 101);
    design.setup("Black", "Soldier", 103);
    design.setup("Black", "Soldier", 74);
    design.setup("Black", "Soldier", 76);
    design.setup("Black", "Soldier", 78);
    design.setup("Black", "Soldier", 80);
    design.setup("Black", "Soldier", 53);
    design.setup("Black", "Soldier", 55);
    design.setup("Black", "Soldier", 57);
    design.setup("Black", "Captain", 118);
    design.setup("Black", "Captain", 124);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteSoldier", "White Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("WhiteCaptain", "White Captain");
    view.defPiece("BlackCaptain", "Black Captain");
 
    view.defPosition("a11", 0, 25, 30, 30);
    view.defPosition("b11", 26, 37, 30, 30);
    view.defPosition("c11", 52, 25, 30, 30);
    view.defPosition("d11", 78, 37, 30, 30);
    view.defPosition("e11", 104, 25, 30, 30);
    view.defPosition("f11", 130, 37, 30, 30);
    view.defPosition("g11", 156, 25, 30, 30);
    view.defPosition("h11", 182, 37, 30, 30);
    view.defPosition("i11", 206, 25, 30, 30);
    view.defPosition("j11", 232, 37, 30, 30);
    view.defPosition("k11", 258, 25, 30, 30);
    view.defPosition("l11", 285, 37, 30, 30);
    view.defPosition("m11", 311, 25, 30, 30);
    view.defPosition("n11", 337, 37, 30, 30);
    view.defPosition("o11", 363, 25, 30, 30);
    view.defPosition("p11", 391, 37, 30, 30);
    view.defPosition("q11", 417, 25, 30, 30);
    view.defPosition("r11", 442, 37, 30, 30);
    view.defPosition("s11", 468, 25, 30, 30);
    view.defPosition("t11", 494, 37, 30, 30);
    view.defPosition("u11", 520, 25, 30, 30);
    view.defPosition("v11", 546, 37, 30, 30);
    view.defPosition("a10", 0, 82, 30, 30);
    view.defPosition("b10", 26, 70, 30, 30);
    view.defPosition("c10", 52, 82, 30, 30);
    view.defPosition("d10", 78, 70, 30, 30);
    view.defPosition("e10", 104, 82, 30, 30);
    view.defPosition("f10", 130, 70, 30, 30);
    view.defPosition("g10", 156, 82, 30, 30);
    view.defPosition("h10", 182, 70, 30, 30);
    view.defPosition("i10", 207, 82, 30, 30);
    view.defPosition("j10", 233, 70, 30, 30);
    view.defPosition("k10", 259, 82, 30, 30);
    view.defPosition("l10", 285, 70, 30, 30);
    view.defPosition("m10", 311, 82, 30, 30);
    view.defPosition("n10", 337, 70, 30, 30);
    view.defPosition("o10", 363, 82, 30, 30);
    view.defPosition("p10", 390, 70, 30, 30);
    view.defPosition("q10", 416, 82, 30, 30);
    view.defPosition("r10", 442, 70, 30, 30);
    view.defPosition("s10", 468, 82, 30, 30);
    view.defPosition("t10", 494, 70, 30, 30);
    view.defPosition("u10", 520, 82, 30, 30);
    view.defPosition("v10", 546, 70, 30, 30);
    view.defPosition("a9", 0, 115, 30, 30);
    view.defPosition("b9", 26, 127, 30, 30);
    view.defPosition("c9", 52, 115, 30, 30);
    view.defPosition("d9", 78, 127, 30, 30);
    view.defPosition("e9", 104, 115, 30, 30);
    view.defPosition("f9", 130, 127, 30, 30);
    view.defPosition("g9", 156, 115, 30, 30);
    view.defPosition("h9", 181, 127, 30, 30);
    view.defPosition("i9", 207, 115, 30, 30);
    view.defPosition("j9", 233, 127, 30, 30);
    view.defPosition("k9", 259, 115, 30, 30);
    view.defPosition("l9", 285, 127, 30, 30);
    view.defPosition("m9", 311, 115, 30, 30);
    view.defPosition("n9", 336, 127, 30, 30);
    view.defPosition("o9", 362, 115, 30, 30);
    view.defPosition("p9", 388, 127, 30, 30);
    view.defPosition("q9", 415, 115, 30, 30);
    view.defPosition("r9", 441, 127, 30, 30);
    view.defPosition("s9", 467, 115, 30, 30);
    view.defPosition("t9", 494, 127, 30, 30);
    view.defPosition("u9", 520, 115, 30, 30);
    view.defPosition("v9", 546, 127, 30, 30);
    view.defPosition("a8", 0, 172, 30, 30);
    view.defPosition("b8", 26, 160, 30, 30);
    view.defPosition("c8", 52, 172, 30, 30);
    view.defPosition("d8", 78, 160, 30, 30);
    view.defPosition("e8", 104, 172, 30, 30);
    view.defPosition("f8", 130, 160, 30, 30);
    view.defPosition("g8", 155, 172, 30, 30);
    view.defPosition("h8", 181, 160, 30, 30);
    view.defPosition("i8", 207, 172, 30, 30);
    view.defPosition("j8", 233, 160, 30, 30);
    view.defPosition("k8", 259, 172, 30, 30);
    view.defPosition("l8", 285, 160, 30, 30);
    view.defPosition("m8", 310, 172, 30, 30);
    view.defPosition("n8", 336, 160, 30, 30);
    view.defPosition("o8", 362, 172, 30, 30);
    view.defPosition("p8", 388, 160, 30, 30);
    view.defPosition("q8", 414, 172, 30, 30);
    view.defPosition("r8", 440, 160, 30, 30);
    view.defPosition("s8", 466, 172, 30, 30);
    view.defPosition("t8", 492, 160, 30, 30);
    view.defPosition("u8", 518, 172, 30, 30);
    view.defPosition("v8", 544, 160, 30, 30);
    view.defPosition("a7", 0, 205, 30, 30);
    view.defPosition("b7", 26, 217, 30, 30);
    view.defPosition("c7", 52, 205, 30, 30);
    view.defPosition("d7", 78, 217, 30, 30);
    view.defPosition("e7", 104, 205, 30, 30);
    view.defPosition("f7", 130, 217, 30, 30);
    view.defPosition("g7", 156, 205, 30, 30);
    view.defPosition("h7", 182, 217, 30, 30);
    view.defPosition("i7", 207, 205, 30, 30);
    view.defPosition("j7", 233, 217, 30, 30);
    view.defPosition("k7", 259, 205, 30, 30);
    view.defPosition("l7", 285, 217, 30, 30);
    view.defPosition("m7", 311, 205, 30, 30);
    view.defPosition("n7", 336, 217, 30, 30);
    view.defPosition("o7", 362, 205, 30, 30);
    view.defPosition("p7", 388, 217, 30, 30);
    view.defPosition("q7", 414, 205, 30, 30);
    view.defPosition("r7", 440, 217, 30, 30);
    view.defPosition("s7", 466, 205, 30, 30);
    view.defPosition("t7", 492, 217, 30, 30);
    view.defPosition("u7", 518, 205, 30, 30);
    view.defPosition("v7", 544, 217, 30, 30);
    view.defPosition("a6", 0, 260, 30, 30);
    view.defPosition("b6", 26, 250, 30, 30);
    view.defPosition("c6", 52, 260, 30, 30);
    view.defPosition("d6", 78, 250, 30, 30);
    view.defPosition("e6", 104, 262, 30, 30);
    view.defPosition("f6", 130, 250, 30, 30);
    view.defPosition("g6", 156, 262, 30, 30);
    view.defPosition("h6", 182, 250, 30, 30);
    view.defPosition("i6", 208, 262, 30, 30);
    view.defPosition("j6", 233, 250, 30, 30);
    view.defPosition("k6", 259, 262, 30, 30);
    view.defPosition("l6", 285, 250, 30, 30);
    view.defPosition("m6", 311, 262, 30, 30);
    view.defPosition("n6", 336, 250, 30, 30);
    view.defPosition("o6", 362, 262, 30, 30);
    view.defPosition("p6", 388, 250, 30, 30);
    view.defPosition("q6", 414, 262, 30, 30);
    view.defPosition("r6", 440, 250, 30, 30);
    view.defPosition("s6", 466, 262, 30, 30);
    view.defPosition("t6", 492, 250, 30, 30);
    view.defPosition("u6", 518, 262, 30, 30);
    view.defPosition("v6", 544, 250, 30, 30);
    view.defPosition("a5", 0, 295, 30, 30);
    view.defPosition("b5", 26, 305, 30, 30);
    view.defPosition("c5", 52, 295, 30, 30);
    view.defPosition("d5", 78, 307, 30, 30);
    view.defPosition("e5", 104, 295, 30, 30);
    view.defPosition("f5", 130, 307, 30, 30);
    view.defPosition("g5", 156, 295, 30, 30);
    view.defPosition("h5", 182, 307, 30, 30);
    view.defPosition("i5", 207, 295, 30, 30);
    view.defPosition("j5", 233, 307, 30, 30);
    view.defPosition("k5", 259, 295, 30, 30);
    view.defPosition("l5", 285, 307, 30, 30);
    view.defPosition("m5", 311, 295, 30, 30);
    view.defPosition("n5", 337, 307, 30, 30);
    view.defPosition("o5", 362, 295, 30, 30);
    view.defPosition("p5", 388, 307, 30, 30);
    view.defPosition("q5", 414, 295, 30, 30);
    view.defPosition("r5", 440, 307, 30, 30);
    view.defPosition("s5", 466, 295, 30, 30);
    view.defPosition("t5", 492, 307, 30, 30);
    view.defPosition("u5", 518, 295, 30, 30);
    view.defPosition("v5", 544, 307, 30, 30);
    view.defPosition("a4", 0, 350, 30, 30);
    view.defPosition("b4", 26, 340, 30, 30);
    view.defPosition("c4", 53, 352, 30, 30);
    view.defPosition("d4", 78, 340, 30, 30);
    view.defPosition("e4", 104, 352, 30, 30);
    view.defPosition("f4", 130, 340, 30, 30);
    view.defPosition("g4", 156, 352, 30, 30);
    view.defPosition("h4", 182, 340, 30, 30);
    view.defPosition("i4", 208, 352, 30, 30);
    view.defPosition("j4", 233, 340, 30, 30);
    view.defPosition("k4", 259, 352, 30, 30);
    view.defPosition("l4", 285, 340, 30, 30);
    view.defPosition("m4", 311, 352, 30, 30);
    view.defPosition("n4", 336, 340, 30, 30);
    view.defPosition("o4", 362, 352, 30, 30);
    view.defPosition("p4", 388, 340, 30, 30);
    view.defPosition("q4", 414, 352, 30, 30);
    view.defPosition("r4", 440, 340, 30, 30);
    view.defPosition("s4", 465, 352, 30, 30);
    view.defPosition("t4", 491, 340, 30, 30);
    view.defPosition("u4", 517, 352, 30, 30);
    view.defPosition("v4", 543, 340, 30, 30);
    view.defPosition("a3", 0, 385, 30, 30);
    view.defPosition("b3", 27, 397, 30, 30);
    view.defPosition("c3", 53, 385, 30, 30);
    view.defPosition("d3", 78, 397, 30, 30);
    view.defPosition("e3", 104, 385, 30, 30);
    view.defPosition("f3", 130, 397, 30, 30);
    view.defPosition("g3", 156, 385, 30, 30);
    view.defPosition("h3", 182, 397, 30, 30);
    view.defPosition("i3", 207, 385, 30, 30);
    view.defPosition("j3", 233, 397, 30, 30);
    view.defPosition("k3", 259, 385, 30, 30);
    view.defPosition("l3", 285, 397, 30, 30);
    view.defPosition("m3", 311, 385, 30, 30);
    view.defPosition("n3", 337, 397, 30, 30);
    view.defPosition("o3", 362, 385, 30, 30);
    view.defPosition("p3", 388, 397, 30, 30);
    view.defPosition("q3", 414, 385, 30, 30);
    view.defPosition("r3", 440, 397, 30, 30);
    view.defPosition("s3", 465, 385, 30, 30);
    view.defPosition("t3", 491, 397, 30, 30);
    view.defPosition("u3", 517, 385, 30, 30);
    view.defPosition("v3", 543, 397, 30, 30);
    view.defPosition("a2", 0, 440, 30, 30);
    view.defPosition("b2", 26, 430, 30, 30);
    view.defPosition("c2", 52, 443, 30, 30);
    view.defPosition("d2", 78, 430, 30, 30);
    view.defPosition("e2", 104, 443, 30, 30);
    view.defPosition("f2", 130, 430, 30, 30);
    view.defPosition("g2", 156, 443, 30, 30);
    view.defPosition("h2", 182, 430, 30, 30);
    view.defPosition("i2", 207, 443, 30, 30);
    view.defPosition("j2", 233, 430, 30, 30);
    view.defPosition("k2", 259, 443, 30, 30);
    view.defPosition("l2", 285, 430, 30, 30);
    view.defPosition("m2", 311, 443, 30, 30);
    view.defPosition("n2", 337, 430, 30, 30);
    view.defPosition("o2", 362, 443, 30, 30);
    view.defPosition("p2", 388, 430, 30, 30);
    view.defPosition("q2", 414, 443, 30, 30);
    view.defPosition("r2", 440, 430, 30, 30);
    view.defPosition("s2", 466, 443, 30, 30);
    view.defPosition("t2", 491, 430, 30, 30);
    view.defPosition("u2", 518, 443, 30, 30);
    view.defPosition("v2", 543, 430, 30, 30);
    view.defPosition("a1", 0, 475, 30, 30);
    view.defPosition("b1", 26, 485, 30, 30);
    view.defPosition("c1", 53, 475, 30, 30);
    view.defPosition("d1", 78, 488, 30, 30);
    view.defPosition("e1", 104, 475, 30, 30);
    view.defPosition("f1", 130, 488, 30, 30);
    view.defPosition("g1", 156, 475, 30, 30);
    view.defPosition("h1", 182, 488, 30, 30);
    view.defPosition("i1", 207, 475, 30, 30);
    view.defPosition("j1", 233, 488, 30, 30);
    view.defPosition("k1", 259, 475, 30, 30);
    view.defPosition("l1", 285, 488, 30, 30);
    view.defPosition("m1", 311, 475, 30, 30);
    view.defPosition("n1", 336, 488, 30, 30);
    view.defPosition("o1", 362, 475, 30, 30);
    view.defPosition("p1", 388, 488, 30, 30);
    view.defPosition("q1", 414, 475, 30, 30);
    view.defPosition("r1", 440, 488, 30, 30);
    view.defPosition("s1", 465, 475, 30, 30);
    view.defPosition("t1", 491, 488, 30, 30);
    view.defPosition("u1", 517, 475, 30, 30);
    view.defPosition("v1", 543, 488, 30, 30);
}