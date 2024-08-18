ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:compressor', input: '#forge:dusts/ultra_high_molecular_weight_polyethylene'})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.plate' && safeFluidOf('susy:ultra_high_molecular_weight_polyethylene')})
  event.remove({ type: 'gtceu:extractor', input: '#forge:plates/ultra_high_molecular_weight_polyethylene'})

  event.recipes.susy.polymerization_tank('9hdfijsnabuc5f') // remapped from original line 8
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:ethylene', 2000))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(300)

  event.recipes.susy.polymerization_tank('0ylkx1kaj5fj1k') // remapped from original line 16
    .circuit(2)
    .notConsumable('1x #forge:dusts/philips_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1500))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(150)

  event.recipes.susy.polymerization_tank('yjggvqiikf4j0j') // remapped from original line 25
    .circuit(3)
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1250))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(75)

  event.recipes.susy.polymerization_tank('xmyaebsagoglwj') // remapped from original line 34
    .circuit(4)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .itemOutputs('1x #forge:dusts/plastic')
    .EUt(30)
    .duration(30)

  event.recipes.susy.polymerization_tank('9giblldp1uea0f') // remapped from original line 52
    .circuit(5)
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .chancedOutput('1x #forge:dusts/ultra_high_molecular_weight_polyethylene', 5000, 0)
    .EUt(1920)
    .duration(20)

  event.recipes.susy.polymerization_tank('5nl28ctixvdhmq') // remapped from original line 61
    .circuit(6)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .itemOutputs('1x #forge:dusts/ultra_high_molecular_weight_polyethylene')
    .EUt(1920)
    .duration(20)

  event.recipes.gtceu.extruder('jx3ty5mpxhgm4f') // remapped from original line 70
    .notConsumable(safeItemId('1x susy:spinneret'))
    .inputFluids(safeFluidOf('susy:ultra_high_molecular_weight_polyethylene', 144))
    .itemOutputs('8x #forge:fibers/ultra_high_molecular_weight_polyethylene')
    .EUt(480)
    .duration(20)

  event.recipes.susy.polymerization_tank('wzlopm2btprjcs') // remapped from original line 80
    .circuit(1)
    .notConsumable('1x #forge:dusts/philips_catalyst')
    .inputFluids(safeFluidOf('gtceu:propene', 2000))
    .itemOutputs('1x #forge:dusts/polypropylene')
    .EUt(30)
    .duration(500)

  event.recipes.susy.polymerization_tank('wvbs5vv1sghiro') // remapped from original line 89
    .circuit(2)
    .notConsumable('1x #forge:dusts/ziegler_natta_catalyst')
    .inputFluids(safeFluidOf('gtceu:propene', 1500))
    .itemOutputs('1x #forge:dusts/polypropylene')
    .EUt(30)
    .duration(200)

  event.recipes.susy.polymerization_tank('vf3skfklh5czyc') // remapped from original line 98
    .circuit(3)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:propene', 1000))
    .itemOutputs('1x #forge:dusts/polypropylene')
    .EUt(30)
    .duration(50)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // POLYMERIZATION = recipemap('polymerization_tank')
  // EXTRUDER = recipemap('extruder')
});