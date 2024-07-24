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

  event.recipes.gtceu.assembler('vhasxsmlr2tfn4') // remapped from original line 63
    .itemInputs(ore('stone') * 4)
    .itemInputs(safeItemId('4x minecraft:iron_ingot'))
    .itemOutputs(safeItemId('32x chisel:factory'))
    .circuit(1)
    .duration(20)
    .EUt(7)

  event.recipes.gtceu.assembler('l7zqljxiksi8l0') // remapped from original line 72
    .itemInputs(ore('stone') * 8)
    .itemInputs(safeItemId('1x minecraft:iron_ingot'))
    .itemOutputs(safeItemId('32x chisel:tyrian'))
    .circuit(2)
    .duration(20)
    .EUt(7)

  event.recipes.gtceu.assembler('gcvpdsn24e5jfc') // remapped from original line 81
    .itemInputs(ore('stone') * 8)
    .itemInputs('1x #forge:dyes/cyan')
    .itemOutputs(safeItemId('32x chisel:temple'))
    .circuit(3)
    .duration(20)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // crafting.replaceShaped('chisel:chisel_iron', item('chisel:chisel_iron'), [
  //     [null, null, ore('plateIron')],
  //     [null, ore('plateIron'), null],
  //     [ore('stickWood'), null, null]
  // ])
  // crafting.replaceShaped('chisel:chisel_diamond', item('chisel:chisel_diamond'), [
  //     [null, null, ore('plateSteel')],
  //     [null, ore('plateSteel'), null],
  //     [ore('stickWood'), null, null]
  // ])
  // crafting.replaceShaped('chisel:chisel_hitech', item('chisel:chisel_hitech'), [
  //     [null, ore('plateDiamond'), null],
  //     [ore('cableGtSingleTin'), ore('circuitUlv'), ore('cableGtSingleTin')],
  //     [null, ore('stickSteel'), null]
  // ])
  // crafting.replaceShaped('chisel:offsettool', item('chisel:offsettool'), [
  //     [null, ore('plateSteel'), null],
  //     [ore('plateSteel'), ore('stickSteel'), ore('plateSteel')],
  //     [null, ore('stickSteel'), null]
  // ])
  // crafting.replaceShaped('chisel:autochisel', item('chisel:auto_chisel'), [
  //     [ore('blockGlass'), ore('blockGlass'), ore('blockGlass')],
  //     [metaitem('electric.motor.lv'), metaitem('hull.lv'), metaitem('circuit.electronic')],
  //     [ore('plateIron'), ore('plateIron'), ore('plateIron')]
  // ])
  // crafting.replaceShaped('chisel:factory', item('chisel:factory') * 32, [
  //         [item('minecraft:iron_ingot'), ore('stone'), item('minecraft:iron_ingot')],
  //         [ore('stone'), null, ore('stone')],
  //         [item('minecraft:iron_ingot'), ore('stone'), item('minecraft:iron_ingot')]
  // ])
  // crafting.replaceShaped('chisel:tyrian', item('chisel:tyrian') * 32, [
  //         [ore('stone'), ore('stone'), ore('stone')],
  //         [ore('stone'), item('minecraft:iron_ingot'), ore('stone')],
  //         [ore('stone'), ore('stone'), ore('stone')]
  // ])
  // crafting.replaceShaped('chisel:temple', item('chisel:temple') * 32, [
  //         [ore('stone'), ore('stone'), ore('stone')],
  //         [ore('stone'), ore('dyeCyan'), ore('stone')],
  //         [ore('stone'), ore('stone'), ore('stone')]
  // ])
  // crafting.replaceShaped('chisel:futura', item('chisel:futura', 0) * 32, [
  //         [ore('stone'), ore('stone'), ore('stone')],
  //         [ore('stone'), ore('dustRedstone'), ore('stone')],
  //         [ore('stone'), ore('stone'), ore('stone')]
  // ])
  // crafting.replaceShaped('chisel:laboratory', item('chisel:laboratory', 0) * 32, [
  //         [ore('stone'), ore('stone'), ore('stone')],
  //         [ore('stone'), ore('dyeWhite'), ore('stone')],
  //         [ore('stone'), ore('stone'), ore('stone')]
  // ])
  // ASSEMBLER = recipemap('assembler')
});