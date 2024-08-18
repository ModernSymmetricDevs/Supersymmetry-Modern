ServerEvents.recipes(event => {

  event.recipes.gtceu.macerator('8ogxfyjniqgazg') // remapped from original line 14
    .itemInputs(safeItemId('1x susy:resource_block'))
    .itemOutputs('9x #forge:dusts/alluvial_pgm_sand')
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.sifter('v4j0rcnol6jccx') // remapped from original line 21
    .itemInputs('1x #forge:dusts/alluvial_pgm_sand')
    .itemOutputs('4x #forge:nuggets/alluvial_pgm')
    .itemOutputs('3x #forge:dusts/nether_quartz')
    .duration(160)
    .EUt(30)

  event.recipes.susy.batch_reactor('xrvplijfnlzvws') // remapped from original line 29
    .itemInputs('2x #forge:dusts/alluvial_pgm')
    .inputFluids(safeFluidOf('gtceu:aqua_regia', 12000))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 1000))
    .outputFluids(safeFluidOf('susy:alluvial_pgm_solution', 5000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 5000))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('vh6j6vdgxrwwco') // remapped from original line 40
    .itemInputs('1x #forge:dusts/any_purity_zinc')
    .inputFluids(safeFluidOf('susy:alluvial_pgm_solution', 10000))
    .itemOutputs('3x #forge:dusts/iron_ii_chloride')
    .outputFluids(safeFluidOf('susy:cemented_alluvial_pgm_solution', 10000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.crystallizer('imohsx21qys3k5') // remapped from original line 49
    .circuit(1)
    .inputFluids(safeFluidOf('susy:cemented_alluvial_pgm_solution', 10000))  
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 4000))
    .chancedOutput('34x #forge:dusts/ammonium_hexachloroplatinate', 7500, 0)
    .outputFluids(safeFluidOf('susy:alluvial_platinum_mother_liquor', 14000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('9qhd3s9dfrlseq') // remapped from original line 59
    .inputFluids(safeFluidOf('susy:alluvial_platinum_mother_liquor', 14000))
    .chancedOutput('3x #forge:dusts/zinc_chloride', 9000, 0)
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 13000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 4000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('qxbu2ebiaw3so1') // remapped from original line 69
    .itemInputs('17x #forge:dusts/ammonium_hexachloroplatinate')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .itemOutputs(safeItemId('1x susy:sponge.platinum'))
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 6000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.macerator('ymd7tmpzwj9ozj') // remapped from original line 79
    .itemInputs(safeItemId('1x susy:sponge.platinum'))
    .itemOutputs('1x #forge:dusts/platinum')
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('ykt870dnzqvzqz') // remapped from original line 86
    .notConsumable('1x #forge:springs/cupronickel')
    .inputFluids(safeFluidOf('susy:alluvial_platinum_mother_liquor', 14000))
    .outputFluids(safeFluidOf('susy:alluvial_divalent_palladium_solution', 14000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 50))
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.susy.crystallizer('xgey6dqgvsw9ar') // remapped from original line 95
    .inputFluids(safeFluidOf('susy:ammonia_solution', 1000))
    .inputFluids(safeFluidOf('susy:alluvial_divalent_palladium_solution', 7000)) 
    .chancedOutput('11x #forge:dusts/diamminedichloropalladium', 3750, 0)
    .outputFluids(safeFluidOf('susy:alluvial_palladium_mother_liquor', 8000)) 
    .duration(60)
    .EUt(voltAmps[2])

  event.recipes.susy.reaction_furnace('mpjr8ajfhcozbc') // remapped from original line 104
    .itemInputs('11x #forge:dusts/diamminedichloropalladium')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .itemOutputs('1x #forge:dusts/palladium')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(240)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('dwysnsuybdmd6g') // remapped from original line 114
    .inputFluids(safeFluidOf('susy:alluvial_palladium_mother_liquor', 16000))
    .chancedOutput('3x #forge:dusts/zinc_chloride', 9500, 0)
    .outputFluids(safeFluidOf('susy:ammonium_chloride_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 14000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 4000))
    .duration(240)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DISTILLERY = recipemap('distillery')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // ROASTER = recipemap('roaster')
  // MACERATOR = recipemap('macerator')
  // SIFTER = recipemap('sifter')
  // CRYSTALLIZER = recipemap('crystallizer')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  //     
});