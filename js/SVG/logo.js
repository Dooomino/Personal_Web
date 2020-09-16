let s = Snap("#logo");
let svg = $("svg");

let palette = [
    '#11b9fc',
    '#fab404',
    '#EE6123',
    '#a6ff00',
    '#913f00',
    '#8078f3']

let plug = Snap.plugin(function (Snap, Element, Paper, global) {
    Element.prototype.circlePath = function (cx, cy, r) {
        var p = "M" + cx + "," + cy;
        p += "m" + -r + ",0";
        p += "a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0";
        p += "a" + r + "," + r + " 0 1,0 " + -(r * 2) + ",0";
        return this.path(p, cx, cy);
    };
});
let sps = paths; //spiral string
let spe = Array.from(Snap.parse(paths).node.children); //spiral element
let spo = spe.map(function (el) {
    return Snap.parse(el);
});//spiral object
let seqence = [dn, un];

let timeLine = [];
window.onresize = function(){
    var  bbox = svg.getBBox();
    svg.setAttribute("width", bbox.x + bbox.width + bbox.x);
    svg.setAttribute("height", bbox.y + bbox.height + bbox.y);
}
window.onload = function () {
    // console.log(sps, spe, spo);
    for (let i = 0; i < spo.length; i++) {
        let lineLen = Snap.path.getTotalLength(spe[i].getAttribute('d'));
        let line = s.path(spe[i].getAttribute('d'));
        line.attr({
            'stroke-dasharray': lineLen + ' ' + lineLen,
            'stroke-dashoffset': lineLen,
            'stroke-width': 1,
            'stroke': 'black',
            'fill': 'transparent'
        });
        line.transform(spe[i].getAttribute("transform"));
        setTimeout(function () {
            line.stop().animate({'stroke-dashoffset': 0}, 1000, mina.easein);
            // console.log(line);
            // console.log(lineLen);
        }, 250 * i);
        timeLine.push(line);
    }
    for (let i = 0; i < seqence.length; i++) {
        let c = Snap.parse(seqence[i]).select('circle');
        // let cir = s.circle(c.attr('cx'),c.attr('cy'),c.attr('r'));
        let cir = s.circlePath(c.attr('cx'), c.attr('cy'), c.attr('r'));
        // DEBUG = cir;
        let cirLen = Snap.path.getTotalLength(cir.attr('d'));
        // console.log(c, cir)
        cir.attr({
            'stroke-dasharray': cirLen + ' ' + cirLen,
            'stroke-dashoffset': cirLen,
            'stroke-width': 1,
            'stroke': 'black',
            'fill': 'transparent'
        });
        setTimeout(function () {
            cir.stop().animate({'stroke-dashoffset': 0}, 1000, mina.easein);
            // console.log(line);
            // console.log(lineLen);
        }, 250 * (i + 1));
        timeLine.push(cir);
    }
    var  bbox = svg[0].getBBox();
    svg[0].setAttribute("width", bbox.x + bbox.width + bbox.x);
    svg[0].setAttribute("height", bbox.y + bbox.height + bbox.y);
    for (let i = 0; i < timeLine.length; i++) {
        setTimeout(function () {
            timeLine[i].animate({
                'stroke-width': 0,
                'fill': (palette[(i * timeLine.length) % palette.length])
            }, 1000, mina.easein);
            // console.log(line);
            // console.log(lineLen);
        }, 250 * i + 500);
    }
}
let DEBUG = '';