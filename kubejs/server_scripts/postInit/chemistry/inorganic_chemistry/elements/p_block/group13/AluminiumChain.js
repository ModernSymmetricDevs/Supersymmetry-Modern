const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/ruby'})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/aluminium' && 'susy:circuit.integrated' && safeFluidOf('gtceu:nitrogen')})
  event.remove({ type: 'gtceu:electric_blast_furnace', input: '#forge:dusts/aluminium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:crusheds/ruby' && safeFluidOf('gtceu:aqua_regia')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:crusheds/sapphire' && safeFluidOf('gtceu:aqua_regia')})
  event.remove({ type: 'gtceu:mixer', input: '#forge:crusheds/green_sapphire' && safeFluidOf('gtceu:aqua_regia')})

  event.recipes.gtceu.electric_blast_furnace('tvp8xwylsee6wl') // remapped from original line 22
    .itemInputs('1x #forge:dusts/any_purity_aluminium')
    .itemOutputs('1x #forge:ingots/aluminium')
    .duration(240)
    .blastFurnaceTemp(933)
    .EUt(120)

  event.recipes.susy.roaster('vkiartd2tpq6h1') // remapped from original line 41
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 2000))
    .itemInputs('5x #forge:dusts/bauxite')
    .outputFluids(safeFluidOf('susy:impure_sodium_aluminate_solution', 3000))
    .duration(200)
    .EUt(16)

  event.recipes.gtceu.centrifuge('paxvhune0dtykt') // remapped from original line 49
    .inputFluids(safeFluidOf('susy:impure_sodium_aluminate_solution', 3000))
    .outputFluids(safeFluidOf('susy:sodium_aluminate_solution', 3000))
    .outputFluids(safeFluidOf('susy:red_mud', 500))
    .duration(200)
    .EUt(16)

  event.recipes.susy.crystallizer('rqzwq5w9puw52b') // remapped from original line 59
    .inputFluids(safeFluidOf('susy:sodium_aluminate_solution', 3000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .outputFluids(safeFluidOf('susy:impure_soda_ash_solution', 1000))
    .itemOutputs('14x #forge:dusts/aluminium_hydroxide')
    .duration(300)
    .EUt(20)

  event.recipes.susy.crystallizer('he54isqttgxqz5') // remapped from original line 69
    .inputFluids(safeFluidOf('susy:sodium_aluminate_solution', 1500))
    .inputFluids(safeFluidOf('minecraft:water', 1500))
    .notConsumable('1x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:impure_sodium_hydroxide_solution', 1000)) //TO GALLIUM PROCESSING
    .itemOutputs('7x #forge:dusts/aluminium_hydroxide')
    .duration(300)
    .EUt(16)

  event.recipes.gtceu.electric_blast_furnace('u6u3gvb8pikscf') // remapped from original line 81
    .itemInputs('14x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 3000))
    .itemOutputs('5x #forge:dusts/alumina')
    .duration(100)
    .blastFurnaceTemp(1400)
    .EUt(40)

  event.recipes.gtceu.electrolytic_cell('gupogmaxdodeyc') // remapped from original line 92
    .notConsumable(safeFluidOf('susy:cryolite', 2592))
    .itemInputs('10x #forge:dusts/alumina')
    .itemInputs('1x #forge:dusts/aluminium_trifluoride')
    .itemInputs('3x #forge:dusts/coke')
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 750))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .itemOutputs('4x #forge:ingots/aluminium')
    .duration(300)
    .EUt(40)

  event.recipes.gtceu.electrolytic_cell('u1odxfekjll9ym') // remapped from original line 104
    .notConsumable(safeFluidOf('susy:cryolite', 2592))
    .itemInputs('10x #forge:dusts/alumina')
    .itemInputs('1x #forge:dusts/aluminium_trifluoride')
    .itemInputs('3x #forge:dusts/any_purity_carbon')
    .outputFluids(safeFluidOf('susy:hydrogen_fluoride', 750))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 3000))
    .itemOutputs('4x #forge:ingots/aluminium')
    .duration(100)
    .EUt(40)

  event.recipes.susy.roaster('cmlwe9iimfnchq') // remapped from original line 118
    .inputFluids(safeFluidOf('gtceu:hydrofluoric_acid', 6000))
    .itemInputs('5x #forge:dusts/alumina')
    .outputFluids(safeFluidOf('susy:dense_steam', 9000))
    .itemOutputs('8x #forge:dusts/aluminium_trifluoride')
    .duration(300)
    .EUt(16)

  event.recipes.susy.bubble_column_reactor('82tuvfasstee9q') // remapped from original line 127
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 50))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .outputFluids(safeFluidOf('susy:sodium_fluoride_solution', 50))
    .duration(5)
    .EUt(16)

  event.recipes.gtceu.distillery('t1rldlyq4yktxn') // remapped from original line 135
    .inputFluids(safeFluidOf('susy:sodium_fluoride_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('2x #forge:dusts/sodium_fluoride')
    .duration(200)
    .EUt(7)

  event.recipes.susy.roaster('vwn9bl4l5tkqn7') // remapped from original line 143
    .itemInputs('4x #forge:dusts/aluminium_trifluoride')
    .itemInputs('6x #forge:dusts/sodium_fluoride')
    .itemOutputs('10x #forge:dusts/cryolite')
    .duration(180)
    .EUt(16)

  event.recipes.gtceu.electromagnetic_separator('svmqu01f0mlvzc') // remapped from original line 153
    .inputFluids(safeFluidOf('susy:red_mud', 2000))
    .chancedOutput('5000x #forge:dusts/iron_iii_oxide', 5000, 0)
    .outputFluids(safeFluidOf('susy:concentrated_red_mud', 1000))
    .duration(200)
    .EUt(96)

  event.recipes.gtceu.electric_blast_furnace('o86qj5ljd7qwdq') // remapped from original line 161
    .inputFluids(safeFluidOf('susy:concentrated_red_mud', 2000))
    .itemOutputs('1x #forge:ingots/iron'.first())
    .itemOutputs(metaitem('red_mud_slag'))
    .blastFurnaceTemp(1600)
    .duration(300)
    .EUt(voltAmps[2] * 2)

  event.recipes.gtceu.centrifuge('nhqo310v1qlnrz') // remapped from original line 170
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 250))
    .itemInputs(metaitem('red_mud_slag'))
    .itemOutputs('3x #forge:dusts/tiny_rutile')
    .itemOutputs(metaitem('leached_red_mud_slag'))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('lc7dmgpel6lj5x') // remapped from original line 179
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .itemInputs('14x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:aluminium_sulfate_solution', 6000))
    .duration(100)
    .EUt(96)

  event.recipes.susy.batch_reactor('rem6tl8amyhcix') // remapped from original line 187
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .itemInputs('5x #forge:dusts/alumina')
    .outputFluids(safeFluidOf('susy:aluminium_sulfate_solution', 6000))
    .duration(100)
    .EUt(96)

  event.recipes.gtceu.distillery('2h3ls3hjaibm8m') // remapped from original line 196
    .inputFluids(safeFluidOf('susy:aluminium_sulfate_solution', 6000))
    .itemOutputs('17x #forge:dusts/aluminium_sulfate')
    .outputFluids(safeFluidOf('minecraft:water', 6000))
    .duration(100)
    .EUt(96)

  event.recipes.susy.roaster('ctbfm9vwtwpqrk') // remapped from original line 204
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 3000))
    .itemInputs('2x #forge:dusts/any_purity_aluminium')
    .itemOutputs('17x #forge:dusts/aluminium_sulfate')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .duration(100)
    .EUt(120)

  event.recipes.susy.//CENTRIFUGE('t2r6mxrhri9zdb') // remapped from original line 213

  event.recipes.susy.batch_reactor('uezezuqdzz2ut4') // remapped from original line 221
    .itemInputs('17x #forge:dusts/aluminium_sulfate')
    .inputFluids(safeFluidOf('susy:sodium_bicarbonate_solution', 6000))
    .itemOutputs('14x #forge:dusts/aluminium_hydroxide')
    .outputFluids(safeFluidOf('susy:diluted_sodium_sulfate_solution', 6000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 6000))
    .duration(120)
    .EUt(200)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.CarbonGlobals.*
  // ROASTER = recipemap('roaster')
  // CENTRIFUGE = recipemap('centrifuge')
  // AUTOCLAVE = recipemap('autoclave')
  // BR = recipemap('batch_reactor')
  // EBF = recipemap('electric_blast_furnace')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // BCR = recipemap('bubble_column_reactor')
  // DISTILLERY = recipemap('distillery')
  // EMSEPARATOR = recipemap('electromagnetic_separator')
  // ELECTROLYZER = recipemap('electrolyzer')
  // CRYSTALLIZER = recipemap('crystallizer')
});