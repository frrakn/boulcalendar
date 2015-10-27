"use strict";

var express = require("express");
var path = require("path");

var app = express();
var router_main = express.Router();
var router_ajax = express.Router({mergeParams:true});

router_ajax.get("/sys_date", function(req, res){
	res.send(JSON.stringify(new Date()));
});

router_main.get("/generator", function(req, res){
	res.sendFile(path.join(__dirname, "public", "html", "generator.html"));
});
router_main.use("/ajax", router_ajax);

app.use(express.static(path.join(__dirname, "public")));
app.use("/", router_main);

module.exports = router_main;
