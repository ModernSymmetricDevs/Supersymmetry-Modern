ServerEvents.recipes(event => {

  event.recipes.gtceu.autoclave('r9zl2dr2hq9h94') // remapped from original line 10
    .itemInputs('1x #forge:dusts/wood')
    .inputFluids(safeFluidOf('susy:white_liquor', 1000))
    .itemOutputs('1x #forge:dusts/raw_cellulose')
    .outputFluids(safeFluidOf('susy:black_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.autoclave('qmoj5yamsounso') // remapped from original line 19
    .itemInputs(safeItemId('5x susy:stem.cotton'))
    .inputFluids(safeFluidOf('susy:white_liquor', 1000))
    .itemOutputs('1x #forge:dusts/raw_cellulose')
    .outputFluids(safeFluidOf('susy:black_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('0eazbkkewytxeg') // remapped from original line 28
    .itemInputs('1x #forge:dusts/raw_cellulose')
    .inputFluids(safeFluidOf('minecraft:water', 250))
    .itemOutputs('1x #forge:dusts/cellulose')
    .outputFluids(safeFluidOf('susy:black_liquor', 250))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('zpvkyvgimrtwps') // remapped from original line 37
    .itemInputs('1x #forge:dusts/cellulose')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs(safeItemId('8x minecraft:paper'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.chemical_bath('hum6wymofhdo7j') // remapped from original line 45
    .itemInputs('1x #forge:dusts/cellulose')
    .inputFluids(safeFluidOf('gtceu:distilled_water', 1000))
    .itemOutputs(safeItemId('8x minecraft:paper'))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.distillation_tower('nsls49bxniiack') // remapped from original line 53
    .inputFluids(safeFluidOf('susy:black_liquor', 1250))
    .outputFluids(safeFluidOf('susy:concentrated_black_liquor', 1000))
    .outputFluids(safeFluidOf('gtceu:resin', 250))
    .duration(200)
    .EUt(30)

  event.recipes.susy.roaster('qgodfvfpvkss9l') // remapped from original line 61
    .itemInputs('2x #forge:dusts/carbon')
    .inputFluids(safeFluidOf('susy:concentrated_black_liquor', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .outputFluids(safeFluidOf('susy:green_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('honfydns0tfqfz') // remapped from original line 70
    .itemInputs('2x #forge:dusts/quicklime')
    .inputFluids(safeFluidOf('susy:green_liquor', 1000))
    .itemOutputs('5x #forge:dusts/limestone')
    .outputFluids(safeFluidOf('susy:white_liquor', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.mixer('ccwyhco8izhvjo') // remapped from original line 79
    .itemInputs('3x #forge:dusts/sodium_sulfide')
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:white_liquor', 1000))
    .duration(200)
    .EUt(30)
});