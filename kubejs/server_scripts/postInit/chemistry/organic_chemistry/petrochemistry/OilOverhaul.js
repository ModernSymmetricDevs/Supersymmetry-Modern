ServerEvents.recipes(event => {

  event.recipes.susy.electrostatic_separator('bmr06n7wwykjnb') // remapped from original line 164
    .inputFluids(safeFluidOf('susy:diluted_oil', 1000))
    .outputFluids(safeFluidOf('susy:oily_brine', 100))
    .outputFluids(safeFluidOf('susy:desalted_oil', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.electrostatic_separator('fk89kqjpwxqgmw') // remapped from original line 172
    .inputFluids(safeFluidOf('susy:diluted_oil_light', 1000))
    .outputFluids(safeFluidOf('susy:light_oily_brine', 100))
    .outputFluids(safeFluidOf('susy:desalted_oil_light', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.susy.electrostatic_separator('8tqs80upwr9y6m') // remapped from original line 180
    .inputFluids(safeFluidOf('susy:diluted_oil_heavy', 1000))
    .outputFluids(safeFluidOf('susy:heavy_oily_brine', 100))
    .outputFluids(safeFluidOf('susy:desalted_oil_heavy', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.centrifuge('8hbrwqihy9gpij') // remapped from original line 188
    .inputFluids(safeFluidOf('susy:oily_brine', 1000))
    .outputFluids(safeFluidOf('susy:desalted_oil', 200))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.centrifuge('9f1x6mpzbrluww') // remapped from original line 196
    .inputFluids(safeFluidOf('susy:light_oily_brine', 1000))
    .outputFluids(safeFluidOf('susy:desalted_oil_light', 200))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.centrifuge('qcjeo3gbz5c6x3') // remapped from original line 204
    .inputFluids(safeFluidOf('susy:heavy_oily_brine', 1000))
    .outputFluids(safeFluidOf('susy:desalted_oil_heavy', 200))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .duration(160)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('tnkv0q5e2k7qhr') // remapped from original line 212
    .inputFluids(oils.oil.getDesalted1000)
    .outputFluids(safeFluidOf('susy:sulfuric_oil_residue', 150))
    .outputFluids(fractions.fuel_oil.getSulfuric150)
    .outputFluids(fractions.diesel.getSulfuric200)
    .outputFluids(fractions.kerosene.getSulfuric100)
    .outputFluids(fractions.naphtha.getSulfuric200)
    .outputFluids(fractions.gasoline.getSulfuric100)
    .outputFluids(fractions.refinery_gas.getSulfuric500)
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('blnvza5wgdhjab') // remapped from original line 225
    .inputFluids(oils.oil_light.getDesalted1000)
    .outputFluids(safeFluidOf('susy:sulfuric_oil_residue', 50))
    .outputFluids(fractions.fuel_oil.getSulfuric100)
    .outputFluids(fractions.diesel.getSulfuric150)
    .outputFluids(fractions.kerosene.getSulfuric100)
    .outputFluids(fractions.naphtha.getSulfuric250)
    .outputFluids(fractions.gasoline.getSulfuric150)
    .outputFluids(fractions.refinery_gas.getSulfuric1000)
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('siwjz2b0h7xkzn') // remapped from original line 238
    .inputFluids(oils.oil_heavy.getDesalted1000)
    .outputFluids(safeFluidOf('susy:sulfuric_oil_residue', 300))
    .outputFluids(fractions.fuel_oil.getSulfuric200)
    .outputFluids(fractions.diesel.getSulfuric150)
    .outputFluids(fractions.kerosene.getSulfuric100)
    .outputFluids(fractions.naphtha.getSulfuric100)
    .outputFluids(fractions.gasoline.getSulfuric50)
    .outputFluids(fractions.refinery_gas.getSulfuric250)
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.centrifuge('qpkvmndx5bee3l') // remapped from original line 273
    .inputFluids(safeFluidOf('susy:sour_gas', 3000))
    .inputFluids(safeFluidOf('susy:ethanolamine_mix', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .outputFluids(safeFluidOf('susy:rich_amine', 1000))
    .duration(120)
    .EUt(120)

  event.recipes.gtceu.centrifuge('9dxrngfffbyjtj') // remapped from original line 282
    .inputFluids(safeFluidOf('susy:rich_amine', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .outputFluids(safeFluidOf('susy:ethanolamine_mix', 1000))
    .duration(160)
    .EUt(120)

  event.recipes.susy.reaction_furnace('dzywvlr8s9hfqc') // remapped from original line 290
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 3000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 3000))
    .outputFluids(safeFluidOf('susy:uncatalyzed_sulfurous_gases', 3000))
    .itemOutputs('1x #forge:dusts/sulfur')
    .duration(300)
    .EUt(30)

  event.recipes.susy.reaction_furnace('3hsbq1w7yo8mjr') // remapped from original line 299
    .inputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 3000))
    .inputFluids(safeFluidOf('gtceu:air', 9000))
    .outputFluids(safeFluidOf('susy:uncatalyzed_sulfurous_gases', 3000))
    .itemOutputs('1x #forge:dusts/sulfur')
    .duration(300)
    .EUt(30)

  event.recipes.susy.reaction_furnace('11xoytdtixn9zu') // remapped from original line 308
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('susy:uncatalyzed_sulfurous_gases', 3000))
    .outputFluids(safeFluidOf('gtceu:steam', 2000))
    .itemOutputs('2x #forge:dusts/sulfur')
    .duration(300)
    .EUt(30)

  event.recipes.gtceu.centrifuge('cliaox0q4l2n1j') // remapped from original line 319
    .inputFluids(safeFluidOf('susy:crude_natural_gas', 1000))
    .outputFluids(safeFluidOf('gtceu:oil', 50))
    .outputFluids(safeFluidOf('susy:sulfuric_natural_gas', 1000))
    .duration(400)
    .EUt(30)

  event.recipes.susy.vacuum_distillation('gtuszoddezgjiq') // remapped from original line 330
    .inputFluids(safeFluidOf('susy:sulfuric_oil_residue', 1000))
    .itemOutputs(safeItemId('1x susy:bituminous_residue'))
    .outputFluids(safeFluidOf('susy:crude_lubricating_oil', 850))
    .outputFluids(fractions.fuel_oil.getSulfuric200)
    .outputFluids(fractions.diesel.getSulfuric200)
    .outputFluids(fractions.kerosene.getSulfuric150)
    .outputFluids(fractions.naphtha.getSulfuric100)
    .duration(400)
    .EUt(30)

  event.recipes.susy.crystallizer('f9cf09mwcp4nsg') // remapped from original line 344
    .inputFluids(safeFluidOf('susy:slack_wax', 1000))
    .outputFluids(safeFluidOf('susy:lubricating_oil', 250))
    .itemOutputs(safeItemId('4x susy:paraffin_wax'))
    .duration(400)
    .EUt(30)

  event.recipes.gtceu.extractor('x4ysynzwchownh') // remapped from original line 358
    .itemInputs(safeItemId('1x susy:paraffin_wax'))
    .circuit(1)
    .outputFluids(safeFluidOf('susy:lubricating_oil', 250))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.extractor('qdmxw5uio2lhb1') // remapped from original line 366
    .itemInputs(safeItemId('1x susy:paraffin_wax'))
    .circuit(2)
    .outputFluids(safeFluidOf('gtceu:resin', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('rm2gy9icvaxdsk') // remapped from original line 376
    .inputFluids(safeFluidOf('gtceu:oil', 500))
    .itemInputs(safeItemId('1x susy:bitumen'))
    .outputFluids(safeFluidOf('susy:bitumen_solution', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.centrifuge('jlhyd1h3jb6vgh') // remapped from original line 384
    .inputFluids(safeFluidOf('susy:bitumen_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:oil', 650))
    .itemOutputs('4x #forge:dusts/asphalt')
    .duration(300)
    .EUt(voltAmps[0])

  event.recipes.gtceu.mixer('huwlhs8ouw7krr') // remapped from original line 392
    .inputFluids(safeFluidOf('gtceu:oil_light', 500))
    .itemInputs(safeItemId('1x susy:bitumen'))
    .outputFluids(safeFluidOf('susy:light_bitumen_solution', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.centrifuge('btkmzdyswyjtux') // remapped from original line 400
    .inputFluids(safeFluidOf('susy:light_bitumen_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:oil_light', 650))
    .itemOutputs('4x #forge:dusts/asphalt')
    .duration(300)
    .EUt(voltAmps[0])

  event.recipes.gtceu.mixer('aws3zglzquf2ql') // remapped from original line 408
    .inputFluids(safeFluidOf('gtceu:oil_heavy', 500))
    .itemInputs(safeItemId('1x susy:bitumen'))
    .outputFluids(safeFluidOf('susy:heavy_bitumen_solution', 1000))
    .duration(200)
    .EUt(voltAmps[1])

  event.recipes.gtceu.centrifuge('sslwyagyni46ra') // remapped from original line 416
    .inputFluids(safeFluidOf('susy:heavy_bitumen_solution', 1000))
    .outputFluids(safeFluidOf('gtceu:oil_heavy', 650))
    .itemOutputs('4x #forge:dusts/asphalt')
    .duration(300)
    .EUt(voltAmps[0])

  event.recipes.gtceu.mixer('dmko0a48zbbld0') // remapped from original line 424
    .itemInputs('1x #forge:dusts/asphalt')
    .inputFluids(safeFluidOf('gtceu:concrete', 144))
    .itemOutputs(safeItemId('2x gregtech:asphalt'))
    .duration(30)
    .EUt(16)

  event.recipes.susy.coking_tower('qfn0gvlys4skin') // remapped from original line 434
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .itemInputs(safeItemId('1x susy:bituminous_residue'))
    .outputFluids(safeFluidOf('susy:sulfuric_oil_residue', 150))
    .itemOutputs('4x #forge:dusts/green_coke')
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.roaster('e1teqfxg7mxmom') // remapped from original line 471
    .inputFluids(safeFluidOf('gtceu:ethane', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:steamcracked_ethane', 700))
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('iacuxfnudluxyq') // remapped from original line 479
    .inputFluids(safeFluidOf('gtceu:propane', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:steamcracked_propane', 700))
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.susy.roaster('lays1urp67scqr') // remapped from original line 487
    .inputFluids(safeFluidOf('gtceu:butane', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:steamcracked_butane', 700))
    .duration(300)
    .EUt(voltAmps[1])

  event.recipes.gtceu.cracker('kfcae5fquod7ni') // remapped from original line 495
    .inputFluids(safeFluidOf('gtceu:ethane', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:steamcracked_ethane', 1000))
    .duration(80)
    .EUt(voltAmps[2])

  event.recipes.gtceu.cracker('cdqygpsnpwoien') // remapped from original line 503
    .inputFluids(safeFluidOf('gtceu:propane', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:steamcracked_propane', 1000))
    .duration(80)
    .EUt(voltAmps[2])

  event.recipes.gtceu.cracker('k0vaht7oymvhxc') // remapped from original line 511
    .inputFluids(safeFluidOf('gtceu:butane', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:steamcracked_butane', 1000))
    .duration(80)
    .EUt(voltAmps[2])

  event.recipes.gtceu.distillation_tower('god3puldshsmjp') // remapped from original line 519
    .inputFluids(safeFluidOf('susy:steamcracked_ethane', 1000))
    .outputFluids(safeFluidOf('gtceu:butadiene', 50))
    .outputFluids(safeFluidOf('gtceu:propene', 50))
    .outputFluids(safeFluidOf('gtceu:ethylene', 800))
    .outputFluids(safeFluidOf('gtceu:methane', 50))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 50))
    .duration(160)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('p6rgibrs12mrfv') // remapped from original line 530
    .inputFluids(safeFluidOf('susy:steamcracked_propane', 1000))
    .outputFluids(safeFluidOf('gtceu:butadiene', 50))
    .outputFluids(safeFluidOf('gtceu:propene', 150))
    .outputFluids(safeFluidOf('gtceu:ethylene', 500))
    .outputFluids(safeFluidOf('gtceu:methane', 150))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 150))
    .duration(160)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('baakv4u6tr9h3f') // remapped from original line 541
    .inputFluids(safeFluidOf('susy:steamcracked_butane', 1000))
    .outputFluids(safeFluidOf('gtceu:butadiene', 150))
    .outputFluids(safeFluidOf('gtceu:propene', 250))
    .outputFluids(safeFluidOf('gtceu:ethylene', 350))
    .outputFluids(safeFluidOf('gtceu:methane', 150))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .duration(160)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('iog2w4rjjiy9xu') // remapped from original line 552
    .inputFluids(safeFluidOf('susy:fuel_oil', 1000))
    .outputFluids(safeFluidOf('gtceu:hexane', 300))
    .outputFluids(safeFluidOf('susy:pentane', 250))
    .outputFluids(safeFluidOf('gtceu:butane', 200))
    .outputFluids(safeFluidOf('gtceu:propane', 150))
    .outputFluids(safeFluidOf('gtceu:ethane', 100))
    .outputFluids(safeFluidOf('gtceu:methane', 100))
    .duration(160)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('pkewiuobtjfex9') // remapped from original line 564
    .inputFluids(safeFluidOf('gtceu:diesel', 1000))
    .outputFluids(safeFluidOf('gtceu:hexane', 150))
    .outputFluids(safeFluidOf('susy:pentane', 200))
    .outputFluids(safeFluidOf('gtceu:butane', 300))
    .outputFluids(safeFluidOf('gtceu:propane', 200))
    .outputFluids(safeFluidOf('gtceu:ethane', 100))
    .outputFluids(safeFluidOf('gtceu:methane', 100))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('yjanbxxw4uwsqu') // remapped from original line 576
    .inputFluids(safeFluidOf('susy:kerosene', 1000))
    .outputFluids(safeFluidOf('gtceu:hexane', 100))
    .outputFluids(safeFluidOf('susy:pentane', 150))
    .outputFluids(safeFluidOf('gtceu:butane', 250))
    .outputFluids(safeFluidOf('gtceu:propane', 250))
    .outputFluids(safeFluidOf('gtceu:ethane', 200))
    .outputFluids(safeFluidOf('gtceu:methane', 100))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('ea4lcmlbhyjsim') // remapped from original line 588
    .inputFluids(safeFluidOf('gtceu:naphtha', 1000))
    .outputFluids(safeFluidOf('gtceu:hexane', 100))
    .outputFluids(safeFluidOf('susy:pentane', 150))
    .outputFluids(safeFluidOf('gtceu:butane', 200))
    .outputFluids(safeFluidOf('gtceu:propane', 300))
    .outputFluids(safeFluidOf('gtceu:ethane', 250))
    .outputFluids(safeFluidOf('gtceu:methane', 150))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('rpxkkrcwmbqad9') // remapped from original line 600
    .inputFluids(safeFluidOf('gtceu:gasoline', 1000))
    .outputFluids(safeFluidOf('gtceu:hexane', 100))
    .outputFluids(safeFluidOf('susy:pentane', 100))
    .outputFluids(safeFluidOf('gtceu:butane', 150))
    .outputFluids(safeFluidOf('gtceu:propane', 200))
    .outputFluids(safeFluidOf('gtceu:ethane', 300))
    .outputFluids(safeFluidOf('gtceu:methane', 250))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.continuous_stirred_tank_reactor('rrovuvtscv52mh') // remapped from original line 614
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 250))
    .inputFluids(safeFluidOf('gtceu:natural_gas', 50))
    .outputFluids(safeFluidOf('susy:alkylated_natural_gas', 300))
    .duration(5)
    .EUt(voltAmps[1])

  event.recipes.susy.continuous_stirred_tank_reactor('uvnaohjisjpgkr') // remapped from original line 622
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 250))
    .inputFluids(safeFluidOf('gtceu:refinery_gas', 50))
    .outputFluids(safeFluidOf('susy:alkylated_refinery_gas', 300))
    .duration(5)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('le3hgcru9djfpr') // remapped from original line 630
    .inputFluids(safeFluidOf('susy:alkylated_natural_gas', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 2500))
    .outputFluids(safeFluidOf('gtceu:gasoline', 500))
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('odt8sk6oaop0aj') // remapped from original line 638
    .inputFluids(safeFluidOf('susy:alkylated_refinery_gas', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 2500))
    .outputFluids(safeFluidOf('gtceu:gasoline', 500))
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('esuybseqi2y9h3') // remapped from original line 648
    .inputFluids(safeFluidOf('gtceu:natural_gas', 1000))
    .outputFluids(safeFluidOf('gtceu:butane', 100))
    .outputFluids(safeFluidOf('gtceu:propane', 100))
    .outputFluids(safeFluidOf('gtceu:ethane', 100))
    .outputFluids(safeFluidOf('gtceu:methane', 750))
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('ocmgaftctijmgo') // remapped from original line 658
    .inputFluids(safeFluidOf('susy:liquid_natural_gas', 20))
    .outputFluids(safeFluidOf('gtceu:butane', 128))
    .outputFluids(safeFluidOf('gtceu:propane', 128))
    .outputFluids(safeFluidOf('gtceu:ethane', 128))
    .outputFluids(safeFluidOf('gtceu:methane', 960))
    .outputFluids(safeFluidOf('gtceu:helium', 25))
    .duration(100)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.distillation_tower('jxc3yxiiyuzkcr') // remapped from original line 671
    .inputFluids(safeFluidOf('gtceu:refinery_gas', 1000))
    .outputFluids(safeFluidOf('gtceu:butane', 100))
    .outputFluids(safeFluidOf('gtceu:propane', 100))
    .outputFluids(safeFluidOf('gtceu:ethane', 100))
    .outputFluids(safeFluidOf('gtceu:methane', 750))
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.electric_blast_furnace('4skc1rqdi4ywpb') // remapped from original line 727
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs(safeItemId('4x susy:spent_cracking_catalyst'))
    .outputFluids(safeFluidOf('susy:flue_gas', 1000))
    .itemOutputs(safeItemId('4x susy:cracking_catalyst'))
    .blastFurnaceTemp(1200)
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('7qmculzhbaruv9') // remapped from original line 741
    .inputFluids(fractions.kerosene.getLightlyHydro1000)
    .outputFluids(safeFluidOf('gtceu:gasoline', 600))
    .outputFluids(safeFluidOf('gtceu:naphtha', 100))
    .outputFluids(safeFluidOf('gtceu:butane', 100))
    .outputFluids(safeFluidOf('gtceu:propane', 100))
    .outputFluids(safeFluidOf('gtceu:ethane', 75))
    .outputFluids(safeFluidOf('gtceu:methane', 75))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('lyss871vqecyoi') // remapped from original line 753
    .inputFluids(fractions.kerosene.getSeverelyHydro1000)
    .outputFluids(safeFluidOf('gtceu:gasoline', 200))
    .outputFluids(safeFluidOf('gtceu:naphtha', 250))
    .outputFluids(safeFluidOf('gtceu:butane', 300))
    .outputFluids(safeFluidOf('gtceu:propane', 300))
    .outputFluids(safeFluidOf('gtceu:ethane', 175))
    .outputFluids(safeFluidOf('gtceu:methane', 175))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('kp2k7mfdsfkk3a') // remapped from original line 765
    .inputFluids(fractions.kerosene.getLightlySteam1000)
    .outputFluids(safeFluidOf('gtceu:gasoline', 300))
    .outputFluids(safeFluidOf('gtceu:naphtha', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 25))
    .outputFluids(safeFluidOf('gtceu:benzene', 125))
    .outputFluids(safeFluidOf('gtceu:butene', 25))
    .outputFluids(safeFluidOf('gtceu:butadiene', 15))
    .outputFluids(safeFluidOf('gtceu:propane', 3))
    .outputFluids(safeFluidOf('gtceu:propene', 30))
    .outputFluids(safeFluidOf('gtceu:ethane', 5))
    .outputFluids(safeFluidOf('gtceu:ethylene', 50))
    .outputFluids(safeFluidOf('gtceu:methane', 50))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('g565qujr2krvjl') // remapped from original line 782
    .inputFluids(fractions.kerosene.getSeverelySteam1000)
    .outputFluids(safeFluidOf('gtceu:gasoline', 100))
    .outputFluids(safeFluidOf('gtceu:naphtha', 125))
    .outputFluids(safeFluidOf('gtceu:toluene', 80))
    .outputFluids(safeFluidOf('gtceu:benzene', 125))
    .outputFluids(safeFluidOf('gtceu:butene', 80))
    .outputFluids(safeFluidOf('gtceu:butadiene', 50))
    .outputFluids(safeFluidOf('gtceu:propane', 10))
    .outputFluids(safeFluidOf('gtceu:propene', 100))
    .outputFluids(safeFluidOf('gtceu:ethane', 15))
    .outputFluids(safeFluidOf('gtceu:ethylene', 150))
    .outputFluids(safeFluidOf('gtceu:methane', 150))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('dvmxpmzozqe672') // remapped from original line 801
    .inputFluids(fractions.naphtha.getLightlyHydro1000)
    .outputFluids(safeFluidOf('gtceu:butane', 800))
    .outputFluids(safeFluidOf('gtceu:propane', 300))
    .outputFluids(safeFluidOf('gtceu:ethane', 250))
    .outputFluids(safeFluidOf('gtceu:methane', 250))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('lnkaxmzocymicw') // remapped from original line 811
    .inputFluids(fractions.naphtha.getSeverelyHydro1000)
    .outputFluids(safeFluidOf('gtceu:butane', 125))
    .outputFluids(safeFluidOf('gtceu:propane', 125))
    .outputFluids(safeFluidOf('gtceu:ethane', 1500))
    .outputFluids(safeFluidOf('gtceu:methane', 1500))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('cbtl4dunm7sgtj') // remapped from original line 821
    .inputFluids(fractions.naphtha.getLightlySteam1000)
    .outputFluids(safeFluidOf('susy:kerosene', 75))
    .outputFluids(safeFluidOf('gtceu:gasoline', 150))
    .outputFluids(safeFluidOf('gtceu:toluene', 40))
    .outputFluids(safeFluidOf('gtceu:benzene', 150))
    .outputFluids(safeFluidOf('susy:c_five_fraction', 150))
    .outputFluids(safeFluidOf('gtceu:butene', 80))
    .outputFluids(safeFluidOf('gtceu:butadiene', 150))
    .outputFluids(safeFluidOf('gtceu:propane', 15))
    .outputFluids(safeFluidOf('gtceu:propene', 200))
    .outputFluids(safeFluidOf('gtceu:ethane', 35))
    .outputFluids(safeFluidOf('gtceu:ethylene', 200))
    .outputFluids(safeFluidOf('gtceu:methane', 200))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('pwa3n8aeyztvwi') // remapped from original line 839
    .inputFluids(fractions.naphtha.getSeverelySteam1000)
    .outputFluids(safeFluidOf('susy:kerosene', 25))
    .outputFluids(safeFluidOf('gtceu:gasoline', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 20))
    .outputFluids(safeFluidOf('gtceu:benzene', 100))
    .outputFluids(safeFluidOf('susy:c_five_fraction', 350))
    .outputFluids(safeFluidOf('gtceu:butene', 50))
    .outputFluids(safeFluidOf('gtceu:butadiene', 50))
    .outputFluids(safeFluidOf('gtceu:propane', 15))
    .outputFluids(safeFluidOf('gtceu:propene', 300))
    .outputFluids(safeFluidOf('gtceu:ethane', 65))
    .outputFluids(safeFluidOf('gtceu:ethylene', 500))
    .outputFluids(safeFluidOf('gtceu:methane', 500))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('idqfxwe0gmgf28') // remapped from original line 859
    .inputFluids(fractions.gasoline.getLightlyHydro1000)
    .outputFluids(safeFluidOf('gtceu:naphtha', 800))
    .outputFluids(safeFluidOf('gtceu:butane', 150))
    .outputFluids(safeFluidOf('gtceu:propane', 200))
    .outputFluids(safeFluidOf('gtceu:ethane', 125))
    .outputFluids(safeFluidOf('gtceu:methane', 125))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('p37dbl9g3l417b') // remapped from original line 870
    .inputFluids(fractions.gasoline.getSeverelyHydro1000)
    .outputFluids(safeFluidOf('gtceu:naphtha', 200))
    .outputFluids(safeFluidOf('gtceu:butane', 125))
    .outputFluids(safeFluidOf('gtceu:propane', 125))
    .outputFluids(safeFluidOf('gtceu:ethane', 1500))
    .outputFluids(safeFluidOf('gtceu:methane', 1500))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('ckcjl7l7qguxh6') // remapped from original line 881
    .inputFluids(fractions.gasoline.getLightlySteam1000)
    .outputFluids(safeFluidOf('susy:kerosene', 150))
    .outputFluids(safeFluidOf('gtceu:naphtha', 400))
    .outputFluids(safeFluidOf('gtceu:toluene', 40))
    .outputFluids(safeFluidOf('gtceu:benzene', 200))
    .outputFluids(safeFluidOf('gtceu:butene', 75))
    .outputFluids(safeFluidOf('gtceu:butadiene', 60))
    .outputFluids(safeFluidOf('gtceu:propane', 20))
    .outputFluids(safeFluidOf('gtceu:propene', 150))
    .outputFluids(safeFluidOf('gtceu:ethane', 10))
    .outputFluids(safeFluidOf('gtceu:ethylene', 50))
    .outputFluids(safeFluidOf('gtceu:methane', 50))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.distillation_tower('7pec54nflot5je') // remapped from original line 898
    .inputFluids(fractions.gasoline.getSeverelySteam1000)
    .outputFluids(safeFluidOf('susy:kerosene', 50))
    .outputFluids(safeFluidOf('gtceu:naphtha', 100))
    .outputFluids(safeFluidOf('gtceu:toluene', 30))
    .outputFluids(safeFluidOf('gtceu:benzene', 150))
    .outputFluids(safeFluidOf('gtceu:butene', 65))
    .outputFluids(safeFluidOf('gtceu:butadiene', 50))
    .outputFluids(safeFluidOf('gtceu:propane', 50))
    .outputFluids(safeFluidOf('gtceu:propene', 250))
    .outputFluids(safeFluidOf('gtceu:ethane', 50))
    .outputFluids(safeFluidOf('gtceu:ethylene', 250))
    .outputFluids(safeFluidOf('gtceu:methane', 250))
    .duration(400)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.cracker('nugmdleqqawio5') // remapped from original line 936
    .inputFluids(safeFluidOf('susy:lubricating_oil', 1000))
    .itemInputs(safeItemId('1x susy:cracking_catalyst'))
    .outputFluids(safeFluidOf('susy:upgraded_lubricating_oil_mix', 1000))
    .duration(200)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.centrifuge('okhsnlcgioep88') // remapped from original line 944
    .inputFluids(safeFluidOf('susy:upgraded_lubricating_oil_mix', 1000))
    .outputFluids(safeFluidOf('susy:sulfuric_fuel_oil', 1000))
    .itemOutputs(safeItemId('1x susy:spent_cracking_catalyst'))
    .duration(160)
    .EUt(voltAmps[1])

  event.recipes.susy.catalytic_reformer_recipes('bfytbjt1cdjfmw') // remapped from original line 954
    .inputFluids(safeFluidOf('gtceu:naphtha', 1000))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:naphtha_reformate', 1000))
    .duration(25)
    .EUt(voltAmps[3])

  event.recipes.gtceu.centrifuge('otenyvu2k5v7zt') // remapped from original line 963
    .inputFluids(safeFluidOf('susy:naphtha_reformate', 1000))
    .inputFluids(safeFluidOf('susy:furfural', 100))
    .outputFluids(safeFluidOf('susy:btex_extract', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.centrifuge('nq5qnmypsfqp3c') // remapped from original line 971
    .inputFluids(safeFluidOf('susy:btex_extract', 1000))
    .inputFluids(safeFluidOf('gtceu:steam', 1000))
    .outputFluids(safeFluidOf('susy:furfural', 100))
    .outputFluids(safeFluidOf('susy:btex', 1000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('d3zdlmipnlkadm') // remapped from original line 980
    .inputFluids(safeFluidOf('susy:btex', 1000))
    .outputFluids(safeFluidOf('susy:xylene', 400))
    .outputFluids(safeFluidOf('gtceu:ethylbenzene', 50))
    .outputFluids(safeFluidOf('gtceu:toluene', 400))
    .outputFluids(safeFluidOf('gtceu:benzene', 150))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('fia5ywc1kdg8wk') // remapped from original line 991
    .inputFluids(safeFluidOf('susy:xylene', 1000))
    .outputFluids(safeFluidOf('susy:ortho_xylene', 200))
    .outputFluids(safeFluidOf('susy:meta_para_xylene_mixture', 800))
    .duration(100)
    .EUt(voltAmps[1] * 2)

  event.recipes.susy.crystallizer('cbevtchluklkao') // remapped from original line 999
    .inputFluids(safeFluidOf('susy:meta_para_xylene_mixture', 4000))
    .itemOutputs('1x #forge:dusts/para_xylene')
    .outputFluids(safeFluidOf('susy:meta_xylene', 3000))
    .duration(100)
    .EUt(voltAmps[1])

  event.recipes.gtceu.extractor('kc3ejxk0b3qyct') // remapped from original line 1007
    .itemInputs('1x #forge:dusts/para_xylene')
    .outputFluids(safeFluidOf('susy:para_xylene', 1000))
    .duration(5)
    .EUt(30)

  event.recipes.susy.batch_reactor('tt6ocq3p79dgiw') // remapped from original line 1014
    .itemInputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .inputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .outputFluids(safeFluidOf('susy:propanal_mixture', 1000))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.gtceu.DISTILLERY('e41dv7hsj85pca') // remapped from original line 1024
    .inputFluids(safeFluidOf('susy:propanal_mixture', 1000))
    .itemOutputs('18x #forge:dusts/dicobalt_octacarbonyl')
    .outputFluids(safeFluidOf('susy:propionaldehyde', 800))
    .EUt(voltAmps[3])
    .duration(80)

  event.recipes.susy.fixed_bed_reactor('q1uniddfqsewsf') // remapped from original line 1032
    .inputFluids(safeFluidOf('susy:propionaldehyde', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable('1x #forge:catalysts/bed_platinum')
    .outputFluids(safeFluidOf('susy:n_propanol', 50))
    .EUt(voltAmps[3])
    .duration(4)

  event.recipes.susy.fixed_bed_reactor('nljtjitsvlxlmv') // remapped from original line 1041
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .inputFluids(safeFluidOf('susy:n_propanol', 150))
    .outputFluids(safeFluidOf('susy:tripropylamine', 50))
    .outputFluids(safeFluidOf('minecraft:water', 150))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('bakeryajwfrspm') // remapped from original line 1051
    .notConsumable(safeItemId('1x susy:emitter.lv'))
    .notConsumable(safeFluidOf('susy:hydrogen_peroxide_solution', 50))
    .inputFluids(safeFluidOf('susy:hydrobromic_acid', 1000))
    .inputFluids(safeFluidOf('gtceu:propene', 1000))
    .outputFluids(safeFluidOf('susy:n_bromopropane', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('8dwuvuqxs65iqv') // remapped from original line 1062
    .inputFluids(safeFluidOf('susy:n_bromopropane', 1000))
    .inputFluids(safeFluidOf('susy:tripropylamine', 1000))
    .itemOutputs('1x #forge:dusts/tetrapropylammonium_bromide')
    .duration(5)
    .EUt(120)

  event.recipes.gtceu.large_chemical_reactor('nzf1uvrpsibkqp') // remapped from original line 1070
    .itemInputs('6x #forge:dusts/silicon_dioxide')
    .itemInputs('51x #forge:dusts/aluminium_sulfate')
    .itemInputs('1x #forge:dusts/sodium_hydroxide')
    .itemInputs('1x #forge:dusts/tiny_tetrapropylammonium_bromide')
    .inputFluids(safeFluidOf('gtceu:ethanol', 100))
    .inputFluids(safeFluidOf('susy:demineralized_water', 1800))
    .itemOutputs('1x #forge:dusts/zsm_five')
    .duration(500)
    .EUt(480)

  event.recipes.susy.catalytic_reformer_recipes('fyltby3sldixzh') // remapped from original line 1082
    .notConsumable('1x #forge:catalysts/bed_zsm_five')
    .inputFluids(safeFluidOf('susy:meta_xylene', 1000))
    .outputFluids(safeFluidOf('susy:para_xylene', 1000))
    .duration(60)
    .EUt(voltAmps[1] * 2)

  event.recipes.gtceu.fluid_heater('h4j5uj28fu0us0') // remapped from original line 1094
    .inputFluids(safeFluidOf('susy:c_five_fraction', 1000))
    .outputFluids(safeFluidOf('susy:dimerized_c_five_fraction', 875))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.gtceu.distillation_tower('m5ub0oyrpee4es') // remapped from original line 1101
    .inputFluids(safeFluidOf('susy:dimerized_c_five_fraction', 875))
    .outputFluids(safeFluidOf('susy:dicyclopentadiene', 125))
    .outputFluids(safeFluidOf('susy:pentane', 375))
    .outputFluids(safeFluidOf('gtceu:isoprene', 375))
    .duration(60)
    .EUt(voltAmps[1])

  event.recipes.gtceu.fluid_heater('efjxoxyzppeufu') // remapped from original line 1110
    .inputFluids(safeFluidOf('susy:dicyclopentadiene', 1000))
    .outputFluids(safeFluidOf('susy:cyclopentadiene', 2000))
    .duration(60)
    .EUt(voltAmps[1])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // oils.each { _, oil -> {
  //         MIXER.recipeBuilder()
  //         .fluidInputs(fluid('water') * 100)
  //         .fluidInputs(oil.get(1000))
  //         .fluidOutputs(oil.getDiluted(1000))
  //         .duration(200)
  //         .EUt(30)
  //         .buildAndRegister()
  //     }

  // fractions.each { _, fraction -> {
  //         FBR.recipeBuilder()
  //         .fluidInputs(fraction.getSulfuric(180))
  //         .fluidInputs(fluid('hydrogen') * 45)
  //         .notConsumable(metaitem('catalystBedAlumina'))
  //         .fluidOutputs(fraction.getTreatedSulfuric(180))
  //         .duration(30)
  //         .EUt(30)
  //         .buildAndRegister()
  // 
  //         DT.recipeBuilder()
  //         .fluidInputs(fraction.getTreatedSulfuric(1000))
  //         .fluidOutputs(fraction.get(1000))
  //         .fluidOutputs(fluid('sour_gas') * 250)
  //         .duration(100)
  //         .EUt(30)
  //         .buildAndRegister()
  //     }

  // for (fuel in sintering_fuels) {
  //     if (!fuel.isPlasma) {
  //         for (comburent in sintering_comburents) {
  //             ROTARY_KILN.recipeBuilder()
  //                     .inputs(ore('dustGreenCoke'))
  //                     .outputs(metaitem('dustCoke'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(120)
  //                     .buildAndRegister()
  // 
  //             ROTARY_KILN.recipeBuilder()
  //                     .inputs(metaitem('bituminous_residue'))
  //                     .fluidInputs(fluid(fuel.name) * fuel.amountRequired)
  //                     .fluidInputs(fluid(comburent.name) * comburent.amountRequired)
  //                     .outputs(metaitem('bitumen'))
  //                     .fluidOutputs(fluid(fuel.byproduct) * fuel.byproductAmount)
  //                     .duration(fuel.duration + comburent.duration)
  //                     .EUt(120)
  //                     .buildAndRegister()
  //         }
  //     }
  // }

  // fractions.each { _, fraction -> {
  // 
  //         if (fraction instanceof OilFractionCrackable) {
  // 
  //             CRACKER.recipeBuilder()
  //             .fluidInputs(fraction.get(1000))
  //             .fluidInputs(fluid('hydrogen') * 1000)
  //             .fluidOutputs(fraction.getLightlyHydro(1000))
  //             .duration(200)
  //             .EUt(Globals.voltAmps[1] * 2)
  //             .buildAndRegister()
  //             
  //             CRACKER.recipeBuilder()
  //             .fluidInputs(fraction.get(1000))
  //             .fluidInputs(fluid('hot_hp_hydrogen') * 1000)
  //             .fluidOutputs(fraction.getSeverelyHydro(1000))
  //             .duration(200)
  //             .EUt(Globals.voltAmps[1] * 2)
  //             .buildAndRegister()
  //             
  //             CRACKER.recipeBuilder()
  //             .fluidInputs(fraction.get(1000))
  //             .fluidInputs(fluid('steam') * 1000)
  //             .fluidOutputs(fraction.getLightlySteam(1000))
  //             .duration(200)
  //             .EUt(Globals.voltAmps[1] * 2)
  //             .buildAndRegister()
  //             
  //             CRACKER.recipeBuilder()
  //             .fluidInputs(fraction.get(1000))
  //             .fluidInputs(fluid('hot_hp_steam') * 1000)
  //             .fluidOutputs(fraction.getSeverelySteam(1000))
  //             .duration(200)
  //             .EUt(Globals.voltAmps[1] * 2)
  //             .buildAndRegister()
  //             
  //         }
  // 
  //     }

  // fractions.each { _, fraction -> {
  //         if (fraction.isUpgradable) {
  //             CRACKER.recipeBuilder()
  //             .fluidInputs(fraction.get(1000))
  //             .inputs(metaitem('cracking_catalyst'))
  //             .fluidOutputs(fraction.getUpgradedMix(1000))
  //             .duration(200)
  //             .EUt(Globals.voltAmps[1] * 2)
  //             .buildAndRegister()
  // 
  //             CENTRIFUGE.recipeBuilder()
  //             .fluidInputs(fraction.getUpgradedMix(1000))
  //             .fluidOutputs(fraction.getUpgraded(1000))
  //             .outputs(metaitem('spent_cracking_catalyst'))
  //             .duration(160)
  //             .EUt(Globals.voltAmps[1])
  //             .buildAndRegister()
  //         }
  //     }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // ELECTROSTATIC_SEPARATOR = recipemap('electrostatic_separator')
  // CENTRIFUGE = recipemap('centrifuge')
  // DT = recipemap('distillation_tower')
  // ROASTER = recipemap('roaster')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // CRYSTALLIZER = recipemap('crystallizer')
  // EXTRACTOR = recipemap('extractor')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // COKING = recipemap('coking_tower')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // CRACKER = recipemap('cracker')
  // EBF = recipemap('electric_blast_furnace')
  // REFORMER = recipemap('catalytic_reformer_recipes')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // FBR = recipemap('fixed_bed_reactor')
  // SIFTER = recipemap('sifter')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // BCR = recipemap('bubble_column_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // LCR = recipemap('large_chemical_reactor')
  // AUTOCLAVE = recipemap('autoclave')
  // HEAT_EXCHANGER = recipemap('heat_exchanger')
  // UV_LIGHT_BOX = recipemap('uv_light_box')
  // FLUID_HEATER = recipemap('fluid_heater')
  // class Oil {
  //     String name
  //     Oil(String name) {
  //         this.name = name
  //     }
  //     
  //     def getDiluted(int amount) {
  //         return fluid('diluted_' + this.name) * amount
  //     }
  //     def getDesalted(int amount) {
  //         return fluid('desalted_' + this.name) * amount
  //     }
  //     def get(int amount) {
  //         return fluid(this.name) * amount
  //     }
  // }
  // class OilFraction {
  //     String name
  //     Boolean isUpgradable = false
  //     String upgrade_name = ""
  //     OilFraction(String name) {
  //         this.name = name
  //     }
  //     OilFraction(String name, String upgrade_name) {
  //         this.name = name
  //         this.isUpgradable = true
  //         this.upgrade_name = upgrade_name
  //     }
  //     def getTreatedSulfuric(int amount) {
  //         return fluid('treated_sulfuric_' + this.name) * amount
  //     }
  //     def getSulfuric(int amount) {
  //         return fluid('sulfuric_' + this.name) * amount
  //     }
  //     def getUpgraded(int amount) {
  //         return fluid(this.upgrade_name) * amount
  //     }
  //     def getUpgradedMix(int amount) {
  //         return fluid('upgraded_' + this.name + '_mix') * amount
  //     }
  //     def get(int amount) {
  //         return fluid(this.name) * amount
  //     }
  // }
  // class OilFractionCrackable extends OilFraction {
  //     OilFractionCrackable(String name){
  //         super(name)
  //     }
  //     OilFractionCrackable(String name, String upgrade_name){
  //         super(name, upgrade_name)
  //     }
  //     def getLightlyHydro(int amount) {
  //         return fluid('lightly_hydrocracked_' + this.name) * amount
  //     }
  //     def getSeverelyHydro(int amount) {
  //         return fluid('severely_hydrocracked_' + this.name) * amount
  //     }
  //     def getLightlySteam(int amount) {
  //         return fluid('lightly_steamcracked_' + this.name) * amount
  //     }
  //     def getSeverelySteam(int amount) {
  //         return fluid('severely_steamcracked_' + this.name) * amount
  //     }
  //     def getLightlyHydroMix(int amount) {
  //     return fluid('lightly_hydrocracked_' + this.name + '_mix') * amount
  //     }
  //     def getSeverelyHydroMix(int amount) {
  //         return fluid('severely_hydrocracked_' + this.name + '_mix') * amount
  //     }
  //     def getLightlySteamMix(int amount) {
  //         return fluid('lightly_steamcracked_' + this.name + '_mix') * amount
  //     }
  //     def getSeverelySteamMix(int amount) {
  //         return fluid('severely_steamcracked_' + this.name + '_mix') * amount
  //     }
  // }
  // def fractions = [
  //     fuel_oil : new OilFraction('fuel_oil', 'diesel'),
  //     diesel : new OilFraction('diesel', 'kerosene'),
  //     kerosene : new OilFractionCrackable('kerosene', 'naphtha'),
  //     naphtha : new OilFractionCrackable('naphtha', 'gasoline'),
  //     gasoline : new OilFractionCrackable('gasoline'),
  //     refinery_gas : new OilFraction('refinery_gas'),
  //     natural_gas : new OilFraction('natural_gas')
  // ]
  // def oils = [
  //     oil: new Oil('oil'),
  //     oil_light: new Oil('oil_light'),
  //     oil_heavy: new Oil('oil_heavy') 
  // ]
  // }
  // }
  //     // Solvent Dewaxing
  // crafting.addShaped("treated_wood_planks_paraffin", item('gregtech:planks', 1) * 8, [
  //     [ore('plankWood'),ore('plankWood'),ore('plankWood')],
  //     [ore('plankWood'),metaitem('paraffin_wax'),ore('plankWood')],
  //     [ore('plankWood'),ore('plankWood'),ore('plankWood')]
  // ])
  // }
  // }
  //     // Dimerization of CPD
  //     
});