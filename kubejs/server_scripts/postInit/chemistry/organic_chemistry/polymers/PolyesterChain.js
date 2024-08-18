ServerEvents.recipes(event => {

  event.recipes.susy.polymerization_tank('oeuaa8doaptkhk') // remapped from original line 7
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .inputFluids(safeFluidOf('susy:terephthalic_acid', 2592))
    .itemOutputs('2x #forge:dusts/polyethylene_terephthalate')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('g2aglycrh5jcmm') // remapped from original line 16
    .itemInputs('2x #forge:dusts/cobalt_oxide')
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .itemOutputs('18x #forge:dusts/cobalt_ii_acetate')
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.susy.polymerization_tank('vfpjefmjhrjd7q') // remapped from original line 25
    .notConsumable('1x #forge:dusts/cobalt_ii_acetate')
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .inputFluids(safeFluidOf('susy:dimethyl_terephthalate', 3456))
    .itemOutputs('2x #forge:dusts/polyethylene_terephthalate')
    .outputFluids(safeFluidOf('gtceu:methanol', 2000))
    .EUt(voltAmps[2])
    .duration(80)

  event.recipes.gtceu.extruder('nql6qrhlc3htg3') // remapped from original line 35
    .notConsumable(safeItemId('1x susy:spinneret'))
    .inputFluids(safeFluidOf('susy:polyethylene_terephthalate', 144))
    .itemOutputs('8x #forge:fibers/polyethylene_terephthalate')
    .EUt(480)
    .duration(20)

  event.recipes.gtceu.extruder('ktcbtvdgbp6tb5') // remapped from original line 43
    .itemInputs('1x #forge:foils/polyethylene_terephthalate')
    .itemOutputs(safeItemId('1x susy:mylar'))
    .EUt(120)
    .duration(10)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // POLYMERIZATION = recipemap('polymerization_tank')
  // BR = recipemap('batch_reactor')
  // EXTRUDER = recipemap('extruder')
  // oreDict.add('foilMylar', metaitem('mylar'))
});