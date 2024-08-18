ServerEvents.recipes(event => {

  event.recipes.susy.roaster('owzixws9lp4v3p') // remapped from original line 8
    .itemInputs('28x #forge:dusts/trona')
    .itemOutputs('18x #forge:dusts/soda_ash')
    .outputFluids(safeFluidOf('susy:dense_steam', 5000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('rcmchxyc9j5r21') // remapped from original line 17
    .itemInputs('6x #forge:dusts/soda_ash')
    .itemInputs('2x #forge:dusts/any_purity_carbon')
    .itemOutputs('2x #forge:dusts/sodium')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 3000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('81rnkyc6aiotbe') // remapped from original line 27
    .itemInputs('2x #forge:dusts/impure_salt')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:halite_leach', 1000))
    .EUt(30)
    .duration(20)

  event.recipes.susy.batch_reactor('ej2pbp2dgzdwe5') // remapped from original line 35
    .itemInputs('1x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('susy:halite_leach', 8000))
    .chancedOutput('5x #forge:dusts/barite', 1667, 0)
    .itemOutputs('1x #forge:dusts/clay')
    .outputFluids(safeFluidOf('gtceu:salt_water', 8000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.electrolytic_cell('ctap6klfc1ma6w') // remapped from original line 46
    .inputFluids(safeFluidOf('gtceu:sodium_hydroxide', 432))
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .itemOutputs('1x #forge:dusts/sodium')
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.ELECTROLYZER('ctzgdwinwn1nka') // remapped from original line 58
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('gtceu:salt', 288))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemOutputs('1x #forge:dusts/sodium')
    .EUt(30)
    .duration(300)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // ROASTER = recipemap('roaster')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // BR = recipemap('batch_reactor')
});