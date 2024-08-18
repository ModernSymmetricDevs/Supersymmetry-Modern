ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:assembler', input: '#forge:rings/steel' && '#forge:wires/fine_copper' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rings/steel' && '#forge:wires/fine_annealed_copper' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rings/nickel_zinc_ferrite' && '#forge:wires/fine_cupronickel' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/carbon' && '#forge:wires/fine_electrum' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/silicone_rubber' && '#forge:foils/aluminium' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/polyvinyl_chloride' && '#forge:foils/aluminium' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/silicone_rubber' && '#forge:foils/tantalum' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/polyvinyl_chloride' && '#forge:foils/tantalum' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/gallium' && '#forge:wires/fine_annealed_copper' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/gallium' && '#forge:wires/fine_tantalum' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/carbon' && '#forge:wires/fine_tantalum' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:assembler', input: '#forge:dusts/gallium_arsenide' && '#forge:wires/fine_platinum' && safeFluidOf('gtceu:plastic')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/nickel' && '#forge:dusts/zinc' && '#forge:dusts/iron' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/ferrite_mixture' && safeFluidOf('gtceu:oxygen')})
  event.remove({ type: 'gtceu:fluid_solidifier', input: 'susy:shape.mold.plate' && safeFluidOf('susy:alumina')})
  event.remove({ type: 'gtceu:compressor', input: '#forge:dusts/alumina'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:foils/vanadium_gallium' && '#forge:wires/fine_hssg' && safeFluidOf('gtceu:polybenzimidazole')})

  event.recipes.susy.crystallizer('gdhfzlcsdmyblk') // remapped from original line 98
    .itemInputs(metaitem('seed_crystal.alumina'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:alumina', 4608))
    .itemOutputs(metaitem('boule.alumina'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.cutter('xsqbdepzz7bogr') // remapped from original line 107
    .itemInputs(metaitem('boule.alumina'))
    .itemOutputs(metaitem('seed_crystal.alumina'))
    .itemOutputs(metaitem('wafer.alumina') * 32)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('4uwm72hypvlcu7') // remapped from original line 189
    .itemInputs('5x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('gtceu:glue', 500))
    .outputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 1000))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('wyh3e1uuhjy4a5') // remapped from original line 197
    .itemInputs('2x #forge:dusts/rutile')
    .inputFluids(safeFluidOf('gtceu:glue', 500))
    .outputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 2000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.mixer('vhgnfbhgclqlvc') // remapped from original line 205
    .itemInputs('1x #forge:dusts/barium_titanate')
    .inputFluids(safeFluidOf('gtceu:glue', 500))
    .outputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 4000))
    .duration(20)
    .EUt(240)

  event.recipes.gtceu.compressor('chby9skcj8dh6e') // remapped from original line 213
    .notConsumable(metaitem('shape.extruder.foil'))
    .inputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 1000))
    .itemOutputs(metaitem('ferroelectric_ceramic_foil') * 5)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.forming_press('ae3nowiezzpw3n') // remapped from original line 221
    .itemInputs(metaitem('ferroelectric_ceramic_foil') * 2)
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(metaitem('stacked_ceramic_capacitor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.cutter('uttyxlnwpw38wy') // remapped from original line 229
    .itemInputs(metaitem('stacked_ceramic_capacitor'))
    .itemOutputs(metaitem('raw_ceramic_capacitor') * 16)
    .duration(200)
    .EUt(240)

  event.recipes.susy.roaster('pt6myfq9kuchb8') // remapped from original line 236
    .itemInputs('1x #forge:dusts/lead')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/lead_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('u5ihg6av6fg3ov') // remapped from original line 244
    .itemInputs('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/nickel_ii_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('yttpo3hg2e7fp8') // remapped from original line 252
    .itemInputs('1x #forge:dusts/cobalt')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/cobalt_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.reaction_furnace('z2lqhbsqvzov7u') // remapped from original line 260
    .itemInputs('1x #forge:dusts/tantalum')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .itemOutputs('2x #forge:dusts/tantalum_nitride')
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.mixer('xdaxb4swtdlzfb') // remapped from original line 268
    .itemInputs('2x #forge:dusts/lead_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 1000))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('isvif4pb9jhn0w') // remapped from original line 276
    .itemInputs('2x #forge:dusts/nichrome')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 2000))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.mixer('hv43fwxjzmg42v') // remapped from original line 284
    .itemInputs('2x #forge:dusts/tantalum_nitride')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 2000))
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.mixer('t2jl42lmnvwxkv') // remapped from original line 292
    .itemInputs('1x #forge:dusts/ruthenium_iv_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 3000))
    .duration(120)
    .EUt(240)

  event.recipes.gtceu.mixer('zawrhun3ciwv9l') // remapped from original line 300
    .itemInputs('1x #forge:dusts/bismuth_iridate')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 4000))
    .duration(20)
    .EUt(240)

  event.recipes.susy.batch_reactor('i6yxuef4ofso3y') // remapped from original line 308
    .itemInputs('5x #forge:dusts/bismuth_iii_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 6000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 4000))
    .itemOutputs('10x #forge:dusts/sodium_bismuthate')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 8000))
    .duration(100)
    .EUt(240)

  event.recipes.susy.roaster('y6kb5pnigluigm') // remapped from original line 318
    .itemInputs('1x #forge:dusts/iridium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemOutputs('4x #forge:dusts/iridium_chloride')
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.autoclave('scp8iiobazkhkc') // remapped from original line 326
    .itemInputs('10x #forge:dusts/sodium_bismuthate')
    .itemInputs('8x #forge:dusts/iridium_chloride')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemOutputs('11x #forge:dusts/bismuth_iridate')
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.forming_press('njoeuc67pmjmrl') // remapped from original line 336
    .itemInputs(metaitem('raw_ceramic_capacitor') * 4)
    .itemInputs('2x #forge:wires/fine_tin')
    .itemOutputs(metaitem('component.smd.capacitor') * 4)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.forming_press('v5ig2ooh9xr4ds') // remapped from original line 344
    .itemInputs(metaitem('raw_ceramic_capacitor') * 4)
    .itemInputs('2x #forge:wires/fine_zinc')
    .itemOutputs(metaitem('component.smd.capacitor') * 4)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.forming_press('xygalgaab1dsex') // remapped from original line 352
    .itemInputs(metaitem('raw_ceramic_capacitor') * 4)
    .itemInputs('1x #forge:wires/fine_aluminium')
    .itemOutputs(metaitem('component.smd.capacitor') * 4)
    .duration(20)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('amk9erbft6abay') // remapped from original line 360
    .inputFluids(safeFluidOf('gtceu:aluminium', 18))
    .itemInputs('1x #forge:foils/polypropylene')
    .itemOutputs(metaitem('metallized_plastic_film'))
    .duration(200)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('nschshtgvjrohq') // remapped from original line 368
    .inputFluids(safeFluidOf('gtceu:zinc', 36))
    .itemInputs('1x #forge:foils/polypropylene')
    .itemOutputs(metaitem('metallized_plastic_film'))
    .duration(400)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('3mnehmnr6f1szx') // remapped from original line 376
    .inputFluids(safeFluidOf('gtceu:aluminium', 18))
    .itemInputs('1x #forge:foils/mylar')
    .itemOutputs(metaitem('metallized_plastic_film') * 2)
    .duration(30)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('vnwelnb6emwfzc') // remapped from original line 384
    .inputFluids(safeFluidOf('gtceu:zinc', 36))
    .itemInputs('1x #forge:foils/mylar')
    .itemOutputs(metaitem('metallized_plastic_film') * 2)
    .duration(60)
    .EUt(240)

  event.recipes.gtceu.cutter('pdpcxouwf6tdho') // remapped from original line 392
    .itemInputs(metaitem('metallized_plastic_film'))
    .itemOutputs(metaitem('metallized_plastic_square') * 16)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('lrhdl2gl0bx2qm') // remapped from original line 399
    .itemInputs(metaitem('metallized_plastic_square') * 4)
    .inputFluids(safeFluidOf('gtceu:tin', 80))
    .itemOutputs(metaitem('raw_smd_capacitor') * 4)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('mtszw6lhnq3tdg') // remapped from original line 407
    .itemInputs(metaitem('metallized_plastic_square') * 4)
    .inputFluids(safeFluidOf('gtceu:zinc', 80))
    .itemOutputs(metaitem('raw_smd_capacitor') * 4)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('c2z3ajdclq2xa9') // remapped from original line 415
    .itemInputs(metaitem('metallized_plastic_square') * 4)
    .inputFluids(safeFluidOf('gtceu:aluminium', 40))
    .itemOutputs(metaitem('raw_smd_capacitor') * 4)
    .duration(20)
    .EUt(240)

  event.recipes.susy.batch_reactor('zfq9xir0pk4b28') // remapped from original line 423
    .itemInputs(metaitem('raw_smd_capacitor') * 16)
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 72))
    .itemOutputs(metaitem('component.smd.capacitor') * 16)
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.assembler('tmq25ywng1awfj') // remapped from original line 431
    .itemInputs(metaitem('wafer.alumina'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('eazobyvwzl0jqu') // remapped from original line 439
    .itemInputs(metaitem('wafer.alumina'))
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('koxm8u3dual3yb') // remapped from original line 447
    .itemInputs(metaitem('wafer.alumina'))
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 2)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.cutter('ipmmcidg6o6h7a') // remapped from original line 455
    .itemInputs('1x #forge:plates/alumina')
    .itemOutputs(metaitem('wafer.alumina'))
    .duration(30)
    .EUt(240)

  event.recipes.gtceu.fluid_solidifier('lajwgwkqtzcjc2') // remapped from original line 462
    .inputFluids(safeFluidOf('susy:beryllium_oxide', 36))
    .notConsumable(metaitem('shape.mold.ball'))
    .chancedOutput(metaitem('seed_crystal.beryllium_oxide'), 1000, 1000)
    .duration(200)
    .EUt(240)

  event.recipes.susy.crystallizer('mivajq02l5tmfk') // remapped from original line 470
    .itemInputs(metaitem('seed_crystal.beryllium_oxide'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:beryllium_oxide', 3168))
    .itemOutputs(metaitem('boule.beryllium_oxide'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.cutter('lfw0rwl1ebftpp') // remapped from original line 480
    .itemInputs(metaitem('boule.beryllium_oxide'))
    .itemOutputs(metaitem('seed_crystal.beryllium_oxide'))
    .itemOutputs(metaitem('wafer.beryllium_oxide') * 32)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.cutter('cmcghmzrib6jmd') // remapped from original line 488
    .itemInputs('1x #forge:plates/beryllium_oxide')
    .itemOutputs(metaitem('wafer.beryllium_oxide'))
    .duration(30)
    .EUt(240)

  event.recipes.gtceu.assembler('xvotknbmzi40og') // remapped from original line 495
    .itemInputs(metaitem('wafer.beryllium_oxide'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 4)
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('eblrhsv2a154e8') // remapped from original line 503
    .itemInputs(metaitem('wafer.beryllium_oxide'))
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 4)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('bksqfkyialex2p') // remapped from original line 511
    .itemInputs(metaitem('wafer.beryllium_oxide'))
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 8)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('jffhpogbky9kla') // remapped from original line 519
    .circuit(1)
    .itemInputs('1x #forge:plates/stainless_steel')
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 2)
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('c1alzacftfnrq8') // remapped from original line 528
    .circuit(1)
    .itemInputs('1x #forge:plates/stainless_steel')
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 2)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('rntej2ji2rdmuc') // remapped from original line 537
    .circuit(1)
    .itemInputs('1x #forge:plates/stainless_steel')
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 4)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('dtdydmdcrtvzps') // remapped from original line 546
    .itemInputs(metaitem('wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 2)
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('eev0733nmjb3ka') // remapped from original line 554
    .itemInputs(metaitem('wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 2)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('y6zm93ur5ciofr') // remapped from original line 562
    .itemInputs(metaitem('wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(metaitem('thick_film_substrate_wafer') * 4)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.cutter('w9oewej7lk60jx') // remapped from original line 570
    .itemInputs(metaitem('thick_film_substrate_wafer'))
    .itemOutputs(metaitem('patterned_thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.laser_engraver('s6awvnl7ppafxk') // remapped from original line 577
    .itemInputs(metaitem('thick_film_substrate_wafer'))
    .itemOutputs(metaitem('patterned_thick_film_substrate_wafer'))
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('wm7rylfxrfgn4j') // remapped from original line 584
    .itemInputs(metaitem('patterned_thick_film_substrate_wafer'))
    .inputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 1000))
    .itemOutputs(metaitem('thick_film_resistor_wafer'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.cutter('qyqecktsfficc1') // remapped from original line 592
    .itemInputs(metaitem('thick_film_resistor_wafer'))
    .itemOutputs(metaitem('component.smd.resistor') * 16)
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('2r0cihfy0rxah3') // remapped from original line 599
    .itemInputs('2x #forge:foils/aluminium')
    .itemInputs(safeItemId('1x minecraft:paper'))
    .itemOutputs(metaitem('raw_capacitor_roll') * 8)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.canner('4ipag4mwkg8cbz') // remapped from original line 607
    .itemInputs(metaitem('raw_capacitor_roll') * 8)
    .itemInputs('1x #forge:dusts/manganese_dioxide')
    .itemOutputs(metaitem('aluminium_electrolytic_capacitor') * 8)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('611q31i6iuvsuc') // remapped from original line 615
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .itemInputs('3x #forge:dusts/boric_acid')
    .outputFluids(safeFluidOf('susy:borax_electrolyte', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('bongsc56g60lri') // remapped from original line 623
    .itemInputs(metaitem('raw_capacitor_roll') * 16)
    .inputFluids(safeFluidOf('susy:borax_electrolyte', 100))
    .itemOutputs(metaitem('aluminium_electrolytic_capacitor') * 16)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('g1xorrua1emxkv') // remapped from original line 631
    .itemInputs(metaitem('aluminium_electrolytic_capacitor') * 16)
    .itemInputs('4x #forge:rings/rubber')
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(metaitem('component.smd.capacitor') * 16)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('wsbie8chywahtq') // remapped from original line 640
    .itemInputs(metaitem('aluminium_electrolytic_capacitor') * 16)
    .itemInputs('2x #forge:rings/silicone_rubber')
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(metaitem('component.smd.capacitor') * 16)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('4hqiuob6jcx5gx') // remapped from original line 649
    .itemInputs(metaitem('aluminium_electrolytic_capacitor') * 16)
    .itemInputs('1x #forge:rings/styrene_butadiene_rubber')
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(metaitem('component.smd.capacitor') * 16)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.electrolyzer('jon4jgt4felutv') // remapped from original line 658
    .itemInputs(metaitem('tantalum_chip') * 8)
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs(metaitem('anodized_tantalum_chip') * 8)
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.pyrolyse_oven('x5asdg2ohukyae') // remapped from original line 666
    .itemInputs(metaitem('anodized_tantalum_chip') * 8)
    .itemInputs('1x #forge:dusts/manganese_ii_nitrate')
    .itemOutputs(metaitem('manganized_tantalum_chip') * 8)
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('weqghpt4de7jjg') // remapped from original line 674
    .itemInputs(metaitem('manganized_tantalum_chip') * 8)
    .inputFluids(safeFluidOf('gtceu:silver', 36))
    .itemOutputs(metaitem('component.smd.capacitor') * 8)
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.electric_blast_furnace('twfaxgxevql4hw') // remapped from original line 682
    .itemInputs('10x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('2x #forge:dusts/zinc_oxide')
    .itemInputs('2x #forge:dusts/nickel_ii_oxide')
    .itemOutputs('14x #forge:ingots/nickel_zinc_ferrite')
    .blastFurnaceTemp(1200)
    .duration(300)
    .EUt(60)

  event.recipes.gtceu.electric_blast_furnace('kgrurhhxjqj77u') // remapped from original line 692
    .itemInputs('10x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('2x #forge:dusts/zinc_oxide')
    .itemInputs('2x #forge:dusts/manganese_ii_oxide')
    .itemOutputs('14x #forge:ingots/manganese_zinc_ferrite')
    .blastFurnaceTemp(1200)
    .duration(300)
    .EUt(60)

  event.recipes.gtceu.electric_blast_furnace('v2viua40jy1vat') // remapped from original line 702
    .itemInputs('30x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .itemOutputs('32x #forge:ingots/barium_ferrite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .blastFurnaceTemp(1200)
    .duration(100)
    .EUt(60)

  event.recipes.gtceu.electric_blast_furnace('2af8so4m8yz61i') // remapped from original line 712
    .itemInputs('30x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('5x #forge:dusts/strontium_carbonate')
    .itemOutputs('32x #forge:ingots/strontium_ferrite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .blastFurnaceTemp(1200)
    .duration(100)
    .EUt(60)

  event.recipes.gtceu.assembler('xgp2n15997hm4f') // remapped from original line 722
    .inputFluids(safeFluidOf('gtceu:plastic', 36))
    .itemInputs('1x #forge:rings/manganese_zinc_ferrite')
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(metaitem('component.inductor') * 4)
    .duration(320)
    .EUt(120)

  event.recipes.gtceu.assembler('kjzydtc6skq6fx') // remapped from original line 731
    .inputFluids(safeFluidOf('gtceu:plastic', 36))
    .itemInputs('1x #forge:rings/manganese_zinc_ferrite')
    .itemInputs('2x #forge:wires/fine_annealed_copper')
    .itemOutputs(metaitem('component.inductor') * 8)
    .duration(320)
    .EUt(120)

  event.recipes.gtceu.assembler('7cs8uh93zfi3k1') // remapped from original line 740
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/manganese_zinc_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(metaitem('component.smd.inductor') * 8)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('13apzrr2yft9ax') // remapped from original line 749
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/nickel_zinc_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(metaitem('component.smd.inductor') * 8)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('ud4j7usa1rheyy') // remapped from original line 758
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/cobalt_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(metaitem('component.smd.inductor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('wkrbuhslddr7jh') // remapped from original line 767
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/barium_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(metaitem('component.smd.inductor') * 16)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('hzrfltgzyhqrzs') // remapped from original line 776
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/strontium_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(metaitem('component.smd.inductor') * 20)
    .duration(40)
    .EUt(240)

  event.recipes.susy.roaster('iimeam4nkfyd7a') // remapped from original line 785
    .itemInputs(metaitem('wafer.silicon'))
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs(metaitem('wafer.silicon_dioxide'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(400)
    .EUt(240)

  event.recipes.susy.cvd('62r70hnurtp8vl') // remapped from original line 794
    .itemInputs(metaitem('wafer.silicon'))
    .inputFluids(safeFluidOf('susy:zirconium_tetrachloride', 180))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .itemOutputs(metaitem('wafer.insulated_silicon'))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(240)

  event.recipes.susy.cvd('8btnp54cmrcjlu') // remapped from original line 805
    .itemInputs(metaitem('wafer.silicon_germanium'))
    .inputFluids(safeFluidOf('susy:zirconium_tetrachloride', 180))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .itemOutputs(metaitem('wafer.insulated_silicon_germanium'))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.cutter('9nppmqxlyjwtpe') // remapped from original line 816
    .itemInputs(metaitem('wafer.n_doped.silicon'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(metaitem('chip.n_doped_silicon') * 16)
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.cutter('lnwnn7ozgl5pej') // remapped from original line 825
    .itemInputs(metaitem('wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(metaitem('chip.silicon_dioxide') * 16)
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(500)
    .EUt(120)

  event.recipes.gtceu.cutter('cis42orwvmurcj') // remapped from original line 834
    .itemInputs(metaitem('wafer.insulated_silicon'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(metaitem('chip.insulated_silicon') * 24)
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.cutter('ves9kdjfpqmtlm') // remapped from original line 843
    .itemInputs(metaitem('wafer.insulated_silicon_germanium'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(metaitem('chip.insulated_silicon_germanium') * 32)
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.assembler('d3b7logmb6pzrr') // remapped from original line 851
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon_germanium') * 8)
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(metaitem('component.smd.transistor') * 8)
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('psmbdgldl4wyep') // remapped from original line 860
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon_germanium') * 8)
    .itemInputs('2x #forge:wires/fine_aluminium')
    .itemOutputs(metaitem('component.smd.transistor') * 10)
    .duration(250)
    .EUt(240)

  event.recipes.gtceu.assembler('htcaueq8efwqmh') // remapped from original line 869
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon_germanium') * 8)
    .itemInputs('2x #forge:wires/fine_tantalum')
    .itemOutputs(metaitem('component.smd.transistor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('ayqijb4zjxcxrz') // remapped from original line 878
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon_germanium') * 8)
    .itemInputs('2x #forge:wires/fine_platinum')
    .itemOutputs(metaitem('component.smd.transistor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('fsye4v4hpmpe04') // remapped from original line 887
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon_germanium') * 8)
    .itemInputs('2x #forge:wires/fine_titanium')
    .itemOutputs(metaitem('component.smd.transistor') * 16)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('frusm5sp7tmrez') // remapped from original line 896
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon_germanium') * 8)
    .itemInputs('2x #forge:wires/fine_tungsten')
    .itemOutputs(metaitem('component.smd.transistor') * 20)
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.assembler('cwjvcwiei4hlaa') // remapped from original line 905
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon') * 8)
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(metaitem('component.smd.transistor') * 8)
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('gpsvcqga0zmi27') // remapped from original line 914
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon') * 8)
    .itemInputs('2x #forge:wires/fine_aluminium')
    .itemOutputs(metaitem('component.smd.transistor') * 10)
    .duration(250)
    .EUt(240)

  event.recipes.gtceu.assembler('qkbpvcpcl39obe') // remapped from original line 923
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon') * 8)
    .itemInputs('2x #forge:wires/fine_tantalum')
    .itemOutputs(metaitem('component.smd.transistor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('xmcizyqcmnt0t4') // remapped from original line 932
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon') * 8)
    .itemInputs('2x #forge:wires/fine_platinum')
    .itemOutputs(metaitem('component.smd.transistor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('k318vmhuo7cbfj') // remapped from original line 941
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon') * 8)
    .itemInputs('2x #forge:wires/fine_titanium')
    .itemOutputs(metaitem('component.smd.transistor') * 16)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('ochtwf4nlfohvs') // remapped from original line 950
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.insulated_silicon') * 8)
    .itemInputs('2x #forge:wires/fine_tungsten')
    .itemOutputs(metaitem('component.smd.transistor') * 20)
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.assembler('usep05arb1vx1s') // remapped from original line 959
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.silicon_dioxide') * 8)
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(metaitem('component.smd.transistor') * 8)
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('oeqery7alidsd5') // remapped from original line 968
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.silicon_dioxide') * 8)
    .itemInputs('2x #forge:wires/fine_aluminium')
    .itemOutputs(metaitem('component.smd.transistor') * 10)
    .duration(250)
    .EUt(240)

  event.recipes.gtceu.assembler('a6ikjgcrijltfo') // remapped from original line 977
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.silicon_dioxide') * 8)
    .itemInputs('2x #forge:wires/fine_tantalum')
    .itemOutputs(metaitem('component.smd.transistor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('mkfeoavchc9gsh') // remapped from original line 986
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.silicon_dioxide') * 8)
    .itemInputs('2x #forge:wires/fine_platinum')
    .itemOutputs(metaitem('component.smd.transistor') * 12)
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('suy0tw6nysdjvo') // remapped from original line 995
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.silicon_dioxide') * 8)
    .itemInputs('2x #forge:wires/fine_titanium')
    .itemOutputs(metaitem('component.smd.transistor') * 16)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('zrajdpjjxxyvi6') // remapped from original line 1004
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.silicon_dioxide') * 8)
    .itemInputs('2x #forge:wires/fine_tungsten')
    .itemOutputs(metaitem('component.smd.transistor') * 20)
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.assembler('gefuvykiblo0fs') // remapped from original line 1013
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/platinum')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(metaitem('component.smd.diode') * 16)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('7oe9qhlwshtzc2') // remapped from original line 1023
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/molybdenum')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(metaitem('component.smd.diode') * 16)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('9b5k3ucnnb4uhh') // remapped from original line 1033
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/palladium')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(metaitem('component.smd.diode') * 32)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('dmqmg8zoxaiccr') // remapped from original line 1043
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/tungsten')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(metaitem('component.smd.diode') * 32)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('4cs0wvdzrxxarb') // remapped from original line 1053
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/platinum')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(metaitem('component.smd.diode') * 16)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('bmqi5pj0qyovhu') // remapped from original line 1063
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/molybdenum')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(metaitem('component.smd.diode') * 16)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('p8ghit25b1rxxj') // remapped from original line 1073
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/palladium')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(metaitem('component.smd.diode') * 32)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('mysrg2ed0rcrwc') // remapped from original line 1083
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/tungsten')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(metaitem('component.smd.diode') * 32)
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('iuvnviienyihve') // remapped from original line 1093
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/gold')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(metaitem('component.smd.diode') * 12)
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('6uipq2xyhoe8nk') // remapped from original line 1103
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(metaitem('chip.n_doped_silicon') * 8)
    .itemInputs('1x #forge:foils/gold')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(metaitem('component.smd.diode') * 12)
    .duration(400)
    .EUt(240)

  event.recipes.susy.crystallizer('uedxx36kowdszj') // remapped from original line 1113
    .inputFluids(safeFluidOf('susy:high_purity_silicon', 2304))
    .inputFluids(safeFluidOf('susy:high_purity_germanium', 2304))
    .itemInputs(metaitem('seed_crystal.silicon'))
    .itemOutputs(metaitem('boule.silicon_germanium'))
    .duration(9000)
    .EUt(120)

  event.recipes.gtceu.cutter('jkmejpudvlhwaz') // remapped from original line 1122
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemInputs(metaitem('boule.silicon_germanium'))
    .itemOutputs(metaitem('wafer.silicon_germanium') * 16)
    .itemOutputs(metaitem('seed_crystal.silicon'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(400)
    .EUt(64)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fuel in sintering_fuels) {
  // 
  //     if (fuel.isPlasma) {
  // 
  //         SINTERING_RECIPES.recipeBuilder()
  //                 .inputs(ore('dustAlumina'))
  //                 .notConsumable(metaitem('shape.mold.plate'))
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .outputs(metaitem('plateAlumina'))
  //                 .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                 .duration(fuel.duration)
  //                 .EUt(240)
  //                 .buildAndRegister()
  // 
  //         SINTERING_RECIPES.recipeBuilder()
  //                 .inputs(ore('dustBerylliumOxide'))
  //                 .notConsumable(metaitem('shape.mold.plate'))
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .outputs(metaitem('plateBerylliumOxide'))
  //                 .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                 .duration(fuel.duration)
  //                 .EUt(240)
  //                 .buildAndRegister()
  // 
  //         SINTERING_RECIPES.recipeBuilder()
  //                 .inputs(ore('dustTantalum'))
  //                 .notConsumable(metaitem('shape.mold.nugget'))
  //                 .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                 .outputs(metaitem('tantalum_chip') * 32)
  //                 .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                 .duration(fuel.duration)
  //                 .EUt(240)
  //                 .buildAndRegister()
  // 
  //     } else {
  // 
  //         for (comburent in sintering_comburents) {
  // 
  //             SINTERING_RECIPES.recipeBuilder()
  //                     .inputs(ore('dustAlumina'))
  //                     .notConsumable(metaitem('shape.mold.plate'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('plateAlumina'))
  //                     .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(240)
  //                     .buildAndRegister()
  // 
  //             SINTERING_RECIPES.recipeBuilder()
  //                     .inputs(ore('dustBerylliumOxide'))
  //                     .notConsumable(metaitem('shape.mold.plate'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('plateBerylliumOxide'))
  //                     .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(240)
  //                     .buildAndRegister()
  // 
  //             SINTERING_RECIPES.recipeBuilder()
  //                     .inputs(ore('dustTantalum'))
  //                     .notConsumable(metaitem('shape.mold.nugget'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('tantalum_chip') * 32)
  //                     .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(240)
  //                     .buildAndRegister()
  //         }
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import gregtech.api.metatileentity.multiblock.CleanroomType
  // SINTERING_RECIPES = recipemap("sintering_oven")
  // CUTTER = recipemap('cutter')
  // CRYSTALLIZER = recipemap('crystallizer')
  // SOLIDIFIER = recipemap('fluid_solidifier')
  // CVD = recipemap('cvd')
  // FORGE_HAMMER = recipemap('forge_hammer')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // SIFTER = recipemap('sifter')
  // CENTRIFUGE = recipemap('centrifuge')
  // PYROLYSE = recipemap('pyrolyse_oven')
  // LCR = recipemap('large_chemical_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // VULCANIZER = recipemap('vulcanizing_press')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // ARC_FURNACE = recipemap('arc_furnace')
  // AUTOCLAVE = recipemap('autoclave')
  // COMPRESSOR = recipemap('compressor')
  // ASSEMBLER = recipemap('assembler')
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // PSA = recipemap('pressure_swing_adsorption')
  // FORMING_PRESS = recipemap('forming_press')
  // LASER_ENGRAVER = recipemap('laser_engraver')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // VACUUM_CHAMBER = recipemap('vacuum_chamber');
  // CANNER = recipemap('canner');
});