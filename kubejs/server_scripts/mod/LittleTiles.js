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
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // crafting.replaceShaped('littletiles:hammer', item('littletiles:hammer'), [
  //     [ore('plateIron'), ore('plateIron'), ore('plateIron')],
  //     [ore('dyeBlue'), ore('stickIron'), null],
  //     [ore('dyeBlue'), ore('stickIron'), null]
  // ])
  // crafting.replaceShaped('littletiles:saw', item('littletiles:saw'), [
  //     [ore('dyeBlue'), ore('stickIron'), ore('stickIron')],
  //     [ore('dyeBlue'), ore('stickIron'), ore('stickIron')],
  //     [ore('dyeBlue'), ore('stickIron'), ore('craftingToolFile')]
  // ])
  // crafting.replaceShaped('littletiles:bag', item('littletiles:container'), [
  //     [null, ore('string'), null],
  //     [ore('leather'), ore('dyeBlue'), ore('leather')],
  //     [null, ore('leather'), null]
  // ])
  // crafting.replaceShaped('littletiles:wrench', item('littletiles:wrench'), [
  //     [ore('plateIron'), null, ore('plateIron')],
  //     [ore('plateIron'), ore('stickIron'), ore('plateIron')],
  //     [ore('dyeBlue'), ore('stickIron'), ore('dyeBlue')]
  // ])
  // crafting.replaceShaped('littletiles:chisel', item('littletiles:chisel'), [
  //     [null, ore('plateIron'), null],
  //     [null, ore('stickIron'), null],
  //     [ore('dyeBlue'), ore('stickIron'), null]
  // ])
  // crafting.replaceShaped('littletiles:blueprint', item('littletiles:recipeadvanced') * 4, [
  //         [item('minecraft:paper'), item('minecraft:paper'), item('minecraft:paper')],
  //         [item('minecraft:paper'), ore('dyeBlue'), item('minecraft:paper')],
  //         [item('minecraft:paper'), item('minecraft:redstone'), item('minecraft:paper')]
  // ])
  // crafting.replaceShaped('littletiles:paintbrush', item('littletiles:colortube'), [
  //     [ore('woolWhite'), ore('woolWhite'), ore('woolWhite')],
  //     [ore('dyeBlue'), ore('stickIron'), null],
  //     [ore('dyeBlue'), ore('stickIron'), null]
  // ])
  // crafting.replaceShaped('littletiles:grabber', item('littletiles:grabber'), [
  //     [null, ore('leather'), null],
  //     [ore('leather'), ore('dyeBlue'), ore('leather')],
  //     [null, ore('leather'), null]
  // ])
  // crafting.replaceShaped('alet:tapemeasure', item('alet:tapemeasure'), [
  //     [ore('plateIron'), ore('plateIron'), ore('plateIron')],
  //     [ore('dyeBlue'), ore('paper'), ore('plateIron')],
  //     [ore('paper'), ore('paper'), ore('plateIron')]
  // ])
  // crafting.replaceShaped('littletiles:structure_builder', item('littletiles:premade').withNbt(["structure": ["id": "structure_builder"]]), [
  //         [ore('stone'), ore('stone'), ore('stone')],
  //         [ore('stone'), item('minecraft:redstone'), ore('stone')],
  //         [ore('stone'), ore('plankWood'), ore('stone')]
  // ])
  // crafting.replaceShaped('littletiles:particle_emitter', item('littletiles:premade').withNbt(["structure": ["id": "particle_emitter"]]), [
  //         [ore('stone'), item('minecraft:redstone'), ore('stone')],
  //         [item('minecraft:redstone'), item('minecraft:dispenser'), item('minecraft:redstone')],
  //         [ore('stone'), ore('stone'), ore('stone')]
  // ])
  // crafting.replaceShaped('littletiles:workbench', item('littletiles:premade').withNbt(["structure": ["id": "workbench"]]), [
  //         [ore('plankWood'), ore('workbench'), ore('plankWood')],
  //         [ore('plankWood'), item('littletiles:wrench'), ore('plankWood')],
  //         [ore('plankWood'), null, ore('plankWood')]
  // ])
  // crafting.replaceShaped('littletiles:importer', item('littletiles:premade').withNbt(["structure": ["id": "importer"]]), [
  //         [metaitem('plateIron'), metaitem('sensor.lv'), metaitem('plateIron')],
  //         [metaitem('plateIron'), item('littletiles:recipeadvanced'), metaitem('plateIron')],
  //         [ore('plankWood'), ore('circuitLv'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('littletiles:exporter', item('littletiles:premade').withNbt(["structure": ["id": "exporter"]]), [
  //         [metaitem('plateIron'), metaitem('emitter.lv'), metaitem('plateIron')],
  //         [metaitem('plateIron'), item('littletiles:recipeadvanced'), metaitem('plateIron')],
  //         [ore('plankWood'), ore('circuitLv'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('littletiles:blankomatic', item('littletiles:premade').withNbt(["structure": ["id": "blankomatic"]]), [
  //         [ore('plankWood'), metaitem('plateIron'), ore('plankWood')],
  //         [ore('plankWood'), item('littletiles:colortube'), ore('plankWood')],
  //         [ore('plankWood'), null, ore('plankWood')]
  // ])
  // crafting.replaceShaped('lt3dimporter:modelimporter', item('littletiles:premade').withNbt(["structure": ["id": "modelimporter"]]), [
  //         [metaitem('plateIron'), metaitem('sensor.lv'), metaitem('plateIron')],
  //         [metaitem('plateIron'), item('littletiles:recipeadvanced'), metaitem('plateIron')],
  //         [ore('plankWood'), ore('circuitMv'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('lt3dimporter:modelexporter', item('littletiles:premade').withNbt(["structure": ["id": "modelexporter"]]), [
  //         [metaitem('plateIron'), metaitem('emitter.lv'), metaitem('plateIron')],
  //         [metaitem('plateIron'), item('littletiles:recipeadvanced'), metaitem('plateIron')],
  //         [ore('plankWood'), ore('circuitMv'), ore('plankWood')]
  // ])
  // crafting.replaceShaped('alet:typewriter', item('littletiles:premade').withNbt(["structure": ["id": "typewriter"]]), [
  //         [null, metaitem('plateIron'), null],
  //         [metaitem('plateIron'), item('opencomputers:keyboard'), metaitem('plateIron')],
  //         [metaitem('plateIron'), item('littletiles:recipeadvanced'), metaitem('plateIron')]
  // ])
  // crafting.replaceShaped('alet:photoimporter', item('littletiles:premade').withNbt(["structure": ["id": "photoimporter"]]), [
  //         [null, metaitem('plateIron'), null],
  //         [metaitem('plateIron'), metaitem('sensor.lv'), metaitem('plateIron')],
  //         [metaitem('plateIron'), item('littletiles:recipeadvanced'), metaitem('plateIron')]
  // ])
});