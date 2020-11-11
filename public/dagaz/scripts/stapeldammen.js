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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Red", [3, 2, 1, 0]);

    design.addPosition("a10", [11, 0, 0, 0]);
    design.addPosition("b10", [11, 9, 0, 0]);
    design.addPosition("c10", [11, 9, 0, 0]);
    design.addPosition("d10", [11, 9, 0, 0]);
    design.addPosition("e10", [11, 9, 0, 0]);
    design.addPosition("f10", [11, 9, 0, 0]);
    design.addPosition("g10", [11, 9, 0, 0]);
    design.addPosition("h10", [11, 9, 0, 0]);
    design.addPosition("i10", [11, 9, 0, 0]);
    design.addPosition("j10", [0, 9, 0, 0]);
    design.addPosition("a9", [11, 0, -9, 0]);
    design.addPosition("b9", [11, 9, -9, -11]);
    design.addPosition("c9", [11, 9, -9, -11]);
    design.addPosition("d9", [11, 9, -9, -11]);
    design.addPosition("e9", [11, 9, -9, -11]);
    design.addPosition("f9", [11, 9, -9, -11]);
    design.addPosition("g9", [11, 9, -9, -11]);
    design.addPosition("h9", [11, 9, -9, -11]);
    design.addPosition("i9", [11, 9, -9, -11]);
    design.addPosition("j9", [0, 9, 0, -11]);
    design.addPosition("a8", [11, 0, -9, 0]);
    design.addPosition("b8", [11, 9, -9, -11]);
    design.addPosition("c8", [11, 9, -9, -11]);
    design.addPosition("d8", [11, 9, -9, -11]);
    design.addPosition("e8", [11, 9, -9, -11]);
    design.addPosition("f8", [11, 9, -9, -11]);
    design.addPosition("g8", [11, 9, -9, -11]);
    design.addPosition("h8", [11, 9, -9, -11]);
    design.addPosition("i8", [11, 9, -9, -11]);
    design.addPosition("j8", [0, 9, 0, -11]);
    design.addPosition("a7", [11, 0, -9, 0]);
    design.addPosition("b7", [11, 9, -9, -11]);
    design.addPosition("c7", [11, 9, -9, -11]);
    design.addPosition("d7", [11, 9, -9, -11]);
    design.addPosition("e7", [11, 9, -9, -11]);
    design.addPosition("f7", [11, 9, -9, -11]);
    design.addPosition("g7", [11, 9, -9, -11]);
    design.addPosition("h7", [11, 9, -9, -11]);
    design.addPosition("i7", [11, 9, -9, -11]);
    design.addPosition("j7", [0, 9, 0, -11]);
    design.addPosition("a6", [11, 0, -9, 0]);
    design.addPosition("b6", [11, 9, -9, -11]);
    design.addPosition("c6", [11, 9, -9, -11]);
    design.addPosition("d6", [11, 9, -9, -11]);
    design.addPosition("e6", [11, 9, -9, -11]);
    design.addPosition("f6", [11, 9, -9, -11]);
    design.addPosition("g6", [11, 9, -9, -11]);
    design.addPosition("h6", [11, 9, -9, -11]);
    design.addPosition("i6", [11, 9, -9, -11]);
    design.addPosition("j6", [0, 9, 0, -11]);
    design.addPosition("a5", [11, 0, -9, 0]);
    design.addPosition("b5", [11, 9, -9, -11]);
    design.addPosition("c5", [11, 9, -9, -11]);
    design.addPosition("d5", [11, 9, -9, -11]);
    design.addPosition("e5", [11, 9, -9, -11]);
    design.addPosition("f5", [11, 9, -9, -11]);
    design.addPosition("g5", [11, 9, -9, -11]);
    design.addPosition("h5", [11, 9, -9, -11]);
    design.addPosition("i5", [11, 9, -9, -11]);
    design.addPosition("j5", [0, 9, 0, -11]);
    design.addPosition("a4", [11, 0, -9, 0]);
    design.addPosition("b4", [11, 9, -9, -11]);
    design.addPosition("c4", [11, 9, -9, -11]);
    design.addPosition("d4", [11, 9, -9, -11]);
    design.addPosition("e4", [11, 9, -9, -11]);
    design.addPosition("f4", [11, 9, -9, -11]);
    design.addPosition("g4", [11, 9, -9, -11]);
    design.addPosition("h4", [11, 9, -9, -11]);
    design.addPosition("i4", [11, 9, -9, -11]);
    design.addPosition("j4", [0, 9, 0, -11]);
    design.addPosition("a3", [11, 0, -9, 0]);
    design.addPosition("b3", [11, 9, -9, -11]);
    design.addPosition("c3", [11, 9, -9, -11]);
    design.addPosition("d3", [11, 9, -9, -11]);
    design.addPosition("e3", [11, 9, -9, -11]);
    design.addPosition("f3", [11, 9, -9, -11]);
    design.addPosition("g3", [11, 9, -9, -11]);
    design.addPosition("h3", [11, 9, -9, -11]);
    design.addPosition("i3", [11, 9, -9, -11]);
    design.addPosition("j3", [0, 9, 0, -11]);
    design.addPosition("a2", [11, 0, -9, 0]);
    design.addPosition("b2", [11, 9, -9, -11]);
    design.addPosition("c2", [11, 9, -9, -11]);
    design.addPosition("d2", [11, 9, -9, -11]);
    design.addPosition("e2", [11, 9, -9, -11]);
    design.addPosition("f2", [11, 9, -9, -11]);
    design.addPosition("g2", [11, 9, -9, -11]);
    design.addPosition("h2", [11, 9, -9, -11]);
    design.addPosition("i2", [11, 9, -9, -11]);
    design.addPosition("j2", [0, 9, 0, -11]);
    design.addPosition("a1", [0, 0, -9, 0]);
    design.addPosition("b1", [0, 0, -9, -11]);
    design.addPosition("c1", [0, 0, -9, -11]);
    design.addPosition("d1", [0, 0, -9, -11]);
    design.addPosition("e1", [0, 0, -9, -11]);
    design.addPosition("f1", [0, 0, -9, -11]);
    design.addPosition("g1", [0, 0, -9, -11]);
    design.addPosition("h1", [0, 0, -9, -11]);
    design.addPosition("i1", [0, 0, -9, -11]);
    design.addPosition("j1", [0, 0, 0, -11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [2], 1);

    design.setup("White", "Man", 90);
    design.setup("White", "Man", 92);
    design.setup("White", "Man", 94);
    design.setup("White", "Man", 96);
    design.setup("White", "Man", 98);
    design.setup("White", "Man", 81);
    design.setup("White", "Man", 83);
    design.setup("White", "Man", 85);
    design.setup("White", "Man", 87);
    design.setup("White", "Man", 89);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 74);
    design.setup("White", "Man", 76);
    design.setup("White", "Man", 78);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 63);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 69);
    design.setup("Red", "Man", 1);
    design.setup("Red", "Man", 3);
    design.setup("Red", "Man", 5);
    design.setup("Red", "Man", 7);
    design.setup("Red", "Man", 9);
    design.setup("Red", "Man", 10);
    design.setup("Red", "Man", 12);
    design.setup("Red", "Man", 14);
    design.setup("Red", "Man", 16);
    design.setup("Red", "Man", 18);
    design.setup("Red", "Man", 21);
    design.setup("Red", "Man", 23);
    design.setup("Red", "Man", 25);
    design.setup("Red", "Man", 27);
    design.setup("Red", "Man", 29);
    design.setup("Red", "Man", 30);
    design.setup("Red", "Man", 32);
    design.setup("Red", "Man", 34);
    design.setup("Red", "Man", 36);
    design.setup("Red", "Man", 38);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("RedMan", "Red Man");
 
    view.defPosition("a10", 2, 2, 68, 68);
    view.defPosition("b10", 70, 2, 68, 68);
    view.defPosition("c10", 138, 2, 68, 68);
    view.defPosition("d10", 206, 2, 68, 68);
    view.defPosition("e10", 274, 2, 68, 68);
    view.defPosition("f10", 342, 2, 68, 68);
    view.defPosition("g10", 410, 2, 68, 68);
    view.defPosition("h10", 478, 2, 68, 68);
    view.defPosition("i10", 546, 2, 68, 68);
    view.defPosition("j10", 614, 2, 68, 68);
    view.defPosition("a9", 2, 70, 68, 68);
    view.defPosition("b9", 70, 70, 68, 68);
    view.defPosition("c9", 138, 70, 68, 68);
    view.defPosition("d9", 206, 70, 68, 68);
    view.defPosition("e9", 274, 70, 68, 68);
    view.defPosition("f9", 342, 70, 68, 68);
    view.defPosition("g9", 410, 70, 68, 68);
    view.defPosition("h9", 478, 70, 68, 68);
    view.defPosition("i9", 546, 70, 68, 68);
    view.defPosition("j9", 614, 70, 68, 68);
    view.defPosition("a8", 2, 138, 68, 68);
    view.defPosition("b8", 70, 138, 68, 68);
    view.defPosition("c8", 138, 138, 68, 68);
    view.defPosition("d8", 206, 138, 68, 68);
    view.defPosition("e8", 274, 138, 68, 68);
    view.defPosition("f8", 342, 138, 68, 68);
    view.defPosition("g8", 410, 138, 68, 68);
    view.defPosition("h8", 478, 138, 68, 68);
    view.defPosition("i8", 546, 138, 68, 68);
    view.defPosition("j8", 614, 138, 68, 68);
    view.defPosition("a7", 2, 206, 68, 68);
    view.defPosition("b7", 70, 206, 68, 68);
    view.defPosition("c7", 138, 206, 68, 68);
    view.defPosition("d7", 206, 206, 68, 68);
    view.defPosition("e7", 274, 206, 68, 68);
    view.defPosition("f7", 342, 206, 68, 68);
    view.defPosition("g7", 410, 206, 68, 68);
    view.defPosition("h7", 478, 206, 68, 68);
    view.defPosition("i7", 546, 206, 68, 68);
    view.defPosition("j7", 614, 206, 68, 68);
    view.defPosition("a6", 2, 274, 68, 68);
    view.defPosition("b6", 70, 274, 68, 68);
    view.defPosition("c6", 138, 274, 68, 68);
    view.defPosition("d6", 206, 274, 68, 68);
    view.defPosition("e6", 274, 274, 68, 68);
    view.defPosition("f6", 342, 274, 68, 68);
    view.defPosition("g6", 410, 274, 68, 68);
    view.defPosition("h6", 478, 274, 68, 68);
    view.defPosition("i6", 546, 274, 68, 68);
    view.defPosition("j6", 614, 274, 68, 68);
    view.defPosition("a5", 2, 342, 68, 68);
    view.defPosition("b5", 70, 342, 68, 68);
    view.defPosition("c5", 138, 342, 68, 68);
    view.defPosition("d5", 206, 342, 68, 68);
    view.defPosition("e5", 274, 342, 68, 68);
    view.defPosition("f5", 342, 342, 68, 68);
    view.defPosition("g5", 410, 342, 68, 68);
    view.defPosition("h5", 478, 342, 68, 68);
    view.defPosition("i5", 546, 342, 68, 68);
    view.defPosition("j5", 614, 342, 68, 68);
    view.defPosition("a4", 2, 410, 68, 68);
    view.defPosition("b4", 70, 410, 68, 68);
    view.defPosition("c4", 138, 410, 68, 68);
    view.defPosition("d4", 206, 410, 68, 68);
    view.defPosition("e4", 274, 410, 68, 68);
    view.defPosition("f4", 342, 410, 68, 68);
    view.defPosition("g4", 410, 410, 68, 68);
    view.defPosition("h4", 478, 410, 68, 68);
    view.defPosition("i4", 546, 410, 68, 68);
    view.defPosition("j4", 614, 410, 68, 68);
    view.defPosition("a3", 2, 478, 68, 68);
    view.defPosition("b3", 70, 478, 68, 68);
    view.defPosition("c3", 138, 478, 68, 68);
    view.defPosition("d3", 206, 478, 68, 68);
    view.defPosition("e3", 274, 478, 68, 68);
    view.defPosition("f3", 342, 478, 68, 68);
    view.defPosition("g3", 410, 478, 68, 68);
    view.defPosition("h3", 478, 478, 68, 68);
    view.defPosition("i3", 546, 478, 68, 68);
    view.defPosition("j3", 614, 478, 68, 68);
    view.defPosition("a2", 2, 546, 68, 68);
    view.defPosition("b2", 70, 546, 68, 68);
    view.defPosition("c2", 138, 546, 68, 68);
    view.defPosition("d2", 206, 546, 68, 68);
    view.defPosition("e2", 274, 546, 68, 68);
    view.defPosition("f2", 342, 546, 68, 68);
    view.defPosition("g2", 410, 546, 68, 68);
    view.defPosition("h2", 478, 546, 68, 68);
    view.defPosition("i2", 546, 546, 68, 68);
    view.defPosition("j2", 614, 546, 68, 68);
    view.defPosition("a1", 2, 614, 68, 68);
    view.defPosition("b1", 70, 614, 68, 68);
    view.defPosition("c1", 138, 614, 68, 68);
    view.defPosition("d1", 206, 614, 68, 68);
    view.defPosition("e1", 274, 614, 68, 68);
    view.defPosition("f1", 342, 614, 68, 68);
    view.defPosition("g1", 410, 614, 68, 68);
    view.defPosition("h1", 478, 614, 68, 68);
    view.defPosition("i1", 546, 614, 68, 68);
    view.defPosition("j1", 614, 614, 68, 68);
}
