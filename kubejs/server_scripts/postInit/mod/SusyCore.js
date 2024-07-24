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
  event.remove({ type: 'gtceu:forge_hammer', input: 'gregtech:ore_sulfur_0'})
  event.remove({ type: 'gtceu:macerator', input: 'gregtech:ore_sulfur_0'})

  event.recipes.susy.mods.gregtech.assembler('tnvvbfsox74npr') // remapped from original line 15
    .itemInputs('4x #forge:plates/wrought_iron')
    .circuit(2)
    .itemOutputs(safeItemId('3x susy:susy_multiblock_casing', ')) * 6)
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('jpldhbwj7haecp') // remapped from original line 23
    .itemInputs('2x #forge:plates/steel')
    .itemInputs('2x #forge:pipes/tiny_fluid_copper')
    .circuit(2)
    .itemOutputs(safeItemId('6x susy:serpentine'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('6b1ilrv0xtbfse') // remapped from original line 32
    .circuit(10)
    .itemInputs(metaitem('electric.motor.hv') * 2)
    .itemInputs('4x #forge:gears/stainless_steel')
    .itemInputs('16x #forge:rotors/stainless_steel')
    .itemInputs('16x #forge:plates/stainless_steel')
    .itemOutputs(safeItemId('5x susy:separator_rotor'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('2trxkthr2r9jzx') // remapped from original line 43
    .circuit(9)
    .itemInputs('9x #forge:plates/stainless_steel')
    .itemOutputs(safeItemId('2x susy:susy_multiblock_casing', ')))
    .duration(240)
    .EUt(voltAmps[3])

  event.recipes.susy.mods.gregtech.assembler('s0vwgqsujjai8o') // remapped from original line 51
    .circuit(11)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:frames/gt_stainless_steel')
    .itemOutputs(safeItemId('1x susy:susy_multiblock_casing', ')))
    .duration(240)
    .EUt(voltAmps[3])

  event.recipes.susy.mods.gregtech.assembler('xwiptl9enjzewh') // remapped from original line 72
    .itemInputs('2x #forge:plates/wrought_iron')
    .itemInputs('2x #forge:rods/wrought_iron')
    .itemInputs('2x #forge:screws/wrought_iron')
    .circuit(13)
    .itemOutputs(safeItemId('4x susy:meta_item', ')))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('c17f2xyrtozc7t') // remapped from original line 82
    .itemInputs('2x #forge:plates/iron')
    .itemInputs('2x #forge:rods/iron')
    .itemInputs('2x #forge:screws/iron')
    .circuit(13)
    .itemOutputs(safeItemId('4x susy:meta_item', ')))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('jrhctb34frwxrm') // remapped from original line 92
    .circuit(11)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:frames/gt_stainless_steel')
    .itemOutputs(safeItemId('1x susy:susy_multiblock_casing', ')))
    .duration(240)
    .EUt(voltAmps[3])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // crafting.addShaped("susy:basic_structural_casing", item('susy:susy_multiblock_casing', 3) * 6, [
  //     [ore('screwWroughtIron'), ore('plateWroughtIron'), ore('craftingToolHardHammer')],
  //     [ore('plateWroughtIron'), null, ore('plateWroughtIron')],
  //     [ore('craftingToolScrewdriver'), ore('plateWroughtIron'), ore('screwWroughtIron')]
  // ])
  // crafting.addShaped("susy:basic_serpentine", item('susy:serpentine') * 6, [
  //     [null, ore('plateSteel'), ore('craftingToolWrench')],
  //     [ore('pipeTinyFluidCopper'), ore('pipeTinyFluidCopper'), ore('pipeTinyFluidCopper')],
  //     [ore('craftingToolHardHammer'), ore('plateSteel'), null]
  // ])
  //     
  // crafting.addShaped("susy:air_vent_w", item('susy:meta_item', 4), [
  // 	[ore('craftingToolHardHammer'),ore('stickWroughtIron'),ore('craftingToolScrewdriver')],
  // 	[ore('plateWroughtIron'),ore('stickWroughtIron'),ore('plateWroughtIron')],
  // 	[ore('screwWroughtIron'),ore('stickWroughtIron'),ore('screwWroughtIron')]
  // ])
  // crafting.addShaped("susy:air_vent_n", item('susy:meta_item', 4), [
  // 	[ore('craftingToolHardHammer'),ore('stickIron'),ore('craftingToolScrewdriver')],
  // 	[ore('plateIron'),ore('stickIron'),ore('plateIron')],
  // 	[ore('screwIron'),ore('stickIron'),ore('screwIron')]
  // ])
});