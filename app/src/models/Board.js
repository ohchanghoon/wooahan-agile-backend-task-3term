"use strict";

const BoardStorage = require("./BoardStorage");

class boards {
  constructor(body) {
    this.body = body;
  }

  async findAllBoards() {
    try {
      const allBoardsInfo = await BoardStorage.findAllByBoards();

      return allBoardsInfo;
    } catch (err) {
      return { success: false, err: "메롱" };
    }
  }

  async findOneBoard() {
    const noOfBoardToFind = this.body;

    try {
      const oneBoardInfo = await BoardStorage.findOneByBoardNum(
        noOfBoardToFind
      );

      return oneBoardInfo;
    } catch (err) {
      return { success: false, err: "게시글 못찾음" };
    }
  }

  async newBoard() {
    const infoOfNewBoard = this.body;

    try {
      const response = await BoardStorage.createBoard(infoOfNewBoard);

      return response;
    } catch (err) {
      return { success: false, err: "게시글 등록 에러" };
    }
  }

  async editBoard() {
    const infoOfUpdateBoard = this.body;

    try {
      const response = await BoardStorage.updateBoard(infoOfUpdateBoard);

      return response;
    } catch (err) {
      return { success: false, err: "게시글 수정 에러" };
    }
  }

  async dropBoard() {
    const noOfDeleteBoard = this.body;

    try {
      const response = await BoardStorage.deleteBoard(noOfDeleteBoard);

      return response;
    } catch (err) {
      return { success: false, err: "삭제에 실패했습니다." };
    }
  }
}

// router.get("/boards", BoardStorage.findAllByBoards);
// router.get("/boards", BoardStorage.findOneByBoardNum);
// router.put("/boards/:index", BoardStorage.updateBoard);
// router.delete("/boards/:index", BoardStorage.deleteBoard);

// router.post("/boards/submit", BoardStorage.createBoard);

module.exports = boards;
