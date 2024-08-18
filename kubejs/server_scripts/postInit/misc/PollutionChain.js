ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('gbejch3ld2ylos') // remapped from original line 7
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .itemInputs('1x #forge:dusts/tiny_ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 100))
    .duration(5)
    .EUt(7)

  event.recipes.gtceu.mixer('opkeed8ckvv85m') // remapped from original line 15
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .itemInputs('1x #forge:dusts/tiny_dark_ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 100))
    .duration(5)
    .EUt(7)

  event.recipes.gtceu.mixer('9fkxyrlobw7y51') // remapped from original line 23
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('1x #forge:dusts/ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 1000))
    .duration(40)
    .EUt(7)

  event.recipes.gtceu.mixer('owcftcebl6mscv') // remapped from original line 31
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('1x #forge:dusts/dark_ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 1000))
    .duration(40)
    .EUt(7)

  event.recipes.gtceu.sifter('z1kupclbcsnlgx') // remapped from original line 39
    .inputFluids(safeFluidOf('susy:flue_gas', 16000))
    .itemInputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:desulfurized_flue_gas', 16000))
    .itemOutputs('5x #forge:dusts/calcium_sulfite')
    .duration(160)
    .EUt(30)

  event.recipes.susy.roaster('mrlpvixpouuxef') // remapped from original line 48
    .itemInputs('5x #forge:dusts/calcium_sulfite')
    .circuit(1)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('m5jtbidjxwz2tt') // remapped from original line 57
    .inputFluids(safeFluidOf('gtceu:air', 1500))
    .itemInputs('5x #forge:dusts/calcium_sulfite')
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('ybietshiw6l0ec') // remapped from original line 65
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs('5x #forge:dusts/calcium_sulfite')
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .duration(80)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // MIXER = recipemap('mixer')
  // SIFTER = recipemap('sifter')
  // ROASTER = recipemap('roaster')
});