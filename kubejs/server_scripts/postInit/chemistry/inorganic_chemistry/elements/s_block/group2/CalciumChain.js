ServerEvents.recipes(event => {

  event.recipes.susy.roaster('fxkzmilijqtp0i') // remapped from original line 7
    .itemInputs('8x #forge:dusts/gypsum')
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('7vtmvpiw1nstpb') // remapped from original line 15
    .circuit(1)
    .itemInputs('6x #forge:dusts/calcium_sulfate')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.vacuum_distillation('jnns3lhtylylbq') // remapped from original line 24
    .itemInputs('1x #forge:dusts/calcium')
    .itemOutputs('1x #forge:dusts/high_purity_calcium')
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.ELECTROLYZER('i6zrw7vl3xesr1') // remapped from original line 31
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .notConsumable('1x #forge:rods/steel')
    .inputFluids(safeFluidOf('gtceu:calcium_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/calcium')
    .EUt(30)
    .duration(300)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // ROASTER = recipemap('roaster')
  // EBF = recipemap('electric_blast_furnace')
  // BR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
  // VACUUM_DT = recipemap('vacuum_distillation')
});