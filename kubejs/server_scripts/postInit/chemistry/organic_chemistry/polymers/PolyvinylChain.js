ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('eyofsdfle4gid5') // remapped from original line 12
    .inputFluids(safeFluidOf('gtceu:mercury', 1000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('3x #forge:dusts/mercury_ii_chloride')
    .duration(200)
    .EUt(30)

  event.recipes.susy.trickle_bed_reactor('gp0xvszaygssoy') // remapped from original line 20
    .notConsumable('1x #forge:dusts/mercury_ii_chloride')
    .inputFluids(safeFluidOf('susy:acetylene', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:vinyl_chloride', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('ajm1dtb194cau7') // remapped from original line 29
    .inputFluids(safeFluidOf('gtceu:chlorine', 100))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .outputFluids(safeFluidOf('gtceu:vinyl_chloride', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(5)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('bgbpi5zh3pwpmu') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 50))
    .outputFluids(safeFluidOf('gtceu:vinyl_chloride', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(10)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('hqzab8ikzf9fle') // remapped from original line 48
    .inputFluids(safeFluidOf('gtceu:ethane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 200))
    .outputFluids(safeFluidOf('gtceu:vinyl_chloride', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 150))
    .duration(10)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('ht4sxzournvqjf') // remapped from original line 57
    .inputFluids(safeFluidOf('gtceu:ethane', 50))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 100))
    .outputFluids(safeFluidOf('gtceu:vinyl_chloride', 50))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.autoclave('ef7lunoorvml5i') // remapped from original line 69
    .inputFluids(safeFluidOf('gtceu:vinyl_chloride', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:vinyl_chloride_suspension', 2000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.polymerization_tank('kzycrhtbhfzpuq') // remapped from original line 77
    .inputFluids(safeFluidOf('susy:vinyl_chloride_suspension', 2000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polyvinyl_chloride_suspension', 2000))
    .duration(300)
    .EUt(60)

  event.recipes.susy.dryer('ygp89rzapaomjj') // remapped from original line 85
    .inputFluids(safeFluidOf('susy:polyvinyl_chloride_suspension', 2000))
    .itemOutputs('1x #forge:dusts/polyvinyl_chloride')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(260)
    .EUt(30)

  event.recipes.gtceu.mixer('azrksqiyl1mmz3') // remapped from original line 95
    .inputFluids(safeFluidOf('gtceu:vinyl_acetate', 1000))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:vinyl_acetate_suspension', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.polymerization_tank('fh3z5tb5isxgjq') // remapped from original line 103
    .circuit(1)
    .inputFluids(safeFluidOf('susy:vinyl_acetate_suspension', 2000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polyvinyl_acetate_suspension', 2000))
    .duration(150)
    .EUt(60)

  event.recipes.susy.phase_separator('fmykkh72tdmarg') // remapped from original line 112
    .inputFluids(safeFluidOf('susy:polyvinyl_acetate_suspension', 2000))
    .itemOutputs('1x #forge:dusts/polyvinyl_acetate')
    .outputFluids(safeFluidOf('gtceu:methanol', 1000))
    .duration(50)

  event.recipes.susy.polymerization_tank('s8xosd2pkyr7lk') // remapped from original line 121
    .circuit(2)
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .inputFluids(safeFluidOf('susy:vinyl_acetate_suspension', 1000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:ethylene_vinyl_acetate_suspension', 2000))
    .duration(150)
    .EUt(60)

  event.recipes.susy.phase_separator('jkrysas6bnamus') // remapped from original line 131
    .inputFluids(safeFluidOf('susy:ethylene_vinyl_acetate_suspension', 2000))
    .itemOutputs('1x #forge:dusts/ethylene_vinyl_acetate')
    .outputFluids(safeFluidOf('gtceu:methanol', 1000))
    .duration(50)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // AUTOCLAVE = recipemap('autoclave')
  // PHASE_SEPARATOR = recipemap('phase_separator')
});