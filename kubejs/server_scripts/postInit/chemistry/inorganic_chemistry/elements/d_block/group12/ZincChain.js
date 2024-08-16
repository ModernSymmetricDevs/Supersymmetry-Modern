ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/sphalerite' && safeFluidOf('gtceu:oxygen')})

  event.recipes.gtceu.mixer('zmjmhu719iqa1a') // remapped from original line 41
    .itemInputs('4x #forge:dusts/impure_sphalerite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_sphalerite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('bysanvldkglelr') // remapped from original line 49
    .inputFluids(safeFluidOf('susy:impure_sphalerite_slurry', 16000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .notConsumable(safeFluidOf('susy:cresol', 100))
    .notConsumable(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('susy:galena_slurry', 3000))
    .outputFluids(safeFluidOf('susy:unprocessed_sphalerite_slurry', 16000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('rtntstkjdml6fg') // remapped from original line 60
    .inputFluids(safeFluidOf('susy:unprocessed_sphalerite_slurry', 16000))
    .notConsumable('1x #forge:dusts/potassium_amyl_xanthate')
    .notConsumable(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('susy:sphalerite_slurry', 16000))
    .itemOutputs('16x #forge:dusts/granite_tailings')
    .EUt(480)
    .duration(200)

  event.recipes.susy.clarifier('jx21hpqzxyhcld') // remapped from original line 70
    .inputFluids(safeFluidOf('susy:sphalerite_slurry', 16000))
    .outputFluids(safeFluidOf('susy:wastewater', 16000))
    .itemOutputs('64x #forge:dusts/sphalerite')
    .EUt(30)
    .duration(20)

  event.recipes.gtceu.mixer('xhs6kel4hyt6hp') // remapped from original line 78
    .itemInputs('4x #forge:dusts/impure_smithsonite')
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:impure_smithsonite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('w15oia4veki4rh') // remapped from original line 86
    .inputFluids(safeFluidOf('susy:impure_smithsonite_slurry', 16000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .notConsumable(safeFluidOf('susy:cresol', 100))
    .notConsumable(safeFluidOf('susy:soda_ash_solution', 1000))
    .outputFluids(safeFluidOf('susy:smithsonite_slurry', 16000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('wzjdrogarbkt0h') // remapped from original line 96
    .inputFluids(safeFluidOf('susy:smithsonite_slurry', 16000))
    .outputFluids(safeFluidOf('susy:wastewater', 16000))
    .itemOutputs('64x #forge:dusts/smithsonite')
    .EUt(30)
    .duration(20)

  event.recipes.susy.roaster('a2e5jhve4nz1yf') // remapped from original line 105
    .itemInputs('1x #forge:dusts/sphalerite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('susy:zinc_flue_gas', 1000))
    .itemOutputs('2x #forge:dusts/zincite')
    .EUt(30)
    .duration(200)

  event.recipes.susy.fluidized_bed_reactor('acbqcieyemint1') // remapped from original line 114
    .itemInputs('1x #forge:dusts/sphalerite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2000))
    .outputFluids(safeFluidOf('susy:zinc_flue_gas', 1000))
    .itemOutputs('2x #forge:dusts/zincite')
    .EUt(120)
    .duration(20)

  event.recipes.gtceu.sifter('oq5ulesznrn7kg') // remapped from original line 124
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:zinc_flue_gas', 1000))
    .chancedOutput('1000x #forge:dusts/zinc_flue', 1000, 250)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(120)
    .duration(20)

  event.recipes.susy.roaster('o5njbtwouvmyw2') // remapped from original line 133
    .itemInputs('1x #forge:dusts/smithsonite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('2x #forge:dusts/zincite')
    .EUt(30)
    .duration(200)

  event.recipes.susy.fluidized_bed_reactor('zrlezmdgwvbuex') // remapped from original line 141
    .itemInputs('10x #forge:dusts/smithsonite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 10000))
    .itemOutputs('20x #forge:dusts/zincite')
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.fluid_solidifier('ipiwb7xflisyuj') // remapped from original line 173
    .notConsumable(metaitem('shape.mold.ingot'))
    .inputFluids(safeFluidOf('susy:crude_zinc', 216))
    .itemOutputs('1x #forge:ingots/zinc')
    .EUt(7)
    .duration(20)

  event.recipes.gtceu.fluid_solidifier('mozyln1pg3nky7') // remapped from original line 181
    .notConsumable(metaitem('shape.mold.ingot'))
    .inputFluids(safeFluidOf('susy:cadmium_rich_zinc', 180))
    .itemOutputs('1x #forge:ingots/zinc')
    .EUt(7)
    .duration(20)

  event.recipes.susy.high_temperature_distillation('rlayvl8yg0gfh7') // remapped from original line 189
    .inputFluids(safeFluidOf('susy:crude_zinc', 2160))
    .chancedOutput('200x #forge:dusts/iron', 200, 100)
    .outputFluids(safeFluidOf('susy:cadmium_rich_zinc', 2160))
    .outputFluids(safeFluidOf('gtceu:copper', 36))
    .outputFluids(safeFluidOf('gtceu:lead', 72))
    .outputFluids(safeFluidOf('gtceu:tin', 36))
    .EUt(120)
    .duration(300)

  event.recipes.susy.high_temperature_distillation('cmlqvow0ey4khz') // remapped from original line 200
    .inputFluids(safeFluidOf('susy:cadmium_rich_zinc', 2160))
    .outputFluids(safeFluidOf('gtceu:zinc', 2160))
    .outputFluids(safeFluidOf('gtceu:cadmium', 144))
    .EUt(480)
    .duration(300)

  event.recipes.gtceu.chemical_bath('asufssbv30en0n') // remapped from original line 209
    .itemInputs('2x #forge:dusts/zincite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:zinc_leach', 1000))
    .itemOutputs('1x #forge:dusts/zinc_leach_residue')
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.fluid_heater('otjkpn3mnu29vs') // remapped from original line 218
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .outputFluids(safeFluidOf('susy:hot_sulfuric_acid', 1000))
    .EUt(7)
    .duration(50)

  event.recipes.gtceu.chemical_bath('bbn2dgiyju8kwn') // remapped from original line 225
    .itemInputs('1x #forge:dusts/zinc_leach_residue')
    .inputFluids(safeFluidOf('susy:hot_sulfuric_acid', 125))
    .outputFluids(safeFluidOf('susy:hot_zinc_leach', 125))
    .chancedOutput('500x #forge:dusts/lead_silica_residue', 500, 500)
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.centrifuge('jo7xouu0ioeezr') // remapped from original line 234
    .itemInputs('1x #forge:dusts/lead_silica_residue')
    .chancedOutput('6000x #forge:dusts/silicon_dioxide', 6000, 0)
    .chancedOutput('4000x #forge:dusts/anglesite', 4000, 0)
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('fshkpidv2us1zp') // remapped from original line 242
    .itemInputs('2x #forge:dusts/sphalerite')
    .inputFluids(safeFluidOf('susy:hot_zinc_leach', 16000))
    .itemOutputs('2x #forge:dusts/sulfur')
    .outputFluids(safeFluidOf('susy:reduced_zinc_leach', 16000))
    .EUt(30)
    .duration(400)

  event.recipes.gtceu.autoclave('qqqxquvfaprm79') // remapped from original line 251
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .inputFluids(safeFluidOf('susy:reduced_zinc_leach', 16000))
    .outputFluids(safeFluidOf('susy:zinc_leach', 16000))
    .itemOutputs('5x #forge:dusts/iron_iii_oxide')
    .EUt(30)
    .duration(400)

  event.recipes.gtceu.mixer('vwba5rtoh7e6e3') // remapped from original line 260
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemInputs('1x #forge:dusts/zinc')
    .outputFluids(safeFluidOf('susy:zinc_cementation_slurry', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('dw8byl0czlereb') // remapped from original line 268
    .inputFluids(safeFluidOf('susy:zinc_leach', 1000))
    .inputFluids(safeFluidOf('susy:zinc_cementation_slurry', 100))
    .outputFluids(safeFluidOf('susy:precipitated_zinc_leach', 1000))
    .itemOutputs('1x #forge:dusts/copper_cadmium_residue')
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.fluid_heater('qkdqujhqkjoogi') // remapped from original line 277
    .inputFluids(safeFluidOf('susy:precipitated_zinc_leach', 1000))
    .outputFluids(safeFluidOf('susy:hot_precipitated_zinc_leach', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.mixer('ryln6e7gpvfncg') // remapped from original line 284
    .inputFluids(safeFluidOf('susy:hot_precipitated_zinc_leach', 1000))
    .inputFluids(safeFluidOf('susy:zinc_cementation_slurry', 40))
    .outputFluids(safeFluidOf('susy:reprecipitated_zinc_leach', 1000))
    .itemOutputs('1x #forge:dusts/cobalt_residue')
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.centrifuge('13iakfsmhizkfo') // remapped from original line 293
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemInputs('20x #forge:dusts/cobalt_residue')
    .outputFluids(safeFluidOf('susy:zinc_leach', 1000))
    .itemOutputs('1x #forge:dusts/cobalt')
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.electrolytic_cell('ksk4ufnakvf03o') // remapped from original line 302
    .notConsumable('4x #forge:plates/lead')
    .notConsumable('4x #forge:plates/aluminium')
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 50))
    .inputFluids(safeFluidOf('susy:reprecipitated_zinc_leach', 1000))
    .itemOutputs('1x #forge:dusts/zinc')
    .chancedOutput('2500x #forge:dusts/zinc', 2500, 500)
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1050))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1050))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.electrolytic_cell('hsq9ruucdmduso') // remapped from original line 318
    .notConsumable('4x #forge:plates/lead')
    .notConsumable('4x #forge:plates/aluminium')
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 50))
    .inputFluids(safeFluidOf('susy:reprecipitated_zinc_leach', 1000))
    .itemOutputs('1x #forge:dusts/high_purity_zinc')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1050))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1050))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.sifter('6eda7iotfr3ot6') // remapped from original line 334
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:zinc_oxide_fume_gas', 1000))
    .chancedOutput('1000x #forge:dusts/zinc_oxide_fume', 1000, 0)
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .EUt(120)
    .duration(160)

  event.recipes.gtceu.centrifuge('mlkaoy0azjoter') // remapped from original line 365
    .itemInputs('1x #forge:dusts/waelz_slag')
    .chancedOutput('5000x #forge:dusts/hematite', 5000, 0)
    .chancedOutput('2x #forge:dusts/quicklime', 2500, 0)
    .chancedOutput('3x #forge:dusts/silicon_dioxide', 2500, 0)
    .EUt(30)
    .duration(40)

  event.recipes.gtceu.ELECTROLYZER('1sjqmojvtqyy6d') // remapped from original line 374
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/zinc')
    .inputFluids(safeFluidOf('susy:zinc_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/zinc')
    .EUt(30)
    .duration(300)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (combustible in combustibles()) {
  //     ROASTER.recipeBuilder()
  //             .inputs(ore('dustZincite') * 2)
  //             .inputs(ore(combustible.name) * combustible.equivalent(1))
  //             .outputs(metaitem(combustible.byproduct))
  //             .fluidOutputs(fluid('crude_zinc') * 216)
  //             .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //             .EUt(30)
  //             .duration(160 * combustible.duration)
  //             .buildAndRegister()
  // }

  // for (highPurityCombustible in highPurityCombustibles()) {
  //         ROASTER.recipeBuilder()
  //             .inputs(ore('dustZincOxide') * 2)
  //             .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(1))
  //             .outputs(metaitem('dustZinc'))
  //             .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //             .EUt(30)
  //             .duration(160 * highPurityCombustible.duration)
  //             .buildAndRegister()
  // }

  // for (fuel in rotary_kiln_fuels) {
  // 	for (comburent in rotary_kiln_comburents) {
  // 		ROTARY_KILN.recipeBuilder()
  // 			.inputs(ore('dustZincOxideFume') * 2)
  // 			.input(new GTRecipeItemInput(carbons, 1))
  // 			.outputs(metaitem('dustWaelzOxide'))
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
  // import static globals.CarbonGlobals.*
  // import static globals.SinteringGlobals.*
  // import gregtech.api.recipes.ingredients.GTRecipeItemInput;
  // FLOTATION = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // HT_DISTILLATION_TOWER = recipemap('high_temperature_distillation')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // SIFTER = recipemap('sifter')
  // CENTRIFUGE = recipemap('centrifuge')
  // PYROLYSE = recipemap('pyrolyse_oven')
  // LCR = recipemap('large_chemical_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // VULCANIZER = recipemap('vulcanizing_press')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // ARC_FURNACE = recipemap('arc_furnace')
  // AUTOCLAVE = recipemap('autoclave')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // ASSEMBLER = recipemap('assembler')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // FLUID_HEATER = recipemap('fluid_heater')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // carbons = new ItemStack[]{
  //         metaitem('dustCarbon'),
  //         metaitem('dustHighPurityCarbon'),
  //         metaitem('dustCoke')
  // }
});