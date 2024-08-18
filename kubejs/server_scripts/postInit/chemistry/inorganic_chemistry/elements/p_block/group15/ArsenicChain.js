ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/cobaltite' && safeFluidOf('gtceu:oxygen')})

  event.recipes.gtceu.MIXER('g0drmcaauy7ht8') // remapped from original line 24
    .itemInputs('8x #forge:dusts/impure_arsenopyrite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_arsenopyrite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.FLOTATION('iwnncvoovhhviu') // remapped from original line 32
    .inputFluids(safeFluidOf('susy:impure_arsenopyrite_slurry', 2000))
    .notConsumable('1x #forge:dusts/sodium_ethyl_xanthate')
    .notConsumable('6x #forge:dusts/potassium_permanganate')
    .outputFluids(safeFluidOf('susy:arsenopyrite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pyrite_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.CLARIFIER('dmtas7mjv3xqdr') // remapped from original line 42
    .inputFluids(safeFluidOf('susy:arsenopyrite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/arsenopyrite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.electric_blast_furnace('5uv5y07emp5thh') // remapped from original line 54
    .itemInputs('2x #forge:dusts/cobaltite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000)))
    .itemOutputs('4x #forge:dusts/cobalt_oxide')
    .chancedOutput('5x #forge:dusts/arsenic_trioxide', 7500, 0)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 2000))
    .blastFurnaceTemp(1200)
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electric_blast_furnace('ekvtqminalyqcu') // remapped from original line 66
    .itemInputs('1x #forge:dusts/sperrylite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .itemOutputs('1x #forge:dusts/roasted_sperrylite')
    .chancedOutput('5x #forge:dusts/arsenic_trioxide', 7500, 0)
    .blastFurnaceTemp(1200)
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electric_blast_furnace('w7smjvnjfhphgw') // remapped from original line 77
    .itemInputs('1x #forge:dusts/realgar')
    .inputFluids(safeFluidOf('gtceu:oxygen', 14000)))
    .chancedOutput('10x #forge:dusts/arsenic_trioxide', 7500, 0)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 4000))
    .blastFurnaceTemp(1200)
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electric_blast_furnace('lvfk33r4aiukfn') // remapped from original line 88
    .itemInputs('2x #forge:dusts/arsenopyrite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 10000)))
    .itemOutputs('5x #forge:dusts/iron_iii_oxide')
    .chancedOutput('5x #forge:dusts/arsenic_trioxide', 7500, 0)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 2000))
    .blastFurnaceTemp(1200)
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electric_blast_furnace('tqqc38rw1z4iyb') // remapped from original line 100
    .itemInputs('2x #forge:dusts/enargite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 19000))
    .itemOutputs('1x #forge:ingots/blister_copper')
    .itemOutputs('5x #forge:dusts/arsenic_trioxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 8000))
    .blastFurnaceTemp(1200)
    .EUt(480)
    .duration(40)

  event.recipes.susy.roaster('zvbkheypemebki') // remapped from original line 147
    .inputFluids(safeFluidOf('susy:acidic_arsenate_v_solution', 2000))
    .itemOutputs('21x #forge:dusts/arsenic_v_oxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 15000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 12000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 6000))
    .duration(120)
    .EUt(360)

  event.recipes.susy.roaster('6f3hzn9gdaqfmj') // remapped from original line 158
    .itemInputs('3x #forge:dusts/any_purity_carbon')
    .itemInputs('5x #forge:dusts/arsenic_trioxide')
    .itemOutputs('2x #forge:dusts/arsenic')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 3000))
    .duration(30)
    .EUt(16)

  event.recipes.susy.roaster('rcjyocu8man0rt') // remapped from original line 167
    .itemInputs('5x #forge:dusts/any_purity_carbon')
    .itemInputs('5x #forge:dusts/arsenic_trioxide')
    .itemOutputs('2x #forge:dusts/arsenic')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 3000))
    .duration(30)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('1p09ewvenu9jbd') // remapped from original line 177
    .itemInputs('7x #forge:dusts/proustite')
    .itemInputs('6x #forge:dusts/salt')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 5000))
    .itemOutputs('6x #forge:dusts/silver_chloride') //TO SILVER PROCESSING
    .outputFluids(safeFluidOf('susy:proustite_alkaline_leach_solution', 1000))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('gmgvbuzuqgslho') // remapped from original line 189
    .itemInputs('14x #forge:dusts/enargite')
    .itemInputs('9x #forge:dusts/sodium_sulfide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4000))
    .itemOutputs('6x #forge:dusts/enargite_residue')
    .outputFluids(safeFluidOf('susy:enargite_sulfide_leach_solution', 1000))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('zykehiknbvpoct') // remapped from original line 201
    .inputFluids(safeFluidOf('susy:proustite_alkaline_leach_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 6000))
    .itemOutputs('5x #forge:dusts/arsenic_iii_sulfide')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 3000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 6000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('mn4strggsytxbe') // remapped from original line 211
    .inputFluids(safeFluidOf('susy:enargite_sulfide_leach_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 6000))
    .itemOutputs('7x #forge:dusts/arsenic_v_sulfide')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 4500))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('wo4zkpnttzapmg') // remapped from original line 221
    .itemInputs('5x #forge:dusts/arsenic_iii_sulfide')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemOutputs('2x #forge:dusts/arsenic')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('czwp1vy16k8bw9') // remapped from original line 230
    .itemInputs('5x #forge:dusts/arsenic_v_sulfide')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 10000))
    .itemOutputs('2x #forge:dusts/arsenic')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 5000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('k2tcescknhnmqk') // remapped from original line 239
    .itemInputs('7x #forge:dusts/arsenic_v_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 15000))
    .itemOutputs('7x #forge:dusts/arsenic_v_oxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('wdtccoq2p79ls0') // remapped from original line 248
    .itemInputs('5x #forge:dusts/arsenic_iii_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('5x #forge:dusts/arsenic_trioxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('wysr5pgbbx7nnj') // remapped from original line 259
    .itemInputs('5x #forge:dusts/arsenic_trioxide')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 6500))
    .outputFluids(safeFluidOf('susy:crude_arsenic_trichloride', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('tyzrhefds3mmuu') // remapped from original line 268
    .itemInputs('1x #forge:dusts/arsenic')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .outputFluids(safeFluidOf('susy:crude_arsenic_trichloride', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('rbtfuya236fo1l') // remapped from original line 276
    .inputFluids(safeFluidOf('susy:crude_arsenic_trichloride', 2000))
    .outputFluids(safeFluidOf('susy:arsenic_trichloride', 2000))
    .outputFluids(safeFluidOf('susy:sulfur_dichloride', 250))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('porg2rwh88r8mo') // remapped from original line 284
    .inputFluids(safeFluidOf('susy:sulfur_dichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('1x #forge:dusts/sulfur')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('mjnjklhadckq83') // remapped from original line 293
    .inputFluids(safeFluidOf('susy:arsenic_trichloride', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 3000))
    .itemOutputs('1x #forge:dusts/high_purity_arsenic')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.arc_furnace('lzonjidpzne4zo') // remapped from original line 302
    .itemInputs('3x #forge:dusts/any_purity_sodium')
    .itemInputs('1x #forge:dusts/high_purity_arsenic')
    .itemOutputs('4x #forge:dusts/sodium_arsenide')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('rlfykol38pcido') // remapped from original line 311
    .itemInputs('4x #forge:dusts/sodium_arsenide')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('9x #forge:dusts/sodium_hydroxide')
    .outputFluids(safeFluidOf('susy:arsine', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('pwqjclcgstpjo4') // remapped from original line 321
    .itemInputs('2x #forge:dusts/sodium_bromide')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_bromide_solution', 2000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('sov0zodaqlymy9') // remapped from original line 329
    .inputFluids(safeFluidOf('susy:sodium_bromide_solution', 100))
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .outputFluids(safeFluidOf('gtceu:bromine', 100))
    .outputFluids(safeFluidOf('gtceu:salt_water', 100))
    .duration(6)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('htlpfkeqhyecnc') // remapped from original line 339
    .itemInputs('1x #forge:dusts/roasted_sperrylite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 500))
    .itemOutputs('1x #forge:dusts/platinum')
    .outputFluids(safeFluidOf('susy:sperrylite_waste', 750))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electrolyzer('adpkwxiwlbgjov') // remapped from original line 348
    .inputFluids(safeFluidOf('susy:sperrylite_waste', 6000))
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable(metaitem('graphite_electrode'))
    .itemOutputs('1x #forge:dusts/cobalt')
    .itemOutputs('1x #forge:dusts/nickel')
    .outputFluids(safeFluidOf('gtceu:chlorine', 4000))
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('41zraasdnlai2x') // remapped from original line 361
    .itemInputs('3x #forge:dusts/enargite_residue')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 8000))
    .itemOutputs('1x #forge:dusts/small_gold')
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 2000))
    .outputFluids(safeFluidOf('susy:acidic_copper_solution', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('isra6hh16o1sci') // remapped from original line 371
    .inputFluids(safeFluidOf('susy:acidic_copper_solution', 2000))
    .itemOutputs('24x #forge:dusts/copper_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 10000)))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 4000))
    .duration(120)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (ore in tab_MAsS) {
  //     def metal = null
  // 
  //     for (mat in material(ore.toLowerCase()).getMaterialComponents()) {
  //         if (mat.material == Cobalt){metal = "Cobalt"; break}
  //         if (mat.material == Iron){metal = "Iron"; break}
  //     }
  // 
  //     BATCH_REACTOR.recipeBuilder()
  //         .inputs(metaitem('dust' + ore) * 3)
  //         .fluidInputs(fluid('nitric_acid') * 13000)
  //         .fluidInputs(fluid('distilled_water') * 3000)
  //         .outputs(metaitem('dustSulfur') * 3)
  //         .fluidOutputs(fluid(ore.toLowerCase() + "_leach_solution") * 1000)
  //         .fluidOutputs(fluid('nitric_oxide') * 7000)
  //         .duration(240)
  //         .EUt(Globals.voltAmps[3])
  //         .buildAndRegister();
  // 
  //     ELECTROLYTIC_CELL.recipeBuilder()
  //         .notConsumable(metaitem('stick' + metal))
  //         .notConsumable(metaitem('graphite_electrode'))
  //         .fluidInputs(fluid(ore.toLowerCase() + "_leach_solution") * 1000)
  //         .outputs(metaitem('dust' + metal) * 3)
  //         .fluidOutputs(fluid('oxygen') * 3000)
  //         .fluidOutputs(fluid('acidic_arsenate_v_solution') * 1000)
  //         .duration(240)
  //         .EUt(Globals.voltAmps[3])
  //         .buildAndRegister();
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.api.unification.material.properties.*;
  // import gregtech.api.GregTechAPI;
  // import gregtech.api.unification.material.Material;
  // import gregtech.api.unification.OreDictUnifier;
  // import gregtech.api.unification.ore.OrePrefix;
  // import static gregtech.api.unification.material.Materials.*;
  // import globals.Globals
  // import static RegisterOres;
  // import static RegisterSolids;
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // ELECTROLYZER = recipemap('electrolyzer')
  // EBF = recipemap('electric_blast_furnace')
  // ARC_FURNACE = recipemap('arc_furnace')
  // BATCH_REACTOR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // ROASTER = recipemap('roaster')
  // DISTILLERY = recipemap('distillery')
  // DT = recipemap('distillation_tower')
  // def tab_MAsS = ["Cobaltite", "Arsenopyrite"]
});