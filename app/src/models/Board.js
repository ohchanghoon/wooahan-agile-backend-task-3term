"use strict";

const BoardStorage = require("./BoardStorage");

class board {
  constructor(body) {
    this.body = body;
  }

  async findAllBoards() {
    try {
      const allBoards = await BoardStorage.findAllByBoards();

      if (allBoards.success) {
        return {
          success: true,
          boards: allBoards.boards,
          msg: "전체 게시글 조회에 성공했습니다.",
        };
      } else {
        return { success: false, msg: "알 수 없는 오류입니다." };
      }
    } catch (err) {
      return { success: false, err };
    }
  }

  async findOneBoard(findBoardNo) {
    try {
      const oneBoardInfo = await BoardStorage.findOneByBoardNum(findBoardNo);

      if (oneBoardInfo.success) {
        return {
          success: true,
          board: oneBoardInfo.board,
          msg: "입력한 게시글 조회에 성공했습니다.",
        };
      } else {
        return { success: false, msg: "번호에 해당하는 게시글이 없습니다." };
      }
    } catch (err) {
      return { success: false, err };
    }
  }

  async newBoard(infoOfNewBoard) {
    try {
      const response = await BoardStorage.createBoard(infoOfNewBoard);

      if (response.success) {
        return {
          success: true,
          no: response.no,
          msg: "게시글 생성에 성공했습니다.",
        };
      } else {
        return { success: false, msg: "게시글 생성 실패" };
      }
    } catch (err) {
      return { success: false, err };
    }
  }

  async editBoard(infoOfUpdateBoard) {
    try {
      const response = await BoardStorage.updateBoard(infoOfUpdateBoard);

      if (response.success) {
        return {
          success: true,
          no: response.no,
          msg: "게시글 수정에 성공했습니다.",
        };
      } else {
        return { success: false, msg: "게시글 수정 실패" };
      }
    } catch (err) {
      return { success: false, err };
    }
  }

  async dropBoard(deleteBoardNo) {
    try {
      const response = await BoardStorage.deleteBoard(deleteBoardNo);

      if (response.success) {
        return { success: true, msg: "게시글 삭제에 성공했습니다." };
      } else {
        return { success: false, msg: "삭제하려는 게시글이 없습니다." };
      }
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = board;
