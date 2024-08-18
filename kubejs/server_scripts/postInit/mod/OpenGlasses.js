ServerEvents.recipes(event => {

  event.recipes.susy.mods.gregtech.circuit_assembler('i0ufwnbceykvvy') // remapped from original line 13
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x susy:circuit_board.advanced'))
    .itemInputs(safeItemId('1x susy:sensor.ev'))
    .itemInputs(safeItemId('1x susy:emitter.ev'))
    .inputFluids(solder)
    .itemOutputs(safeItemId('1x openglasses:openglasses_card'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('dybvhalqh8nlas') // remapped from original line 26
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x susy:hull.ev'))
    .inputFluids(solder)
    .circuitMeta([2])
    .itemOutputs(safeItemId('1x openglasses:openglassesterminal'))
    .duration(400)
    .EUt(480)

  event.recipes.susy.mods.gregtech.assembler('xvrajqoldhrli8') // remapped from original line 36
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('1x opencomputers:component'))
    .itemInputs(safeItemId('2x opencomputers:screen3'))
    .itemInputs('4x #forge:wires/fine_aluminium')
    .itemInputs(safeItemId('1x oc:wlanCard'))
    .itemInputs(safeItemId('1x opencomputers:card'))
    .itemInputs(safeItemId('1x susy:sensor.ev'))
    .itemInputs(safeItemId('1x susy:emitter.ev'))
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