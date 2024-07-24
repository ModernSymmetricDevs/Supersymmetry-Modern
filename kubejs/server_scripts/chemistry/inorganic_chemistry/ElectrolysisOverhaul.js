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

  event.recipes.gtceu.electrolyzer('cirldbhhxnpyex') // remapped from original line 12
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('susy:potassium_bisulfate', 2016))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .itemOutputs('12x #forge:dusts/potassium_persulfate')
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.electrolyzer('dtrqc62ambwajz') // remapped from original line 22
    .notConsumable(metaitem('graphite_electrode'))
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('minecraft:water', 4000))
    .itemInputs('2x #forge:dusts/salt')
    .outputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .outputFluids(safeFluidOf('susy:sodium_chlorate_solution', 1000))
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.distillery('vnghsatggmdcde') // remapped from original line 33
    .inputFluids(safeFluidOf('susy:sodium_chlorate_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs(safeItemId('5x gregtechfoodoption:sodium_chlorate_dust'))
    .EUt(16)
    .duration(100)

  event.recipes.gtceu.electrolyzer('blfstjmgzsvbxb') // remapped from original line 41
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(1500)

  event.recipes.gtceu.electrolytic_cell('lxh6x2xdci3qxz') // remapped from original line 51
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable('1x #forge:rods/iron')
    .notConsumable(safeFluidOf('susy:sodium_hydroxide_solution', 50))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 2000))
    .outputFluids(safeFluidOf('gtceu:oxygen', 1000))
    .EUt(30)
    .duration(400)

  event.recipes.gtceu.electrolytic_cell('jcrmwpf0xcl1km') // remapped from original line 63
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .outputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .EUt(30)
    .duration(720)

  event.recipes.gtceu.electrolytic_cell('pedut1hdxdpzpc') // remapped from original line 76
    .notConsumable('1x #forge:rods/nickel')
    .notConsumable(metaitem('graphite_electrode'))
    .inputFluids(safeFluidOf('susy:potassium_chloride_solution', 2000))
    .inputFluids(safeFluidOf('minecraft:water', 2000))
    .outputFluids(safeFluidOf('gtceu:chlorine', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrogen', 1000))
    .outputFluids(safeFluidOf('susy:diluted_rock_salt_solution', 2000))
    .outputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 1000))
    .EUt(30)
    .duration(720)

  event.recipes.gtceu.distillation_tower('f0mabocxs01ps6') // remapped from original line 89
    .inputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .EUt(16)
    .duration(60)

  event.recipes.gtceu.distillery('n2in2zvofwahzf') // remapped from original line 97
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('3x #forge:dusts/sodium_hydroxide')
    .EUt(16)
    .duration(60)

  event.recipes.gtceu.distillery('0ch3ofgmyqupxq') // remapped from original line 105
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .itemOutputs('3x #forge:dusts/potassium_hydroxide')
    .EUt(16)
    .duration(60)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // ELECTROLYZER = recipemap('electrolyzer')
  // ELECTROLYTIC_CELL = recipemap('electrolytic_cell')
  // DISTILLATION_TOWER = recipemap('distillation_tower')
  // DISTILLERY = recipemap('distillery')
});