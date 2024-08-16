ServerEvents.recipes(event => {

  event.recipes.susy.fixed_bed_reactor('zkfnbgom2gy1p1') // remapped from original line 12
    .inputFluids(safeFluidOf('gtceu:ethylbenzene', 50))
    .inputFluids(safeFluidOf('susy:dense_steam', 50))
    .notConsumable('1x #forge:catalysts/bed_iron_iii_oxide')
    .outputFluids(safeFluidOf('susy:crude_styrene', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 90))
    .duration(2)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('0ssrdxquufas4s') // remapped from original line 22
    .inputFluids(safeFluidOf('susy:crude_styrene', 1000))
    .outputFluids(safeFluidOf('gtceu:styrene', 900))
    .outputFluids(safeFluidOf('gtceu:ethylbenzene', 100))
    .duration(30)
    .EUt(30)

  event.recipes.gtceu.mixer('mwqjszg4mmvanl') // remapped from original line 32
    .inputFluids(safeFluidOf('gtceu:styrene', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:styrene_suspension', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.polymerization_tank('mk6abvtgj7wmxn') // remapped from original line 40
    .inputFluids(safeFluidOf('susy:styrene_suspension', 2000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polystyrene_suspension', 2000))
    .duration(300)
    .EUt(60)

  event.recipes.susy.dryer('dgdi02i3ofyfwp') // remapped from original line 48
    .inputFluids(safeFluidOf('susy:polystyrene_suspension', 2000))
    .itemOutputs('1x #forge:dusts/polystyrene')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(260)
    .EUt(30)

  event.recipes.gtceu.BR('grnb3yn4vsjxo9') // remapped from original line 57
    .inputFluids(safeFluidOf('susy:polystyrene', 2304))
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .outputFluids(safeFluidOf('susy:polystyrene_sulfonate', 2304))
    .duration(300)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // FBR = recipemap('fixed_bed_reactor')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // POLYMERIZATION = recipemap('polymerization_tank')
});