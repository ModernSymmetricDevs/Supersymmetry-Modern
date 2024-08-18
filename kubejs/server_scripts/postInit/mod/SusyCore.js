ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:forge_hammer', input: safeItemId('gtceu:ore_sulfur_0')})
  event.remove({ type: 'gtceu:macerator', input: safeItemId('gtceu:ore_sulfur_0')})

  event.recipes.susy.mods.gregtech.assembler('jdtxlalktexk6w') // remapped from original line 15
    .itemInputs('4x #forge:plates/wrought_iron')
    .circuit(2)
    .itemOutputs(safeItemId('6x susy:susy_multiblock_casing'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('ieb8ehvm5f1zxw') // remapped from original line 23
    .itemInputs('2x #forge:plates/steel')
    .itemInputs('2x #forge:pipes/tiny_fluid_copper')
    .circuit(2)
    .itemOutputs(safeItemId('6x susy:serpentine'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('xbarsg4rqm0ndm') // remapped from original line 32
    .circuit(10)
    .itemInputs(safeItemId('2x susy:electric.motor.hv'))
    .itemInputs('4x #forge:gears/stainless_steel')
    .itemInputs('16x #forge:rotors/stainless_steel')
    .itemInputs('16x #forge:plates/stainless_steel')
    .itemOutputs(safeItemId('5x susy:separator_rotor'))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('pibwgtfvkh0qxl') // remapped from original line 43
    .circuit(9)
    .itemInputs('9x #forge:plates/stainless_steel')
    .itemOutputs(safeItemId('1x susy:susy_multiblock_casing'))
    .duration(240)
    .EUt(voltAmps[3])

  event.recipes.susy.mods.gregtech.assembler('hzk3qqo6qeap3w') // remapped from original line 51
    .circuit(11)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:frames/gt_stainless_steel')
    .itemOutputs(safeItemId('1x susy:susy_multiblock_casing'))
    .duration(240)
    .EUt(voltAmps[3])

  event.recipes.susy.mods.gregtech.assembler('j7iblevsix3zwi') // remapped from original line 72
    .itemInputs('2x #forge:plates/wrought_iron')
    .itemInputs('2x #forge:rods/wrought_iron')
    .itemInputs('2x #forge:screws/wrought_iron')
    .circuit(13)
    .itemOutputs(safeItemId('1x susy:meta_item'))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('5igz82d6oewl8u') // remapped from original line 82
    .itemInputs('2x #forge:plates/iron')
    .itemInputs('2x #forge:rods/iron')
    .itemInputs('2x #forge:screws/iron')
    .circuit(13)
    .itemOutputs(safeItemId('1x susy:meta_item'))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.mods.gregtech.assembler('g3vzzucaxrxnpw') // remapped from original line 92
    .circuit(11)
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:frames/gt_stainless_steel')
    .itemOutputs(safeItemId('1x susy:susy_multiblock_casing'))
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