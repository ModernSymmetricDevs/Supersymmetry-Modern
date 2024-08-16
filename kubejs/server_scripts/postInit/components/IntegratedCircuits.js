ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: '#forge:plates/silicon' && '#forge:wires/fine_tin' && safeFluidOf('gtceu:plastic')})

  event.recipes.susy.mods.gregtech.assembler('0d9p2pfn5tyxqm') // remapped from original line 5
    .itemInputs('6x #forge:wires/fine_tin')
    .itemInputs(metaitem('wafer.silicon'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(metaitem('component.transistor') * 8)
    .duration(160)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
});