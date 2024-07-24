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

  event.recipes.gtceu.PYROLYSE_OVEN('hqz0jylabfvtaj') // remapped from original line 17
    .itemInputs(metaitem('bio_chaff') * 16)
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .outputFluids(safeFluidOf('gtceu:biomass', 4000))
    .duration(320)
    .EUt(64)

  event.recipes.gtceu.MIXER('ahncosruzjzn9g') // remapped from original line 25
    .itemInputs(metaitem('bio_chaff') * 2)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:biomass', 1000))
    .duration(80)
    .EUt(30)

  event.recipes.gtceu.FERMENTER('azqes7av6bu915') // remapped from original line 33
    .inputFluids(safeFluidOf('gtceu:biomass', 16000))
    .outputFluids(safeFluidOf('gtceu:fermented_biomass', 16000))
    .outputFluids(safeFluidOf('gtceu:methane', 10000))
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.AUTOCLAVE('cv9cmnaxqllmao') // remapped from original line 41
    .itemInputs(safeItemId('4x minecraft:wheat_seeds'))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs(metaitem('malted_grain') * 4)
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.AUTOCLAVE('ho6vuihi0arybz') // remapped from original line 49
    .itemInputs(metaitem('malted_grain') * 2)
    .itemInputs('2x #forge:dusts/wheat')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:mash', 2000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.AUTOCLAVE('dlmddqxa3fh42i') // remapped from original line 58
    .itemInputs(metaitem('malted_grain') * 2)
    .circuit(1)
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:mash', 1000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.MIXER('olripphz47k0lk') // remapped from original line 67
    .itemInputs('2x #forge:dusts/wheat')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:grain_solution', 1000))
    .circuit(4)
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.FERMENTER('s3wzrwlf6rd0rv') // remapped from original line 76
    .inputFluids(safeFluidOf('susy:grain_solution', 16000))
    .outputFluids(safeFluidOf('susy:yeast_solution', 16000))
    .circuit(1)
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.FERMENTER('mkkqej37u9qbdm') // remapped from original line 84
    .inputFluids(safeFluidOf('susy:mash', 16000))
    .inputFluids(safeFluidOf('susy:grain_solution', 1000))
    .outputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .circuit(2)
    .duration(2400)
    .EUt(16)

  event.recipes.gtceu.FERMENTER('tz9ekjzfjtw9we') // remapped from original line 93
    .itemInputs(safeItemId('24x minecraft:sugar'))
    .inputFluids(safeFluidOf('minecraft:water', 16000))
    .inputFluids(safeFluidOf('susy:grain_solution', 1000))
    .outputFluids(safeFluidOf('susy:impure_ethanol', 16000))
    .circuit(3)
    .duration(2400)
    .EUt(16)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def PYROLYSE_OVEN = recipemap('pyrolyse_oven');
  // def DISTILLERY = recipemap('distillery');
  // def MIXER = recipemap('mixer');
  // def DISTILLATION_TOWER = recipemap('distillation_tower');
  // def AUTOCLAVE = recipemap('autoclave');
  // def FERMENTER = recipemap('vat_fermentation');
});