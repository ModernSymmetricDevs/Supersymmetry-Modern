ServerEvents.recipes(event => {

  event.recipes.susy.fixed_bed_reactor('3o1vtzetqtcm5o') // remapped from original line 13
    .inputFluids(safeFluidOf('gtceu:nitric_oxide', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 150))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:hydroxylamine', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('rqfdw8wr54aej9') // remapped from original line 22
    .inputFluids(safeFluidOf('gtceu:cyclohexane', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .outputFluids(safeFluidOf('gtceu:cyclohexanone', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.batch_reactor('fjxj4wxutzxace') // remapped from original line 32
    .inputFluids(safeFluidOf('gtceu:cyclohexanone', 1000))
    .inputFluids(safeFluidOf('susy:hydroxylamine', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('34x #forge:dusts/cyclohexanone_oxime')
    .duration(180)
    .EUt(30)

  event.recipes.susy.batch_reactor('86k6e2bsrrwlvh') // remapped from original line 41
    .itemInputs('34x #forge:dusts/cyclohexanone_oxime')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 2000))
    .outputFluids(safeFluidOf('susy:caprolactam_solution', 3000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('dp66qzyyq5qzlv') // remapped from original line 50
    .inputFluids(safeFluidOf('gtceu:cyclohexanone', 1000))
    .inputFluids(safeFluidOf('susy:hydroxylamine', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('susy:ammonia_solution', 2000))
    .itemOutputs('34x #forge:dusts/cyclohexanone_oxime')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:caprolactam_solution', 3000))
    .duration(160)
    .EUt(480)

  event.recipes.gtceu.centrifuge('v0xekhq7nztlz9') // remapped from original line 62
    .inputFluids(safeFluidOf('susy:caprolactam_solution', 3000))
    .inputFluids(safeFluidOf('gtceu:toluene', 1000))
    .outputFluids(safeFluidOf('susy:extracted_caprolactam_solution', 1000))
    .outputFluids(safeFluidOf('susy:diluted_ammonium_sulfate_solution', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillery('wknckpoy14jgor') // remapped from original line 71
    .inputFluids(safeFluidOf('susy:diluted_ammonium_sulfate_solution', 1000))
    .itemOutputs('15x #forge:dusts/ammonium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillery('g7s8lfdquxdnzv') // remapped from original line 79
    .inputFluids(safeFluidOf('susy:extracted_caprolactam_solution', 1000))
    .itemOutputs('1x #forge:dusts/caprolactam')
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.roaster('6fi0v3fzd9ekvh') // remapped from original line 87
    .itemInputs('15x #forge:dusts/ammonium_sulfate')
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs('11x #forge:dusts/ammonium_bisulfate')
    .duration(160)
    .EUt(30)

  event.recipes.susy.reaction_furnace('ddwen9xaqaakg7') // remapped from original line 97
    .notConsumable(safeFluidOf('gtceu:nitrogen', 4000))
    .itemInputs('1x #forge:dusts/caprolactam')
    .itemOutputs('1x #forge:dusts/polycaprolactam')
    .EUt(200)
    .duration(25)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // FBR = recipemap('fixed_bed_reactor')
  // BR = recipemap('batch_reactor')
  // LCR = recipemap('large_chemical_reactor')
  // CENTRIFUGE = recipemap('centrifuge')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // REACTION_FURNACE = recipemap('reaction_furnace')
});