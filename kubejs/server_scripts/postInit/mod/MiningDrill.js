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

  event.recipes.susy.mining_drill('j70zye9yvwvtsv') // remapped from original line 6
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(metaitem('rock.orthomagmatic'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('a5ivdsjkeldqyy') // remapped from original line 13
    .notConsumable(safeItemId('1x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.metamorphic'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('mf3do3ypearcca') // remapped from original line 20
    .notConsumable(safeItemId('2x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.sedimentary'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('gwvhvz2ld1roy7') // remapped from original line 27
    .notConsumable(safeItemId('3x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.hydrothermal'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('nurlfhcxop7msi') // remapped from original line 34
    .notConsumable(safeItemId('4x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.alluvial'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('xmnkgd3k4nh2td') // remapped from original line 41
    .notConsumable(safeItemId('5x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.magmatic_hydrothermal'))
    .duration(20)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import classes.*;
  // import net.minecraft.init.Blocks;
  // MINING_DRILL = recipemap('mining_drill')
});