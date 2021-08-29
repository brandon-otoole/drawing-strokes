export function DrawTipFactory(data) {
    let tip = new DrawTip();

    tip.type = data.type;
    tip.width = data.width;
    tip.color = data.color;

    return tip;
}

export class DrawTip {
    constructor(type, width, color) {
        this.type = type || null;
        this.width = width || 1;
        this.color = color || "#000000";
    }

    clone() {
        return new DrawTip(this.type, this.width, this.color, null);
    }
}
