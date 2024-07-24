const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:dusts/scheelite' && safeFluidOf('gtceu:hydrochloric_acid')})
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:dusts/tungstate' && safeFluidOf('gtceu:hydrochloric_acid')})

  event.recipes.susy.gravity_separator('pdjowfqp69xxge') // remapped from original line 25
    .itemInputs('1x #forge:dusts/scheelite')
    .itemOutputs('1x #forge:dusts/sifted_scheelite')
    .chancedOutput('5000x #forge:dusts/granite_tailings', 5000, 0)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('hev40fy0lvgmf3') // remapped from original line 33
    .itemInputs('8x #forge:dusts/sifted_scheelite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_scheelite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('28hsc9jsdifh7n') // remapped from original line 41
    .inputFluids(safeFluidOf('susy:impure_scheelite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:oleic_acid', 144))
    .notConsumable('6x #forge:dusts/sodium_silicate')
    .outputFluids(safeFluidOf('susy:scheelite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('pmzraoxqnvnwdg') // remapped from original line 51
    .inputFluids(safeFluidOf('susy:scheelite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_scheelite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('t77jerwpeus4fc') // remapped from original line 59
    .itemInputs('1x #forge:dusts/flotated_scheelite')
    .inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 50))
    .itemOutputs('1x #forge:dusts/calcined_scheelite')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 25))
    .outputFluids(safeFluidOf('susy:dense_steam', 50))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('pryxbqb2lzfjkm') // remapped from original line 69
    .itemInputs('1x #forge:dusts/calcined_scheelite')
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:sodium_tungstate_solution', 1000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.gravity_separator('pxav1xrkat8rto') // remapped from original line 81
    .itemInputs('1x #forge:dusts/wolframite')
    .itemOutputs('1x #forge:dusts/sifted_wolframite')
    .chancedOutput('5000x #forge:dusts/granite_tailings', 5000, 0)
    .chancedOutput('500x #forge:dusts/gold_concentrate', 500, 100)
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.mixer('wii9pkypkbuz5f') // remapped from original line 90
    .itemInputs('8x #forge:dusts/sifted_wolframite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:impure_wolframite_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('jcje5sisgahhxp') // remapped from original line 98
    .inputFluids(safeFluidOf('susy:impure_wolframite_slurry', 2000))
    .notConsumable(safeFluidOf('susy:oleic_acid', 144))
    .notConsumable('6x #forge:dusts/sodium_silicate')
    .outputFluids(safeFluidOf('susy:wolframite_slurry', 1000))
    .outputFluids(safeFluidOf('susy:granite_tailing_slurry', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.clarifier('x3mvu6cjtqhflh') // remapped from original line 108
    .inputFluids(safeFluidOf('susy:wolframite_slurry', 1000))
    .itemOutputs('16x #forge:dusts/flotated_wolframite')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('zcbkhkbbkujmtk') // remapped from original line 116
    .itemInputs('1x #forge:dusts/flotated_wolframite')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .chancedOutput('5x #forge:dusts/manganese_ii_hydroxide', 5000, 0)
    .chancedOutput('5x #forge:dusts/iron_ii_hydroxide', 5000, 0)
    .outputFluids(safeFluidOf('susy:sodium_tungstate_solution', 1000)
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('atmh6s7cna9p57') // remapped from original line 129
    .itemInputs('17x #forge:dusts/aluminium_sulfate')
    .inputFluids(safeFluidOf('susy:sodium_tungstate_solution', 18000))
    .itemOutputs('8x #forge:dusts/aluminium_silicate')
    .outputFluids(safeFluidOf('susy:silicate_free_tungstate_solution', 18000)
    .EUt(voltAmps[3])
    .duration(90)

  event.recipes.gtceu.large_chemical_reactor('mow79ywahlkavi') // remapped from original line 143
    .itemInputs('6x #forge:dusts/sodium_sulfide')
    .inputFluids(safeFluidOf('susy:silicate_free_tungstate_solution', 9000))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .chancedOutput('4x #forge:dusts/molybdenum_trisulfide', 5000, 0)
    .outputFluids(safeFluidOf('susy:molybdenum_free_tungstate_solution', 11250)) 
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 500))
    .EUt(voltAmps[3])
    .duration(180)

  event.recipes.gtceu.mixer('beuxhedy0mnkiq') // remapped from original line 155
    .inputFluids(safeFluidOf('susy:kerosene', 325))
    .inputFluids(safeFluidOf('susy:trioctylamine', 625))
    .inputFluids(safeFluidOf('susy:isodecanol', 50))
    .outputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 1000))
    .EUt(voltAmps[4])
    .duration(200)

  event.recipes.gtceu.centrifuge('ybayo5pxgq0uzs') // remapped from original line 164
    .inputFluids(safeFluidOf('susy:ammonium_tungstate_solution', 4000))
    .inputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 8000)) 
    .outputFluids(safeFluidOf('susy:ammonia_solution', 4000))
    .outputFluids(safeFluidOf('susy:tungsten_extract', 8000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.gtceu.centrifuge('mrzjdyxzyqtfp4') // remapped from original line 173
    .inputFluids(safeFluidOf('susy:molybdenum_free_tungstate_solution', 11250)
    .inputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 8000)) 
    .outputFluids(safeFluidOf('susy:very_diluted_sodium_sulfate_solution', 11250))
    .outputFluids(safeFluidOf('susy:tungsten_extract', 8000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.gtceu.distillery('vxnezi4ca1lsgh') // remapped from original line 182
    .inputFluids(safeFluidOf('susy:very_diluted_sodium_sulfate_solution', 9000))
    .itemOutputs('7x #forge:dusts/sodium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 9000))
    .EUt(voltAmps[1])
    .duration(20)

  event.recipes.gtceu.centrifuge('q9tqogd0t31rvl') // remapped from original line 190
    .inputFluids(safeFluidOf('susy:tungsten_extract', 8000))
    .inputFluids(safeFluidOf('susy:demineralized_water', 2000)) 
    .outputFluids(safeFluidOf('susy:scrubbed_tungsten_extract', 8000))
    .outputFluids(safeFluidOf('susy:wastewater', 2000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.gtceu.centrifuge('fqwb0clzr5xpwy') // remapped from original line 199
    .inputFluids(safeFluidOf('susy:scrubbed_tungsten_extract', 8000)) 
    .inputFluids(safeFluidOf('susy:ammonia_solution', 5000)) 
    .outputFluids(safeFluidOf('susy:tungsten_extraction_mixture', 8000))
    .outputFluids(safeFluidOf('susy:ammonium_isopolytungstate_solution', 5000))
    .EUt(voltAmps[3])
    .duration(20)

  event.recipes.susy.crystallizer('eafnrmouc6cvtw') // remapped from original line 208
    .inputFluids(safeFluidOf('susy:ammonium_isopolytungstate_solution', 5000))
    .chancedOutput('5000x #forge:dusts/ammonium_paratungstate', 5000, 0)
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .EUt(voltAmps[3])
    .duration(600)

  event.recipes.susy.roaster('babd72bburxqri') // remapped from original line 216
    .itemInputs('1x #forge:dusts/ammonium_paratungstate')
    .inputFluids(safeFluidOf('gtceu:air', 1000))
    .itemOutputs('48x #forge:dusts/tungsten_trioxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 10000))
    .outputFluids(safeFluidOf('gtceu:ammonia', 10000))
    .EUt(voltAmps[3])
    .duration(1200)

  event.recipes.susy.reaction_furnace('97mxf5cwv0iyvn') // remapped from original line 228
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