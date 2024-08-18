ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.central_processing_unit' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.central_processing_unit' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.central_processing_unit' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.random_access_memory' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.random_access_memory' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.random_access_memory' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.ultra_low_power_integrated_circuit' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.ultra_low_power_integrated_circuit' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.ultra_low_power_integrated_circuit' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.low_power_integrated_circuit' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.low_power_integrated_circuit' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.low_power_integrated_circuit' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.integrated_logic_circuit' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.integrated_logic_circuit' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.integrated_logic_circuit' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.power_integrated_circuit' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.power_integrated_circuit' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.power_integrated_circuit' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.nand_memory_chip' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.nand_memory_chip' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.nand_memory_chip' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.nor_memory_chip' && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.nor_memory_chip' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:cutter', input: 'susy:wafer.nor_memory_chip' && safeFluidOf('minecraft:water')})

  event.recipes.gtceu.mixer('ddpnltjz530lde') // remapped from original line 201
    .itemInputs('1x #forge:dusts/tiny_potassium_hydroxide')
    .itemInputs('30x #forge:dusts/silicon_dioxide')
    .inputFluids(safeFluidOf('susy:demineralized_water', 10000))
    .outputFluids(safeFluidOf('susy:silicon_dioxide_slurry', 10000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.cutter('g8aollsnrnlmz3') // remapped from original line 283
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemInputs(metaitem(input))
    .itemOutputs(metaitem(product) * productMultiplier)
    .duration(450)
    .cleanroom(CleanroomType.CLEANROOM)
    .EUt(voltAmps[voltageTier])

  event.recipes.gtceu.laser_engraver('2zrra6mln09gl0') // remapped from original line 292
    .itemInputs(metaitem(input))
    .itemOutputs(metaitem(product) * productMultiplier)
    .duration(60)
    .cleanroom(CleanroomType.CLEANROOM)
    .EUt(voltAmps[voltageTier])

  event.recipes.gtceu.cutter('mxgfs7c800ykr5') // remapped from original line 300
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemInputs(metaitem(input))
    .itemOutputs(metaitem(product) * productMultiplier)
    .duration(450)
    .EUt(voltAmps[voltageTier])

  event.recipes.gtceu.laser_engraver('vrv67mcggmixm6') // remapped from original line 308
    .itemInputs(metaitem(input))
    .itemOutputs(metaitem(product) * productMultiplier)
    .duration(60)
    .EUt(voltAmps[voltageTier])

  event.recipes.susy.continuous_stirred_tank_reactor('kvlaatywghp21f') // remapped from original line 319
    .inputFluids(safeFluidOf('susy:formaldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:phenol', 50))
    .outputFluids(safeFluidOf('susy:novolacs', 100))
    .duration(10)
    .EUt(7)

  event.recipes.gtceu.electrolyzer('mvduheft2phzod') // remapped from original line 405
    .itemInputs(safeItemId('1x susy:etched.ic'))
    .itemInputs('1x #forge:foils/copper')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemOutputs(safeItemId('1x susy:wafer.integrated_logic_circuit'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolyzer('40wn7fuevlozlx') // remapped from original line 414
    .itemInputs(safeItemId('1x susy:etched.cpu'))
    .itemInputs('1x #forge:foils/copper')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemOutputs(safeItemId('1x susy:wafer.central_processing_unit'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolyzer('unibirml4jnxgm') // remapped from original line 423
    .itemInputs(safeItemId('1x susy:etched.ram'))
    .itemInputs('1x #forge:foils/copper')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemOutputs(safeItemId('1x susy:wafer.random_access_memory'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolyzer('z3bwqq8gya0pg9') // remapped from original line 432
    .itemInputs(safeItemId('1x susy:etched.ulpic'))
    .itemInputs('1x #forge:foils/copper')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemOutputs(safeItemId('1x susy:wafer.ultra_low_power_integrated_circuit'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.electrolyzer('fd8ygva0zxspfp') // remapped from original line 441
    .itemInputs(safeItemId('1x susy:etched.lpic'))
    .itemInputs('1x #forge:foils/copper')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemOutputs(safeItemId('1x susy:wafer.low_power_integrated_circuit'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.forming_press('xcnl7k0nof4ut0') // remapped from original line 461
    .itemInputs(safeItemId('1x susy:board.phenolic'))
    .itemInputs('1x #forge:foils/copper')
    .itemOutputs(safeItemId('1x susy:laminated.board.phenolic'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.forming_press('u9iqgcbiohcsja') // remapped from original line 474
    .itemInputs('1x #forge:plates/plastic')
    .itemInputs('1x #forge:foils/copper')
    .itemOutputs(safeItemId('1x susy:board.plastic'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.forming_press('8vrhf1advwbz0y') // remapped from original line 482
    .itemInputs('1x #forge:plates/polyvinyl_chloride')
    .itemInputs('1x #forge:foils/copper')
    .itemOutputs(safeItemId('2x susy:board.plastic'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.forming_press('nnzscmf9f6bumf') // remapped from original line 490
    .itemInputs('1x #forge:plates/polytetrafluoroethylene')
    .itemInputs('1x #forge:foils/copper')
    .itemOutputs(safeItemId('4x susy:board.plastic'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.forming_press('d8q24kvxdtbaoh') // remapped from original line 498
    .itemInputs('1x #forge:plates/polybenzimidazole')
    .itemInputs('1x #forge:foils/copper')
    .itemOutputs(safeItemId('8x susy:board.plastic'))
    .duration(100)
    .EUt(30)

  event.recipes.susy.cvd('tzsouaxqffowdp') // remapped from original line 511
    .itemInputs(safeItemId('1x susy:wafer.doped.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:silane', 250))
    .itemOutputs(safeItemId('1x susy:wafer.polysilicon'))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(100)
    .EUt(240)

  event.recipes.susy.cvd('cr8iqiqfq4wd13') // remapped from original line 521
    .itemInputs(safeItemId('1x susy:wafer.doped.polysilicon'))
    .inputFluids(safeFluidOf('gtceu:silane', 750))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs(safeItemId('1x susy:wafer.silicon_nitride'))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(240)

  event.recipes.susy.cvd('f8buaoxgh9bv4k') // remapped from original line 532
    .itemInputs(safeItemId('1x susy:etched.silicon_nitride'))
    .inputFluids(safeFluidOf('susy:nickel_carbonyl', 500))
    .itemOutputs(safeItemId('1x susy:wafer.nickel'))
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 2000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('sfietujg3dh5gt') // remapped from original line 544
    .itemInputs(safeItemId('1x susy:wafer.doped.polysilicon'))
    .itemInputs(safeItemId('1x susy:wafer.alumina'))
    .itemOutputs(safeItemId('1x susy:wafer.power_integrated_circuit'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.assembler('q5skbcwr4clgcl') // remapped from original line 553
    .itemInputs(safeItemId('1x susy:wafer.doped.polysilicon'))
    .itemInputs(safeItemId('1x susy:wafer.beryllium_oxide'))
    .itemOutputs(safeItemId('1x susy:wafer.power_integrated_circuit'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  //     for (photoresist in Photoresist.photoresists) {
  //         if (cleanroom) {
  //             UV_LIGHT_BOX.recipeBuilder()
  //                     .inputs(metaitem(input))
  //                     .notConsumable(metaitem(mask))
  //                     .fluidInputs(fluid(photoresist.fluidName) * photoresist.amountUsed)
  //                     .outputs(metaitem(product) * outputMultiplier)
  //                     .duration(photoresist.timeUsed * timeMultiplier)
  //                     .cleanroom(CleanroomType.CLEANROOM)
  //                     .EUt(Globals.voltAmps[voltageTier])
  //                     .buildAndRegister()
  // 
  //             LASER_ENGRAVER.recipeBuilder()
  //                     .inputs(metaitem(input))
  //                     .circuitMeta(circ)
  //                     .fluidInputs(fluid(photoresist.fluidName) * (photoresist.amountUsed / 4))
  //                     .outputs(metaitem(product) * outputMultiplier)
  //                     .duration((int) (photoresist.timeUsed * timeMultiplier / 10))
  //                     .cleanroom(CleanroomType.CLEANROOM)
  //                     .EUt(Globals.voltAmps[voltageTier])
  //                     .buildAndRegister()
  //         } else {
  //             UV_LIGHT_BOX.recipeBuilder()
  //                     .inputs(metaitem(input))
  //                     .notConsumable(metaitem(mask))
  //                     .fluidInputs(fluid(photoresist.fluidName) * photoresist.amountUsed)
  //                     .outputs(metaitem(product) * outputMultiplier)
  //                     .duration(photoresist.timeUsed * timeMultiplier)
  //                     .EUt(Globals.voltAmps[voltageTier])
  //                     .buildAndRegister()
  // 
  //             LASER_ENGRAVER.recipeBuilder()
  //                     .inputs(metaitem(input))
  //                     .circuitMeta(circ)
  //                     .fluidInputs(fluid(photoresist.fluidName) * (photoresist.amountUsed / 4))
  //                     .outputs(metaitem(product) * outputMultiplier)
  //                     .duration((int) (photoresist.timeUsed * timeMultiplier / 10))
  //                     .EUt(Globals.voltAmps[voltageTier])
  //                     .buildAndRegister()
  //         }
  //     }

  //     for (etchant in Etchant.etchants) {
  //         if (etchant.materialEtched == materialEtched) {
  //             if (cleanroom) {
  //                 CHEMICAL_BATH.recipeBuilder()
  //                         .inputs(metaitem(input))
  //                         .fluidInputs(fluid(etchant.fluidName) * etchant.amountUsed)
  //                         .outputs(metaitem(product))
  //                         .duration(etchant.timeUsed * timeMultiplier)
  //                         .cleanroom(CleanroomType.CLEANROOM)
  //                         .EUt(Globals.voltAmps[voltageTier])
  //                         .buildAndRegister()
  //             } else {
  //                 CHEMICAL_BATH.recipeBuilder()
  //                         .inputs(metaitem(input))
  //                         .fluidInputs(fluid(etchant.fluidName) * etchant.amountUsed)
  //                         .outputs(metaitem(product))
  //                         .duration(etchant.timeUsed * timeMultiplier)
  //                         .EUt(Globals.voltAmps[voltageTier])
  //                         .buildAndRegister()
  //             }
  //         }
  //     }

  // for (ndopant in NDopant.ndopants) {
  //     ION_IMPLANTER.recipeBuilder()
  //             .inputs(metaitem('wafer.silicon') * 16 * ndopant.efficiency)
  //             .circuitMeta(1)
  //             .inputs(metaitem(ndopant.metaItemName))
  //             .outputs(metaitem('wafer.n_doped.silicon') * 16 * ndopant.efficiency)
  //             .cleanroom(CleanroomType.CLEANROOM)
  //             .duration(300)
  //             .EUt(60)
  //             .buildAndRegister()
  // 
  //     ION_IMPLANTER.recipeBuilder()
  //             .inputs(metaitem('etched.silicon_dioxide') * 16 * ndopant.efficiency)
  //             .circuitMeta(1)
  //             .inputs(metaitem(ndopant.metaItemName))
  //             .outputs(metaitem('wafer.doped.silicon_dioxide') * 16 * ndopant.efficiency)
  //             .cleanroom(CleanroomType.CLEANROOM)
  //             .duration(300)
  //             .EUt(240)
  //             .buildAndRegister()
  // 
  //     for (pdopant in PDopant.pdopants) {
  //         int batchSize = pdopant.efficiency * ndopant.efficiency
  // 
  //         ION_IMPLANTER.recipeBuilder()
  //                 .inputs(metaitem('wafer.silicon') * 16 * batchSize)
  //                 .inputs(metaitem(pdopant.metaItemName))
  //                 .inputs(metaitem(ndopant.metaItemName))
  //                 .outputs(metaitem('wafer.doped.silicon') * 16 * batchSize)
  //                 .duration(200)
  //                 .EUt(60)
  //                 .buildAndRegister()
  // 
  //         ION_IMPLANTER.recipeBuilder()
  //                 .inputs(metaitem('etched.polysilicon') * 16 * batchSize)
  //                 .inputs(metaitem(pdopant.metaItemName))
  //                 .inputs(metaitem(ndopant.metaItemName))
  //                 .outputs(metaitem('wafer.doped.polysilicon') * 16 * batchSize)
  //                 .cleanroom(CleanroomType.CLEANROOM)
  //                 .duration(200)
  //                 .EUt(240)
  //                 .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.metatileentity.multiblock.CleanroomType
  // ASSEMBLER = recipemap('assembler')
  // CIRCUIT_ASSEMBLER = recipemap('circuit_assembler')
  // FORMING_PRESS = recipemap('forming_press')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // MIXER = recipemap('mixer')
  // LASER_ENGRAVER = recipemap('laser_engraver')
  // ELECTROLYZER = recipemap('electrolyzer')
  // CUTTER = recipemap('cutter')
  // ION_IMPLANTER = recipemap('ion_implantation')
  // UV_LIGHT_BOX = recipemap('uv_light_box')
  // CVD = recipemap('cvd')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // Etchants used:
  // - Aluminum: Phosphoric Acid, chlorine plasma
  // - Indium Tin Oxide: Nitration mixture, fluorine plasma
  // - Chromium: Hydrochloric acid, fluorine plasma
  // - GaAs: Hydrogen Peroxide,  chlorine plasma
  // - Gold & Platinum: Aqua Regia, fluorine plasma
  // - Photoresist: Sulfuric Acid, oxygen plasma
  // - Silicon: Nitric Acid or Hydrofluoric Acid,  chlorine plasma
  // - Silica: Hydrofluoric acid, CF4 plasma
  // - Silicon nitride: phosphoric acid, CF4 plasma
  // - Titanium: hydrofluoric acid, BCl3 plasma
  // - Tungsten: Hydrogen peroxide, CF4 plasma
  // - Copper: Iron III chloride or Sodium bisulfite, fluorine plasma
  //  */
  // class Photoresist {
  //     String fluidName
  //     int amountUsed
  //     int timeUsed
  //     public static ArrayList<Photoresist> photoresists = new ArrayList<Photoresist>();
  //     public Photoresist(String fluidName, int amountUsed, float timeUsed) {
  //         this.fluidName = fluidName
  //         this.amountUsed = amountUsed
  //         this.timeUsed = timeUsed
  //         photoresists.add(this)
  //     }
  // }
  // class Etchant {
  //     String fluidName
  //     String materialEtched
  //     int amountUsed
  //     int timeUsed
  //     public static ArrayList<Etchant> etchants = new ArrayList<Etchant>();
  //     public Etchant(String fluidName, String materialEtched, int amountUsed, int timeUsed) {
  //         this.fluidName = fluidName
  //         this.materialEtched = materialEtched
  //         this.amountUsed = amountUsed
  //         this.timeUsed = timeUsed
  //         etchants.add(this)
  //     }
  // }
  // class PDopant {
  //     String metaItemName
  //     int efficiency
  //     public static ArrayList<PDopant> pdopants = new ArrayList<PDopant>();
  //     public PDopant(String metaItemName, int efficiency) {
  //         this.metaItemName = metaItemName
  //         this.efficiency = efficiency
  //         pdopants.add(this)
  //     }
  // }
  // class NDopant {
  //     String metaItemName
  //     int efficiency
  //     public static ArrayList<NDopant> ndopants = new ArrayList<NDopant>();
  //     public NDopant(String metaItemName, int efficiency) {
  //         this.metaItemName = metaItemName
  //         this.efficiency = efficiency
  //         ndopants.add(this)
  //     }
  // }
  // new Photoresist("novolacs", 50, 300)
  // new Photoresist("hydrogen_silsesquioxane_photoresist", 25, 200)
  // new Photoresist("pmma", 16, 150)
  // new Photoresist("su_eight", 16, 50)
  // new Etchant("plasma.chlorine", "aluminium", 10, 80)
  // new Etchant("plasma.carbon_tetrafluoride", "aluminium", 10, 60)
  // new Etchant("plasma.boron_trichloride", "aluminium", 10, 60)
  // new Etchant("plasma.chlorine", "gallium_arsenide", 10, 80)
  // new Etchant("plasma.carbon_tetrafluoride", "gallium_arsenide", 10, 60)
  // new Etchant("plasma.boron_trichloride", "gallium_arsenide", 10, 60)
  // new Etchant("plasma.oxygen", "photoresist", 10, 60)
  // new Etchant("plasma.chlorine", "silicon", 10, 80)
  // new Etchant("plasma.carbon_tetrafluoride", "silicon", 10, 60)
  // new Etchant("plasma.carbon_tetrafluoride", "silicon_dioxide", 10, 60)
  // new Etchant("plasma.nitrogen_trifluoride", "silicon_dioxide", 10, 60)
  // new Etchant("plasma.carbon_tetrafluoride", "silicon_nitride", 10, 60)
  // new Etchant("plasma.nitrogen_trifluoride", "silicon_nitride", 10, 60)
  // new Etchant("plasma.boron_trichloride", "titanium", 10, 60)
  // new Etchant("plasma.boron_trichloride", "nickel", 10, 60)
  // new Etchant("plasma.carbon_tetrafluoride", "tungsten", 10, 60)
  // new Etchant("iron_iii_chloride_solution", "copper", 100, 100)
  // new Etchant("sodium_bisulfate_solution", "copper", 100, 100)
  // new Etchant("ethylenediamine_pyrocatechol", "silicon", 40, 80)
  // new Etchant("tetramethylammonium_hydroxide_solution", "silicon", 40, 80)
  // new Etchant("ethylenediamine_pyrocatechol", "silicon_advanced", 40, 80)
  // new Etchant("tetramethylammonium_hydroxide_solution", "silicon_advanced", 40, 80)
  // new Etchant("phosphoric_acid", "aluminium", 50, 700)
  // new Etchant("nitration_mixture", "indium_tin_oxide", 50, 700)
  // new Etchant("hydrochloric_acid", "chrome", 50, 700)
  // new Etchant("hydrogen_peroxide", "gallium_arsenide", 50, 700)
  // new Etchant("aqua_regia", "gold", 50, 700)
  // new Etchant("aqua_regia", "platinum", 50, 700)
  // new Etchant("hydrogen_peroxide", "photoresist", 50, 500)
  // new Etchant("hydrofluoric_acid", "silicon_dioxide", 40, 600)
  // new Etchant("phosphoric_acid", "silicon_nitride", 40, 600)
  // new Etchant("hydrofluoric_acid", "titanium", 50, 700)
  // new Etchant("hydrofluoric_acid", "nickel", 50, 700)
  // new Etchant("hydrogen_peroxide", "tungsten", 50, 700)
  // new Etchant("nitric_acid", "titanium_nitride", 50, 700)
  // new Etchant("hydrofluoric_acid", "titanium_nitride", 50, 700)
  // new Etchant("nitric_acid", "silicon", 80, 700)
  // new Etchant("hydrofluoric_acid", "silicon", 40, 500)
  // new NDopant("dustHighPurityBoron", 1)
  // new NDopant("dustHighPurityGallium", 2)
  // new NDopant("dustHighPurityAluminium", 2)
  // new NDopant("dustTinyHighPurityIndium", 1)
  // new PDopant("dustHighPurityAntimony", 1)
  // new PDopant("dustHighPurityPhosphorus", 2)
  // new PDopant("dustHighPurityArsenic", 2)
  // def generatePatterningRecipes(input, product, mask, voltageTier, timeMultiplier, int outputMultiplier, int circ, boolean cleanroom) {
  // }
  // def generateEtchingRecipes(input, product, materialEtched, voltageTier, timeMultiplier, boolean cleanroom) {
  //     float ok = 0.5f;
  // }
  // def generateCuttingRecipes(input, product, productMultiplier, voltageTier, boolean cleanroom) {
  //     if (cleanroom) {
  //     } else {
  //     }
  // }
  // generatePatterningRecipes('wafer.silicon', 'patterned.ram', 'mask.ram', 2, 4, 1, 1, false)
  // generatePatterningRecipes('wafer.silicon', 'patterned.ulpic', 'mask.ulpic', 2, 4, 1, 2, false)
  // generatePatterningRecipes('wafer.silicon', 'patterned.ic', 'mask.ic', 2, 4, 1, 3, false)
  // generatePatterningRecipes('wafer.doped.silicon', 'patterned.ram', 'mask.ram', 2, 4, 2, 1, false)
  // generatePatterningRecipes('wafer.doped.silicon', 'patterned.cpu', 'mask.cpu', 2, 4, 1, 2, false)
  // generatePatterningRecipes('wafer.doped.silicon', 'patterned.ulpic', 'mask.ulpic', 2, 4, 2, 3, false)
  // generatePatterningRecipes('wafer.doped.silicon', 'patterned.lpic', 'mask.lpic', 3, 4, 1, 4, false)
  // generatePatterningRecipes('wafer.doped.silicon', 'patterned.ic', 'mask.ic', 2, 4, 2, 5, false)
  // generatePatterningRecipes('wafer.silicon_dioxide', 'patterned.silicon_dioxide', 'mask.advanced', 3, 4, 1, 1, true)
  // generatePatterningRecipes('wafer.polysilicon', 'patterned.polysilicon', 'mask.advanced', 3, 4, 1, 1, true)
  // generatePatterningRecipes('wafer.silicon_nitride', 'patterned.silicon_nitride', 'mask.advanced', 3, 4, 1, 1, true)
  // generatePatterningRecipes('wafer.nickel', 'patterned.nand', 'mask.nand', 3, 4, 1, 1, true)
  // generatePatterningRecipes('wafer.nickel', 'patterned.nor', 'mask.nor', 3, 4, 1, 2, true)
  // generateEtchingRecipes('patterned.ic', 'etched.ic', 'silicon', 1, 1, false)
  // generateEtchingRecipes('patterned.cpu', 'etched.cpu', 'silicon', 1, 1,false)
  // generateEtchingRecipes('patterned.ram', 'etched.ram', 'silicon', 1, 1, false)
  // generateEtchingRecipes('patterned.ulpic', 'etched.ulpic', 'silicon', 1, 1, false)
  // generateEtchingRecipes('patterned.lpic', 'etched.lpic', 'silicon', 1, 1, false)
  // generateEtchingRecipes('patterned.silicon_dioxide', 'etched.silicon_dioxide', 'silicon_dioxide', 2, 1, true)
  // generateEtchingRecipes('patterned.polysilicon', 'etched.polysilicon', 'silicon', 2, 1, true)
  // generateEtchingRecipes('patterned.silicon_nitride', 'etched.silicon_nitride', 'silicon_nitride', 2, 1, true)
  // generateEtchingRecipes('patterned.nand', 'wafer.nand_memory_chip', 'nickel', 2, 1, true)
  // generateEtchingRecipes('patterned.nor', 'wafer.nor_memory_chip', 'nickel', 2, 1, true)
  // generateCuttingRecipes('wafer.central_processing_unit', 'plate.central_processing_unit', 8, 2, false)
  // generateCuttingRecipes('wafer.ultra_low_power_integrated_circuit', 'plate.ultra_low_power_integrated_circuit', 6, 2, false)
  // generateCuttingRecipes('wafer.integrated_logic_circuit', 'plate.integrated_logic_circuit', 8, 2, false)
  // generateCuttingRecipes('wafer.random_access_memory', 'plate.random_access_memory', 32, 2, false)
  // generateCuttingRecipes('wafer.low_power_integrated_circuit', 'plate.low_power_integrated_circuit', 4, 3, true)
  // generateCuttingRecipes('wafer.power_integrated_circuit', 'plate.power_integrated_circuit', 4, 4, true)
  // generateCuttingRecipes('wafer.nand_memory_chip', 'plate.nand_memory_chip', 32, 3, true)
  // generateCuttingRecipes('wafer.nor_memory_chip', 'plate.nor_memory_chip', 16, 3, true)
  // generatePatterningRecipes('laminated.board.phenolic', 'patterned.board.phenolic', 'mask.pcb', 1, 1, 1, 0, false)
  // generateEtchingRecipes('patterned.board.phenolic', 'circuit_board.good', 'copper', 1, 1, false)
  // generatePatterningRecipes('board.plastic', 'patterned.board.plastic', 'mask.pcb', 2, 1, 1, 0, false)
  // generateEtchingRecipes('patterned.board.plastic', 'circuit_board.plastic', 'copper', 2, 1, false)
});