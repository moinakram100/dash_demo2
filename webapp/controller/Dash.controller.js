sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("refinerydemo.controller.Dash", {
            onInit: function () {
                this.getView().byId("myClickableLink").addStyleClass("red-background");
            },
            onLinkPress: function () {
                alert("hello")
            }
        });
    });
