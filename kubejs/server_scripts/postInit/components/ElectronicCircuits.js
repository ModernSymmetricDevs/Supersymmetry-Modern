ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/fine_annealed_copper' && '#forge:dusts/small_gallium_arsenide' && safeFluidOf('gtceu:glass')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/fine_copper' && '#forge:dusts/small_gallium_arsenide' && safeFluidOf('gtceu:glass')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/fine_annealed_copper' && 'susy:wafer.silicon' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/fine_copper' && 'susy:wafer.silicon' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/fine_annealed_copper' && '#forge:dusts/small_gallium_arsenide' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:wires/fine_copper' && '#forge:dusts/small_gallium_arsenide' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/coal' && '#forge:wires/fine_copper' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/charcoal' && '#forge:wires/fine_copper' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/carbon' && '#forge:wires/fine_copper' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/coal' && '#forge:wires/fine_annealed_copper' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/charcoal' && '#forge:wires/fine_annealed_copper' && safeFluidOf('gtceu:glue')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/carbon' && '#forge:wires/fine_annealed_copper' && safeFluidOf('gtceu:glue')})

  event.recipes.susy.mods.gregtech.assembler('uogouv0dager7t') // remapped from original line 51
    .inputFluids(safeFluidOf('gtceu:glue', 100))
    .input(new GTRecipeItemInput(carbons, 1))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemOutputs(safeItemId('2x susy:component.resistor'))
    .duration(160)
    .EUt(6)

  event.recipes.susy.mods.gregtech.assembler('8ethxxiocvnn5m') // remapped from original line 60
    .inputFluids(safeFluidOf('gtceu:glue', 100))
    .input(new GTRecipeItemInput(carbons, 1))
    .itemInputs('4x #forge:wires/fine_annealed_copper')
    .itemOutputs(safeItemId('4x susy:component.resistor'))
    .duration(160)
    .EUt(6)
    .name('resistor_wire')
    .output(safeItemId('2x susy:component.resistor'))  
    .matrix('RPR',  
    .key('R', metaitem('rubber_drop'))  
    .key('P', item('minecraft:paper')) 
    .key('W', ore('wireGtSingleCopper') | ore('wireFineCopper'))  
    .key('C', ore('dustAnthracite') | ore('dustCoke') | ore('dustCarbon') | ore('dustCoal') | ore('dustCharcoal')) 
    .register() 

  event.recipes.susy.mods.gregtech.assembler('hfngkuzb9ldk0m') // remapped from original line 81
    .inputFluids(safeFluidOf('gtceu:glass', 144))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs('1x #forge:dusts/small_galena')
    .itemOutputs(safeItemId('1x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('8hrkrhhqtultrv') // remapped from original line 90
    .inputFluids(safeFluidOf('gtceu:glass', 144))
    .itemInputs('4x #forge:wires/fine_annealed_copper')
    .itemInputs('1x #forge:dusts/small_galena')
    .itemOutputs(safeItemId('2x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('cj0brxkcodbrse') // remapped from original line 99
    .inputFluids(safeFluidOf('gtceu:glass', 144))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs('1x #forge:dusts/small_gallium_arsenide')
    .itemOutputs(safeItemId('3x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('f9efmbip7cerz1') // remapped from original line 108
    .inputFluids(safeFluidOf('gtceu:glass', 144))
    .itemInputs('4x #forge:wires/fine_annealed_copper')
    .itemInputs('1x #forge:dusts/small_gallium_arsenide')
    .itemOutputs(safeItemId('4x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('1tocevrnvnhdci') // remapped from original line 117
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs('1x #forge:dusts/small_gallium_arsenide')
    .itemOutputs(safeItemId('6x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('hwqhdonqx6yjhn') // remapped from original line 126
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('4x #forge:wires/fine_annealed_copper')
    .itemInputs('1x #forge:dusts/small_gallium_arsenide')
    .itemOutputs(safeItemId('8x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('fnqi7festiwgsy') // remapped from original line 135
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('4x #forge:wires/fine_copper')
    .itemInputs(safeItemId('1x susy:wafer.silicon'))
    .itemOutputs(safeItemId('12x susy:component.diode'))
    .duration(400)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('s33czcqjakvbad') // remapped from original line 144
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('4x #forge:wires/fine_annealed_copper')
    .itemInputs(safeItemId('1x susy:wafer.silicon'))
    .itemOutputs(safeItemId('16x susy:component.diode'))
    .duration(400)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.recipes.ingredients.GTRecipeItemInput;
  // crafting.replaceShaped("gregtech:electronic_circuit_lv", metaitem('circuit.electronic'), [
  //         [metaitem('component.resistor'), ore('craftingToolWireCutter'), metaitem('component.resistor')],
  //         [metaitem('circuit.vacuum_tube'), metaitem('circuit_board.basic'), metaitem('circuit.vacuum_tube')],
  //         [ore('cableGtSingleRedAlloy'), ore('cableGtSingleRedAlloy'), ore('cableGtSingleRedAlloy')]])
  // crafting.replaceShaped("gregtech:electronic_circuit_mv", metaitem('circuit.good_electronic'), [
  //         [metaitem('component.diode'), ore('craftingToolWireCutter'), metaitem('component.diode')],
  //         [metaitem('circuit.electronic'), metaitem('circuit_board.good'), metaitem('circuit.electronic')],
  //         [ore('wireGtSingleCopper'), metaitem('circuit.electronic'), ore('wireGtSingleCopper')]])
  // crafting.removeByOutput(metaitem('component.resistor')) 
  // carbons = new ItemStack[]{
  //         metaitem('dustCoal'),
  //         metaitem('dustCharcoal'),
  //         metaitem('dustCarbon'),
  //         metaitem('dustHighPurityCarbon'),
  //         metaitem('dustAnthracite'),
  //         metaitem('dustCoke')
  // }
  // crafting.shapedBuilder()               
  //                 'WCW',                 
  //                 ' P ')
});