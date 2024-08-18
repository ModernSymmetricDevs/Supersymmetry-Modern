ServerEvents.recipes(event => {

  event.recipes.susy.fluidized_bed_reactor('ugf3rt66ophwcj') // remapped from original line 22
    .inputFluids(safeFluidOf('susy:ortho_xylene', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 6000))
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .itemOutputs('13x #forge:dusts/phthalic_anhydride')
    .duration(300)
    .EUt(240)

  event.recipes.susy.batch_reactor('fjdg2ho3nmgaaj') // remapped from original line 32
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('15x #forge:dusts/phthalic_anhydride')
    .itemOutputs('18x #forge:dusts/phthalic_acid')
    .duration(200)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('oieotwpudchmww') // remapped from original line 40
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .inputFluids(safeFluidOf('gtceu:naphthalene', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 9000))
    .itemOutputs('18x #forge:dusts/phthalic_acid')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('jjivwbrmcz88ee') // remapped from original line 53
    .inputFluids(safeFluidOf('gtceu:methane', 1000))
    .inputFluids(safeFluidOf('gtceu:bromine', 8000))
    .itemOutputs('5x #forge:dusts/carbon_tetrabromide')
    .outputFluids(safeFluidOf('susy:hydrogen_bromide', 4000))
    .EUt(120)
    .duration(3)

  event.recipes.gtceu.mixer('z6todkgzlexuow') // remapped from original line 62
    .itemInputs('1x #forge:dusts/cobalt')
    .itemInputs('1x #forge:dusts/manganese')
    .itemInputs('5x #forge:dusts/carbon_tetrabromide')
    .itemOutputs('2x #forge:dusts/amoco_process_catalyst')
    .EUt(120)
    .duration(120)

  event.recipes.gtceu.large_chemical_reactor('uyvrjgmukkyt2d') // remapped from original line 71
    .inputFluids(safeFluidOf('susy:para_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_air', 8000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:terephthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('0yx7sxb5oukzwx') // remapped from original line 81
    .inputFluids(safeFluidOf('susy:para_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 2000))
    .notConsumable(safeFluidOf('gtceu:carbon_dioxide', 6000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:terephthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('vlyseqksvls5e0') // remapped from original line 92
    .inputFluids(safeFluidOf('susy:meta_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_air', 8000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:isophthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('h3cnarakjkftkh') // remapped from original line 102
    .inputFluids(safeFluidOf('susy:meta_xylene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_oxygen', 2000))
    .notConsumable(safeFluidOf('gtceu:carbon_dioxide', 6000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:isophthalic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.sifter('ykqu6xmckhcoxo') // remapped from original line 113
    .notConsumable(safeItemId('1x susy:item_filter'))
    .inputFluids(safeFluidOf('susy:isophthalic_acid_slurry', 2000))
    .itemOutputs('18x #forge:dusts/amoco_isophthalic_acid')
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.sifter('ectp2plpnzkhsm') // remapped from original line 122
    .notConsumable(safeItemId('1x susy:item_filter'))
    .inputFluids(safeFluidOf('susy:terephthalic_acid_slurry', 2000))
    .itemOutputs('18x #forge:dusts/amoco_terephthalic_acid')
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.distillation_tower('zadtnirqqiavhn') // remapped from original line 131
    .inputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(120)
    .duration(100)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('5x0viaemz9ss4u') // remapped from original line 141
    //.itemInputs('18x #forge:dusts/amoco_terephthalic_acid')
    //.inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    //.outputFluids(safeFluidOf('susy:crude_terephthalic_acid_slurry', 1000))
    //.EUt(30)
    //.duration(100)

  // Contains GTFO resources
  //event.recipes.gtceu.mixer('ukvwic3z4mldxo') // remapped from original line 149
    //.itemInputs('18x #forge:dusts/amoco_isophthalic_acid')
    //.inputFluids(safeFluidOf('susy:gtfo_heated_water', 1000))
    //.outputFluids(safeFluidOf('susy:crude_isophthalic_acid_slurry', 1000))
    //.EUt(30)
    //.duration(100)

  event.recipes.susy.trickle_bed_reactor('eaedjorowvy5v7') // remapped from original line 157
    .notConsumable('1x #forge:dusts/palladium_on_carbon')
    .inputFluids(safeFluidOf('susy:crude_terephthalic_acid_slurry', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 15))
    .outputFluids(safeFluidOf('susy:hydrogenated_terephthalic_acid_slurry', 1005))
    .EUt(120)
    .duration(100)

  event.recipes.susy.trickle_bed_reactor('jtoflejykxt6ho') // remapped from original line 166
    .notConsumable('1x #forge:dusts/palladium_on_carbon')
    .inputFluids(safeFluidOf('susy:crude_isophthalic_acid_slurry', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 15))
    .outputFluids(safeFluidOf('susy:hydrogenated_isophthalic_acid_slurry', 1005))
    .EUt(120)
    .duration(100)

  event.recipes.susy.crystallizer('bv6metab5gmixc') // remapped from original line 175
    .inputFluids(safeFluidOf('susy:hydrogenated_terephthalic_acid_slurry', 1005))
    .itemOutputs('18x #forge:dusts/wet_terephthalic_acid')
    .outputFluids(safeFluidOf('susy:amoco_purification_mother_liquor', 505))
    .EUt(120)
    .duration(100)

  event.recipes.susy.crystallizer('prx6gwlkzvyfxm') // remapped from original line 183
    .inputFluids(safeFluidOf('susy:hydrogenated_isophthalic_acid_slurry', 1005))
    .itemOutputs('18x #forge:dusts/wet_isophthalic_acid')
    .outputFluids(safeFluidOf('susy:amoco_purification_mother_liquor', 505))
    .EUt(120)
    .duration(100)

  event.recipes.susy.dryer('xwc1a2bu8gfedv') // remapped from original line 191
    .itemInputs('18x #forge:dusts/wet_terephthalic_acid')
    .itemOutputs('18x #forge:dusts/terephthalic_acid')
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .duration(200)
    .EUt(30)

  event.recipes.susy.dryer('ydw25di1bgfzip') // remapped from original line 199
    .itemInputs('18x #forge:dusts/wet_isophthalic_acid')
    .itemOutputs('18x #forge:dusts/isophthalic_acid')
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillery('2cilv2crwrpq5x') // remapped from original line 207
    .inputFluids(safeFluidOf('susy:amoco_purification_mother_liquor', 505))
    .chancedOutput('1x #forge:dusts/para_toluic_acid', 50, 0)
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .EUt(30)
    .duration(100)

  event.recipes.gtceu.extractor('n57ejpomcjck3b') // remapped from original line 215
    .itemInputs('1x #forge:dusts/para_toluic_acid')
    .outputFluids(safeFluidOf('susy:para_toluic_acid', 1000))
    .EUt(30)
    .duration(100)

  event.recipes.susy.fixed_bed_reactor('j1g8gusmjdwcao') // remapped from original line 224
    .circuit(1)
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .inputFluids(safeFluidOf('susy:para_xylene', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 150))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .outputFluids(safeFluidOf('susy:para_toluic_acid', 50))
    .EUt(120)
    .duration(20)

  event.recipes.susy.reaction_furnace('tcj2mi5mtdkuw2') // remapped from original line 235
    .inputFluids(safeFluidOf('susy:para_toluic_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:methyl_para_toluate', 1000))
    .EUt(120)
    .duration(400)

  event.recipes.susy.fixed_bed_reactor('achlptxb2zb8nw') // remapped from original line 245
    .circuit(2)
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .inputFluids(safeFluidOf('susy:para_xylene', 50))
    .inputFluids(safeFluidOf('susy:methyl_para_toluate', 50))
    .inputFluids(safeFluidOf('gtceu:oxygen', 300))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:para_toluate_mixture', 100))
    .EUt(120)
    .duration(20)

  event.recipes.susy.reaction_furnace('qaopqdeifmoqxr') // remapped from original line 257
    .inputFluids(safeFluidOf('susy:para_toluate_mixture', 2000))
    .inputFluids(safeFluidOf('gtceu:methanol', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('susy:methyl_para_toluate_mixture', 2000))
    .EUt(120)
    .duration(400)

  event.recipes.susy.vacuum_distillation('9vlmlkrl1hexwe') // remapped from original line 266
    .inputFluids(safeFluidOf('susy:methyl_para_toluate_mixture', 2000))
    .itemOutputs('24x #forge:dusts/crude_dimethyl_terephthalate')
    .outputFluids(safeFluidOf('susy:methyl_para_toluate', 1000))
    .EUt(120)
    .duration(400)

  event.recipes.gtceu.mixer('9mtt1unpj4vmse') // remapped from original line 276
    .itemInputs('24x #forge:dusts/crude_dimethyl_terephthalate')
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .outputFluids(safeFluidOf('susy:crude_dimethyl_terephthalate_solution', 1000))
    .EUt(120)
    .duration(20)

  event.recipes.susy.crystallizer('2uhmxcefw3gejj') // remapped from original line 284
    .inputFluids(safeFluidOf('susy:crude_dimethyl_terephthalate_solution', 1000))
    .itemOutputs('12x #forge:dusts/dimethyl_terephthalate')
    .outputFluids(safeFluidOf('susy:terephthalate_mother_liquor', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.mixer('07vq73i9iwzlu4') // remapped from original line 293
    .itemInputs('12x #forge:dusts/crude_dimethyl_terephthalate')
    .inputFluids(safeFluidOf('susy:terephthalate_mother_liquor', 1000))
    .outputFluids(safeFluidOf('susy:crude_dimethyl_terephthalate_solution', 1000))
    .EUt(120)
    .duration(20)

  event.recipes.susy.batch_reactor('jjvruybv31qsvm') // remapped from original line 303
    .inputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .itemInputs('18x #forge:dusts/isophthalic_acid')
    .outputFluids(safeFluidOf('susy:dichloroethane_isophthalic_acid_solution', 1000))
    .duration(120)
    .EUt(30)

  event.recipes.susy.batch_reactor('l4luw5oqrosyqy') // remapped from original line 311
    .inputFluids(safeFluidOf('susy:dichloroethane_isophthalic_acid_solution', 1000))
    .inputFluids(safeFluidOf('susy:phosgene', 2000))
    .outputFluids(safeFluidOf('susy:isophthaloyl_chloride_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.distillery('wii24mwgv5rzgz') // remapped from original line 321
    .inputFluids(safeFluidOf('susy:isophthaloyl_chloride_solution', 1000))
    .itemOutputs('16x #forge:dusts/isophthaloyl_chloride')
    .outputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .duration(40)
    .EUt(30)

  event.recipes.susy.batch_reactor('cvfvpmla6q2ibc') // remapped from original line 331
    .itemInputs('3x #forge:dusts/terephthalic_acid')
    .inputFluids(safeFluidOf('susy:bistrichloromethylbenzene', 1000))
    .itemOutputs('32x #forge:dusts/terephthaloyl_chloride')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(300)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // SIFTER = recipemap('sifter')
  // LCR = recipemap('large_chemical_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // MIXER = recipemap('mixer')
  // CRYSTALLIZER = recipemap('crystallizer')
  // FBR = recipemap('fixed_bed_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // DISTILLERY = recipemap('distillery')
  // FLUID_EXTRACTOR = recipemap('extractor')
  // DRYER = recipemap('dryer')
  //         
  //     
});