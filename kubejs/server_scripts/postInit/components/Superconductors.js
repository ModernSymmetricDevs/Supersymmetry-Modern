ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/barium' && '#forge:dusts/calcium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:mercury') && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/samarium' && '#forge:dusts/iron' && '#forge:dusts/arsenic' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/yttrium' && '#forge:dusts/barium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/indium' && '#forge:dusts/tin' && '#forge:dusts/barium' && '#forge:dusts/titanium' && '#forge:dusts/copper' && 'susy:circuit.integrated' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/mercury_barium_calcium_cuprate' && 'susy:circuit.integrated' && safeFluidOf('gtceu:nitrogen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/mercury_barium_calcium_cuprate' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/samarium_iron_arsenic_oxide' && 'susy:circuit.integrated' && safeFluidOf('gtceu:helium')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/samarium_iron_arsenic_oxide' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/magnesium_diboride' && 'susy:circuit.integrated' && safeFluidOf('gtceu:nitrogen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/magnesium_diboride' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:macerator', input: '#forge:wires/gt_single_manganese_phosphide'})
  event.remove({ type: 'gtceu:macerator', input: '#forge:wires/gt_double_manganese_phosphide'})
  event.remove({ type: 'gtceu:macerator', input: '#forge:wires/gt_quadruple_manganese_phosphide'})
  event.remove({ type: 'gtceu:macerator', input: '#forge:wires/gt_octal_manganese_phosphide'})
  event.remove({ type: 'gtceu:macerator', input: '#forge:wires/gt_hex_manganese_phosphide'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:wires/gt_single_manganese_phosphide'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:wires/gt_double_manganese_phosphide'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:wires/gt_quadruple_manganese_phosphide'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:wires/gt_octal_manganese_phosphide'})
  event.remove({ type: 'gtceu:extractor', input: '#forge:wires/gt_hex_manganese_phosphide'})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_manganese_phosphide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_magnesium_diboride' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_mercury_barium_calcium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_uranium_triplatinum' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_samarium_iron_arsenic_oxide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_indium_tin_barium_titanium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_uranium_rhodium_dinaquadide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_enriched_naquadah_trinium_europium_duranide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_single_ruthenium_trinium_americium_neutronate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_manganese_phosphide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_magnesium_diboride' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_mercury_barium_calcium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_uranium_triplatinum' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_samarium_iron_arsenic_oxide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_indium_tin_barium_titanium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_uranium_rhodium_dinaquadide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_enriched_naquadah_trinium_europium_duranide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_double_ruthenium_trinium_americium_neutronate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_manganese_phosphide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_magnesium_diboride' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_mercury_barium_calcium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_uranium_triplatinum' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_samarium_iron_arsenic_oxide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_indium_tin_barium_titanium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_uranium_rhodium_dinaquadide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_enriched_naquadah_trinium_europium_duranide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_quadruple_ruthenium_trinium_americium_neutronate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_manganese_phosphide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_magnesium_diboride' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_mercury_barium_calcium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_uranium_triplatinum' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_samarium_iron_arsenic_oxide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_indium_tin_barium_titanium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_uranium_rhodium_dinaquadide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_enriched_naquadah_trinium_europium_duranide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_octal_ruthenium_trinium_americium_neutronate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_manganese_phosphide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_magnesium_diboride' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_mercury_barium_calcium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_uranium_triplatinum' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_samarium_iron_arsenic_oxide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_indium_tin_barium_titanium_cuprate' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_uranium_rhodium_dinaquadide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_enriched_naquadah_trinium_europium_duranide' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:arc_furnace', input: '#forge:wires/gt_hex_ruthenium_trinium_americium_neutronate' && safeFluidOf('gtceu:oxygen')})

  event.recipes.susy.tube_furnace('jsemv4pp6ej237') // remapped from original line 240
    .itemInputs(safeItemId('1x susy:cannedmagnesiumdiboride'))
    .inputFluids(safeFluidOf('gtceu:nitrogen', 500))
    .itemOutputs(safeItemId('1x susy:tubemagnesiumdiboride'))
    .duration(1006)
    .EUt(120)

  event.recipes.susy.tube_furnace('i2i5itwfbjhe7n') // remapped from original line 248
    .itemInputs(safeItemId('1x susy:cannedmagnesiumdiboride'))
    .inputFluids(safeFluidOf('gtceu:argon', 50))
    .itemOutputs(safeItemId('1x susy:tubemagnesiumdiboride'))
    .duration(670)
    .EUt(120)

  event.recipes.susy.tube_furnace('ko2x2zscjkztvn') // remapped from original line 256
    .itemInputs(safeItemId('1x susy:cannedmercurybariumcalciumcuprate'))
    .inputFluids(safeFluidOf('gtceu:nitrogen', 500))
    .itemOutputs(safeItemId('1x susy:tubemercurybariumcalciumcuprate'))
    .duration(1500)
    .EUt(480)

  event.recipes.susy.tube_furnace('bwetwansvtgdp2') // remapped from original line 264
    .itemInputs(safeItemId('1x susy:cannedmercurybariumcalciumcuprate'))
    .inputFluids(safeFluidOf('gtceu:argon', 50))
    .itemOutputs(safeItemId('1x susy:tubemercurybariumcalciumcuprate'))
    .duration(1005)
    .EUt(480)

  event.recipes.susy.tube_furnace('s2te406llvpc2q') // remapped from original line 272
    .itemInputs(safeItemId('1x susy:cannedsamariumironarsenicoxide'))
    .inputFluids(safeFluidOf('gtceu:argon', 50))
    .itemOutputs(safeItemId('1x susy:tubesamariumironarsenicoxide'))
    .duration(1005)
    .EUt(3840)

  event.recipes.susy.roaster('gurk1cdncqb0e0') // remapped from original line 342
    .itemInputs('1x #forge:dusts/any_purity_barium')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/barium_oxide')
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('yjfxyjht5dwuzm') // remapped from original line 350
    .inputFluids(safeFluidOf('gtceu:mercury', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/mercury_oxide')
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('nn4jzcfrzrakwt') // remapped from original line 358
    .itemInputs('2x #forge:dusts/mercury_oxide')
    .itemInputs('4x #forge:dusts/quicklime')
    .itemInputs('4x #forge:dusts/barium_oxide')
    .itemInputs('6x #forge:dusts/cupric_oxide')
    .itemOutputs('16x #forge:dusts/mercury_barium_calcium_cuprate')
    .duration(300)
    .EUt(240)

  event.recipes.susy.tube_furnace('cq9fxhxodq7w0r') // remapped from original line 368
    .itemInputs('1x #forge:dusts/any_purity_samarium')
    .itemInputs('1x #forge:dusts/any_purity_arsenic')
    .itemInputs('1x #forge:dusts/any_purity_iron')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('4x #forge:dusts/samarium_iron_arsenic_oxide')
    .duration(600)
    .EUt(1920)

  event.recipes.susy.tube_furnace('920jjd8fbn0wwj') // remapped from original line 379
    .itemInputs('1x #forge:dusts/any_purity_manganese')
    .itemInputs('1x #forge:dusts/any_purity_phosphorus')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .itemOutputs('4x #forge:dusts/manganese_phosphide')
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('yinj206prw5xjg') // remapped from original line 388
    .itemInputs('5x #forge:dusts/yttrium_oxide')
    .itemInputs('8x #forge:dusts/barium_oxide')
    .itemInputs('12x #forge:dusts/cupric_oxide')
    .itemOutputs('25x #forge:dusts/yttrium_barium_cuprate')
    .duration(600)
    .EUt(7680)

  event.recipes.susy.roaster('naellj3dc46twl') // remapped from original line 397
    .itemInputs('1x #forge:dusts/any_purity_indium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemOutputs('4x #forge:dusts/indium_chloride')
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('npffgkzk701a9h') // remapped from original line 405
    .itemInputs('4x #forge:dusts/indium_chloride')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 3000))
    .itemOutputs('7x #forge:dusts/indium_hydroxide')
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('s7nqqgkrf16hy6') // remapped from original line 414
    .itemInputs('14x #forge:dusts/indium_hydroxide')
    .itemOutputs('5x #forge:dusts/indium_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('p2nkunjkxccavp') // remapped from original line 422
    .itemInputs('10x #forge:dusts/indium_oxide')
    .itemInputs('4x #forge:dusts/purified_tin_ii_oxide')
    .itemInputs('4x #forge:dusts/barium_oxide')
    .itemInputs('2x #forge:dusts/titanium_dioxide')
    .itemInputs('14x #forge:dusts/cupric_oxide')
    .itemOutputs('16x #forge:dusts/indium_tin_barium_titanium_cuprate')
    .duration(600)
    .EUt(30720)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for(name in recipesToRemove) {
  //     crafting.remove(name)
  // }

  // for (i = 0; i < 6; i++) {
  //     //REMOVE AUTOGENERATED GT RECIPES FOR SUPERCONDUCTORS
  //     mods.gregtech.wiremill.removeByInput(7, [metaitem('wireGtSingle' + lowTempSuperconductors[i]), metaitem('circuit.integrated').withNbt(["Configuration": 1])], null)
  // 
  //     ASSEMBLER.recipeBuilder()
  //             .inputs(ore('wireGtSingleCopper'))
  //             .inputs(ore('wireFine' + lowTempSuperconductors[i]) * 8)
  //             .inputs(ore('foilCopper'))
  //             .outputs(metaitem('assembly' + lowTempSuperconductorsLowerCase[i]))
  //             .duration(200)
  //             .EUt(30)
  //             .buildAndRegister();
  // 
  //     EXTRUDER.recipeBuilder()
  //             .inputs(metaitem('assembly' + lowTempSuperconductorsLowerCase[i]))
  //             .notConsumable(metaitem('shape.extruder.wire'))
  //             .outputs(metaitem('base' + lowTempSuperconductorsLowerCase[i]) * 16)
  //             .duration(200)
  //             .EUt(30)
  //             .buildAndRegister();
  // }

  // for (supercon in allSuperconductors) {
  // 
  //         if (supercon == "ManganesePhosphide") {
  //                 continue
  //         }
  // 
  //         // Supercon maceration
  //         mods.gregtech.macerator.removeByInput(32, [metaitem('wireGtSingle' + supercon)], null)
  //         mods.gregtech.macerator.removeByInput(32, [metaitem('wireGtDouble' + supercon)], null)
  //         mods.gregtech.macerator.removeByInput(32, [metaitem('wireGtQuadruple' + supercon)], null)
  //         mods.gregtech.macerator.removeByInput(32, [metaitem('wireGtOctal' + supercon)], null)
  //         mods.gregtech.macerator.removeByInput(32, [metaitem('wireGtHex' + supercon)], null)
  //         // Supercon extraction
  //         mods.gregtech.extractor.removeByInput(480, [metaitem('wireGtSingle' + supercon)], null)
  //         mods.gregtech.extractor.removeByInput(480, [metaitem('wireGtDouble' + supercon)], null)
  //         mods.gregtech.extractor.removeByInput(480, [metaitem('wireGtQuadruple' + supercon)], null)
  //         mods.gregtech.extractor.removeByInput(480, [metaitem('wireGtOctal' + supercon)], null)
  //         mods.gregtech.extractor.removeByInput(480, [metaitem('wireGtHex' + supercon)], null)
  // 
  // 
  // }

  // for (i = 0; i < 3; i++) {
  //     CANNER.recipeBuilder()
  //             .inputs(ore('pipeTinyFluidSilver'))
  //             .inputs(ore('dust' + highTempSuperconductors[i]))
  //             .outputs(metaitem('canned' + highTempSuperconductorsLowerCase[i]))
  //             .duration(200)
  //             .EUt(30)
  //             .buildAndRegister();
  // 
  //     EXTRUDER.recipeBuilder()
  //             .inputs(metaitem('tube' + highTempSuperconductorsLowerCase[i]))
  //             .notConsumable(metaitem('shape.extruder.wire'))
  //             .outputs(metaitem('base' + highTempSuperconductorsLowerCase[i]) * 16)
  //             .duration(200)
  //             .EUt(30)
  //             .buildAndRegister();
  // }

  // for (def i = 0; i < 9; i++) {
  //     //REMOVE AUTOGENERATED GT RECIPES FOR SUPERCONDUCTORS
  //     if (i < 2) {
  //         mods.gregtech.extruder.removeByInput(42, [metaitem('ingot' + allSuperconductors[i]), metaitem('shape.extruder.wire')], null)
  //         mods.gregtech.wiremill.removeByInput(7, [metaitem('ingot' + allSuperconductors[i]), metaitem('circuit.integrated').withNbt(["Configuration": 1])], null)
  //         mods.gregtech.wiremill.removeByInput(7, [metaitem('ingot' + allSuperconductors[i]), metaitem('circuit.integrated').withNbt(["Configuration": 2])], null)
  //         mods.gregtech.wiremill.removeByInput(7, [metaitem('ingot' + allSuperconductors[i]) * 2, metaitem('circuit.integrated').withNbt(["Configuration": 4])], null)
  //         mods.gregtech.wiremill.removeByInput(7, [metaitem('ingot' + allSuperconductors[i]) * 4, metaitem('circuit.integrated').withNbt(["Configuration": 8])], null)
  //         mods.gregtech.wiremill.removeByInput(7, [metaitem('ingot' + allSuperconductors[i]) * 8, metaitem('circuit.integrated').withNbt(["Configuration": 16])], null)
  //     } else {
  //         mods.gregtech.extruder.removeByInput(180, [metaitem('ingot' + allSuperconductors[i]), metaitem('shape.extruder.wire')], null)
  //         mods.gregtech.wiremill.removeByInput(30, [metaitem('ingot' + allSuperconductors[i]), metaitem('circuit.integrated').withNbt(["Configuration": 1])], null)
  //         mods.gregtech.wiremill.removeByInput(30, [metaitem('ingot' + allSuperconductors[i]), metaitem('circuit.integrated').withNbt(["Configuration": 2])], null)
  //         mods.gregtech.wiremill.removeByInput(30, [metaitem('ingot' + allSuperconductors[i]) * 2, metaitem('circuit.integrated').withNbt(["Configuration": 4])], null)
  //         mods.gregtech.wiremill.removeByInput(30, [metaitem('ingot' + allSuperconductors[i]) * 4, metaitem('circuit.integrated').withNbt(["Configuration": 8])], null)
  //         mods.gregtech.wiremill.removeByInput(30, [metaitem('ingot' + allSuperconductors[i]) * 8, metaitem('circuit.integrated').withNbt(["Configuration": 16])], null)
  //     }
  // 
  //         def cryoLiquids = [
  //                 'liquid_hydrogen': 14,
  //                 'liquid_oxygen': 90,
  //                 'liquid_helium': 4,
  //                 'liquid_neon': 27,
  //                 'liquid_argon': 87,
  //                 'liquid_krypton': 120,
  //                 'liquid_xenon': 165,
  //                 'liquid_nitrogen': 77,
  //                 'liquid_refinery_gas': 80,
  //                 'liquid_natural_gas': 80
  //         ];
  // 
  //         cryoLiquids.each { key, val ->
  //                 if (criticalTemperatures[i] > val) {
  //                 CHEMICAL_BATH.recipeBuilder()
  //                         .inputs(metaitem('base' + allSuperconductorsLowerCase[i]))
  //                         .fluidInputs(liquid(key) * 1)
  //                         .outputs(metaitem('wireGtSingle' + allSuperconductors[i]))
  //                         .duration(50)
  //                         .EUt(Globals.voltAmps[i + 1])
  //                         .buildAndRegister();
  //                 }
  //         }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import classes.*;
  // def recipesToRemove = [
  //         'gregtech:manganese_phosphide_wire_single',
  //         'gregtech:uranium_triplatinum_wire_single',
  //         'gregtech:indium_tin_barium_titanium_cuprate_wire_single',
  //         'gregtech:uranium_rhodium_dinaquadide_wire_single',
  //         'gregtech:enriched_naquadah_trinium_europium_duranide_wire_single',
  //         'gregtech:ruthenium_trinium_americium_neutronate_wire_single'
  // ]
  // def TUBE_FURNACE = recipemap('tube_furnace')
  // def EBF = recipemap('electric_blast_furnace')
  // def EXTRUDER = recipemap('extruder')
  // def CHEMICAL_BATH = recipemap('chemical_bath')
  // def CANNER = recipemap('canner')
  // def ASSEMBLER = recipemap('assembler')
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
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
  // COMPRESSOR = recipemap('compressor')
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // PSA = recipemap('pressure_swing_adsorption')
  // def allSuperconductors = ["ManganesePhosphide", "MagnesiumDiboride", "MercuryBariumCalciumCuprate", "UraniumTriplatinum", "SamariumIronArsenicOxide", "IndiumTinBariumTitaniumCuprate", "UraniumRhodiumDinaquadide", "EnrichedNaquadahTriniumEuropiumDuranide", "RutheniumTriniumAmericiumNeutronate"]
  // def lowTempSuperconductors = ["ManganesePhosphide", "UraniumTriplatinum", "IndiumTinBariumTitaniumCuprate", "UraniumRhodiumDinaquadide", "EnrichedNaquadahTriniumEuropiumDuranide", "RutheniumTriniumAmericiumNeutronate"]
  // def highTempSuperconductors = ["MagnesiumDiboride", "MercuryBariumCalciumCuprate", "SamariumIronArsenicOxide"]
  // def allSuperconductorsLowerCase = ["manganesephosphide", "magnesiumdiboride", "mercurybariumcalciumcuprate", "uraniumtriplatinum", "samariumironarsenicoxide", "indiumtinbariumtitaniumcuprate", "uraniumrhodiumdinaquadide", "enrichednaquadahtriniumeuropiumduranide", "rutheniumtriniumamericiumneutronate"]
  // def lowTempSuperconductorsLowerCase = ["manganesephosphide", "uraniumtriplatinum", "indiumtinbariumtitaniumcuprate", "uraniumrhodiumdinaquadide", "enrichednaquadahtriniumeuropiumduranide", "rutheniumtriniumamericiumneutronate"]
  // def highTempSuperconductorsLowerCase = ["magnesiumdiboride", "mercurybariumcalciumcuprate", "samariumironarsenicoxide"]
  // def criticalTemperatures = [100, 80, 50, 5, 5, 5, 5, 5, 5]
});