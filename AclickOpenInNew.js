// ==UserScript==
// @name         所有网页超链接在新标签页打开 By - 全栈CEO
// @namespace    https://roceys.cn
// @version      20200128
// @description  点击网页中A标签超链接自动在新标签页窗口打开脚本
// @author       ROCEYS
// @include      *
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	var base = document.createElement("base");
	base.target="_blank";
	document.getElementsByTagName("HEAD").item(0).appendChild(base);  

})();