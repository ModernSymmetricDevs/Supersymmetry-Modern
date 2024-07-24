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

  event.recipes.gtceu.mixer('yiotimone5ae9e') // remapped from original line 7
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .itemInputs('1x #forge:dusts/tiny_ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 100))
    .duration(5)
    .EUt(7)

  event.recipes.gtceu.mixer('uolmedbr1tlhxf') // remapped from original line 15
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .itemInputs('1x #forge:dusts/tiny_dark_ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 100))
    .duration(5)
    .EUt(7)

  event.recipes.gtceu.mixer('np2klns70hgpdq') // remapped from original line 23
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('1x #forge:dusts/ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 1000))
    .duration(40)
    .EUt(7)

  event.recipes.gtceu.mixer('mxs6rvp4hcti9k') // remapped from original line 31
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemInputs('1x #forge:dusts/dark_ash')
    .outputFluids(safeFluidOf('susy:ash_slurry', 1000))
    .duration(40)
    .EUt(7)

  event.recipes.gtceu.sifter('roxcc5mivhw551') // remapped from original line 39
    .inputFluids(safeFluidOf('susy:flue_gas', 16000))
    .itemInputs('5x #forge:dusts/calcite')
    .outputFluids(safeFluidOf('susy:desulfurized_flue_gas', 16000))
    .itemOutputs('5x #forge:dusts/calcium_sulfite')
    .duration(160)
    .EUt(30)

  event.recipes.susy.roaster('egxnjdj7e0g8y5') // remapped from original line 48
    .itemInputs('5x #forge:dusts/calcium_sulfite')
    .circuit(1)
    .outputFluids(safeFluidOf('gtceu:sulfur_dioxide', 1000))
    .itemOutputs('2x #forge:dusts/quicklime')
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('suilsb9qurvjyi') // remapped from original line 57
    .inputFluids(safeFluidOf('gtceu:air', 1500))
    .itemInputs('5x #forge:dusts/calcium_sulfite')
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .duration(80)
    .EUt(30)

  event.recipes.susy.roaster('6dxse2bkgzebxt') // remapped from original line 65
    .inputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .itemInputs('5x #forge:dusts/calcium_sulfite')
    .itemOutputs('6x #forge:dusts/calcium_sulfate')
    .duration(80)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // MIXER = recipemap('mixer')
  // SIFTER = recipemap('sifter')
  // ROASTER = recipemap('roaster')
});