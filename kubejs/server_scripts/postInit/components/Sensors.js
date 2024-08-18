ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/electrum' && '#forge:plates/aluminium' && 'susy:circuit.good_integrated' && '#forge:gems/flawless_emerald'})
  event.remove({ type: 'gtceu:assembler', input: 'minecraft:ender_eye' && '#forge:rods/chrome' && '#forge:plates/stainless_steel' && 'susy:circuit.assembly'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/platinum' && '#forge:plates/titanium' && 'susy:circuit.nano_assembly' && 'susy:quantumeye'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/iridium' && '#forge:plates/tungsten_steel' && 'susy:circuit.crystal_processor' && 'susy:quantumstar'})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/hsss' && 'susy:electric.motor.luv' && '#forge:plates/ruridit' && 'susy:quantumstar' && 'susy:circuit.crystal_assembly' && '#forge:foils/palladium' && '#forge:foils/palladium' && '#forge:cables/gt_single_niobium_titanium' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/naquadah_alloy' && 'susy:electric.motor.zpm' && '#forge:plates/osmiridium' && 'susy:quantumstar' && 'susy:circuit.wetware_assembly' && '#forge:foils/trinium' && '#forge:foils/trinium' && '#forge:cables/gt_single_vanadium_gallium' && safeFluidOf('gtceu:soldering_alloy')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:frames/tritanium' && 'susy:electric.motor.uv' && '#forge:plates/tritanium' && 'susy:gravistar' && 'susy:circuit.wetware_computer' && '#forge:foils/naquadria' && '#forge:foils/naquadria' && '#forge:cables/gt_single_yttrium_barium_cuprate' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:naquadria')})

  event.recipes.susy.mods.gregtech.assembler('kroruwwnj0eifu') // remapped from original line 30
    .itemInputs('1x #forge:rods/electrum')
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs('1x #forge:circuits/mv')
    .itemInputs(safeItemId('1x minecraft:emerald'))
    .itemOutputs(metaitem('sensor.mv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('ziez8cnsqtqnzh') // remapped from original line 48
    .itemInputs('1x #forge:rods/chrome')
    .itemInputs('4x #forge:plates/stainless_steel')
    .itemInputs('1x #forge:circuits/hv')
    .itemInputs('1x #forge:gems/gallium_phosphate')
    .itemOutputs(metaitem('sensor.hv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('rkzfigpmvutxcp') // remapped from original line 66
    .itemInputs('1x #forge:rods/platinum')
    .itemInputs('4x #forge:plates/titanium')
    .itemInputs('1x #forge:circuits/ev')
    .itemInputs('1x #forge:gems/lithium_niobate')
    .itemOutputs(metaitem('sensor.ev'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembler('tauetcenwbkma2') // remapped from original line 84
    .itemInputs('1x #forge:rods/iridium')
    .itemInputs('4x #forge:plates/tungsten_steel')
    .itemInputs('1x #forge:circuits/iv')
    .itemInputs('1x #forge:gems/lead_zirconate_titanate')
    .itemOutputs(metaitem('sensor.iv'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.mods.gregtech.assembly_line('ts9ocquvsr8rqq') // remapped from original line 96
    .itemInputs('1x #forge:frames/hsss')
    .itemInputs(metaitem('electric.motor.luv'))
    .itemInputs('4x #forge:plates/ruridit')
    .itemInputs('4x #forge:plates/polyvinylidene_fluoride')
    .itemInputs('2x #forge:circuits/luv')
    .itemInputs('64x #forge:foils/palladium')
    .itemInputs('32x #forge:foils/palladium')
    .itemInputs('4x #forge:cables/gt_single_niobium_titanium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 288))
    .itemOutputs(metaitem('sensor.luv'))
    .duration(600)
    .EUt(6000)

  event.recipes.susy.mods.gregtech.assembly_line('wpo07pm5z7juqu') // remapped from original line 113
    .itemInputs('1x #forge:frames/naquadah_alloy')
    .itemInputs(metaitem('electric.motor.zpm'))
    .itemInputs('4x #forge:plates/osmiridium')
    .itemInputs('8x #forge:plates/polyvinylidene_fluoride')
    .itemInputs('2x #forge:circuits/zpm')
    .itemInputs('64x #forge:foils/trinium')
    .itemInputs('32x #forge:foils/trinium')
    .itemInputs('4x #forge:cables/gt_single_vanadium_gallium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 576))
    .itemOutputs(metaitem('sensor.zpm'))
    .duration(600)
    .EUt(24000)

  event.recipes.susy.mods.gregtech.assembly_line('st3c74aqotj7mg') // remapped from original line 130
    .itemInputs('1x #forge:frames/tritanium')
    .itemInputs(metaitem('electric.motor.uv'))
    .itemInputs('4x #forge:plates/tritanium')
    .itemInputs(metaitem('rydberg_atom_array'))
    .itemInputs('2x #forge:circuits/uv')
    .itemInputs('64x #forge:foils/naquadria')
    .itemInputs('32x #forge:foils/naquadria')
    .itemInputs('4x #forge:cables/gt_single_yttrium_barium_cuprate')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 1152))
    .inputFluids(safeFluidOf('gtceu:naquadria', 576))
    .itemOutputs(metaitem('sensor.uv'))
    .duration(600)
    .EUt(100000)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // crafting.replaceShaped('gregtech:sensor_mv', metaitem('sensor.mv'), [
  //         [metaitem('plateAluminium'), null, item('minecraft:emerald')],
  //         [metaitem('plateAluminium'), metaitem('stickElectrum'), null],
  //         [ore('circuitMv'), metaitem('plateAluminium'), metaitem('plateAluminium')]
  // ])
  // crafting.replaceShaped('gregtech:sensor_hv', metaitem('sensor.hv'), [
  //         [metaitem('plateStainlessSteel'), null, ore('gemGalliumPhosphate')],
  //         [metaitem('plateStainlessSteel'), metaitem('stickChrome'), null],
  //         [ore('circuitHv'), metaitem('plateStainlessSteel'), metaitem('plateStainlessSteel')]
  // ])
  // crafting.replaceShaped('gregtech:sensor_ev', metaitem('sensor.ev'), [
  //         [metaitem('plateTitanium'), null, ore('gemLithiumNiobate')],
  //         [metaitem('plateTitanium'), metaitem('stickPlatinum'), null],
  //         [ore('circuitEv'), metaitem('plateTitanium'), metaitem('plateTitanium')]
  // ])
  // crafting.replaceShaped('gregtech:sensor_iv', metaitem('sensor.iv'), [
  //         [metaitem('plateTungstenSteel'), null, ore('gemLeadZirconateTitanate')],
  //         [metaitem('plateTungstenSteel'), metaitem('stickIridium'), null],
  //         [ore('circuitIv'), metaitem('plateTungstenSteel'), metaitem('plateTungstenSteel')]
  // ])
});