ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('oxlagjnuhozkhx') // remapped from original line 12
    .itemInputs('8x #forge:dusts/chromium_trioxide')
    .inputFluids(safeFluidOf('susy:n_octanol', 1500))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .inputFluids(safeFluidOf('gtceu:acetone', 500))
    .outputFluids(safeFluidOf('susy:caprylic_acid', 1500))
    .outputFluids(safeFluidOf('susy:chromium_sulfate_solution', 500))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('vingeitunciglb') // remapped from original line 23
    .itemInputs('18x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:chromium_sulfate_solution', 500))
    .itemOutputs('14x #forge:dusts/chromium_iii_hydroxide')
    .outputFluids(safeFluidOf('susy:sodium_sulfate_acetone_solution', 500))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('hk18lpenrmfk0m') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:sodium_sulfate_acetone_solution', 1000))
    .itemOutputs('42x #forge:dusts/sodium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 9000))
    .outputFluids(safeFluidOf('gtceu:acetone', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('btf1q5iqefkcal') // remapped from original line 41
    .inputFluids(safeFluidOf('susy:caprylic_acid', 1000))
    .inputFluids(safeFluidOf('susy:thionyl_chloride', 1000))
    .outputFluids(safeFluidOf('susy:octanoyl_chloride', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolytic_cell('gheooh13odsjdb') // remapped from original line 51
    .notConsumable('1x #forge:plates/nickel')
    .notConsumable('1x #forge:plates/cobalt')
    .inputFluids(safeFluidOf('susy:octanoyl_chloride', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 15000))
    .outputFluids(safeFluidOf('susy:fluorinated_octanoyl_chloride_mixture', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 15000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('1cptd1eezl0hmv') // remapped from original line 62
    .inputFluids(safeFluidOf('susy:fluorinated_octanoyl_chloride_mixture', 1000))
    .outputFluids(safeFluidOf('susy:perfluorooctanoyl_fluoride', 150))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('i9uttfjes4k4tk') // remapped from original line 69
    .inputFluids(safeFluidOf('susy:perfluorooctanoyl_fluoride', 500))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:perfluorooctanoic_acid_mixture', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('izizynulvoboni') // remapped from original line 77
    .inputFluids(safeFluidOf('susy:perfluorooctanoic_acid_mixture', 500))
    .itemOutputs('13x #forge:dusts/perfluorooctanoic_acid')
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('k6jecanfagg0vq') // remapped from original line 85
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .itemInputs('13x #forge:dusts/perfluorooctanoic_acid')
    .outputFluids(safeFluidOf('susy:fluorinated_surfactant_mixture', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('6kcdsze5iupgp5') // remapped from original line 93
    .inputFluids(safeFluidOf('gtceu:tetrafluoroethylene', 1000))
    .inputFluids(safeFluidOf('susy:fluorinated_surfactant_mixture', 500))
    .outputFluids(safeFluidOf('susy:tetrafluoroethylene_emulsion', 1500))
    .duration(200)
    .EUt(30)

  event.recipes.susy.polymerization_tank('ny8qp3lnagjbra') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:tetrafluoroethylene_emulsion', 1500))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polytetrafluoroethylene_solution', 500))
    .duration(200)
    .EUt(240)

  event.recipes.susy.dryer('swynyrjzz5sivk') // remapped from original line 109
    .inputFluids(safeFluidOf('susy:polytetrafluoroethylene_solution', 500))
    .itemOutputs('1x #forge:dusts/polytetrafluoroethylene')
    .outputFluids(safeFluidOf('susy:fluorinated_surfactant_mixture', 500))
    .duration(200)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
});