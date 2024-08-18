ServerEvents.recipes(event => {

  event.recipes.gtceu.pyrolyse_oven('knx9gvryed7sge') // remapped from original line 12
    .itemInputs('16x #forge:logs/wood')
    .itemOutputs(safeItemId('8x minecraft:coal'))
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .outputFluids(safeFluidOf('gtceu:wood_vinegar', 2000))
    .outputFluids(safeFluidOf('gtceu:creosote', 2000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.pyrolyse_oven('ghghou5plns1j0') // remapped from original line 22
    .itemInputs('24x #forge:dusts/wood')
    .itemOutputs('20x #forge:dusts/wood_ash')
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.pyrolyse_oven('rfonw10sunks3b') // remapped from original line 30
    .itemInputs('24x #forge:trees/leaves')
    .itemOutputs('10x #forge:dusts/wood_ash')
    .duration(240)
    .EUt(64)

  event.recipes.gtceu.pyrolyse_oven('1t7e5wsswwiirn') // remapped from original line 37
    .inputFluids(safeFluidOf('gtceu:fermented_biomass', 5000))
    .itemOutputs('8x #forge:dusts/dark_ash')
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.pyrolyse_oven('vnleugs3m2sslc') // remapped from original line 45
    .inputFluids(safeFluidOf('gtceu:biomass', 3000))
    .itemOutputs('8x #forge:dusts/dark_ash')
    .outputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 3000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.centrifuge('oufahc5stodxr4') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:unscrubbed_wood_gas', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 200))
    .outputFluids(safeFluidOf('gtceu:creosote', 50))
    .outputFluids(safeFluidOf('gtceu:wood_gas', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('sh0cuobt1ulhik') // remapped from original line 62
    .inputFluids(safeFluidOf('gtceu:wood_vinegar', 1000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 100))
    .outputFluids(safeFluidOf('minecraft:water', 700))
    .outputFluids(safeFluidOf('gtceu:methanol', 100))
    .outputFluids(safeFluidOf('gtceu:acetone', 100))
    .duration(200)
    .EUt(24)

  // Contains GTFO resources
  //event.recipes.gtceu.distillation_tower('jorlfw88z7q4zz') // remapped from original line 72
    //.chancedOutput(safeItemId('1x susy:bitumen'), 5000, 0)
    //.inputFluids(safeFluidOf('gtceu:creosote', 1000))
    //.outputFluids(safeFluidOf('susy:creosol', 400))
    //.outputFluids(safeFluidOf('susy:gtfo_guaiacol', 250))
    //.outputFluids(safeFluidOf('susy:xylenol', 50))
    //.outputFluids(safeFluidOf('susy:cresol', 200))
    //.outputFluids(safeFluidOf('gtceu:phenol', 100))
    //.duration(200)
    //.EUt(48)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def PYROLYSE_OVEN = recipemap('pyrolyse_oven');
  // def DISTILLATION_TOWER = recipemap('distillation_tower');
  // def CENTRIFUGE = recipemap('centrifuge');
});