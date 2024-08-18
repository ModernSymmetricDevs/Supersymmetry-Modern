ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('m1uymfcddpefe0') // remapped from original line 21
    .itemInputs('8x #forge:dusts/impure_spodumene')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_spodumene_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('o4ulj0pmzd497o') // remapped from original line 29
    .inputFluids(safeFluidOf('susy:impure_spodumene_slurry', 2000))
    .notConsumable(safeFluidOf('susy:alkaline_sodium_oleate_solution', 1000))
    .outputFluids(safeFluidOf('susy:spodumene_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('hgzcnmbaw7pkap') // remapped from original line 38
    .inputFluids(safeFluidOf('susy:spodumene_slurry', 1000))
    .itemOutputs('16x #forge:dusts/spodumene')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.centrifuge('stkiueatigvdll') // remapped from original line 46
    .inputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .itemOutputs('2x #forge:dusts/pegmatite_tailings')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('z49pkei71exwam') // remapped from original line 54
    .itemInputs('1x #forge:dusts/spodumene')
    .itemOutputs('8x #forge:dusts/beta_spodumene')
    .EUt(30)
    .duration(200)

  event.recipes.susy.roaster('qczeazvckbx968') // remapped from original line 61
    .itemInputs('1x #forge:dusts/petalite')
    .itemOutputs('12x #forge:dusts/roasted_petalite')
    .EUt(30)
    .duration(200)

  event.recipes.susy.fluidized_bed_reactor('lbs4unaikoosfr') // remapped from original line 68
    .itemInputs('1x #forge:dusts/spodumene')
    .itemOutputs('10x #forge:dusts/beta_spodumene')
    .EUt(120)
    .duration(40)

  event.recipes.susy.fluidized_bed_reactor('vey0dnyncbpdgy') // remapped from original line 75
    .itemInputs('1x #forge:dusts/petalite')
    .itemOutputs('16x #forge:dusts/roasted_petalite')
    .EUt(160)
    .duration(40)

  event.recipes.gtceu.centrifuge('vdaxltpgdxakwx') // remapped from original line 82
    .itemInputs('16x #forge:dusts/roasted_petalite')
    .itemOutputs('10x #forge:dusts/beta_spodumene')
    .itemOutputs('6x #forge:dusts/silicon_dioxide')
    .EUt(30)
    .duration(40)

  event.recipes.susy.batch_reactor('h8vfuxl75mfsns') // remapped from original line 91
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    .itemInputs('20x #forge:dusts/beta_spodumene')
    .outputFluids(safeFluidOf('susy:impure_lithium_sulfate_solution', 2000))
    .itemOutputs('8x #forge:dusts/aluminium_silicate')
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.autoclave('cmobttuxembrdw') // remapped from original line 101
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemInputs('8x #forge:dusts/aluminium_silicate')
    .outputFluids(safeFluidOf('susy:sodium_silicate_solution', 1000))
    .itemOutputs('5x #forge:dusts/alumina')
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('vkmoqbul8wdg6w') // remapped from original line 110
    .inputFluids(safeFluidOf('susy:sodium_silicate_solution', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .itemOutputs('3x #forge:dusts/wet_silica_gel')
    .outputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.dryer('gipxcotlqvrufs') // remapped from original line 119
    .itemInputs('1x #forge:dusts/wet_silica_gel')
    .itemOutputs('1x #forge:dusts/silica_gel')
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.macerator('vqasxxqsqlj1rz') // remapped from original line 126
    .itemInputs('1x #forge:dusts/silica_gel')
    .itemOutputs('1x #forge:dusts/silicon_dioxide')
    .EUt(30)
    .duration(80)

  event.recipes.susy.batch_reactor('hx8umthtz7ejzr') // remapped from original line 134
    .itemInputs('1x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:impure_lithium_sulfate_solution', 1000))
    .chancedOutput('1111x #forge:dusts/aluminium_hydroxide', 1111, 0)
    .chancedOutput('1111x #forge:dusts/iron_iii_hydroxide', 1111, 0)
    .chancedOutput('1667x #forge:dusts/magnesium_hydroxide', 1667, 0)
    .outputFluids(safeFluidOf('susy:lithium_sulfate_solution', 900))
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('jvm3ejrfznc3hi') // remapped from original line 145
    .inputFluids(safeFluidOf('susy:lithium_sulfate_solution', 1000))
    .itemInputs('6x #forge:dusts/soda_ash')
    .itemOutputs(safeItemId('6x gregtechfoodoption:lithium_carbonate_dust'))
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1000))
    .duration(180)
    .EUt(200)

  event.recipes.susy.roaster('anfairju5pjj2x') // remapped from original line 154
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .itemInputs('6x #forge:dusts/lithium_carbonate')
    .itemOutputs('4x #forge:dusts/lithium_chloride')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .duration(180)
    .EUt(200)

  event.recipes.gtceu.electrolytic_cell('28pvxucwturygm') // remapped from original line 164
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/steel')
    .notConsumable(safeFluidOf('gtceu:rock_salt', 358))
    .inputFluids(safeFluidOf('gtceu:lithium_chloride', 288))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .itemOutputs('1x #forge:dusts/lithium')
    .EUt(120)
    .duration(180)

  event.recipes.susy.roaster('cscuxpzstrzmgv') // remapped from original line 175
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemInputs('8x #forge:dusts/amblygonite')
    .itemOutputs('6x #forge:dusts/aluminium_phosphate')
    .outputFluids(safeFluidOf('susy:amblygonite_leach', 1000))
    .duration(120)
    .EUt(200)

  event.recipes.susy.batch_reactor('e0z6f4ien6ja9a') // remapped from original line 184
    .inputFluids(safeFluidOf('susy:amblygonite_leach', 2000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('7x #forge:dusts/lithium_sulfate')
    .outputFluids(safeFluidOf('susy:diluted_hydrofluoric_acid', 2000))
    .duration(60)
    .EUt(200)

  event.recipes.gtceu.distillation_tower('49e1dfmuj1xsjk') // remapped from original line 193
    .inputFluids(safeFluidOf('susy:diluted_hydrofluoric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(120)
    .EUt(200)

  event.recipes.susy.batch_reactor('rad5a2crryuoox') // remapped from original line 201
    .itemInputs('7x #forge:dusts/lithium_sulfate')
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .itemOutputs(safeItemId('6x gregtechfoodoption:lithium_carbonate_dust'))
    .outputFluids(safeFluidOf('susy:sodium_sulfate_solution', 1000))
    .duration(120)
    .EUt(200)

  event.recipes.susy.batch_reactor('4xf7enwu1pzusg') // remapped from original line 210
    .itemInputs('6x #forge:dusts/aluminium_phosphate')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 3000))
    .itemOutputs('3x #forge:dusts/aluminium_chloride')
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .duration(120)
    .EUt(200)

  event.recipes.susy.crystallizer('k871pn11uvfr6u') // remapped from original line 219
    .itemInputs('1x #forge:dusts/lepidolite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 5000))
    .outputFluids(safeFluidOf('susy:lepidolite_leach', 2000))
    .itemOutputs('12x #forge:dusts/alkali_alum_mix')
    .duration(120)
    .EUt(200)

  event.recipes.susy.crystallizer('ihbeoctypyezaz') // remapped from original line 228
    .itemInputs('2x #forge:dusts/quicklime')
    .inputFluids(safeFluidOf('susy:lepidolite_leach', 2000))
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:neutralized_lepidolite_leach', 3000))
    .duration(120)
    .EUt(200)

  event.recipes.susy.crystallizer('sxbitq1kd8b81d') // remapped from original line 237
    .notConsumable('1x #forge:dusts/tiny_aluminium_sulfate')
    .inputFluids(safeFluidOf('susy:neutralized_lepidolite_leach', 3000))
    .itemOutputs('3x #forge:dusts/aluminium_sulfate')
    .outputFluids(safeFluidOf('susy:aluminium_free_lepidolite_leach', 3000))
    .duration(120)
    .EUt(200)

  event.recipes.susy.crystallizer('ovnq4irm60hoyr') // remapped from original line 246
    .itemInputs('6x #forge:dusts/soda_ash')
    .inputFluids(safeFluidOf('susy:aluminium_free_lepidolite_leach', 1000))
    .itemOutputs(safeItemId('6x gregtechfoodoption:lithium_carbonate_dust'))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(120)
    .EUt(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // CENTRIFUGE = recipemap('centrifuge')
  // AUTOCLAVE = recipemap('autoclave')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // FLOTATION = recipemap('froth_flotation')
  // CRYSTALLIZER = recipemap('crystallizer')
  // ROTARY_KILN = recipemap("rotary_kiln")
  // DRYER = recipemap("dryer")
  // MACERATOR = recipemap("macerator")
  // CLARIFIER = recipemap("clarifier")
});