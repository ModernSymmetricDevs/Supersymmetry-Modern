ServerEvents.recipes(event => {

  event.recipes.gtceu.large_chemical_reactor('fwxjodc0fdphbu') // remapped from original line 8
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('susy:sea_water', 128000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_water', 128000))
    .outputFluids(safeFluidOf('susy:isotopically_pure_hydrogen_sulfide', 2000))
    .circuit(3)

  event.recipes.gtceu.large_chemical_reactor('90qbeyyduiojjh') // remapped from original line 16
    .inputFluids(safeFluidOf('susy:impure_semiheavy_water', 128000))
    .inputFluids(safeFluidOf('susy:isotopically_pure_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 128000))
    .circuit(1)

  event.recipes.gtceu.large_chemical_reactor('hpveumpw7u1kts') // remapped from original line 24
    .inputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('susy:impure_semiheavy_water', 1000))
    .outputFluids(safeFluidOf('susy:semiheavy_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .circuit(2)

  event.recipes.gtceu.large_chemical_reactor('unts2oyeioriad') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_water', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .circuit(1)

  event.recipes.gtceu.large_chemical_reactor('jfp1n8ibx9f5vz') // remapped from original line 40
    .inputFluids(safeFluidOf('susy:semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('susy:semiheavy_water', 1000))
    .outputFluids(safeFluidOf('susy:impure_heavy_hydrogen_sulfide', 2000))
    .outputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .circuit(2)

  event.recipes.gtceu.large_chemical_reactor('lwss06p4kwwrdx') // remapped from original line 48
    .inputFluids(safeFluidOf('susy:semiheavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:semiheavy_water', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 2000))
    .circuit(1)

  event.recipes.gtceu.large_chemical_reactor('ct20vtwcr0akkv') // remapped from original line 56
    .inputFluids(safeFluidOf('susy:impure_heavy_hydrogen_sulfide', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:heavy_water', 1000))
    .outputFluids(safeFluidOf('susy:impure_semiheavy_hydrogen_sulfide', 2000))
    .circuit(1)

  event.recipes.gtceu.electrolyzer('mu5zhe1dkgjxqj') // remapped from original line 64
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('susy:heavy_water', 1000))
    .outputFluids(safeFluidOf('gtceu:deuterium', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(1500)

  event.recipes.gtceu.electrolytic_cell('skkcj0jrcap9mv') // remapped from original line 74
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .notConsumable(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .inputFluids(safeFluidOf('susy:heavy_water', 1000))
    .outputFluids(safeFluidOf('gtceu:deuterium', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // def LCR = recipemap('large_chemical_reactor');
  // def ELECTROLYZER = recipemap('electrolyzer');
  // def ELECTROLYTIC_CELL = recipemap('electrolytic_cell');
  // 	
});