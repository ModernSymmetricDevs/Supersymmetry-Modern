const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def name_removals = [
  //         'betterbuilderswands:recipewandunbreakable',
  //         'betterbuilderswands:wandunbreakable13',
  //         'betterbuilderswands:wandunbreakable14'
  // ]
  // crafting.addShaped('betterbuilderswands:wandstone', item('betterbuilderswands:wandstone'), [
  //     [null, null, ore('cobblestone')],
  //     [null, ore('stickWood'), null],
  //     [ore('stickWood'), null, null]
  // ])
  // crafting.addShaped('betterbuilderswands:wandiron', item('betterbuilderswands:wandiron'), [
  //     [null, null, ore('plateIron')],
  //     [null, ore('stickIron'), null],
  //     [ore('stickIron'), null, null]
  // ])
  //  // Diamond Wand
  // crafting.addShaped('betterbuilderswands:wanddiamond', item('betterbuilderswands:wanddiamond'), [
  // [null, ore('string'), ore('plateDiamond')],
  // [null, ore('stickSteel'), ore('string')],
  // [ore('stickSteel'), null, null]
  // ])
  // crafting.replaceShaped('betterbuilderswands:wandunbreakable', item('betterbuilderswands:wandunbreakable'), [
  // [null, metaitem('duct_tape'), ore('blockObsidian')],
  // [null, ore('stickTungstenSteel'), metaitem('duct_tape')],
  // [ore('stickTungstenSteel'), null, null]
  // ])
});