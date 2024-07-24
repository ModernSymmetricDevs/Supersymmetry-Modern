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

  event.recipes.susy.ROASTER_RECIPES('valfqtsw1rhrob') // remapped from original line 10
    .itemInputs('2x #forge:dusts/pyrite')
    .itemOutputs('1x #forge:dusts/iron_iii_sulfate')
    .itemOutputs('1x #forge:dusts/sulfur')
    .duration(80)
    .EUt(7)

  event.recipes.susy.ROASTER_RECIPES('lydzcl0sj0dyie') // remapped from original line 18
    .itemInputs('1x #forge:dusts/iron_iii_sulfate')
    .itemOutputs('1x #forge:dusts/banded_iron')
    .outputFluids(safeFluidOf('gtceu:sulfur_trioxide', 3000))
    .duration(160)
    .EUt(7)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def ROASTER_RECIPES = recipemap('roaster');
});