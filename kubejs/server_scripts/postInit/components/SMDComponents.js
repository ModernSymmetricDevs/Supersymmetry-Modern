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

  event.recipes.susy.crystallizer('ansvdyjyw10b7l') // remapped from original line 98
    .itemInputs(safeItemId('1x susy:seed_crystal.alumina'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:alumina', 4608))
    .itemOutputs(safeItemId('1x susy:boule.alumina'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.cutter('sklh8gf8qiigam') // remapped from original line 107
    .itemInputs(safeItemId('1x susy:boule.alumina'))
    .itemOutputs(safeItemId('1x susy:seed_crystal.alumina'))
    .itemOutputs(safeItemId('32x susy:wafer.alumina'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('tzfqq5snxglzmk') // remapped from original line 189
    .itemInputs('5x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('gtceu:glue', 500))
    .outputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 1000))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('m2oxefx1svyirz') // remapped from original line 197
    .itemInputs('2x #forge:dusts/rutile')
    .inputFluids(safeFluidOf('gtceu:glue', 500))
    .outputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 2000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.mixer('1yaneilrppfv9q') // remapped from original line 205
    .itemInputs('1x #forge:dusts/barium_titanate')
    .inputFluids(safeFluidOf('gtceu:glue', 500))
    .outputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 4000))
    .duration(20)
    .EUt(240)

  event.recipes.gtceu.compressor('qr4l7ipryppijv') // remapped from original line 213
    .notConsumable(safeItemId('1x susy:shape.extruder.foil'))
    .inputFluids(safeFluidOf('susy:ferroelectric_ceramic_binding', 1000))
    .itemOutputs(safeItemId('5x susy:ferroelectric_ceramic_foil'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.forming_press('hhledh0ezkxnz3') // remapped from original line 221
    .itemInputs(safeItemId('2x susy:ferroelectric_ceramic_foil'))
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(safeItemId('1x susy:stacked_ceramic_capacitor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.cutter('9tz3mi4wpl0s6b') // remapped from original line 229
    .itemInputs(safeItemId('1x susy:stacked_ceramic_capacitor'))
    .itemOutputs(safeItemId('16x susy:raw_ceramic_capacitor'))
    .duration(200)
    .EUt(240)

  event.recipes.susy.roaster('wjvfkyshklv8yr') // remapped from original line 236
    .itemInputs('1x #forge:dusts/lead')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/lead_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('a5letqrg39lc1n') // remapped from original line 244
    .itemInputs('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/nickel_ii_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('cnx9rugwqaecnd') // remapped from original line 252
    .itemInputs('1x #forge:dusts/cobalt')
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs('2x #forge:dusts/cobalt_oxide')
    .duration(200)
    .EUt(30)

  event.recipes.susy.reaction_furnace('ocasm8jrtyndvj') // remapped from original line 260
    .itemInputs('1x #forge:dusts/tantalum')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 1000))
    .itemOutputs('2x #forge:dusts/tantalum_nitride')
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.mixer('mnu0zaelxqlfq6') // remapped from original line 268
    .itemInputs('2x #forge:dusts/lead_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 1000))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('oewu8mwlsmtv1m') // remapped from original line 276
    .itemInputs('2x #forge:dusts/nichrome')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 2000))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.mixer('ud3pstkvkx7mfj') // remapped from original line 284
    .itemInputs('2x #forge:dusts/tantalum_nitride')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 2000))
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.mixer('9ihuf0dv5mo3ka') // remapped from original line 292
    .itemInputs('1x #forge:dusts/ruthenium_iv_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 3000))
    .duration(120)
    .EUt(240)

  event.recipes.gtceu.mixer('v6ogaer6qujwom') // remapped from original line 300
    .itemInputs('1x #forge:dusts/bismuth_iridate')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 4000))
    .duration(20)
    .EUt(240)

  event.recipes.susy.batch_reactor('sh9tth2leekwrp') // remapped from original line 308
    .itemInputs('5x #forge:dusts/bismuth_iii_oxide')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 6000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 4000))
    .itemOutputs('10x #forge:dusts/sodium_bismuthate')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 8000))
    .duration(100)
    .EUt(240)

  event.recipes.susy.roaster('dbxeavooqo5peh') // remapped from original line 318
    .itemInputs('1x #forge:dusts/iridium')
    .inputFluids(safeFluidOf('gtceu:chlorine', 3000))
    .itemOutputs('4x #forge:dusts/iridium_chloride')
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.autoclave('2s2qil8zk55wk9') // remapped from original line 326
    .itemInputs('10x #forge:dusts/sodium_bismuthate')
    .itemInputs('8x #forge:dusts/iridium_chloride')
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemOutputs('11x #forge:dusts/bismuth_iridate')
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.forming_press('iltjsdrujsch8e') // remapped from original line 336
    .itemInputs(safeItemId('4x susy:raw_ceramic_capacitor'))
    .itemInputs('2x #forge:wires/fine_tin')
    .itemOutputs(safeItemId('4x susy:component.smd.capacitor'))
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.forming_press('kffaqdoc655kcl') // remapped from original line 344
    .itemInputs(safeItemId('4x susy:raw_ceramic_capacitor'))
    .itemInputs('2x #forge:wires/fine_zinc')
    .itemOutputs(safeItemId('4x susy:component.smd.capacitor'))
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.forming_press('sp2swgrjhcev0t') // remapped from original line 352
    .itemInputs(safeItemId('4x susy:raw_ceramic_capacitor'))
    .itemInputs('1x #forge:wires/fine_aluminium')
    .itemOutputs(safeItemId('4x susy:component.smd.capacitor'))
    .duration(20)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('5bjeb1c3owsq6i') // remapped from original line 360
    .inputFluids(safeFluidOf('gtceu:aluminium', 18))
    .itemInputs('1x #forge:foils/polypropylene')
    .itemOutputs(safeItemId('1x susy:metallized_plastic_film'))
    .duration(200)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('uisnafns2noaol') // remapped from original line 368
    .inputFluids(safeFluidOf('gtceu:zinc', 36))
    .itemInputs('1x #forge:foils/polypropylene')
    .itemOutputs(safeItemId('1x susy:metallized_plastic_film'))
    .duration(400)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('uivx8t05h5dxlt') // remapped from original line 376
    .inputFluids(safeFluidOf('gtceu:aluminium', 18))
    .itemInputs('1x #forge:foils/mylar')
    .itemOutputs(safeItemId('2x susy:metallized_plastic_film'))
    .duration(30)
    .EUt(240)

  event.recipes.susy.vacuum_chamber('abx5naiizckkce') // remapped from original line 384
    .inputFluids(safeFluidOf('gtceu:zinc', 36))
    .itemInputs('1x #forge:foils/mylar')
    .itemOutputs(safeItemId('2x susy:metallized_plastic_film'))
    .duration(60)
    .EUt(240)

  event.recipes.gtceu.cutter('nbuinag1spfdi2') // remapped from original line 392
    .itemInputs(safeItemId('1x susy:metallized_plastic_film'))
    .itemOutputs(safeItemId('16x susy:metallized_plastic_square'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('ohjfmtbfvnsvnc') // remapped from original line 399
    .itemInputs(safeItemId('4x susy:metallized_plastic_square'))
    .inputFluids(safeFluidOf('gtceu:tin', 80))
    .itemOutputs(safeItemId('4x susy:raw_smd_capacitor'))
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('5zgaixfsdl4kma') // remapped from original line 407
    .itemInputs(safeItemId('4x susy:metallized_plastic_square'))
    .inputFluids(safeFluidOf('gtceu:zinc', 80))
    .itemOutputs(safeItemId('4x susy:raw_smd_capacitor'))
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('jlrxifwol1glmp') // remapped from original line 415
    .itemInputs(safeItemId('4x susy:metallized_plastic_square'))
    .inputFluids(safeFluidOf('gtceu:aluminium', 40))
    .itemOutputs(safeItemId('4x susy:raw_smd_capacitor'))
    .duration(20)
    .EUt(240)

  event.recipes.susy.batch_reactor('qhs0rjleyd30sg') // remapped from original line 423
    .itemInputs(safeItemId('16x susy:raw_smd_capacitor'))
    .inputFluids(safeFluidOf('gtceu:polydimethylsiloxane', 72))
    .itemOutputs(safeItemId('16x susy:component.smd.capacitor'))
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.assembler('58nrl7cfqoabhj') // remapped from original line 431
    .itemInputs(safeItemId('1x susy:wafer.alumina'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(safeItemId('1x susy:thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('gtn5yieyoc3frs') // remapped from original line 439
    .itemInputs(safeItemId('1x susy:wafer.alumina'))
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(safeItemId('1x susy:thick_film_substrate_wafer'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('hmhi2kdnawbvb8') // remapped from original line 447
    .itemInputs(safeItemId('1x susy:wafer.alumina'))
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(safeItemId('2x susy:thick_film_substrate_wafer'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.cutter('l0vy4y2bj5wu89') // remapped from original line 455
    .itemInputs('1x #forge:plates/alumina')
    .itemOutputs(safeItemId('1x susy:wafer.alumina'))
    .duration(30)
    .EUt(240)

  event.recipes.gtceu.fluid_solidifier('wlyc6wuu1ubljl') // remapped from original line 462
    .inputFluids(safeFluidOf('susy:beryllium_oxide', 36))
    .notConsumable(safeItemId('1x susy:shape.mold.ball'))
    .chancedOutput(safeItemId('1x susy:seed_crystal.beryllium_oxide'), 1000, 1000)
    .duration(200)
    .EUt(240)

  event.recipes.susy.crystallizer('ovl2jm70eupnxf') // remapped from original line 470
    .itemInputs(safeItemId('1x susy:seed_crystal.beryllium_oxide'))
    .circuit(1)
    .inputFluids(safeFluidOf('susy:beryllium_oxide', 3168))
    .itemOutputs(safeItemId('1x susy:boule.beryllium_oxide'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.cutter('o2ljxq2fekv6n3') // remapped from original line 480
    .itemInputs(safeItemId('1x susy:boule.beryllium_oxide'))
    .itemOutputs(safeItemId('1x susy:seed_crystal.beryllium_oxide'))
    .itemOutputs(safeItemId('32x susy:wafer.beryllium_oxide'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.cutter('cxcdaxtjopnxzf') // remapped from original line 488
    .itemInputs('1x #forge:plates/beryllium_oxide')
    .itemOutputs(safeItemId('1x susy:wafer.beryllium_oxide'))
    .duration(30)
    .EUt(240)

  event.recipes.gtceu.assembler('r4heboklhpwxwa') // remapped from original line 495
    .itemInputs(safeItemId('1x susy:wafer.beryllium_oxide'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(safeItemId('4x susy:thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('zasghbyzkuyt8u') // remapped from original line 503
    .itemInputs(safeItemId('1x susy:wafer.beryllium_oxide'))
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(safeItemId('4x susy:thick_film_substrate_wafer'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('72nhqa0nrmnv6u') // remapped from original line 511
    .itemInputs(safeItemId('1x susy:wafer.beryllium_oxide'))
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(safeItemId('8x susy:thick_film_substrate_wafer'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('fawraeydfuzjwf') // remapped from original line 519
    .circuit(1)
    .itemInputs('1x #forge:plates/stainless_steel')
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(safeItemId('2x susy:thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('ne5nyvlh80dhvw') // remapped from original line 528
    .circuit(1)
    .itemInputs('1x #forge:plates/stainless_steel')
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(safeItemId('2x susy:thick_film_substrate_wafer'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('ke50oqnywdjfm2') // remapped from original line 537
    .circuit(1)
    .itemInputs('1x #forge:plates/stainless_steel')
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(safeItemId('4x susy:thick_film_substrate_wafer'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('twl3bgotgljg3d') // remapped from original line 546
    .itemInputs(safeItemId('1x susy:wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemOutputs(safeItemId('2x susy:thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.assembler('bkl1ussqus6bye') // remapped from original line 554
    .itemInputs(safeItemId('1x susy:wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:polyvinyl_chloride', 144))
    .itemOutputs(safeItemId('2x susy:thick_film_substrate_wafer'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('sbrhjkagipbw5n') // remapped from original line 562
    .itemInputs(safeItemId('1x susy:wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('gtceu:polytetrafluoroethylene', 144))
    .itemOutputs(safeItemId('4x susy:thick_film_substrate_wafer'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.cutter('o21vj7jdqxdrzo') // remapped from original line 570
    .itemInputs(safeItemId('1x susy:thick_film_substrate_wafer'))
    .itemOutputs(safeItemId('1x susy:patterned_thick_film_substrate_wafer'))
    .duration(600)
    .EUt(240)

  event.recipes.gtceu.laser_engraver('vmttytdhtvr1mp') // remapped from original line 577
    .itemInputs(safeItemId('1x susy:thick_film_substrate_wafer'))
    .itemOutputs(safeItemId('1x susy:patterned_thick_film_substrate_wafer'))
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('g2vnufvw7xxnvz') // remapped from original line 584
    .itemInputs(safeItemId('1x susy:patterned_thick_film_substrate_wafer'))
    .inputFluids(safeFluidOf('susy:ceramic_thick_film_paste', 1000))
    .itemOutputs(safeItemId('1x susy:thick_film_resistor_wafer'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.cutter('ifpoysk1tpydzz') // remapped from original line 592
    .itemInputs(safeItemId('1x susy:thick_film_resistor_wafer'))
    .itemOutputs(safeItemId('16x susy:component.smd.resistor'))
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('n3ke0llwkcvpet') // remapped from original line 599
    .itemInputs('2x #forge:foils/aluminium')
    .itemInputs(safeItemId('1x minecraft:paper'))
    .itemOutputs(safeItemId('8x susy:raw_capacitor_roll'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.canner('5oaiz56ezmrxjs') // remapped from original line 607
    .itemInputs(safeItemId('8x susy:raw_capacitor_roll'))
    .itemInputs('1x #forge:dusts/manganese_dioxide')
    .itemOutputs(safeItemId('8x susy:aluminium_electrolytic_capacitor'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.mixer('jg74btszwdgubl') // remapped from original line 615
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 1000))
    .itemInputs('3x #forge:dusts/boric_acid')
    .outputFluids(safeFluidOf('susy:borax_electrolyte', 1000))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('j4mj5htvtijler') // remapped from original line 623
    .itemInputs(safeItemId('16x susy:raw_capacitor_roll'))
    .inputFluids(safeFluidOf('susy:borax_electrolyte', 100))
    .itemOutputs(safeItemId('16x susy:aluminium_electrolytic_capacitor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('iiwod4czrwthbi') // remapped from original line 631
    .itemInputs(safeItemId('16x susy:aluminium_electrolytic_capacitor'))
    .itemInputs('4x #forge:rings/rubber')
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(safeItemId('16x susy:component.smd.capacitor'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('frkpmkviildppr') // remapped from original line 640
    .itemInputs(safeItemId('16x susy:aluminium_electrolytic_capacitor'))
    .itemInputs('2x #forge:rings/silicone_rubber')
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(safeItemId('16x susy:component.smd.capacitor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('rtuc1gpn6tryc9') // remapped from original line 649
    .itemInputs(safeItemId('16x susy:aluminium_electrolytic_capacitor'))
    .itemInputs('1x #forge:rings/styrene_butadiene_rubber')
    .itemInputs('2x #forge:foils/aluminium')
    .itemOutputs(safeItemId('16x susy:component.smd.capacitor'))
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.electrolyzer('n4nq2g6mfszm10') // remapped from original line 658
    .itemInputs(safeItemId('8x susy:tantalum_chip'))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs(safeItemId('8x susy:anodized_tantalum_chip'))
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.pyrolyse_oven('30vjq5md4dcq57') // remapped from original line 666
    .itemInputs(safeItemId('8x susy:anodized_tantalum_chip'))
    .itemInputs('1x #forge:dusts/manganese_ii_nitrate')
    .itemOutputs(safeItemId('8x susy:manganized_tantalum_chip'))
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.chemical_bath('qhg3pzbnkrot2v') // remapped from original line 674
    .itemInputs(safeItemId('8x susy:manganized_tantalum_chip'))
    .inputFluids(safeFluidOf('gtceu:silver', 36))
    .itemOutputs(safeItemId('8x susy:component.smd.capacitor'))
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.electric_blast_furnace('eog7pqmwy127sb') // remapped from original line 682
    .itemInputs('10x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('2x #forge:dusts/zinc_oxide')
    .itemInputs('2x #forge:dusts/nickel_ii_oxide')
    .itemOutputs('14x #forge:ingots/nickel_zinc_ferrite')
    .blastFurnaceTemp(1200)
    .duration(300)
    .EUt(60)

  event.recipes.gtceu.electric_blast_furnace('xgsy3sbcsp4rc7') // remapped from original line 692
    .itemInputs('10x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('2x #forge:dusts/zinc_oxide')
    .itemInputs('2x #forge:dusts/manganese_ii_oxide')
    .itemOutputs('14x #forge:ingots/manganese_zinc_ferrite')
    .blastFurnaceTemp(1200)
    .duration(300)
    .EUt(60)

  event.recipes.gtceu.electric_blast_furnace('antp2jpmj5fmxd') // remapped from original line 702
    .itemInputs('30x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('5x #forge:dusts/barium_carbonate')
    .itemOutputs('32x #forge:ingots/barium_ferrite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .blastFurnaceTemp(1200)
    .duration(100)
    .EUt(60)

  event.recipes.gtceu.electric_blast_furnace('ub45glkzjglvxe') // remapped from original line 712
    .itemInputs('30x #forge:dusts/purified_iron_iii_oxide')
    .itemInputs('5x #forge:dusts/strontium_carbonate')
    .itemOutputs('32x #forge:ingots/strontium_ferrite')
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .blastFurnaceTemp(1200)
    .duration(100)
    .EUt(60)

  event.recipes.gtceu.assembler('gy84nvf985mus2') // remapped from original line 722
    .inputFluids(safeFluidOf('gtceu:plastic', 36))
    .itemInputs('1x #forge:rings/manganese_zinc_ferrite')
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(safeItemId('4x susy:component.inductor'))
    .duration(320)
    .EUt(120)

  event.recipes.gtceu.assembler('u89paubqlvkoox') // remapped from original line 731
    .inputFluids(safeFluidOf('gtceu:plastic', 36))
    .itemInputs('1x #forge:rings/manganese_zinc_ferrite')
    .itemInputs('2x #forge:wires/fine_annealed_copper')
    .itemOutputs(safeItemId('8x susy:component.inductor'))
    .duration(320)
    .EUt(120)

  event.recipes.gtceu.assembler('y0zi7tf4i1axob') // remapped from original line 740
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/manganese_zinc_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(safeItemId('8x susy:component.smd.inductor'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('7ga3n5lvabfy6q') // remapped from original line 749
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/nickel_zinc_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(safeItemId('8x susy:component.smd.inductor'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('eqwzxccxu0emtt') // remapped from original line 758
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/cobalt_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(safeItemId('12x susy:component.smd.inductor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('rfqygrus1clgwf') // remapped from original line 767
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/barium_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(safeItemId('16x susy:component.smd.inductor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('qyahvkympw5tzf') // remapped from original line 776
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs('1x #forge:rings/strontium_ferrite')
    .itemInputs('4x #forge:wires/fine_cupronickel')
    .itemOutputs(safeItemId('20x susy:component.smd.inductor'))
    .duration(40)
    .EUt(240)

  event.recipes.susy.roaster('xchugbc2vvp3uu') // remapped from original line 785
    .itemInputs(safeItemId('1x susy:wafer.silicon'))
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemOutputs(safeItemId('1x susy:wafer.silicon_dioxide'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(400)
    .EUt(240)

  event.recipes.susy.cvd('yq6upduu3voeb1') // remapped from original line 794
    .itemInputs(safeItemId('1x susy:wafer.silicon'))
    .inputFluids(safeFluidOf('susy:zirconium_tetrachloride', 180))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .itemOutputs(safeItemId('1x susy:wafer.insulated_silicon'))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(240)

  event.recipes.susy.cvd('xhkenaoxkb7qdj') // remapped from original line 805
    .itemInputs(safeItemId('1x susy:wafer.silicon_germanium'))
    .inputFluids(safeFluidOf('susy:zirconium_tetrachloride', 180))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .itemOutputs(safeItemId('1x susy:wafer.insulated_silicon_germanium'))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(80)
    .EUt(240)

  event.recipes.gtceu.cutter('orj4dzcurrzqmq') // remapped from original line 816
    .itemInputs(safeItemId('1x susy:wafer.n_doped.silicon'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(safeItemId('16x susy:chip.n_doped_silicon'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.cutter('g34sll6yyxtblx') // remapped from original line 825
    .itemInputs(safeItemId('1x susy:wafer.silicon_dioxide'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(safeItemId('16x susy:chip.silicon_dioxide'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(500)
    .EUt(120)

  event.recipes.gtceu.cutter('bsn6jel9qfgypm') // remapped from original line 834
    .itemInputs(safeItemId('1x susy:wafer.insulated_silicon'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(safeItemId('24x susy:chip.insulated_silicon'))
    .cleanroom(CleanroomType.CLEANROOM)
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.cutter('kwvnwxx0xenbio') // remapped from original line 843
    .itemInputs(safeItemId('1x susy:wafer.insulated_silicon_germanium'))
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemOutputs(safeItemId('32x susy:chip.insulated_silicon_germanium'))
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.assembler('lsipln0gkswhnr') // remapped from original line 851
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon_germanium'))
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(safeItemId('8x susy:component.smd.transistor'))
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('xkp8hc6m3r2nyu') // remapped from original line 860
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon_germanium'))
    .itemInputs('2x #forge:wires/fine_aluminium')
    .itemOutputs(safeItemId('10x susy:component.smd.transistor'))
    .duration(250)
    .EUt(240)

  event.recipes.gtceu.assembler('94p1l6068din47') // remapped from original line 869
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon_germanium'))
    .itemInputs('2x #forge:wires/fine_tantalum')
    .itemOutputs(safeItemId('12x susy:component.smd.transistor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('cm5ehg4iodf1eh') // remapped from original line 878
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon_germanium'))
    .itemInputs('2x #forge:wires/fine_platinum')
    .itemOutputs(safeItemId('12x susy:component.smd.transistor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('8a8injyavafg1k') // remapped from original line 887
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon_germanium'))
    .itemInputs('2x #forge:wires/fine_titanium')
    .itemOutputs(safeItemId('16x susy:component.smd.transistor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('nbimtprun5zxcq') // remapped from original line 896
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon_germanium'))
    .itemInputs('2x #forge:wires/fine_tungsten')
    .itemOutputs(safeItemId('20x susy:component.smd.transistor'))
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.assembler('ox3jqjefu58afw') // remapped from original line 905
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon'))
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(safeItemId('8x susy:component.smd.transistor'))
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('bif0khpn978hby') // remapped from original line 914
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon'))
    .itemInputs('2x #forge:wires/fine_aluminium')
    .itemOutputs(safeItemId('10x susy:component.smd.transistor'))
    .duration(250)
    .EUt(240)

  event.recipes.gtceu.assembler('gsmsalew19xiui') // remapped from original line 923
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon'))
    .itemInputs('2x #forge:wires/fine_tantalum')
    .itemOutputs(safeItemId('12x susy:component.smd.transistor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('re4ibflaz5by0h') // remapped from original line 932
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon'))
    .itemInputs('2x #forge:wires/fine_platinum')
    .itemOutputs(safeItemId('12x susy:component.smd.transistor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('oehps9swxm8bwb') // remapped from original line 941
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon'))
    .itemInputs('2x #forge:wires/fine_titanium')
    .itemOutputs(safeItemId('16x susy:component.smd.transistor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('ith3chdb1lff0w') // remapped from original line 950
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.insulated_silicon'))
    .itemInputs('2x #forge:wires/fine_tungsten')
    .itemOutputs(safeItemId('20x susy:component.smd.transistor'))
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.assembler('uptvtpgka4i4gr') // remapped from original line 959
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.silicon_dioxide'))
    .itemInputs('2x #forge:wires/fine_copper')
    .itemOutputs(safeItemId('8x susy:component.smd.transistor'))
    .duration(300)
    .EUt(240)

  event.recipes.gtceu.assembler('vz8ub7u5y6anku') // remapped from original line 968
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.silicon_dioxide'))
    .itemInputs('2x #forge:wires/fine_aluminium')
    .itemOutputs(safeItemId('10x susy:component.smd.transistor'))
    .duration(250)
    .EUt(240)

  event.recipes.gtceu.assembler('xzvgj9huw7gdcb') // remapped from original line 977
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.silicon_dioxide'))
    .itemInputs('2x #forge:wires/fine_tantalum')
    .itemOutputs(safeItemId('12x susy:component.smd.transistor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('dghrp5jmagncgj') // remapped from original line 986
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.silicon_dioxide'))
    .itemInputs('2x #forge:wires/fine_platinum')
    .itemOutputs(safeItemId('12x susy:component.smd.transistor'))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.assembler('uqkqnb19ujzx0y') // remapped from original line 995
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.silicon_dioxide'))
    .itemInputs('2x #forge:wires/fine_titanium')
    .itemOutputs(safeItemId('16x susy:component.smd.transistor'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('w0iyjtydj4wdjn') // remapped from original line 1004
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.silicon_dioxide'))
    .itemInputs('2x #forge:wires/fine_tungsten')
    .itemOutputs(safeItemId('20x susy:component.smd.transistor'))
    .duration(50)
    .EUt(240)

  event.recipes.gtceu.assembler('wjwc58iuaowwar') // remapped from original line 1013
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/platinum')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(safeItemId('16x susy:component.smd.diode'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('mdrghdxpaq9ukj') // remapped from original line 1023
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/molybdenum')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(safeItemId('16x susy:component.smd.diode'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('nougvoejvtupug') // remapped from original line 1033
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/palladium')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(safeItemId('32x susy:component.smd.diode'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('gtcej1fs8larxn') // remapped from original line 1043
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/tungsten')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(safeItemId('32x susy:component.smd.diode'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('0rdrymzcyziyao') // remapped from original line 1053
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/platinum')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(safeItemId('16x susy:component.smd.diode'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('kk399jjzwk8ixw') // remapped from original line 1063
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/molybdenum')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(safeItemId('16x susy:component.smd.diode'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('trni34kqhvnh1l') // remapped from original line 1073
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/palladium')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(safeItemId('32x susy:component.smd.diode'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('kule4vmfjkkkv1') // remapped from original line 1083
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/tungsten')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(safeItemId('32x susy:component.smd.diode'))
    .duration(100)
    .EUt(240)

  event.recipes.gtceu.assembler('eqwdx858vkeuv3') // remapped from original line 1093
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/gold')
    .itemInputs('1x #forge:wires/gt_single_annealed_copper')
    .itemOutputs(safeItemId('12x susy:component.smd.diode'))
    .duration(400)
    .EUt(240)

  event.recipes.gtceu.assembler('2awq17yzklh7pv') // remapped from original line 1103
    .inputFluids(safeFluidOf('gtceu:plastic', 144))
    .itemInputs(safeItemId('8x susy:chip.n_doped_silicon'))
    .itemInputs('1x #forge:foils/gold')
    .itemInputs('1x #forge:wires/gt_single_copper')
    .itemOutputs(safeItemId('12x susy:component.smd.diode'))
    .duration(400)
    .EUt(240)

  event.recipes.susy.crystallizer('mnemzkfgvco0eg') // remapped from original line 1113
    .inputFluids(safeFluidOf('susy:high_purity_silicon', 2304))
    .inputFluids(safeFluidOf('susy:high_purity_germanium', 2304))
    .itemInputs(safeItemId('1x susy:seed_crystal.silicon'))
    .itemOutputs(safeItemId('1x susy:boule.silicon_germanium'))
    .duration(9000)
    .EUt(120)

  event.recipes.gtceu.cutter('ddtksp1rd8mvl4') // remapped from original line 1122
    .inputFluids(safeFluidOf('susy:ultrapure_water', 100))
    .itemInputs(safeItemId('1x susy:boule.silicon_germanium'))
    .itemOutputs(safeItemId('16x susy:wafer.silicon_germanium'))
    .itemOutputs(safeItemId('1x susy:seed_crystal.silicon'))
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