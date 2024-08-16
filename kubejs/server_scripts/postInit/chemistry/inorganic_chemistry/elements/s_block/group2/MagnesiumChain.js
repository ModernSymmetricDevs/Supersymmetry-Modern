ServerEvents.recipes(event => {

  event.recipes.susy.roaster('uglfiussdhuul7') // remapped from original line 16
    .itemInputs('5x #forge:dusts/magnesite')
    .itemOutputs('2x #forge:dusts/magnesia')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('svuzyzafoo1xde') // remapped from original line 24
    .itemInputs('5x #forge:dusts/magnesium_carbonate')
    .itemOutputs('2x #forge:dusts/magnesia')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('ei0kxgjka5wio4') // remapped from original line 32
    .itemInputs('10x #forge:dusts/dolomite')
    .itemOutputs('2x #forge:dusts/magnesia')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.electric_blast_furnace('h9urif35mwxm8p') // remapped from original line 41
    .itemInputs('4x #forge:dusts/magnesia')
    .itemInputs('4x #forge:dusts/quicklime')
    .itemInputs('1x #forge:dusts/silicon')
    .itemOutputs('7x #forge:dusts/calcium_orthosilicate')
    .outputFluids(safeFluidOf('gtceu:magnesium', 288))
    .EUt(30)
    .duration(200)
    .blastFurnaceTemp(1370)

  event.recipes.susy.roaster('y2ffzvyhci2ryy') // remapped from original line 65
    .itemInputs('7x #forge:dusts/calcium_orthosilicate')
    .itemOutputs('3x #forge:dusts/silicon_dioxide')
    .itemOutputs('4x #forge:dusts/quicklime')
    .EUt(30)
    .duration(120)

  event.recipes.susy.reaction_furnace('8pvot83taga9n7') // remapped from original line 88
    .itemInputs('5x #forge:dusts/magnesite')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('3x #forge:dusts/magnesium_chloride')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.large_chemical_reactor('ydbwaivgjn4dar') // remapped from original line 98
    .itemInputs('5x #forge:dusts/magnesite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:magnesium_chloride_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('jdjp70dj6uynwk') // remapped from original line 107
    .itemInputs('2x #forge:dusts/magnesia')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/magnesium_hydroxide')
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('y7zxn2oto9risu') // remapped from original line 115
    .itemInputs('5x #forge:dusts/magnesium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:magnesium_chloride_solution', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.distillery('i5e8ija5jklhgw') // remapped from original line 123
    .inputFluids(safeFluidOf('susy:magnesium_chloride_solution', 2000))
    .itemOutputs('3x #forge:dusts/magnesium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('hshrsjvn4vbdi6') // remapped from original line 131
    .itemInputs('6x #forge:dusts/magnesium_sulfate')
    .itemOutputs('2x #forge:dusts/magnesia')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('rzctgzhgqz0mco') // remapped from original line 139
    .itemInputs('7x #forge:dusts/kieserite')
    .itemOutputs('6x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('axabaeowaie0fb') // remapped from original line 147
    .itemInputs('24x #forge:dusts/langbeinite')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:langbeinite_leach', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.crystallizer('y1x44khb7hzwok') // remapped from original line 155
    .inputFluids(safeFluidOf('susy:langbeinite_leach', 1000))
    .itemOutputs('12x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:potassium_sulfate_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.distillery('lhwhhdo5qvkmy4') // remapped from original line 163
    .inputFluids(safeFluidOf('susy:potassium_sulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/potassium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.mixer('cubkuyhmzxbekr') // remapped from original line 171
    .itemInputs('32x #forge:dusts/polyhalite')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('12x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:polyhalite_leach', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.crystallizer('ssqwubsbrudndi') // remapped from original line 180
    .inputFluids(safeFluidOf('susy:polyhalite_leach', 1000))
    .itemOutputs('6x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:potassium_sulfate_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('jvm6opaptjsznp') // remapped from original line 189
    .inputFluids(safeFluidOf('susy:magnesium_chloride_solution', 1000))
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 3000))
    .outputFluids(safeFluidOf('susy:hydrated_magnesium_chloride_glycolate', 1000))
    .EUt(480)
    .duration(200)

  event.recipes.susy.vacuum_distillation('qqqjfd3mam9fgd') // remapped from original line 197
    .inputFluids(safeFluidOf('susy:hydrated_magnesium_chloride_glycolate', 1000))
    .outputFluids(safeFluidOf('susy:magnesium_chloride_glycolate', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(480)
    .duration(200)

  event.recipes.susy.crystallizer('iwybzw3pyoszkf') // remapped from original line 205
    .inputFluids(safeFluidOf('susy:magnesium_chloride_glycolate', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 6000))
    .itemOutputs('9x #forge:dusts/magnesium_chloride_ammoniate')
    .outputFluids(safeFluidOf('susy:impure_ethylene_glycol', 3000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.distillery('88nmonvlhyvuvs') // remapped from original line 214
    .inputFluids(safeFluidOf('susy:impure_ethylene_glycol', 3000))
    .chancedOutput('3x #forge:dusts/calcium_chloride', 500, 0)
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 2900))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('uvlbr4knkuc6sk') // remapped from original line 222
    .inputFluids(safeFluidOf('gtceu:ammonia', 500))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:saturated_ammoniacal_methanol', 1000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.mixer('nlbdskmmybqotx') // remapped from original line 230
    .itemInputs('9x #forge:dusts/magnesium_chloride_ammoniate')
    .inputFluids(safeFluidOf('susy:saturated_ammoniacal_methanol', 1000))
    .itemOutputs('9x #forge:dusts/washed_magnesium_chloride_ammoniate')
    .outputFluids(safeFluidOf('susy:impure_saturated_ammoniacal_methanol', 1000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.distillation_tower('d5dijl1yh8hrdn') // remapped from original line 239
    .inputFluids(safeFluidOf('susy:impure_saturated_ammoniacal_methanol', 1000))
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 100))
    .outputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 500))
    .EUt(480)
    .duration(200)

  event.recipes.susy.fluidized_bed_reactor('kb3p1mc7aam1vt') // remapped from original line 248
    .itemInputs('9x #forge:dusts/magnesium_chloride_ammoniate')
    .itemOutputs('3x #forge:dusts/purified_magnesium_chloride')
    .outputFluids(safeFluidOf('gtceu:ammonia', 6000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.ELECTROLYZER('yopxl71namdn4x') // remapped from original line 258
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/steel')
    .inputFluids(safeFluidOf('gtceu:magnesium_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/magnesium')
    .EUt(30)
    .duration(300)

  event.recipes.gtceu.ELECTROLYZER('bkcfpn363cmb7n') // remapped from original line 268
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/steel')
    .inputFluids(safeFluidOf('susy:purified_magnesium_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/high_purity_magnesium')
    .EUt(30)
    .duration(300)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (combustible in combustibles()) {
  //     EBF.recipeBuilder()
  //         .inputs(ore('dustMagnesia') * 2)
  //         .inputs(ore(combustible.name) * combustible.equivalent(1))
  //         .outputs(metaitem('dustMagnesium'))
  //         .outputs(metaitem(combustible.byproduct) * combustible.equivalent(1))
  //         .fluidOutputs(fluid('carbon_monoxide') * 1000)
  //         .EUt(120)
  //         .duration(20 * combustible.duration)
  //         .blastFurnaceTemp(2500)
  //         .buildAndRegister()
  // }

  // for (combustible in combustibles()) {
  //     REACTION_FURNACE.recipeBuilder()
  //         .inputs(ore('dustMagnesia') * 2)
  //         .inputs(ore(combustible.name) * combustible.equivalent(1))
  //         .fluidInputs(fluid('chlorine') * 2000)
  //         .outputs(metaitem('dustMagnesiumChloride') * 3)
  //         .outputs(metaitem(combustible.byproduct))
  //         .fluidOutputs(fluid('carbon_dioxide') * 1000)
  //         .EUt(30)
  //         .duration(120)
  //         .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // ROASTER = recipemap('roaster')
  // EBF = recipemap('electric_blast_furnace')
  // BR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
  // MIXER = recipemap('mixer')
  // CRYSTALLIZER = recipemap('crystallizer')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // LCR = recipemap('large_chemical_reactor')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // FLBR = recipemap('fluidized_bed_reactor')
  // DT = recipemap('distillation_tower')
});