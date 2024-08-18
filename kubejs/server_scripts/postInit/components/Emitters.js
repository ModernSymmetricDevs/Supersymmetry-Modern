ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/electrum' && '#forge:cables/gt_single_copper' && 'susy:circuit.good_integrated' && '#forge:gems/flawless_emerald' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:ender_eye') && '#forge:rods/chrome' && '#forge:cables/gt_single_gold' && 'susy:circuit.assembly' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/platinum' && '#forge:cables/gt_single_aluminium' && 'susy:circuit.nano_assembly' && 'susy:quantumeye' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/iridium' && '#forge:cables/gt_single_tungsten' && 'susy:circuit.quantum_assembly' && 'susy:quantumstar' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/hsss' && 'susy:electric.motor.luv' && '#forge:rods/long_ruridit' && 'susy:quantumstar' && 'susy:circuit.crystal_assembly' && '#forge:foils/palladium' && '#forge:foils/palladium' && '#forge:cables/gt_single_niobium_titanium' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/naquadah_alloy' && 'susy:electric.motor.zpm' && '#forge:rods/long_osmiridium' && 'susy:quantumstar' && 'susy:circuit.wetware_assembly' && '#forge:foils/trinium' && '#forge:foils/trinium' && '#forge:cables/gt_single_vanadium_gallium' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/tritanium' && 'susy:electric.motor.uv' && '#forge:rods/long_tritanium' && 'susy:gravistar' && 'susy:circuit.wetware_computer' && '#forge:foils/naquadria' && '#forge:foils/naquadria' && '#forge:cables/gt_single_yttrium_barium_cuprate' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:naquadria')})

  event.recipes.susy.mods.gregtech.assembler('9wnept2y5ys6zz') // remapped from original line 31
    .itemInputs('4x #forge:rods/electrum')
    .itemInputs('2x #forge:cables/gt_single_copper')
    .itemInputs('2x #forge:circuits/mv')
    .itemInputs(safeItemId('1x minecraft:emerald'))
    .circuit(1)
    .itemOutputs(safeItemId('1x susy:emitter.mv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('g00uwzgkhx5uzn') // remapped from original line 50
    .itemInputs('4x #forge:rods/chrome')
    .itemInputs('2x #forge:cables/gt_single_gold')
    .itemInputs('2x #forge:circuits/hv')
    .itemInputs('1x #forge:gems/gallium_phosphate')
    .circuit(1)
    .itemOutputs(safeItemId('1x susy:emitter.hv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('x6uhczrpjitw2w') // remapped from original line 69
    .itemInputs('4x #forge:rods/platinum')
    .itemInputs('2x #forge:cables/gt_single_aluminium')
    .itemInputs('2x #forge:circuits/ev')
    .itemInputs('1x #forge:gems/lithium_niobate')
    .circuit(1)
    .itemOutputs(safeItemId('1x susy:emitter.ev'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('wt1wtaqdqzf8kz') // remapped from original line 88
    .itemInputs('4x #forge:rods/iridium')
    .itemInputs('2x #forge:cables/gt_single_tungsten')
    .itemInputs('2x #forge:circuits/iv')
    .itemInputs('1x #forge:gems/lead_zirconate_titanate')
    .circuit(1)
    .itemOutputs(safeItemId('1x susy:emitter.iv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembly_line('8mane8q9qsymel') // remapped from original line 101
    .itemInputs('1x #forge:frames/hsss')
    .itemInputs(safeItemId('1x susy:electric.motor.luv'))
    .itemInputs('4x #forge:rods/long_ruridit')
    .itemInputs('4x #forge:plates/polyvinylidene_fluoride')
    .itemInputs('2x #forge:circuits/luv')
    .itemInputs('64x #forge:foils/palladium')
    .itemInputs('32x #forge:foils/palladium')
    .itemInputs('4x #forge:cables/gt_single_niobium_titanium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 288))
    .itemOutputs(safeItemId('1x susy:emitter.luv'))
    .duration(600)
    .EUt(6000)

  event.recipes.susy.mods.gregtech.assembly_line('bz7bwnjhcvelo1') // remapped from original line 118
    .itemInputs('1x #forge:frames/naquadah_alloy')
    .itemInputs(safeItemId('1x susy:electric.motor.zpm'))
    .itemInputs('4x #forge:rods/long_osmiridium')
    .itemInputs('8x #forge:plates/polyvinylidene_fluoride')
    .itemInputs('2x #forge:circuits/zpm')
    .itemInputs('64x #forge:foils/trinium')
    .itemInputs('32x #forge:foils/trinium')
    .itemInputs('4x #forge:cables/gt_single_vanadium_gallium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 576))
    .itemOutputs(safeItemId('1x susy:emitter.zpm'))
    .duration(600)
    .EUt(24000)

  event.recipes.susy.mods.gregtech.assembly_line('tgj3bxe6c43itb') // remapped from original line 135
    .itemInputs('1x #forge:frames/tritanium')
    .itemInputs(safeItemId('1x susy:electric.motor.uv'))
    .itemInputs('4x #forge:rods/long_tritanium')
    .itemInputs(safeItemId('1x susy:rydberg_atom_array'))
    .itemInputs('2x #forge:circuits/uv')
    .itemInputs('64x #forge:foils/naquadria')
    .itemInputs('32x #forge:foils/naquadria')
    .itemInputs('4x #forge:cables/gt_single_yttrium_barium_cuprate')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 1152))
    .inputFluids(safeFluidOf('gtceu:naquadria', 576))
    .itemOutputs(safeItemId('1x susy:emitter.uv'))
    .duration(600)
    .EUt(100000)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // crafting.replaceShaped('gregtech:emitter_mv', metaitem('emitter.mv'), [
  //         [metaitem('cableGtSingleCopper'), metaitem('stickElectrum'), ore('circuitMv')],
  //         [metaitem('stickElectrum'), item('minecraft:emerald'), metaitem('stickElectrum')],
  //         [ore('circuitMv'), metaitem('stickElectrum'), metaitem('cableGtSingleCopper')]
  // ])
  // crafting.replaceShaped('gregtech:emitter_hv', metaitem('emitter.hv'), [
  //         [metaitem('cableGtSingleGold'), metaitem('stickChrome'), ore('circuitHv')],
  //         [metaitem('stickChrome'), metaitem('gemGalliumPhosphate'), metaitem('stickChrome')],
  //         [ore('circuitHv'), metaitem('stickChrome'), metaitem('cableGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:emitter_ev', metaitem('emitter.ev'), [
  //         [metaitem('cableGtSingleAluminium'), metaitem('stickPlatinum'), ore('circuitEv')],
  //         [metaitem('stickPlatinum'), metaitem('gemLithiumNiobate'), metaitem('stickPlatinum')],
  //         [ore('circuitEv'), metaitem('stickPlatinum'), metaitem('cableGtSingleAluminium')]
  // ])
  // crafting.replaceShaped('gregtech:emitter_iv', metaitem('emitter.iv'), [
  //         [metaitem('cableGtSingleTungsten'), metaitem('stickIridium'), ore('circuitIv')],
  //         [metaitem('stickIridium'), metaitem('gemLeadZirconateTitanate'), metaitem('stickIridium')],
  //         [ore('circuitIv'), metaitem('stickIridium'), metaitem('cableGtSingleTungsten')]
  // ])
});