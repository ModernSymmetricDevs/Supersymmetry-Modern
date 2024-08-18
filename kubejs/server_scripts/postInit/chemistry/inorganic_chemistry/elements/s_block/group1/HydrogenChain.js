ServerEvents.recipes(event => {

  event.recipes.gtceu.electric_blast_furnace('ezq98s1b4q0yrz') // remapped from original line 4
    .itemInputs('12x #forge:dusts/cerium_iv_oxide')
    .itemOutputs('10x #forge:dusts/cerium_iii_oxide')
    .outputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .EUt(1920)
    .blastFurnaceTemp(2273)
    .duration(20)

  event.recipes.susy.fluidized_bed_reactor('c7fis2jwml4f75') // remapped from original line 13
    .itemInputs('10x #forge:dusts/cerium_iii_oxide')
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('12x #forge:dusts/cerium_iv_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .EUt(1920)
    .duration(20)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // EBF = recipemap('electric_blast_furnace')
  // FBR = recipemap('fluidized_bed_reactor')
});