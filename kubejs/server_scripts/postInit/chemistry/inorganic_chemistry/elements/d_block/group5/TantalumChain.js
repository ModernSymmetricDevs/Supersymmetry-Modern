ServerEvents.recipes(event => {

  event.recipes.susy.gravity_separator('ktjckursrtqgfw') // remapped from original line 22
    .itemInputs('1x #forge:dusts/tantalite')
    .itemOutputs('1x #forge:dusts/sifted_tantalite')
    .chancedOutput('1x #forge:dusts/pegmatite_tailings', 2500, 0)
    .chancedOutput('1x #forge:dusts/nether_quartz', 2500, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.electromagnetic_separator('rjzzvmpqdzjqdg') // remapped from original line 31
    .itemInputs('1x #forge:dusts/sifted_tantalite')
    .itemOutputs('1x #forge:dusts/concentrate_tantalite')
    .chancedOutput('1x #forge:dusts/pegmatite_tailings', 2500, 0)
    .chancedOutput('1x #forge:dusts/nether_quartz', 2500, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('gmeqxffb5zu7kv') // remapped from original line 40
    .itemInputs('8x #forge:dusts/concentrate_tantalite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_tantalite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('5slsz0ks0ll541') // remapped from original line 48
    .notConsumable('1x #forge:dusts/sodium_fluorosilicate')
    .inputFluids(safeFluidOf('susy:impure_tantalite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 100))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('gtceu:hydrochloric_acid', 100))
    .outputFluids(safeFluidOf('susy:tantalite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('4ni7id6xtchfth') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:tantalite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_tantalite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('xu5bi0j0oimuqb') // remapped from original line 68
    .itemInputs('1x #forge:dusts/flotated_tantalite')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 14000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:impure_fluorotantalic_acid_solution', 1000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('wg7f2vtevn8b0f') // remapped from original line 77
    .inputFluids(safeFluidOf('susy:impure_fluorotantalic_acid_solution', 1000))
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 8000))
    .outputFluids(safeFluidOf('susy:tantalum_rich_extract', 8000))
    .outputFluids(safeFluidOf('susy:metal_sulfate_waste', 1000))
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('rs3pkhvsygbuyy') // remapped from original line 86
    .inputFluids(safeFluidOf('susy:tantalum_rich_extract', 500))
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 500))
    .outputFluids(safeFluidOf('susy:scrubbed_tantalum_rich_extract', 500))
    .duration(5)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('4c1xhyamcya4u6') // remapped from original line 94
    .inputFluids(safeFluidOf('susy:scrubbed_tantalum_rich_extract', 9000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:tantalum_extract', 9000))
    .outputFluids(safeFluidOf('susy:purified_fluoroniobic_acid_solution', 1000))
    .duration(90)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('lr4rwkcgozga0j') // remapped from original line 103
    .inputFluids(safeFluidOf('susy:tantalum_extract', 8000))
    .inputFluids(safeFluidOf('susy:diluted_ammonia_solution', 2000))
    .outputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 8000))
    .outputFluids(safeFluidOf('susy:fluorotantalic_acid_solution', 2000)) 
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.susy.crystallizer('9rsuv8hzhccznd') // remapped from original line 112
    .itemInputs('36x #forge:dusts/potassium_fluoride')
    .inputFluids(safeFluidOf('susy:fluorotantalic_acid_solution', 5000))
    .itemOutputs('45x #forge:dusts/potassium_heptafluorotantalate')
    .outputFluids(safeFluidOf('susy:hydrofluoric_ammonia_mixture', 5000))
    .duration(180)
    .EUt(voltAmps[3])

  event.recipes.gtceu.DISTILLATION_TOWER('jq7zxgsawuxbov') // remapped from original line 121
    .inputFluids(safeFluidOf('susy:hydrofluoric_ammonia_mixture', 2500))
    .outputFluids(safeFluidOf('minecraft:water', 2500))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 9000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 1250))
    .duration(90)
    .EUt(voltAmps[3])

  event.recipes.susy.reaction_furnace('snh7sq22grivmy') // remapped from original line 130
    .itemInputs('10x #forge:dusts/potassium_heptafluorotantalate')
    .itemInputs('5x #forge:dusts/any_purity_sodium')
    .itemOutputs('1x #forge:dusts/tantalum')
    .itemOutputs('10x #forge:dusts/sodium_fluoride')
    .itemOutputs('4x #forge:dusts/potassium_fluoride')
    .duration(40)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('x279omao4azjcw') // remapped from original line 141
    .inputFluids(safeFluidOf('susy:diluted_tantalum_extract', 4500))
    .inputFluids(safeFluidOf('susy:diluted_ammonia_solution', 250))
    .outputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 4500))
    .outputFluids(safeFluidOf('susy:fluorotantalic_acid_solution', 250)) 
    .duration(80)
    .EUt(voltAmps[3])

  event.recipes.gtceu.fluid_solidifier('crolk1wwurmaax') // remapped from original line 151
    .inputFluids(safeFluidOf('susy:tantalum_pentachloride', 1000))
    .itemOutputs('6x #forge:dusts/tantalum_pentachloride')
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('psmtsda3usocrv') // remapped from original line 158
    .itemInputs('6x #forge:dusts/tantalum_pentachloride')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 5000))
    .itemOutputs('6x #forge:dusts/tantalum_fluoride')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 5000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.gtceu.mixer('kzezrvu1dw7ofw') // remapped from original line 167
    .itemInputs('6x #forge:dusts/tantalum_fluoride')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:tantalum_fluoride_solution', 2000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.crystallizer('rgysjphfxctzpi') // remapped from original line 175
    .itemInputs('4x #forge:dusts/potassium_fluoride')
    .inputFluids(safeFluidOf('susy:tantalum_fluoride_solution', 2000))
    .itemOutputs('10x #forge:dusts/potassium_heptafluorotantalate')
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 2000))
    .duration(100)
    .EUt(voltAmps[3])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // FF = recipemap('froth_flotation')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // ROASTER = recipemap('roaster')
  // AUTOCLAVE = recipemap('autoclave')
  // CENTRIFUGE = recipemap('centrifuge')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // CRYSTALLIZER = recipemap('crystallizer')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  //     
});