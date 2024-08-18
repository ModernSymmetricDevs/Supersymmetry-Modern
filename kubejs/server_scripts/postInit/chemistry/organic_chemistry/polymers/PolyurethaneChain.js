ServerEvents.recipes(event => {

  // Contains GTFO resources
  //event.recipes.gtceu.large_chemical_reactor('1f3w0lwuzhrvt0') // remapped from original line 17
    //.inputFluids(safeFluidOf('susy:formaldehyde', 2000))
    //.inputFluids(safeFluidOf('susy:gtfo_aniline', 1000))
    //.inputFluids(safeFluidOf('gtceu:hydrochloric_acid', 1000))
    //.itemOutputs('8x #forge:dusts/methylenedianiline')
    //.outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 2000))
    //.duration(200)
    //.EUt(240)

  event.recipes.gtceu.distillation_tower('lpmvbb08akmrln') // remapped from original line 27
    .inputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 500))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 250))
    .outputFluids(safeFluidOf('minecraft:water', 250))
    .duration(50)
    .EUt(30)

  event.recipes.susy.fluidized_bed_reactor('p5j31mq9jq5efu') // remapped from original line 35
    .itemInputs('8x #forge:dusts/methylenedianiline')
    .inputFluids(safeFluidOf('susy:phosgene', 2000))
    .itemOutputs('10x #forge:dusts/methylene_diphenyl_diisocyanate')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 4000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.continuous_stirred_tank_reactor('3fzk2pgd5g8qbl') // remapped from original line 44
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 150))
    .inputFluids(safeFluidOf('gtceu:ammonia', 300))
    .outputFluids(safeFluidOf('susy:ethanolamine_mix', 150))
    .duration(1)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('vtvrm6antqly0z') // remapped from original line 52
    .inputFluids(safeFluidOf('susy:ethanolamine_mix', 3000))
    .outputFluids(safeFluidOf('susy:triethanolamine', 1000))
    .outputFluids(safeFluidOf('susy:diethanolamine', 1000))
    .outputFluids(safeFluidOf('susy:ethanolamine', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fluidized_bed_reactor('cxcnsrmnrmwdhx') // remapped from original line 61
    .notConsumable('1x #forge:dusts/molecular_sieve')
    .inputFluids(safeFluidOf('susy:ethanolamine', 3000))
    .itemOutputs('8x #forge:dusts/triethylenediamine')
    .outputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.polymerization_tank('i7m5bd5yluhqmz') // remapped from original line 71
    .itemInputs('10x #forge:dusts/methylene_diphenyl_diisocyanate')
    .itemInputs('1x #forge:dusts/tiny_triethylenediamine')
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 750))
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 250))
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 18))
    .outputFluids(safeFluidOf('susy:polyurethane_polymerization_mix', 1000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.fluid_compressor('jn8wcurcbu4qdo') // remapped from original line 82
    .inputFluids(safeFluidOf('susy:hot_compressed_carbon_dioxide', 1280))
    .outputFluids(safeFluidOf('susy:supercritical_carbon_dioxide', 20))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.mixer('sdcek5gzurcw8b') // remapped from original line 89
    .notConsumable(safeItemId('1x susy:shape.mold.block'))
    .inputFluids(safeFluidOf('susy:polyurethane_polymerization_mix', 9000))
    .inputFluids(safeFluidOf('minecraft:water', 180))
    .inputFluids(safeFluidOf('susy:supercritical_carbon_dioxide', 180))
    .itemOutputs('1x #forge:blocks/polyurethane'.first())
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.mixer('m8fvczgufbnves') // remapped from original line 99
    .notConsumable(safeItemId('1x susy:shape.mold.plate'))
    .inputFluids(safeFluidOf('susy:polyurethane_polymerization_mix', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 20))
    .inputFluids(safeFluidOf('susy:supercritical_carbon_dioxide', 20))
    .itemOutputs('1x #forge:plates/polyurethane')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('kdmx0mfpyoc2ta') // remapped from original line 109
    .itemInputs('1x #forge:blocks/polyurethane')
    .inputFluids(safeFluidOf('susy:dye_yellow', 288))
    .itemOutputs(safeItemId('1x minecraft:sponge'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('x2ap2kraass7tg') // remapped from original line 119
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .notConsumable(safeFluidOf('susy:hydrogen_iodide', 1000))
    .inputFluids(safeFluidOf('gtceu:butadiene', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 2000))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('20x #forge:dusts/adipic_acid')
    .duration(100)
    .EUt(240)

  event.recipes.susy.polymerization_tank('knnytgwicebned') // remapped from original line 130
    .itemInputs('10x #forge:dusts/methylene_diphenyl_diisocyanate')
    .itemInputs('15x #forge:dusts/adipic_acid')
    .itemInputs('1x #forge:dusts/tiny_triethylenediamine')
    .inputFluids(safeFluidOf('susy:dimethylacetamide', 4000))
    .outputFluids(safeFluidOf('susy:spandex_prepolymer', 4000))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.mixer('wvc33qhycevf9p') // remapped from original line 140
    .inputFluids(safeFluidOf('susy:spandex_prepolymer', 4000))
    .inputFluids(safeFluidOf('susy:ethylenediamine', 250))
    .inputFluids(safeFluidOf('susy:diethylamine', 10))
    .outputFluids(safeFluidOf('susy:spandex_polymerization_mix', 4000))
    .duration(200)
    .EUt(240)

  event.recipes.susy.DRYER('pgwiwpshda7ao2') // remapped from original line 149
    .inputFluids(safeFluidOf('susy:spandex_polymerization_mix', 4000))
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .notConsumable(safeItemId('1x susy:spinneret'))
    .itemOutputs('8x #forge:fibers/spandex')
    .outputFluids(safeFluidOf('gtceu:air', 1000))
    .outputFluids(safeFluidOf('susy:dimethylacetamide', 3500))
    .EUt(480)
    .duration(100)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def LCR = recipemap('large_chemical_reactor');
  // def FBR = recipemap('fluidized_bed_reactor');
  // def CSTR = recipemap('continuous_stirred_tank_reactor');
  // def POLYMERIZATION = recipemap('polymerization_tank');
  // def DISTILLATION_TOWER = recipemap('distillation_tower');
  // def MIXER = recipemap('mixer');
  // def CHEMICAL_BATH = recipemap('chemical_bath');
  // def FLUID_COMPRESSOR = recipemap('fluid_compressor');
});