Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;
Dagaz.Model.showLose = true;

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Pink", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Orange", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Yellow", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Cyan", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Navy", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Violet", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Ash", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Slate", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addTurn(1);
    design.addTurn(2);


    design.addPosition("a12", [13, 12, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("c12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("d12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("e12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("f12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("g12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("h12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("i12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("j12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("k12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-zone", 1, [77, 78, 65, 66]);
    design.addZone("promotion-zone", 2, [77, 78, 65, 66]);
    design.addZone("white-zone", 1, [52, 91]);
    design.addZone("white-zone", 2, [52, 91]);
    design.addZone("black-zone", 1, [88, 55]);
    design.addZone("black-zone", 2, [88, 55]);
    design.addZone("pink-zone", 1, [53, 90]);
    design.addZone("pink-zone", 2, [53, 90]);
    design.addZone("red-zone", 1, [40, 103]);
    design.addZone("red-zone", 2, [40, 103]);
    design.addZone("orange-zone", 1, [51, 92]);
    design.addZone("orange-zone", 2, [51, 92]);
    design.addZone("yellow-zone", 1, [64, 79]);
    design.addZone("yellow-zone", 2, [64, 79]);
    design.addZone("green-zone", 1, [76, 67]);
    design.addZone("green-zone", 2, [76, 67]);
    design.addZone("cyan-zone", 1, [87, 56]);
    design.addZone("cyan-zone", 2, [87, 56]);
    design.addZone("navy-zone", 1, [100, 43]);
    design.addZone("navy-zone", 2, [100, 43]);
    design.addZone("violet-zone", 1, [89, 54]);
    design.addZone("violet-zone", 2, [89, 54]);
    design.addZone("ash-zone", 1, []);
    design.addZone("ash-zone", 2, []);
    design.addZone("slate-zone", 1, []);
    design.addZone("slate-zone", 2, []);
    design.addZone("v-zone", 1, [137, 138, 125, 126, 113, 114, 101, 102, 89, 90, 53, 54, 41, 42, 29, 30, 17, 18, 5, 6]);
    design.addZone("v-zone", 2, [137, 138, 125, 126, 113, 114, 101, 102, 89, 90, 53, 54, 41, 42, 29, 30, 17, 18, 5, 6]);
    design.addZone("h-zone", 1, [72, 60, 73, 61, 74, 62, 75, 63, 76, 64, 79, 67, 80, 68, 81, 69, 82, 70, 83, 71]);
    design.addZone("h-zone", 2, [72, 60, 73, 61, 74, 62, 75, 63, 76, 64, 79, 67, 80, 68, 81, 69, 82, 70, 83, 71]);
    design.addZone("sw-zone", 1, [132, 133, 134, 135, 136, 137, 120, 121, 122, 123, 124, 125, 108, 109, 110, 111, 112, 113, 96, 97, 98, 99, 100, 101, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77]);
    design.addZone("sw-zone", 2, [132, 133, 134, 135, 136, 137, 120, 121, 122, 123, 124, 125, 108, 109, 110, 111, 112, 113, 96, 97, 98, 99, 100, 101, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77]);
    design.addZone("nw-zone", 1, [60, 61, 62, 63, 64, 65, 48, 49, 50, 51, 52, 53, 36, 37, 38, 39, 40, 41, 24, 25, 26, 27, 28, 29, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5]);
    design.addZone("nw-zone", 2, [60, 61, 62, 63, 64, 65, 48, 49, 50, 51, 52, 53, 36, 37, 38, 39, 40, 41, 24, 25, 26, 27, 28, 29, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5]);
    design.addZone("ne-zone", 1, [66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 42, 43, 44, 45, 46, 47, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 6, 7, 8, 9, 10, 11]);
    design.addZone("ne-zone", 2, [66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 42, 43, 44, 45, 46, 47, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 6, 7, 8, 9, 10, 11]);
    design.addZone("se-zone", 1, [138, 139, 140, 141, 142, 143, 126, 127, 128, 129, 130, 131, 114, 115, 116, 117, 118, 119, 102, 103, 104, 105, 106, 107, 90, 91, 92, 93, 94, 95, 78, 79, 80, 81, 82, 83]);
    design.addZone("se-zone", 2, [138, 139, 140, 141, 142, 143, 126, 127, 128, 129, 130, 131, 114, 115, 116, 117, 118, 119, 102, 103, 104, 105, 106, 107, 90, 91, 92, 93, 94, 95, 78, 79, 80, 81, 82, 83]);
    design.addZone("n-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("n-zone", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("e-zone", 1, [142, 130, 118, 106, 94, 82, 70, 58, 46, 34, 22, 10, 143, 131, 119, 107, 95, 83, 71, 59, 47, 35, 23, 11]);
    design.addZone("e-zone", 2, [142, 130, 118, 106, 94, 82, 70, 58, 46, 34, 22, 10, 143, 131, 119, 107, 95, 83, 71, 59, 47, 35, 23, 11]);
    design.addZone("w-zone", 1, [132, 120, 108, 96, 84, 72, 60, 48, 36, 24, 12, 0, 133, 121, 109, 97, 85, 73, 61, 49, 37, 25, 13, 1]);
    design.addZone("w-zone", 2, [132, 120, 108, 96, 84, 72, 60, 48, 36, 24, 12, 0, 133, 121, 109, 97, 85, 73, 61, 49, 37, 25, 13, 1]);
    design.addZone("s-zone", 1, [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131]);
    design.addZone("s-zone", 2, [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	22);	// s-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	21);	// w-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	19);	// n-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	20);	// e-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 2, [1, 1], 0);
    design.addMove(0, 3, [4, 4], 0);
    design.addMove(0, 4, [7], 0);
    design.addMove(0, 4, [3], 0);
    design.addMove(0, 4, [1], 0);
    design.addMove(0, 4, [4], 0);
    design.addMove(0, 5, [6], 0);
    design.addMove(0, 5, [5], 0);
    design.addMove(0, 5, [2], 0);
    design.addMove(0, 5, [0], 0);

    design.addPiece("Rook", 1);
    design.addMove(1, 6, [7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(1, 6, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(1, 6, [4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(1, 6, [1, 1, 1, 1, 1, 1, 1, 1], 0);

    design.addPiece("Knight", 2);
    design.addMove(2, 7, [7, 6], 0);
    design.addMove(2, 7, [7, 5], 0);
    design.addMove(2, 7, [1, 2], 0);
    design.addMove(2, 7, [1, 0], 0);
    design.addMove(2, 7, [4, 6], 0);
    design.addMove(2, 7, [4, 2], 0);
    design.addMove(2, 7, [3, 5], 0);
    design.addMove(2, 7, [3, 0], 0);

    design.addPiece("Bishop", 3);
    design.addMove(3, 6, [6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(3, 6, [5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(3, 6, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(3, 6, [0, 0, 0, 0, 0, 0, 0, 0], 0);

    design.addPiece("Queen", 4);
    design.addMove(4, 6, [7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(4, 6, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(4, 6, [4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(4, 6, [1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(4, 6, [6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(4, 6, [5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(4, 6, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(4, 6, [0, 0, 0, 0, 0, 0, 0, 0], 0);

    design.addPiece("King", 5);
    design.addMove(5, 8, [7], 0);
    design.addMove(5, 8, [3], 0);
    design.addMove(5, 8, [4], 0);
    design.addMove(5, 8, [1], 0);
    design.addMove(5, 8, [6], 0);
    design.addMove(5, 8, [5], 0);
    design.addMove(5, 8, [2], 0);
    design.addMove(5, 8, [0], 0);

    design.setup("White", "Pawn", 122);
    design.setup("White", "Pawn", 123);
    design.setup("White", "Pawn", 124);
    design.setup("White", "Pawn", 125);
    design.setup("White", "Pawn", 126);
    design.setup("White", "Pawn", 127);
    design.setup("White", "Pawn", 128);
    design.setup("White", "Pawn", 129);
    design.setup("White", "Rook", 134);
    design.setup("White", "Rook", 141);
    design.setup("White", "Knight", 135);
    design.setup("White", "Knight", 140);
    design.setup("White", "Bishop", 136);
    design.setup("White", "Bishop", 139);
    design.setup("White", "Queen", 137);
    design.setup("White", "King", 138);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Rook", 2);
    design.setup("Black", "Rook", 9);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Knight", 8);
    design.setup("Black", "Bishop", 4);
    design.setup("Black", "Bishop", 7);
    design.setup("Black", "Queen", 5);
    design.setup("Black", "King", 6);
    design.setup("Pink", "Pawn", 85);
    design.setup("Pink", "Pawn", 73);
    design.setup("Pink", "Rook", 131);
    design.setup("Pink", "Knight", 13);
    design.setup("Pink", "Bishop", 84);
    design.setup("Pink", "Queen", 72);
    design.setup("Green", "Pawn", 94);
    design.setup("Green", "Pawn", 82);
    design.setup("Green", "Rook", 120);
    design.setup("Green", "Knight", 22);
    design.setup("Green", "Bishop", 95);
    design.setup("Green", "Queen", 83);
    design.setup("Red", "Pawn", 109);
    design.setup("Red", "Pawn", 97);
    design.setup("Red", "Rook", 108);
    design.setup("Red", "Knight", 96);
    design.setup("Red", "Bishop", 142);
    design.setup("Red", "Queen", 0);
    design.setup("Orange", "Pawn", 46);
    design.setup("Orange", "Pawn", 34);
    design.setup("Orange", "Rook", 35);
    design.setup("Orange", "Knight", 47);
    design.setup("Orange", "Bishop", 1);
    design.setup("Orange", "Queen", 143);
    design.setup("Yellow", "Pawn", 70);
    design.setup("Yellow", "Pawn", 58);
    design.setup("Yellow", "Rook", 12);
    design.setup("Yellow", "Knight", 130);
    design.setup("Yellow", "Bishop", 59);
    design.setup("Yellow", "Queen", 71);
    design.setup("Cyan", "Pawn", 118);
    design.setup("Cyan", "Pawn", 106);
    design.setup("Cyan", "Rook", 119);
    design.setup("Cyan", "Knight", 107);
    design.setup("Cyan", "Bishop", 133);
    design.setup("Cyan", "Queen", 11);
    design.setup("Navy", "Pawn", 37);
    design.setup("Navy", "Pawn", 25);
    design.setup("Navy", "Rook", 24);
    design.setup("Navy", "Knight", 36);
    design.setup("Navy", "Bishop", 10);
    design.setup("Navy", "Queen", 132);
    design.setup("Violet", "Pawn", 61);
    design.setup("Violet", "Pawn", 49);
    design.setup("Violet", "Rook", 23);
    design.setup("Violet", "Knight", 121);
    design.setup("Violet", "Bishop", 48);
    design.setup("Violet", "Queen", 60);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("PinkPawn", "Pink Pawn");
    view.defPiece("RedPawn", "Red Pawn");
    view.defPiece("OrangePawn", "Orange Pawn");
    view.defPiece("YellowPawn", "Yellow Pawn");
    view.defPiece("GreenPawn", "Green Pawn");
    view.defPiece("CyanPawn", "Cyan Pawn");
    view.defPiece("NavyPawn", "Navy Pawn");
    view.defPiece("VioletPawn", "Violet Pawn");
    view.defPiece("AshPawn", "Ash Pawn");
    view.defPiece("SlatePawn", "Slate Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("PinkRook", "Pink Rook");
    view.defPiece("RedRook", "Red Rook");
    view.defPiece("OrangeRook", "Orange Rook");
    view.defPiece("YellowRook", "Yellow Rook");
    view.defPiece("GreenRook", "Green Rook");
    view.defPiece("CyanRook", "Cyan Rook");
    view.defPiece("NavyRook", "Navy Rook");
    view.defPiece("VioletRook", "Violet Rook");
    view.defPiece("AshRook", "Ash Rook");
    view.defPiece("SlateRook", "Slate Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("PinkKnight", "Pink Knight");
    view.defPiece("RedKnight", "Red Knight");
    view.defPiece("OrangeKnight", "Orange Knight");
    view.defPiece("YellowKnight", "Yellow Knight");
    view.defPiece("GreenKnight", "Green Knight");
    view.defPiece("CyanKnight", "Cyan Knight");
    view.defPiece("NavyKnight", "Navy Knight");
    view.defPiece("VioletKnight", "Violet Knight");
    view.defPiece("AshKnight", "Ash Knight");
    view.defPiece("SlateKnight", "Slate Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("PinkBishop", "Pink Bishop");
    view.defPiece("RedBishop", "Red Bishop");
    view.defPiece("OrangeBishop", "Orange Bishop");
    view.defPiece("YellowBishop", "Yellow Bishop");
    view.defPiece("GreenBishop", "Green Bishop");
    view.defPiece("CyanBishop", "Cyan Bishop");
    view.defPiece("NavyBishop", "Navy Bishop");
    view.defPiece("VioletBishop", "Violet Bishop");
    view.defPiece("AshBishop", "Ash Bishop");
    view.defPiece("SlateBishop", "Slate Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("PinkQueen", "Pink Queen");
    view.defPiece("RedQueen", "Red Queen");
    view.defPiece("OrangeQueen", "Orange Queen");
    view.defPiece("YellowQueen", "Yellow Queen");
    view.defPiece("GreenQueen", "Green Queen");
    view.defPiece("CyanQueen", "Cyan Queen");
    view.defPiece("NavyQueen", "Navy Queen");
    view.defPiece("VioletQueen", "Violet Queen");
    view.defPiece("AshQueen", "Ash Queen");
    view.defPiece("SlateQueen", "Slate Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("PinkKing", "Pink King");
    view.defPiece("RedKing", "Red King");
    view.defPiece("OrangeKing", "Orange King");
    view.defPiece("YellowKing", "Yellow King");
    view.defPiece("GreenKing", "Green King");
    view.defPiece("CyanKing", "Cyan King");
    view.defPiece("NavyKing", "Navy King");
    view.defPiece("VioletKing", "Violet King");
    view.defPiece("AshKing", "Ash King");
    view.defPiece("SlateKing", "Slate King");
 
    view.defPosition("a12", 1, 3, 46, 46);
    view.defPosition("b12", 46, 3, 46, 46);
    view.defPosition("c12", 91, 3, 46, 46);
    view.defPosition("d12", 136, 3, 46, 46);
    view.defPosition("e12", 181, 3, 46, 46);
    view.defPosition("f12", 226, 3, 46, 46);
    view.defPosition("g12", 271, 3, 46, 46);
    view.defPosition("h12", 316, 3, 46, 46);
    view.defPosition("i12", 361, 3, 46, 46);
    view.defPosition("j12", 406, 3, 46, 46);
    view.defPosition("k12", 451, 3, 46, 46);
    view.defPosition("l12", 496, 3, 46, 46);
    view.defPosition("a11", 1, 48, 46, 46);
    view.defPosition("b11", 46, 48, 46, 46);
    view.defPosition("c11", 91, 48, 46, 46);
    view.defPosition("d11", 136, 48, 46, 46);
    view.defPosition("e11", 181, 48, 46, 46);
    view.defPosition("f11", 226, 48, 46, 46);
    view.defPosition("g11", 271, 48, 46, 46);
    view.defPosition("h11", 316, 48, 46, 46);
    view.defPosition("i11", 361, 48, 46, 46);
    view.defPosition("j11", 406, 48, 46, 46);
    view.defPosition("k11", 451, 48, 46, 46);
    view.defPosition("l11", 496, 48, 46, 46);
    view.defPosition("a10", 1, 93, 46, 46);
    view.defPosition("b10", 46, 93, 46, 46);
    view.defPosition("c10", 91, 93, 46, 46);
    view.defPosition("d10", 136, 93, 46, 46);
    view.defPosition("e10", 181, 93, 46, 46);
    view.defPosition("f10", 226, 93, 46, 46);
    view.defPosition("g10", 271, 93, 46, 46);
    view.defPosition("h10", 316, 93, 46, 46);
    view.defPosition("i10", 361, 93, 46, 46);
    view.defPosition("j10", 406, 93, 46, 46);
    view.defPosition("k10", 451, 93, 46, 46);
    view.defPosition("l10", 496, 93, 46, 46);
    view.defPosition("a9", 1, 138, 46, 46);
    view.defPosition("b9", 46, 138, 46, 46);
    view.defPosition("c9", 91, 138, 46, 46);
    view.defPosition("d9", 136, 138, 46, 46);
    view.defPosition("e9", 181, 138, 46, 46);
    view.defPosition("f9", 226, 138, 46, 46);
    view.defPosition("g9", 271, 138, 46, 46);
    view.defPosition("h9", 316, 138, 46, 46);
    view.defPosition("i9", 361, 138, 46, 46);
    view.defPosition("j9", 406, 138, 46, 46);
    view.defPosition("k9", 451, 138, 46, 46);
    view.defPosition("l9", 496, 138, 46, 46);
    view.defPosition("a8", 1, 183, 46, 46);
    view.defPosition("b8", 46, 183, 46, 46);
    view.defPosition("c8", 91, 183, 46, 46);
    view.defPosition("d8", 136, 183, 46, 46);
    view.defPosition("e8", 181, 183, 46, 46);
    view.defPosition("f8", 226, 183, 46, 46);
    view.defPosition("g8", 271, 183, 46, 46);
    view.defPosition("h8", 316, 183, 46, 46);
    view.defPosition("i8", 361, 183, 46, 46);
    view.defPosition("j8", 406, 183, 46, 46);
    view.defPosition("k8", 451, 183, 46, 46);
    view.defPosition("l8", 496, 183, 46, 46);
    view.defPosition("a7", 1, 228, 46, 46);
    view.defPosition("b7", 46, 228, 46, 46);
    view.defPosition("c7", 91, 228, 46, 46);
    view.defPosition("d7", 136, 228, 46, 46);
    view.defPosition("e7", 181, 228, 46, 46);
    view.defPosition("f7", 226, 228, 46, 46);
    view.defPosition("g7", 271, 228, 46, 46);
    view.defPosition("h7", 316, 228, 46, 46);
    view.defPosition("i7", 361, 228, 46, 46);
    view.defPosition("j7", 406, 228, 46, 46);
    view.defPosition("k7", 451, 228, 46, 46);
    view.defPosition("l7", 496, 228, 46, 46);
    view.defPosition("a6", 1, 273, 46, 46);
    view.defPosition("b6", 46, 273, 46, 46);
    view.defPosition("c6", 91, 273, 46, 46);
    view.defPosition("d6", 136, 273, 46, 46);
    view.defPosition("e6", 181, 273, 46, 46);
    view.defPosition("f6", 226, 273, 46, 46);
    view.defPosition("g6", 271, 273, 46, 46);
    view.defPosition("h6", 316, 273, 46, 46);
    view.defPosition("i6", 361, 273, 46, 46);
    view.defPosition("j6", 406, 273, 46, 46);
    view.defPosition("k6", 451, 273, 46, 46);
    view.defPosition("l6", 496, 273, 46, 46);
    view.defPosition("a5", 1, 318, 46, 46);
    view.defPosition("b5", 46, 318, 46, 46);
    view.defPosition("c5", 91, 318, 46, 46);
    view.defPosition("d5", 136, 318, 46, 46);
    view.defPosition("e5", 181, 318, 46, 46);
    view.defPosition("f5", 226, 318, 46, 46);
    view.defPosition("g5", 271, 318, 46, 46);
    view.defPosition("h5", 316, 318, 46, 46);
    view.defPosition("i5", 361, 318, 46, 46);
    view.defPosition("j5", 406, 318, 46, 46);
    view.defPosition("k5", 451, 318, 46, 46);
    view.defPosition("l5", 496, 318, 46, 46);
    view.defPosition("a4", 1, 363, 46, 46);
    view.defPosition("b4", 46, 363, 46, 46);
    view.defPosition("c4", 91, 363, 46, 46);
    view.defPosition("d4", 136, 363, 46, 46);
    view.defPosition("e4", 181, 363, 46, 46);
    view.defPosition("f4", 226, 363, 46, 46);
    view.defPosition("g4", 271, 363, 46, 46);
    view.defPosition("h4", 316, 363, 46, 46);
    view.defPosition("i4", 361, 363, 46, 46);
    view.defPosition("j4", 406, 363, 46, 46);
    view.defPosition("k4", 451, 363, 46, 46);
    view.defPosition("l4", 496, 363, 46, 46);
    view.defPosition("a3", 1, 408, 46, 46);
    view.defPosition("b3", 46, 408, 46, 46);
    view.defPosition("c3", 91, 408, 46, 46);
    view.defPosition("d3", 136, 408, 46, 46);
    view.defPosition("e3", 181, 408, 46, 46);
    view.defPosition("f3", 226, 408, 46, 46);
    view.defPosition("g3", 271, 408, 46, 46);
    view.defPosition("h3", 316, 408, 46, 46);
    view.defPosition("i3", 361, 408, 46, 46);
    view.defPosition("j3", 406, 408, 46, 46);
    view.defPosition("k3", 451, 408, 46, 46);
    view.defPosition("l3", 496, 408, 46, 46);
    view.defPosition("a2", 1, 453, 46, 46);
    view.defPosition("b2", 46, 453, 46, 46);
    view.defPosition("c2", 91, 453, 46, 46);
    view.defPosition("d2", 136, 453, 46, 46);
    view.defPosition("e2", 181, 453, 46, 46);
    view.defPosition("f2", 226, 453, 46, 46);
    view.defPosition("g2", 271, 453, 46, 46);
    view.defPosition("h2", 316, 453, 46, 46);
    view.defPosition("i2", 361, 453, 46, 46);
    view.defPosition("j2", 406, 453, 46, 46);
    view.defPosition("k2", 451, 453, 46, 46);
    view.defPosition("l2", 496, 453, 46, 46);
    view.defPosition("a1", 1, 498, 46, 46);
    view.defPosition("b1", 46, 498, 46, 46);
    view.defPosition("c1", 91, 498, 46, 46);
    view.defPosition("d1", 136, 498, 46, 46);
    view.defPosition("e1", 181, 498, 46, 46);
    view.defPosition("f1", 226, 498, 46, 46);
    view.defPosition("g1", 271, 498, 46, 46);
    view.defPosition("h1", 316, 498, 46, 46);
    view.defPosition("i1", 361, 498, 46, 46);
    view.defPosition("j1", 406, 498, 46, 46);
    view.defPosition("k1", 451, 498, 46, 46);
    view.defPosition("l1", 496, 498, 46, 46);

    view.defPopup("Promote", 189, 130);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
}