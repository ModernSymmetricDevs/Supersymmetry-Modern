ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/galena' && safeFluidOf('gtceu:oxygen')})

  event.recipes.gtceu.MIXER('snwwpswpl9qx7l') // remapped from original line 26
    .itemInputs('8x #forge:dusts/impure_galena')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .outputFluids(safeFluidOf('susy:impure_galena_slurry', 3000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('azayqfwwec64jq') // remapped from original line 34
    .inputFluids(safeFluidOf('susy:impure_galena_slurry', 3000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .notConsumable(safeFluidOf('susy:sodium_cyanide_solution', 100))
    .outputFluids(safeFluidOf('susy:galena_slurry', 1000))
    .outputFluids(safeFluidOf('susy:galena_byproducts_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('6ysn8f94na9soa') // remapped from original line 44
    .inputFluids(safeFluidOf('susy:galena_slurry', 1000))
    .itemOutputs('16x #forge:dusts/galena')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.froth_flotation('cingaop3aiuhzj') // remapped from original line 52
    .inputFluids(safeFluidOf('susy:galena_byproducts_slurry', 2000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .outputFluids(safeFluidOf('susy:sphalerite_byproduct_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('j1eusaojz4i8jj') // remapped from original line 61
    .inputFluids(safeFluidOf('susy:sphalerite_byproduct_slurry', 1000))
    .itemOutputs('2x #forge:dusts/sphalerite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.MIXER('ra03ojjhshgasq') // remapped from original line 70
    .itemInputs('8x #forge:dusts/impure_cerussite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_cerussite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('0r4frheartod0z') // remapped from original line 78
    .inputFluids(safeFluidOf('susy:impure_cerussite_slurry', 2000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .outputFluids(safeFluidOf('susy:cerussite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('vuqjldqfjyfpge') // remapped from original line 87
    .inputFluids(safeFluidOf('susy:cerussite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/cerussite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('vzhkcqm6cpdeat') // remapped from original line 95
    .itemInputs('1x #forge:dusts/cerussite')
    .itemOutputs('2x #forge:dusts/massicot')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.MIXER('z8vpedombgaykk') // remapped from original line 104
    .itemInputs('8x #forge:dusts/impure_anglesite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_anglesite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('yyx6br6f8a1jtg') // remapped from original line 112
    .inputFluids(safeFluidOf('susy:impure_anglesite_slurry', 2000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .outputFluids(safeFluidOf('susy:anglesite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('6vew2jkevgqm2i') // remapped from original line 121
    .inputFluids(safeFluidOf('susy:anglesite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/anglesite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.batch_reactor('eet9yz11gdxsj4') // remapped from original line 182
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .inputFluids(safeFluidOf('susy:crude_lead', 3600))
    .itemOutputs('2x #forge:dusts/copper_dross')
    .outputFluids(safeFluidOf('susy:decoppered_lead', 3600))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.AUTOCLAVE('nx8rjnkgjfm7qd') // remapped from original line 191
    .itemInputs('2x #forge:dusts/copper_dross')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .outputFluids(safeFluidOf('susy:copper_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.distillery('lkdle21azyqdqg') // remapped from original line 201
    .inputFluids(safeFluidOf('susy:copper_sulfate_solution', 1000))
    .itemOutputs('6x #forge:dusts/copper_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.reaction_furnace('h749nigvsarhfc') // remapped from original line 210
    .inputFluids(safeFluidOf('susy:sodium_nitrate', 720))
    .inputFluids(safeFluidOf('susy:decoppered_lead', 1440))
    .inputFluids(safeFluidOf('gtceu:sodium_hydroxide', 288))
    .itemOutputs('1x #forge:dusts/harris_slag')
    .outputFluids(safeFluidOf('susy:softened_lead', 1440))
    .outputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 900))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('nre1dmeaxheehm') // remapped from original line 222
    .itemInputs('1x #forge:dusts/harris_slag')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 10))
    .chancedOutput('400x #forge:dusts/sodium_antimonate', 400, 0)
    .outputFluids(safeFluidOf('susy:sodium_arsenate_stannate_solution', 10))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.distillery('ekuquekhkppkbn') // remapped from original line 231
    .inputFluids(safeFluidOf('susy:sodium_arsenate_stannate_solution', 1000))
    .itemOutputs('6x #forge:dusts/sodium_arsenate_stannate_mixture')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.extractor('orat9cbj2gp69g') // remapped from original line 239
    .itemInputs('6x #forge:dusts/sodium_arsenate_stannate_mixture')
    .outputFluids(safeFluidOf('susy:sodium_arsenate', 1152))
    .itemOutputs('25x #forge:dusts/sodium_stannate')
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.fluid_solidifier('8pemjmzf201uwj') // remapped from original line 247
    .inputFluids(safeFluidOf('susy:sodium_arsenate', 1152))
    .itemOutputs('8x #forge:dusts/sodium_arsenate')
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('ol6uutmq83b7xq') // remapped from original line 254
    .itemInputs('8x #forge:dusts/sodium_arsenate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 3000))
    .outputFluids(safeFluidOf('susy:salty_arsenic_acid', 3000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.roaster('7wvdwzf6rpwskl') // remapped from original line 262
    .inputFluids(safeFluidOf('susy:salty_arsenic_acid', 6000))
    .itemOutputs('7x #forge:dusts/salty_arsenic_pentoxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 9000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('w1gvfhusanw7va') // remapped from original line 270
    .itemInputs('7x #forge:dusts/salty_arsenic_pentoxide')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .itemOutputs('7x #forge:dusts/arsenic_v_oxide')
    .outputFluids(safeFluidOf('gtceu:salt_water', 6000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('m7wbejvsgfnm9p') // remapped from original line 279
    .itemInputs('6x #forge:dusts/sodium_stannate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs('3x #forge:dusts/tin_iv_oxide')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('mvxkrodiyn6syj') // remapped from original line 289
    .itemInputs('10x #forge:dusts/sodium_antimonate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemOutputs('7x #forge:dusts/antimony_v_oxide')
    .outputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.centrifuge('8fgl593a87s2qu') // remapped from original line 338
    .inputFluids(safeFluidOf('susy:softened_lead', 3600))
    .inputFluids(safeFluidOf('gtceu:zinc', 144))
    .outputFluids(safeFluidOf('susy:silver_free_lead', 3600))
    .outputFluids(safeFluidOf('susy:zinc_dross', 216))
    .EUt(120)
    .duration(200)

  event.recipes.susy.vacuum_chamber('2okxlhsvqismh2') // remapped from original line 347
    .inputFluids(safeFluidOf('susy:zinc_dross', 432))
    .itemOutputs('1x #forge:dusts/silver')
    .outputFluids(safeFluidOf('gtceu:zinc', 288))
    .EUt(120)
    .duration(200)

  event.recipes.susy.vacuum_chamber('bkwozzd9t1s80u') // remapped from original line 356
    .inputFluids(safeFluidOf('susy:silver_free_lead', 2880))
    .outputFluids(safeFluidOf('susy:dezinced_lead', 2880))
    .outputFluids(safeFluidOf('gtceu:zinc', 144))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.fluid_solidifier('e2mcnrpbngybbw') // remapped from original line 364
    .inputFluids(safeFluidOf('susy:dezinced_lead', 144))
    .notConsumable(metaitem('shape.mold.ingot'))
    .itemOutputs('1x #forge:ingots/lead')
    .EUt(7)
    .duration(20)

  event.recipes.susy.reaction_furnace('1qeiqgkai2eqat') // remapped from original line 373
    .inputFluids(safeFluidOf('susy:silver_free_lead', 9600))
    .itemInputs('6x #forge:dusts/any_purity_magnesium')
    .itemInputs('3x #forge:dusts/any_purity_calcium')
    .outputFluids(safeFluidOf('gtceu:lead', 9600))
    .outputFluids(safeFluidOf('susy:bismuth_dross', 1440))
    .outputFluids(safeFluidOf('susy:antimony_dross', 720))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('ixx1u7ddyb8bcn') // remapped from original line 384
    .inputFluids(safeFluidOf('susy:bismuth_dross', 720))
    .inputFluids(safeFluidOf('gtceu:chlorine', 6000))
    .itemOutputs('2x #forge:dusts/bismuth')
    .itemOutputs('6x #forge:dusts/magnesium_chloride')
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.electrolytic_cell('2wo1euer57fiob') // remapped from original line 395
    .circuit(1)
    .notConsumable('1x #forge:plates/lead')
    .notConsumable(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .itemInputs('2x #forge:plates/crude_lead')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .chancedOutput('2x #forge:dusts/high_purity_lead', 9800, 0)
    .itemOutputs(metaitem('anode_slime.lead'))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(256)
    .duration(400)

  event.recipes.gtceu.electrolytic_cell('wtvr40aam0rk21') // remapped from original line 408
    .circuit(2)
    .notConsumable('1x #forge:plates/lead')
    .notConsumable(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .itemInputs('2x #forge:plates/crude_lead')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .chancedOutput('2x #forge:dusts/lead', 9900, 0)
    .itemOutputs(metaitem('anode_slime.lead'))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(256)
    .duration(400)

  event.recipes.gtceu.electrolytic_cell('wiqp3bdkrsy5wr') // remapped from original line 421
    .notConsumable('1x #forge:plates/lead')
    .notConsumable(safeFluidOf('susy:hexafluorosilicic_acid', 1000))
    .itemInputs('2x #forge:plates/lead')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .chancedOutput('2x #forge:dusts/high_purity_lead', 9900, 0)
    .itemOutputs(metaitem('anode_slime.lead'))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(256)
    .duration(400)

  event.recipes.susy.roaster('yzg08ecm2d7tew') // remapped from original line 434
    .circuit(10)
    .itemInputs(metaitem('anode_slime.lead'))
    .itemOutputs('1x #forge:dusts/black_metal')
    .EUt(voltAmps[3])
    .duration(400)

  event.recipes.susy.roaster('suzggcrcv39mlh') // remapped from original line 442
    .itemInputs('50x #forge:dusts/black_metal')
    .inputFluids(safeFluidOf('gtceu:oxygen', 6000))
    .outputFluids(safeFluidOf('susy:antimony_arsenic_flue_gas', 1000))
    .itemOutputs('2x #forge:dusts/burned_black_metal')
    .EUt(voltAmps[3])
    .duration(400)

  event.recipes.gtceu.sifter('0gayl47n2cuxia') // remapped from original line 451
    .notConsumable(metaitem('item_filter'))
    .inputFluids(safeFluidOf('susy:antimony_arsenic_flue_gas', 1000))
    .itemOutputs('1x #forge:dusts/antimony_arsenic_flue_dust')
    .outputFluids(safeFluidOf('susy:flue_gas', 1000))
    .EUt(120)
    .duration(160)

  event.recipes.susy.reaction_furnace('zynwuxhbfh3sfn') // remapped from original line 460
    .itemInputs('2x #forge:dusts/burned_black_metal')
    .inputFluids(safeFluidOf('gtceu:oxygen', 2500))
    .itemOutputs('1x #forge:dusts/silver')
    .itemOutputs('5x #forge:dusts/litharge_slag')
    .EUt(voltAmps[3])
    .duration(400)

  event.recipes.susy.batch_reactor('4cwmti6fsku9lw') // remapped from original line 469
    .itemInputs('1x #forge:dusts/any_purity_sulfur')
    .inputFluids(safeFluidOf('susy:betts_crude_lead', 1440))
    .itemOutputs('2x #forge:dusts/copper_dross')
    .outputFluids(safeFluidOf('susy:decoppered_betts_lead', 1296))
    .EUt(voltAmps[3])
    .duration(400)

  event.recipes.susy.reaction_furnace('7tgs69bi5a98z9') // remapped from original line 478
    .inputFluids(safeFluidOf('susy:decoppered_betts_lead', 2592))
    .itemInputs('6x #forge:dusts/any_purity_magnesium')
    .itemInputs('3x #forge:dusts/any_purity_calcium')
    .outputFluids(safeFluidOf('gtceu:lead', 1728))
    .outputFluids(safeFluidOf('susy:bismuth_dross', 2160))
    .EUt(voltAmps[3])
    .duration(800)

  event.recipes.gtceu.electrolyzer('zgjl94crsgzqsj') // remapped from original line 488
    .inputFluids(safeFluidOf('susy:lead_chloride', 432))
    .notConsumable(metaitem('graphite_electrode') * 1)
    .notConsumable('1x #forge:plates/lead')
    .itemOutputs('1x #forge:dusts/lead')
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.roaster('gz6mvmx99etbw1') // remapped from original line 498
    .itemInputs('5x #forge:dusts/lead_ii_hydroxide')
    .itemOutputs('2x #forge:dusts/lead_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.electric_blast_furnace('vurcvmyzd2sons') // remapped from original line 506
    .itemInputs('2x #forge:dusts/lead_oxide')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .itemOutputs('1x #forge:dusts/lead')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .blastFurnaceTemp(1200)
    .duration(80)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in rotary_kiln_fuels) {
  //     for (comburent in rotary_kiln_comburents) {
  //         ROTARY_KILN.recipeBuilder()
  //                 .inputs(ore('dustMassicot') * 2)
  //                 .outputs(metaitem('dustSinteredLeadConcentrate') * 2)
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                 .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                 .duration(fuel.duration + comburent.duration)
  //                 .EUt(120)
  //                 .buildAndRegister()
  // 
  //         ROTARY_KILN.recipeBuilder()
  //                 .inputs(ore('dustGalena') * 1)
  //                 .outputs(metaitem('dustSinteredLeadConcentrate') * 2)
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                 .fluidOutputs(fluid('sulfur_dioxide') * 1000)
  //                 .duration(fuel.duration + comburent.duration)
  //                 .EUt(120)
  //                 .buildAndRegister()
  // 
  //         ROTARY_KILN.recipeBuilder()
  //                 .inputs(ore('dustAnglesite') * 1)
  //                 .outputs(metaitem('dustSinteredLeadConcentrate') * 2)
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                 .fluidOutputs(fluid('sulfur_trioxide') * 1000)
  //                 .duration(fuel.duration + comburent.duration)
  //                 .EUt(120)
  //                 .buildAndRegister()
  //     }
  // }

  // for (combustible in combustibles) {
  //     EBF.recipeBuilder()
  //             .inputs(ore('dustSinteredLeadConcentrate') * 2)
  //             .inputs(ore(combustible.name) * combustible.equivalent(1))
  //             .inputs(ore('dustTinyCalcite'))
  //             .outputs(metaitem('ingotCrudeLead') * 2)
  //             .outputs(metaitem(combustible.byproduct))
  //             .fluidOutputs(fluid('zinc_oxide_fume_gas') * 1000)
  //             .EUt(120)
  //             .blastFurnaceTemp(850)
  //             .duration(160)
  //             .buildAndRegister()
  // }

  // for (carbon in sources) {
  //     ROASTER.recipeBuilder()
  //             .inputs(ore('dustAntimonyVOxide') * 7)
  //             .inputs(ore(carbon.name) * carbon.equivalent(5))
  //             .outputs(metaitem('dustAntimony') * 2)
  //             .fluidOutputs(fluid('carbon_monoxide') * 5000)
  //             .EUt(120)
  //             .duration(200)
  //             .buildAndRegister()
  // 
  //     ROASTER.recipeBuilder()
  //             .inputs(ore('dustAntimonyTrioxide') * 5)
  //             .inputs(ore(carbon.name) * carbon.equivalent(3))
  //             .outputs(metaitem('dustAntimony') * 2)
  //             .fluidOutputs(fluid('carbon_monoxide') * 3000)
  //             .EUt(120)
  //             .duration(200)
  //             .buildAndRegister()
  // 
  //     ROASTER.recipeBuilder()
  //             .inputs(ore('dustTinIvOxide') * 3)
  //             .inputs(ore(carbon.name) * carbon.equivalent(2))
  //             .outputs(metaitem('dustTin'))
  //             .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //             .EUt(120)
  //             .duration(200)
  //             .buildAndRegister()
  // 
  //     if (carbon.equivalent(23) <= 64) {
  //         ROASTER.recipeBuilder()
  //                 .inputs(ore('dustLithargeSlag') * 10)
  //                 .inputs(ore(carbon.name) * carbon.equivalent(23))
  //                 .outputs(metaitem('ingotBettsCrudeLead') * 10)
  //                 .EUt(Globals.voltAmps[3])
  //                 .duration(400)
  //                 .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // import static globals.SinteringGlobals.*
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // EBF = recipemap('electric_blast_furnace')
  // CENTRIFUGE = recipemap('centrifuge')
  // ROASTER = recipemap('roaster')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // BR = recipemap('batch_reactor')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // FLOTATION = recipemap('froth_flotation')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // DISTILLERY = recipemap('distillery')
  // FLUID_EXTRACTOR = recipemap('extractor')
  // ELECTROLYZER = recipemap('electrolyzer')
  // SIFTER = recipemap('sifter')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // CLARIFIER = recipemap('clarifier')
  // def combustibles = combustibles()
});