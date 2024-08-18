ServerEvents.recipes(event => {

  event.recipes.susy.mods.gregtech.circuit_assembler('oma78hachs0tth') // remapped from original line 13
    .itemInputs(safeItemId('10x opencomputers:component', 1')0))
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(metaitem('circuit_board.advanced'))
    .itemInputs(metaitem('sensor.ev'))
    .itemInputs(metaitem('emitter.ev'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x openglasses:openglasses_card'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('o66c1pmimsnrzy') // remapped from original line 26
    .itemInputs(safeItemId('10x opencomputers:component', 1')0))
    .itemInputs(metaitem('hull.ev'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x openglasses:openglassesterminal'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('ibecisuvcgmgol') // remapped from original line 36
    .itemInputs(safeItemId('10x opencomputers:component', 1')0))
    .itemInputs(safeItemId('3x opencomputers:component', ')))
    .itemInputs(safeItemId('3x opencomputers:screen3')') * 2)
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x oc:wlanCard'))
    .itemInputs(safeItemId('3x opencomputers:card', ')))
    .itemInputs(metaitem('sensor.ev'))
    .itemInputs(metaitem('emitter.ev'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x openglasses:openglasses'))
    .duration(400)
    .EUt(480)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (item in name_removals) {
  //     crafting.remove(item);
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // def solder = fluid('soldering_alloy') * 72
  // def name_removals = [
  // "openglasses:items/openglasses_card",
  // "openglasses:blocks/openglasses_terminal",
  // "openglasses:items/openglasses"
  // ]
});