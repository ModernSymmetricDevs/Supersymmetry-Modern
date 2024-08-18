ServerEvents.recipes(event => {

  event.recipes.susy.roaster('nzzi9hfgbml3r7') // remapped from original line 16
    .itemInputs('2x #forge:dusts/impure_stibnite')
    .notConsumable(safeFluidOf('gtceu:nitrogen', 8000))
    .itemOutputs('3x #forge:dusts/stibnite')
    .itemOutputs('1x #forge:dusts/pegmatite_tailings')
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.gtceu.mixer('lqlxz8x1tivgwf') // remapped from original line 27
    .itemInputs('8x #forge:dusts/impure_stibnite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_stibnite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('yumklt63kvyvod') // remapped from original line 35
    .inputFluids(safeFluidOf('susy:impure_stibnite_slurry', 2000))
    .notConsumable('1x #forge:dusts/sodium_isobutyl_xanthate')
    .notConsumable('1x #forge:dusts/lead_nitrate')
    .notConsumable(safeFluidOf('susy:sodium_cyanide_solution', 100))
    .outputFluids(safeFluidOf('susy:stibnite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:pegmatite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('hwbqqflvbwkh2k') // remapped from original line 46
    .inputFluids(safeFluidOf('susy:stibnite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/stibnite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.susy.roaster('fxud4r1rc8bbm7') // remapped from original line 56
    .itemInputs('5x #forge:dusts/antimony_iii_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('5x #forge:dusts/antimony_trioxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.susy.roaster('3mnwyqa0xxygit') // remapped from original line 65
    .itemInputs('1x #forge:dusts/stibnite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('5x #forge:dusts/antimony_trioxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.gtceu.electric_blast_furnace('9lddarmftljkpt') // remapped from original line 74
    .itemInputs('1x #forge:dusts/stibnite')
    .inputFluids(safeFluidOf('gtceu:oxygen', 6000))
    .itemOutputs('2x #forge:ingots/antimony')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .EUt(voltAmps[2] * 2)
    .duration(200)

  event.recipes.gtceu.electric_blast_furnace('lrfpbua7slvsx0') // remapped from original line 83
    .itemInputs('5x #forge:dusts/antimony_iii_sulfide')
    .inputFluids(safeFluidOf('gtceu:oxygen', 6000))
    .itemOutputs('2x #forge:ingots/antimony')
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 3000))
    .EUt(voltAmps[2] * 2)
    .duration(200)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('niiduugjifm6ct') // remapped from original line 94
    //.notConsumable('1x #forge:springs/cupronickel')
    //.itemInputs('4x #forge:dusts/tetrahedrite')
    //.itemInputs('18x #forge:dusts/sodium_sulfide')
    //.inputFluids(safeFluidOf('susy:gtfo_heated_water', 12000))
    //.itemOutputs('15x #forge:dusts/copper_i_sulfide')
    //.itemOutputs('4x #forge:dusts/copper_ii_sulfide')
    //.outputFluids(safeFluidOf('susy:sodium_thioantimonite_solution', 12000))
    //.EUt(voltAmps[2])
    //.duration(200)

  event.recipes.susy.batch_reactor('cfmawwaz1gfzqu') // remapped from original line 106
    .inputFluids(safeFluidOf('susy:sodium_thioantimonite_solution', 12000))
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 12000))
    .itemOutputs('10x #forge:dusts/antimony_iii_sulfide')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 24000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 6000))
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.susy.batch_reactor('uic3vgjquewcmd') // remapped from original line 118
    .inputFluids(safeFluidOf('susy:antimony_dross', 720))
    .inputFluids(safeFluidOf('gtceu:chlorine', 6000))
    .itemOutputs('2x #forge:dusts/antimony')
    .itemOutputs('6x #forge:dusts/magnesium_chloride')
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.susy.roaster('7skvjlqz1wz7dq') // remapped from original line 130
    .itemInputs('5x #forge:dusts/antimony_arsenic_flue_dust')
    .itemInputs('54x #forge:dusts/sodium_hydroxide')
    .itemOutputs('4x #forge:dusts/antimony')
    .itemOutputs('48x #forge:dusts/sodium_arsenate')
    .outputFluids(safeFluidOf('gtceu:steam', 9000))
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.susy.VACUUM_DT('f9tv5ewlghh6mc') // remapped from original line 142
    .inputFluids(safeFluidOf('susy:antimony_trichloride', 1000))
    .outputFluids(safeFluidOf('susy:purified_antimony_trichloride', 1000))
    .EUt(voltAmps[2])
    .duration(200)

  event.recipes.susy.batch_reactor('n3spgi5wh1ve2y') // remapped from original line 149
    .inputFluids(safeFluidOf('susy:purified_antimony_trichloride', 2000))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 6000))
    .itemOutputs('5x #forge:dusts/purified_antimony_trioxide')
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 3000))
    .EUt(voltAmps[2])
    .duration(400)

  event.recipes.susy.reaction_furnace('rvzzv58fb6stws') // remapped from original line 158
    .itemInputs('5x #forge:dusts/purified_antimony_trioxide')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemOutputs('2x #forge:dusts/high_purity_antimony')
    .outputFluids(safeFluidOf('gtceu:steam', 3000))
    .EUt(voltAmps[2])
    .duration(400)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BR = recipemap('batch_reactor')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // FLOTATION = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // EBF = recipemap('electric_blast_furnace')
  // BR = recipemap('batch_reactor')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  //     // LIQUIDATION (1.5x)
  //     // FLOTATION (2x)
});