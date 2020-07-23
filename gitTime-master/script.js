var sticky = document.querySelector('div#sticky')
var fixed = document.querySelector('div#fixed')

function addFixed() {
    fixed.style.position = 'fixed'
}
function addSticky() {
    sticky.style.position = 'sticky'
}
function remoFixed() {
    fixed.style.position = 'static'
}
function remoSticky() {
    sticky.style.position = 'static'
}

var inline = document.querySelector('div#inline')
var inlineBlock = document.querySelector('div#inlineBlock')
var none = document.querySelector('div#none')
var block = document.querySelector('div#block')

function addInline() {
    inline.style.display = 'inline'
}
function remoInline() {
    inline.style.display = 'inline-block'
}
function addBlock() {
    block.style.display = 'block'
}
function remoBlock() {
    block.style.display = 'inline-block'
}
function addInlineBlock() {
    inlineBlock.style.display = 'inline'
}
function remoInlineBlock() {
    inlineBlock.style.display = 'inline-block'
}
function addNone() {
    none.style.display = 'none'
}
function remoNone() {
    none.style.display = 'inline-block'
}