ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:mixer', input: safeItemId('minecraft:clay_ball') && '#forge:dusts/stone' && '#forge:dusts/apatite'})
  event.remove({ type: 'susy:blender', input: safeItemId('minecraft:clay_ball') && '#forge:dusts/stone' && '#forge:dusts/apatite'})

  // Contains GTFO resources
  //event.recipes.gtceu.autoclave('1nysniljqtggdj') // remapped from original line 20
    //.itemInputs('1x #forge:dusts/bone')
    //.inputFluids(safeFluidOf('minecraft:water', 250))
    //.itemOutputs('13x #forge:dusts/tricalcium_phosphate')
    //.itemOutputs(safeItemId('1x gregtechfoodoption:fat_ingot'))
    //.duration(120)
    //.EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('mjb6esnrptdw47') // remapped from original line 29
    .itemInputs('13x #forge:dusts/tricalcium_phosphate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    .itemOutputs('15x #forge:dusts/monocalcium_phosphate')
    .itemOutputs('12x #forge:dusts/calcium_sulfate')
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('dnjbmfta7gzeaf') // remapped from original line 38
    .itemInputs('15x #forge:dusts/monocalcium_phosphate')
    .itemOutputs('11x #forge:dusts/calcium_phosphite')
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('qrlpwloklfl36b') // remapped from original line 46
    .itemInputs('33x #forge:dusts/calcium_phosphite')
    .itemInputs('10x #forge:dusts/any_purity_carbon')
    .itemOutputs('13x #forge:dusts/tricalcium_phosphate')
    .itemOutputs('4x #forge:dusts/phosphorus')
    .duration(360)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('r8xcez5uedna5u') // remapped from original line 81
    .itemInputs('1x #forge:dusts/hydroxyapatite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 5000))
    .itemOutputs('30x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('susy:diluted_phosphoric_acid', 4000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('f6fcozd9afx0kq') // remapped from original line 90
    .itemInputs('1x #forge:dusts/fluorapatite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 5000))
    .itemOutputs('30x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 3000))
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 1000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('fqvhdrzdqt7fzu') // remapped from original line 100
    .itemInputs('1x #forge:dusts/chlorapatite')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 5000))
    .itemOutputs('30x #forge:dusts/calcium_sulfate')
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 3000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('0qd1bpv2irmpsl') // remapped from original line 110
    .inputFluids(safeFluidOf('susy:diluted_phosphoric_acid', 4000))
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 3000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('y6gx1hndhjgiqn') // remapped from original line 119
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 2000))
    .itemOutputs('15x #forge:dusts/monocalcium_phosphate')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('2qgrz4aolx8bbv') // remapped from original line 129
    .itemInputs('6x #forge:dusts/calcium_sulfate')
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .itemOutputs('5x #forge:dusts/calcium_metasilicate')
    .outputFluids(safeFluidOf('susy:sulfur_trioxide_reaction_mixture', 2000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('nq5ahbfwsepee3') // remapped from original line 138
    .inputFluids(safeFluidOf('susy:sulfur_trioxide_reaction_mixture', 1000))
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .duration(200)
    .EUt(7)

  event.recipes.gtceu.electric_blast_furnace('xm9loelvbuorku') // remapped from original line 147
    .itemInputs('2x #forge:dusts/fluorapatite')
    .itemInputs('27x #forge:dusts/silicon_dioxide')
    .itemInputs('15x #forge:dusts/any_purity_carbon')
    .itemOutputs('6x #forge:dusts/phosphorus')
    .itemOutputs('45x #forge:dusts/calcium_metasilicate')
    .itemOutputs('3x #forge:dusts/fluorite')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 15000))
    .blastFurnaceTemp(1200)
    .duration(720)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electric_blast_furnace('86or0ehqtlvxyc') // remapped from original line 160
    .itemInputs('2x #forge:dusts/chlorapatite')
    .itemInputs('27x #forge:dusts/silicon_dioxide')
    .itemInputs('15x #forge:dusts/any_purity_carbon')
    .itemOutputs('6x #forge:dusts/phosphorus')
    .itemOutputs('45x #forge:dusts/calcium_metasilicate')
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 15000))
    .blastFurnaceTemp(1200)
    .duration(720)
    .EUt(voltAmps[2])

  event.recipes.gtceu.electric_blast_furnace('dpcxlvocq3g4pb') // remapped from original line 173
    .itemInputs('2x #forge:dusts/hydroxyapatite')
    .itemInputs('27x #forge:dusts/silicon_dioxide')
    .itemInputs('15x #forge:dusts/any_purity_carbon')
    .itemOutputs('6x #forge:dusts/phosphorus')
    .itemOutputs('45x #forge:dusts/calcium_metasilicate')
    .itemOutputs('5x #forge:dusts/calcium_hydroxide')
    .blastFurnaceTemp(1200)
    .duration(720)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('z4wtf6rqrhdjkd') // remapped from original line 186
    .itemInputs('2x #forge:dusts/phosphorite')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .outputFluids(safeFluidOf('susy:phosphorite_slurry', 1000))
    .duration(40)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('awwapcieiyfdpt') // remapped from original line 194
    .inputFluids(safeFluidOf('susy:phosphorite_slurry', 1000))
    .itemOutputs('2x #forge:dusts/phosphate_pulp')
    .chancedOutput('1x #forge:dusts/clay', 5000, 0)
    .chancedOutput('3x #forge:dusts/silicon_dioxide', 5000, 0)
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(40)
    .EUt(voltAmps[3])

  event.recipes.gtceu.sifter('rjrp3yhabyuund') // remapped from original line 204
    .itemInputs('1x #forge:dusts/phosphate_pulp')
    .itemOutputs('1x #forge:dusts/filtered_phosphate_pulp')
    .chancedOutput('1x #forge:dusts/silicon_dioxide', 2500, 0)
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.gtceu.mixer('2ztlstppat9nnu') // remapped from original line 212
    .itemInputs('8x #forge:dusts/filtered_phosphate_pulp')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 2000))
    .outputFluids(safeFluidOf('susy:filtered_phosphate_slurry', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.froth_flotation('uhace4ckllglb1') // remapped from original line 220
    .inputFluids(safeFluidOf('susy:filtered_phosphate_slurry', 2000))
    .notConsumable(safeFluidOf('susy:alkaline_sodium_oleate_solution', 1000))
    .notConsumable(safeFluidOf('susy:fuel_oil', 100))
    .outputFluids(safeFluidOf('susy:phosphate_concentrate_slurry', 1000))
    .outputFluids(safeFluidOf('susy:limestone_tailing_slurry', 1000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.clarifier('ngkdd5gtgkwaqb') // remapped from original line 230
    .inputFluids(safeFluidOf('susy:phosphate_concentrate_slurry', 1000))
    .itemOutputs('16x #forge:dusts/phosphate_concentrate')
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('5vev8dcus2comu') // remapped from original line 238
    .itemInputs('1x #forge:dusts/phosphate_concentrate')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('4x #forge:dusts/gypsum')
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.gtceu.compressor('iefptat9qhgz7x') // remapped from original line 248
    .itemInputs('1x #forge:dusts/phosphorus')
    .itemOutputs('1x #forge:ingots/phosphorus')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.zone_refiner('rmzsvrdsy2mfi2') // remapped from original line 255
    .itemInputs('1x #forge:ingots/phosphorus')
    .itemOutputs('1x #forge:ingots/high_purity_phosphorus')
    .duration(400)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('zfhwj2fycj5zsc') // remapped from original line 262
    .itemInputs('1x #forge:dusts/phosphorus')
    .inputFluids(safeFluidOf('minecraft:water', 250))
    .chancedOutput('1x #forge:dusts/arsenic', 500, 50)
    .outputFluids(safeFluidOf('susy:high_purity_phosphorus_vapor_mixture', 250))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('vbtekdyoufboww') // remapped from original line 271
    .inputFluids(safeFluidOf('susy:high_purity_phosphorus_vapor_mixture', 1000))
    .outputFluids(safeFluidOf('susy:high_purity_phosphorus', 576))
    .duration(240)
    .EUt(voltAmps[1])

  event.recipes.gtceu.fluid_solidifier('a1nupbuoym88bw') // remapped from original line 278
    .inputFluids(safeFluidOf('susy:high_purity_phosphorus', 144))
    .notConsumable(safeItemId('1x susy:shape.mold.ball'))
    .itemOutputs('1x #forge:dusts/high_purity_phosphorus')
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('1qztccqroihy4u') // remapped from original line 287
    .itemInputs('5x #forge:dusts/calcium_metasilicate')
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('5x #forge:dusts/calcite')
    .itemOutputs('3x #forge:dusts/silicon_dioxide')
    .duration(120)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (apatite in apatites) {
  //     MIXER.recipeBuilder()
  //         .inputs(apatite * 2)
  //         .inputs(item('minecraft:clay_ball'))
  //         .inputs(ore('dustStone'))
  //         .outputs(metaitem('gregtechfoodoption:bone_china_clay_dust') * 4)
  //         .duration(40)
  //         .EUt(7)
  //         .buildAndRegister()
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // BATCH_REACTOR = recipemap('batch_reactor')
  // DISTILLERY = recipemap('distillery')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // AUTOCLAVE = recipemap('autoclave')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // EBF = recipemap('electric_blast_furnace')
  // FLUID_SOLIDIFIER = recipemap('fluid_solidifier')
  // CONDENSER = recipemap('condenser')
  // ZONE_REFINER = recipemap('zone_refiner')
  // COMPRESSOR = recipemap('compressor')
  // CENTRIFUGE = recipemap('centrifuge')
  // SIFTER = recipemap('sifter')
  // FLOTATION = recipemap('froth_flotation')
  // CLARIFIER = recipemap('clarifier')
  // def apatites = [
  //         metaitem('dustChlorapatite'),
  //         metaitem('dustHydroxyapatite'),
  //         metaitem('dustFluorapatite'),
  // ];
});