ServerEvents.recipes(event => {

  event.recipes.gtceu.pyrolyse_oven('h8kjahljupjsph') // remapped from original line 17
    .itemInputs(safeItemId('16x susy:bio_chaff'))
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:biomass', 4000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.mixer('lickknhnkfkh6j') // remapped from original line 25
    .itemInputs(safeItemId('2x susy:bio_chaff'))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:biomass', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.susy.vat_fermentation('pwx1jit3xkrgjr') // remapped from original line 33
    .inputFluids(safeFluidOf('gtceu:biomass', 16000))
    .outputFluids(safeFluidOf('gtceu:fermented_biomass', 16000))
    .outputFluids(safeFluidOf('gtceu:methane', 10000))
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.autoclave('cp7aaqbxuxcwjj') // remapped from original line 41
    .itemInputs(safeItemId('4x minecraft:wheat_seeds'))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs(safeItemId('4x susy:malted_grain'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('zckfqhozbzo4hp') // remapped from original line 49
    .itemInputs(safeItemId('2x susy:malted_grain'))
    .itemInputs('2x #forge:dusts/wheat')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:mash', 2000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.autoclave('onxd0uan3vvtqc') // remapped from original line 58
    .itemInputs(safeItemId('2x susy:malted_grain'))
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:mash', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.mixer('3iestfx8ck9adz') // remapped from original line 67
    .itemInputs('2x #forge:dusts/wheat')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:grain_solution', 1000))
    .circuit(4)
    .duration(100)
    .EUt(30)

  event.recipes.susy.vat_fermentation('huoxi4iajccljt') // remapped from original line 76
    .inputFluids(safeFluidOf('susy:grain_solution', 16000))
    .outputFluids(safeFluidOf('susy:yeast_solution', 16000))
    .circuit(1)
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('xps8iazczuynct') // remapped from original line 84
    .inputFluids(safeFluidOf('susy:mash', 16000))
    .inputFluids(safeFluidOf('susy:grain_solution', 1000))
    .outputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .circuit(2)
    .duration(2400)
    .EUt(16)

  event.recipes.susy.vat_fermentation('y7cg2wvzys4p5j') // remapped from original line 93
    .itemInputs(safeItemId('24x minecraft:sugar'))
    .inputFluids(safeFluidOf('minecraft:water', 16000))
    .inputFluids(safeFluidOf('susy:grain_solution', 1000))
    .outputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .circuit(3)
    .duration(2400)
    .EUt(16)
});