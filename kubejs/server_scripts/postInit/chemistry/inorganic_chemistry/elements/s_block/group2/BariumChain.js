ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('xk9vdqikb6fnil') // remapped from original line 18
    .itemInputs('8x #forge:dusts/impure_barite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_barite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('3wecg8drl5ydzx') // remapped from original line 26
    .inputFluids(safeFluidOf('susy:impure_barite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:methyl_isobutyl_carbinol', 100))
    .notConsumable(safeFluidOf('susy:lauric_acid', 100))
    .outputFluids(safeFluidOf('susy:barite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('v2q5cxkhvlnxqa') // remapped from original line 36
    .inputFluids(safeFluidOf('susy:barite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/barite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.centrifuge('zz3t4z1d57qmvz') // remapped from original line 44
    .inputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .itemOutputs('2x #forge:dusts/granite_tailings')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('mssys3uaay3utt') // remapped from original line 67
    //.itemInputs('4x #forge:dusts/impure_barium_sulfide')
    //.inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    //.itemOutputs('2x #forge:dusts/barium_residue')
    //.outputFluids(safeFluidOf('susy:impure_barium_sulfide_solution', 1000))
    //.EUt(voltAmps[1])
    //.duration(100)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('cmizf3ocragtbx') // remapped from original line 76
    //.itemInputs('2x #forge:dusts/barium_residue')
    //.inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    //.inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    //.outputFluids(safeFluidOf('susy:impure_barium_sulfide_solution', 1000))
    //.itemOutputs('1x #forge:dusts/silicon_dioxide')
    //.EUt(voltAmps[1])
    //.duration(100)

  event.recipes.susy.crystallizer('mijlyrjeiwl57h') // remapped from original line 86
    .inputFluids(safeFluidOf('susy:impure_barium_sulfide_solution', 1000))
    .itemOutputs('2x #forge:dusts/barium_sulfide')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('o4mrbec32ywhz7') // remapped from original line 94
    .itemInputs('2x #forge:dusts/barium_sulfide')
    .itemInputs('6x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 4000))
    .itemOutputs('5x #forge:dusts/barium_carbonate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('b3xsfhbyedukyx') // remapped from original line 105
    .itemInputs('2x #forge:dusts/barium_sulfide')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .itemOutputs('5x #forge:dusts/barium_carbonate')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.batch_reactor('zczed7jrdjclmx') // remapped from original line 116
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:barium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.gtceu.distillery('bhf3xkogqwdeng') // remapped from original line 125
    .inputFluids(safeFluidOf('susy:barium_chloride_solution', 1000))
    .itemOutputs('3x #forge:dusts/barium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(voltAmps[1])
    .duration(100)

  event.recipes.susy.reaction_furnace('yt8n0zfdzppz5m') // remapped from original line 133
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .itemInputs('6x #forge:dusts/barium_oxide')
    .itemOutputs('3x #forge:dusts/barium')
    .itemOutputs('5x #forge:dusts/alumina')
    .EUt(voltAmps[2])
    .duration(100)

  event.recipes.susy.roaster('hchmbvbv02dwqx') // remapped from original line 142
    .itemInputs('5x #forge:dusts/witherite')
    .itemOutputs('2x #forge:dusts/barium_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.roaster('xcjwtdtjnwxu6f') // remapped from original line 150
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .itemOutputs('2x #forge:dusts/barium_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(voltAmps[3])
    .duration(20)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in rotary_kiln_fuels) {
  //     for (comburent in rotary_kiln_comburents) {
  //         ROTARY_KILN.recipeBuilder()
  //             .inputs(ore('dustBarite'))
  //             .inputs(ore('dustAnyPurityCarbon') * 2)
  //             .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //             .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //             .outputs(metaitem('dustImpureBariumSulfide') * 2)
  //             .fluidOutputs(fluid('carbon_dioxide') * 2025)
  //             .EUt(Globals.voltAmps[1])
  //             .duration(fuel.duration + comburent.duration)
  //             .buildAndRegister()
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // FLOTATION = recipemap('froth_flotation')
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // DISTILLERY = recipemap('distillery')
  // MIXER = recipemap('mixer')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // CRYSTALLIZER = recipemap('crystallizer')
});