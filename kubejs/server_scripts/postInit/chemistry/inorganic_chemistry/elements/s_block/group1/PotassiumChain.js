ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('ozr4oyb0owqaaa') // remapped from original line 12
    .itemInputs('8x #forge:dusts/potash_concentrate')
    .inputFluids(safeFluidOf('susy:brine', 2000))
    .outputFluids(safeFluidOf('susy:impure_potash_slurry', 2000))
    .EUt(30)
    .duration(40)

  event.recipes.susy.FLOTATION('e8olwx0zm0qvke') // remapped from original line 20
    .inputFluids(safeFluidOf('susy:impure_potash_slurry', 2000))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable('1x #forge:dusts/n_hexadecylammonium_acetate')
    .outputFluids(safeFluidOf('susy:supersaturated_brine', 1000))
    .outputFluids(safeFluidOf('susy:potash_slurry', 1000))
    .EUt(480)
    .duration(40)

  event.recipes.susy.clarifier('nuxbgnlald7lfn') // remapped from original line 30
    .inputFluids(safeFluidOf('susy:potash_slurry', 1000))
    .itemOutputs('16x #forge:dusts/rock_salt')
    .outputFluids(safeFluidOf('susy:brine', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.centrifuge('q9s6zbmg14215z') // remapped from original line 38
    .inputFluids(safeFluidOf('susy:supersaturated_brine', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('susy:brine', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.centrifuge('b6bi60rywsefbl') // remapped from original line 46
    .itemInputs('10x #forge:dusts/wood_ash')
    .itemOutputs('9x #forge:dusts/dark_ash')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:potassium_carbonate_solution', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.distillery('9hhjfw9iaueukc') // remapped from original line 55
    .inputFluids(safeFluidOf('susy:potassium_carbonate_solution', 1000))
    .itemOutputs('6x #forge:dusts/potassium_carbonate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('iarsbsyowsvflj') // remapped from original line 63
    .itemInputs('6x #forge:dusts/potassium_carbonate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.mixer('daqzkrlxaht9o2') // remapped from original line 72
    .itemInputs('11x #forge:dusts/kainite')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:kainite_leach', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.crystallizer('gmqxq7ibwfmgad') // remapped from original line 80
    .inputFluids(safeFluidOf('susy:kainite_leach', 1000))
    .itemOutputs('6x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('7rbgzrlchhfh9r') // remapped from original line 88
    .itemInputs('11x #forge:dusts/carnallite')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:carnallite_leach', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.crystallizer('nzy0cc2lpxs2an') // remapped from original line 96
    .inputFluids(safeFluidOf('susy:carnallite_leach', 1000))
    .itemOutputs('3x #forge:dusts/magnesium_chloride')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('zzcev95wugy0ou') // remapped from original line 104
    .itemInputs('6x #forge:dusts/potassium_sulfate')
    .itemOutputs('2x #forge:dusts/potash')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('zzrr6ffazu9gzu') // remapped from original line 112
    .itemInputs('7x #forge:dusts/potassium_sulfate')
    .itemInputs('4x #forge:dusts/any_purity_carbon')
    .itemOutputs('3x #forge:dusts/potassium_sulfide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 4000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('ktfbisj9k7e35x') // remapped from original line 121
    .itemInputs('3x #forge:dusts/potassium_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemOutputs('3x #forge:dusts/potash')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.reaction_furnace('jquhpd9ccacdmz') // remapped from original line 130
    .itemInputs('1x #forge:dusts/any_purity_sodium')
    .inputFluids(safeFluidOf('gtceu:rock_salt', 288))
    .outputFluids(safeFluidOf('susy:potassium_salt_mixture', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.distillery('jtpbzpnt16djal') // remapped from original line 138
    .inputFluids(safeFluidOf('susy:potassium_salt_mixture', 1000))
    .itemOutputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:potassium', 144))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.centrifuge('wcolhaac6tgg14') // remapped from original line 146
    .itemInputs('8x #forge:dusts/potash_concentrate')
    .itemOutputs('2x #forge:dusts/rock_salt')
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.ELECTROLYTIC_CELL('vttpnmerj4scyr') // remapped from original line 154
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .notConsumable(safeFluidOf('gtceu:rock_salt', 144))
    .notConsumable(safeFluidOf('susy:potassium_carbonate', 14))
    .itemInputs('6x #forge:dusts/potassium_hydroxide')
    .itemOutputs('2x #forge:dusts/potassium')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(600)

  event.recipes.gtceu.ELECTROLYTIC_CELL('7top9evelgshqd') // remapped from original line 167
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('gtceu:rock_salt', 288))
    .notConsumable(safeFluidOf('susy:potassium_fluoride', 144))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemOutputs('1x #forge:dusts/potassium')
    .EUt(30)
    .duration(300)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // ROASTER = recipemap('roaster')
  // CENTRIFUGE = recipemap('centrifuge')
  // MIXER = recipemap('mixer')
  // DISTILLERY = recipemap('distillery')
  // CRYSTALLIZER = recipemap('crystallizer')
  // BR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // FLBR = recipemap('fluidized_bed_reactor')
  // CLARIFIER = recipemap('clarifier')
});