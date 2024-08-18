ServerEvents.recipes(event => {

  event.recipes.gtceu.electric_blast_furnace('a1s7ogryzl8gjn') // remapped from original line 9
    .itemInputs('1x #forge:dusts/tellurium_residue') // 0.25 Na2TeO4, 2 Ag/Au
    .itemOutputs('2x #forge:dusts/raw_electrum')
    .chancedOutput('2500x #forge:dusts/tellurium_slag', 2500, 0)
    .blastFurnaceTemp(1400)
    .duration(120)
    .EUt(240)

  event.recipes.gtceu.distillery('6mnmz5vkctfmpz') // remapped from original line 18
    .inputFluids(safeFluidOf('susy:sodium_sulfite_solution', 1000))
    .itemOutputs('6x #forge:dusts/sodium_sulfite')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('eukcnouylqbgdl') // remapped from original line 26
    .itemInputs('1x #forge:dusts/tellurium_slag')
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:tellurium_liquor', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('dcmmh2re2zzm6c') // remapped from original line 34
    .itemInputs('6x #forge:dusts/sodium_sulfite')
    .inputFluids(safeFluidOf('susy:tellurium_liquor', 1000)O
    .itemOutputs('3x #forge:dusts/tellurium_dioxide')
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 2000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('ufowtdt3lwf5zc') // remapped from original line 43
    .itemInputs('3x #forge:dusts/tellurium_dioxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .outputFluids(safeFluidOf('susy:sodium_tellurite_solution', 3000))
    .duration(120)
    .EUt(30)

  event.recipes.gtceu.electrolytic_cell('obfmtibxavqyjv') // remapped from original line 55
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/stainless_steel')
    .inputFluids(safeFluidOf('susy:sodium_tellurite_solution', 3000))
    .chancedOutput('5000x #forge:dusts/tellurium', 5000, 0)
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .duration(600)
    .EUt(120)

  event.recipes.gtceu.electrolytic_cell('dn62pensmiyx58') // remapped from original line 66
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:plates/tellurium')
    .inputFluids(safeFluidOf('susy:sodium_tellurite_solution', 3000))
    .itemOutputs('1x #forge:dusts/tellurium')
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .duration(120)
    .EUt(120)

  event.recipes.susy.vacuum_distillation('dlmzprwgtzwxrh') // remapped from original line 79
    .itemInputs('1x #forge:dusts/tellurium')
    .chancedOutput('9900x #forge:dusts/high_purity_tellurium', 9900, 0)
    .duration(1000)
    .EUt(120)

  event.recipes.susy.zone_refiner('hawfp5tnxmyx56') // remapped from original line 86
    .itemInputs('1x #forge:ingots/tellurium')
    .chancedOutput('9900x #forge:ingots/high_purity_tellurium', 9900, 0)
    .duration(120)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // EBF = recipemap('electric_blast_furnace')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // ZONE_REFINER = recipemap('zone_refiner')
  // DISTILLERY = recipemap('distillery')
});