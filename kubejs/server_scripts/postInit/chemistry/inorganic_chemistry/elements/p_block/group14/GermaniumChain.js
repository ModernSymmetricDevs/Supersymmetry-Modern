ServerEvents.recipes(event => {

  event.recipes.gtceu.chemical_bath('ug35mnd67yvrel') // remapped from original line 19
    .itemInputs('1x #forge:logs/wood')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 100))
    .outputFluids(safeFluidOf('susy:tannic_acid_solution', 100))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('a6b5kv8eugeixw') // remapped from original line 54
    .itemInputs('1x #forge:dusts/germanium_rich_oxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:germanium_leach', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('epwjsu5vqvqotl') // remapped from original line 62
    .itemInputs('1x #forge:dusts/waelz_oxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:germanium_leach', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('gqwdmq3p8tupv8') // remapped from original line 70
    .inputFluids(safeFluidOf('susy:tannic_acid_solution', 100))
    .inputFluids(safeFluidOf('susy:germanium_leach', 1000))
    .chancedOutput('8000x #forge:dusts/germanium_concentrate', 8000, 0)
    .outputFluids(safeFluidOf('susy:zinc_leach', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('vfmn3bilp8xija') // remapped from original line 81
    .itemInputs('1x #forge:dusts/oxalic_acid')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:oxalic_acid_solution', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('mnn4am9xptlywb') // remapped from original line 89
    .itemInputs('2x #forge:dusts/germanium_rich_oxide')
    .inputFluids(safeFluidOf('susy:oxalic_acid_solution', 1000))
    .itemOutputs('1x #forge:dusts/lead_silica_residue')
    .outputFluids(safeFluidOf('susy:germanium_oxalate_leach', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('kidh3zgvtjy4va') // remapped from original line 98
    .itemInputs('2x #forge:dusts/small_iron')
    .inputFluids(safeFluidOf('susy:germanium_oxalate_leach', 8000))
    .itemOutputs('9x #forge:dusts/iron_oxalate_dihydrate')
    .outputFluids(safeFluidOf('susy:purified_germanium_oxalate_leach', 6000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('rgrin4nkdmw8di') // remapped from original line 107
    .itemInputs('9x #forge:dusts/iron_oxalate_dihydrate')
    .itemOutputs('2x #forge:dusts/iron_ii_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.blender('9aslegaul2ebzs') // remapped from original line 117
    .inputFluids(safeFluidOf('susy:kerosene', 700))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 200))
    .inputFluids(safeFluidOf('susy:tri_octyl_decyl_amine', 200))
    .inputFluids(safeFluidOf('susy:tributyl_phosphate', 100))
    .outputFluids(safeFluidOf('susy:germanium_gallium_extraction_mixture', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('s6ztxefskkvjju') // remapped from original line 127
    .inputFluids(safeFluidOf('susy:germanium_gallium_extraction_mixture', 1000))
    .inputFluids(safeFluidOf('susy:purified_germanium_oxalate_leach', 1000))
    .outputFluids(safeFluidOf('susy:germanium_gallium_extract', 1000))
    .outputFluids(safeFluidOf('susy:oxalic_acid_solution', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.centrifuge('2el3nxdmthwhts') // remapped from original line 136
    .inputFluids(safeFluidOf('susy:germanium_gallium_extract', 1000))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 600))
    .outputFluids(safeFluidOf('susy:germanium_extract', 1000))
    .outputFluids(safeFluidOf('susy:gallium_sulfate_solution', 300))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.ELECTROLYZER('gw7dt30o06izx8') // remapped from original line 146
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('susy:gallium_sulfate_solution', 3000))
    .itemOutputs('2x #forge:dusts/gallium')
    .itemOutputs('6x #forge:dusts/oxalic_acid')
    .outputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.gtceu.centrifuge('duvhrawlotaiky') // remapped from original line 158
    .inputFluids(safeFluidOf('susy:germanium_extract', 1000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 200))
    .outputFluids(safeFluidOf('susy:germanium_gallium_extraction_mixture', 1000))
    .outputFluids(safeFluidOf('susy:germanium_oxalate_solution', 400))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('6rznmwpu8ddubi') // remapped from original line 167
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:germanium_oxalate_solution', 400))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 400))
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .outputFluids(safeFluidOf('susy:impure_germanium_tetrachloride', 100))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('xiskg8qk1onx8r') // remapped from original line 180
    .notConsumable('1x #forge:springs/cupronickel')
    .itemInputs('1x #forge:dusts/germanium_concentrate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 400))
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .outputFluids(safeFluidOf('susy:impure_germanium_tetrachloride', 100))
    .outputFluids(safeFluidOf('susy:wastewater', 600))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('rml4ktvpv95ipe') // remapped from original line 191
    .inputFluids(safeFluidOf('susy:impure_germanium_tetrachloride', 1000))
    .outputFluids(safeFluidOf('susy:arsenic_trichloride', 100))
    .outputFluids(safeFluidOf('susy:germanium_tetrachloride', 900))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('wmwygqozillzdy') // remapped from original line 199
    .inputFluids(safeFluidOf('susy:germanium_tetrachloride', 1000))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 6000))
    .itemOutputs('3x #forge:dusts/germanium_dioxide')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 4000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.tube_furnace('otrnaqmqann9on') // remapped from original line 208
    .itemInputs('3x #forge:dusts/germanium_dioxide')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .itemOutputs('1x #forge:dusts/germanium')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.zone_refiner('rfggmndd5stnhk') // remapped from original line 217
    .itemInputs('1x #forge:ingots/germanium')
    .itemOutputs('1x #forge:ingots/high_purity_germanium')
    .duration(200)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in rotary_kiln_fuels) {
  // 	for (comburent in rotary_kiln_comburents) {
  // 		ROTARY_KILN.recipeBuilder()
  // 			.inputs(ore('dustZincResidues') * 8)
  // 			.input(new GTRecipeItemInput(carbons, 1))
  // 			.outputs(metaitem('dustGermaniumRichOxide') )
  // 			.outputs(metaitem('dustWaelzSlag'))
  // 			.fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  // 			.fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  // 			.fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  // 			.duration(fuel.duration + comburent.duration)
  // 			.EUt(120)
  // 			.buildAndRegister()
  // 	}
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import gregtech.api.recipes.ingredients.GTRecipeItemInput;
  // AUTOCLAVE = recipemap('autoclave')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // DT = recipemap('distillation_tower')
  // BR = recipemap('batch_reactor')
  // TUBE_FURNACE = recipemap('tube_furnace')
  // ZONE_REFINER = recipemap('zone_refiner')
  // MIXER = recipemap('mixer')
  // BLENDER = recipemap('blender')
  // CENTRIFUGE = recipemap('centrifuge')
  // ROASTER = recipemap('roaster')
  // oreDict.add('dustZincResidues', metaitem('dustZincHydrochloricLeachResidue'))
  // oreDict.add('dustZincResidues', metaitem('dustZincLeachResidue'))
  // carbons = new ItemStack[]{
  //         metaitem('dustCarbon'),
  //         metaitem('dustHighPurityCarbon'),
  //         metaitem('dustCoke')
  // }
});