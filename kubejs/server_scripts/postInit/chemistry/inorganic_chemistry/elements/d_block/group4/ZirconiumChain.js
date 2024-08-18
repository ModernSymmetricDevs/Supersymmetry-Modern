ServerEvents.recipes(event => {

  event.recipes.susy.gravity_separator('765dijssxj9h7w') // remapped from original line 27
    .itemInputs('1x #forge:dusts/zircon')
    .itemOutputs('1x #forge:dusts/sifted_zircon')
    .chancedOutput('5000x #forge:dusts/certus_quartz', 5000, 0)
    .EUt(voltAmps[1])
    .duration(40)

  event.recipes.gtceu.mixer('oueku0i7q51gb4') // remapped from original line 35
    .itemInputs('8x #forge:dusts/sifted_zircon')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_zircon_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('rizsgr0ykgmvf4') // remapped from original line 43
    .inputFluids(safeFluidOf('susy:impure_zircon_slurry', 2000))
    .notConsumable(safeFluidOf('susy:soda_ash_solution', 1000))
    .notConsumable(safeFluidOf('susy:alkaline_sodium_oleate_solution', 1000))
    .notConsumable('6x #forge:dusts/sodium_silicate')
    .notConsumable('4x #forge:dusts/iron_iii_chloride')
    .notConsumable('3x #forge:dusts/sodium_sulfide')
    .outputFluids(safeFluidOf('susy:zircon_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('ziqcfnwor2i0o3') // remapped from original line 56
    .inputFluids(safeFluidOf('susy:zircon_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_zircon')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.electrostatic_separator('74opojymet6kgs') // remapped from original line 64
    .itemInputs('1x #forge:dusts/flotated_zircon')
    .itemOutputs('1x #forge:dusts/concentrate_zircon')
    .chancedOutput('500x #forge:dusts/ilmenite', 500, 100)
    .chancedOutput('500x #forge:dusts/chromite', 500, 100)
    .chancedOutput('500x #forge:dusts/hematite', 500, 100)
    .chancedOutput('500x #forge:dusts/rutile', 500, 100)
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.advanced_arc_furnace('z6oidjpec1hp7y') // remapped from original line 76
    .itemInputs('1x #forge:dusts/concentrate_zircon')
    .chancedOutput('3x #forge:dusts/fused_zirconia', 9000, 0)
    .itemOutputs('3x #forge:dusts/silicon_dioxide')
    .duration(20)
    .EUt(voltAmps[4])

  event.recipes.susy.advanced_arc_furnace('bybsmipkyz8fjc') // remapped from original line 101
    .itemInputs('1x #forge:dusts/baddeleyite')
    .chancedOutput('3x #forge:dusts/fused_zirconia', 9000, 0)
    .duration(20)
    .EUt(voltAmps[5])

  event.recipes.susy.batch_reactor('shijrv1lnsijcr') // remapped from original line 109
    .itemInputs('3x #forge:dusts/fused_zirconia')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1500))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 750))
    .outputFluids(safeFluidOf('susy:zirconium_sulfate_solution', 2250))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('vk80zwtaheim6t') // remapped from original line 120
    .itemInputs('3x #forge:dusts/fused_zirconia')
    .itemInputs('2x #forge:dusts/quicklime')
    .chancedOutput('5x #forge:dusts/calcium_zirconate', 9000, 0)
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('beqhfzv7mvp9am') // remapped from original line 128
    .itemInputs('3x #forge:dusts/calcium_zirconate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .outputFluids(safeFluidOf('susy:zirconium_sulfate_solution', 3000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('oi2rp79fu9lgj5') // remapped from original line 136
    .itemInputs('6x #forge:dusts/calcium_chloride')
    .inputFluids(safeFluidOf('susy:zirconium_sulfate_solution', 3000))
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:zirconyl_chloride_solution', 2000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('ipxgcjmvtdluqo') // remapped from original line 160
    .itemInputs('5x #forge:dusts/impure_zirconium_tetrachloride')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .outputFluids(safeFluidOf('susy:zirconyl_chloride_solution', 2000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('v4ylqwcgpbdsxr') // remapped from original line 168
    .itemInputs('8x #forge:dusts/ammonium_thiocyanate')
    .inputFluids(safeFluidOf('susy:kerosene', 900))
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 100))
    .outputFluids(safeFluidOf('susy:hafnium_extraction_mixture', 1000))
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.gtceu.centrifuge('jvvmatfp5ugolr') // remapped from original line 177
    .inputFluids(safeFluidOf('susy:zirconyl_chloride_solution', 2000))
    .inputFluids(safeFluidOf('susy:hafnium_extraction_mixture', 1000))
    .outputFluids(safeFluidOf('susy:purified_zirconyl_chloride_solution', 2000))
    .outputFluids(safeFluidOf('susy:hafnium_extract', 1000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.LCR('cb46fkqxpqbsft') // remapped from original line 186
    .inputFluids(safeFluidOf('susy:purified_zirconyl_chloride_solution', 10000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 13000))
    .notConsumable(safeFluidOf('susy:ammonia_solution', 1000))
    .itemOutputs('23x #forge:dusts/zirconium_basic_sulfate')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 12000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.batch_reactor('x7umldtfpsxfpq') // remapped from original line 197
    .itemInputs('23x #forge:dusts/zirconium_basic_sulfate')
    .inputFluids(safeFluidOf('susy:ammonia_solution', 4000))
    .itemOutputs('15x #forge:dusts/zirconium_dioxide')
    .outputFluids(safeFluidOf('susy:ammonium_sulfate_solution', 2000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.vacuum_chamber('wjkxcgkwwuvgib') // remapped from original line 232
    .itemInputs(metaitem('sponge.zirconium.crude'))
    .itemOutputs(metaitem('sponge.zirconium'))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.macerator('ksbyalfqm1fbgd') // remapped from original line 239
    .itemInputs(metaitem('sponge.zirconium'))
    .itemOutputs('1x #forge:dusts/zirconium')
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('gyjjxsn4qt7vmx') // remapped from original line 248
    .itemInputs('1x #forge:dusts/zirconium')
    .itemInputs('4x #forge:dusts/any_purity_iodine')
    .itemOutputs('5x #forge:dusts/zirconium_iodide')
    .duration(300)
    .EUt(voltAmps[3])

  event.recipes.susy.CVD('7qzrhnourewyvv') // remapped from original line 256
    .itemInputs('5x #forge:dusts/zirconium_iodide')
    .notConsumable('1x #forge:rods/tungsten')
    .itemOutputs('1x #forge:dusts/high_purity_zirconium')
    .outputFluids(safeFluidOf('gtceu:iodine', 576))
    .duration(150)
    .EUt(voltAmps[4])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (highPurityCombustible in highPurityCombustibles()) {
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //                 .inputs(ore('dustConcentrateZircon'))
  //                 .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(4))
  //                 .fluidInputs(fluid('chlorine') * 8000)
  //                 .outputs(metaitem('dustImpureZirconiumTetrachloride') * 5)
  //                 .chancedOutput(metaitem(highPurityCombustible.byproduct), 1000, 0)
  //                 .chancedOutput(metaitem('dustCobalt'), 500, 100)
  //                 .fluidOutputs(fluid('silicon_tetrachloride') * 1000)
  //                 .fluidOutputs(fluid('carbon_monoxide') * 4000)
  //                 .duration(40 * highPurityCombustible.duration)
  //                 .EUt(Globals.voltAmps[3])
  //                 .buildAndRegister()
  // }

  // for (highPurityCombustible in highPurityCombustibles()) {
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //                 .inputs(ore('dustBaddeleyite'))
  //                 .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(2))
  //                 .fluidInputs(fluid('chlorine') * 4000)
  //                 .outputs(metaitem('dustImpureZirconiumTetrachloride') * 5)
  //                 .chancedOutput(metaitem(highPurityCombustible.byproduct), 1000, 0)
  //                 .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //                 .duration(40 * highPurityCombustible.duration)
  //                 .EUt(Globals.voltAmps[3])
  //                 .buildAndRegister()
  // }

  // for (highPurityCombustible in highPurityCombustibles()) {
  //         FLUIDIZED_BED_REACTOR.recipeBuilder()
  //                 .inputs(ore('dustZirconiumDioxide'))
  //                 .inputs(ore(highPurityCombustible.name) * highPurityCombustible.equivalent(2))
  //                 .fluidInputs(fluid('chlorine') * 4000)
  //                 .outputs(metaitem('dustZirconiumTetrachloride') * 5)
  //                 .fluidOutputs(fluid('carbon_monoxide') * 2000)
  //                 .duration(40 * highPurityCombustible.duration)
  //                 .EUt(Globals.voltAmps[3])
  //                 .buildAndRegister()
  // }

  // for (inertGas in Globals.inertGases) {
  //         EBF.recipeBuilder()
  //                 .circuitMeta(2)
  //                 .inputs(ore('dustZirconiumTetrachloride') * 5)
  //                 .notConsumable(fluid(inertGas.name) * inertGas.amount_required)
  //                 .inputs(ore('dustAnyPurityMagnesium') * 2)
  //                 .outputs(metaitem('sponge.zirconium.crude'))
  //                 .fluidOutputs(fluid('magnesium_chloride') * 864)
  //                 .blastFurnaceTemp(2150)
  //                 .duration(20 * inertGas.duration)
  //                 .EUt(Globals.voltAmps[4])
  //                 .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // MIXER = recipemap('mixer')
  // FF = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // ELECTROSTATIC_SEPARATOR = recipemap('electrostatic_separator')
  // BR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // SIFTER = recipemap('sifter')
  // FLUIDIZED_BED_REACTOR = recipemap('fluidized_bed_reactor')
  // VACUUM_FREEZER = recipemap('vacuum_freezer')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber')
  // MACERATOR = recipemap('macerator')
  // FIXED_BED_REACTOR = recipemap('fixed_bed_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // DISTILLERY = recipemap('distillery')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ADVANCED_ARC_FURNACE = recipemap('advanced_arc_furnace')
  // ROASTER = recipemap('roaster')
});