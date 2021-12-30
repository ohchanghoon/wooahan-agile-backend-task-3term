"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");
//9번 줄의 no를 받아오기 위해 index.js 와 User.js 연결
router.get("/selectAll", ctrl.process.selectAll);
//로그인 회원가입의 get요청은 우리가 만들어 놓은 ejs 파일을 rander로 가져오는 과정이었는데
//이번 과제는 get요청이 들어왔을 때 DB에 있는 데이터를 가져오는 과정을 다루는 것임..
router.get(`/selectDetail/:no`, ctrl.process.selectDetail);
//front쪽에서 get으로 데이터 넘겨 줄때 fetch(`/api/check?code=${confirmCode}`이런식으로 사용자가 입력한 값을 주소에 포함하여 넘겨 주기때문에 /:no처럼 파라미터로 접근
router.post("/createTable", ctrl.process.create);
router.put("/updateTable", ctrl.process.update);
router.delete("/deleteTable/:no", ctrl.process.delete);

module.exports = router;
