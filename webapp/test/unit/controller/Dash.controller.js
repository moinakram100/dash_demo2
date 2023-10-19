/*global QUnit*/

sap.ui.define([
	"refinerydemo/controller/Dash.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Dash Controller");

	QUnit.test("I should test the Dash controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
