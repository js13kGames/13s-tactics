import { GameVars, toPixelSize } from "../game-variables";
import { genSmallBox } from "../utilities/box-generator";
import { createElem } from "../utilities/elem-utilities";
import { drawPixelTextInCanvas } from "../utilities/text";

export class UI {
    constructor(game) {
        this.game = game;
        this.uiDiv = createElem(this.game.gameDiv, "div", "ui");
        // this.createTimer();
        // this.createZoomBtns();
        this.createResetBtn();
    }

    createResetBtn() {
        this.resetBoardBtn = createElem(this.uiDiv, "canvas", null, null, toPixelSize(52), toPixelSize(24), GameVars.isMobile, null, () => this.game.board.resetBoardPos());
        this.resetBoardBtn.style.translate = (GameVars.gameW - this.resetBoardBtn.width - toPixelSize(8)) + 'px ' + (GameVars.gameH - this.resetBoardBtn.height - toPixelSize(8)) + 'px';
        genSmallBox(this.resetBoardBtn, 0, 0, 51, 23, toPixelSize(1), "#3e3846", "#1b1116");
        drawPixelTextInCanvas("RESET BOARD", this.resetBoardBtn, toPixelSize(1), 26, 8, "#9bf2fa", 1);
        drawPixelTextInCanvas("POSITION", this.resetBoardBtn, toPixelSize(1), 26, 16, "#9bf2fa", 1);
    }

    createTimer() {
        this.timer = createElem(this.uiDiv, "canvas", null, null, toPixelSize(52), toPixelSize(34));
        this.timer.style.translate = ((GameVars.gameW - this.timer.width) / 2) + 'px ' + (toPixelSize(8)) + 'px';
        genSmallBox(this.timer, 0, 0, 51, 33, toPixelSize(1), "#3e3846", "#1b1116");
        drawPixelTextInCanvas("TIME", this.timer, toPixelSize(1), 26, 8, "#9bf2fa", 1);
        drawPixelTextInCanvas("13", this.timer, toPixelSize(1), 26, 21, "#9bf2fa", 3);
    }

    createZoomBtns() {
        this.zoomDiv = createElem(this.uiDiv, "div");
        this.zoom = createElem(this.zoomDiv, "canvas", null, null, toPixelSize(26), toPixelSize(61));
        this.zoom.style.translate = (GameVars.gameW - this.zoom.width - toPixelSize(8)) + 'px ' + ((GameVars.gameH - this.zoom.height) / 2) + 'px';
        genSmallBox(this.zoom, 0, 0, 25, 60, toPixelSize(1), "#3e3846", "#1b1116");
        drawPixelTextInCanvas("ZOOM", this.zoom, toPixelSize(1), 13, 8, "#9bf2fa", 1);

        this.zoomPlus = createElem(this.zoomDiv, "canvas", null, null, toPixelSize(18), toPixelSize(18), GameVars.isMobile, null, () => console.log("pixel up"));
        this.zoomPlus.style.translate = (GameVars.gameW - this.zoom.width - toPixelSize(4)) + 'px ' + (((GameVars.gameH - this.zoom.height) / 2) + toPixelSize(15)) + 'px';
        genSmallBox(this.zoomPlus, 0, 0, 17, 17, toPixelSize(1), "#3e3846", "#1b1116");
        drawPixelTextInCanvas("+", this.zoomPlus, toPixelSize(1), 9, 9, "#9bf2fa", 4);

        this.zoomMinus = createElem(this.zoomDiv, "canvas", null, null, toPixelSize(18), toPixelSize(18), GameVars.isMobile, null, () => console.log("pixel down"));
        this.zoomMinus.style.translate = (GameVars.gameW - this.zoom.width - toPixelSize(4)) + 'px ' + (((GameVars.gameH - this.zoom.height) / 2) + toPixelSize(37)) + 'px';
        genSmallBox(this.zoomMinus, 0, 0, 17, 17, toPixelSize(1), "#3e3846", "#1b1116");
        drawPixelTextInCanvas("-", this.zoomMinus, toPixelSize(1), 9, 9, "#9bf2fa", 4);
    }
}