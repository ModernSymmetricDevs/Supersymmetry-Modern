ServerEvents.recipes(event => {

  event.recipes.susy.roaster('0qahtngc57lidb') // remapped from original line 11
    .itemInputs('6x #forge:dusts/potassium_carbonate')
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 2000))
    .outputFluids(safeFluidOf('susy:potassium_fluoride_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.DISTILLERY('2tizoc8ig7ezww') // remapped from original line 21
    .inputFluids(safeFluidOf('susy:potassium_fluoride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('2x #forge:dusts/potassium_fluoride')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electrolytic_cell('1uy3hrby1rigr3') // remapped from original line 30
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/platinum')
    .notConsumable(safeFluidOf('susy:potassium_fluoride', 1152))
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 2000))
    .outputFluids(safeFluidOf('gtceu:fluorine', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .EUt(120)
    .duration(720)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // ROASTER = recipemap('roaster')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
});