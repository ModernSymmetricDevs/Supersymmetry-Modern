ServerEvents.recipes(event => {

  event.recipes.susy.batch_reactor('p2xyzy06tn9f7w') // remapped from original line 5
    .itemInputs('2x #forge:dusts/lead_oxide')
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .itemOutputs('9x #forge:dusts/lead_nitrate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.mixer('leckwzcxkcikqg') // remapped from original line 14
    .itemInputs('1x #forge:dusts/manganese_ii_oxide')
    .itemInputs('1x #forge:dusts/iron_iii_oxide')
    .itemOutputs('2x #forge:dusts/sienna')
    .EUt(30)
    .duration(200)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('hfcwz6goqpr2ac') // remapped from original line 24
    //.itemInputs('5x #forge:dusts/arsenic_trioxide')
    //.inputFluids(safeFluidOf('susy:soda_ash_solution', 1000))
    //.outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    //.outputFluids(safeFluidOf('susy:gtfo_sodium_arsenite_solution', 1000))
    //.EUt(120)
    //.duration(200)

  // Contains GTFO resources
  //event.recipes.susy.batch_reactor('rs6zk9jj1na3hl') // remapped from original line 33
    //.itemInputs('2x #forge:dusts/copper')
    //.inputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    //.inputFluids(safeFluidOf('susy:gtfo_sodium_arsenite_solution', 1000))
    //.itemOutputs(safeItemId('12x gregtechfoodoption:cupric_hydrogen_arsenite_dust'))
    //.EUt(120)
    //.duration(200)

  event.recipes.gtceu.electric_blast_furnace('7t6yr9cdfvdqc6') // remapped from original line 42
    .itemInputs('5x #forge:dusts/alumina')
    .itemInputs('2x #forge:dusts/cobalt_oxide')
    .itemOutputs('7x #forge:dusts/cobalt_aluminate')
    .blastFurnaceTemp(1100)
    .EUt(120)
    .duration(200)

  event.recipes.susy.batch_reactor('lc0knljqmx5ijt') // remapped from original line 51
    .itemInputs('9x #forge:dusts/lead_nitrate')
    .inputFluids(safeFluidOf('susy:sodium_chromate_solution', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:sodium_nitrate_solution', 2000))
    .itemOutputs('6x #forge:dusts/lead_chromate')
    .EUt(120)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // EBF = recipemap('electric_blast_furnace')
  // furnace.add(metaitem('dustSienna'), metaitem('dustBurntSienna'))
});