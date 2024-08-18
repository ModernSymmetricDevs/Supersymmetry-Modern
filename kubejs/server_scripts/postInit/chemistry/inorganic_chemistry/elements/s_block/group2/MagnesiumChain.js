ServerEvents.recipes(event => {

  event.recipes.susy.roaster('8hukjyzogxjkfs') // remapped from original line 16
    .itemInputs('5x #forge:dusts/magnesite')
    .itemOutputs('2x #forge:dusts/magnesia')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('6xq2huwme8p5uv') // remapped from original line 24
    .itemInputs('5x #forge:dusts/magnesium_carbonate')
    .itemOutputs('2x #forge:dusts/magnesia')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('atbx5dlg3mrzon') // remapped from original line 32
    .itemInputs('10x #forge:dusts/dolomite')
    .itemOutputs('2x #forge:dusts/magnesia')
    .itemOutputs('2x #forge:dusts/quicklime')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.electric_blast_furnace('gj9gkkkp756ftl') // remapped from original line 41
    .itemInputs('4x #forge:dusts/magnesia')
    .itemInputs('4x #forge:dusts/quicklime')
    .itemInputs('1x #forge:dusts/silicon')
    .itemOutputs('7x #forge:dusts/calcium_orthosilicate')
    .outputFluids(safeFluidOf('gtceu:magnesium', 288))
    .EUt(30)
    .duration(200)
    .blastFurnaceTemp(1370)

  event.recipes.susy.roaster('beeyoon21cymnj') // remapped from original line 65
    .itemInputs('7x #forge:dusts/calcium_orthosilicate')
    .itemOutputs('3x #forge:dusts/silicon_dioxide')
    .itemOutputs('4x #forge:dusts/quicklime')
    .EUt(30)
    .duration(120)

  event.recipes.susy.reaction_furnace('6ggd4o7d7wqdqm') // remapped from original line 88
    .itemInputs('5x #forge:dusts/magnesite')
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('3x #forge:dusts/magnesium_chloride')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.large_chemical_reactor('j8tdmkmfywhp29') // remapped from original line 98
    .itemInputs('5x #forge:dusts/magnesite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:magnesium_chloride_solution', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('9rczmpyljr9wf3') // remapped from original line 107
    .itemInputs('2x #forge:dusts/magnesia')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('5x #forge:dusts/magnesium_hydroxide')
    .EUt(30)
    .duration(120)

  event.recipes.susy.batch_reactor('3wcnmjgszzgobo') // remapped from original line 115
    .itemInputs('5x #forge:dusts/magnesium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .outputFluids(safeFluidOf('susy:magnesium_chloride_solution', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.distillery('5tbtrstpfn55lo') // remapped from original line 123
    .inputFluids(safeFluidOf('susy:magnesium_chloride_solution', 2000))
    .itemOutputs('3x #forge:dusts/magnesium_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(30)
    .duration(120)

  event.recipes.susy.roaster('6sa1gqz0t4o7zc') // remapped from original line 131
    .itemInputs('6x #forge:dusts/magnesium_sulfate')
    .itemOutputs('2x #forge:dusts/magnesia')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.roaster('igxhrky4dsuoak') // remapped from original line 139
    .itemInputs('7x #forge:dusts/kieserite')
    .itemOutputs('6x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('ydi4pt2hkwv3su') // remapped from original line 147
    .itemInputs('24x #forge:dusts/langbeinite')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:langbeinite_leach', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.crystallizer('5xv9aaorritduw') // remapped from original line 155
    .inputFluids(safeFluidOf('susy:langbeinite_leach', 1000))
    .itemOutputs('12x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:potassium_sulfate_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.distillery('picqiwqum6tn8u') // remapped from original line 163
    .inputFluids(safeFluidOf('susy:potassium_sulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/potassium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(30)
    .duration(120)

  event.recipes.gtceu.mixer('emnplnrg7jsi7s') // remapped from original line 171
    .itemInputs('32x #forge:dusts/polyhalite')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('12x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:polyhalite_leach', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.crystallizer('is4zw44qajg1jm') // remapped from original line 180
    .inputFluids(safeFluidOf('susy:polyhalite_leach', 1000))
    .itemOutputs('6x #forge:dusts/magnesium_sulfate')
    .outputFluids(safeFluidOf('susy:potassium_sulfate_solution', 1000))
    .EUt(30)
    .duration(160)

  event.recipes.susy.batch_reactor('uf8oyziap71noj') // remapped from original line 189
    .inputFluids(safeFluidOf('susy:magnesium_chloride_solution', 1000))
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 3000))
    .outputFluids(safeFluidOf('susy:hydrated_magnesium_chloride_glycolate', 1000))
    .EUt(480)
    .duration(200)

  event.recipes.susy.vacuum_distillation('hiawvbmwwq330j') // remapped from original line 197
    .inputFluids(safeFluidOf('susy:hydrated_magnesium_chloride_glycolate', 1000))
    .outputFluids(safeFluidOf('susy:magnesium_chloride_glycolate', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(480)
    .duration(200)

  event.recipes.susy.crystallizer('wql3sptxa0bmxa') // remapped from original line 205
    .inputFluids(safeFluidOf('susy:magnesium_chloride_glycolate', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 6000))
    .itemOutputs('9x #forge:dusts/magnesium_chloride_ammoniate')
    .outputFluids(safeFluidOf('susy:impure_ethylene_glycol', 3000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.distillery('khapz6njckqtou') // remapped from original line 214
    .inputFluids(safeFluidOf('susy:impure_ethylene_glycol', 3000))
    .chancedOutput('3x #forge:dusts/calcium_chloride', 500, 0)
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 2900))
    .EUt(30)
    .duration(160)

  event.recipes.gtceu.mixer('ioelohvjjtl6n9') // remapped from original line 222
    .inputFluids(safeFluidOf('gtceu:ammonia', 500))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:saturated_ammoniacal_methanol', 1000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.mixer('rj9tgs2ipd3c1x') // remapped from original line 230
    .itemInputs('9x #forge:dusts/magnesium_chloride_ammoniate')
    .inputFluids(safeFluidOf('susy:saturated_ammoniacal_methanol', 1000))
    .itemOutputs('9x #forge:dusts/washed_magnesium_chloride_ammoniate')
    .outputFluids(safeFluidOf('susy:impure_saturated_ammoniacal_methanol', 1000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.distillation_tower('xlavglvt8hwrmu') // remapped from original line 239
    .inputFluids(safeFluidOf('susy:impure_saturated_ammoniacal_methanol', 1000))
    .outputFluids(safeFluidOf('susy:ethylene_glycol', 100))
    .outputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 500))
    .EUt(480)
    .duration(200)

  event.recipes.susy.fluidized_bed_reactor('xyeew4hwag41vp') // remapped from original line 248
    .itemInputs('9x #forge:dusts/magnesium_chloride_ammoniate')
    .itemOutputs('3x #forge:dusts/purified_magnesium_chloride')
    .outputFluids(safeFluidOf('gtceu:ammonia', 6000))
    .EUt(480)
    .duration(200)

  event.recipes.gtceu.ELECTROLYZER('gwjixufuqxwriy') // remapped from original line 258
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
    .notConsumable('1x #forge:rods/steel')
    .inputFluids(safeFluidOf('gtceu:magnesium_chloride', 432))
    .outputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('1x #forge:dusts/magnesium')
    .EUt(30)
    .duration(300)

  event.recipes.gtceu.ELECTROLYZER('pibwbsggvxm3ri') // remapped from original line 268
    .notConsumable(safeItemId('1x susy:graphite_electrode'))
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