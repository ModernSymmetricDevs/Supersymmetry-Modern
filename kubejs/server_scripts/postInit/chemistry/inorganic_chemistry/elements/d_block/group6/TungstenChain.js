ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:dusts/scheelite' && safeFluidOf('gtceu:hydrochloric_acid')})
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:dusts/tungstate' && safeFluidOf('gtceu:hydrochloric_acid')})

  event.recipes.susy.gravity_separator('l7uuiyrkdzysjj') // remapped from original line 25
    .itemInputs('1x #forge:dusts/scheelite')
    .itemOutputs('1x #forge:dusts/sifted_scheelite')
    .chancedOutput('1x #forge:dusts/granite_tailings', 5000, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('l9sipujpknctep') // remapped from original line 33
    .itemInputs('8x #forge:dusts/sifted_scheelite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_scheelite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('a7yxcvpl9imqbm') // remapped from original line 41
    .inputFluids(safeFluidOf('susy:impure_scheelite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:oleic_acid', 144))
    .notConsumable('6x #forge:dusts/sodium_silicate')
    .outputFluids(safeFluidOf('susy:scheelite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('eknzgdzxflgxij') // remapped from original line 51
    .inputFluids(safeFluidOf('susy:scheelite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_scheelite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('3emxjlfpipwsxd') // remapped from original line 59
    .itemInputs('1x #forge:dusts/flotated_scheelite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .itemOutputs('1x #forge:dusts/calcined_scheelite')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 25))
    .outputFluids(safeFluidOf('susy:dense_steam', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('dpw6xa3f0fumyc') // remapped from original line 69
    .itemInputs('1x #forge:dusts/calcined_scheelite')
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:sodium_tungstate_solution', 1000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.gravity_separator('qhawzgyrtdxrci') // remapped from original line 81
    .itemInputs('1x #forge:dusts/wolframite')
    .itemOutputs('1x #forge:dusts/sifted_wolframite')
    .chancedOutput('1x #forge:dusts/granite_tailings', 5000, 0)
    .chancedOutput('1x #forge:dusts/gold_concentrate', 500, 100)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('iflsruoc05uiha') // remapped from original line 90
    .itemInputs('8x #forge:dusts/sifted_wolframite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_wolframite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('uju3rr0dmrifkx') // remapped from original line 98
    .inputFluids(safeFluidOf('susy:impure_wolframite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:oleic_acid', 144))
    .notConsumable('6x #forge:dusts/sodium_silicate')
    .outputFluids(safeFluidOf('susy:wolframite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('lmggjmpqfydsbn') // remapped from original line 108
    .inputFluids(safeFluidOf('susy:wolframite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_wolframite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('uo7ndj3i4hzohv') // remapped from original line 116
    .itemInputs('1x #forge:dusts/flotated_wolframite')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .chancedOutput('5x #forge:dusts/manganese_ii_hydroxide', 5000, 0)
    .chancedOutput('5x #forge:dusts/iron_ii_hydroxide', 5000, 0)
    .outputFluids(safeFluidOf('susy:sodium_tungstate_solution', 1000)) 
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('z2jhvxt1h0uviy') // remapped from original line 129
    .itemInputs('17x #forge:dusts/aluminium_sulfate')
    .inputFluids(safeFluidOf('susy:sodium_tungstate_solution', 18000))
    .itemOutputs('8x #forge:dusts/aluminium_silicate')
    .outputFluids(safeFluidOf('susy:silicate_free_tungstate_solution', 18000)) 
    .EUt(voltAmps[3])
    .duration(90)

  event.recipes.gtceu.large_chemical_reactor('qo52tvantant28') // remapped from original line 143
    .itemInputs('6x #forge:dusts/sodium_sulfide')
    .inputFluids(safeFluidOf('susy:silicate_free_tungstate_solution', 9000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .chancedOutput('4x #forge:dusts/molybdenum_trisulfide', 5000, 0)
    .outputFluids(safeFluidOf('susy:molybdenum_free_tungstate_solution', 11250)) 
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 500))
    .EUt(voltAmps[3])
    .duration(180)

  event.recipes.gtceu.mixer('komg1vw3sex8ad') // remapped from original line 155
    .inputFluids(safeFluidOf('susy:kerosene', 325))
    .inputFluids(safeFluidOf('susy:trioctylamine', 625))
    .inputFluids(safeFluidOf('susy:isodecanol', 50))
    .outputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 1000))
    .EUt(voltAmps[4])
    .duration(200)

  event.recipes.gtceu.centrifuge('pvxeiflo6uqhwk') // remapped from original line 164
    .inputFluids(safeFluidOf('susy:ammonium_tungstate_solution', 4000))
    .inputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 8000)) 
    .outputFluids(safeFluidOf('susy:ammonia_solution', 4000))
    .outputFluids(safeFluidOf('susy:tungsten_extract', 8000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.gtceu.centrifuge('ee3xndoxyshx6j') // remapped from original line 173
    .inputFluids(safeFluidOf('susy:molybdenum_free_tungstate_solution', 11250)) 
    .inputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 8000)) 
    .outputFluids(safeFluidOf('susy:very_diluted_sodium_sulfate_solution', 11250)) 
    .outputFluids(safeFluidOf('susy:tungsten_extract', 8000)) 
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.gtceu.distillery('kpe3fvqdxhtoah') // remapped from original line 182
    .inputFluids(safeFluidOf('susy:very_diluted_sodium_sulfate_solution', 9000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 9000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.centrifuge('ctixiquhy7zwoh') // remapped from original line 190
    .inputFluids(safeFluidOf('susy:tungsten_extract', 8000))
    .inputFluids(safeFluidOf('susy:demineralized_water', 2000)) 
    .outputFluids(safeFluidOf('susy:scrubbed_tungsten_extract', 8000))
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.gtceu.centrifuge('mzjbzhweqwamj5') // remapped from original line 199
    .inputFluids(safeFluidOf('susy:scrubbed_tungsten_extract', 8000)) 
    .inputFluids(safeFluidOf('susy:ammonia_solution', 5000)) 
    .outputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 8000))
    .outputFluids(safeFluidOf('susy:ammonium_isopolytungstate_solution', 5000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.crystallizer('yx8vpdgtgkryfd') // remapped from original line 208
    .inputFluids(safeFluidOf('susy:ammonium_isopolytungstate_solution', 5000))
    .chancedOutput('1x #forge:dusts/ammonium_paratungstate', 5000, 0)
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(voltAmps[3])
    .duration(600)

  event.recipes.susy.roaster('lpnqycm2kuveko') // remapped from original line 216
    .itemInputs('1x #forge:dusts/ammonium_paratungstate')
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .itemOutputs('48x #forge:dusts/tungsten_trioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 10000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 10000))
    .EUt(voltAmps[3])
    .duration(1200)

  event.recipes.susy.reaction_furnace('qb23xojidvfhod') // remapped from original line 228
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemInputs('4x #forge:dusts/tungsten_trioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .itemOutputs('1x #forge:dusts/tungsten'.first())
    .duration(100)
    .EUt(voltAmps[4])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // MIXER = recipemap('mixer')
  // FF = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // CENTRIFUGE = recipemap('centrifuge')
  // BR = recipemap('batch_reactor')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DISTILLERY = recipemap('distillery')
  // GRAVITY_SEPARATOR = recipemap('gravity_separator')
  // ROASTER = recipemap('roaster')
  // LCR = recipemap('large_chemical_reactor')
  // AUTOCLAVE = recipemap('autoclave')
  // CRYSTALLIZER = recipemap('crystallizer')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // Conversion to thiomolybdate: 9x H2O, 4x Na2WO4, 1/4x Na2MoS4, 1/4x Na2SO4, 2x NaOH
  // Precipitation of MoS3: 45/4x H2O, 4x Na2WO4, 5/4x Na2SO4
  // */
});