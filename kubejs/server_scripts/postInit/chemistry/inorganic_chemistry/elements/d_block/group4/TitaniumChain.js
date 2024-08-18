ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/magnesium' && safeFluidOf('gtceu:titanium_tetrachloride')})

  event.recipes.gtceu.mixer('6emy27vl2szznv') // remapped from original line 24
    .itemInputs('8x #forge:dusts/impure_ilmenite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_ilmenite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('r0kzkatytcs88o') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:impure_ilmenite_slurry', 2000))
    .notConsumable(safeFluidOf('gtceu:diluted_sulfuric_acid', 1000))
    .notConsumable(safeFluidOf('susy:oleic_acid', 144))
    .notConsumable('2x #forge:dusts/sodium_fluoride')
    .outputFluids(safeFluidOf('susy:ilmenite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:ultramafic_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('vso1n4pca2pugt') // remapped from original line 43
    .inputFluids(safeFluidOf('susy:ilmenite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/concentrate_ilmenite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.centrifuge('rzthi44dxoiw5t') // remapped from original line 51
    .inputFluids(safeFluidOf('susy:ultramafic_tailing_slurry', 1000))
    .itemOutputs('2x #forge:dusts/ultramafic_tailings')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electromagnetic_separator('xsjnnslajvw44w') // remapped from original line 59
    .itemInputs('1x #forge:dusts/concentrate_ilmenite')
    .itemOutputs('1x #forge:dusts/ilmenite')
    .chancedOutput('1x #forge:dusts/magnetite', 1000, 250)
    .chancedOutput('1x #forge:dusts/concentrate_rutile', 1000, 250)
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electromagnetic_separator('acfuovpqpgdiif') // remapped from original line 68
    .itemInputs('1x #forge:dusts/concentrate_rutile')
    .itemOutputs('1x #forge:dusts/rutile')
    .chancedOutput('1x #forge:dusts/zircon', 1000, 250)
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electromagnetic_separator('pytteeaggwl7k6') // remapped from original line 76
    .itemInputs('1x #forge:dusts/impure_perovskite')
    .itemOutputs('1x #forge:dusts/perovskite')
    .chancedOutput('1x #forge:dusts/concentrate_rutile', 1000, 250)
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('bgvvg70yebp05k') // remapped from original line 86
    .inputFluids(safeFluidOf('susy:oleum', 1000))
    .itemInputs('1x #forge:dusts/ilmenite')
    .outputFluids(safeFluidOf('susy:titanyl_sulfate_solution', 1000))
    .itemOutputs('1x #forge:dusts/ultramafic_tailings')
    .duration(200)
    .EUt(voltAmps[1])

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('laekq8k1gzac2y') // remapped from original line 95
    //.inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    //.inputFluids(safeFluidOf('susy:titanyl_sulfate_solution', 1000))
    //.outputFluids(safeFluidOf('susy:rutile_slurry', 2000))
    //.duration(160)
    //.EUt(voltAmps[1])

  event.recipes.gtceu.sifter('q8lwwicwdptcww') // remapped from original line 103
    .inputFluids(safeFluidOf('susy:rutile_slurry', 2000))
    .notConsumable(safeItemId('1x susy:item_filter'))
    .outputFluids(safeFluidOf('susy:acidic_wastewater', 2000))
    .itemOutputs('3x #forge:dusts/rutile')
    .duration(200)
    .EUt(voltAmps[0])

  event.recipes.susy.batch_reactor('4qolbaolcozycp') // remapped from original line 112
    .inputFluids(safeFluidOf('susy:acidic_wastewater', 1000))
    .itemInputs('1x #forge:dusts/soda_ash')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.vacuum_freezer('yk03lcngpcrm9j') // remapped from original line 167
    .inputFluids(safeFluidOf('susy:gaseous_iron_iii_chloride', 1000))
    .itemOutputs('4x #forge:dusts/iron_iii_chloride')
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.vacuum_freezer('3c3zsfavtfbbyz') // remapped from original line 174
    .inputFluids(safeFluidOf('susy:aluminium_chloride', 1000))
    .itemOutputs('4x #forge:dusts/aluminium_chloride')
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.vacuum_freezer('zvuejnmputc623') // remapped from original line 181
    .inputFluids(safeFluidOf('susy:gaseous_titanium_tetrachloride', 1000))
    .outputFluids(safeFluidOf('susy:impure_titanium_tetrachloride', 1000))
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('yecfk6oxyspig3') // remapped from original line 188
    .inputFluids(safeFluidOf('susy:impure_titanium_tetrachloride', 1000))
    .outputFluids(safeFluidOf('susy:distilled_titanium_tetrachloride', 1000))
    .outputFluids(safeFluidOf('susy:tin_tetrachloride', 50))
    .outputFluids(safeFluidOf('susy:silicon_tetrachloride', 50))
    .duration(400)
    .EUt(voltAmps[2]  * 2)

  event.recipes.susy.fixed_bed_reactor('0cj8a100aduxul') // remapped from original line 197
    .inputFluids(safeFluidOf('susy:distilled_titanium_tetrachloride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 25))
    .notConsumable('1x #forge:catalysts/bed_copper')
    .outputFluids(safeFluidOf('susy:vanadium_free_titanium_tetrachloride', 1000))
    .chancedOutput('1x #forge:dusts/vanadium_oxydichloride', 6000, 0)
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('3hgydgpdxokyqp') // remapped from original line 207
    .inputFluids(safeFluidOf('susy:vanadium_free_titanium_tetrachloride', 1000))
    .outputFluids(safeFluidOf('susy:aluminium_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 1000))
    .chancedOutput('1x #forge:dusts/iron_iii_chloride', 2000, 0)
    .duration(300)
    .EUt(voltAmps[2] * 2)

  event.recipes.susy.vacuum_chamber('p318midmzzlizg') // remapped from original line 233
    .itemInputs(safeItemId('1x susy:sponge.titanium.crude'))
    .itemOutputs(safeItemId('1x susy:sponge.titanium'))
    .outputFluids(safeFluidOf('gtceu:titanium_tetrachloride', 25))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.macerator('18lhypxxslrha6') // remapped from original line 241
    .itemInputs(safeItemId('1x susy:sponge.titanium'))
    .chancedOutput('1x #forge:dusts/titanium', 8500, 0)
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('m70d7btwsmywau') // remapped from original line 250
    .itemInputs('4x #forge:dusts/vanadium_oxydichloride')
    .inputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('susy:vanadium_oxytrichloride', 1000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('6asuagoic1uhnd') // remapped from original line 258
    .inputFluids(safeFluidOf('susy:vanadium_oxytrichloride', 2000))
    .inputFluids(safeFluidOf('minecraft:water', 9000))
    .itemOutputs('7x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 6000))
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('260qf5dh1qtn4e') // remapped from original line 267
    .inputFluids(safeFluidOf('susy:tin_tetrachloride', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .itemOutputs('3x #forge:dusts/tin_iv_oxide')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 4000))
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('nzihe5ta819lcr') // remapped from original line 278
    .itemInputs('1x #forge:dusts/titanium')
    .itemInputs('4x #forge:dusts/any_purity_iodine')
    .itemOutputs('5x #forge:dusts/titanium_iodide')
    .duration(240)
    .EUt(voltAmps[3])

  event.recipes.susy.CVD('4d7twsnmjmiba1') // remapped from original line 286
    .itemInputs('5x #forge:dusts/titanium_iodide')
    .notConsumable('1x #forge:rods/tungsten')
    .itemOutputs('1x #forge:dusts/high_purity_titanium')
    .outputFluids(safeFluidOf('gtceu:iodine', 576))
    .duration(120)
    .EUt(voltAmps[4])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (highPurityCombustible in highPurityCombustibles()) {
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //         .fluidInputs(fluid('chlorine') * 3000)
  //         .inputs(ore('dustIlmenite'))
  //         .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(1))
  //         .chancedOutput(metaitem(highPurityCombustible.byproduct), 1000, 0)
  //         .fluidOutputs(fluid('gaseous_iron_iii_chloride') * 800)
  //         .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //         .outputs(metaitem('dustRutile') * 3)
  //         .duration(100 * highPurityCombustible.duration)
  //         .EUt(Globals.voltAmps[1])
  //         .buildAndRegister()
  // 
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //         .fluidInputs(fluid('chlorine') * 2000)
  //         .inputs(ore('dustPerovskite'))
  //         .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(1))
  //         .chancedOutput(metaitem(highPurityCombustible.byproduct), 1000, 0)
  //         .fluidOutputs(fluid('calcium_chloride') * 432)
  //         .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //         .outputs(metaitem('dustRutile') * 3)
  //         .duration(100 * highPurityCombustible.duration)
  //         .EUt(Globals.voltAmps[1])
  //         .buildAndRegister()
  // 
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //         .inputs(ore('dustRutile') * 3)
  //         .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(2))
  //         .fluidInputs(fluid('chlorine') * 5000)
  // 		/*calculation:	 1000 TiCl4	* 4
  // 						+50 AlCl3	* 3
  // 						+1/4 FeCl3	* 20%	* 3000
  // 						+1/4 VOCl2	* 60%	* 2000
  // 						+50 SnCl4	*4
  // 						+50	SiCl4	*4
  // 		*/
  //         .chancedOutput(metaitem(highPurityCombustible.byproduct), 1000, 0)
  //         .fluidOutputs(fluid('gaseous_titanium_tetrachloride') * 1000)
  //         .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //         .duration(50 * highPurityCombustible.duration)
  //         .EUt(Globals.voltAmps[2])
  //         .buildAndRegister()
  // }

  // for (inertGas in Globals.inertGases) {
  //         EBF.recipeBuilder()
  //                 .circuitMeta(2)
  //                 .fluidInputs(fluid('titanium_tetrachloride') * 900)
  //                 .notConsumable(fluid(inertGas.name) * inertGas.amount_required)
  //                 .inputs(ore('dustMagnesium') * 2)
  //                 .outputs(metaitem('sponge.titanium.crude'))
  //                 .fluidOutputs(fluid('magnesium_chloride') * 756)
  //                 .chancedOutput(metaitem('dustMagnesium'), 2500, 0)
  //                 .blastFurnaceTemp(2150)
  //                 .duration(100 * inertGas.duration)
  //                 .EUt(Globals.voltAmps[3] * 2)
  //                 .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // MIXER = recipemap('mixer')
  // FF = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // BR = recipemap('batch_reactor')
  // SIFTER = recipemap('sifter')
  // FLUIDIZED_BED_REACTOR = recipemap('fluidized_bed_reactor')
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // MACERATOR = recipemap('macerator')
  // FIXED_BED_REACTOR = recipemap('fixed_bed_reactor')
  // EBF = recipemap('electric_blast_furnace')
});