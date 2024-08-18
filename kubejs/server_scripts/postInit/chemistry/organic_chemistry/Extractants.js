ServerEvents.recipes(event => {

  // Contains GTFO resources
  //event.recipes.susy.bubble_column_reactor('o9hzzluyy1pjkx') // remapped from original line 38
    //.inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    //.inputFluids(safeFluidOf('susy:gtfo_hydrogen_cyanide', 50))
    //.outputFluids(safeFluidOf('susy:sodium_cyanide_solution', 100))
    //.duration(10)
    //.EUt(voltAmps[1])

  event.recipes.gtceu.distillery('mkuceds3m731xr') // remapped from original line 46
    .inputFluids(safeFluidOf('susy:sodium_cyanide_solution', 2000))
    .itemOutputs('3x #forge:dusts/sodium_cyanide')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.gtceu.electric_blast_furnace('gnv3rn8sqgug7f') // remapped from original line 55
    .itemInputs('3x #forge:dusts/calcium_carbide')
    .inputFluids(safeFluidOf('gtceu:nitrogen', 2000))
    .itemOutputs('4x #forge:dusts/calcium_cyanamide')
    .itemOutputs('1x #forge:dusts/carbon')
    .blastFurnaceTemp(1200)
    .EUt(30)
    .duration(200)

  event.recipes.susy.batch_reactor('aodykuoczcaxvi') // remapped from original line 65
    .itemInputs('4x #forge:dusts/calcium_cyanamide')
    .itemInputs('1x #forge:dusts/carbon')
    .inputFluids(safeFluidOf('gtceu:salt', 576))
    .itemOutputs('6x #forge:dusts/sodium_cyanide')
    .itemOutputs('3x #forge:dusts/calcium_chloride')
    .EUt(30)
    .duration(200)

  event.recipes.susy.batch_reactor('ukpgpl9lbno1up') // remapped from original line 75
    .itemInputs('4x #forge:dusts/calcium_cyanamide')
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .itemOutputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.bubble_column_reactor('w1gonvoktudfp7') // remapped from original line 85
    .inputFluids(safeFluidOf('susy:soda_ash_solution', 50))
    .inputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .outputFluids(safeFluidOf('susy:sodium_sulfite_solution', 50))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .duration(6)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('ztpqk4ue9lokjx') // remapped from original line 94
    .itemInputs('1x #forge:dusts/sulfur')
    .inputFluids(safeFluidOf('susy:sodium_sulfite_solution', 1000))
    .outputFluids(safeFluidOf('susy:sodium_thiosulfate_solution', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillery('0qvk6vnylzeiqv') // remapped from original line 102
    .inputFluids(safeFluidOf('susy:sodium_thiosulfate_solution', 1000))
    .itemOutputs('7x #forge:dusts/sodium_thiosulfate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(120)
    .EUt(voltAmps[1])

  event.recipes.gtceu.autoclave('me4cuyczciudph') // remapped from original line 112
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .inputFluids(safeFluidOf('gtceu:seed_oil', 1000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .outputFluids(safeFluidOf('susy:fatty_acid_solution', 3000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.crystallizer('yypb1uqzqfujzo') // remapped from original line 121
    .inputFluids(safeFluidOf('susy:fatty_acid_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:methanol', 1000))
    .itemInputs('1x #forge:dusts/urea')
    .outputFluids(safeFluidOf('susy:oleic_acid_solution', 1000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.crystallizer('6h24a0fzm9vq6e') // remapped from original line 130
    .inputFluids(safeFluidOf('susy:oleic_acid_solution', 1000))
    .itemOutputs('18x #forge:dusts/oleic_acid')
    .outputFluids(safeFluidOf('gtceu:methanol', 1000))
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.mixer('h9xetdxpxkjxil') // remapped from original line 138
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .itemInputs('18x #forge:dusts/oleic_acid')
    .outputFluids(safeFluidOf('susy:alkaline_sodium_oleate_solution', 1000))
    .EUt(30)
    .duration(80)

  event.recipes.gtceu.extractor('nhh7zjwor2ilf8') // remapped from original line 148
    .itemInputs(safeItemId('1x susy:copra'))
    .outputFluids(safeFluidOf('susy:coconut_oil', 50))
    .EUt(30)
    .duration(80)

  event.recipes.gtceu.autoclave('shv7jko9lvb8fh') // remapped from original line 155
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .inputFluids(safeFluidOf('susy:coconut_oil', 1000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .outputFluids(safeFluidOf('susy:coconut_acid', 3000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.reaction_furnace('6n05hzudrpqhns') // remapped from original line 166
    .inputFluids(safeFluidOf('susy:coconut_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .outputFluids(safeFluidOf('susy:coco_amine', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 2000))
    .EUt(30)
    .duration(200)

  event.recipes.susy.continuous_stirred_tank_reactor('vdzgz1opwv8qnt') // remapped from original line 175
    .inputFluids(safeFluidOf('susy:coco_amine', 50))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 50))
    .outputFluids(safeFluidOf('susy:coco_amine_acetate', 50))
    .EUt(30)
    .duration(10)

  event.recipes.susy.batch_reactor('cjbwgjtn4ral99') // remapped from original line 185
    .itemInputs('1x #forge:dusts/sodium')
    .inputFluids(safeFluidOf('gtceu:ethanol', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .outputFluids(safeFluidOf('susy:sodium_ethoxide_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy./*CSTR('mexnrnzecn7knp') // remapped from original line 194
    .inputFluids(safeFluidOf('susy:sodium_ethoxide_solution', 50))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 50))
    .outputFluids(safeFluidOf('susy:sodium_ethyl_xanthate_solution', 50))
    .EUt(voltAmps[3])
    .duration(4)

  event.recipes.susy.batch_reactor('4ngmzqv76abqsg') // remapped from original line 202
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_ethyl_xanthate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('9xbv5hoa01xtku') // remapped from original line 211
    .inputFluids(safeFluidOf('susy:sodium_ethyl_xanthate_solution', 1000))
    .itemOutputs('1x #forge:dusts/sodium_ethyl_xanthate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('qlzlknvggsczmw') // remapped from original line 221
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:ethanol', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .outputFluids(safeFluidOf('susy:potassium_ethyl_xanthate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('dvkajt4qxwl2ne') // remapped from original line 230
    .inputFluids(safeFluidOf('susy:potassium_ethyl_xanthate_solution', 1000))
    .itemOutputs('1x #forge:dusts/potassium_ethyl_xanthate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('d7nyzsgxy4uyr5') // remapped from original line 239
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('susy:n_butanol', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .outputFluids(safeFluidOf('susy:potassium_butyl_xanthate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('xgmjd3wjd0usrt') // remapped from original line 248
    .inputFluids(safeFluidOf('susy:potassium_butyl_xanthate_solution', 1000))
    .itemOutputs('1x #forge:dusts/potassium_butyl_xanthate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('edwgj9la9owsxg') // remapped from original line 258
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('susy:n_pentanol', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .outputFluids(safeFluidOf('susy:potassium_amyl_xanthate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('vvbpn1vruwzizn') // remapped from original line 267
    .inputFluids(safeFluidOf('susy:potassium_amyl_xanthate_solution', 1000))
    .itemOutputs('1x #forge:dusts/potassium_amyl_xanthate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('8qg1hmeasb6suy') // remapped from original line 276
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:isobutyl_alcohol', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .outputFluids(safeFluidOf('susy:sodium_isobutyl_xanthate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('przeskimx2xcyk') // remapped from original line 285
    .inputFluids(safeFluidOf('susy:sodium_isobutyl_xanthate_solution', 1000))
    .itemOutputs('1x #forge:dusts/sodium_isobutyl_xanthate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('ihmoktyam7jsps') // remapped from original line 294
    .itemInputs('3x #forge:dusts/potassium_hydroxide')
    .inputFluids(safeFluidOf('susy:isopropyl_alcohol', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .outputFluids(safeFluidOf('susy:potassium_isopropyl_xanthate_solution', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.distillery('yumbm8zh7q37ok') // remapped from original line 303
    .inputFluids(safeFluidOf('susy:potassium_isopropyl_xanthate_solution', 1000))
    .itemOutputs('1x #forge:dusts/potassium_isopropyl_xanthate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('mgsb79zoirr5vw') // remapped from original line 312
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .inputFluids(safeFluidOf('susy:n_hexadecanol', 1000))
    .inputFluids(safeFluidOf('gtceu:ammonia', 1000))
    .itemOutputs('1x #forge:dusts/n_hexadecylamine')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('f4jqpb7e3getdj') // remapped from original line 322
    .itemInputs('1x #forge:dusts/n_hexadecylamine')
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .itemOutputs('1x #forge:dusts/n_hexadecylammonium_acetate')
    .duration(3)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('2gntsjxhrf6udo') // remapped from original line 332
    .inputFluids(safeFluidOf('susy:octanoyl_chloride', 1000))
    .inputFluids(safeFluidOf('susy:hydroxylamine', 1000))
    .itemOutputs('1x #forge:dusts/octyl_hydroxamic_acid')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.batch_reactor('gnwmgjp692tavy') // remapped from original line 341
    .itemInputs('1x #forge:dusts/octyl_hydroxamic_acid')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 1000))
    .itemOutputs('1x #forge:dusts/potassium_octyl_hydroxamate')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.reaction_furnace('wxms2zv54ythqq') // remapped from original line 352
    .inputFluids(safeFluidOf('susy:diethylenetriamine', 1000))
    .inputFluids(safeFluidOf('susy:caprylic_acid', 2000))
    .outputFluids(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(voltAmps[4])
    .duration(80)

  event.recipes.susy.reaction_furnace('k0b21sx6amlthh') // remapped from original line 361
    .inputFluids(safeFluidOf('susy:diethylenetriamine', 1000))
    .inputFluids(safeFluidOf('susy:lauric_acid', 2000))
    .outputFluids(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(voltAmps[4])
    .duration(80)

  event.recipes.susy.reaction_furnace('merg89gw69y0tn') // remapped from original line 370
    .inputFluids(safeFluidOf('susy:diethylenetriamine', 1000))
    .inputFluids(safeFluidOf('susy:palmitic_acid', 2000))
    .outputFluids(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(voltAmps[4])
    .duration(80)

  event.recipes.susy.reaction_furnace('l9sghjnrn9yyzn') // remapped from original line 379
    .inputFluids(safeFluidOf('susy:diethylenetriamine', 1000))
    .inputFluids(safeFluidOf('susy:stearic_acid', 2000))
    .outputFluids(safeFluidOf('susy:one_amidoethyl_two_alkyl_two_imidazoline', 1000))
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .EUt(voltAmps[4])
    .duration(80)

  event.recipes.susy.continuous_stirred_tank_reactor('jzpyvnzwis3gfn') // remapped from original line 390
    .inputFluids(safeFluidOf('susy:diethylene_glycol', 50))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 400))
    .inputFluids(safeFluidOf('gtceu:ethanol', 50))
    .outputFluids(safeFluidOf('susy:diglycolic_acid_solution', 150))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 200))
    .duration(3)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('pbzygwem6igqyq') // remapped from original line 400
    .inputFluids(safeFluidOf('susy:diglycolic_acid_solution', 3000))
    .outputFluids(safeFluidOf('susy:diglycolic_acid', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1900))
    .outputFluids(safeFluidOf('gtceu:nitric_acid', 4000))
    .outputFluids(safeFluidOf('susy:ethanol_water_azeotrope', 1100))
    .duration(160)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('2sxcjhlsbusjoq') // remapped from original line 410
    .inputFluids(safeFluidOf('susy:diglycolic_acid', 50))
    .inputFluids(safeFluidOf('susy:thionyl_chloride', 50))
    .inputFluids(safeFluidOf('susy:pyridine', 50))
    .outputFluids(safeFluidOf('susy:diluted_chloroacetic_anhydride', 150))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 50))
    .duration(3)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('vybgb07s0awv2u') // remapped from original line 420
    .inputFluids(safeFluidOf('susy:diluted_chloroacetic_anhydride', 3000))
    .itemOutputs('13x #forge:dusts/chloroacetic_anhydride')
    .outputFluids(safeFluidOf('susy:pyridine', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('k0evjtu8f0pvrp') // remapped from original line 429
    .notConsumable('1x #forge:catalysts/bed_nickel')
    .inputFluids(safeFluidOf('susy:n_octanol', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:n_octylamine', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(3)
    .EUt(voltAmps[1])

  event.recipes.susy.trickle_bed_reactor('rff5fqdhaoqejx') // remapped from original line 439
    .circuit(2)
    .notConsumable('1x #forge:dusts/activated_raney_nickel')
    .inputFluids(safeFluidOf('susy:n_octanol', 100))
    .inputFluids(safeFluidOf('gtceu:ammonia', 100))
    .outputFluids(safeFluidOf('susy:dioctylamine', 50))
    .outputFluids(safeFluidOf('minecraft:water', 100))
    .duration(3)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('skswrm7dpolpy1') // remapped from original line 450
    .itemInputs('8x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:dioctylamine', 2000))
    .itemInputs('13x #forge:dusts/chloroacetic_anhydride')
    .outputFluids(safeFluidOf('susy:tetraoctyl_diglycolamide', 1000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(400)
    .EUt(480)

  event.recipes.susy.trickle_bed_reactor('tjj6mgpvni1q9t') // remapped from original line 462
    .circuit(1)
    .notConsumable('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('susy:n_octanol', 150))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:trioctylamine', 50))
    .outputFluids(safeFluidOf('minecraft:water', 150))
    .duration(3)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('6zghox2unslf9t') // remapped from original line 474
    .inputFluids(safeFluidOf('susy:n_butanol', 150))
    .inputFluids(safeFluidOf('susy:phosphoryl_chloride', 50))
    .outputFluids(safeFluidOf('susy:acidic_tributyl_phosphate', 200))
    .duration(3)
    .EUt(120)

  event.recipes.susy.batch_reactor('sgiab1v9n7lwux') // remapped from original line 482
    .itemInputs('9x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:acidic_tributyl_phosphate', 4000))
    .outputFluids(safeFluidOf('susy:tributyl_phosphate', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .duration(100)
    .EUt(120)

  event.recipes.gtceu.centrifuge('dio2p4kxcnmlcs') // remapped from original line 492
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .inputFluids(safeFluidOf('gtceu:butyraldehyde', 2000))
    .outputFluids(safeFluidOf('susy:two_ethyl_two_hexenal', 3000))
    .outputFluids(safeFluidOf('susy:diluted_sodium_hydroxide_solution', 1000))
    .duration(60)
    .EUt(120)

  event.recipes.gtceu.distillery('qqeqoxilslovaa') // remapped from original line 501
    .inputFluids(safeFluidOf('susy:diluted_sodium_hydroxide_solution', 2000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('4x #forge:dusts/sodium_hydroxide')
    .duration(100)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('quhn4lkgcxttrv') // remapped from original line 509
    .notConsumable('1x #forge:catalysts/bed_cobalt')
    .inputFluids(safeFluidOf('susy:two_ethyl_two_hexenal', 100))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 200))
    .outputFluids(safeFluidOf('susy:two_ethylhexanol', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('8yqnwdsdnxtp0m') // remapped from original line 518
    .itemInputs('7x #forge:dusts/phosphorus_pentoxide')
    .inputFluids(safeFluidOf('susy:two_ethylhexanol', 6000))
    .outputFluids(safeFluidOf('susy:two_ethylhexyl_phosphoric_acid_mix', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.centrifuge('ljou4yfknpg59r') // remapped from original line 526
    .inputFluids(safeFluidOf('susy:two_ethylhexyl_phosphoric_acid_mix', 2000))
    .inputFluids(safeFluidOf('gtceu:hexane', 1000))
    .outputFluids(safeFluidOf('susy:mono_two_ethylhexyl_phosphoric_acid', 1000))
    .outputFluids(safeFluidOf('susy:di_two_ethylhexyl_phosphoric_acid_solution', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.distillation_tower('c5mksh10ervrur') // remapped from original line 535
    .inputFluids(safeFluidOf('susy:di_two_ethylhexyl_phosphoric_acid_solution', 2000))
    .outputFluids(safeFluidOf('susy:di_two_ethylhexyl_phosphoric_acid', 1000))
    .outputFluids(safeFluidOf('gtceu:hexane', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.mixer('f6ay771urvmvaj') // remapped from original line 544
    .itemInputs('5x #forge:dusts/yttrium_oxide')
    .itemInputs('5x #forge:dusts/neodymium_oxide')
    .itemInputs('3x #forge:dusts/manganese_dioxide')
    .itemOutputs('13x #forge:dusts/rare_earth_catalyst_y_nd')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.large_chemical_reactor('fp2eb1htgw4shp') // remapped from original line 554
    .itemInputs('16x #forge:dusts/chromium_trioxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 15000))
    .inputFluids(safeFluidOf('gtceu:acetone', 1000))
    .inputFluids(safeFluidOf('susy:n_decanol', 3000))
    .outputFluids(safeFluidOf('susy:chromium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:capric_acid', 3000))
    .duration(300)
    .EUt(480)

  event.recipes.susy.batch_reactor('ak8vxaybh8jjcl') // remapped from original line 566
    .itemInputs('16x #forge:dusts/chromium_trioxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 6000))
    .inputFluids(safeFluidOf('gtceu:acetone', 1000))
    .inputFluids(safeFluidOf('susy:n_dodecanol', 3000))
    .outputFluids(safeFluidOf('susy:chromium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:lauric_acid', 3000))
    .duration(300)
    .EUt(480)

  event.recipes.gtceu.large_chemical_reactor('9nwhgcipradqwf') // remapped from original line 577
    .notConsumable('1x #forge:dusts/rare_earth_catalyst_y_nd')
    .inputFluids(safeFluidOf('susy:lauric_acid', 1000))
    .inputFluids(safeFluidOf('susy:capric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:nitrogen', 2000))
    .outputFluids(safeFluidOf('susy:diluted_primary_amine_n', 2000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .duration(300)
    .EUt(480)

  event.recipes.susy.vacuum_distillation('samyaluzqpxnpm') // remapped from original line 588
    .inputFluids(safeFluidOf('susy:diluted_primary_amine_n', 1000))
    .outputFluids(safeFluidOf('susy:primary_amine_n', 400))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('g5o5zfcxcv9irm') // remapped from original line 596
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .inputFluids(safeFluidOf('gtceu:butyraldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .outputFluids(safeFluidOf('susy:n_butanol', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('zugymapaynsrq5') // remapped from original line 605
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('susy:diethylene_glycol', 50))
    .inputFluids(safeFluidOf('susy:n_butanol', 100))
    .outputFluids(safeFluidOf('susy:dibutyl_carbitol', 50))
    .outputFluids(safeFluidOf('susy:very_diluted_sulfuric_acid', 150))
    .duration(5)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('4hvykcq1o3kzdu') // remapped from original line 615
    .inputFluids(safeFluidOf('susy:hydrobromic_acid', 50))
    .inputFluids(safeFluidOf('susy:n_octanol', 50))
    .outputFluids(safeFluidOf('susy:bromooctane', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('5wlwmm264hoaxq') // remapped from original line 624
    .inputFluids(safeFluidOf('susy:bromooctane', 2000))
    .itemInputs('1x #forge:dusts/lithium')
    .itemInputs('1x #forge:dusts/copper')
    .outputFluids(safeFluidOf('susy:lithium_dioctylcopper', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.batch_reactor('4foczq4p02fxm1') // remapped from original line 633
    .inputFluids(safeFluidOf('susy:capric_acid', 1000))
    .inputFluids(safeFluidOf('susy:thionyl_chloride', 1000))
    .outputFluids(safeFluidOf('susy:decanoyl_chloride', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.continuous_stirred_tank_reactor('9t2bpmi596cges') // remapped from original line 643
    .inputFluids(safeFluidOf('susy:lithium_dioctylcopper', 100))
    .inputFluids(safeFluidOf('susy:decanoyl_chloride', 100))
    .outputFluids(safeFluidOf('susy:nine_octadecanone', 150))
    .duration(15)
    .EUt(120)

  event.recipes.susy.batch_reactor('emgi528tiy6lgv') // remapped from original line 651
    .inputFluids(safeFluidOf('susy:diborane', 500))
    .itemInputs('6x #forge:dusts/sodium_cyanide')
    .itemOutputs('14x #forge:dusts/sodium_cyanoborohydride')
    .duration(160)
    .EUt(120)

  event.recipes.gtceu.large_chemical_reactor('sy1ze31tk6pskm') // remapped from original line 659
    .itemInputs('7x #forge:dusts/sodium_cyanoborohydride')
    .inputFluids(safeFluidOf('susy:nine_octadecanone', 3000))
    .inputFluids(safeFluidOf('susy:ammonium_chloride_solution', 1000))
    .outputFluids(safeFluidOf('susy:tri_octyl_decyl_amine', 1000))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(300)
    .EUt(480)

  event.recipes.susy.polymerization_tank('tfqhcawio1tqaa') // remapped from original line 671
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:styrene', 1000))
    .inputFluids(safeFluidOf('susy:divinylbenzene', 1000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:crosslinked_polystyrene', 288))
    .EUt(120)
    .duration(160)

  event.recipes.susy.continuous_stirred_tank_reactor('ymr0ippajo9ghu') // remapped from original line 681
    .notConsumable(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ethylbenzene', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .outputFluids(safeFluidOf('susy:diethylbenzene', 50))
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.chemical_bath('ep6wptvzzqojgr') // remapped from original line 690
    .itemInputs('32x #forge:rounds/crosslinked_polystyrene')
    .inputFluids(safeFluidOf('susy:oleum', 1100))
    .itemOutputs(safeItemId('1x susy:beads.ag_fifty_w_x_eight'))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.susy.fluidized_bed_reactor('3xyuywxzkkbtht') // remapped from original line 699
    .inputFluids(safeFluidOf('susy:diethylbenzene', 1000))
    .notConsumable('1x #forge:dusts/chromium_trioxide')
    .outputFluids(safeFluidOf('susy:divinylbenzene', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 4000))
    .duration(300)
    .EUt(120)

  event.recipes.susy.polymerization_tank('3b8ffwdb9gwaut') // remapped from original line 710
    .itemInputs('1x #forge:dusts/palladium')
    .inputFluids(safeFluidOf('gtceu:styrene', 1000))
    .inputFluids(safeFluidOf('susy:divinylbenzene', 1000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:palladium_doped_crosslinked_polystyrene', 288))
    .EUt(120)
    .duration(160)

  event.recipes.susy.continuous_stirred_tank_reactor('mz2hubmzh1yhbr') // remapped from original line 720
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 5))
    .outputFluids(safeFluidOf('susy:oleum', 55))
    .duration(4)
    .EUt(30)

  event.recipes.gtceu.mixer('ab4rld7ghpmbgv') // remapped from original line 728
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 100))
    .outputFluids(safeFluidOf('susy:oleum', 1100))
    .duration(80)
    .EUt(120)

  event.recipes.gtceu.chemical_bath('m8dur3jfour2so') // remapped from original line 736
    .itemInputs('32x #forge:rounds/palladium_doped_crosslinked_polystyrene')
    .inputFluids(safeFluidOf('susy:oleum', 1100))
    .itemOutputs(safeItemId('1x susy:beads.amberlyst_ch'))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .EUt(120)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('zm3m12wfkthe6c') // remapped from original line 745
    .notConsumable(safeItemId('1x susy:beads.amberlyst_ch'))
    .inputFluids(safeFluidOf('gtceu:acetone', 2000))
    .inputFluids(safeFluidOf('susy:hot_hp_hydrogen', 2000))
    .outputFluids(safeFluidOf('susy:diluted_methyl_isobutyl_ketone', 2000))
    .duration(300)
    .EUt(480)

  event.recipes.gtceu.distillation_tower('yehurhesi7ryp6') // remapped from original line 754
    .inputFluids(safeFluidOf('susy:diluted_methyl_isobutyl_ketone', 2000))
    .outputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('lhnt3xbqgogcsi') // remapped from original line 762
    .notConsumable('1x #forge:catalysts/bed_copper')
    .inputFluids(safeFluidOf('susy:methyl_isobutyl_ketone', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .outputFluids(safeFluidOf('susy:methyl_isobutyl_carbinol', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('k5xmdhvqach07x') // remapped from original line 773
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('susy:n_butanol', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:n_butylamine', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(3)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('seyw80nbtomddx') // remapped from original line 783
    .itemInputs('6x #forge:dusts/silicon_dioxide')
    .itemInputs('51x #forge:dusts/aluminium_sulfate')
    .itemInputs('1x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .inputFluids(safeFluidOf('susy:demineralized_water', 1800))
    .inputFluids(safeFluidOf('susy:n_butylamine', 100))
    .itemOutputs('1x #forge:dusts/hzsm_five')
    .duration(500)
    .EUt(480)

  event.recipes.susy.fixed_bed_reactor('k3wiodjpgopzhs') // remapped from original line 795
    .notConsumable('1x #forge:catalysts/bed_hzsm_five')
    .inputFluids(safeFluidOf('gtceu:toluene', 50))
    .inputFluids(safeFluidOf('gtceu:ethylene', 50))
    .outputFluids(safeFluidOf('susy:ethyltoluene', 50))
    .duration(5)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('xjn6tawb4p92kl') // remapped from original line 804
    .inputFluids(safeFluidOf('gtceu:chlorine', 50))
    .inputFluids(safeFluidOf('susy:ethyltoluene', 50))
    .notConsumable(safeFluidOf('susy:zinc_chloride_solution', 1000))
    .notConsumable(safeFluidOf('susy:formaldehyde', 1000))
    .outputFluids(safeFluidOf('susy:vinylbenzyl_chloride', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .duration(5)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('8pg6rvignqfwiu') // remapped from original line 815
    .inputFluids(safeFluidOf('gtceu:aluminium', 144))
    .itemInputs('1x #forge:dusts/cobalt')
    .itemInputs('1x #forge:dusts/tiny_zinc')
    .itemOutputs('2x #forge:dusts/raney_cobalt')
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('svahsvf663gbic') // remapped from original line 824
    .itemInputs('4x #forge:dusts/raney_cobalt')
    .itemInputs('6x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 6000))
    .itemOutputs('2x #forge:dusts/activated_raney_cobalt')
    .itemOutputs('20x #forge:dusts/sodium_aluminate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .duration(240)
    .EUt(voltAmps[1])

  // Contains GTFO resources
  //event.recipes.susy.trickle_bed_reactor('covtulqzgmuikx') // remapped from original line 835
    //.inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    //.inputFluids(safeFluidOf('susy:gtfo_aniline', 50))
    //.notConsumable('1x #forge:dusts/activated_raney_cobalt')
    //.outputFluids(safeFluidOf('susy:cyclohexylamine', 50))
    //.duration(20)
    //.EUt(voltAmps[1])

  event.recipes.susy.polymerization_tank('q3b4txr2vz7pst') // remapped from original line 844
    .inputFluids(safeFluidOf('susy:vinylbenzyl_chloride', 100))
    .inputFluids(safeFluidOf('gtceu:styrene', 900))
    .inputFluids(safeFluidOf('susy:divinylbenzene', 1000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:functionalizable_crosslinked_polystyrene', 288))
    .EUt(120)
    .duration(160)

  event.recipes.gtceu.chemical_bath('svpdss438pu62q') // remapped from original line 854
    .itemInputs('32x #forge:rounds/functionalizable_crosslinked_polystyrene')
    .inputFluids(safeFluidOf('susy:cyclohexylamine', 100))
    .itemOutputs(safeItemId('1x susy:beads.rhenium_ion_exchange'))
    .EUt(120)
    .duration(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // FBR = recipemap('fixed_bed_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // BR = recipemap('batch_reactor')
  // POLYMERIZATION = recipemap('polymerization_tank')
  // FLUIDIZEDBR = recipemap('fluidized_bed_reactor')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
  // ROASTER = recipemap('roaster')
  // CRYSTALLIZER = recipemap('crystallizer')
  // MIXER = recipemap('mixer')
  // DRYER = recipemap('dryer')
  // CHEMICAL_BATH = recipemap('chemical_bath')
  // CENTRIFUGE = recipemap('centrifuge')
  // PYROLYSE = recipemap('pyrolyse_oven')
  // LCR = recipemap('large_chemical_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // VULCANIZER = recipemap('vulcanizing_press')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // ARC_FURNACE = recipemap('arc_furnace')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // AUTOCLAVE = recipemap('autoclave')
  // COMPRESSOR = recipemap('compressor')
  // ASSEMBLER = recipemap('assembler')
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // ELECTROMAGNETIC_SEPARATOR = recipemap('electromagnetic_separator')
  // PSA = recipemap('pressure_swing_adsorption')
  // SINTERING_OVEN = recipemap('sintering_oven')
  // EXTRACTOR = recipemap('extractor')
  // furnace.add(metaitem('gregtechfoodoption:component.coconut'), metaitem('copra'))
});