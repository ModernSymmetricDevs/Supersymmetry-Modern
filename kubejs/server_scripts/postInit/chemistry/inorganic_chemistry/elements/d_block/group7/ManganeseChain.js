ServerEvents.recipes(event => {

  event.recipes.susy.roaster('h3birrrb5jkzfh') // remapped from original line 32
    .itemInputs('1x #forge:dusts/rhodochrosite')
    .itemOutputs('2x #forge:dusts/manganese_ii_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('tc9bgwqybroffl') // remapped from original line 107
    .itemInputs('1x #forge:dusts/manganese_ii_oxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:crude_manganese_ii_sulfate_solution', 1000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('8jcxtd7ttumitp') // remapped from original line 115
    .itemInputs('2x #forge:dusts/tiny_sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:crude_manganese_ii_sulfate_solution', 4000))
    .chancedOutput('7x #forge:dusts/iron_iii_hydroxide', 500, 0)
    .outputFluids(safeFluidOf('susy:manganese_ii_sulfate_solution', 4000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolytic_cell('ml7xsaxdurcznc') // remapped from original line 124
    .inputFluids(safeFluidOf('susy:manganese_ii_sulfate_solution', 1000))
    .notConsumable('1x #forge:rods/manganese')
    .notConsumable(metaitem('graphite_electrode'))
    .itemOutputs('1x #forge:dusts/manganese')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .duration(480)
    .EUt(voltAmps[2])

  event.recipes.gtceu.BR('fy61n7gxvld6im') // remapped from original line 136
    .itemInputs('1x #forge:dusts/any_purity_manganese')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('3x #forge:dusts/manganese_ii_chloride')
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.BR('1isxeeygrrvnru') // remapped from original line 144
    .itemInputs('2x #forge:dusts/manganese_ii_oxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:manganese_ii_chloride_solution', 3000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.DISTILLERY('weqhgdagxidrhn') // remapped from original line 152
    .inputFluids(safeFluidOf('susy:manganese_ii_chloride_solution', 3000))
    .itemOutputs('3x #forge:dusts/manganese_ii_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.BR('ldxwtg5cahug2y') // remapped from original line 160
    .itemInputs('3x #forge:dusts/manganese_dioxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 4000))
    .outputFluids(safeFluidOf('susy:diluted_manganese_ii_chloride_solution', 6000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.DISTILLERY('smmlpmb0a429bw') // remapped from original line 169
    .inputFluids(safeFluidOf('susy:diluted_manganese_ii_chloride_solution', 3000))
    .itemOutputs('3x #forge:dusts/manganese_ii_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.BR('wwrt1smry46qsv') // remapped from original line 179
    .itemInputs('3x #forge:dusts/pyrolusite')
    .inputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 2000))
    .itemOutputs('9x #forge:dusts/manganese_ii_nitrate')
    .duration(100)
    .EUt(120)

  event.recipes.susy.roaster('lv8inyxlrgtgka') // remapped from original line 187
    .itemInputs('9x #forge:dusts/manganese_ii_nitrate')
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 2000))
    .itemOutputs('3x #forge:dusts/manganese_dioxide')
    .duration(100)
    .EUt(120)

  event.recipes.susy.roaster('ggcq6wxp7tadju') // remapped from original line 197
    .itemInputs('5x #forge:dusts/manganese_ii_hydroxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemOutputs('2x #forge:dusts/manganese_ii_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('gpnwzvtqufzyha') // remapped from original line 207
    .itemInputs('3x #forge:dusts/manganese_dioxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide', 864))
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('7x #forge:dusts/potassium_manganate')
    .outputFluids(safeFluidOf('gtceu:steam', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolytic_cell('rgbjtlknva98zh') // remapped from original line 217
    .notConsumable('4x #forge:plates/nickel')
    .notConsumable('4x #forge:plates/iron')
    .itemInputs('7x #forge:dusts/potassium_manganate')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:oxidized_manganate_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.CRYSTALLIZER('drtjvp1tbbivow') // remapped from original line 228
    .inputFluids(safeFluidOf('susy:oxidized_manganate_solution', 1000))
    .itemOutputs('6x #forge:dusts/potassium_permanganate')
    .outputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 1000))
    .duration(200)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (combustible in combustibles()) {
  //     EBF.recipeBuilder()
  //         .inputs(ore('dustPyrolusite'))
  //         .inputs(ore(combustible.name) * combustible.equivalent(2))
  //         .inputs(ore('dustTinyCalcite'))
  //         .chancedOutput(metaitem('dustManganese'), 7500, 0)
  //         .fluidOutputs(fluid('carbon_dioxide') * 1000)
  //         .blastFurnaceTemp(1200)
  //         .duration(120)
  //         .EUt(Globals.voltAmps[2])
  //         .buildAndRegister()
  // }

  // for (highPurityCombustible in highPurityCombustibles()) {
  //     ROASTER.recipeBuilder()
  //         .inputs(ore('dustManganeseIiOxide') * 2)
  //         .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(1))
  //         .chancedOutput(metaitem('dustManganese'), 8500, 0)
  //         .chancedOutput(metaitem(highPurityCombustible.byproduct), 1000, 0)
  //         .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //         .duration(120 * highPurityCombustible.duration)
  //         .EUt(Globals.voltAmps[1])
  //         .buildAndRegister()
  // }

  // for (reductant in hydrocarbonReductants) {
  //     REACTION_FURNACE.recipeBuilder()
  //         .inputs(ore('dustPyrolusite'))
  //         .fluidInputs(fluid(reductant.name) * reductant.amount_required)
  //         .outputs(metaitem('dustManganeseIiOxide') * 2)
  //         .fluidOutputs(fluid(reductant.byproduct) * reductant.byproduct_amount)
  //         .fluidOutputs(fluid('dense_steam') * (1000 - reductant.byproduct_amount))
  //         .duration(120)
  //         .EUt(Globals.voltAmps[3])
  //         .buildAndRegister()
  // }

  // for (reductant in reductants) {
  //     REACTION_FURNACE.recipeBuilder()
  //         .inputs(ore('dustPyrolusite'))
  //         .fluidInputs(fluid(reductant.name) * reductant.amount_required)
  //         .outputs(metaitem('dustManganeseIiOxide') * 2)
  //         .fluidOutputs(fluid(reductant.byproduct) * reductant.byproduct_amount)
  //         .duration(120)
  //         .EUt(Globals.voltAmps[3])
  //         .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.unification.material.properties.*;
  // import gregtech.api.GregTechAPI;
  // import gregtech.api.unification.material.Material;
  // import gregtech.api.unification.OreDictUnifier;
  // import gregtech.api.unification.ore.OrePrefix;
  // import static gregtech.api.unification.material.Materials.*;
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // EBF = recipemap('electric_blast_furnace')
  // ROASTER = recipemap('roaster')
  // BATCH_REACTOR = recipemap('batch_reactor')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // class ReductantManganese {
  //     String name
  //     String byproduct
  //     int amount_required
  //     int byproduct_amount
  //     ReductantManganese(name, byproduct, amount_required, byproduct_amount) {
  //         this.name = name
  //         this.byproduct = byproduct
  //         this.amount_required = amount_required
  //         this.byproduct_amount = byproduct_amount
  //     }
  // }
  // def hydrocarbonReductants = [
  //     new ReductantManganese('fuel_oil', 'carbon_dioxide', 67, 288),
  //     new ReductantManganese('natural_gas', 'carbon_dioxide', 167, 234)
  // ]
  // def reductants = [
  //     new ReductantManganese('carbon_monoxide', 'carbon_dioxide', 1000, 1000),
  //     new ReductantManganese('hydrogen', 'dense_steam', 2000, 1000)
  // ]
  // FUEL OIL: 11.4 mol H, 4.6 mol C, 29.8 mol e-
  // NATURAL GAS: 5.4 mol H, 1.65 mol C, 12 mol e-
  // */
});