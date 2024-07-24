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

  event.recipes.gtceu.alloy_smelter('0fx9mxgthhnqqp') // remapped from original line 7
    .itemInputs('6x #forge:dusts/bismuth')
    .itemInputs('4x #forge:dusts/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.alloy_smelter('6jkfutyfadhbdx') // remapped from original line 15
    .itemInputs('6x #forge:dusts/bismuth')
    .itemInputs('4x #forge:ingots/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.alloy_smelter('xss25m98xzc5mp') // remapped from original line 23
    .itemInputs('6x #forge:ingots/bismuth')
    .itemInputs('4x #forge:dusts/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.alloy_smelter('setmrhq4liahnk') // remapped from original line 31
    .itemInputs('6x #forge:ingots/bismuth')
    .itemInputs('4x #forge:ingots/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('b7g9lcjugwjos5') // remapped from original line 39
    .itemInputs('3x #forge:dusts/indium')
    .itemInputs('1x #forge:dusts/tiny_silver')
    .itemOutputs('3x #forge:dusts/cryogenic_solder')
    .duration(120)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // EBF = recipemap('electric_blast_furnace')
  // MIXER = recipemap('mixer')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // crafting.addShaped("susy:cryogenic_solder", metaitem('dustCryogenicSolder') * 3, [
  //         [ore('dustIndium'), ore('dustIndium'), ore('dustIndium')],
  //         [ore('dustTinySilver'), null, null],
  //         [null, null, null]
  // ])
});