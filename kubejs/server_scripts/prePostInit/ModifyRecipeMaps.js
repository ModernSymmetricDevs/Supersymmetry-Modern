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
    const itemId = itemIdWithQuantifier.includes(" ") ? itemIdWithQuantifier.split(" ")[1] : itemIdWithQuantifier;
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:distillery' });
  event.remove({ type: 'gtceu:distillation_tower' });
  event.remove({ type: 'gtceu:cracker' });
  event.remove({ type: "gtceu:brewery" });
  event.remove({ type: "gtceu:chemical_reactor" });
  event.remove({ type: "gtceu:large_chemical_reactor" });
  event.remove({ type: "gtceu:fermenter" });
  event.remove({ type: "gtceu:pyrolyse_oven" });
  event.remove({ type: "gtceu:implosion_compressor" });
  event.remove({ type: "gtceu:laser_engraver" });
  event.remove({ type: "gtceu:vacuum_freezer" });
  event.remove({ type: "gtceu:electrolyzer" });

  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:butane')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:propane')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/brick'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/reinforced_epoxy_resin'})
  // event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('susy:gtfo_baking_soda_solution')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/fireclay'})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:sand')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:ender_air')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/plutonium'})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:nether_air')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:air')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:redstone')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/metal_mixture'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/platinum_sludge_residue'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/uranium'})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:lead_zinc_solution')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:mycelium')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/stibnite'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/platinum_group_sludge' && safeFluidOf('gtceu:aqua_regia')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:glowstone_dust')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/stone'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/cinnabar'})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:green_sapphire_slurry')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:sapphire_slurry')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:ruby_slurry')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/endstone'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/meat'})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:dirt')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:grass')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/marble'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/ash'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/tricalcium_phosphate'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/samarium_magnetic'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/neodymium_magnetic'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/phosphorus_pentoxide'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/iridium_metal_residue'})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:soul_sand')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('gtceu:rubber_log')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:refinery_gas')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('gtceu:oilsands_ore')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:uranium_hexafluoride')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:deuterium')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:helium')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/netherrack'})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('gtceu:hydrogen')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/realgar'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/granite'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/granite_black'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/rare_earth'})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:blaze_powder')})
  event.remove({ type: 'gtceu:centrifuge', input: safeFluidOf('minecraft:lava')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/iron_magnetic'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/steel_magnetic'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/damascus_steel'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/redrock'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/annealed_copper'})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:persimmon')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:porkchop')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:pumpkin_pie')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('quark:golden_frog_leg')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:rabbit_stew')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:beef')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:potato')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:pear')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_porkchop')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:rabbit')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:rotten_flesh')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:red_mushroom')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:beetroot')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:golden_carrot')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:mutton')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:berries')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:melon')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:nether_wart')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:apple')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:fish')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:fish')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:fish')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:fish')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:filled_honeycomb')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:bread')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:chorus_fruit')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('quark:cooked_frog_leg')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_fish')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_fish')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:chicken')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_rabbit')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:golden_apple')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:golden_apple')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('quark:frog_leg')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_beef')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:shroompowder')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:brown_mushroom')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_chicken')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('quark:crab_leg')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:peach')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:mushroom_stew')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('quark:cooked_crab_leg')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:baked_potato')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:beetroot_soup')})
  // event.remove({ type: 'gtceu:centrifuge', input: safeItemId('biomesoplenty:ricebowl')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:poisonous_potato')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:spider_eye')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cookie')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:cooked_mutton')})
  event.remove({ type: 'gtceu:centrifuge', input: safeItemId('minecraft:carrot')})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/yellow_limonite'})
  event.remove({ type: 'gtceu:centrifuge', input: '#forge:dusts/brown_limonite'})
  event.remove({ type: 'gtceu:mixer', input: '#forge:dusts/sodium_bicarbonate' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:forge_hammer', input: safeItemId('gtceu:bauxite_ore')})
  event.remove({ type: 'gtceu:macerator', input: safeItemId('gtceu:bauxite_ore')})
  event.remove({ type: 'gtceu:assembler', input: safeItemId('minecraft:brick')})

  // not necessary I guess, if that was the case, it'd look something like:
  /*
              GTCEuAPI.materialManager.getRegisteredMaterials().forEach(material -> {
                if(material.hasProperty(PropertyKey.FLUID) &&
                        material.getProperty(PropertyKey.FLUID).getPrimaryKey() == SuSyFluidStorageKeys.SLURRY) {
                    GTRecipeTypes.EXTRACTOR_RECIPES.getLookup().getLookup().getRecipes(false);
                    bla bla
                }
            });
  */
  // GregTechAPI.materialManager.getRegisteredMaterials().forEach(material -> {
  //         if (material.hasProperty(PropertyKey.FLUID) && material.getProperty(PropertyKey.FLUID).getPrimaryKey() == SusyFluidStorageKeys.SLURRY) {
  //                 Recipe recipe = RecipeMaps.EXTRACTOR_RECIPES.findRecipe(Integer.MAX_VALUE, Collections.singletonList(OreDictUnifier.get(OrePrefix.dust, material)), Collections.emptyList(), false);
  //                 if (recipe != null) {
  //                         RecipeMaps.EXTRACTOR_RECIPES.removeRecipe(recipe);
  //                 }
  //         }
  // });
});